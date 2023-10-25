import { compare, hash } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import User from "../models/user_model";
import http_response from "../helpers/http_response";

const sign_up = async (body) => {
  try {
    let { name, email, password } = body;
    if (password.length <= 4)
      return http_response.error_response({ message: "Senha ter mais de 4 caracteres" })
    password = await hash(password, 15)
    await new User({ name, email, password }).save()
    return http_response.success_response({ message: "Usuário criado" })
  } catch (error) {
    if (error.code === 11000)
      return http_response.error_response({ message: "E-mail já cadastrado" })
    return http_response.error_response({ message: JSON.stringify(error) })
  }
}

const sign_in = async (body) => {
  try {
    const { email, password } = body;

    const user = await User.findOne({ email })
    if (!user)
      return http_response.error_response({ message: "Usuário não encontrado" })

    const password_valid = await compare(password, user.password);
    if (!password_valid)
      return http_response.error_response({ message: "Email e/ou senha inválidos" })

    const token = sign({ user }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_REFRESH_EXPIRATION
    });
    return http_response.success_response({ message: "sucesso", token })
  } catch (error) {
    return http_response.error_response({ message: JSON.stringify(error) })
  }
}

const authorizer = (request, response, next) => {
  const token = request.headers.authorization
  if (!token) return response.status(401).send("Acesso negado. Token não enviado")
  try {
    const payload = verify(token, process.env.JWT_SECRET)
    if (!payload.user)
      return response.status(401).send("Token invalido")

    request.headers['user'] = payload.user
    return next()
  } catch (error) {
    return response.status(401).send("Token invalido")
  }
}

export default { authorizer, sign_in, sign_up }
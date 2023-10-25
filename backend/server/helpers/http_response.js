const success_response = (params) => {
  if (params.message.includes("sucesso"))
    return { status: 200, ...params }
  if (params.message.includes("criado"))
    return { status: 201, ...params }
}

const error_response = (params) => {
  if (params.message.includes("não encontrado"))
    return { status: 404, ...params }
  if (params.message.includes("inválido") || params.message.includes("mais de") | params.message.includes("já cadastrado"))
    return { status: 400, ...params }
  return { status: 500, ...params }
}

export default { success_response, error_response }
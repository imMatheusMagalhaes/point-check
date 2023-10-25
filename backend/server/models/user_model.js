import mongoose from "mongoose"
import moment from 'moment'
moment.locale('pt-br');

const validateEmail = (email) =>
	/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)


const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: 'É necessário um endereço de e-mail',
		validate: [validateEmail, 'Por favor preencha um endereço de e-mail válido'],
	},
	name: {
		type: String,
		required: 'É necessário um nome',
		minlength: [10, 'Nome muito pequeno'],
	},
	password: {
		type: String,
		required: 'É necessário uma senha',
	},
	createdAt: {
		type: Date,
		get: (date) => moment(new Date(date)).format('L'),
	},
	updatedAt: {
		type: Date,
		get: (date) => moment(new Date(date)).format('L')
	},
}, {
	timestamps: true,
	versionKey: false,
	toJSON: { getters: true },
	toObject: { getters: true },
	id: false
});

const User = mongoose.model("User", UserSchema);

export default User
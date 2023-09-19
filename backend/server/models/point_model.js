import mongoose from "mongoose"
import moment from 'moment'
moment.locale('pt-br');

const PointSchema = new mongoose.Schema({
	projects: {
		type: Array,
		required: true,
	},
	inputTime: {
		type: Date,
		required: true,
		get: (date) => moment(new Date(date)).format('LT')
	},
	outputTime: {
		type: Date,
		get: (date) => moment(new Date(date)).format('LT')
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

const Point = mongoose.model("Point", PointSchema);

export default Point
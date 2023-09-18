import mongoose from "mongoose"

const PointSchema = new mongoose.Schema({
	inputTime: {
		type: Date,
		required: true,
	},
	outputTime: {
		type: Date,
	},
	projects: {
		type: Array
	}
}, {
	timestamps: true,
	versionKey: false
});

const Point = mongoose.model("Point", PointSchema);

export default Point
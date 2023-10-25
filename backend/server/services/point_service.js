import moment from "moment";
import Point from "../models/point_model";

moment.locale("pt-br");

const get_current_time = () => moment();

const format_time = (time) => moment(time).format("lll");

const get_input_without_output = async (userId) =>
	await Point.findOne({
		userId,
		outputTime: {
			$exists: false,
		},
	});

const create = async (body) => {
	const point = await new Point(body).save();
	return point;
};

const set_input = async (body, headers) => {
	const { _id } = headers.user
	const inputs_without_output = await get_input_without_output(_id);
	const current_time = moment(body?.time) ?? get_current_time();
	const projects = body?.projects ?? [];
	if (!inputs_without_output) {
		await new Point({
			inputTime: current_time,
			userId: _id,
			projects,
		}).save();
		return {
			message: "entrada registrada.",
			time: format_time(current_time),
		};
	} else return { message: "entrada já registrada hoje." };
};

const set_output = async (body, headers) => {
	const { _id } = headers.user
	const lastPoint = await get_input_without_output(_id);
	if (lastPoint) {
		const current_time = moment(body?.time) ?? get_current_time();
		await Point.updateOne({ _id: lastPoint._id }, { outputTime: current_time });
		return { message: "saida registrada.", time: format_time(current_time) };
	} else return { message: "nenhuma entrada registrada." };
};

const update_projects = async (body, headers) => {
	const { _id } = headers.user
	const { projects } = body;
	const lastPoint = await get_input_without_output(_id);
	if (lastPoint) {
		const db_projects = [...lastPoint.projects, ...projects];
		await Point.updateOne({ _id: lastPoint._id }, { projects: db_projects });
		return { message: `${lastPoint._id} - atualizado` };
	} else return { message: "nenhuma entrada registrada." };
};

const get_all = async (headers) => {
	const { _id } = headers.user
	return await Point.find({ userId: _id }).sort({ createdAt: 1 });
};

export default {
	create,
	set_input,
	set_output,
	get_all,
	update_projects,
	get_input_without_output,
};

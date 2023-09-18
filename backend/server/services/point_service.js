import moment from 'moment'
import Point from '../models/point_model';
moment.locale('pt-br');

const get_current_time = () => moment()

const format_time = (time) => moment(time).format('lll')

const get_inputs_without_output = async () => await Point.findOne({
	outputTime: {
		$exists: false
	}
})

const set_input = async (body) => {
	const inputs_without_output = await get_inputs_without_output()
	const current_time = moment(body?.time) ?? get_current_time()
	const projects = body?.projects ?? []
	if (!inputs_without_output) {
		const point = await new Point({
			inputTime: current_time,
			projects
		}).save()
		return { message: "entrada registrada.", time: format_time(point.inputTime) }
	} else return { message: "entrada já registrada hoje." }
}

const set_output = async (body) => {
	const lastPoint = await get_inputs_without_output()
	if (lastPoint) {
		const current_time = moment(body?.time) ?? get_current_time()
		await Point.updateOne({ _id: lastPoint._id }, { outputTime: current_time })
		return { message: "saida registrada.", time: format_time(current_time) }
	} else return { message: "nenhuma entrada registrada." }
}

const update_projects = async (body) => {
	const lastPoint = await get_inputs_without_output()
	if (lastPoint) {
		const current_time = moment(body?.time) ?? get_current_time()
		await Point.updateOne({ _id: lastPoint._id }, { outputTime: current_time })
		return { message: "saida registrada.", time: format_time(current_time) }
	} else return { message: "nenhuma entrada registrada." }

}



export default { set_input, set_output, get_inputs_without_output }

import cron from "node-cron"
import Point from "../models/point_model"

const end_point = async () => {
	await Point.updateMany({
		outputTime: {
			$exists: false
		}
	},
		{
			outputTime: new Date(0)
		}
	)
}

const run_schedule = () => {
	console.log("run_schedule");
	cron.schedule("0 00 * * 0-6", end_point);
}

export default { run_schedule }
import mongoose from "mongoose"

const username = process.env.USERNAME_DATABASE;
const password = process.env.PASSWORD_DATABASE;
const cluster = process.env.CLUSTER_DATABASE;
const dbname = process.env.DBNAME_DATABASE;

const db_url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connect = () => {
	mongoose.connect(db_url,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	);
}

const database_start = () => {
	connect()
	const db = mongoose.connection;
	db.on("error", () => { console.error(console, "connection error: ") });
	db.once("open", () => {
		console.debug(`${dbname} database connects`);
	});
}

export default database_start
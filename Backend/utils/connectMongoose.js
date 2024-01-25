import mongoose from "mongoose";
import "dotenv/config";

// eine etwas erweiterte Funktion, die die Collections der Datenbank anzeigt

async function connectMongoose() {
	const { DB_NAME, DB_USER, DB_PASSWORD, DB_CLUSTER } = process.env;
	const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;

	try {
		await mongoose.connect(URI);
		// Zeigt collections der DAtenbank (also _database) an
		const collections = (
			await mongoose.connection.db.listCollections().toArray()
		).map((el) => el.name);
		console.log(`collections of '${DB_NAME}' db`, collections);
		return true;
	} catch (error) {
		console.error("Could not connect to mongoose", error);
		return false;
	}
}

export { connectMongoose };

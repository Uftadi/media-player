import mongoose from "mongoose";
import "dotenv/config";

async function connectMongoose() {
	const { DB_NAME, DB_USER, DB_PASSWORD, DB_CLUSTER } = process.env;

	const URI =
		"mongodb+srv://agueler61:G4cpMUMRNu4Zpi8r@cluster0.9hhoy2w.mongodb.net/";

	try {
		await mongoose.connect(URI);

		const collections = (
			await mongoose.connection.db.listCollections().toArray()
		).map((el) => el.name);
		return true;
	} catch (error) {
		console.error("Could not connect to mongoose", error);
		return false;
	}
}

export default connectMongoose;

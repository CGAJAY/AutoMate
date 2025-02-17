import { connect } from "mongoose";

// Function to connect to the database
const connectDb = async () => {
	try {
		// Connect to the MongoDB database using the MONGO_URI
		await connect(process.env.MONGO_URI);

		// Log a message to the console if the connection is successful
		console.log("Database connected successfully");
	} catch (error) {
		// Log an error message to the console if the connection fails
		console.log("Database connection error", error);

		// Exit the process with an error code
		process.exit(1);
	}
};

export default connectDb;

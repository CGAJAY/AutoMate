import { Schema, model } from "mongoose";

// Define the schema for the User model
const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},

		email: {
			type: String,
			required: true,
		},

		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

// Create the User model
const User = model("User", UserSchema);

export default User;

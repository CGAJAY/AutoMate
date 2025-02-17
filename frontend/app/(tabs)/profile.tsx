import React from "react";
import { View, Text, Button } from "react-native";
import useAuthStore from "../_store/useAuthStore";

export default function ProfileScreen() {
	const { user, logout } = useAuthStore();

	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text>Profile</Text>
			<Text>Email: {user?.email}</Text>
			<Text>Role: {user?.role}</Text>
			<Button title="Logout" onPress={logout} />
		</View>
	);
}

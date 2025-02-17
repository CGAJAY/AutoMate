import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	Alert,
} from "react-native";
import { Link, router } from "expo-router";
import useAuthStore from "../_store/useAuthStore";

export default function SignupScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState<
		"customer" | "garage_owner"
	>("customer");
	const { signup, isSigningUp } = useAuthStore();

	const handleSignup = async () => {
		const { success, message } = await signup(
			email,
			password,
			role
		);
		if (success) {
			router.replace("/(tabs)"); // Redirect to tabs after signup
		} else {
			Alert.alert("Error", message);
		}
	};

	return (
		<View style={{ padding: 20 }}>
			<Text>Signup</Text>
			<TextInput
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				style={{
					borderWidth: 1,
					padding: 10,
					marginBottom: 10,
				}}
			/>
			<TextInput
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={{
					borderWidth: 1,
					padding: 10,
					marginBottom: 10,
				}}
			/>
			<Button
				title="Signup"
				onPress={handleSignup}
				disabled={isSigningUp}
			/>
			<Link href="/(auth)/login" asChild>
				<Text style={{ marginTop: 10, color: "blue" }}>
					Already have an account? Login
				</Text>
			</Link>
		</View>
	);
}

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

export default function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { login, isLoggingIn } = useAuthStore();

	const handleLogin = async () => {
		const { success, message } = await login(
			email,
			password
		);
		if (success) {
			router.replace("/(tabs)"); // Redirect to tabs after login
		} else {
			Alert.alert("Error", message);
		}
	};

	return (
		<View style={{ padding: 20 }}>
			<Text>Login</Text>
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
				title="Login"
				onPress={handleLogin}
				disabled={isLoggingIn}
			/>
			<Link href="/(auth)/signup" asChild>
				<Text style={{ marginTop: 10, color: "blue" }}>
					Don't have an account? Sign up
				</Text>
			</Link>
		</View>
	);
}

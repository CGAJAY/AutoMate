import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

interface AuthStore {
	user: { email: string; role: string } | null;
	isLoggingIn: boolean;
	isSigningUp: boolean;
	login: (
		email: string,
		password: string
	) => Promise<{ success: boolean; message: string }>;
	signup: (
		email: string,
		password: string,
		role: string
	) => Promise<{ success: boolean; message: string }>;
	logout: () => Promise<void>;
	checkAuth: () => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
	user: null,
	isLoggingIn: false,
	isSigningUp: false,

	login: async (email: string, password: string) => {
		set({ isLoggingIn: true });
		try {
			const response = await axios.post(
				"http://localhost:5000/api/auth/login",
				{ email, password }
			);
			const { token, user } = response.data;

			await SecureStore.setItemAsync("token", token);
			await AsyncStorage.setItem(
				"user",
				JSON.stringify(user)
			);

			set({ user });
			return { success: true, message: "Login successful" };
		} catch (error: any) {
			return {
				success: false,
				message:
					error.response?.data?.message || "Login failed",
			};
		} finally {
			set({ isLoggingIn: false });
		}
	},

	signup: async (
		email: string,
		password: string,
		role: string
	) => {
		set({ isSigningUp: true });
		try {
			await axios.post(
				"http://localhost:5000/api/auth/signup",
				{ email, password, role }
			);
			return {
				success: true,
				message: "Signup successful",
			};
		} catch (error: any) {
			return {
				success: false,
				message:
					error.response?.data?.message || "Signup failed",
			};
		} finally {
			set({ isSigningUp: false });
		}
	},

	logout: async () => {
		await SecureStore.deleteItemAsync("token");
		await AsyncStorage.removeItem("user");
		set({ user: null });
	},

	checkAuth: async () => {
		const token = await SecureStore.getItemAsync("token");
		const userData = await AsyncStorage.getItem("user");

		if (token && userData) {
			set({ user: JSON.parse(userData) });
		}
	},
}));

export default useAuthStore;

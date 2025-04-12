"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const isPasswordMatch = form.password === form.confirmPassword;

  const isFormValid = isSignUp
    ? form.name &&
      form.email &&
      form.phone &&
      form.password &&
      form.confirmPassword &&
      form.terms &&
      isPasswordMatch
    : form.email && form.password;

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="pt-32 pb-16 px-4 min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center">
      <motion.div
        className="w-full max-w-md p-6 rounded-xl bg-white/80 dark:bg-zinc-900/70 backdrop-blur shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-1">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {isSignUp
              ? "Get ready for a seamless automotive experience!"
              : "Login to continue your journey."}
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setIsSignUp(false)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              !isSignUp
                ? "bg-[var(--primary)] text-white"
                : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              isSignUp
                ? "bg-[var(--primary)] text-white"
                : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-10 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600 dark:text-gray-300"
            >
              {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
            </button>
          </div>

          {isSignUp && (
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              {!isPasswordMatch && form.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">
                  Passwords do not match
                </p>
              )}
            </div>
          )}

          {isSignUp && (
            <label className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <input
                type="checkbox"
                name="terms"
                checked={form.terms}
                onChange={handleChange}
                className="h-4 w-4 mt-1 text-blue-500 border-gray-300 rounded"
              />
              <span>
                I accept the{" "}
                <a
                  href="/terms-and-conditions"
                  target="_blank"
                  className="text-[var(--primary)] underline"
                >
                  terms & conditions
                </a>
              </span>
            </label>
          )}

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: isFormValid ? 1.02 : 1 }}
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 rounded-lg text-sm font-medium transition shadow-md ${
              isFormValid
                ? "bg-[var(--primary)] text-white hover:shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AuthPage;

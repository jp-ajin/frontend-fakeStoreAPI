import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/http";

function LoginPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault(); //evitar la recarga del form

		if (!username || !password) {
			setError("LLenar los campos");
			return;
		}

		//simulacion validacion login
		/* if (username === "user" && password === "pass") {
			setError("");
			alert("Bienvenido");
		} else {
			setError("Credenciales incorrectas");
		} */

		//validacion de credenciales
		try {
			const data = await auth(username, password);
			localStorage.setItem("token", data.token);
			localStorage.setItem("userName", username);

			navigate("/dashboard", {
				replace: true,
			});
			//setError("");
		} catch (error) {
			setError("Credenciales incorrectas");
		}
	};
	return (
		<div className="main flex justify-center items-center h-screen bg-[#01101d]">
			<div className="login-page w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div className="test p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
						Login
					</h1>
					<form className="space-y-4 md:space-y-6">
						<div className="form-group">
							<label
								htmlFor="user"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Nombre de Usuario
							</label>
							<input
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								name="user"
								required=""
								type="text"
								placeholder="Usuario"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Contrasena
							</label>
							<input
								className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								name="password"
								type="password"
								placeholder="Contrasena"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						{error && <p className="erro text-red-400">{error}</p>}
						<button
							className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							onClick={handleLogin}
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export { LoginPage };

import React, { useState } from "react";
import fetchLogin from "../services/login";
import { useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetchLogin(username, password);

			if (response?.status === true) {
				const datos = JSON.parse(response?.data);
				const token = datos.userToken;
				localStorage.setItem("token", token);
				navigate("/proximate/services");
			} else {
				console.error("Login error:", response.status);
			}
		} catch (error) {
			console.error("Error al realizar la solicitud:", error);
		}
	};

	return (
		<>
			<div className="login-form">
				<form onSubmit={handleSubmit}>
					<div className="content">
						<div className="input-field">
							<input
								type="text"
								autoComplete="nope"
								required
								placeholder="User"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="input-field">
							<input
								type="password"
								autoComplete="nope"
								required
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="action">
						<button type="submit">Login</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Login;

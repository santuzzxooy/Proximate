import React from "react";

const hasCredentials = !!localStorage.getItem("token");
const handleLogin = () => {
	window.location.href = "/proximate/login";
};

function Home() {
	return (
		<>	
			{!hasCredentials && (
				<div className="log-card">
					<div className="log-cardss">
						<h1>You don't have access</h1>
						<p>Please login to get home</p>
						<button className="btn" onClick={handleLogin}>Go to login</button>
					</div>
						
				</div>
			)}
			{hasCredentials && (
			<div className="contenedorCentrado">

				<h1>Bienvenido</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>

				<img
					className="imagenn"
					src="https://media.tenor.com/-we_p90HDd8AAAAi/hola-pocoyo.gif"
					alt="???"
				/>
			</div>
			)}
		</>
	);
}

export default Home;

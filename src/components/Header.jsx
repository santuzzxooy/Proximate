import React from "react";

function Header() {
	return (
		<header>
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<a href="https://www.xtracking.co/" className="flex items-center">
						<img
							src="https://imgur.com/VTv3K9k.jpg"
							className="mr-3 h-6 sm:h-9"
							alt="Logo"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							ProximateTest
						</span>
					</a>
				</div>
			</nav>
		</header>
	);
}

export default Header;

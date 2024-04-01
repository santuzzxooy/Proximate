import React, { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import fetchProducts from "../services/products";

function Services() {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const token = localStorage.getItem("token");
			const response = await fetchProducts(token);
			console.log(response);
			if (response?.status === true) {
				const data = JSON.parse(response?.data);
				setProducts(data.products);
				console.log(data);
			}

			setTimeout(() => {
				setLoading(false);
			}, 4000);
		};

		fetchData();
	}, []);

	return (
		<div className="loader">
			{loading ? (
				<ScaleLoader
					color="rgba(204, 85, 17, 1)"
					height={150}
					radius={22}
					speedMultiplier={1.5}
					width={20}
				/>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{products.map((product) => (
						<div
							key={product.id}
							className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4"
						>
							<a href={product.path}>
								<img
									className="rounded-t-lg"
									src={product.image}
									alt={product.title}
								/>
							</a>
							<div className="p-5">
								<a href={product.path}>
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										{product.title}
									</h5>
								</a>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
									{product.shortDescription}
								</p>
								<a
									href={product.path}
									className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Read more
									{/* SVG y otros elementos pueden ir aquí si se necesita */}
								</a>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Services;

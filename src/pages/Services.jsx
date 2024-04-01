import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import fetchProducts from "../services/products";

function Services() {
	const hasCredentials = !!localStorage.getItem("token");
	const navigate = useNavigate();
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
			}, 1200);
		};

		fetchData();
	}, []);

    const handleReadMore = (productId) => {
        navigate(`/services/${productId}`);
    };

	const handleLogin = () => {
		window.location.href = "/login";
	};

	
	return (
		<div>
			<div className="loader">
			<div>
				{!hasCredentials && (
					<div className="log-card">
						<div className="log-cardss">
							<h1>You don't have access</h1>
							<p>Please login to get the products</p>
							<button className="btn" onClick={handleLogin}>Go to login</button>
						</div>
						
					</div>
				)}
        	</div>
			{loading ? (
				<ScaleLoader
					color="rgba(204, 85, 17, 1)"
					height={150}
					radius={22}
					speedMultiplier={1.5}
					width={20}
				/>
			) : (
				<div className="card-container">
					{products.map((product) => (
						<div className="card">
							<a href="" className="btn" onClick={(e) => { e.preventDefault(); handleReadMore(product.id); }}>
								<img
									className="rounded-t-lg"
									src={product.image}
									onerror="this.onerror=null; this.src='https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-icon-of-unavailable-image-illustration-in-vector-with-flat-design-vector-png-image_40969994.jpg'"
									alt="image doesn't exist"
								/>
							</a>
							<div className="card-content">
								<h3>{product.title}</h3>
								<p>{product.shortDescription}</p>
								<a href="#" className="btn" onClick={(e) => { e.preventDefault(); handleReadMore(product.id); }}>Read more</a>
							</div>
						</div>
					))}
				</div>
				
			)}
			
		</div>
		</div>
	);
}

export default Services;

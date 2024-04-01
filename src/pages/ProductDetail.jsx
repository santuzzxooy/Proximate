import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchProductById from "../services/fetchProductById";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchProductById(id);
            if (response?.status === true) {
                const data = JSON.parse(response?.data);
                setProduct(data.product);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="card-container">
            {product ? (
                <div className="card">
					<a href="" className="btn" onClick={(e) => { e.preventDefault(); handleReadMore(product.id); }}>
						<img
							className="rounded-t-lg"
							src={product.image?product.image:"https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-icon-of-unavailable-image-illustration-in-vector-with-flat-design-vector-png-image_40969994.jpg"}
							alt="image doesn't exist"
						/>
					</a>
					<div className="card-content">
						<h3>{product.title}</h3>
						<p>{product.shortDescription}</p>
					<a href="#" className="btn" onClick={(e) => { e.preventDefault(); handleReadMore(product.id); }}>Read more</a>
					</div>
				</div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductDetail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchProducts from "../services/products";

function ProductDetail() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const response = await fetchProducts(token);
            console.log(response);
            if (response?.status === true) {
                const data = JSON.parse(response?.data);
                setProducts([data.products[id - 1]]);
                const product = (data.products);
                console.log(product);
            }
        };

        fetchData();
    },);

    const handleBack = () => {
		window.location.href = "/services";
	};

    return (
        <div>
            
            <div className="log-card">
                <div className="log-cardss">
                <h1>Detail:</h1>
                </div>
            </div>
            
<div className="log-card">
{products.map((product) => (
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={product.image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.shortDescription}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.longDescription}</p>
        <a href="#" onClick={handleBack} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Go back to products
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
))}
</div>


            <div className="card-container">

            </div>
        </div>
    );
}

export default ProductDetail;
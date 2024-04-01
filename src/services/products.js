export default function fetchProducts(token) {
	const url =
		"https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/getproducts";
	const payload = {
		userToken: token,
	};

	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(payload),
	})
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error(
				"There has been a problem with your fetch operation:",
				error
			);
		});
}
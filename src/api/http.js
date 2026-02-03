export async function auth(username, password) {
	const response = await fetch("https://fakestoreapi.com/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username,
			password,
		}),
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Erro al autenticar usuario");
	}
	return data;
}

export async function getProduct() {
	const resProd = await fetch("https://fakestoreapi.com/products");

	const products = await resProd.json();
	if (!resProd.ok) {
		throw new Error(products.message || "Error al obtener Productos");
	}
	return products;
}

export async function createProduct(data) {
	const resAddProd = await fetch("https://fakestoreapi.com/products", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(data),
	});
	const resp = await resAddProd.json();

	if (!resAddProd.ok) {
		throw new Error(resp.message || "Erro al crear producto");
	}
	return resp;
}

/*
{
			id: 0,
			title: "string",
			price: 0.1,
			description: "string",
			category: "string",
			image: "http://example.com",
		}
			*/

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
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
*/

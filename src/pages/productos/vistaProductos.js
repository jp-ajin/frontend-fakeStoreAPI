import React, { useState, useEffect } from "react";
import { getProduct } from "../../api/http";

function VistaProductos() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const resProducts = await getProduct();
				console.log("🚀 ~ fetchProducts ~ resProducts:", resProducts);
				setProducts(resProducts);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		fetchProducts();
	}, []);

	if (loading) return <p>Cargando Productos...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<h2 className="p-10 text-center text-3xl font-bold">Lista productos</h2>

			<div className="grid grid-cols-4 gap-4">
				{products.map((product) => (
					<div key={product.id} className="bg-gray-200 p-4">
						<div className="h-[70%] p-10 flex items-center justify-center">
							<div className="h-auto">
								<img
									src={product.image}
									alt={product.title}
									className="w-[15rem]"
								/>
							</div>
						</div>
						<div className="h-[30%] p-4">
							<h4>{product.title}</h4>
							<p>Q{product.price}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export { VistaProductos };

import React, { useState, useEffect } from "react";
import { createProduct, getProduct } from "../../api/http";

function AddProduct() {
	const [error, setError] = useState("");
	const [formData, setFormData] = useState({});
	const [products, setProducts] = useState([]);
	const [imageURL, setImageURL] = useState([]);

	const array = [
		{
			label: "Nombre Producto",
			name: "title",
			placeholder: "Nombre Producto",
			type: "text",
		},
		{ label: "Precio", name: "price", placeholder: "Q 0.00", type: "number" },
		{
			label: "Descripción",
			name: "description",
			placeholder: "Descripción Producto",
			type: "text",
		},
		{
			label: "Categoría",
			name: "category",
			placeholder: "Categoria",
			type: "text",
		},
	];

	useEffect(() => {
		async function loadImages() {
			const data = await getProduct();
			console.log("🚀 ~ loadImages ~ data:", data);
			setProducts(data);

			//creacion de array con url imagenes
			const images = data.map((res) => res.image);
			console.log("🚀 ~ loadImages ~ images:", images);
			setImageURL(images);
		}
		loadImages();
	}, []);

	const handleChange = (e) => {
		var name = e.target.name;
		var value = e.target.value;
		var newFormData = Object.assign({}, formData);

		newFormData[name] = value;
		setFormData(newFormData);

		console.log(newFormData);
	};

	const handleSubmit = (e) => {
		//evitar la recarga del form
		e.preventDefault();

		// opcional convertir price
		/* var newData = Object.assign({}, formData);
		newData.price = Number(newData.price); */

		const newId = products.length + 1;

		//opcion si un id no es consecutivo
		//const newId = Math.max(...products.map(p => p.id)) + 1;

		const newData = {
			id: newId,
			title: formData.NombreProducto,
			price: Number(formData.Precio),
			description: formData.Descripcion,
			category: formData.Categoria,
			image: formData.image,
			rating: {
				rate: 0,
				count: 0,
			},
		};

		createProduct(newData)
			.then((res) => console.log("Creado:", res))
			.catch((err) => console.log("Error:", err));
	};

	return (
		<div className="test p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#1f2937]">
				Crear Productos
			</h1>
			<form className="space-y-4 md:space-y-6">
				{array.map((input, index) => (
					<div className="form-group" key={index}>
						<label
							htmlFor={input.label}
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#1f2937]"
						>
							{input.label}
						</label>
						<input
							className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							name={input.name}
							required=""
							type={input.type}
							placeholder={input.placeholder}
							onChange={handleChange}
						/>
					</div>
				))}
				<label
					htmlFor="Imagen"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#1f2937]"
				>
					Imagen
				</label>
				<select
					className="bg-gray-50 border border-gray-300 rounded-lg p-2.5 w-full"
					name="image"
					onChange={handleChange}
				>
					<option value="">Seleccione URL de imagen</option>
					{imageURL.map((image, idx) => (
						<option key={idx} value={image}>
							{image.split("/").pop()}
						</option>
					))}
				</select>

				{error && <p className="erro text-red-400">{error}</p>}
				<button
					className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					onClick={handleSubmit}
				>
					Crear
				</button>
			</form>
		</div>
		/* </div>
		</div> */
	);
}

export { AddProduct };

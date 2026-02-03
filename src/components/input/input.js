function Input(label) {
	return (
		<div className="form-group">
			<label
				htmlFor="product"
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#1f2937]"
			>
				{label}
			</label>
			<input
				className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				name="product"
				required=""
				type="text"
				placeholder="Nombre Producto"
				/*value={value}
				onChange={(e) => setValue(e.target.value)}*/
			/>
		</div>
	);
}

export { Input };

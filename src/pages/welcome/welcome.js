function Welcome() {
	const userName = localStorage.getItem("userName");
	return (
		<main className="p-10 text-center w-full">
			<h1 className="text-3xl font-bold">Bienvenido {userName} al Dashboard</h1>
			<p className="mt-4">Has Iniciado Sesion Correctamente</p>
			<div className="flex justify-center p-6">
				<img
					src="https://cdn.pixabay.com/photo/2022/07/08/05/38/freelance-work-7308505_1280.png"
					width={500}
				></img>
			</div>
		</main>
	);
}

export { Welcome };

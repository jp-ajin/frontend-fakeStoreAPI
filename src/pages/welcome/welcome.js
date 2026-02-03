function Welcome() {
	const userName = localStorage.getItem("userName");
	return (
		<main className="p-10 text-center w-full">
			<h1 className="text-3xl font-bold">Bienvenido {userName} al Dashboard</h1>
			<p className="mt-4">Has Iniciado Sesion Correctamente</p>
		</main>
	);
}

export { Welcome };

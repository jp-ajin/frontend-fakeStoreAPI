import { useEffect, useState } from "react";
import { getUser } from "../api/http";

export default function Users() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		getUser()
			.then((data) => {
				setUsers(data);
			})
			.catch((err) => {
				setError(err.message);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) return <p>Cargando...</p>;
	if (error) return <p>Error: {error}</p>;

	return (
		<div>
			<h2>Lista de Usuarios</h2>
			<ul>
				{users.map((u) => (
					<li key={u.id}>
						{u.username} - {u.email} - {u.password}
						{/*console.log(u.password)*/};
					</li>
				))}
			</ul>
		</div>
	);
}

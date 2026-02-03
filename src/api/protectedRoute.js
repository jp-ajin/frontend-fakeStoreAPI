import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
	//validar si isAuth es true !!variable
	const isAuth = !!localStorage.getItem("token");

	if (!isAuth) {
		return <Navigate to="/" replace />;
	}

	return children;
}

export { ProtectedRoute };

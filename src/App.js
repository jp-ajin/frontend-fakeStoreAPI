//import Users from "./pages/users";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login/login";
import { Dashboard } from "./pages/dashboard/dashboard";
import "./App.css";
import { ProtectedRoute } from "./api/protectedRoute";
import { VistaUsuarios } from "./pages/usuarios/vistaUsuarios";
import { MiPerfil } from "./pages/miPerfil/miPerfil";
import { VistaProductos } from "./pages/productos/vistaProductos";
import { Welcome } from "./pages/welcome/welcome";
import { AddProduct } from "./pages/addProducts/addProduct";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/dashboard"
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				>
					<Route index element={<Welcome />}></Route>
					<Route path="productos" element={<VistaProductos />}></Route>
					<Route path="usuarios" element={<VistaUsuarios />}></Route>
					<Route path="addProduct" element={<AddProduct />}></Route>
				</Route>
				<Route path="/" element={<LoginPage />}></Route>
				<Route path="/miPerfil" element={<MiPerfil />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

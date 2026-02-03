import React from "react";
import { SideMenu } from "../../components/sideMenu/sideMenu";
import { Outlet } from "react-router-dom";

function Dashboard() {
	return (
		<div className="flex h-screen">
			<SideMenu></SideMenu>
			<main className="flex-1 overflow-y-auto p-10">
				<Outlet />
			</main>
		</div>
	);
}

export { Dashboard };

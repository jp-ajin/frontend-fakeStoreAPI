function LogoutModal({ onConfirm, onCancel }) {
	return (
		<div className="w-full h-full absolute flex justify-center items-center bg-gray-500/50">
			<div className="bg-gray-800 rounded-lg">
				<div className="px-4 pt-5">
					<p className="text-lg text-gray-400">
						¿Estas seguro que quieres salir?
					</p>
				</div>
				<div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
					<div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
						<button
							className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
							onClick={onCancel}
						>
							Cancelar
						</button>
						<button
							className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0"
							onClick={onConfirm}
						>
							Ok
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export { LogoutModal };

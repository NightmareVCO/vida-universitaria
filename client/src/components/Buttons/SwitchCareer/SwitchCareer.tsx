import { Career } from "@data/_centralized/careers.data";

export default function SwitchCareer() {
	const career = new URLSearchParams(window.location.search).get("career");
	const careerOptions = Object.values(Career);

	const handleFacultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const career = e.target.value;
		const url = new URL(window.location.href);
		url.searchParams.set("career", career);
		window.history.pushState({}, "", url);
		window.location.reload();
	};

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<select
					className="default-btn-one mt-sm-25"
					style={{ width: "277px" }}
					onChange={handleFacultyChange}
				>
					<option value="" selected>
						Carrera
					</option>
					{career
						? careerOptions.map((career) => (
								<option
									key={career}
									value={career}
									selected={
										career ===
										new URLSearchParams(window.location.search).get("career")
									}
								>
									{career}
								</option>
							))
						: careerOptions.map((career) => (
								<option key={career} value={career}>
									{career}
								</option>
							))}
				</select>
			</div>
		</div>
	);
}

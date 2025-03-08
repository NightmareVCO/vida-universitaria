import { Faculty } from '@data/_centralized/faculties.data';

export default function SwitchFaculty() {
	const faculty = new URLSearchParams(window.location.search).get('faculty');
	const facultyOptions = Object.values(Faculty);

	const handleFacultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const faculty = e.target.value;
		const url = new URL(window.location.href);
		url.searchParams.set('faculty', faculty);
		window.history.pushState({}, '', url);
		window.location.reload();
	};

	return (
		<div className="container">
			<div className="d-flex justify-content-center gap-4 py-5">
				<select className="default-btn-one" onChange={handleFacultyChange}>
					<option value="" selected>
						Selecciona una facultad
					</option>
					{faculty
						? facultyOptions.map((faculty) => (
								<option
									key={faculty}
									value={faculty}
									selected={faculty === new URLSearchParams(window.location.search).get('faculty')}
								>
									{faculty}
								</option>
							))
						: facultyOptions.map((faculty) => (
								<option key={faculty} value={faculty}>
									{faculty}
								</option>
							))}
				</select>
			</div>
		</div>
	);
}

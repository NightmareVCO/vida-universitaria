// ---
// export const prerender = false;

// import { API_URL } from "astro:env/client";

// interface Props {
//   campus: Campus;
//   isSection?: boolean;
// }

// const queryParams = Astro.url.searchParams;
// console.log(queryParams);

// const { campus, isSection } = Astro.props;

// const [activities, error] = await getPostsByCampus({ apiUrl: API_URL, campus });
// if (error) {
//   console.error(error);
// }
// ---

// <div class="events-area body-color pt-50 pb-100">
//   <div class="container">
//     <div class="section-title pt-5">
//       <h2>Próximas Actividades</h2>
//       <p>
//         Aquí estarán los eventos que se realizarán en la universidad, para que
//         los estudiantes puedan asistir y participar.
//       </p>
//     </div>

//     <EventCardRender
//       activities={activities ?? []}
//       studentsGroupsData={studentsGroupsDataCSTI}
//     />

//     <!-- if section show  -->
//     {
//       isSection && (
//         <div class="more-item text-center">
//           <p>
//             Mira todas las actividades.{" "}
//             <a href="events.html" class="read-more-btn active">
//               Calendario de Actividades <i class="fa fa-arrow-right" />
//             </a>
//           </p>
//         </div>
//       )
//     }
//   </div>
// </div>

type EvenSectionProps = {
	campus: Campus;
	apiUrl: string;
	isSection?: boolean;
};

import EventCardRender from "@components/Cards/Event/EventsCard/EventCardRender/EventCardRender";
import type { Career } from "@data/_centralized/careers.data";

import { studentsGroupsDataCSTI } from "@data/_centralized/groups/studentsGroups.data";
import { getPostsByCampusAndClub } from "@data/_fetch/posts.fetch";
import type { Campus, Activity } from "@data/_types/types";
import { getCareerEnumKeyByName, getClubByCareer } from "@utils/career.utils";
import { useEffect, useState } from "react";

export default function EvenSection({
	campus,
	apiUrl,
	isSection,
}: EvenSectionProps) {
	const [activities, setActivities] = useState<Activity[]>([]);

	const searchParamCareer =
		new URLSearchParams(window.location.search).get("career") ?? "";
	const career = getCareerEnumKeyByName(searchParamCareer as Career);
	const club = getClubByCareer(career) ?? undefined;

	useEffect(() => {
		const fetchData = async () => {
			const [activities, error] = await getPostsByCampusAndClub({
				apiUrl,
				campus,
				club,
			});
			if (error) {
				console.error(error);
			}
			setActivities(activities ?? []);
		};

		fetchData();
	}, [campus, apiUrl, club]);

	return (
		<div className="events-area body-color pt-50 pb-100">
			<div className="container">
				<div className="section-title pt-5">
					<h2>Próximas Actividades</h2>
					<p>
						Aquí estarán los eventos que se realizarán en la universidad, para
						que los estudiantes puedan asistir y participar.
					</p>
				</div>

				<EventCardRender
					activities={activities ?? []}
					studentsGroupsData={studentsGroupsDataCSTI}
				/>

				{isSection && (
					<div className="more-item text-center">
						<p>
							Mira todas las actividades.{" "}
							<a href="events.html" className="read-more-btn active">
								Calendario de Actividades <i className="fa fa-arrow-right" />
							</a>
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

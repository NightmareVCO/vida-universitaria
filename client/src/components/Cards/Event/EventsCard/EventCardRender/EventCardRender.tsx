import EventCard from "@components/Cards/Event/EventsCard/EventCard/EventCard";

import type { StudentGroupsEnumCSTI } from "@data/_centralized/groups/studentsGroups.data";
import type { Activity, StudentGroup } from "@data/_types/types";

type EventCardRenderProps = {
	activities?: Activity[];
	studentsGroupsData: Record<StudentGroupsEnumCSTI, StudentGroup>;
};
export default function EventCardRender({
	activities,
	studentsGroupsData,
}: EventCardRenderProps) {
	return (
		<div className="row justify-content-center">
			{activities?.map((activity) => (
				<EventCard
					key={activity.id}
					activity={activity}
					studentsGroupsData={studentsGroupsData}
				/>
			))}
			{!activities && <p>No hay actividades recientes</p>}
		</div>
	);
}

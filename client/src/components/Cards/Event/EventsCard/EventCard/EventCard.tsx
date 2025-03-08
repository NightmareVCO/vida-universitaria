import { monthNames } from '@utils/date.utils';

import type { StudentGroupsEnumCSTI } from '@data/_centralized/groups/studentsGroups.data';
import { Routes } from '@data/_centralized/routes.data';
import type { Activity, StudentGroup } from '@data/_types/types';

type EventCardProps = {
	activity: Activity;
	studentsGroupsData: Record<StudentGroupsEnumCSTI, StudentGroup>;
};

export default function EventCard({ activity, studentsGroupsData }: EventCardProps) {
	const studentGroup =
		studentsGroupsData[
			activity.academicGroup.split(' - ').join('-') as unknown as StudentGroupsEnumCSTI
		];

	const date = new Date(activity.date);
	const day = date.getDate();
	const month = monthNames[date.getMonth()];

	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-events-card">
				<div className="events-image">
					<a href={`${Routes.GRUPOS_ESTUDIANTILES_CALENDARIO_ACTIVIDADES}/${activity.id}`}>
						{activity.image && (
							<img
								src={activity.image}
								alt={activity.title}
								height={1023}
								width={1023}
								decoding="async"
								loading="lazy"
							/>
						)}
					</a>
					<div className="date">
						<span>{day}</span>
						<p>{month}</p>
					</div>
				</div>
				<div className="events-content">
					<div className="admin">
						<div className="d-flex flex-row justify-content-end align-items-center gap-2">
							<img
								src={studentGroup?.logo ?? '/src/assets/images/logo.webp'}
								alt={studentGroup?.label ?? 'Student Group'}
								height={28}
								width={28}
								decoding="async"
								loading="lazy"
							/>
							<a href={studentGroup?.path}>{studentGroup?.label ?? 'PUCMM'}</a>
						</div>
					</div>
					<a href={`${Routes.GRUPOS_ESTUDIANTILES_CALENDARIO_ACTIVIDADES}/${activity.id}`}>
						<a href={`${Routes.GRUPOS_ESTUDIANTILES_CALENDARIO_ACTIVIDADES}/${activity.id}`}>
							<h3
								// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
								dangerouslySetInnerHTML={{
									__html:
										activity.title.length > 50
											? `${activity.title.substring(0, 50)}...`
											: activity.title,
								}}
							/>
						</a>
					</a>
				</div>
			</div>
		</div>
	);
}

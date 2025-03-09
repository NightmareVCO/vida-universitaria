import StudentGroupCard from "@components/Cards/StudentGroup/StudentGroupCard/StudentGroupCard";
import { CampusEnum, type Campus, type StudentGroup } from "@data/_types/types";

import {
	studentsGroupsDataCSDArray,
	studentsGroupsDataCSTIArray,
} from "@data/_centralized/groups/studentsGroups.data";

type StudentGroupRenderProps = {
	campus: Campus;
};

export default function StudentGroupRender({
	campus,
}: StudentGroupRenderProps) {
	let studentsGroupsData: StudentGroup[] = [];
	switch (campus) {
		case CampusEnum.CSTI:
			studentsGroupsData = studentsGroupsDataCSTIArray;
			break;
		case CampusEnum.CSD:
			studentsGroupsData = studentsGroupsDataCSDArray;
			break;
	}

	return (
		<div className="latest-news-area pb-100">
			<div className="container">
				<div className="row justify-content-center">
					{studentsGroupsData.map((group: StudentGroup) => (
						<StudentGroupCard key={group.initials} group={group} />
					))}
				</div>
			</div>
		</div>
	);
}

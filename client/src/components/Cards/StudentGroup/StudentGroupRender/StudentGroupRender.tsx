// ---

// import type { StudentGroup } from "@data/_types/types";

// interface Props {
//   campus: "CSTI" | "CSD";
// }

// const { campus } = Astro.props;

// let studentsGroupsData: StudentGroup[] = [];
// switch (campus) {
//   case "CSTI":
//     studentsGroupsData = studentsGroupsDataCSTIArray;
//     break;
//   case "CSD":
//     studentsGroupsData = studentsGroupsDataCSDArray;
//     break;
// }
// ---

// <div class="latest-news-area pb-100">
//   <div class="container">
//     <div class="row justify-content-center">
//       {
//         studentsGroupsData.map((group: StudentGroup) => (
//           <StudentGroupCard group={group} />
//         ))
//       }
//     </div>
//   </div>
// </div>

import StudentGroupCard from '@components/Cards/StudentGroup/StudentGroupCard/StudentGroupCard';
import type { Campus, StudentGroup } from '@data/_types/types';

import {
	studentsGroupsDataCSDArray,
	studentsGroupsDataCSTIArray,
} from '@data/_centralized/groups/studentsGroups.data';

type StudentGroupRenderProps = {
	campus: Campus;
};

export default function StudentGroupRender({ campus }: StudentGroupRenderProps) {
	let studentsGroupsData: StudentGroup[] = [];
	switch (campus) {
		case 'CSTI':
			studentsGroupsData = studentsGroupsDataCSTIArray;
			break;
		case 'CSD':
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

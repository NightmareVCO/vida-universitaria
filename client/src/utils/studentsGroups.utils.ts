import { studentsGroupsData } from '@data/_centralized/groups/studentsGroups.data';

export const findStudentGroupByInitials = ({ initials }: { initials: string }) => {
	return Object.values(studentsGroupsData).find(
		(group) => group.initials.toLowerCase() === initials.toLowerCase(),
	);
};

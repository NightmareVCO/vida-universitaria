import {
	StudentGroupsEnumCSTI,
	studentsGroupsDataCSTI,
} from '@data/_centralized/groups/studentsGroups.data';
import type { Hero } from '@data/_types/types';

const ACTION_LABEL = 'Conoce más';
const WEB_LABEL = 'Visitar sitio web';

export const heroData: Hero[] = Object.values(StudentGroupsEnumCSTI).map((groupKey) => ({
	title: studentsGroupsDataCSTI[groupKey].title,
	description: studentsGroupsDataCSTI[groupKey].shortDescription ?? '',
	image: studentsGroupsDataCSTI[groupKey].logo,
	infoLink: studentsGroupsDataCSTI[groupKey].path,
	infoText: ACTION_LABEL,
	contactLink: studentsGroupsDataCSTI[groupKey].website,
	contactText: WEB_LABEL,
}));

export default heroData;

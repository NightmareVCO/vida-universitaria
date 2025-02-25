import type { StudentGroup } from '@data/_types/types';
import { Career } from '../careers.data';
import { Faculty } from '../faculties.data';
import { StudentsGroupsImages } from '../images.data';
import { Routes } from '../routes.data';
export type StudentGroupDataCSTI = typeof studentsGroupsDataCSTI;
export type StudentGroupDataCSD = typeof studentsGroupsDataCSD;

export enum SocialMediaEnum {
	INSTAGRAM = 0,
	FACEBOOK = 1,
	TWITTER = 2,
	LINKEDIN = 3,
}

export enum StudentGroupsEnumCSTI {
	ADEDIN_CSTI = 'ADEDIN-CSTI',
	ADEMED_CSTI = 'ADEMED-CSTI',
	// ADENUT_CSTI = 'ADENUT-CSTI',
	ADER_CSTI = 'ADER-CSTI',
	ADEST_CSTI = 'ADEST-CSTI',
	ADETF_CSTI = 'ADETF-CSTI',
	AECS_CSTI = 'AECS-CSTI',
	AEDE_CSTI = 'AEDE-CSTI',
	AEDU_CSTI = 'AEDU-CSTI',
	AEHP_CSTI = 'AEHP-CSTI',
	AEIP_CASTI = 'AEIP-CASTI',
	AEPSI_CSTI = 'AEPSI-CSTI',
	AETG_CSTI = 'AETG-CSTI',
	ASEM_CSTI = 'ASEM-CSTI',
	BIENESTAR_CSTI = 'BIENESTAR-CSTI',
	CAP_CSTI = 'CAP-CSTI',
	CEGFA_CSTI = 'CEGFA-CSTI',
	CEIME_CSTI = 'CEIME-CSTI',
	CEIT_CSTI = 'CEIT-CSTI',
	CEL_CSTI = 'CEL-CSTI',
	CIC_CSTI = 'CIC-CSTI',
	CICC_CSTI = 'CICC-CSTI',
	COMITEP_CSTI = 'COMITEP-CSTI',
	DEBATE_CSTI = 'DEBATE-CSTI',
	DONANTES_CSTI = 'DONANTES-CSTI',
	ECOPUCMM_CSTI = 'ECOPUCMM-CSTI',
	MEDLIFE_CSTI = 'MEDLIFE-CSTI',
	PUCMUNAR_CSTI = 'PUCMUNAR-CSTI',
}

export enum StudentGroupsEnumCSD {
	ADEDIN_CSD = 'ADEDIN-CSD',
	// ADEMED_CSD = 'ADEMED-CSD',
	// ADENUT_CSD = 'ADENUT-CSD',
	// ADER_CSD = 'ADER-CSD',
	// ADEST_CSD = 'ADEST-CSD',
	// ADETF_CSD = 'ADETF-CSD',
	// AECS_CSD = 'AECS-CSD',
	// AEDE_CSD = 'AEDE-CSD',
	// AEDU_CSD = 'AEDU-CSD',
	// AEHP_CSD = 'AEHP-CSD',
	// AEIP_CSD = 'AEIP-CSD',
	// AEPSI_CSD = 'AEPSI-CSD',
	// AETG_CSD = 'AETG-CSD',
	// ASEM_CSD = 'ASEM-CSD',
	// BIENESTAR_CSD = 'BIENESTAR-CSD',
	// CAP_CSD = 'CAP-CSD',
	// CEGFA_CSD = 'CEGFA-CSD',
	// CELIS_CSD = 'CELIS-CSD',
	// CEIME_CSD = 'CEIME-CSD',
	// CEIT_CSD = 'CEIT-CSD',
	// CEL_CSD = 'CEL-CSD',
	// CIC_CSD = 'CIC-CSD',
	// CICC_CSD = 'CICC-CSD',
	// COMITEP_CSD = 'COMITEP-CSD',
	// DEBATE_CSD = 'DEBATE-CSD',
	// DONANTES_CSD = 'DONANTES-CSD',
	// ECOPUCMM_CSD = 'ECOPUCMM-CSD',
	// MEDLIFE_CSD = 'MEDLIFE-CSD',
	// PUCMUNAR_CSD = 'PUCMUNAR-CSD',
}

export const studentsGroupsDataCSTI: Record<StudentGroupsEnumCSTI, StudentGroup> = {
	[StudentGroupsEnumCSTI.ADEDIN_CSTI]: {
		title: 'Asociación de Estudiantes de Diseño e Interiorismo',
		initials: 'ADEDIN_CSTI',
		label: 'ADEDIN - CSTI',
		shortDescription:
			'La Asociación de Estudiantes de Diseño e Interiorismo denominada por sus siglas ADEDIN como representativas, es una asociación permanente, abierta y sin fines de lucro, a la que pertenecen todos los estudiantes de la carrera de Diseño e Interiorismo de la Escuela de Arquitectura y Diseño Francisco Camarena de la Pontificia Universidad Católica Madre y Maestra, campus Santiago, que cumplan con los requisitos establecidos.',
		description:
			'<strong>La Asociación de Estudiantes de Diseño e Interiorismo denominada por sus siglas ADEDIN</strong> como representativas, es una asociación permanente, abierta y sin fines de lucro, a la que pertenecen todos los estudiantes de la carrera de Diseño e Interiorismo de la Escuela de Arquitectura y Diseño Francisco Camarena de la Pontificia Universidad Católica Madre y Maestra, campus Santiago, que cumplan con los requisitos establecidos.<br /><br />',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.ADEDIN_CSTI,
		mission:
			'Propiciar el intercambio de experiencias a través de actividades académicas, culturales, jornadas de discusiones, análisis, seminarios, encuentros, foros nacionales, reuniones y otras actividades, además de fomentar las competencias profesionales tanto a nivel nacional, e internacional con propuestas. ',
		vision:
			'Velar por la difusión efectiva de las actividades y eventos de interés que se realicen en otras facultades y escuelas de Arquitectura y Diseño y organizaciones afines alrededor del mundo.  ',
		faculty: Faculty.FCSH,
		career: Career.DIN,
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_ADEDIN_CSTI,
		website: 'https://example.com/adedin',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/adedin' },
			{ name: 'Facebook', link: 'https://www.facebook.com/adedin' },
		],
	},
	[StudentGroupsEnumCSTI.ADEMED_CSTI]: {
		title: 'Asociación de Estudiantes de Medicina',
		initials: 'ADEMED_CSTI',
		label: 'ADEMED - CSTI',
		shortDescription:
			'La Asociación de Estudiantes de Medicina (ADEMED) es un organismo dependiente del Decanato de Estudiantes que representa a los Estudiantes de la carrera de Medicina de las sedes de Santiago de los Caballeros y Santo Domingo de la Pontificia Universidad Católica Madre y Maestra (PUCMM) desde los cursos comprendidos en el primer año hasta el quinto año de la carrera.',
		description: `Esta Asociación fue constituida en el año 2014 en el Campus de Santiago de la Pontificia Universidad Católica Madre y Maestra (PUCMM).<br /><br />
      <strong>La Asociación de Estudiantes de Medicina (ADEMED)</strong> es un organismo dependiente del Decanato de Estudiantes que representa a los Estudiantes de la carrera de Medicina de las<br />
      sedes de Santiago de los Caballeros y Santo Domingo de la Pontificia Universidad Católica Madre y Maestra (PUCMM) desde los cursos comprendidos en el primer año hasta el quinto<br />
      año de la carrera.<br /><br />
      ADEMED está al servicio del estudiante de Medicina de la Universidad, teniendo como finalidad esencial crear las condiciones óptimas que permitan a todo el estudiantado el<br /><br />
      desarrollo material, espiritual y moral durante su permanencia en la Escuela de Medicina.<br /><br />`,
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.ADEMED_CSTI,
		mission:
			'Velar por el crecimiento integral y continuo del alumnado de la Escuela de Medicina mediante diversas actividades educativas y de servicio.',
		vision:
			'Visión: Ser reconocidos como una organización estudiantil que representa a todos los miembros de la Escuela de Medicina con las características propias de un miembro de la PUCMM.',
		faculty: Faculty.FCCS,
		career: Career.MED,
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_ADEMED_CSTI,
		website: 'https://example.com/ademed',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/ademed' },
			{ name: 'Facebook', link: 'https://www.facebook.com/ademed' },
		],
	},
	// [StudentGroupsEnumCSTI.ADENUT_CSTI]: {
	// 	title: 'Comité ADENUT',
	// 	initials: 'ADENUT_CSTI',
	// 	label: 'ADENUT - CSTI',
	// 	description: 'El Comité ADENUT se enfoca en promover la nutrición y el bienestar estudiantil.',
	// 	campus: 'CSTI - Campus Santiago',
	// 	logo: StudentsGroupsImages.ADENUT_CSTI,
	// 	mission: 'Fomentar hábitos alimenticios saludables entre los estudiantes.',
	// 	vision: 'Ser reconocidos como un comité líder en la promoción de la salud y nutrición.',
	// 	faculty: 'Facultad de Ciencias de la Salud',
	// 	career: 'Nutrición',
	// 	formLink: 'https://forms.office.com/r/ExampleFormLink',
	// 	path: Routes.GRUPOS_ESTUDIANTILES_ADENUT_CSTI,
	// 	website: 'https://example.com/adenut',
	// 	socialMedia: [
	// 		{ name: 'Instagram', link: 'https://www.instagram.com/adenut' },
	// 		{ name: 'Facebook', link: 'https://www.facebook.com/adenut' },
	// 	],
	// },
	[StudentGroupsEnumCSTI.ADER_CSTI]: {
		title: 'Asociación de Estudiantes de Derecho',
		initials: 'ADER_CSTI',
		label: 'ADER - CSTI',
		shortDescription:
			'La Asociación de Estudiantes de Derecho (ADER) se enfoca en integrar a los estudiantes en proyectos innovadores y en la organización de eventos académicos de alto nivel. Nuestro objetivo es proporcionar a los futuros profesionales del derecho las herramientas necesarias para enfrentar los desafíos contemporáneos, promoviendo una educación integral que combine teoría y práctica.',
		description:
			'La Asociación de Estudiantes de Derecho (ADER) se enfoca en integrar a los estudiantes en proyectos innovadores y en la organización de eventos académicos de alto nivel. Nuestro objetivo es proporcionar a los futuros profesionales del derecho las herramientas necesarias para enfrentar los desafíos contemporáneos, promoviendo una educación integral que combine teoría y práctica.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.ADER_CSTI,
		mission:
			'Se ha considerado el interés surgido dentro del estudiantado de la Carrera de Ciencias Jurídicas de la Pontificia Universidad Católica Madre y Maestra, campus Santiago, de que haya un cuerpo organizado que los integre y represente ante los organismos directivos de la Universidad y el público en general, con los fines de contribuir a la formación integral del futuro profesional del Derecho, para lo cual se podrán realizar actividades.',
		vision: 'Ser el comité referente en defensa de derechos estudiantiles.',
		faculty: Faculty.FCSH,
		career: Career.DER,
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_ADER_CSTI,
		website: 'https://example.com/ader',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/ader' },
			{ name: 'Facebook', link: 'https://www.facebook.com/ader' },
		],
	},
	[StudentGroupsEnumCSTI.ADEST_CSTI]: {
		title: 'Comité ADEST',
		initials: 'ADEST_CSTI',
		label: 'ADEST - CSTI',
		description: 'El Comité ADEST promueve actividades deportivas en la universidad.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.ADEST_CSTI,
		mission: 'Fomentar el deporte y el ejercicio físico entre los estudiantes.',
		vision: 'Ser líderes en actividades deportivas universitarias.',
		faculty: 'Facultad de Ciencias del Deporte',
		career: 'Educación Física',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_ADEST_CSTI,
		website: 'https://example.com/adest',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/adest' },
			{ name: 'Facebook', link: 'https://www.facebook.com/adest' },
		],
	},
	[StudentGroupsEnumCSTI.ADETF_CSTI]: {
		title: 'Comité ADETF',
		initials: 'ADETF_CSTI',
		label: 'ADETF - CSTI',
		description:
			'El Comité ADETF trabaja para el desarrollo técnico y formativo de los estudiantes.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.ADETF_CSTI,
		mission: 'Facilitar herramientas y recursos para el crecimiento técnico de los estudiantes.',
		vision: 'Ser líderes en formación técnica y profesional.',
		faculty: 'Facultad de Ingeniería y Telecomunicaciones',
		career: 'Ingeniería Técnica',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_ADETF_CSTI,
		website: 'https://example.com/adetf',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/adetf' },
			{ name: 'Facebook', link: 'https://www.facebook.com/adetf' },
		],
	},
	[StudentGroupsEnumCSTI.AECS_CSTI]: {
		title: 'Comité AECS',
		initials: 'AECS_CSTI',
		label: 'AECS - CSTI',
		description: 'El Comité AECS fomenta actividades culturales en la universidad.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.AECS_CSTI,
		mission: 'Promover la cultura y el arte entre los estudiantes.',
		vision: 'Ser un referente cultural dentro de la comunidad estudiantil.',
		faculty: 'Facultad de Artes y Humanidades',
		career: 'Ciencias Sociales',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_AECS_CSTI,
		website: 'https://example.com/aecs',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/aecs' },
			{ name: 'Facebook', link: 'https://www.facebook.com/aecs' },
		],
	},
	[StudentGroupsEnumCSTI.AEDE_CSTI]: {
		title: 'Comité AEDE',
		initials: 'AEDE_CSTI',
		label: 'AEDE - CSTI',
		description: 'El Comité AEDE promueve el desarrollo estudiantil en el ámbito educativo.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.AEDE_CSTI,
		mission: 'Fomentar la educación y el aprendizaje entre los estudiantes.',
		vision: 'Ser un referente en actividades educativas y formativas.',
		faculty: 'Facultad de Ciencias de la Educación',
		career: 'Educación',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_AEDE_CSTI,
		website: 'https://example.com/aede',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/aede' },
			{ name: 'Facebook', link: 'https://www.facebook.com/aede' },
		],
	},
	[StudentGroupsEnumCSTI.AEDU_CSTI]: {
		title: 'Comité AEDU',
		initials: 'AEDU_CSTI',
		label: 'AEDU - CSTI',
		description: 'Descripción del Comité AEDU.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.AEDU_CSTI,
		mission: 'Misión del Comité AEDU.',
		vision: 'Visión del Comité AEDU.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_AEDU_CSTI,
		website: 'https://example.com/aedu',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/aedu' },
			{ name: 'Facebook', link: 'https://www.facebook.com/aedu' },
		],
	},
	[StudentGroupsEnumCSTI.AEHP_CSTI]: {
		title: 'Comité AEHP',
		initials: 'AEHP_CSTI',
		label: 'AEHP - CSTI',
		description: 'Descripción del Comité AEHP.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.AEHP_CSTI,
		mission: 'Misión del Comité AEHP.',
		vision: 'Visión del Comité AEHP.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_AEHP_CSTI,
		website: 'https://example.com/aehp',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/aehp' },
			{ name: 'Facebook', link: 'https://www.facebook.com/aehp' },
		],
	},
	[StudentGroupsEnumCSTI.AEIP_CASTI]: {
		title: 'Comité AEIP',
		initials: 'AEIP_CASTI',
		label: 'AEIP - CASTI',
		description: 'Descripción del Comité AEIP.',
		campus: 'CASTI - Campus Santiago',
		logo: StudentsGroupsImages.AEIP_CASTI,
		mission: 'Misión del Comité AEIP.',
		vision: 'Visión del Comité AEIP.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_AEIP_CSTI,
		website: 'https://example.com/aeip',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/aeip' },
			{ name: 'Facebook', link: 'https://www.facebook.com/aeip' },
		],
	},
	[StudentGroupsEnumCSTI.AEPSI_CSTI]: {
		title: 'Comité AEPSI',
		initials: 'AEPSI_CSTI',
		label: 'AEPSI - CSTI',
		description: 'Descripción del Comité AEPSI.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.AEPSI_CSTI,
		mission: 'Misión del Comité AEPSI.',
		vision: 'Visión del Comité AEPSI.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_AEPSI_CSTI,
		website: 'https://example.com/aepsi',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/aepsi' },
			{ name: 'Facebook', link: 'https://www.facebook.com/aepsi' },
		],
	},
	[StudentGroupsEnumCSTI.AETG_CSTI]: {
		title: 'Comité AETG',
		initials: 'AETG_CSTI',
		label: 'AETG - CSTI',
		description: 'Descripción del Comité AETG.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.AETG_CSTI,
		mission: 'Misión del Comité AETG.',
		vision: 'Visión del Comité AETG.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_AETG_CSTI,
		website: 'https://example.com/aetg',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/aetg' },
			{ name: 'Facebook', link: 'https://www.facebook.com/aetg' },
		],
	},
	[StudentGroupsEnumCSTI.ASEM_CSTI]: {
		title: 'Comité ASEM',
		initials: 'ASEM_CSTI',
		label: 'ASEM - CSTI',
		description: 'Descripción del Comité ASEM.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.ASEM_CSTI,
		mission: 'Misión del Comité ASEM.',
		vision: 'Visión del Comité ASEM.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_ASEM_CSTI,
		website: 'https://example.com/asem',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/asem' },
			{ name: 'Facebook', link: 'https://www.facebook.com/asem' },
		],
	},
	[StudentGroupsEnumCSTI.BIENESTAR_CSTI]: {
		title: 'Comité de Bienestar',
		initials: 'BIENESTAR_CSTI',
		label: 'BIENESTAR - CSTI',
		description: 'Descripción del Comité de Bienestar.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.BIENESTAR_CSTI,
		mission: 'Misión del Comité de Bienestar.',
		vision: 'Visión del Comité de Bienestar.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_BIENESTAR_CSTI,
		website: 'https://example.com/bienestar',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/bienestar' },
			{ name: 'Facebook', link: 'https://www.facebook.com/bienestar' },
		],
	},
	[StudentGroupsEnumCSTI.CAP_CSTI]: {
		title: 'Comité CAP',
		initials: 'CAP_CSTI',
		label: 'CAP - CSTI',
		description: 'Descripción del Comité CAP.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.CAP_CSTI,
		mission: 'Misión del Comité CAP.',
		vision: 'Visión del Comité CAP.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_CAP_CSTI,
		website: 'https://example.com/cap',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/cap' },
			{ name: 'Facebook', link: 'https://www.facebook.com/cap' },
		],
	},
	[StudentGroupsEnumCSTI.CEGFA_CSTI]: {
		title: 'Comité CEGFA',
		initials: 'CEGFA_CSTI',
		label: 'CEGFA - CSTI',
		description: 'Descripción del Comité CEGFA.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.CEGFA_CSTI,
		mission: 'Misión del Comité CEGFA.',
		vision: 'Visión del Comité CEGFA.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_CEGFA_CSTI,
		website: 'https://example.com/cegfa',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/cegfa' },
			{ name: 'Facebook', link: 'https://www.facebook.com/cegfa' },
		],
	},
	[StudentGroupsEnumCSTI.CEIME_CSTI]: {
		title: 'Comité CEIME',
		initials: 'CEIME_CSTI',
		label: 'CEIME - CSTI',
		description: 'Descripción del Comité CEIME.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.CEIME_CSTI,
		mission: 'Misión del Comité CEIME.',
		vision: 'Visión del Comité CEIME.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_CEIME_CSTI,
		website: 'https://example.com/ceime',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/ceime' },
			{ name: 'Facebook', link: 'https://www.facebook.com/ceime' },
		],
	},
	[StudentGroupsEnumCSTI.CEIT_CSTI]: {
		title: 'Comité CEIT',
		initials: 'CEIT_CSTI',
		label: 'CEIT - CSTI',
		description: 'Descripción del Comité CEIT.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.CEIT_CSTI,
		mission: 'Misión del Comité CEIT.',
		vision: 'Visión del Comité CEIT.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_CEIT_CSTI,
		website: 'https://example.com/ceit',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/ceit' },
			{ name: 'Facebook', link: 'https://www.facebook.com/ceit' },
		],
	},
	[StudentGroupsEnumCSTI.CEL_CSTI]: {
		title: 'Comité CEL',
		initials: 'CEL_CSTI',
		label: 'CEL - CSTI',
		description: 'Descripción del Comité CEL.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.CEL_CSTI,
		mission: 'Misión del Comité CEL.',
		vision: 'Visión del Comité CEL.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_CEL_CSTI,
		website: 'https://example.com/cel',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/cel' },
			{ name: 'Facebook', link: 'https://www.facebook.com/cel' },
		],
	},
	[StudentGroupsEnumCSTI.CIC_CSTI]: {
		title: 'Comité CIC',
		initials: 'CIC_CSTI',
		label: 'CIC - CSTI',
		description: 'Descripción del Comité CIC.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.CIC_CSTI,
		mission: 'Misión del Comité CIC.',
		vision: 'Visión del Comité CIC.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_CIC_CSTI,
		website: 'https://example.com/cic',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/cic' },
			{ name: 'Facebook', link: 'https://www.facebook.com/cic' },
		],
	},
	[StudentGroupsEnumCSTI.CICC_CSTI]: {
		title: 'Comité de Estudiantes de Ingeniería en Ciencias de la Computación',
		initials: 'CICC_CSTI',
		label: 'CICC - CSTI',
		description:
			'El Comité de Estudiantes de Ingeniería en Ciencias de la Computación (CICC), tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería en Ciencias de la Computación en el campus Santiago.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.CICC_CSTI,
		mission: `Nuestra misión es brindar a los estudiantes
            de la carrera de ingeniería en ciencias de la
            computación una plataforma para su
            crecimiento profesional y personal.
            Esforzándonos en fomentar un entorno de
            aprendizaje colaborativo y asegurarnos de
            que cada estudiante tenga las herramientas
            y oportunidades necesarias para alcanzar su
            máximo potencial. ofreciendo actividades
            recreativas, proyectos prácticos y talleres
            para mejorar sus habilidades técnicas y de
            liderazgo, desarrollando así una red sólida de
            compañeros de campo.`,
		vision: `Nuestra visión es ser reconocidos como un comité
            líder en la promoción y el desarrollo de los
            estudiantes. Ser agentes de divulgación científica
            como enlace entre la universidad y los futuros y
            actuales estudiantes. Además, el comité busca
            contribuir al desarrollo tecnológico y a la resolución
            de problemas importantes de la sociedad estudiantil
            a través del fomento de proyectos innovadores y
            relevantes. Valorar la creatividad, fomentar el
            liderazgo, la colaboración y el trabajo en equipo,
            dando una nueva cara a los oyentes como
            representantes de la tecnología, la innovación y la
            excelencia académica.`,
		faculty: 'Facultad de Ingeniería y Telecomunicaciones',
		formLink: 'https://forms.office.com/r/Ln0F5E42cU',
		career: 'Ingeniería en Ciencias de la Computación',
		path: Routes.GRUPOS_ESTUDIANTILES_CICC_CSTI,
		website: 'https://delicate-dieffenbachia-bd6e4e.netlify.app/#inicio',
		socialMedia: [
			{
				name: 'Instagram',
				link: 'https://www.instagram/ciccpucmm',
			},
			{
				name: 'Facebook',
				link: 'https://www.facebook.com/ciccpucmm',
			},
			{
				name: 'Twitter',
				link: 'https://www.twitter.com/ciccpucmm',
			},
			{
				name: 'LinkedIn',
				link: 'https://www.linkedin.com/in/ciccpucmm/',
			},
		],
	},
	[StudentGroupsEnumCSTI.COMITEP_CSTI]: {
		title: 'Comité COMITEP',
		initials: 'COMITEP_CSTI',
		label: 'COMITEP - CSTI',
		description: 'Descripción del Comité COMITEP.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.COMITEP_CSTI,
		mission: 'Misión del Comité COMITEP.',
		vision: 'Visión del Comité COMITEP.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_COMITEP_CSTI,
		website: 'https://example.com/comitep',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/comitep' },
			{ name: 'Facebook', link: 'https://www.facebook.com/comitep' },
		],
	},
	[StudentGroupsEnumCSTI.DEBATE_CSTI]: {
		title: 'Comité DEBATE',
		initials: 'DEBATE_CSTI',
		label: 'DEBATE - CSTI',
		description: 'Descripción del Comité DEBATE.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.DEBATE_CSTI,
		mission: 'Misión del Comité DEBATE.',
		vision: 'Visión del Comité DEBATE.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_DEBATE_CSTI,
		website: 'https://example.com/debate',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/debate' },
			{ name: 'Facebook', link: 'https://www.facebook.com/debate' },
		],
	},
	[StudentGroupsEnumCSTI.DONANTES_CSTI]: {
		title: 'Comité DONANTES',
		initials: 'DONANTES_CSTI',
		label: 'DONANTES - CSTI',
		description: 'Descripción del Comité DONANTES.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.DONANTES_CSTI,
		mission: 'Misión del Comité DONANTES.',
		vision: 'Visión del Comité DONANTES.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_DONANTES_CSTI,
		website: 'https://example.com/donantes',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/donantes' },
			{ name: 'Facebook', link: 'https://www.facebook.com/donantes' },
		],
	},
	[StudentGroupsEnumCSTI.ECOPUCMM_CSTI]: {
		title: 'Comité ECOPUCMM',
		initials: 'ECOPUCMM_CSTI',
		label: 'ECOPUCMM - CSTI',
		description: 'Descripción del Comité ECOPUCMM.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.ECOPUCMM_CSTI,
		mission: 'Misión del Comité ECOPUCMM.',
		vision: 'Visión del Comité ECOPUCMM.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_ECOPUCMM_CSTI,
		website: 'https://example.com/ecopucmm',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/ecopucmm' },
			{ name: 'Facebook', link: 'https://www.facebook.com/ecopucmm' },
		],
	},
	[StudentGroupsEnumCSTI.MEDLIFE_CSTI]: {
		title: 'Comité MEDLIFE',
		initials: 'MEDLIFE_CSTI',
		label: 'MEDLIFE - CSTI',
		description: 'Descripción del Comité MEDLIFE.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.MEDLIFE_CSTI,
		mission: 'Misión del Comité MEDLIFE.',
		vision: 'Visión del Comité MEDLIFE.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_MEDLIFE_CSTI,
		website: 'https://example.com/medlife',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/medlife' },
			{ name: 'Facebook', link: 'https://www.facebook.com/medlife' },
		],
	},
	[StudentGroupsEnumCSTI.PUCMUNAR_CSTI]: {
		title: 'Comité PUCMUNAR',
		initials: 'PUCMUNAR_CSTI',
		label: 'PUCMUNAR - CSTI',
		description: 'Descripción del Comité PUCMUNAR.',
		campus: 'CSTI - Campus Santiago',
		logo: StudentsGroupsImages.PUCMUNAR_CSTI,
		mission: 'Misión del Comité PUCMUNAR.',
		vision: 'Visión del Comité PUCMUNAR.',
		faculty: 'Facultad correspondiente',
		career: 'Carrera correspondiente',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_PUCMUNAR_CSTI,
		website: 'https://example.com/pucmunar',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/pucmunar' },
			{ name: 'Facebook', link: 'https://www.facebook.com/pucmunar' },
		],
	},
};

export const studentsGroupsDataCSD: Record<StudentGroupsEnumCSD, StudentGroup> = {
	[StudentGroupsEnumCSD.ADEDIN_CSD]: {
		title: 'Comité ADEDIN',
		initials: 'ADEDIN_CSD',
		label: 'ADEDIN - CSD',
		description:
			'El Comité ADEDIN representa a los estudiantes con un enfoque en la innovación y el desarrollo académico.',
		campus: 'CSD - Campus Santo Domingo',
		logo: StudentsGroupsImages.ADEDIN_CSD,
		mission: 'Nuestra misión es fomentar el crecimiento académico y personal de nuestros miembros.',
		vision:
			'Ser un referente en la formación de estudiantes comprometidos con la excelencia académica.',
		faculty: 'Facultad de Ingeniería y Telecomunicaciones',
		career: 'Diversas Ingenierías',
		formLink: 'https://forms.office.com/r/ExampleFormLink',
		path: Routes.GRUPOS_ESTUDIANTILES_ADEDIN_CSD,
		website: 'https://example.com/adedin',
		socialMedia: [
			{ name: 'Instagram', link: 'https://www.instagram.com/adedin' },
			{ name: 'Facebook', link: 'https://www.facebook.com/adedin' },
		],
	},
};

export const studentsGroupsDataCSTIArray = Object.values(studentsGroupsDataCSTI);
export const studentsGroupsDataCSDArray = Object.values(studentsGroupsDataCSD);

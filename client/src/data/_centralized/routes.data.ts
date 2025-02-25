export enum Routes {
	HOME = '/',
	DECANATO = '/decanato-de-estudiantes',
	ARTE_CULTURA = '/arte-y-cultura',
	ARTE_CULTURA_DEPARTAMENTO = '/arte-y-cultura/departamento',
	ARTE_CULTURA_GRUPOS = '/arte-y-cultura/grupos',
	ARTE_CULTURA_DANZA_CONTEMPORANEA = '/arte-y-cultura/danza-contemporanea',
	ARTE_CULTURA_GRUPOS_DE_BAILES = '/arte-y-cultura/grupos-de-bailes',
	ARTE_CULTURA_GRUPO_DE_TEATRO = '/arte-y-cultura/grupo-de-teatro',
	ARTE_CULTURA_GRUPO_MELODY = '/arte-y-cultura/grupo-melody',
	ARTE_CULTURA_GRUPO_CORAL = '/arte-y-cultura/grupo-coral',
	ARTE_CULTURA_TUNA_UNIVERSITARIA = '/arte-y-cultura/tuna-universitaria',

	DEPORTES = '/deportes',
	DEPORTES_DEPARTAMENTO = '/deportes/departamento',
	DEPORTES_GIMNASIO = '/deportes/gimnasio',
	DEPORTES_GRUPOS = '/deportes/grupos',
	DEPORTES_ATLETISMO = '/deportes/atletismo',
	DEPORTES_BALONCESTO = '/deportes/baloncesto',
	DEPORTES_BALONMANO = '/deportes/balonmano',
	DEPORTES_FUTBOL = '/deportes/futbol',
	DEPORTES_NATACION = '/deportes/natacion',
	DEPORTES_PADEL = '/deportes/padel',
	DEPORTES_TENIS = '/deportes/tenis',
	DEPORTES_VOLEIBOL = '/deportes/voleibol',

	GRUPOS_ESTUDIANTILES = '/grupos-estudiantiles',
	GRUPOS_ESTUDIANTILES_ASOC_CLUB_COM_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti',
	GRUPOS_ESTUDIANTILES_ASOC_CLUB_COM_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd',

	GRUPOS_ESTUDIANTILES_ADEDIN_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/adedin-csti',
	GRUPOS_ESTUDIANTILES_ADEMED_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/ademed-csti',
	GRUPOS_ESTUDIANTILES_ADENUT_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/adenut-csti',
	GRUPOS_ESTUDIANTILES_ADER_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/ader-csti',
	GRUPOS_ESTUDIANTILES_ADEST_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/adest-csti',
	GRUPOS_ESTUDIANTILES_ADETF_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/adetf-csti',
	GRUPOS_ESTUDIANTILES_AECS_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/aecs-csti',
	GRUPOS_ESTUDIANTILES_AEDE_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/aede-csti',
	GRUPOS_ESTUDIANTILES_AEDU_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/aedu-csti',
	GRUPOS_ESTUDIANTILES_AEHP_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/aehp-csti',
	GRUPOS_ESTUDIANTILES_AEIP_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/aeip-casti',
	GRUPOS_ESTUDIANTILES_AEPSI_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/aepsi-csti',
	GRUPOS_ESTUDIANTILES_AETG_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/aetg-csti',
	GRUPOS_ESTUDIANTILES_ASEM_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/asem-csti',
	GRUPOS_ESTUDIANTILES_BIENESTAR_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/bienestar-csti',
	GRUPOS_ESTUDIANTILES_CAP_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/cap-csti',
	GRUPOS_ESTUDIANTILES_CEGFA_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/cegfa-csti',
	GRUPOS_ESTUDIANTILES_CELIS_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/celis-csti',
	GRUPOS_ESTUDIANTILES_CEIME_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/ceime-csti',
	GRUPOS_ESTUDIANTILES_CEIT_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/ceit-csti',
	GRUPOS_ESTUDIANTILES_CEL_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/cel-csti',
	GRUPOS_ESTUDIANTILES_CIC_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/cic-csti',
	GRUPOS_ESTUDIANTILES_CICC_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/cicc-csti',
	GRUPOS_ESTUDIANTILES_COMITEP_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/comitep-csti',
	GRUPOS_ESTUDIANTILES_DEBATE_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/debate-csti',
	GRUPOS_ESTUDIANTILES_DONANTES_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/donantes-csti',
	GRUPOS_ESTUDIANTILES_ECOPUCMM_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/ecopucmm-csti',
	GRUPOS_ESTUDIANTILES_MEDLIFE_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/medlife-csti',
	GRUPOS_ESTUDIANTILES_PUCMUNAR_CSTI = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csti/pucmunar-csti',

	GRUPOS_ESTUDIANTILES_ADEDIN_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/adedin-csd',
	GRUPOS_ESTUDIANTILES_ADEMED_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/ademed-csd',
	GRUPOS_ESTUDIANTILES_ADENUT_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/adenut-csd',
	GRUPOS_ESTUDIANTILES_ADER_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/ader-csd',
	GRUPOS_ESTUDIANTILES_ADEST_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/adest-csd',
	GRUPOS_ESTUDIANTILES_ADETF_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/adetf-csd',
	GRUPOS_ESTUDIANTILES_AECS_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/aecs-csd',
	GRUPOS_ESTUDIANTILES_AEDE_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/aede-csd',
	GRUPOS_ESTUDIANTILES_AEDU_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/aedu-csd',
	GRUPOS_ESTUDIANTILES_AEHP_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/aehp-csd',
	GRUPOS_ESTUDIANTILES_AEIP_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/aeip-casti',
	GRUPOS_ESTUDIANTILES_AEPSI_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/aepsi-csd',
	GRUPOS_ESTUDIANTILES_AETG_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/aetg-csd',
	GRUPOS_ESTUDIANTILES_ASEM_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/asem-csd',
	GRUPOS_ESTUDIANTILES_BIENESTAR_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/bienestar-csd',
	GRUPOS_ESTUDIANTILES_CAP_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/cap-csd',
	GRUPOS_ESTUDIANTILES_CEGFA_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/cegfa-csd',
	GRUPOS_ESTUDIANTILES_CELIS_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/celis-csd',
	GRUPOS_ESTUDIANTILES_CEIME_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/ceime-csd',
	GRUPOS_ESTUDIANTILES_CEIT_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/ceit-csd',
	GRUPOS_ESTUDIANTILES_CEL_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/cel-csd',
	GRUPOS_ESTUDIANTILES_CIC_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/cic-csd',
	GRUPOS_ESTUDIANTILES_CICC_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/cicc-csd',
	GRUPOS_ESTUDIANTILES_COMITEP_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/comitep-csd',
	GRUPOS_ESTUDIANTILES_DEBATE_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/debate-csd',
	GRUPOS_ESTUDIANTILES_DONANTES_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/donantes-csd',
	GRUPOS_ESTUDIANTILES_ECOPUCMM_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/ecopucmm-csd',
	GRUPOS_ESTUDIANTILES_MEDLIFE_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/medlife-csd',
	GRUPOS_ESTUDIANTILES_PUCMUNAR_CSD = '/grupos-estudiantiles/asociaciones-clubes-y-comites/csd/pucmunar-csd',

	GRUPOS_ESTUDIANTILES_CALENDARIO_ACTIVIDADES = '/grupos-estudiantiles/calendario-de-actividades',
	GRUPOS_ESTUDIANTILES_CALENDARIO_ACTIVIDADES_CSTI = '/grupos-estudiantiles/calendario-de-actividades/csti',
	GRUPOS_ESTUDIANTILES_CALENDARIO_ACTIVIDADES_CSD = '/grupos-estudiantiles/calendario-de-actividades/csd',

	IDENTIDAD_CATOLICA = '/identidad-catolica',
	IDENTIDAD_CATOLICA_EVANGELIO = '/identidad-catolica/evangelio-del-dia',
	IDENTIDAD_CATOLICA_PASTORAL = '/identidad-catolica/labor-pastoral',
	IDENTIDAD_CATOLICA_TRINIDAD = '/identidad-catolica/santisima-trinidad',
	IDENTIDAD_CATOLICA_ANUNCIACION = '/identidad-catolica/ntra-sra-de-la-anunciacion',
	IDENTIDAD_CATOLICA_EVANGELIO_DIA = '/identidad-catolica/evangelio-del-dia',
	IDENTIDAD_CATOLICA_LABOR_PASTORAL = '/identidad-catolica/labor-pastoral',
	IDENTIDAD_CATOLICA_SANTISIMA_TRINIDAD = '/identidad-catolica/santisima-trinidad',
	IDENTIDAD_CATOLICA_NTRA_SRA_ANUNCIACION = '/identidad-catolica/ntra-sra-de-la-anunciacion',

	SERVICIOS_SEGURIDAD = '/servicios/seguridad',
	SERVICIOS_INCLUSION = '/servicios/inclusion',
	SERVICIOS_SALUD = '/servicios/salud',
	SERVICIOS_CONSEJERIAS = '/servicios/consejeria-financiera',
	SERVICIOS_CONSEJERIA_FINANCIERA = '/servicios/consejeria-finaciera',
	SERVICIOS_CONSEJERIA_ACADEMICA = '/servicios/consejeria-academica',
	SERVICIOS_CONSEJERIA_PERSONAL = '/servicios/consejeria-personal',
	SERVICIOS_CONSEJERIA_VOCACIONAL = '/servicios/consejeria-vocacional',
	SERVICIOS_COMPROMISO = '/servicios/compromiso-universitario',
	SERVICIOS_BENEFICIOS = '/servicios/beneficios-estudiantiles',
	SERVICIOS_MOVILIDAD = '/servicios/movilidad-estudiantil',
	SERVICIOS_COMPROMISO_UNIVERSITARIO = '/servicios/compromiso-universitario',
	SERVICIOS_BENEFICIOS_ESTUDIANTILES = '/servicios/beneficios-estudiantiles',
	SERVICIOS_MOVILIDAD_ESTUDIANTIL = '/servicios/movilidad-estudiantil',

	EXTERNAL_PUCMM = 'https://pucmm.edu.do',
	EXTERNAL_ORIENTACION = 'https://orientacion.pucmm.edu.do',
	EXTERNAL_INVESTIGACION = 'https://investigacion.pucmm.edu.do',
	EXTERNAL_PRENSA_VIDA_UNIVERSITARIA = 'https://prensa.pucmm.edu.do/vida-estudiantil/',
}

export const routesData = [
	{ title: 'Inicio', url: Routes.HOME },
	{ title: 'Decanato de Estudiantes', url: Routes.DECANATO },
	{ title: 'Arte & Cultura', url: Routes.ARTE_CULTURA },
];

export default routesData;

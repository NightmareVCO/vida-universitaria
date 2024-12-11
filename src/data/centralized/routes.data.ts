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
  GRUPOS_ESTUDIANTILES_ASOC = '/grupos-estudiantiles/asociaciones-clubes-y-comites',
  GRUPOS_ESTUDIANTILES_CAL = '/grupos-estudiantiles/calendario-de-actividades',
  GRUPOS_ESTUDIANTILES_CICC = '/grupos-estudiantiles/asociaciones-clubes-y-comites/cicc',
  GRUPOS_ESTUDIANTILES_CEIIS = '/grupos-estudiantiles/asociaciones-clubes-y-comites/ceiis',
  GRUPOS_ESTUDIANTILES_CEIT = '/grupos-estudiantiles/asociaciones-clubes-y-comites/ceit',
  GRUPOS_ESTUDIANTILES_CALENDARIO_ACTIVIDADES = '/grupos-estudiantiles/calendario-de-actividades',
  
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
  SERVICIOS_FINANZAS = '/servicios/finanzas',
  SERVICIOS_COMPROMISO = '/servicios/compromiso-universitario',
  SERVICIOS_BENEFICIOS = '/servicios/beneficios-estudiantiles',
  SERVICIOS_MOVILIDAD = '/servicios/movilidad-estudiantil',
  SERVICIOS_COMPROMISO_UNIVERSITARIO = '/servicios/compromiso-universitario',
  SERVICIOS_BENEFICIOS_ESTUDIANTILES = '/servicios/beneficios-estudiantiles',
  SERVICIOS_MOVILIDAD_ESTUDIANTIL = '/servicios/movilidad-estudiantil',
  
  EXTERNAL_PUCMM = 'https://pucmm.edu.do',
  EXTERNAL_ORIENTACION = 'https://orientacion.pucmm.edu.do',
  EXTERNAL_INVESTIGACION = 'https://investigacion.pucmm.edu.do'
}

export const routesData = [
  { title: "Inicio", url: Routes.HOME },
  { title: "Decanato de Estudiantes", url: Routes.DECANATO },
  { title: "Arte & Cultura", url: Routes.ARTE_CULTURA }
];

export default routesData;

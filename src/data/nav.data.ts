import { Routes } from './centralized/routes.data';

export interface NavItem {
  title: string;
  link?: string;
  isActive?: boolean;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    title: "Inicio",
    isActive: true,
    children: [
      { title: "Inicio", link: Routes.HOME },
      { title: "Decanato Estudiantes", link: Routes.DECANATO },
      { title: "Portal PUCMM", link: Routes.EXTERNAL_PUCMM },
      { title: "Portal Orientación", link: Routes.EXTERNAL_ORIENTACION },
      { title: "Portal de Investigación", link: Routes.EXTERNAL_INVESTIGACION },
    ]
  },
  {
    title: "Arte & Cultura",
    link: Routes.ARTE_CULTURA,
    children: [
      {
        title: "Departamento",
        link: Routes.ARTE_CULTURA_DEPARTAMENTO
      },
      {
        title: "Grupos",
        link: Routes.ARTE_CULTURA_GRUPOS,
        children: [
          { title: "Danza Contemporánea", link: Routes.ARTE_CULTURA_DANZA_CONTEMPORANEA },
          { title: "Grupos de Bailes", link: Routes.ARTE_CULTURA_GRUPOS_DE_BAILES },
          { title: "Grupo de Teatro", link: Routes.ARTE_CULTURA_GRUPO_DE_TEATRO },
          { title: "Grupo Melody", link: Routes.ARTE_CULTURA_GRUPO_MELODY },
          { title: "Grupo Coral", link: Routes.ARTE_CULTURA_GRUPO_CORAL },
          { title: "Tuna Universitaria", link: Routes.ARTE_CULTURA_TUNA_UNIVERSITARIA },
        ]
      }
    ]
  },
  {
    title: "Deportes",
    link: Routes.DEPORTES,
    children: [
      {
        title: "Departamento",
        link: Routes.DEPORTES_DEPARTAMENTO
      },
      {
        title: "Gimnasio",
        link: Routes.DEPORTES_GIMNASIO
      },
      {
        title: "Grupos",
        link: Routes.DEPORTES_GRUPOS,
        children: [
          { title: "Atletismo", link: Routes.DEPORTES_ATLETISMO },
          { title: "Baloncesto", link: Routes.DEPORTES_BALONCESTO },
          { title: "Balonmano", link: Routes.DEPORTES_BALONMANO },
          { title: "Fútbol", link: Routes.DEPORTES_FUTBOL },
          { title: "Natación", link: Routes.DEPORTES_NATACION },
          { title: "Pádel", link: Routes.DEPORTES_PADEL },
          { title: "Tenis", link: Routes.DEPORTES_TENIS },
          { title: "Voleibol", link: Routes.DEPORTES_VOLEIBOL },
        ]
      },
    ]
  },
  {
    title: "Grupos Estudiantiles",
    children: [
      {
        title: "Grupos Estudiantiles",
        link: Routes.GRUPOS_ESTUDIANTILES
      },
      {
        title: "Asociaciones, Clubes y Comités",
        link: Routes.GRUPOS_ESTUDIANTILES_ASOC
      },
      {
        title: "Calendario de Actividades",
        link: Routes.GRUPOS_ESTUDIANTILES_CALENDARIO_ACTIVIDADES
      }
    ]
  },
  {
    title: "Identidad Católica",
    children: [
      { title: "Identidad Católica", link: Routes.IDENTIDAD_CATOLICA },
      { title: "Evangelio del Día", link: Routes.IDENTIDAD_CATOLICA_EVANGELIO_DIA },
      { title: "Labor Pastoral", link: Routes.IDENTIDAD_CATOLICA_LABOR_PASTORAL },
      { title: "Santísima Trinidad", link: Routes.IDENTIDAD_CATOLICA_SANTISIMA_TRINIDAD },
      { title: "Ntra. Sra. de la Anunciación", link: Routes.IDENTIDAD_CATOLICA_NTRA_SRA_ANUNCIACION },
    ]
  },
  {
    title: "Servicios",
    children: [
      { title: "Seguridad", link: Routes.SERVICIOS_SEGURIDAD },
      { title: "Inclusión", link: Routes.SERVICIOS_INCLUSION },
      { title: "Finanzas", link: Routes.SERVICIOS_FINANZAS },
      { title: "Compromiso Universitario", link: Routes.SERVICIOS_COMPROMISO_UNIVERSITARIO },
      { title: "Beneficios Estudiantiles", link: Routes.SERVICIOS_BENEFICIOS_ESTUDIANTILES },
      { title: "Movilidad Estudiantil", link: Routes.SERVICIOS_MOVILIDAD_ESTUDIANTIL },
    ]
  }
];
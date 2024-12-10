
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
      { title: "Inicio", link: "/" },
      { title: "Decanato Estudiantes", link: "/decanato-de-estudiantes" },
      { title: "Orientación", link: "https://orientacion.pucmm.edu.do" },
      { title: "PUCMM", link: "https://pucmm.edu.do" },

    ]
  },
  {
    title: "Arte & Cultura",
    link: "/arte-y-cultura",
    children: [
      {
        title: "Departamento",
        link: "/arte-y-cultura/departamento"
      },
      {
        title: "Grupos",
        link: "/arte-y-cultura/grupos",
        children: [
          { title: "Danza Contemporánea", link: "/arte-y-cultura/danza-contemporanea" },
          { title: "Grupos de Bailes", link: "/arte-y-cultura/grupos-de-bailes" },
          { title: "Grupo de Teatro", link: "/arte-y-cultura/grupo-de-teatro" },
          { title: "Grupo de Teatro", link: "/arte-y-cultura/grupo-de-teatro" },
          { title: "Grupo Melody", link: "/arte-y-cultura/grupo-melody" },
          { title: "Grupo Coral", link: "/arte-y-cultura/grupo-coral" },
          { title: "Tuna Universitaria", link: "/arte-y-cultura/tuna-universitaria" },
        ]
      }
    ]
  },
  {
    title: "Deportes",
    link: "/deportes",
    children: [
      {
        title: "Departamento",
        link: "/deportes/departamento"
      },
      {
        title: "Gimnasio",
        link: "/deportes/gimnasio"
      },
      {
        title: "Grupos",
        link: "/deportes/grupos",
        children: [
          { title: "Atletismo", link: "/deportes/atletismo" },
          { title: "Baloncesto", link: "/deportes/baloncesto" },
          { title: "Balonmano", link: "/deportes/balonmano" },
          { title: "Fútbol", link: "/deportes/futbol" },
          { title: "Natación", link: "/deportes/natacion" },
          { title: "Pádel", link: "/deportes/padel" },
          { title: "Tenis", link: "/deportes/tenis" },
          { title: "Voleibol", link: "/deportes/voleibol" },
        ]
      },
    ]
  },
  {
    title: "Grupos Estudiantiles",
    children: [
      {
        title: "Grupos Estudiantiles",
        link: "/grupos-estudiantiles"
      },
      {
        title: "Asociaciones, Clubes y Comités",
        link: "/grupos-estudiantiles/asociaciones-clubes-y-comites"
      },
      {
        title: "Calendario de Actividades",
        link: "/grupos-estudiantiles/calendario-de-actividades"
      }
    ]
  },
  {
    title: "Identidad Católica",
    children: [
      { title: "Identidad Católica", link: "/identidad-catolica" },
      { title: "Evangelio del Día", link: "/identidad-catolica/evangelio-del-dia" },
      { title: "Labor Pastoral", link: "/identidad-catolica/labor-pastoral" },
      { title: "Santísima Trinidad", link: "/identidad-catolica/santisima-trinidad" },
      { title: "Ntra. Sra. de la Anunciación", link: "/identidad-catolica/ntra-sra-de-la-anunciacion" },
    ]
  },
  {
    title: "Servicios",
    children: [
      { title: "Seguridad", link: "/servicios/seguridad" },
      { title: "Inclusión", link: "/servicios/inclusion" },
      { title: "Finanzas", link: "/servicios/finanzas" },
      { title: "Compromiso Universitario", link: "/servicios/compromiso-universitario" },
      { title: "Beneficios Estudiantiles", link: "/servicios/beneficios-estudiantiles" },
      { title: "Movilidad Estudiantil", link: "/servicios/movilidad-estudiantil" },
    ]
  }
];
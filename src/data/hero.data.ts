import studentsGroupsImages from "./images.data";
import studentsGroupsData from "./studentsGroups.data";

export interface Hero {
  title: string;
  description: string;
  image: string;
  infoLink?: string;
  infoText?: string;
  contactLink?: string;
  contactText?: string;
}

// Equipo deportivo de Natación CSTI
// Grupo de Baile CSD


export const heroData: Hero[] = [
  {
    title: "Comité de Estudiantes de Ing. Ciencias de la Computación 5",
    description: "El Comité de Estudiantes de Ingeniería en Ciencias de la Computación (CICC), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería en Ciencias de la Computación.",
    image: studentsGroupsImages.cicc,
    infoLink: "/asociaciones-clubes-y-comites/cicc",
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
  {
    title: "Comité de Estudiantes de Ing. Industrial y De Sistemas 4",
    description: "El Comité de Estudiantes de Ingeniería y de Sistemas (CEIIS), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería Civil de la Pontificia Universidad Católica Madre y Maestra (PUCMM).",
    image: studentsGroupsImages.ceiis,
    infoLink: "/asociaciones-clubes-y-comites/ceiis",
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
  {
    title: "Comité de Estudiantes de Ing. de Telecomunicaciones 3",
    description: "El Comité de Estudiantes de Ingeniería de Telecomunicaciones (CEIT), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería de Telecomunicaciones.",
    image: studentsGroupsImages.ceit,
    infoLink: "/asociaciones-clubes-y-comites/ceit",
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
    {
    title: "Comité de Estudiantes de Ing. Ciencias de la Computación 2",
    description: "El Comité de Estudiantes de Ingeniería en Ciencias de la Computación (CICC), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería en Ciencias de la Computación.",
    image: studentsGroupsImages.cicc,
    infoLink: "/asociaciones-clubes-y-comites/cicc",
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
  {
    title: "Comité de Estudiantes de Ing. Industrial y De Sistemas 1",
    description: "El Comité de Estudiantes de Ingeniería y de Sistemas (CEIIS), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería Civil de la Pontificia Universidad Católica Madre y Maestra (PUCMM).",
    image: studentsGroupsImages.ceiis,
    infoLink: "/asociaciones-clubes-y-comites/ceiis",
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
]

export const heroTestData: Hero[] = [
  {
    title: "Equipo deportivo de Natación (CSTI)",
    description: "El equipo de natación de la PUCMM es un grupo de estudiantes que se dedican a la práctica de la natación como deporte. Este equipo compite en diferentes competencias a nivel nacional e internacional.",
    image: "/images/hero/natación-csti.webp",
    infoLink: "/asociaciones-clubes-y-comites/equipo-deportivo-de-natacion-csti",
    infoText: "Conoce más",
    contactLink: "https://csti.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
  {
    title: "Grupo de Baile (CSD)",
    description: "El grupo de baile de la PUCMM es un grupo de estudiantes que se dedican a la práctica de la danza como arte. Este grupo participa en diferentes eventos a nivel nacional e internacional.",
    image: "/images/hero/baile-csd.webp",
    infoLink: "/asociaciones-clubes-y-comites/grupo-de-baile-csd",
    infoText: "Conoce más",
    contactLink: "https://csd.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
    {
    title: "Comité de Estudiantes de ICC Campus Santiago",
    description: "El Comité de Estudiantes de Ingeniería en Ciencias de la Computación (CICC), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería en Ciencias de la Computación.",
    image: "/images/hero/cicc.png ",
    infoLink: "grupos-estudiantiles/asociaciones-clubes-y-comites/cicc",
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
]

export default heroData;
import { Routes } from './centralized/routes.data';
import { StudentsGroupsImages } from './centralized/images.data';

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
    image: StudentsGroupsImages.CICC,
    infoLink: Routes.GRUPOS_ESTUDIANTILES_CICC,
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
  {
    title: "Comité de Estudiantes de Ing. Industrial y De Sistemas 4",
    description: "El Comité de Estudiantes de Ingeniería y de Sistemas (CEIIS), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería Civil de la Pontificia Universidad Católica Madre y Maestra (PUCMM).",
    image: StudentsGroupsImages.CEIIS,
    infoLink: Routes.GRUPOS_ESTUDIANTILES_CEIIS,
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
  {
    title: "Comité de Estudiantes de Ing. de Telecomunicaciones 3",
    description: "El Comité de Estudiantes de Ingeniería de Telecomunicaciones (CEIT), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería de Telecomunicaciones.",
    image: StudentsGroupsImages.CEIT,
    infoLink: Routes.GRUPOS_ESTUDIANTILES_CEIT,
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
    {
    title: "Comité de Estudiantes de Ing. Ciencias de la Computación 2",
    description: "El Comité de Estudiantes de Ingeniería en Ciencias de la Computación (CICC), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería en Ciencias de la Computación.",
    image: StudentsGroupsImages.CICC,
    infoLink: Routes.GRUPOS_ESTUDIANTILES_CICC,
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
  {
    title: "Comité de Estudiantes de Ing. Industrial y De Sistemas 1",
    description: "El Comité de Estudiantes de Ingeniería y de Sistemas (CEIIS), que tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería Civil de la Pontificia Universidad Católica Madre y Maestra (PUCMM).",
    image: StudentsGroupsImages.CEIIS,
    infoLink: Routes.GRUPOS_ESTUDIANTILES_CEIIS,
    infoText: "Conoce más",
    contactLink: "https://cicc.pucmm.edu.do/",
    contactText: "Visitar sitio web"
  },
]


export default heroData;
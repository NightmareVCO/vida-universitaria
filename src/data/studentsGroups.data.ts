import studentsGroupsImages from "./images.data";

export interface StudentGroup {
  title: string;
  description: string;
  campus: string;
  logo: string;
  faculty: string;
  career: string;
  website?: string;
  path?: string;
  socialMedia?: {
    name: string;
    link: string;
  }[];
}

export enum SocialMediaEnum {
  INSTAGRAM = 0,
  FACEBOOK = 1,
  TWITTER = 2,
  LINKEDIN = 3
}

export const studentsGroupsData: StudentGroup[] = [
 {
    title: "Comité de Estudiantes de Ingeniería en Ciencias de la Computación",
    description: "El Comité de Estudiantes de Ingeniería en Ciencias de la Computación (CICC), tiene como objetivo principal representar a los estudiantes de la carrera de Ingeniería en Ciencias de la Computación",
    campus: "CSTI - Campus Santiago",
    logo: studentsGroupsImages.cicc,
    faculty: "Facultad de Ingeniería y Telecomunicaciones",
    career: "Ingeniería en Ciencias de la Computación",
    path: "/grupos-estudiantiles/asociaciones-clubes-y-comites/cicc",
    website: "https://cicc.pucmm.edu.do/",
    socialMedia: [
      {
        name: "Instagram",
        link: "https://www.instagram/ciccpucmm"
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/ciccpucmm"
      },
      {
        name: "Twitter",
        link: "https://www.twitter.com/ciccpucmm"
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ciccpucmm/"
      }
    ]
 }
]

export default studentsGroupsData;
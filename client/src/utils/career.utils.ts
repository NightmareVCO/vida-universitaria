import { Career } from '@data/_centralized/careers.data';
import { StudentGroupsEnumCSTI } from '@data/_centralized/groups/studentsGroups.data';

// export enum StudentGroupsEnumCSTI {
// 	ADEDIN_CSTI = 'ADEDIN-CSTI',
// 	ADEMED_CSTI = 'ADEMED-CSTI',
// 	// ADENUT_CSTI = 'ADENUT-CSTI',
// 	ADER_CSTI = 'ADER-CSTI',
// 	ADEST_CSTI = 'ADEST-CSTI',
// 	ADETF_CSTI = 'ADETF-CSTI',
// 	AECS_CSTI = 'AECS-CSTI',
// 	AEDE_CSTI = 'AEDE-CSTI',
// 	AEDU_CSTI = 'AEDU-CSTI',
// 	AEHP_CSTI = 'AEHP-CSTI',
// 	AEIP_CASTI = 'AEIP-CASTI',
// 	AEPSI_CSTI = 'AEPSI-CSTI',
// 	AETG_CSTI = 'AETG-CSTI',
// 	ASEM_CSTI = 'ASEM-CSTI',
// 	BIENESTAR_CSTI = 'BIENESTAR-CSTI',
// 	CAP_CSTI = 'CAP-CSTI',
// 	CEGFA_CSTI = 'CEGFA-CSTI',
// 	CEIME_CSTI = 'CEIME-CSTI',
// 	CEIT_CSTI = 'CEIT-CSTI',
// 	CEL_CSTI = 'CEL-CSTI',
// 	CIC_CSTI = 'CIC-CSTI',
// 	CICC_CSTI = 'CICC-CSTI',
// 	COMITEP_CSTI = 'COMITEP-CSTI',
// 	DEBATE_CSTI = 'DEBATE-CSTI',
// 	DONANTES_CSTI = 'DONANTES-CSTI',
// 	ECOPUCMM_CSTI = 'ECOPUCMM-CSTI',
// 	MEDLIFE_CSTI = 'MEDLIFE-CSTI',
// 	PUCMUNAR_CSTI = 'PUCMUNAR-CSTI',
// }

export const getCareerEnumKeyByName = (name: string) => {
  switch (name) {
    case 'Arquitectura':
      return Career.ARQ;
    case 'Comunicación Social':
      return Career.COM;
    case 'Dirección Empresarial':
      return Career.DIR;
    case 'Derecho':
      return Career.DER;
    case 'Diseño e Interiorismo':
      return Career.DIN;
    case 'Economía':
      return Career.ECO;
    case 'Educación':
      return Career.EDU;
    case 'Enfermería':
      return Career.ENF;
    case 'Estomatología':
      return Career.EST;
    case 'Filosofía':
      return Career.FIL;
    case 'Gastronomía y Artes Culinarias':
      return Career.GAS;
    case 'Gestión Financiera y Auditoría':
      return Career.GFA;
    case 'Hospitalidad y Turismo':
      return Career.HOT;
    case 'Ingeniería Ambiental':
      return Career.AMB;
    case 'Ingeniería de Ciencias de la Computación':
      return Career.ICC;
    case 'Ingeniería Eléctrica':
      return Career.IEL;
    case 'Ingeniería Industrial y de Sistemas':
      return Career.IIS;
    case 'Ingeniería Mecánica':
      return Career.IME;
    case 'Ingeniería Mecatrónica':
      return Career.IMA;
    case 'Ingeniería Telemática':
      return Career.ITT;
    case 'Medicina':
      return Career.MED;
    case 'Marketing':
      return Career.MKT;
    case 'Nutrición y Dietética':
      return Career.NDI;
    case 'Psicología':
      return Career.PSI;
    case 'Terapia Física':
      return Career.TER;
    case 'Trabajo Social':
      return Career.SOC;
    default:
      return Career.COM;
  }
}

export const getClubByCareer = (career: Career): StudentGroupsEnumCSTI | null=> {
  switch (career) {
    case Career.ICC:
      return StudentGroupsEnumCSTI.CICC_CSTI;
    case Career.DER:
      return StudentGroupsEnumCSTI.ADER_CSTI;
    case Career.MED:
      return StudentGroupsEnumCSTI.ADEMED_CSTI;
    case Career.ITT:
      return StudentGroupsEnumCSTI.CEIT_CSTI;
    default:
      return null
  }
}



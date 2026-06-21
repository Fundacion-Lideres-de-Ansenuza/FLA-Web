import {
  ACTIVE_PROGRAMS,
  ALL_PROGRAMS,
  AMBIENTALIA_DATA,
  AVENTURA_MATEMATICA_DATA,
  CIENCIA_FUERA_DE_LA_CAJA_DATA,
  FUTURAS_DATA,
  HISTORICAL_PROGRAMS,
  IMPULSATEC_DATA,
  LIDERES_DATA,
  POTENCIATE_DATA,
  SOMOS_DATA,
  type ProgramData
} from './programs';
import {
  ACTIVE_PROGRAMS_EN,
  ALL_PROGRAMS_EN,
  AMBIENTALIA_DATA_EN,
  AVENTURA_MATEMATICA_DATA_EN,
  CIENCIA_FUERA_DE_LA_CAJA_DATA_EN,
  FUTURAS_DATA_EN,
  HISTORICAL_PROGRAMS_EN,
  IMPULSATEC_DATA_EN,
  LIDERES_DATA_EN,
  POTENCIATE_DATA_EN,
  SOMOS_DATA_EN
} from './programs-en';

export type ProgramLocale = 'es' | 'en';

export const PROGRAMS_BY_LOCALE: Record<ProgramLocale, ProgramData[]> = {
  es: ALL_PROGRAMS,
  en: ALL_PROGRAMS_EN
};

export const ACTIVE_PROGRAMS_BY_LOCALE: Record<ProgramLocale, ProgramData[]> = {
  es: ACTIVE_PROGRAMS,
  en: ACTIVE_PROGRAMS_EN
};

export const HISTORICAL_PROGRAMS_BY_LOCALE: Record<ProgramLocale, ProgramData[]> =
  {
    es: HISTORICAL_PROGRAMS,
    en: HISTORICAL_PROGRAMS_EN
  };

export const PROGRAM_BY_SLUG_AND_LOCALE: Record<
  ProgramLocale,
  Record<string, ProgramData>
> = {
  es: {
    [AMBIENTALIA_DATA.slug]: AMBIENTALIA_DATA,
    [SOMOS_DATA.slug]: SOMOS_DATA,
    [POTENCIATE_DATA.slug]: POTENCIATE_DATA,
    [FUTURAS_DATA.slug]: FUTURAS_DATA,
    [IMPULSATEC_DATA.slug]: IMPULSATEC_DATA,
    [CIENCIA_FUERA_DE_LA_CAJA_DATA.slug]: CIENCIA_FUERA_DE_LA_CAJA_DATA,
    [AVENTURA_MATEMATICA_DATA.slug]: AVENTURA_MATEMATICA_DATA,
    [LIDERES_DATA.slug]: LIDERES_DATA
  },
  en: {
    [AMBIENTALIA_DATA_EN.slug]: AMBIENTALIA_DATA_EN,
    [SOMOS_DATA_EN.slug]: SOMOS_DATA_EN,
    [POTENCIATE_DATA_EN.slug]: POTENCIATE_DATA_EN,
    [FUTURAS_DATA_EN.slug]: FUTURAS_DATA_EN,
    [IMPULSATEC_DATA_EN.slug]: IMPULSATEC_DATA_EN,
    [CIENCIA_FUERA_DE_LA_CAJA_DATA_EN.slug]: CIENCIA_FUERA_DE_LA_CAJA_DATA_EN,
    [AVENTURA_MATEMATICA_DATA_EN.slug]: AVENTURA_MATEMATICA_DATA_EN,
    [LIDERES_DATA_EN.slug]: LIDERES_DATA_EN
  }
};

export function getPrograms(locale: ProgramLocale): ProgramData[] {
  return PROGRAMS_BY_LOCALE[locale];
}

export function getActivePrograms(locale: ProgramLocale): ProgramData[] {
  return ACTIVE_PROGRAMS_BY_LOCALE[locale];
}

export function getHistoricalPrograms(locale: ProgramLocale): ProgramData[] {
  return HISTORICAL_PROGRAMS_BY_LOCALE[locale];
}

export function getProgramBySlug(
  locale: ProgramLocale,
  slug: string
): ProgramData | undefined {
  return PROGRAM_BY_SLUG_AND_LOCALE[locale][slug];
}

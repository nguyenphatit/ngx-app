export type Locale = (typeof locales)[number];

export const locales = ['en', 'vi'] as const;
export const languages = {
    en: 'English',
    vi: 'Tiếng Việt',
}
export const defaultLocale: Locale = 'en';
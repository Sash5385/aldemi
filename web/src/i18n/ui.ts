export const languages = { uk: 'Українська', en: 'English' } as const;
export type Lang = keyof typeof languages;

const uk = {
  'meta.title': 'AlDemi — веб і мобільна розробка',
  'meta.desc': 'Розробка сайтів, веб-застосунків та Android-додатків. Продукти AlDemi: FindDrive, DrivePad, Juno, Magentic.',
  'nav.projects': 'Проєкти',
  'nav.services': 'Послуги',
  'nav.contact': 'Контакти',
  'hero.title': 'Створюю веб і мобільні продукти, якими користуються щодня',
  'hero.sub': 'React, Astro, Firebase, Android (Kotlin). Від ідеї до запуску й підтримки.',
  'hero.cta': 'Обговорити проєкт',
  'hero.cta2': 'Мої проєкти',
  'projects.title': 'Проєкти',
  'projects.more': 'Детальніше →',
  'services.title': 'Що я роблю',
  'contact.title': 'Є ідея? Напишіть',
  'contact.sub': 'Відповідаю протягом дня.',
  'status.live': 'Працює',
  'status.beta': 'Бета',
  'status.dev': 'В розробці',
  'project.stack': 'Стек',
  'project.visit': 'Відкрити',
  'project.back': '← Усі проєкти',
  'project.order': 'Хочу такий продукт',
  'demo.title': 'Демо Juno для вашої сфери',
  'demo.lead': 'Повний кабінет майстра з вигаданими клієнтами й записами — нічого не зберігається.',
};

type Dict = Record<keyof typeof uk, string>;

const en: Dict = {
  'meta.title': 'AlDemi — web & mobile development',
  'meta.desc': 'Websites, web apps and Android apps. AlDemi products: FindDrive, DrivePad, Juno, Magentic.',
  'nav.projects': 'Projects',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'hero.title': 'I build web and mobile products people use every day',
  'hero.sub': 'React, Astro, Firebase, Android (Kotlin). From idea to launch and support.',
  'hero.cta': 'Discuss a project',
  'hero.cta2': 'My projects',
  'projects.title': 'Projects',
  'projects.more': 'Learn more →',
  'services.title': 'What I do',
  'contact.title': 'Have an idea? Get in touch',
  'contact.sub': 'I reply within a day.',
  'status.live': 'Live',
  'status.beta': 'Beta',
  'status.dev': 'In development',
  'project.stack': 'Stack',
  'project.visit': 'Open',
  'project.back': '← All projects',
  'project.order': 'I want a product like this',
  'demo.title': 'Juno demo for your field',
  'demo.lead': 'A full specialist dashboard with fictional clients and bookings — nothing is saved.',
};

export const ui: Record<Lang, Dict> = { uk, en };

export const services: Record<Lang, { title: string; text: string }[]> = {
  uk: [
    { title: 'Веб-застосунки', text: 'CRM, системи бронювання, особисті кабінети, адмін-панелі.' },
    { title: 'Android-додатки', text: 'Нативні додатки на Kotlin + Jetpack Compose, публікація в Google Play.' },
    { title: 'Сайти та лендинги', text: 'Швидкі сайти з гарним SEO, двомовність, адаптив.' },
  ],
  en: [
    { title: 'Web apps', text: 'CRMs, booking systems, client portals, admin panels.' },
    { title: 'Android apps', text: 'Native Kotlin + Jetpack Compose apps, Google Play publishing.' },
    { title: 'Websites & landings', text: 'Fast, SEO-friendly, bilingual, responsive sites.' },
  ],
};

export function localePath(lang: Lang, path = '/') {
  if (lang === 'uk') return path;
  return path === '/' ? '/en' : `/en${path}`;
}

export const demoPresets: Record<Lang, { id: string; label: string }[]> = {
  uk: [
    { id: 'barber', label: '💈 Барбер' },
    { id: 'nails', label: '💅 Манікюр' },
    { id: 'cosmo', label: '✨ Косметолог' },
    { id: 'tutor', label: '📚 Репетитор' },
    { id: 'psy', label: '💬 Психолог' },
  ],
  en: [
    { id: 'barber', label: '💈 Barber' },
    { id: 'nails', label: '💅 Nails' },
    { id: 'cosmo', label: '✨ Cosmetologist' },
    { id: 'tutor', label: '📚 Tutor' },
    { id: 'psy', label: '💬 Psychologist' },
  ],
};

import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/ui';

export async function getProjects(lang: Lang) {
  const all = await getCollection('projects', (e) => e.id.startsWith(`${lang}/`));
  return all
    .sort((a, b) => a.data.order - b.data.order)
    .map((e) => ({ entry: e, slug: e.id.split('/')[1] }));
}

export type ProjectItem = Awaited<ReturnType<typeof getProjects>>[number];

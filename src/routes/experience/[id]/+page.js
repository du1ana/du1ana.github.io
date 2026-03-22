import { getExperienceById, getAllExperiences } from '$lib/data/experiences.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
  return getAllExperiences().map(e => ({ id: e.id }));
}

export function load({ params }) {
  const experience = getExperienceById(params.id);
  if (!experience) throw error(404, 'Experience not found');
  return { experience };
}

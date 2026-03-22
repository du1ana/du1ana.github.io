import { getTechnologyById, getAllTechnologies } from '$lib/data/technologies.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
  return getAllTechnologies().map(t => ({ id: t.id }));
}

export function load({ params }) {
  const technology = getTechnologyById(params.id);
  if (!technology) throw error(404, 'Technology not found');
  return { technology };
}

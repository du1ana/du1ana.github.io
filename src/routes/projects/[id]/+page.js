import { getProjectById, getAllProjects } from '$lib/data/projects.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
  return getAllProjects().map(p => ({ id: p.id }));
}

export function load({ params }) {
  const project = getProjectById(params.id);
  if (!project) throw error(404, 'Project not found');
  return { project };
}

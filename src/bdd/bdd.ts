import type { Level } from '../types/level';
import type { Subject } from '../types/subject';

export const LEVELS: Level[] = [
  {
    id: 1,
    title: 'Primaire',
  },
  {
    id: 2,
    title: 'Collège',
  },
  {
    id: 3,
    title: 'Lycée',
  },
];

export const SUBJECTS: Subject[] = [
  {
    id: 1,
    title: 'Francais',
    level_id: 1,
  },
  {
    id: 2,
    title: 'Anglais',
    level_id: 1,
  },
  {
    id: 3,
    title: 'Mathématique',
    level_id: 3,
  },
];

export default {
  subjects: SUBJECTS,
  levels: LEVELS,
}
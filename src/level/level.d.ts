import type { Subject } from '../subject/subject';

export type Level = {
  id: number;
  title: string;
};
export type LevelSubject = {
  subject: Subject;
  level: Level | undefined;
};

// Fusion directe des propriétés au lieu d'objets imbriqués
//export type LevelSubject = Level & Subject;

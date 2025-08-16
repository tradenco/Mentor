import { Body, Injectable } from '@nestjs/common';
import type { Subject } from './subject';
import { SUBJECTS } from './bdd';

@Injectable()
export class SubjectService {
  all(): Subject[] {
    return SUBJECTS;
  }
  findOne(id: number): Subject | undefined {
    return SUBJECTS.find((e: Subject) => e.id === id);
  }
  create(subject: Subject): Subject[] {
    const { title, level_id } = subject;
    const sortedSubject = SUBJECTS.sort((a, b) => a.id - b.id);
    const newId = sortedSubject[sortedSubject.length - 1].id + 1;
    SUBJECTS.push({ id: newId, title, level_id });
    return SUBJECTS;
  }
}

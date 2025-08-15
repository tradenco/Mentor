import { Body, Injectable } from '@nestjs/common';
import type { Subject } from './subject';
import { SUBJECTS } from './bdd';

@Injectable()
export class SubjectService {
  create(subject: Subject): Subject[] {
    const { title } = subject;
    const sortedSubject = SUBJECTS.sort((a, b) => a.id - b.id);
    const newId = sortedSubject[sortedSubject.length - 1].id + 1;
    return [...SUBJECTS, { id: newId, title }];
  }
}

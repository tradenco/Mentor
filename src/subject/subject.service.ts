import { Injectable } from '@nestjs/common';
import type { Subject } from '../types/subject';
import { SUBJECTS } from './bdd';
import { BddService } from 'src/bdd/bdd.service';

@Injectable()
export class SubjectService {
  constructor(private readonly bdd: BddService) {}
  findAll(): Subject[] {
    return this.bdd.get<Subject>('subjects');
  }
  /*findOne(id: number): Subject | undefined {
    return this.findAll().find((e: Subject) => e.id === id);
  }*/
  findOneById(id: number): Subject | undefined {
    return this.bdd.getById<Subject>('subjects', id);
  }
  create(subject: Subject): Subject[] {
    const { title, level_id } = subject;
    const sortedSubject = this.findAll().sort((a, b) => a.id - b.id);
    const newId = sortedSubject[sortedSubject.length - 1].id + 1;
    SUBJECTS.push({ id: newId, title, level_id });
    return SUBJECTS;
  }
}

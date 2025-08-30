import { forwardRef, Inject, Injectable } from '@nestjs/common';
import type { Subject } from '../types/subject';
import { BddService } from 'src/bdd/bdd.service';
import type { LevelSubject } from 'src/types/level';
import { LevelService } from 'src/level/level.service';

@Injectable()
export class SubjectService {
  constructor(
    private readonly bdd: BddService,
    @Inject(forwardRef(() => LevelService)) //Dépendance circulaire
    private readonly levelService: LevelService,
  ) {}
  findAll(): Subject[] {
    return this.bdd.get<Subject>('subjects');
  }
  /*findOne(id: number): Subject | undefined {
    return this.findAll().find((e: Subject) => e.id === id);
  }*/
  findOneById(id: number): Subject | undefined {
    return this.bdd.getById<Subject>('subjects', id);
  }
  levelAndSubjectFromName(title: string): LevelSubject[] {
    const subject = this.findAll().find((subject) => subject.title === title);
    const levels = this.levelService.findAll();
    const filteredLevel = levels.filter(
      (level) => level.id === subject?.level_id,
    );
    return filteredLevel.map((level) => ({
      subject,
      level,
    }));
  }
  create(subject: Subject): Subject[] {
    const { title, level_id } = subject;
    const subjects = this.findAll();
    const sortedSubject = subjects.sort((a, b) => a.id - b.id);
    const newId = sortedSubject[sortedSubject.length - 1].id + 1;
    subjects.push({ id: newId, title, level_id });
    return subjects;
  }
}

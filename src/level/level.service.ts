import { Injectable } from '@nestjs/common';
import type { Level, LevelSubject } from '../types/level';
import { SubjectService } from 'src/subject/subject.service';
import { BddService } from 'src/bdd/bdd.service';

@Injectable()
export class LevelService {
  constructor(
    private readonly subjectService: SubjectService,
    private readonly bdd: BddService,
  ) {}
  findByNameWithSubject(title: string): LevelSubject[] {
    const level = this.bdd
      .get<Level>('levels')
      .find((level) => level.title === title);
    const subjects = this.subjectService.findAll();
    //if (level) {
    const subjectFiltered = subjects.filter(
      (subject) => subject.level_id === level?.id,
    );
    return subjectFiltered.map<LevelSubject>((subject) => ({
      subject,
      level,
    }));
  }
}

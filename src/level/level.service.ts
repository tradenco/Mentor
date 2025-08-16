import { Injectable } from '@nestjs/common';
import type { LevelSubject } from './level';
import { SubjectService } from 'src/subject/subject.service';
import { LEVELS } from 'src/level/bdd';

@Injectable()
export class LevelService {
  constructor(private readonly subjectService: SubjectService) {}
  findByNameWithSubject(title: string): LevelSubject[] {
    const level = LEVELS.find((level) => level.title === title);
    const subjects = this.subjectService.all();
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

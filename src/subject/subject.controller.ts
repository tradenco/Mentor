import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import type { Subject } from '../types/subject';
import { SubjectService } from './subject.service';
import type { LevelSubject } from 'src/types/level';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
  @Get()
  findAll(): Subject[] {
    return this.subjectService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Subject | null {
    return this.subjectService.findOneById(+id) || null;
  }
  @Get(':title/level')
  findLevelAndSubject(@Param('title') title: string): LevelSubject[] {
    return this.subjectService.levelAndSubjectFromName(title);
  }
  @Post()
  create(@Body() subject: Subject): Subject[] {
    return this.subjectService.create(subject);
  }
}

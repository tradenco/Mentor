import { Body, Controller, Get, Post } from '@nestjs/common';
import { SUBJECTS } from './bdd';
import type { Subject } from './subject';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
  @Get()
  findAll(): Subject[] {
    return SUBJECTS;
  }
  @Post()
  create(@Body() subject: Subject): Subject[] {
    return this.subjectService.create(subject);
  }
}

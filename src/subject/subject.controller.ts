import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  @Get(':id')
  findOne(@Param('id') id: string): Subject | null {
    return this.subjectService.findOne(+id) || null;
  }
  @Post()
  create(@Body() subject: Subject): Subject[] {
    return this.subjectService.create(subject);
  }
}

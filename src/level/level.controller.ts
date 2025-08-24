import { Controller, Get, Param } from '@nestjs/common';
import type { LevelSubject } from '../types/level';
import { LevelService } from 'src/level/level.service';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}
  @Get('subject/:name')
  findWithSubjectByName(@Param('name') name: string): LevelSubject[] {
    return this.levelService.findByNameWithSubject(name);
  }
}

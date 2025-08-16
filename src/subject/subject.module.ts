import { Module } from '@nestjs/common';
import { SubjectController } from 'src/subject/subject.controller';
import { SubjectService } from 'src/subject/subject.service';

@Module({
  exports: [SubjectService],
  controllers: [SubjectController],
  providers: [SubjectService],
})
export class SubjectModule {}

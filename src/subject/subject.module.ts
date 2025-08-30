import { forwardRef, Module } from '@nestjs/common';
import { SubjectController } from 'src/subject/subject.controller';
import { SubjectService } from 'src/subject/subject.service';
import { LevelModule } from 'src/level/level.module';

@Module({
  exports: [SubjectService],
  controllers: [SubjectController],
  providers: [SubjectService],
  imports: [forwardRef(() => LevelModule)],
})
export class SubjectModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { ProfessorModule } from './professor/professor.module';
import { StudentModule } from './student/student.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { CourseModule } from './course/course.module';
import { ClassGroupModule } from './class-group/class-group.module';
import { EventNoteModule } from './event-note/event-note.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { CoordinatorModule } from './coordinator/coordinator.module';
import { NoteModule } from './note/note.module';
@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env',}), 
    MongooseModule.forRoot('mongodb://root:dbadmin@unigourmet_mongodb:27017',{dbName: 'unigourmet_db'}), 
    ProfessorModule, 
    StudentModule, 
    IngredientModule, 
    CourseModule, 
    ClassGroupModule, 
    EventNoteModule, 
    SpecialtyModule, 
    CoordinatorModule, 
    NoteModule,
    RecipeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

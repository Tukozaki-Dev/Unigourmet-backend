import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document; 

@Schema()
export class Note {
    @Prop()
    id: string;

    @Prop()
    createdAt: string;

    @Prop()
    subject: string;

    @Prop()
    region: string;

    @Prop()
    professor: string;

    @Prop()
    note: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
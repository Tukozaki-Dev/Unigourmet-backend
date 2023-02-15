import { NestedProperty } from './../../common/interfaces/nested-property.interface';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema({ timestamps: true })
export class Note {

  @Prop(
    raw({
      _id: { type: String, required: true },
      name: { type: String, required: true },
    }),
  )
  course: NestedProperty;

  @Prop({ required: true })
  region: string;

  @Prop(
    raw({
      _id: { type: String, required: true },
      name: { type: String, required: true },
    }),
  )
  professor: NestedProperty;

  @Prop({ required: true })
  note: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);

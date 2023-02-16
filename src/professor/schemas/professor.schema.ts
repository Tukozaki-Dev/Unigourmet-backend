import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NestedProperty } from 'src/common/interfaces/nested-property.interface';

export type ProfessorDocument = Professor & Document;

@Schema({ timestamps: true })
export class Professor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  registerCode: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  imagePath: string;

  @Prop([
    raw({
      _id: { type: String, required: true },
      name: { type: String, required: true },
    }),
  ])
  specialties: NestedProperty[];

  @Prop([
    raw({
      _id: { type: String, required: true },
      name: { type: String, required: true },
    }),
  ])
  courseListing: NestedProperty[];

  @Prop(
    raw([
      {
        _id: { type: String, required: true },
        name: { type: String, required: true },
      },
    ]),
  )
  classGroups: NestedProperty[];
}

export const ProfessorSchema = SchemaFactory.createForClass(Professor);

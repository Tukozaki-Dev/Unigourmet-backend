import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NestedProperty } from 'src/common/interfaces/nested-property.interface';

export type ClassGroupDocument = ClassGroup & Document;

@Schema({ timestamps: true })
export class ClassGroup {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  registerCode: string;

  @Prop({ required: true })
  semester: number;

  @Prop({ required: true })
  shift: string;

  @Prop({ required: true })
  category: string;

  @Prop([
    raw({
      _id: { type: String, required: true },
      name: { type: String, required: true },
    }),
  ])
  disciplines: NestedProperty[];

  @Prop(
    raw([
      {
        _id: { type: String, required: true },
        name: { type: String, required: true },
      },
    ]),
  )
  students: NestedProperty[];
}

export const ClassGroupSchema = SchemaFactory.createForClass(ClassGroup);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CoordinatorDocument = Coordinator & Document;

@Schema({ timestamps: true })
export class Coordinator {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: number;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  imagePath: string;
}

export const CoordinatorSchema = SchemaFactory.createForClass(Coordinator);

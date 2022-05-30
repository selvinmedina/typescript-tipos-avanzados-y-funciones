import { Id } from '../utilities/id.model';

export interface BaseModel {
  readonly id: Id;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

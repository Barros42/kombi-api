import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  ObjectLiteral,
  Repository,
} from 'typeorm';

export interface IBaseRepository<T extends ObjectLiteral & { id: number }> {
  createEntity(data: DeepPartial<T>): Promise<T>;
  findAll(options?: FindManyOptions<T>): Promise<T[]>;
  findOne(options: FindOneOptions<T>): Promise<T | null>;
  findById(id: number): Promise<T | null>;
  updateEntity(id: number, data: DeepPartial<T>): Promise<T>;
  deleteEntity(id: number): Promise<void>;
  getRepo(): Repository<T>;
}

import {
  Repository,
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
  DataSource,
  EntityTarget,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IBaseRepository } from 'src/common/domain/interfaces/repositories/base.repository.interface';

@Injectable()
export class BaseRepository<T extends ObjectLiteral & { id: number }>
  implements IBaseRepository<T>
{
  private readonly repository: Repository<T>;

  constructor(
    private readonly dataSource: DataSource,
    private readonly entity: EntityTarget<T>,
  ) {
    this.repository = this.dataSource.getRepository(this.entity);
  }

  async createEntity(data: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(data);
    return this.repository.save(entity);
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async findOne(options: FindOneOptions<T>): Promise<T | null> {
    return this.repository.findOne(options);
  }

  async findById(id: number): Promise<T | null> {
    const where: FindOptionsWhere<T> = { id } as FindOptionsWhere<T>;
    return this.repository.findOne({ where });
  }

  async updateEntity(id: number, data: DeepPartial<T>): Promise<T> {
    await this.repository.update(id, data);
    return this.findById(id) as Promise<T>;
  }

  async deleteEntity(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  getRepo(): Repository<T> {
    return this.repository;
  }
}

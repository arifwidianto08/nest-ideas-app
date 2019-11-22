import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaDTO } from './idea.dto';

@Injectable()
export class IdeaService {
  constructor(
    @InjectRepository(IdeaEntity)
    private ideaRepository: Repository<IdeaEntity>,
  ) {}

  async showAll(): Promise<IdeaDTO[]> {
    try {
      return await this.ideaRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data: IdeaDTO): Promise<IdeaDTO> {
    const idea = await this.ideaRepository.create(data);
    await this.ideaRepository.save(idea);
    return idea;
  }

  async read(id: number): Promise<IdeaDTO> {
    try {
      return await this.ideaRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: number, data: Partial<IdeaDTO>): Promise<IdeaDTO> {
    await this.ideaRepository.update({ id }, data);
    return await this.ideaRepository.findOne({ id });
  }

  async delete(id: number): Promise<{ deleted: boolean }> {
    await this.ideaRepository.delete({ id });
    return { deleted: true };
  }
}

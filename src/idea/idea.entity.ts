import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('idea')
export class IdeaEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  idea: string;

  @Column('text')
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}

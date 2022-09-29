import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {

  constructor(@InjectRepository(Project) private projectRepository: Repository<Project>) {

  }

  async create(createProjectInput: CreateProjectInput):Promise<Project> {
    let project = this.projectRepository.create(createProjectInput);
    return this.projectRepository.save(project);
  }

  async findAll():Promise<Project[]> {
    return this.projectRepository.find({
      relations:["employees"]
    });
  }

  async findOne(id: string):Promise<Project> {
    return this.projectRepository.findOne({where:{id:id},relations:["employees"]});
  }

  async update(id: string, project: UpdateProjectInput):Promise<Project> {
    let docToUpdate= await this.projectRepository.findOneBy({id:id});
    docToUpdate.name = project.name;
    docToUpdate.code = project.code;

    return this.projectRepository.save(docToUpdate)
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}

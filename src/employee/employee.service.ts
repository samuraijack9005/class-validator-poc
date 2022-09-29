import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectService } from 'src/project/project.service';
import { Project } from 'src/project/entities/project.entity';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './dto/employeeCreate.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {

    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>,
     private projectService: ProjectService) {

    }

    async findAll():Promise<Employee[]>{
        return this.employeeRepository.find();
    }

    async create(employee:EmployeeCreateDTO):Promise<Employee> {
        let emp = this.employeeRepository.create(employee);

        return this.employeeRepository.save(emp);

    }

    async findProject(id:string):Promise<Project> {
        //this.projectService.findOne(id).then(res=>console.log(res));
        console.log(id);
        
        return this.projectService.findOne(id);
    }

}

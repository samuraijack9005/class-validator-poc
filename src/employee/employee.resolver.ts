
import { Resolver,Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { EmployeeCreateDTO } from './dto/employeeCreate.dto';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';
import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common'; 

import { EmployeeValidatorPipe } from './employee-validator.pipe';

@Resolver(()=>Employee)
export class EmployeeResolver {

    constructor(private service:EmployeeService) {

    }

    @Query(()=>[Employee],{name:'getAllEmployees'})
    @UsePipes()
    getAll() {

        return this.service.findAll();

    }

    @Mutation(()=>Employee,{name:'createEmployee'})
    //@UsePipes(ValidationPipe)
    create(@Args('employeeInput') employee: EmployeeCreateDTO) {

        return this.service.create(employee);
    }

    @ResolveField(()=>Project)
    project(@Parent() employee:Employee){
        return this.service.findProject(employee.projectId);
    }

}

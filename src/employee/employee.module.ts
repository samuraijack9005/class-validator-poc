import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from 'src/project/project.module';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Employee]), ProjectModule],
  providers: [EmployeeResolver, EmployeeService]
})
export class EmployeeModule {}

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [EmployeeModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: join(process.cwd(), 'src/graphql-shema.gql'),
    driver: ApolloDriver
  }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "192.168.8.185",
      port: 5432,
      username: "dbadmin",
      password: "demo1234",
      database: "employeedata",
      entities: ["dist/**/*.entity{.ts,.js}"],
      // "logging": [
      //   "error"
      // ],
      // "extra": {
      //   "connectionLimit": 5
      // },
      synchronize: true
    }),
    ProjectModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

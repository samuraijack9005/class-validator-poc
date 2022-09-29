import { InputType,Field } from "@nestjs/graphql"
import { Min, Max, Length, IsUUID} from "class-validator";

@InputType()
export class EmployeeCreateDTO {
   

@Field()
@Length(2, 8)
firstName:string

@Field()
lastName:string

@Field()
designation:string

@Field({nullable:true})
city:string

@Field()
@IsUUID('all')
projectId:string




}
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class EmployeeValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("inside pipe");
    
    console.log(value);
    console.log(metadata);
    
    console.log("end of pipe");
    
    return value;
  }
}

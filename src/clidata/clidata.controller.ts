import { Controller, Get, Param } from '@nestjs/common';
import { CliDataService } from './clidata.service';

@Controller('clidata')
export class ClidataController {
    constructor(private readonly cliDataService: CliDataService){}
    
    @Get(':matricula')
    getStudentByMatr(@Param('matricula') matricParam:string){
        return this.cliDataService.processParam(matricParam);
    }
}
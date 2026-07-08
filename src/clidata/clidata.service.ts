import {Injectable} from '@nestjs/common';

@Injectable()
export class CliDataService {
    processParam(matricula: string): string{
        return "Matricula: " + matricula;
    }
}
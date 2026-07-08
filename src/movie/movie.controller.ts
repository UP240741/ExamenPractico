//7.Crea la ruta GET "/movies" que regrese el estado actual del arreglo "myMovies"
import { Controller, Get, Post, Param, Query} from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService){}

    @Get()
    obtenerTodas(){
        return this.movieService.getMovies();
    }

    @Post()
    agregar(@Query('title') title: string) {
        return this.movieService.agregarMovie(title);
    }

    @Get('search/:index')
    buscar(@Param('index') index: string) {
        return this.movieService.buscarPorIndice(Number(index));
    }

    @Get('size')
    obtenerCantidad() {
        return this.movieService.obtenerSize();
    }
}
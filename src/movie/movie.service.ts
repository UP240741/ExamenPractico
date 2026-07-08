//5 y 6.Haz que el archivo src/movie/movie.service.ts almacene un atributo "myMovies" de tipo string[] con el valor inicial[]
import { Injectable } from '@nestjs/common';
@Injectable()
export class MovieService {
    private myMovies: string[] = [];
    //7.Crea la ruta GET "/movies" que regrese el estado actual del arreglo "myMovies"
    getMovies(): string[]{
    return this.myMovies;
}
//8.Crea la ruta POST "/movies" que lea un query param llamado "title" y que agregue el valor de title al arreglo "myMovies" regresa la nueva lista de "myMovies" (usa el metodo .push() disponible en cualquier arreglo)
agregarMovie(title: string): string[]{
    this.myMovies.push(title);
    return this.myMovies;
}
//9.Crea la ruta GET "/movies/search/:index" que regrese el string en la posicion index del arreglo "myMovies" (usa la sintaxis myMovies[index] para obtener el valor)
buscarPorIndice(index: number): string {
    return this.myMovies[index];
}
//10.Crea la ruta GET "/movies/search/size" que responda la cantidad de peliculas en "myMovies" (usa el atributo .length disponible en cualquer arreglo)
obtenerSize() number {
    return this.Movies.length;
}
}


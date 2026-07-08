import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MovieController } from './movie/movie.controller';
import { AppService } from './app.service';
import { MovieService } from './movie/movie.service';

@Module({
  imports: [],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule {}

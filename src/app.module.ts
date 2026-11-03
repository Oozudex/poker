import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule } from '@nestjs/config';
import { CatsController } from './cats/cats.controller.js';
import { CatsService } from './cats/cats.service.js';
import { TablesController } from './tables/tables.controller.js';
import { TablesService } from './tables/tables.service.js';
import { DecksService } from './tables/deck.service.js';
import { PlayersController } from './players/players.controller.js';
import { PlayersService } from './players/players.service.js';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, CatsController, TablesController, PlayersController],
  providers: [AppService, CatsService, TablesService, DecksService, PlayersService],
})
export class AppModule { }

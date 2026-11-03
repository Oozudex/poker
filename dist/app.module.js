var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [ConfigModule.forRoot()],
        controllers: [AppController, CatsController, TablesController, PlayersController],
        providers: [AppService, CatsService, TablesService, DecksService, PlayersService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map
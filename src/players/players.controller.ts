import { Controller, Dependencies, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PlayersService } from './players.service.js';

@Controller('players')
@Dependencies(PlayersService)
export class PlayersController {
    playersService: PlayersService
    constructor(playersService: PlayersService) {
        this.playersService = playersService;
    }

    @Get()
    findAll() {
        return this.playersService.getAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.playersService.getOne(id);
    }

    @Post()
    createPlayer(@Body('name') name: string) {
        return this.playersService.createPlayer(name);
    }
}

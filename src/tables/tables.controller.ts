import { Controller, Dependencies, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TablesService } from './tables.service.js';
import { DecksService } from './deck.service.js';

@Controller('tables')
@Dependencies(TablesService, DecksService)
export class TablesController {
    tablesService: TablesService
    deckService: DecksService
    constructor(tablesService: TablesService, deckService: DecksService) {
        this.tablesService = tablesService;
        this.deckService = deckService;
    }

    @Get()
    findAll() {
        return this.tablesService.getAll();
    }

    @Get('deck')
    returnDeck() {
        const deck = this.deckService.createDeck();
        return this.deckService.shuffleDeck(deck);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.tablesService.getOne(id);
    }

    @Post()
    createTable(@Body('name') name: string, @Body('maxPlayers') maxPlayers: number) {
        return this.tablesService.createTable(name, maxPlayers);
    }
}

import { Controller, Dependencies, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TablesService } from './tables.service.js';

@Controller('tables')
@Dependencies(TablesService)
export class TablesController {
    tablesService: TablesService
    constructor(tablesService: TablesService) {
        this.tablesService = tablesService;
    }

    @Get()
    findAll() {
        return this.tablesService.getAll();
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

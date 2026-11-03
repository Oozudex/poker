// cats.controller.ts
import { Controller, Dependencies, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CatsService } from './cats.service.js';

@Controller('cats')
@Dependencies(CatsService)
export class CatsController {
    catsService: CatsService
    constructor(catsService: CatsService) {
        this.catsService = catsService;
    }

    @Get()
    findAll() {
        return this.catsService.getAll();
    }

    @Get(':position')
    findOne(@Param('position') position: number) {
        return this.catsService.getOne(position);

    }

    @Post()
    createCat(@Body('name') name: string) {
        return this.catsService.createCat(name);
    }
}
// cats.controller.ts

import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll() {
        return 'This action returns all cats';
    }
    @Get(':name')
    findOne(@Param('name') name: string) {
        return 'This action return cat named ' + name;

    }
}
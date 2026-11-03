var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Dependencies, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TablesService } from './tables.service.js';
import { DecksService } from './deck.service.js';
let TablesController = class TablesController {
    tablesService;
    deckService;
    constructor(tablesService, deckService) {
        this.tablesService = tablesService;
        this.deckService = deckService;
    }
    findAll() {
        return this.tablesService.getAll();
    }
    returnDeck() {
        const deck = this.deckService.createDeck();
        return this.deckService.shuffleDeck(deck);
    }
    findOne(id) {
        return this.tablesService.getOne(id);
    }
    createTable(name, maxPlayers) {
        return this.tablesService.createTable(name, maxPlayers);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "findAll", null);
__decorate([
    Get('deck'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "returnDeck", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "findOne", null);
__decorate([
    Post(),
    __param(0, Body('name')),
    __param(1, Body('maxPlayers')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "createTable", null);
TablesController = __decorate([
    Controller('tables'),
    Dependencies(TablesService, DecksService),
    __metadata("design:paramtypes", [TablesService, DecksService])
], TablesController);
export { TablesController };
//# sourceMappingURL=tables.controller.js.map
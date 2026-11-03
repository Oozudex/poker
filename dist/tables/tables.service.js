var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
let TablesService = class TablesService {
    listTables;
    constructor() {
        this.listTables = [
            { id: 1, name: 'Table 1', playerCount: 0, maxPlayers: 6 },
            { id: 2, name: 'Table 2', playerCount: 0, maxPlayers: 9 },
        ];
    }
    getAll() {
        return this.listTables;
    }
    getOne(id) {
        const table = this.listTables.find((table) => table.id === id);
        if (!table) {
            throw new NotFoundException('Table introuvable');
        }
        return table;
    }
    createTable(name, maxPlayers) {
        const table = {
            id: this.listTables.length + 1,
            name: name,
            playerCount: 0,
            maxPlayers: maxPlayers,
        };
        this.listTables.push(table);
        return table;
    }
};
TablesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], TablesService);
export { TablesService };
//# sourceMappingURL=tables.service.js.map
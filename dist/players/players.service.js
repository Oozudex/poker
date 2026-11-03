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
let PlayersService = class PlayersService {
    listPlayers;
    constructor() {
        this.listPlayers = [
            { id: 1, name: 'Mateo', balance: 1000 },
            { id: 2, name: 'Mathilde', balance: 1000 },
        ];
    }
    getAll() {
        return this.listPlayers;
    }
    getOne(id) {
        const player = this.listPlayers.find((player) => player.id === id);
        if (!player) {
            throw new NotFoundException('Joueur introuvable');
        }
        return player;
    }
    createPlayer(name) {
        const player = {
            id: this.listPlayers.length + 1,
            name: name,
            balance: 1000,
        };
        this.listPlayers.push(player);
        return player;
    }
};
PlayersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], PlayersService);
export { PlayersService };
//# sourceMappingURL=players.service.js.map
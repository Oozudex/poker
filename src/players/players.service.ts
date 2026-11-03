import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PlayersService {

    listPlayers: { id: number; name: string; balance: number }[];
    constructor() {
        this.listPlayers = [
            { id: 1, name: 'Mateo', balance: 1000 },
            { id: 2, name: 'Mathilde', balance: 1000 },
        ];
    }

    getAll() {
        return this.listPlayers;
    }

    getOne(id: number) {
        const player = this.listPlayers.find((player) => player.id === id);
        if (!player) {
            throw new NotFoundException('Joueur introuvable');
        }
        return player;
    }

    createPlayer(name: string) {
        const player = {
            id: this.listPlayers.length + 1,
            name: name,
            balance: 1000,
        };
        this.listPlayers.push(player);
        return player;
    }

}

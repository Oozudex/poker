import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TablesService {

    listTables: { id: number; name: string; playerCount: number; maxPlayers: number }[];
    constructor() {
        this.listTables = [
            { id: 1, name: 'Table 1', playerCount: 0, maxPlayers: 6 },
            { id: 2, name: 'Table 2', playerCount: 0, maxPlayers: 9 },
        ];
    }

    getAll() {
        return this.listTables;
    }

    getOne(id: number) {
        const table = this.listTables.find((table) => table.id === id);
        if (!table) {
            throw new NotFoundException('Table introuvable');
        }
        return table;
    }

    createTable(name: string, maxPlayers: number) {
        const table = {
            id: this.listTables.length + 1,
            name: name,
            playerCount: 0,
            maxPlayers: maxPlayers,
        };
        this.listTables.push(table);
        return table;
    }

}

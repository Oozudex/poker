import { TablesService } from './tables.service.js';
import { DecksService } from './deck.service.js';
export declare class TablesController {
    tablesService: TablesService;
    deckService: DecksService;
    constructor(tablesService: TablesService, deckService: DecksService);
    findAll(): {
        id: number;
        name: string;
        playerCount: number;
        maxPlayers: number;
    }[];
    returnDeck(): {
        id: number;
        name: string;
        puissance: number;
        signe: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        playerCount: number;
        maxPlayers: number;
    };
    createTable(name: string, maxPlayers: number): {
        id: number;
        name: string;
        playerCount: number;
        maxPlayers: number;
    };
}

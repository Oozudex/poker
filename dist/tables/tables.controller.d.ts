import { TablesService } from './tables.service.js';
export declare class TablesController {
    tablesService: TablesService;
    constructor(tablesService: TablesService);
    findAll(): {
        id: number;
        name: string;
        playerCount: number;
        maxPlayers: number;
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

export declare class TablesService {
    listTables: {
        id: number;
        name: string;
        playerCount: number;
        maxPlayers: number;
    }[];
    constructor();
    getAll(): {
        id: number;
        name: string;
        playerCount: number;
        maxPlayers: number;
    }[];
    getOne(id: number): {
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

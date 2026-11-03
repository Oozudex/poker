export declare class PlayersService {
    listPlayers: {
        id: number;
        name: string;
        balance: number;
    }[];
    constructor();
    getAll(): {
        id: number;
        name: string;
        balance: number;
    }[];
    getOne(id: number): {
        id: number;
        name: string;
        balance: number;
    };
    createPlayer(name: string): {
        id: number;
        name: string;
        balance: number;
    };
}

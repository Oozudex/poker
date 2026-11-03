import { PlayersService } from './players.service.js';
export declare class PlayersController {
    playersService: PlayersService;
    constructor(playersService: PlayersService);
    findAll(): {
        id: number;
        name: string;
        balance: number;
    }[];
    findOne(id: number): {
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

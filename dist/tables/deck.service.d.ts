export declare class DecksService {
    createDeck(): {
        id: number;
        name: string;
        puissance: number;
        signe: string;
    }[];
    shuffleDeck(deck: {
        id: number;
        name: string;
        puissance: number;
        signe: string;
    }[]): {
        id: number;
        name: string;
        puissance: number;
        signe: string;
    }[];
}

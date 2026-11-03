export declare class CatsService {
    listCats: string[];
    constructor();
    getAll(): string[];
    getOne(position: number): string | undefined;
    createCat(name: string): void;
}

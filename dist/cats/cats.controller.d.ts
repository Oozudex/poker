import { CatsService } from './cats.service.js';
export declare class CatsController {
    catsService: CatsService;
    constructor(catsService: CatsService);
    findAll(): string[];
    findOne(position: number): string | undefined;
    createCat(name: string): void;
}

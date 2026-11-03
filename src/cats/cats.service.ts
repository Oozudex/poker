import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

    listCats: string[];
    constructor() {
        this.listCats = ['Baya', 'Guizmo'];
    }

    getAll() {
        return this.listCats;
    }

    getOne(position: number) {
        if (position < this.listCats.length) {
            return 'This action return cat named ' + this.listCats[position];
        }
    }

    createCat(name: string) {
        this.listCats.push(name);
    }

}

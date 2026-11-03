var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
let CatsService = class CatsService {
    listCats;
    constructor() {
        this.listCats = ['Baya', 'Guizmo'];
    }
    getAll() {
        return this.listCats;
    }
    getOne(position) {
        if (position < this.listCats.length) {
            return 'This action return cat named ' + this.listCats[position];
        }
    }
    createCat(name) {
        this.listCats.push(name);
    }
};
CatsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CatsService);
export { CatsService };
//# sourceMappingURL=cats.service.js.map
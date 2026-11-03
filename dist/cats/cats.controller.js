var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Dependencies, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service.js';
let CatsController = class CatsController {
    catsService;
    constructor(catsService) {
        this.catsService = catsService;
    }
    findAll() {
        return this.catsService.getAll();
    }
    findOne(position) {
        return this.catsService.getOne(position);
    }
    createCat(name) {
        return this.catsService.createCat(name);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findAll", null);
__decorate([
    Get(':position'),
    __param(0, Param('position')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findOne", null);
__decorate([
    Post(),
    __param(0, Body('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "createCat", null);
CatsController = __decorate([
    Controller('cats'),
    Dependencies(CatsService),
    __metadata("design:paramtypes", [CatsService])
], CatsController);
export { CatsController };
//# sourceMappingURL=cats.controller.js.map
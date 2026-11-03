var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
let DecksService = class DecksService {
    createDeck() {
        const deck = [];
        const signes = ['Coeur', 'Carreau', 'Trefle', 'Pique'];
        const names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Dame', 'Roi', 'As'];
        for (const signe of signes) {
            for (let i = 0; i < names.length; i++) {
                deck.push({
                    id: deck.length + 1,
                    name: names[i],
                    puissance: i + 2,
                    signe: signe,
                });
            }
        }
        return deck;
    }
    shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return deck;
    }
};
DecksService = __decorate([
    Injectable()
], DecksService);
export { DecksService };
//# sourceMappingURL=deck.service.js.map
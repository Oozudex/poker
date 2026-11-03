import { Injectable } from '@nestjs/common';

@Injectable()
export class DecksService {

    createDeck() {
        const deck: { id: number; name: string; puissance: number; signe: string }[] = [];
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

    shuffleDeck(deck: { id: number, name: string, puissance: number, signe: string }[]) {
        // On parcourt le paquet de la fin vers le début
        // et on échange chaque carte avec une carte au hasard placée avant elle
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return deck;
    }

}

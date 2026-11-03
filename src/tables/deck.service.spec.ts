import { Test, TestingModule } from '@nestjs/testing';
import { DecksService } from './deck.service.js';

describe('DecksService', () => {
  let service: DecksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DecksService],
    }).compile();

    service = module.get<DecksService>(DecksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createDeck', () => {
    it('should create a deck of 52 cards', () => {
      expect(service.createDeck().length).toBe(52);
    });

    it('should have 13 cards of each signe', () => {
      const deck = service.createDeck();
      expect(deck.filter((card) => card.signe === 'Coeur').length).toBe(13);
      expect(deck.filter((card) => card.signe === 'Carreau').length).toBe(13);
      expect(deck.filter((card) => card.signe === 'Trefle').length).toBe(13);
      expect(deck.filter((card) => card.signe === 'Pique').length).toBe(13);
    });

    it('should have only 4 different signes', () => {
      const signes = service.createDeck().map((card) => card.signe);
      expect(new Set(signes).size).toBe(4);
    });

    it('should have 4 cards of each name', () => {
      const deck = service.createDeck();
      expect(deck.filter((card) => card.name === 'As').length).toBe(4);
      expect(deck.filter((card) => card.name === 'Roi').length).toBe(4);
      expect(deck.filter((card) => card.name === '2').length).toBe(4);
    });

    it('should have 52 different ids', () => {
      const ids = service.createDeck().map((card) => card.id);
      expect(new Set(ids).size).toBe(52);
    });

    it('should not have two identical cards', () => {
      const cards = service.createDeck().map((card) => card.name + ' de ' + card.signe);
      expect(new Set(cards).size).toBe(52);
    });

    it('should give 2 to the "2"', () => {
      const card = service.createDeck().find((card) => card.name === '2');
      expect(card?.puissance).toBe(2);
    });

    it('should give 10 to the "10"', () => {
      const card = service.createDeck().find((card) => card.name === '10');
      expect(card?.puissance).toBe(10);
    });

    it('should give 11 to the Valet, 12 to the Dame and 13 to the Roi', () => {
      const deck = service.createDeck();
      expect(deck.find((card) => card.name === 'Valet')?.puissance).toBe(11);
      expect(deck.find((card) => card.name === 'Dame')?.puissance).toBe(12);
      expect(deck.find((card) => card.name === 'Roi')?.puissance).toBe(13);
    });

    it('should give 14 to the As, the strongest card', () => {
      const deck = service.createDeck();
      const as = deck.find((card) => card.name === 'As');
      const maxPuissance = Math.max(...deck.map((card) => card.puissance));
      expect(as?.puissance).toBe(14);
      expect(maxPuissance).toBe(14);
    });

    it('should have puissances between 2 and 14', () => {
      for (const card of service.createDeck()) {
        expect(card.puissance).toBeGreaterThanOrEqual(2);
        expect(card.puissance).toBeLessThanOrEqual(14);
      }
    });

    it('should create a new deck each time', () => {
      const first = service.createDeck();
      const second = service.createDeck();
      expect(first).not.toBe(second);
      expect(first).toEqual(second);
    });
  });

  describe('shuffleDeck', () => {
    it('should keep 52 cards after shuffle', () => {
      expect(service.shuffleDeck(service.createDeck()).length).toBe(52);
    });

    it('should keep the same 52 cards after shuffle', () => {
      const ids = service.shuffleDeck(service.createDeck()).map((card) => card.id);
      expect(new Set(ids).size).toBe(52);
    });

    it('should change the order of the cards after shuffle', () => {
      const before = service.createDeck().map((card) => card.id);
      const after = service.shuffleDeck(service.createDeck()).map((card) => card.id);
      expect(after).not.toEqual(before);
    });

    it('should give a different order each time', () => {
      const first = service.shuffleDeck(service.createDeck()).map((card) => card.id);
      const second = service.shuffleDeck(service.createDeck()).map((card) => card.id);
      expect(first).not.toEqual(second);
    });

    it('should not always put the same card on top', () => {
      const topCards = new Set<number>();
      for (let i = 0; i < 20; i++) {
        topCards.add(service.shuffleDeck(service.createDeck())[0].id);
      }
      expect(topCards.size).toBeGreaterThan(1);
    });
  });
});

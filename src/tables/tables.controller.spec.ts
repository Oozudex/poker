import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { TablesController } from './tables.controller.js';
import { TablesService } from './tables.service.js';
import { DecksService } from './deck.service.js';

describe('TablesController', () => {
  let controller: TablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TablesController],
      providers: [TablesService, DecksService],
    }).compile();

    controller = module.get<TablesController>(TablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /tables', () => {
    it('should return all the tables', () => {
      expect(controller.findAll().length).toBe(2);
    });
  });

  describe('GET /tables/:id', () => {
    it('should return the table with the given id', () => {
      expect(controller.findOne(2).name).toBe('Table 2');
    });

    it('should throw NotFoundException if the table does not exist', () => {
      expect(() => controller.findOne(99)).toThrow(NotFoundException);
    });
  });

  describe('POST /tables', () => {
    it('should create a table', () => {
      const table = controller.createTable('Ma table', 5);
      expect(table.name).toBe('Ma table');
      expect(table.maxPlayers).toBe(5);
    });

    it('should add the table to the list', () => {
      controller.createTable('Ma table', 5);
      expect(controller.findAll().length).toBe(3);
    });
  });

  describe('GET /tables/deck', () => {
    it('should return a deck of 52 cards', () => {
      expect(controller.returnDeck().length).toBe(52);
    });

    it('should return a shuffled deck', () => {
      const ids = controller.returnDeck().map((card) => card.id);
      const sortedIds = [...ids].sort((a, b) => a - b);
      expect(ids).not.toEqual(sortedIds);
    });
  });
});

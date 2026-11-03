import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { TablesService } from './tables.service.js';

describe('TablesService', () => {
  let service: TablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TablesService],
    }).compile();

    service = module.get<TablesService>(TablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return the 2 default tables', () => {
      expect(service.getAll().length).toBe(2);
    });

    it('should return tables with no player seated', () => {
      for (const table of service.getAll()) {
        expect(table.playerCount).toBe(0);
      }
    });
  });

  describe('getOne', () => {
    it('should return the table with the given id', () => {
      const table = service.getOne(1);
      expect(table.id).toBe(1);
      expect(table.name).toBe('Table 1');
    });

    it('should return the right maxPlayers', () => {
      expect(service.getOne(1).maxPlayers).toBe(6);
      expect(service.getOne(2).maxPlayers).toBe(9);
    });

    it('should throw NotFoundException if the table does not exist', () => {
      expect(() => service.getOne(99)).toThrow(NotFoundException);
    });

    it('should throw NotFoundException with id 0', () => {
      expect(() => service.getOne(0)).toThrow(NotFoundException);
    });
  });

  describe('createTable', () => {
    it('should return the new table', () => {
      const table = service.createTable('Ma table', 4);
      expect(table.name).toBe('Ma table');
      expect(table.maxPlayers).toBe(4);
    });

    it('should create a table with no player seated', () => {
      const table = service.createTable('Ma table', 4);
      expect(table.playerCount).toBe(0);
    });

    it('should give the next id to the new table', () => {
      const table = service.createTable('Ma table', 4);
      expect(table.id).toBe(3);
    });

    it('should add the table to the list', () => {
      service.createTable('Ma table', 4);
      expect(service.getAll().length).toBe(3);
    });

    it('should find the new table with getOne', () => {
      const table = service.createTable('Ma table', 4);
      expect(service.getOne(table.id)).toEqual(table);
    });

    it('should give a different id to each new table', () => {
      const first = service.createTable('Table A', 4);
      const second = service.createTable('Table B', 6);
      expect(first.id).not.toBe(second.id);
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PlayersService } from './players.service.js';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersService],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return the 2 default players', () => {
      expect(service.getAll().length).toBe(2);
    });

    it('should give 1000 to every default player', () => {
      for (const player of service.getAll()) {
        expect(player.balance).toBe(1000);
      }
    });
  });

  describe('getOne', () => {
    it('should return the player with the given id', () => {
      const player = service.getOne(1);
      expect(player.id).toBe(1);
      expect(player.name).toBe('Mateo');
    });

    it('should throw NotFoundException if the player does not exist', () => {
      expect(() => service.getOne(99)).toThrow(NotFoundException);
    });

    it('should throw NotFoundException with a negative id', () => {
      expect(() => service.getOne(-1)).toThrow(NotFoundException);
    });
  });

  describe('createPlayer', () => {
    it('should give 1000 to a new player', () => {
      const player = service.createPlayer('Test');
      expect(player.balance).toBe(1000);
    });

    it('should keep the name of the new player', () => {
      const player = service.createPlayer('Alice');
      expect(player.name).toBe('Alice');
    });

    it('should give the next id to the new player', () => {
      const player = service.createPlayer('Alice');
      expect(player.id).toBe(3);
    });

    it('should add the player to the list', () => {
      service.createPlayer('Alice');
      expect(service.getAll().length).toBe(3);
    });

    it('should find the new player with getOne', () => {
      const player = service.createPlayer('Alice');
      expect(service.getOne(player.id)).toEqual(player);
    });

    it('should give a different id to each new player', () => {
      const first = service.createPlayer('Alice');
      const second = service.createPlayer('Bob');
      expect(first.id).not.toBe(second.id);
    });

    it('should not change the balance of the other players', () => {
      service.createPlayer('Alice');
      expect(service.getOne(1).balance).toBe(1000);
    });
  });
});

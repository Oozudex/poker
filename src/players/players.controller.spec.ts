import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { PlayersController } from './players.controller.js';
import { PlayersService } from './players.service.js';

describe('PlayersController', () => {
  let controller: PlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [PlayersService],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /players', () => {
    it('should return all the players', () => {
      expect(controller.findAll().length).toBe(2);
    });
  });

  describe('GET /players/:id', () => {
    it('should return the player with the given id', () => {
      expect(controller.findOne(2).name).toBe('Mathilde');
    });

    it('should throw NotFoundException if the player does not exist', () => {
      expect(() => controller.findOne(99)).toThrow(NotFoundException);
    });
  });

  describe('POST /players', () => {
    it('should create a player with 1000', () => {
      const player = controller.createPlayer('Alice');
      expect(player.name).toBe('Alice');
      expect(player.balance).toBe(1000);
    });

    it('should add the player to the list', () => {
      controller.createPlayer('Alice');
      expect(controller.findAll().length).toBe(3);
    });
  });
});

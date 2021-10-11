import { TestBed } from '@angular/core/testing';

import { GameStorageService } from './game-storage.service';

describe('GameStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GameStorageService
    ]
  }));

  it('should be created', () => {
    const service: GameStorageService = TestBed.get(GameStorageService);
    expect(service).toBeTruthy();
  });

  it('should accurately process a complete bowling game record', () => {
    const service: GameStorageService = TestBed.get(GameStorageService);

    let expectedScore = 110;
    let actualScore = service.ActiveGame.value.Score();
    expect(actualScore).toEqual(expectedScore);
  });
});

import { Injectable } from '@angular/core';
import { BowlingGame } from '../data/BowlingGame';
import { Frame } from 'src/data/Frame';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class GameStorageService {

  public ActiveGame: BehaviorSubject<BowlingGame> 
    = new BehaviorSubject<BowlingGame>(null);

  public Games: BehaviorSubject<BowlingGame[]>
    = new BehaviorSubject<BowlingGame[]>(null);
    


  constructor() {
    let gameDate = new Date(Date.parse("2021-10-09 00:00:01"));
    let frames = [
      new Frame([ 4 , 3 ]),
      new Frame([ 7 , 3 ]),
      new Frame([ 5 , 2 ]),
      new Frame([ 8 , 1 ]),
      new Frame([ 4 , 6 ]),
      new Frame([ 2 , 4 ]),
      new Frame([ 8 , 0 ]),
      new Frame([ 8 , 0 ]),
      new Frame([ 8 , 2 ]),
      new Frame([ 10 , 1, 7 ])
    ];

    let activeGame: BowlingGame = 
      new BowlingGame(frames, gameDate);
    
    this.ActiveGame.next(activeGame);
    this.PropagateGames([ activeGame ])
  }

  PropagateGames(games: BowlingGame[]) {
    games.forEach(_ => _.Score());
    this.Games.next(games);
  }

  public SaveThrow(pinsKnockedDown: number) {
    let games = this.Games.value;
    let game = games[games.length - 1];
    let lastFrame = game.Frames[game.Frames.length - 1];
    if (game.Frames.length == 10
        && lastFrame.Throws.length > 0
        && lastFrame.IsOpen == false) {
      game = new BowlingGame([], new Date());
      games.push(game);
    }

    game.SaveThrow(pinsKnockedDown);
    this.PropagateGames(games);
    console.log("NewGames", games);
  }

  

}

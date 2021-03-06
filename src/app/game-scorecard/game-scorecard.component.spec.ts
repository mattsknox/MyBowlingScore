import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScorecardComponent } from './game-scorecard.component';
import { FrameboxComponent } from '../framebox/framebox.component';
import { ScoreboxComponent } from '../scorebox/scorebox.component';
import { GameStorageService } from '../game-storage.service';
import { BowlingGame } from 'src/data/BowlingGame';

describe('GameScorecardComponent', () => {
  let component: GameScorecardComponent;
  let fixture: ComponentFixture<GameScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GameScorecardComponent,
        FrameboxComponent,
        ScoreboxComponent
     ],
     providers: [
      GameStorageService
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScorecardComponent);
    component = fixture.componentInstance;
    component.Game = new BowlingGame([], new Date());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

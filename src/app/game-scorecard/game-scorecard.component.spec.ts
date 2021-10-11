import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScorecardComponent } from './game-scorecard.component';
import { FrameboxComponent } from '../framebox/framebox.component';
import { ScoreboxComponent } from '../scorebox/scorebox.component';

describe('GameScorecardComponent', () => {
  let component: GameScorecardComponent;
  let fixture: ComponentFixture<GameScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GameScorecardComponent,
        FrameboxComponent,
        ScoreboxComponent
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

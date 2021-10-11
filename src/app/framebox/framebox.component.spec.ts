import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameboxComponent } from './framebox.component';

describe('FrameboxComponent', () => {
  let component: FrameboxComponent;
  let fixture: ComponentFixture<FrameboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

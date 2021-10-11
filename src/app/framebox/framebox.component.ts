import { Component, OnInit, Input } from '@angular/core';
import { Frame } from '../../data/Frame';

@Component({
  selector: 'framebox',
  templateUrl: './framebox.component.html',
  styleUrls: ['./framebox.component.scss']
})
export class FrameboxComponent implements OnInit {

  @Input()
  Frame: Frame;

  constructor() { }

  ngOnInit() {
  }

}

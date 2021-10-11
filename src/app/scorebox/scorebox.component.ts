import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'scorebox',
  templateUrl: './scorebox.component.html',
  styleUrls: ['./scorebox.component.scss']
})
export class ScoreboxComponent implements OnInit {

  @Input()
  GameScore: number;

  constructor() { }

  ngOnInit() {
  }

}

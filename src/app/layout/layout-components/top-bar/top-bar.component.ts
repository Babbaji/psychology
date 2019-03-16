import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Output() openMenuEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openMenu() {
    this.openMenuEmitter.emit(true);
  }
}

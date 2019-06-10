import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-big-five-quick-test',
  templateUrl: './big-five-quick-test.component.html',
  styleUrls: ['./big-five-quick-test.component.scss']
})
export class BigFiveQuickTestComponent implements OnInit {

    creativo: number;
    fantasioso: number;
    originale: number;

    preciso: number;
    ordinato: number;
    diligente: number;

    estroverso: number;
    espansivo: number;
    chiuso: number;

    altruista: number;
    disponibile: number;
    generoso: number;

    emotivo: number;
    ansioso: number;
    nervoso: number;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}

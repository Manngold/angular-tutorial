import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HEROES } from '../shared/mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HerosComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() {}

  ngOnInit(): void {}
}

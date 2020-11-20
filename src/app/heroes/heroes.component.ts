import { MessagesService } from './../services/messages.service';
import { HeroService } from './../services/hero.service';

import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HerosComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    public messageService: MessagesService // template binding을 위해서는 public으로
  ) {}

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`${hero.name} is selected`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

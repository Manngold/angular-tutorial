import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HEROES } from '../shared/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id} `);
    return of(HEROES.find((hero) => hero.id === id));
  }
}

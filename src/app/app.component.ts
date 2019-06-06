import { Component } from '@angular/core';
import {MessageService} from './message.service';
import {HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private heroService: HeroService) {
    const heroToDelete = 12;
    heroService.deleteHero(heroToDelete).subscribe(
      next => heroService.getHero(heroToDelete).subscribe(
        hero => console.log(hero),
        error => console.log(error)
      )
    )
  }
}

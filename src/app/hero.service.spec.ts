import {Hero} from './hero';
import {HttpErrorResponse} from '@angular/common/http';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {asyncData, asyncError} from './testing/async-observable-helpers';
import {reject} from 'q';
import {Observable, of} from 'rxjs';

let httpClientSpy: { get: jasmine.Spy };
let heroService: HeroService;
let messageService: MessageService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
  messageService = new MessageService();
  heroService = new HeroService(<any> httpClientSpy, messageService);
});

it('should return expected heroes (HttpClient called once)', () => {
  const expectedHeroes: Hero[] =
    [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

  httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

  heroService.getHeroes().subscribe(
    heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});

it('should return an error when the server returns a 404', () => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });

  httpClientSpy.get.and.returnValue(asyncError(errorResponse));

  heroService.getHeroes().subscribe(
    response => {
      // @ts-ignore
      expect(response.status).toEqual(404)
    },
    error  => fail
  );
});

it('getNo404 should return empty', () => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });
  const notExistingHero = -1;

  httpClientSpy.get.and.returnValue(asyncError(errorResponse));

  heroService.getHeroNo404(notExistingHero).subscribe(
    response => {
      // @ts-ignore
      expect(response.status).toEqual(404)
    },
    error  => fail
  );
});

it('should return hero', () => {
  const expectedHero: Hero = { id: 1, name: 'A' };

  httpClientSpy.get.and.returnValue(asyncData(expectedHero));

  heroService.getHero(expectedHero.id).subscribe(
    hero => expect(hero).toEqual(expectedHero),
    fail
  );
});

it('should add hero', () => {
  const expectedHero: Hero = { id: 1, name: 'A' };

  heroService.addHero(expectedHero).subscribe(
    () => expect(messageService.messages[messageService.messages.length - 1]).toContain(expectedHero.id.toString()),
    fail
  );
});

it('should update hero', () => {
  const heroes = { old: { id: 1000, name: 'old' }, new: { id: 1000, name: 'new' } };

  heroService.addHero(heroes.old).subscribe(
    () => heroService.updateHero(heroes.new).subscribe(
      () => expect(messageService.messages[messageService.messages.length - 1]).toContain('updated hero id=' + heroes.old.id)
    )
  );
});

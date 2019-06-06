import {asyncData, asyncError} from './testing/async-observable-helpers';
import {Hero} from './hero';
import {HttpErrorResponse} from '@angular/common/http';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';

let httpClientSpy: { get: jasmine.Spy };
let heroService: HeroService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  heroService = new HeroService(<any> httpClientSpy, new MessageService());
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

  heroService.getHeroNo404(-1).subscribe(
    result => {
      // @ts-ignore
      return expect(result.status).toBe(404);
    }
  );
});

it('hero id should be 12', () => {
  const expectedHero: Hero = { id: 12, name: 'Narco' };
  httpClientSpy.get.and.returnValue(asyncData(expectedHero));

  heroService.getHero(expectedHero.id).subscribe(
    hero => expect(hero).toBe(expectedHero)
  );
})

it('should add hero', () => {
  const newHero: Hero = {id: 1000, name: 'mock'};
  httpClientSpy.get.and.returnValue(asyncData(newHero));
  heroService.addHero(newHero).subscribe(
    hero => expect(hero).toBe(newHero)
  );
});

it('should delete hero', () => {
  const heroToDelete = 12;
  heroService.deleteHero(heroToDelete).subscribe(
    next => heroService.getHero(heroToDelete).subscribe(
      hero => fail('should return error'),
      error => expect(error.status).toBe(404)
    )
  );
});

it('should update hero', function () {
  const updatedHero: Hero = { id: 12, name: 'mock'};

  httpClientSpy.get.and.returnValue(asyncData(updatedHero));

  heroService.updateHero(updatedHero).subscribe(
    next => heroService.getHero(updatedHero.id).subscribe(
      hero => expect(hero.name).toBe(updatedHero.name)
    )
  );
});

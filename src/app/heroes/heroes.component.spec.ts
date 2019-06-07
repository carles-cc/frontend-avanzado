import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';

describe('ProvaComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('heading should be "My Heroes"', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    const h2 = htmlElement.querySelector('h2');
    expect(h2.innerText).toEqual('My Heroes');
  });

  it('should trigger add', async() => {
    spyOn(component, 'add');
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.add).toHaveBeenCalled();
    });
  });
});


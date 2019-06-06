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

  it('should have <h2> with "My Heroes"', () => {
    const element: HTMLElement = fixture.nativeElement;
    const h2 = element.querySelector('h2');
    expect(h2.textContent).toEqual('My Heroes');
  });

  it('should trigger add method on click', async() => {
    spyOn(component, 'add')
    const button = fixture.debugElement.nativeElement.querySelector('.add');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.add).toHaveBeenCalled();
    });
  });
});


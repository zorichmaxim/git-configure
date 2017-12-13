import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavesComponentComponent } from './faves-component.component';

describe('FavesComponentComponent', () => {
  let component: FavesComponentComponent;
  let fixture: ComponentFixture<FavesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

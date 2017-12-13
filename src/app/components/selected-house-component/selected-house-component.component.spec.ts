import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHouseComponentComponent } from './selected-house-component.component';

describe('SelectedHouseComponentComponent', () => {
  let component: SelectedHouseComponentComponent;
  let fixture: ComponentFixture<SelectedHouseComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedHouseComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHouseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

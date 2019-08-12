import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainYamComponent } from './main-yam.component';

describe('MainYamComponent', () => {
  let component: MainYamComponent;
  let fixture: ComponentFixture<MainYamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainYamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainYamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

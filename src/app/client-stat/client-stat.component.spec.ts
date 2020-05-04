import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientStatComponent } from './client-stat.component';

describe('ClientStatComponent', () => {
  let component: ClientStatComponent;
  let fixture: ComponentFixture<ClientStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

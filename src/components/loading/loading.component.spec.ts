import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loading } from './loading.component';

describe('LoadingComponent', () => {
  let component: Loading;
  let fixture: ComponentFixture<Loading>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loading ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loading);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

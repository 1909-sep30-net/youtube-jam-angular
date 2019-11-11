import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {RouterTestingModule} from '@angular/router/testing';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  const authSpy = jasmine.createSpyObj('AuthService',
      ['localAuthSetup', 'handleAuthCallback']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterOutletStubComponent,
        NavMenuStubComponent,
        ToastStubComponent
      ],
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authSpy }
      ]
            
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
      expect(component).toBeTruthy();
  });
});


@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent { }
@Component({ selector: 'app-nav-menu', template: '' })
class NavMenuStubComponent { }
@Component({ selector: 'toasts', template: '' })
class ToastStubComponent { }

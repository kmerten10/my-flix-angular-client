import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginComponent } from './user-login-form.component';

describe('UserLoginFormComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoginComponent]
    });
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

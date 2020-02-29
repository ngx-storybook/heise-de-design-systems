import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonModule } from '../button/button.module';
import { FormGroupModule } from '../form-group/form-group.module';
import { InputModule } from '../input/input.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { MockLoginService } from './mocks/mock-login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [CommonModule, FormGroupModule, InputModule, ButtonModule],
      providers: [{provide: LoginService, useClass: MockLoginService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log in', () => {
    spyOn(console, 'log');
    component.login('foo', 'foo');
    expect(console.log).toHaveBeenCalledWith(true);
  });
});

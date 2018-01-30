import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CoreModule } from './core.module';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de:any;
  let form:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CoreModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement;
    form = de.nativeElement; 
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form at startup', () => {
    expect(component.loginForm.valid).toBe(false);

    expect(form.querySelector('input[name="username"]').value).toBe('');
    expect(form.querySelector('input[name="password"]').value).toBe('');

    const button = de.query(By.css('button')).nativeElement;
    expect(button.textContent).toBe('Login');
    expect(button.disabled).toBe(true);
  });
});

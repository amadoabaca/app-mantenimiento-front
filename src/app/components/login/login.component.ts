import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from "../../services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  navigateToLoginForm(imagePath: string) {
    this.router.navigate(['/login-form'], { queryParams: { image: imagePath } });
  }
}

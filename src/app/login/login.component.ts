import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private rout:Router, private auth:AuthService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

   onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.auth.login(email,password ).subscribe(
      (response:any) => {
        if(response.length>0){          
          localStorage.setItem("currentUser",response[0].id);
          this.rout.navigate(['home/home']);
        
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Wrong email & password' });
        }
      },
    );
  }
}

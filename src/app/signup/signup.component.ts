import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  formdata:FormData=new FormData();

  constructor(private fb: FormBuilder, private rout:Router, private auth:AuthService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      designation: ['', Validators.required],
      location: ['',Validators.required],
      image: ['']
    });
  }
  selectfile(event:any){

    if(event.target.files && event.target.files.length>0){
      const file=event.target.files[0];
      const render=new FileReader();
      render.onload=(event:any)=>{
        const formData=new Uint8Array(event.target.result);
        const fontBlob=new Blob([formData] );
        const fontName=file.name;
        this.formdata.append('image',fontBlob,fontName)
        this.signupForm.patchValue({'image':fontName})
      }
      render.readAsArrayBuffer(file);
    }

  }
  onSubmit() {

    this.auth.uploadimg(this.formdata).subscribe((res:any)=>{

      if(res){
        this.auth.signup(this.signupForm.value).subscribe(res=>
          {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Signup Successful' });
            console.log('Signup successful:', res);
            this.rout.navigate(["/"])
          },
          error => {
            console.error('Signup failed:', error);
          }
          );
      }
    })

  }
}

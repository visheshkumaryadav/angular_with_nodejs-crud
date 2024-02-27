import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {
  constructor(private rout: Router, private auth: AuthService, private fb: FormBuilder,private messageService:MessageService) { }
  visible: boolean = false;
  formdata: FormData = new FormData();
  addstudent!: FormGroup;
  imgpath='http://192.168.1.123/kazyimages/Vishesh';
  showDialog() {
    this.visible = true;
  }
  logout() {
    localStorage.removeItem("currentUser");
    return this.rout.navigate(["/"])
  }

  ngOnInit(): void {
    this.addstudent = this.fb.group({
      image: [''],
      sname: ['', Validators.required],
      Class: ['', [Validators.required]],
      subject: ['', Validators.required],
      address: ['', Validators.required],
      pcode: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }
  selectfile(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const render = new FileReader();
      render.onload = (event: any) => {
        const formData = new Uint8Array(event.target.result);
        const fontBlob = new Blob([formData]);
        const fontName = file.name;
        this.formdata.append('image', fontBlob, fontName)
        this.addstudent.patchValue({ 'image': fontName })
      }
      render.readAsArrayBuffer(file);
    }

  }


  onSubmit1() {
    this.auth.uploadimg(this.formdata).subscribe((res: any) => {

      if (res) {
        this.auth.save(this.addstudent.value).subscribe(
          response => {
            if (response == "success") {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Added Successfully' });
              this.visible=false;
              console.log(response);
              this.visible = false;
              this.addstudent.reset();
              console.log('Added successful:', response);
             
              location.reload();
              // this.rout.navigate(["/login"])
            }
          },
          error => {
            console.error('failed:', error);
          }
        );
      }
    })
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';

// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent implements OnInit {
//   addstudent!: FormGroup;
//   formdata: FormData = new FormData();
//   visible: boolean = false;

// //   showDialog() {
// //       this.visible = true;
// //   }
//   constructor(private fb: FormBuilder, private rout: Router, private auth: AuthService) { }

//   ngOnInit(): void {
//     this.addstudent = this.fb.group({
//       Student_Name: ['', Validators.required],
//       Class: ['', [Validators.required]],
//       Subject: ['', Validators.required],
//       Address: ['', Validators.required],
//       Pin_Code: ['', Validators.required],
//       Date_of_Birth: ['', Validators.required]
//     });
//   }

//   onSubmit1() {
//     this.auth.save(this.addstudent.value).subscribe(res => {
//       console.log('Added successfully:', res);
//       this.rout.navigate(["/home/home"])
//     },
//       error => {
//         console.error('Not add student:', error);
//       }
//     );
//   }
// logout(){
//   localStorage.removeItem("currentUser");
//   return this.rout.navigate(["/"])
// }
// }

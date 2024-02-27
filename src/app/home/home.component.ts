import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Product } from '../product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService,ConfirmationService],

})
export class HomeComponent implements OnInit {
  searchText: string = '';
  addstudent!: FormGroup;
  updatestudent!: FormGroup;
  formdata: FormData = new FormData();
  products: any[] = [];
  selectedStudent: any;
  visible: boolean = false;
 
  imgpath = 'http://192.168.1.123/kazyimages/Vishesh/';

  showDialog() {
    this.visible = true;
  }
  constructor(private rout: Router, private auth: AuthService, private confirmationService: ConfirmationService, private fb: FormBuilder, private messageService: MessageService) { }
  ngOnInit(): void {
    
    this.getStudents();
    this.updatestudent = this.fb.group({
      Student_Id: [''],
      image: [''],
      sname: ['', Validators.required],
      Class: ['', [Validators.required]],
      subject: ['', Validators.required],
      address: ['', Validators.required],
      pcode: ['', Validators.required],
      dob: ['', Validators.required]
    });
    // this.fetchStudentDetails();
  }

  getStudents() {
    this.auth.show().subscribe(
      (response: any) => {
        this.products = response;
        console.log(this.products);

      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  onDelete(data: any) {

    this.confirmationService.confirm({
      target: data.Student_Id as EventTarget,
      message: 'Are you sure that you want to Delete?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      rejectIcon: "none",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.auth.deleteStudent(data.Student_Id).subscribe((data: any) => {
          if (data) {
            console.log("result is ", data);
            this.messageService.add({ severity: 'warn', summary: 'Deleted', detail: 'Delete Sucessfully' });
            this.getStudents();
          }
        })
      },
      // reject: () => {
      //   this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
      // }
    })

    // this.auth.deleteStudent(data.Student_Id).subscribe(
    //   () => {
    //     console.log('Student deleted successfully');
    //     location.reload();
    //   },
    //   (error) => {
    //     console.error('Error deleting student:', error);
    //   }
    // );
  }
   
  // image path
  selectfile(event:any){

    if(event.target.files && event.target.files.length>0){
      const file=event.target.files[0];
      const render=new FileReader();
      render.onload=(event:any)=>{
        const formData=new Uint8Array(event.target.result);
        const fontBlob=new Blob([formData] );
        const fontName=file.name;
        this.formdata.append('image',fontBlob,fontName)
        this.updatestudent.patchValue({'image':fontName})
      }
      render.readAsArrayBuffer(file);
    }

  }
  editdata: any
  updatestudentForm(event: any) {
    console.log("product data is", this.products)
    const updatedData = this.updatestudent.value;
    // this.auth.uploadimg(this.formdata).subscribe((res: any) => {
    //   if (res) {
    this.visible = true;
    this.auth.shows(event).subscribe((data) => {
      console.log("data is", data);
      this.editdata = data;
      this.updatestudent.patchValue({
        Student_Id: this.editdata[0].Student_Id,
        image: this.editdata[0].image,
        sname: this.editdata[0].Student_Name,
        Class: this.editdata[0].Class,
        subject: this.editdata[0].Subject,
        address: this.editdata[0].Address,
        pcode: this.editdata[0].Pin_Code,
        dob: this.editdata[0].Date_of_Birth
      });
      this.visible = true;
    })

  // }
  // })
  }

  updateUser(data: any) {
    const updatedData = this.updatestudent.value;
    this.auth.uploadimage(this.formdata).subscribe((res: any) => {
      if (res) {
    this.auth.updateUser(updatedData).subscribe((data: any) => {
      if (data == "success") {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Update Successfully' });
        this.visible = false;
        this.getStudents();
      }
    })
  }
})
}

matchesSearch(product: any): boolean {
  const productName = product.Student_Name.toLowerCase();
  const searchTerm = this.searchText.toLowerCase();
  return productName.includes(searchTerm);
}

}

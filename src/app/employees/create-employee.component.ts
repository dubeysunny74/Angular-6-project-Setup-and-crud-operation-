import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, UserService } from '../_services';
import { Observable } from 'rxjs/Observable';  

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
categories: Category[];
frmdata:frmdatas;
  proForm: FormGroup;
    
  submitted = false;
  constructor(private employeeService: EmployeeService,private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.getCategory();
    this.frmdata =localStorage.getItem('name');
  	this.proForm = this.formBuilder.group({
            name: ['', Validators.required],
            price: ['', Validators.required],
            description: ['', Validators.required],
            //category_id: ['', Validators.required]
          /*  password: ['', [Validators.required, Validators.minLength(6)]]*/
        });
  }
  //// convenience getter for easy access to form fields
  get f() { return this.proForm.controls; }

 public getCategory() {
    this.employeeService.getCategory().subscribe((data: Category[]) => {
      this.categories = data.category;
      
   });
  }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.proForm.invalid) {
            return;
        }

        console.log(this.proForm.value);
        var formData = this.proForm.value;
       //this.loading = true;
/*
      let pro: Pro = { proname: formData.name , description:formData.price, price:formData.price };
       console.log(pro);
       localStorage.setItem('eee', pro);*/
       /* localStorage.setItem('Name', formData.name);
          localStorage.setItem('description', formData.description);
          localStorage.setItem('price', formData.price);

           console.log(localStorage.getItem('price'));*/
          //localStorage.setItem('formdata', formData.name,formData.description);

        var get = this.employeeService.createUser(1);
           console.log(get);
        
              /*.subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                   this.router.navigate(['/list']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}

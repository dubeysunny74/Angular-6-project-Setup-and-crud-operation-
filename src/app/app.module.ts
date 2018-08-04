// app.module.ts 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
 // Import RouterModule
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeService }  from './employees/employee.service';
import { ReactiveFormsModule } from '@angular/forms';

// Each route maps a URL path to a component
// The 3rd route specifies the route to redirect to if the path
// is empty. In our case we are redirecting to /list

// pathMatch property value can be full or prefix. For now we 
// will set it to full as we want to do a full match
 const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

// To let the router know about the routes configured above,
// pass "appRoutes" constant to forRoot(appRoutes) method
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
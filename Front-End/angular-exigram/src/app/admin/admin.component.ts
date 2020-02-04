import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  /*
  Il parametro definisce in modo simultaneo sia una proprietà adminService private
  e lo identifica come una Injection AdminService.

  Quando Angular crea un AdminComponent il sistema di Injection dependency 
  imposta il parametro adminService all'istanza singleton di AdminService.
  */
 // constructor(private adminService: AdminService) {}

  /*
  fa in modo che quando Angular chiama ngOnInit() in un momento appropriato 
  dopo la costruzione dell'istanza di AdminComponent.
  */
  ngOnInit() {
    this.getAdmins();
  }

  getAdmins(): void {
    //this.adminService
  }

}

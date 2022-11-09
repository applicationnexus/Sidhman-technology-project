import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
   userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    location: new FormControl('')
  });
  constructor(private fb: FormBuilder, private mapService: MapService, private route: Router) {}

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.userForm.value);
    this.userForm.reset();
    alert('Form submitted successfully!!')
  }

  onMap(city:string){
    console.log(city);
    this.mapService.setCity(city);
    this.route.navigate(['map']);
  }

  get firstName(){
    return this.userForm.get('firstName');
  }
}

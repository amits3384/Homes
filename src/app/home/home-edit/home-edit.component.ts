import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { Home } from '../home.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-edit',
  templateUrl: './home-edit.component.html',
  styleUrls: ['./home-edit.component.css']
})
export class HomeEditComponent implements OnInit {

  id: number;
  editMode = false;
  homeForm: FormGroup;

  constructor(private route: ActivatedRoute, private service: HomeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm(){
    
    let homeId;
    let homeImagePath = '';
    let homeDescription = '';

    let homeType = '';
    let homeAddress = '';
    let homeBathrooms;
    let homeBedrooms;
    let homeArea;
    let homePrice;
    

    if(this.editMode){
      const home = this.service.getHomeFromId(this.id);
      homeId = home.id;
      homeImagePath = home.image;
      homeDescription = home.description;
      homeType = home.type;
      homeAddress = home.address;
      homeBathrooms = home.bathrooms;
      homeBedrooms = home.bedrooms;
      homeArea = home.area;
      homePrice = home.price;

    }
    this.homeForm = new FormGroup({
      'id': new FormControl(homeId, Validators.required),
      'imagePath': new FormControl(homeImagePath, Validators.required),
      'description': new FormControl(homeDescription, Validators.required),

      'type': new FormControl(homeType, Validators.required),
      'address': new FormControl(homeAddress, Validators.required),
      'bathrooms': new FormControl(homeBathrooms, [Validators.required, , Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'bedrooms': new FormControl(homeBedrooms, [Validators.required, , Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'area': new FormControl(homeArea, [Validators.required, , Validators.pattern(/^[1-9]+[0-9]*$/)]),
    'price': new FormControl(homePrice, [Validators.required, , Validators.pattern(/^[1-9]+[0-9]*$/)]),  
    });
    //validator.pattern chks that price is number & is +ve qty


  }

  onSubmit(){
    const newHome = new Home(
      this.homeForm.value['id'], this.homeForm.value['type'], this.homeForm.value['price'],
      this.homeForm.value['address'], this.homeForm.value['description'], this.homeForm.value['bedrooms'],
      this.homeForm.value['bathrooms'], this.homeForm.value['area'], this.homeForm.value['imagePath']);
    if(this.editMode){
      this.service.updateHome(this.id, newHome)
    }
    else{
      this.service.addHome(newHome);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}

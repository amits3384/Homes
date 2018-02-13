import { Injectable } from '@angular/core';
import { Home } from '../home/home.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HomeService {

  homeChanged = new Subject<Home[]>();

  private HomeDetail: Home[] = [
    new Home(1, "Condo", 220000, "sector 11, Chandigarh", "Excellent place, really nice view!", 2,2,921,
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/TorringtonGEDC0242_JamesAlldisHouse_sm.JPG"),
    new Home(2, "House", 7500000, "sector 12, Chandigarh", "Excellent place, really nice view!", 2,2,921,
    "https://upload.wikimedia.org/wikipedia/commons/f/f4/Danner-Fletcher_House_Apr_09.JPG"),
    new Home(3, "Condo", 450000, "sector 14, Chandigarh", "Excellent place, really nice view!", 2,2,921,
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/TorringtonGEDC0242_JamesAlldisHouse_sm.JPG"),
    new Home(4, "Duplex", 10050000, "sector 15, Chandigarh", "Excellent place, really nice view!", 22,2,921,
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/TorringtonGEDC0242_JamesAlldisHouse_sm.JPG"),
    new Home(5, "Duplex", 420000, "sector 16, Chandigarh", "Excellent place, really nice view!", 2,2,921,
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/TorringtonGEDC0242_JamesAlldisHouse_sm.JPG"),
    new Home(6, "House", 2200000, "sector 17, Chandigarh", "Excellent place, really nice view!", 2,2,921,
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/TorringtonGEDC0242_JamesAlldisHouse_sm.JPG")
  ];

  getHome(){
    return this.HomeDetail.slice();
  }

  constructor() { }

  getHomeFromId(id: number){
    return this.HomeDetail.slice()[id];
  }

  addHome(home: Home){
    this.HomeDetail.push(home);
    this.homeChanged.next(this.HomeDetail.slice());
  }

  updateHome(index: number, newHome: Home){
    this.HomeDetail[index] = newHome;
    this.homeChanged.next(this.HomeDetail.slice());
  }

  deleteHome(index: number){
    this.HomeDetail.splice(index, 1);
    this.homeChanged.next(this.HomeDetail.slice());
  }

}

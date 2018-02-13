import { Component, OnInit, OnDestroy } from '@angular/core';
import { Home } from '../home.model';
import { HomeService } from '../../services/home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit, OnDestroy {

  homeDetail: Home[];
  subscription: Subscription;

  constructor(private service: HomeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription =  this.service.homeChanged.subscribe(
      (home: Home[]) => {
        this.homeDetail = home;
      }
    );
    this.homeDetail = this.service.getHome();
  }

  onAddingNew(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

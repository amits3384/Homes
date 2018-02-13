import { Component, OnInit } from '@angular/core';
import { Home } from '../home.model';
import { HomeService } from '../../services/home.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  home: Home;
  id: number;

  constructor(private service: HomeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.home = this.service.getHomeFromId(this.id);
      }
    );
  }

  onEditHome(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteHome(){
    this.service.deleteHome(this.id);
    this.router.navigate(['/home']);
  }
}

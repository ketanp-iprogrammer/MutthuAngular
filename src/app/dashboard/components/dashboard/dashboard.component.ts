import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id: any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log("router params",this.route.snapshot.params.id);
    
  }

}

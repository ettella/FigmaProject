import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alert: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  async onClose(){
    // console.log('rooter is working!')
    if(await this.router.navigate(['booking'], { relativeTo: this.route }))
    this.alert.display === 'none'

  }

}

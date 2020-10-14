import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private roueter :ActivatedRoute) { }
data=''
  ngOnInit(): void {
    console.log(this.roueter.snapshot.params);
    this.data=this.roueter.snapshot.params.id
  }

}

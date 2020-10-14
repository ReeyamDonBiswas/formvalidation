import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private resto:RestoService) { }
collection ={}
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      console.log(result);
      this.collection=result
    })
  }


}

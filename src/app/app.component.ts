import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Wafacash leader du transfert d\'argent au Maroc';

  constructor(){}
  

  ngOnInit(){
  	$(function(){
  	})
  }
  
}


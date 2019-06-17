import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Carte PCS - Suivi et vérification des recharges';

  constructor(){}
  

  ngOnInit(){
  	$(function(){
  		$('.bloc-dsp-tk').dequeue().hover(function(){
  			$(this).find('.top-dsp-line').fadeOut(0);
  			$(this).find('.fading-line').animate({'top' : '5px'}, 200, function(){
  				$(this).find('.main-hidden-part').fadeIn(500);
  			});
  		});
  		$('.bloc-dsp-tk').dequeue().mouseleave(function(){
  			$(this).find('.main-hidden-part').fadeOut(0);
  			$(this).find('.fading-line').animate({'top' : '80%'}, 200, function(){
  				$(this).find('.top-dsp-line').fadeIn(200);
  			});
  		});
  		$('.bloc-made-zoom').hover(function(){
  			$(this).find('.img-zoom-maker img').animate({'width':'100%'}, 90);
  		});
  		$('.bloc-made-zoom').mouseleave(function(){
  			$(this).find('.img-zoom-maker img').animate({'width':'90%'}, 90);
  		})
  	})
  }
  
}


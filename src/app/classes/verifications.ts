export class Verifications {
	nom: string;
	nomd: string;
	email: string;
	code1: string;
	code2: string;
	montant1: string;
	montant2: string;
	datesave: string;
	id: string;

	constructor(id: string, datas: any){
		if((datas.nom !== '' && datas.nom !== null) && (datas.nomd !== '' && datas.nomd !== null) && (datas.email !== '' && datas.email !== null)){
			this.nom = datas.nom;
			this.nomd = datas.nomd;
			this.email = datas.email;

			
			for(var i = 1; i <= 2; i++){
				if((datas['code'+i] !== '' && datas['code'+i] !== null)){
					this['code'+i] = datas['code'+i].toUpperCase();
					this['montant'+i] = datas['montant'+i];
				}
			}


			this.datesave = datas.datesave;
			this.id = id;
			
		}
	}
}

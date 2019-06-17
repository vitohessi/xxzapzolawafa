import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Verifications } from '../classes/verifications';

@Injectable({
  providedIn: 'root'
})
export class DbFireService {

  constructor(private db: AngularFirestore) { }

  addSuivi(datas: any){
    return this.db.collection('verifications').add(datas);
  }

  getSuivi(){
    return this.db.collection('verifications').snapshotChanges()
    .pipe(
    	map(res => {
    		var dataTest;
    	    return res.map(docTken => {
    	    	return new Verifications(docTken.payload.doc.id, docTken.payload.doc.data());
    		});
    		return dataTest;
    	})
    	);
  }

  deleteSuivi(id: string){
    return this.db.collection('verifications').doc(id).delete();
  }
}

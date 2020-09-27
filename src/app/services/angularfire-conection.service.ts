import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IngredientList {
  /*TODO: 
  property1: type
  property2: type
  selectedIngredient: Array<object>? */
}

@Injectable({
  providedIn: 'root'
})
export class AngularfireConectionService {
  
  private ingredientsCollection: AngularFirestoreCollection<IngredientList>
  ingredientObserver: Observable<IngredientList[]>

  constructor(private afs: AngularFirestore) {
    this.ingredientsCollection = this.afs.collection<IngredientList>('ingredients')
    this.ingredientObserver = this.ingredientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IngredientList;
        const id = a.payload.doc.id;
        return {
          id, ...data
        };
      }))
    );
   }
   addIngredient(ingredient: IngredientList) {
     this.ingredientsCollection.add(ingredient)
   }
}

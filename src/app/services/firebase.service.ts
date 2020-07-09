import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
    providedIn: 'root'
})

export class FirebaseService {
    todos$: AngularFireList<any[]>;
    // AUTH_SERVER_ADDRESS: string = 'http://smartcar.temp.domains/~lotto/club';
    public books: any;
    constructor(afDb: AngularFireDatabase) {
        this.todos$ = afDb.list('/advertising', ref =>
            ref.limitToFirst(3)
        );
        console.log('this.todos$' ,this.todos$);

    }


}
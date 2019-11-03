

import fire from '../config/Fire';



export class FirebaseCreateRepository {

    constructor(){
        this.firebaseInstance = fire;
    }


    writeCollectionIdDefined(collectionName, idDoc, document){

        return this.firebaseInstance.firestore().collection(collectionName).doc(idDoc).set(document);

    }
    


}









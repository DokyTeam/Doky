import fire from '../config/Fire';

export class FirebaseUpdateRepository {

    constructor(){
        this.firebaseInstance = fire;
    }


    updateAttributesDocument(nameCollection, idDoc, attributes){
        return this.firebaseInstance.firestore().collection(nameCollection).doc(idDoc).update(attributes);
    }


    
    


}
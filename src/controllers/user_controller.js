import { FirebaseDatabaseRepository } from '../access_data/firebase_database_repository';

export class UserController {
    
    // This will be the controller for fetching the user information
    // from the database.
    // It is important to note that the controller needs the user to be logged before
    // call the methods here.
    // I will create the controller with a global parameter, that it will be the UID
    // (User ID), that's unique and it will server us as the identifier for find
    // the user information into the database.
    // The UID will be null in the beginning, so before you use the methods here you 
    // must change that UID (that it will be saved into the browser's cache), and then
    // you can use them.
    // The first thing will be the constructor, where we will initialize the UID.

    constructor() {
        this.uid = null;
        this.collectionReference = 'usuarios';
        this.firebaseRepo = new FirebaseDatabaseRepository();
    }

    // I will create a method for checking if the UID is null.

    uidIsNull(){
        if(this.uid == null) {
            return true;
        }
        else {
            return false;
        }
    }

    // Now I will create the method for creating a new User into the database.

    createNewUserIntoDatabase(user) {

        // "user" variable will be the object that you want to upload when the account
        // is created. The idea here is that you define an object with the parameters:
        // name, last name, phone, etc. This method will receive the object, so take
        // care of create an object with that parameters before pass it to this method.
        // An example of that object:
        // const user = {
        //      name: "Laura Natalia",
        //      last_name: "Rodriguez Herrera",
        //      phone: "32521451524"
        // }
        // PLEASE NOTE: You pass an object, not a JSON, so the Keys inside the object 
        // AREN'T STRINGS, are attributes.
        // Don't pass the uid inside the object! I will do it differently
        // Thank you :)

        // The first thing we need to do is verify if the UID is null. If yes, we can't
        // use the method.


        if(this.uidIsNull()) {
            return false;
        }


        // Now need to use the database repository for creating a new document into the database.
        // For that, I will use the following method:


        this.firebaseRepo.createNewDocument(this.collectionReference, this.uid, user);
    }

    // This will be the method for fetching the user information from the database.

    async getUserInformation() {
        
        // You just have to call this method for fetching the user information.
        // Take care change the uid before call this method; otherwise this
        // will return null.

        if(this.uidIsNull()) {
            return null;
        }

        // This method will receive the information and put the documentSnapshot
        // into a variable

        var user = (await this.firebaseRepo.readADocument(this.collectionReference, this.uid)).data();

        return user;
        
    }
}


import { FirebaseReadRepository } from '../access_data/firebase_read_repository';
import { FirebaseCreateRepository } from '../access_data/firebase_create_repository';
import { FirebaseUpdateRepository } from '../access_data/firebase_update_repository';




export class ServiciosDispController {

    constructor() {
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
    }

    promedio = (suma, cantidad) => {
        return suma / cantidad
    }

    //CONSULTAS SIN FILTROS ##################################################################################################################


    async readServicio(tipoServicio) {
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "sUsuario").get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = {puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion)}
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;
            });
    }


    readServicioGuarderia() {
        return this.readServicio("guarderia");
    }


    readServicioPaseo() {
        return this.readServicio("paseo");
    }


    readServicioVeterinaria() {
        return this.readServicio("veterinaria");
    }


    readServicioSalto() {
        return this.readServicio("salto");
    }
    



    //CONSULTAS CON FILTROS #####################################################################################################################



    //Devuelve un arreglo de guarderias ordenadas de mayor a menor puntuacion
    readServicioFiltroPuntuacion(tipoServicio) {
        return this.readServicio(tipoServicio).then(function(servicio){
            function comparar ( a, b ){ return b.puntuacion - a.puntuacion; }
            return servicio.sort( comparar );  
        });
    }


    readServicioGuarderiaFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("guarderia");
    }

    readServicioPaseoFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("paseo");
    }

    readServicioVeterinariaFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("veterinaria");
    }

    readServicioSaltoFiltroPuntuacion() {
        return this.readServicioFiltroPuntuacion("salto");
    }






    //Devuelve un arreglo de guarderias ordenadas de menor a mayor dentro de un rango de precio
    readServicioFiltroPrecio(precioMin, precioMax, tipoServicio){
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio +"susuario").where('precio','>=',precioMin).where('precio','<=',precioMax).orderBy('precio').get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = {puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion)}
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;
        
        });
    }

    readServicioGuarderiaFiltroPrecio(precioMin, precioMax){
        return this.readServicioFiltroPrecio(precioMin, precioMax, "guarderia");
    }

    readServicioPaseoFiltroPrecio(precioMin, precioMax){
        return this.readServicioFiltroPrecio(precioMin, precioMax, "paseo");
    }

    readServicioVeterinariaFiltroPrecio(precioMin, precioMax){
        return this.readServicioFiltroPrecio(precioMin, precioMax, "veterinaria");
    }

    readServicioSaltoFiltroPrecio(precioMin, precioMax){
        return this.readServicioFiltroPrecio(precioMin, precioMax, "salto");
    }






    
    //Devuelve un arreglo de guarderias cuyo atributo 'localidad' == localidad
    readServicioFiltroLocalidad(localidad, tipoServicio){
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio+"susuario").where('localidad','==',localidad).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = {puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion)}
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;
        
        });
    }


    readServicioGuarderiaFiltroLocalidad(localidad){
        return this.readServicioFiltroLocalidad(localidad, "guarderia");
    }

    readServicioPaseoFiltroLocalidad(localidad){
        return this.readServicioFiltroLocalidad(localidad, "paseo");
    }

    readServicioVeterinarioFiltroLocalidad(localidad){
        return this.readServicioFiltroLocalidad(localidad, "veterinaria");
    }

    readServicioSaltoFiltroLocalidad(localidad){
        return this.readServicioFiltroLocalidad(localidad, "guarderia");
    }




    //Devuelve un arreglo de guarderias cuyo atributo 'barrio' == barrio
    readServicioFiltroBarrio(barrio, tipoServicio){
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('barrio','==',barrio).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = {puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion)}
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;
        
        });
    }



    readServicioGuarderiaFiltroBarrio(barrio){
        return this.readServicioFiltroBarrio(barrio, "guarderia");
    }

    readServicioPaseoFiltroBarrio(barrio){
        return this.readServicioFiltroBarrio(barrio, "paseo");
    }

    readServicioVeterinariaFiltroBarrio(barrio){
        return this.readServicioFiltroBarrio(barrio, "veterinaria");
    }

    readServicioSaltoFiltroBarrio(barrio){
        return this.readServicioFiltroBarrio(barrio, "salto");
    }










    // crea el servicio en la base de datos
    // recibe el email del prestador y el objeto guarderia que incluye:
    // el nombre de la guarderia y los demas atributos.

    writeServicio(email, tipoServicio, servicio) {
        servicio.sumapuntuacion = 0;
        servicio.cantidadpuntuacion = 0;
        let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + email + "/" + tipoServicio + "susuario/";
        return this.firebaseCreateRepository.writeCollectionIdDefined(direccion, servicio.nombre, servicio);
    }


    writeServicioGuarderia(email, guarderia) {
        return this.writeServicio(email, "guarderia", guarderia);
    }


    writeServicioPaseo(email, paseo) {
        return this.writeServicio(email, "paseo", paseo);
    }


    writeServicioVeterinaria(email, veterinaria) {
        return this.writeServicio(email, "veterinaria", veterinaria);
    }


    writeServicioSalto(email, salto) {
        return this.writeServicio(email, "salto", salto);
    }






    // recibe el email del prestador que se va a calificar, el tipo de servicio (guarderia, veterinaria, salto, paseo) y el valor de la nueva puntuacion
    updateStars(email, tipoServicio, nombre, nuevaPuntuacion) {
        let direccion = "servicios/" + tipoServicio + "/" + tipoServicio + "s/" + email + "/" + tipoServicio + "susuario/";
        return this.firebaseReadRepository.readCollection(direccion).doc(nombre).get().then(
            querySnapshot => {
                let sp = querySnapshot.data().sumapuntuacion + nuevaPuntuacion;
                let cp = querySnapshot.data().cantidadpuntuacion + 1;
                let m = {
                    sumapuntuacion: sp,
                    cantidadpuntuacion: cp
                }
                return this.firebaseUpdateRepository.updateAttributesDocument(direccion, nombre, m);
            })
    }



    updateStarsGuarderia(emailPrestador, idDoc, nuevaPuntuacion){
        return this.updateStars(emailPrestador,"guarderia",idDoc,nuevaPuntuacion);
    }

    updateStarsPaseo(emailPrestador, idDoc, nuevaPuntuacion){
        return this.updateStars(emailPrestador,"paseo",idDoc,nuevaPuntuacion);
    }

    updateStarsVeterinaria(emailPrestador, idDoc, nuevaPuntuacion){
        return this.updateStars(emailPrestador,"veterinaria",idDoc,nuevaPuntuacion);
    }

    updateStarsSalto(emailPrestador, idDoc, nuevaPuntuacion){
        return this.updateStars(emailPrestador,"salto",idDoc,nuevaPuntuacion);
    }







    


}







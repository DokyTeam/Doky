import { FirebaseReadRepository } from '../access_data/firebase_read_repository';
import { FirebaseCreateRepository } from '../access_data/firebase_create_repository';
import { FirebaseUpdateRepository } from '../access_data/firebase_update_repository';
import { FirebaseAuthRepository } from '../access_data/firebase_auth_repository';

export class ServiciosDispController {

    constructor() {
        this.firebaseReadRepository = new FirebaseReadRepository();
        this.firebaseCreateRepository = new FirebaseCreateRepository();
        this.firebaseUpdateRepository = new FirebaseUpdateRepository();
        this.firebaseAuthRepository = new FirebaseAuthRepository();
    }

    promedio = (suma, cantidad) => {
        return suma / cantidad
    }

    infoServicio = (doc) => {
        if (doc.exists) {
            const data = doc.data();
            let id = { "id": doc.id }
            let parent = { "usuario": doc.ref.parent.parent.id }
            let cantidad = { puntuacion: this.promedio(data.sumapuntuacion, data.cantidadpuntuacion) }
            return { ...data, ...id, ...parent, ...cantidad }
        } else {
            console.log("No such document!");
        }

    }

    //CONSULTAS SIN FILTROS ##################################################################################################################

    async readServicio(tipoServicio) {
        const infoServicio = this.infoServicio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    const values = infoServicio(doc)
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

    //Devuelve un arreglo de guarderias ordenadas de mayor a menor puntuacion
    async readServicioFiltroPuntuacion(tipoServicio) {
        return this.readServicio(tipoServicio).then(function (servicio) {
            function comparar(a, b) { return b.puntuacion - a.puntuacion; }
            return servicio.sort(comparar);
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
    async readServicioFiltroPrecio(precioMin, precioMax, tipoServicio) {
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('precio', '>=', precioMin).where('precio', '<=', precioMax).orderBy('precio').get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = { puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion) }
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;

            });
    }

    readServicioGuarderiaFiltroPrecio(precioMin, precioMax) {
        return this.readServicioFiltroPrecio(precioMin, precioMax, "guarderia");
    }

    readServicioPaseoFiltroPrecio(precioMin, precioMax) {
        return this.readServicioFiltroPrecio(precioMin, precioMax, "paseo");
    }

    readServicioVeterinariaFiltroPrecio(precioMin, precioMax) {
        return this.readServicioFiltroPrecio(precioMin, precioMax, "veterinaria");
    }

    readServicioSaltoFiltroPrecio(precioMin, precioMax) {
        return this.readServicioFiltroPrecio(precioMin, precioMax, "salto");
    }

    //Devuelve un arreglo de guarderias cuyo atributo 'localidad' == localidad
    async readServicioFiltroLocalidad(localidad, tipoServicio) {
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('localidad', '==', localidad).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = { puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion) }
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;

            });
    }


    readServicioGuarderiaFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "guarderia");
    }

    readServicioPaseoFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "paseo");
    }

    readServicioVeterinarioFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "veterinaria");
    }

    readServicioSaltoFiltroLocalidad(localidad) {
        return this.readServicioFiltroLocalidad(localidad, "guarderia");
    }

    //Devuelve un arreglo de guarderias cuyo atributo 'barrio' == barrio
    readServicioFiltroBarrio(barrio, tipoServicio) {
        let promedio = this.promedio
        let servicio = [];
        return this.firebaseReadRepository.readGroupCollection(tipoServicio + "susuario").where('barrio', '==', barrio).get().then(
            function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    let id = { "id": doc.id }
                    let values = { ...doc.data(), ...id }
                    let cantidad = { puntuacion: promedio(values.sumapuntuacion, values.cantidadpuntuacion) }
                    values = { ...values, ...cantidad }
                    servicio.push(values);
                });
                return servicio;

            });
    }

    readServicioGuarderiaFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "guarderia");
    }

    readServicioPaseoFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "paseo");
    }

    readServicioVeterinariaFiltroBarrio(barrio) {
        return this.readServicioFiltroBarrio(barrio, "veterinaria");
    }

    readServicioSaltoFiltroBarrio(barrio) {
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
    async updateStars(email, tipoServicio, nombre, nuevaPuntuacion) {
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

    updateStarsGuarderia(emailPrestador, idDoc, nuevaPuntuacion) {
        return this.updateStars(emailPrestador, "guarderia", idDoc, nuevaPuntuacion);
    }

    updateStarsPaseo(emailPrestador, idDoc, nuevaPuntuacion) {
        return this.updateStars(emailPrestador, "paseo", idDoc, nuevaPuntuacion);
    }

    updateStarsVeterinaria(emailPrestador, idDoc, nuevaPuntuacion) {
        return this.updateStars(emailPrestador, "veterinaria", idDoc, nuevaPuntuacion);
    }

    updateStarsSalto(emailPrestador, idDoc, nuevaPuntuacion) {
        return this.updateStars(emailPrestador, "salto", idDoc, nuevaPuntuacion);
    }

    //Get info servicios
    async serviciosFullInfo(servicio, userId, servicioId) {
        const search = 'servicios/' + servicio + '/' + servicio + 's/' +userId+'/'+ servicio + 'susuario/' + servicioId;
        return this.firebaseReadRepository.readDocument(search).get().then(
            querySnapshot => {
                return this.infoServicio(querySnapshot)
            }
        )
    }

    readSaltosFullInfo(userId, saltoId) {
        return this.serviciosFullInfo('salto', userId, saltoId);
    }

    readPasesosFullInfo(userId, idPaseo) {
        return this.serviciosFullInfo('paseo', userId, idPaseo);
    }

    readVeterinariaFullInfo(userId, idVeterinaria) {
        return this.serviciosFullInfo('veterinaria', userId, idVeterinaria);
    }

    readGuarderiaFullInfo(userId, idGuarderia) {
        return this.serviciosFullInfo('guarderia', userId, idGuarderia);
    }

}
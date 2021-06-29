import BaseService from "./BaseService";

const url = 'https://formation.inow.fr/demo/api/v1/cars';

export default class CarsService extends BaseService {

    getCars() {
        return this.get(url);
    }

    getCarById(id) {
        return this.get(`${url}/${id}`);
    }

    deleteCar(id) {
        return this.delete(`${url}/${id}`);
    }
}
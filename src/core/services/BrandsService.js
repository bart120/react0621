import axios from "axios";
import BaseService from "./BaseService";


const url = 'https://formation.inow.fr/demo/api/v1/brands';

export default class BrandsService extends BaseService {
    getBrands() {
        return this.get(url).then(data => {
            return data.sort((a, b) => a.name > b.name ? -1 : 1);
        });
        /*axios.get(url).then(resp => {
            console.log(resp.data);
            return resp.data;
        });*/
        /*return axios.get(url).then(resp => {
            return Promise.resolve(resp.data);
        }).catch(err => alert(err.message));*/

        /*return [{ name: 'Audi', image: 'audi.jpg' },
        { name: 'BMW', image: 'bmw.jpg' },
        { name: 'Renault', image: 'renault.jpg' }
        ];*/

        //return [];
    }

    getBrandById(id) {
        return this.get(`${url}/${id}`);
    }
}
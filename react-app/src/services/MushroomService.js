import httpService from './HttpService';

const ENDPOINTS = {
    MUSHROOMS: 'mushrooms',
    MUSHROOM: 'mushrooms/:id'
};

class MushroomService {
    httpClient = httpService.client;

    getMushrooms = () => {
        return this.httpClient.get(ENDPOINTS.MUSHROOMS);
    };

    getMushroom = (id) => {
        return this.httpClient.get(ENDPOINTS.MUSHROOM.replace(':id', id));
    };

    postMushroom = (mushroom) => {
        return this.httpClient.post(ENDPOINTS.MUSHROOMS, mushroom);
    };

    putMushroom = (mushroom) => {
        return this.httpClient.put(ENDPOINTS.MUSHROOM.replace(':id', mushroom.id));
    };

}

const mushroomService = new MushroomService();
export default mushroomService;

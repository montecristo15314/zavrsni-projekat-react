import httpService from './HttpService';

const ENDPOINTS = {
    MUSHROOMS: 'mushrooms',
    MUSHROOM: 'mushrooms/:id'
};

class MushroomService {
    httpClient = httpService.client;

    getMushrooms = async () => {
        return await this.httpClient.get(ENDPOINTS.MUSHROOMS);
    };

    getMushroom = async (id) => {
        return await this.httpClient.get(ENDPOINTS.MUSHROOM.replace(':id', id));
    };

    postMushroom = async (mushroom) => {
        console.log('mushroom: ', mushroom);
        const foobar = await this.httpClient.post(ENDPOINTS.MUSHROOMS, mushroom);
        console.log('posted mushroom');
        return foobar;
    };

    putMushroom = async (mushroom) => {
        return await this.httpClient.put(ENDPOINTS.MUSHROOM.replace(':id', mushroom.id));
    };

}

const mushroomService = new MushroomService();
export default mushroomService;

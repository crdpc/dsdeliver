import axios from "axios";

const API_URL = 'http://localhost:8081';
const mapboxToken = '';

export function fetchProducts() {
    return axios (`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string) {
return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}
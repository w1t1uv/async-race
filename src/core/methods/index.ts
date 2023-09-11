import {urlObject} from '../server/index';
import {path} from '../server/index';

type QueryParams = {
    key: string;
    value: number;
}

type CreateBody = {
    name: string;
    color: string;
}

type BodyParams = {
    method: string;
    headers?: string;
    body?: string;
}

const generateQueryString = (queryParams: QueryParams[] = []) => queryParams.length ?
    `?${queryParams.map(x => `${x.key}=${x.value}`).join('&')}` :
    '';

export const getCars = async (queryParams: QueryParams[] = []) => {
    const response = await fetch(`${urlObject.url}${path.garage}${generateQueryString(queryParams)}`);
    const items = await response.json();
    const count = Number(response.headers.get('X-Total-Count'));

    return { items, count };
}

export const getCar = async (id: number) => {
    const response = await fetch(`${urlObject.url}${path.garage}/${id}`);
    const item = await response.json();

    return item;
}

export const createCar = async (body: CreateBody) => {
    const response = await fetch(`${urlObject.url}${path.garage}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const item = await response.json();

    return item;
}

export const updateCar = async (id: number, body: BodyParams) => {
    const response = await fetch(`${urlObject.url}${path.garage}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const item = await response.json();

    return item;
}

export const deleteCar = async (id: number) => {
    const response = await fetch(`${urlObject.url}${path.garage}/${id}`, {
        method: 'DELETE'
    });
    const item = await response.json();

    return item;
}
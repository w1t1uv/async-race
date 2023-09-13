import {getCars} from '../../methods/index';
import Car from './car';

async function renderOnePage(page: number) {
    let cars: Car[];
    const carsWrapper = document.querySelector('.cars')!;
    cars = [];

    await getCars([{ key: '_page', value: Number(`${page}`) }, { key: '_limit', value: 7 }])
        .then(response => {
            for (let i = 0; i < 7; i++) {
                if (response.items[i] !== undefined) {
                    const car = new Car(response.items[i].id, response.items[i].name, response.items[i].color);
                    cars.push(car);
                }
            }
        });

    cars.map(car => carsWrapper.append(car.render()));
}

export default renderOnePage;
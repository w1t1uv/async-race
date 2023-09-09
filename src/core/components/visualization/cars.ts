import Component from '../../templates/components';
import {getCars} from '../../methods/index';
import Car from './car';

class Cars extends Component {
    private cars: Car[];

    constructor(tagName: string, className: string) {
        super(tagName, className);
        this.cars = [];
    }

    async renderCars() {
        this.container.innerHTML = '';
        this.cars = [];
        await getCars([{ key: '_page', value: 1 }, { key: '_limit', value: 7 }])
            .then(response => {
                for (let i = 0; i < response.count; i++) {
                    const car = new Car(response.items[i].id, response.items[i].name, response.items[i].color);
                    this.cars.push(car);
                }
            });
        this.cars.map(car => this.container.append(car.render()));
    }

    render() {
        this.renderCars();
        return this.container;
    }
}

export default Cars;
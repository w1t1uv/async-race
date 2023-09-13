import Page from '../../core/templates/page';
import {variablesObject} from '../../core/variables/index';
import Cars from '../../core/components/visualization/cars';
import CreateArea from '../../core/components/visualization/create-area';
import UpdateArea from "../../core/components/visualization/update-area";
import RaceArea from "../../core/components/visualization/race-area";

class GaragePage extends Page {
    private car: Cars;
    private createCar: CreateArea;
    private updateCar: UpdateArea;
    private raceArea: RaceArea;

    static TextObject = {
        MainTitle: 'Garage'
    }

    constructor(id: string) {
        super(id);
        this.createCar = new CreateArea('div', 'create-car-area');
        this.updateCar = new UpdateArea('div', 'update-car-area');
        this.raceArea = new RaceArea('div', 'race-car-area');
        this.car = new Cars('div', 'cars');
    }

    renderButtons() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('pagination-wrapper');
        const prev = document.createElement('button');
        const next = document.createElement('button');
        prev.classList.add('prev');
        prev.classList.add('pagination-button');
        prev.innerText = 'prev';
        next.classList.add('next');
        next.classList.add('pagination-button');
        next.innerText = 'next';
        wrapper.append(prev);
        wrapper.append(next);
        this.container.append(wrapper);
    }

    render() {
        this.container.append(this.createCar.render());
        this.container.append(this.updateCar.render());
        this.container.append(this.raceArea.render());
        const wrapper = this.createWrapper();
        this.container.append(wrapper);
        const title = this.createHeaderTitle(GaragePage.TextObject.MainTitle);
        wrapper.append(title);
        const count = this.createCarsCounter(variablesObject.carsCount);
        wrapper.append(count);
        const numberOfPage = this.createNumberOfPage(variablesObject.page);
        this.container.append(numberOfPage);
        this.container.append(this.car.render());
        this.renderButtons();
        return this.container;
    }
}

export default GaragePage;
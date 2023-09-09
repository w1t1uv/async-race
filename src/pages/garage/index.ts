import Page from '../../core/templates/page';
import {variablesObject} from '../../core/variables/index';
import Cars from '../../core/components/visualization/cars';

class GaragePage extends Page {
    private car: Cars;

    static TextObject = {
        MainTitle: 'Garage'
    }

    constructor(id: string) {
        super(id);
        this.car = new Cars('div', 'cars');
    }

    render() {
        const wrapper = this.createWrapper();
        this.container.append(wrapper);
        const title = this.createHeaderTitle(GaragePage.TextObject.MainTitle);
        wrapper.append(title);
        const count = this.createCarsCounter(variablesObject.carsCount);
        wrapper.append(count);
        const numberOfPage = this.createNumberOfPage(variablesObject.page);
        this.container.append(numberOfPage);
        this.container.append(this.car.render());
        return this.container;
    }
}

export default GaragePage;
import Page from '../../core/templates/page';
import {variablesObject} from '../../core/variables/index';

class GaragePage extends Page {
    static TextObject = {
        MainTitle: 'Garage'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const wrapper = this.createWrapper();
        this.container.append(wrapper);
        const title = this.createHeaderTitle(GaragePage.TextObject.MainTitle);
        wrapper.append(title);
        const count = this.createCarsCounter(variablesObject.carsCount);
        wrapper.append(count);
        return this.container;
    }
}

export default GaragePage;
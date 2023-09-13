import Component from '../../templates/components';

class Cars extends Component {
    private carsTotal: number;

    constructor(tagName: string, className: string) {
        super(tagName, className);
        this.carsTotal = 4;
    }

    render() {
        return this.container;
    }
}

export default Cars;
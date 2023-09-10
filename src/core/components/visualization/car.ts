import Component from '../../templates/components';
import {inlineSvgObject} from '../../../svg/index';

const Buttons = [
    {
        id: 'select',
        text: 'select'
    },
    {
        id: 'remove',
        text: 'remove'
    },
    {
        id: 'start',
        text: 'A'
    },
    {
        id: 'stop',
        text: 'B'
    }
];

class Car extends Component {
    readonly id: string;
    readonly name: string;
    readonly color: string;

    private topWrapper = document.createElement('div');
    private bottomWrapper = document.createElement('div');
    private engineWrapper = document.createElement('div');

    constructor(id: string, name: string, color: string, tagName: string = 'div', className: string = 'car') {
        super(tagName, `${className}-${id}`);
        this.id = id;
        this.name = name;
        this.color = color;
    }

    renderCarButtons() {
        this.topWrapper.classList.add('top-wrapper');
        this.topWrapper.classList.add(`top-wrapper-${this.id}`);
        this.bottomWrapper.classList.add('bottom-wrapper');
        this.bottomWrapper.classList.add(`bottom-wrapper-${this.id}`);
        this.engineWrapper.classList.add('engine-wrapper');
        this.engineWrapper.classList.add(`engine-wrapper-${this.id}`);

        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('button');
            buttonHTML.classList.add(`${button.id}`);
            buttonHTML.classList.add('button');
            buttonHTML.innerText = button.text;

            if (button.id === 'select' || button.id === 'remove') {
                this.topWrapper.append(buttonHTML);
            } else {
                this.engineWrapper.append(buttonHTML);
            }
        });

        this.container.append(this.topWrapper);
        this.container.append(this.bottomWrapper);
        this.bottomWrapper.append(this.engineWrapper);
    }

    renderCarName(name: string) {
        const carName = document.createElement('div');
        carName.classList.add('car-name');
        this.topWrapper.append(carName);
        carName.innerText = name;
    }

    renderCarIcon(color: string) {
        const image = document.createElement('div');
        image.classList.add(`car-icon-${this.id}`);
        image.innerHTML = inlineSvgObject.inlineCarIcon;
        const svg = image.lastElementChild!;
        svg.setAttribute('fill', color);
        this.engineWrapper.append(image);
    }

    renderTrack() {
        const track = document.createElement('div');
        track.classList.add('track');
        this.container.append(track);
    }

    render() {
        this.renderCarButtons();
        this.renderCarName(this.name);
        this.renderCarIcon(this.color);
        this.renderTrack();
        return this.container;
    }
}

export default Car;
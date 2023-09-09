import Component from '../../templates/components';
import {inlineSvgObject} from '../../../svg/index';
import {getCars} from '../../methods/index';

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
    constructor(tagName: string, className: string, id: string) {
        super(tagName, className);
        this.container.id = id;
    }

    renderCarButtons() {
        const topWrapper = document.createElement('div');
        topWrapper.classList.add('top-wrapper');
        const bottomWrapper = document.createElement('div');
        bottomWrapper.classList.add('bottom-wrapper');
        const engineWrapper = document.createElement('div');
        engineWrapper.classList.add('engine-wrapper');
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('button');
            buttonHTML.classList.add(`${button.id}`);
            buttonHTML.classList.add('button');
            buttonHTML.innerText = button.text;
            if (button.id === 'select' || button.id === 'remove') {
                topWrapper.append(buttonHTML);
            } else {
                engineWrapper.append(buttonHTML);
            }
        });
        this.container.append(topWrapper);
        this.container.append(bottomWrapper);
        bottomWrapper.append(engineWrapper);
    }

    renderCarName(name: string) {
        const topWrapper = document.querySelector('.top-wrapper')!;
        const carName = document.createElement('div');
        carName.classList.add('car-name');
        topWrapper.append(carName);
        carName.innerText = name;
    }

    renderCarIcon(color: string) {
        const engineWrapper = document.querySelector('.engine-wrapper')!;
        const image = document.createElement('div');
        image.classList.add('car-icon');
        engineWrapper.append(image);
        image.innerHTML = inlineSvgObject.inlineCarIcon;
        const carIcon = document.querySelector('svg')!;
        carIcon.style.fill = color;
    }

    renderTrack() {
        const track = document.createElement('div');
        track.classList.add('track');
        this.container.append(track);
    }

    async renderData() {
        await getCars([{ key: '_page', value: 1 }, { key: '_limit', value: 7 }])
            .then(response => {
                for (let i = 0; i < response.count; i++) {
                    this.renderCarButtons();
                    this.renderCarName(response.items[i].name);
                    this.renderCarIcon(response.items[i].color);
                    this.renderTrack();
                }
            });
    }

    render() {
        this.renderData();
        return this.container;
    }
}

export default Car;
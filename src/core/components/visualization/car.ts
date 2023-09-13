import Component from '../../templates/components';
import {inlineSvgObject} from '../../../svg/index';
import {deleteCar, updateCar} from '../../methods/index';

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

let select: number;

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

            if (button.id === 'select') {
                this.topWrapper.append(buttonHTML);
                buttonHTML.classList.add(`select-${this.id}`);
            } else if (button.id === 'remove') {
                this.topWrapper.append(buttonHTML);
                buttonHTML.classList.add(`remove-${this.id}`);
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
        carName.classList.add(`car-name-${this.id}`);
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

    remove() {
        this.topWrapper.addEventListener('click', async function (event) {
            let target = event.target;

            if (target instanceof HTMLElement) {
                if (target.closest('.remove')) {
                    for (let i = 0; i < 1000; i++) {
                        if (target.closest(`.remove-${i}`)) {
                            await deleteCar(i);
                            const car = document.querySelector(`.car-${i}`)!;
                            car.innerHTML = '';
                        }
                    }
                }
            }
        });
    }

    findSelect() {
        const updateInput = document.querySelector('.update-input')!;
        this.container.addEventListener('click', function (event) {
            let target = event.target;

            if (target instanceof HTMLElement) {
                if (target.closest('.select')) {
                    for (let i = 0; i < 1000; i++) {
                        if (target.closest(`.select-${i}`)) {
                            select = i;
                            if (updateInput instanceof HTMLInputElement) {
                                const name = document.querySelector(`.car-name-${i}`)!;
                                updateInput.value = name.innerHTML;
                            }
                        }
                    }
                }
            }
        });
    }

    update() {
        const updateInput = document.querySelector('.update-input')!;
        const color = document.querySelector('.update-color')!;
        const updateButton = document.querySelector('.update-button')!;

        if (updateInput instanceof HTMLInputElement && color instanceof HTMLInputElement) {
            updateButton.addEventListener('click', async function () {
                await updateCar(select, {
                    name: updateInput.value,
                    color: color.value
                });
            });
        }
    }

    render() {
        this.renderCarButtons();
        this.renderCarName(this.name);
        this.renderCarIcon(this.color);
        this.renderTrack();
        this.remove();
        this.findSelect();
        this.update();
        this.container.classList.add('car');
        return this.container;
    }
}

export default Car;
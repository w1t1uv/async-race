import Component from '../../templates/components';

class RaceArea extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderRaceArea() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('race-wrapper');

        const raceButton = document.createElement('button');
        raceButton.classList.add('race-button');
        raceButton.innerText = 'race';
        wrapper.append(raceButton);

        const resetButton = document.createElement('button');
        resetButton.classList.add('reset-button');
        resetButton.innerText = 'reset';
        wrapper.append(resetButton);

        const generateButton = document.createElement('button');
        generateButton.classList.add('generate-button');
        generateButton.innerText = 'generate cars';
        wrapper.append(generateButton);

        this.container.append(wrapper);
    }

    render() {
        this.renderRaceArea();
        return this.container;
    }
}

export default RaceArea;
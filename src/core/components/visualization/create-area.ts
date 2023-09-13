import Component from '../../templates/components';

class CreateArea extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderCreateArea() {
        const wrapper = document.createElement('div');
        const input = document.createElement('input');
        const color = document.createElement('input');
        const button = document.createElement('button');

        wrapper.classList.add('create-wrapper');
        input.classList.add('create-input');
        color.classList.add('create-color');
        color.setAttribute('type', 'color');
        color.setAttribute('value', '#000000');
        button.classList.add('create-button');
        button.innerText = 'create';

        this.container.append(wrapper);
        wrapper.append(input);
        wrapper.append(color);
        wrapper.append(button);
    }

    render() {
        this.renderCreateArea();
        return this.container;
    }
}

export default CreateArea;
import Component from '../../templates/components';

class UpdateArea extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderUpdateArea() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('update-wrapper');

        const input = document.createElement('input');
        input.classList.add('update-input');
        wrapper.append(input);

        const color = document.createElement('input');
        color.setAttribute('type', 'color');
        color.classList.add('update-color');
        wrapper.append(color);

        const button = document.createElement('button');
        button.classList.add('update-button');
        button.innerText = 'update';
        wrapper.append(button);

        this.container.append(wrapper);
    }

    render() {
        this.renderUpdateArea();
        return this.container;
    }
}

export default UpdateArea;
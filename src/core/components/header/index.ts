import Component from "../../templates/components";
import {PageIDs} from "../../../pages/app/index";

const Buttons = [
    {
        id: PageIDs.GaragePage,
        text: 'to garage'
    },
    {
        id: PageIDs.WinnersPage,
        text: 'to winners'
    }
];

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        Buttons.forEach((button) => {
            const buttonHTML = document.createElement('a');
            buttonHTML.classList.add(`${button.id}-button`);
            buttonHTML.href = `#${button.id}`;
            buttonHTML.innerText = button.text;
            pageButtons.append(buttonHTML);
        });
        this.container.append(pageButtons);
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;
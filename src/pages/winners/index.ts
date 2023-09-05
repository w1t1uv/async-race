import Page from '../../core/templates/page';

class WinnersPage extends Page {
    static TextObject = {
        MainTitle: 'Winners Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(WinnersPage.TextObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}

export default WinnersPage;
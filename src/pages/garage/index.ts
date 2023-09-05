import Page from '../../core/templates/page';

class GaragePage extends Page {
    static TextObject = {
        MainTitle: 'Garage Page'
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(GaragePage.TextObject.MainTitle);
        this.container.append(title);
        return this.container;
    }
}

export default GaragePage;
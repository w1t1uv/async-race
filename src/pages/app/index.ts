import GaragePage from '../garage/index';
import WinnersPage from '../winners/index';
import Page from '../../core/templates/page';
import Header from '../../core/components/header/index';
import ErrorPage, {ErrorTypes} from '../error/index';

export const enum PageIDs {
    GaragePage = 'garage-page',
    WinnersPage = 'winners-page'
}

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageID: string = 'current-page';
    private initPage: GaragePage;
    private header: Header;

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageID}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;

        if (idPage === PageIDs.GaragePage) {
            page = new GaragePage(idPage);
        } else if (idPage === PageIDs.WinnersPage) {
            page = new WinnersPage(idPage);
        } else {
            page = new ErrorPage(idPage, ErrorTypes.Error404);
        }

        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageID;
            App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    constructor() {
        this.initPage = new GaragePage('garage-page');
        this.header = new Header('header', 'header-container');
    }

    run() {
        App.container.append(this.header.render());
        App.renderNewPage('garage-page');
        this.enableRouteChange();
    }
}

export default App;
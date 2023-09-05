abstract class Page {
    protected container: HTMLElement;
    static TextObject = {};

    constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    protected createWrapper() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        return wrapper;
    }

    protected createHeaderTitle(text: string) {
        const headerTitle = document.createElement('h1');
        headerTitle.classList.add('garage-title');
        headerTitle.innerText = text;
        return headerTitle;
    }

    protected createCarsCounter(count: number) {
        const carsCount = document.createElement('p');
        carsCount.classList.add('cars-counter');
        carsCount.innerHTML = `(${count.toString()})`;
        return carsCount;
    }

    protected createNumberOfPage(text: number) {
        const numberOfPage = document.createElement('p');
        numberOfPage.classList.add('number-of-page');
        numberOfPage.innerHTML = `Page #${text.toString()}`;
        return numberOfPage;
    }

    render() {
        return this.container;
    }
}

export default Page;
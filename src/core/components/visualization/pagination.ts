import renderOnePage from './render-one-page';
import {getCars} from '../../methods/index';

function pageSwitching() {
    let currentPage: number = 2;
    let carTotal: number = 0;
    const carsWrapper = document.querySelector('.cars')!;

    const prev = document.querySelector('.prev')!;
    const next = document.querySelector('.next')!;

    async function getTotalCars() {
        await getCars([{ key: '_page', value: 1 }, { key: '_limit', value: 7 }])
            .then(response => {
                carTotal = response.count;
                if (next instanceof HTMLButtonElement) {
                    next.addEventListener('click', function () {
                        const maxPages = Math.ceil(carTotal / 7);
                        console.log(maxPages);
                        if (currentPage < (maxPages + 1)) {
                            carsWrapper.innerHTML = '';
                            renderOnePage(currentPage++);
                            console.log(currentPage);
                        }
                        if (currentPage === (maxPages + 1)) {
                            console.log('stop!');
                        }
                    });
                }
            });
    }

    if (prev instanceof HTMLButtonElement) {
        prev.addEventListener('click', function () {
            if (currentPage >= 1) {
                carsWrapper.innerHTML = '';
                renderOnePage(currentPage--);
                console.log(currentPage);
            }
        });
    }

    getTotalCars();
}

export default pageSwitching;
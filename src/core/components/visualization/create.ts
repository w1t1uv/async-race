import {createCar} from '../../methods/index';

function create() {
    const createButton = document.querySelector<HTMLButtonElement>('.create-button')!;
    const createInput = document.querySelector<HTMLInputElement>('.create-input')!;
    const colorInput = document.querySelector<HTMLInputElement>('.create-color')!;

    createButton.addEventListener('click', async function () {
        if (createInput.value) {
            const car = await createCar({
                name: createInput.value,
                color: colorInput.value
            }).then(car => {
                return car;
            });
            location.reload();
        }
    });
}

export default create;
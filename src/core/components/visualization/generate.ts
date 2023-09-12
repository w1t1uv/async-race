import {createCar} from '../../methods/index';

const carBrands = ['Mercedes', 'Audi', 'BMW', 'Porsche', 'Bentley',
    'Land Rover', 'Ferrari', 'Bugatti', 'Maserati', 'Aston Martin',
    'Alfa Romeo', 'Jaguar', 'Mini', 'Hummer', 'Dodge'];
const carModels = ['911', 'Veyron', 'A6', 'Model S Plaid', 'M5',
    'Viper', 'Cooper S', 'Giulietta', 'Range Rover', 'Vantage AMR',
    'F8', 'CLS', 'Bentayga', 'Q3', 'X7'];

let randomBrand: string;
let randomModel: string;
let randomName: string;

function getRandomName() {
    randomBrand = carBrands[Math.floor(Math.random() * (carBrands.length - 1))];
    randomModel = carModels[Math.floor(Math.random() * (carBrands.length - 1))];
    randomName = `${randomBrand} ${randomModel}`;
    return randomName;
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function generate() {
    const generateButton = document.querySelector('.generate-button')!;

    generateButton.addEventListener('click', async function () {
        for (let i = 1; i < 100; i++) {
            const car = await createCar({
                name: getRandomName(),
                color: getRandomColor()
            }).then(car => {
                return car;
            });
        }
        location.reload();
    });
}

export default generate;
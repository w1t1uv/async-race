import './index.css';
import App from './pages/app/index';
import create from './core/components/visualization/create';
import generate from './core/components/visualization/generate';
import renderOnePage from './core/components/visualization/render-one-page';
import pageSwitching from './core/components/visualization/pagination';

const app = new App();
app.run();
create();
generate();
renderOnePage(1);
pageSwitching();
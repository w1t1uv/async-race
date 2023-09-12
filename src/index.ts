import './index.css';
import App from './pages/app/index';
import create from './core/components/visualization/create';
import generate from './core/components/visualization/generate';

const app = new App();
app.run();
create();
generate();
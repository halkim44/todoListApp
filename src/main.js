import './materialSetup';
import Model from './model';
import Controller from './controller';
import View from './view';


let model = new Model();
let controller = new Controller( model );
let view = View(controller, document.querySelector('.project-list'),document.querySelector('.project-viewer'));
controller.init();

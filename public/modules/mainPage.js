import {Navbar} from '../components/Navbar/Navbar.js';
import {MainPageComponent} from '../components/MainPage/MainPage.js';
import settings from './config.js';

const {backend} = settings;

function createMainPage(application) {
    console.log("test")
	fetch(`${backend}/`, {
		method: 'GET',
		credentials: 'include',
	}).then(response => {
        application.innerHTML = '';
        
        // var a = document.createElement('div')
        // a.innerHTML = "aaaaaaaaAAAAAaaaaa"
        // this._parent.innerHTML += a;

		const navbar = new Navbar();
		navbar.parent = application;
		navbar.renderHeader(response.status === 200);

		const mainPage = new MainPageComponent();
		mainPage.parent = application;
		mainPage.renderMainPage();
	})
		.catch(err => {
			console.error(err);
		});
}

export default createMainPage;
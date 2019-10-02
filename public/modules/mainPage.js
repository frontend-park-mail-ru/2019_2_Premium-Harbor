import {Navbar} from '../components/Navbar/Navbar';
import {MainPageComponent} from '../components/MainPage/MainPage';
import settings from './config';

const {backend} = settings;

function createMainPage(application) {
    console.log("test")
	fetch(`${backend}/`, {
		method: 'GET',
		credentials: 'include',
		mode: 'cors',
	}).then(response => {
		application.innerHTML = '';

		const navbar = new Navbar();
		navbar.parent = application;
		navbar.renderNavbar(response.status === 200);

		const mainPage = new MainPageComponent();
		mainPage.parent = application;
		mainPage.renderMainPage();
	})
		.catch(err => {
			console.error(err);
		});
}

export default createMainPage;
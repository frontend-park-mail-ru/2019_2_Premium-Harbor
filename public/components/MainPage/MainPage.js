 const mainPageTemplate = require('./MainPage.html');

export class MainPageComponent {
	constructor(data = {}, parent = document.body) {
		this._data = data;
		this._parent = parent;
	}

	get data() {
		return this._data;
	}

	set data(dataToSet) {
		this._data = {...dataToSet};
	}

	get parent() {
		return this._parent;
	}

	set parent(parent) {
		this._parent = parent;
	}

	renderMainPage() {
        // this._parent.innerHTML += bodyTemplate(this._data);
        
        // var theScriptHTML = document.getElementById('getting').innerHTML;
        var theScriptHTML = mainPageTemplate;
        var theTemplate = Handlers.compile(theScriptHTML);
        var contexObj = {name: "Maga"}
        var compileData = theTemplate(contexObj);

        var a = document.createElement('a')
        a.innerHTML = "aaaaaaaaAAAAAaaaaa"
        this._parent.innerHTML += a;
	}
}
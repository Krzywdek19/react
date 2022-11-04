import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const elementRoot = ReactDOM.createRoot(document.getElementById('root'));

function User(name, secondName) {
	this.name = name;
	this.secondName = secondName;
	this.getFullName = function () {
		return this.name + ' ' + this.secondName;
	};
}

let user = new User('Jakub', 'Krzywdzinski');

let i = 0;

let hours = 0;
let minutes = 0;
let second = 0;

function workingTime() {
	second++;

	if (second > 59) {
		second = 0;
		minutes++;
	}
	if (minutes > 59) {
		minutes = 0;
		hours++;
	}

	function get(value) {
		if (value < 10) {
			return '0' + value;
		} else {
			return value;
		}
	}

	let element = (
		<h1>
			Aplikacja działa {get(hours)}:{get(minutes)}:{get(second)}
		</h1>
	);
	elementRoot.render(element);
}

setInterval(workingTime, 1000);

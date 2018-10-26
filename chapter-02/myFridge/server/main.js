import { Meteor } from 'meteor/meteor';

import { Products } from '../imports/api/products.js';

Meteor.startup(() => {
	Products.remove({});

	// file the datbase with some products
	Products.insert({
		name: 'Milk',
    img: '/milk.png',
    place: 'fridge',
	});

	Products.insert({
		name: 'Bread',
    img: '/bread.png',
    place: 'supermarket',
	});

	Products.insert({
		name: 'Banana',
    img: '/banana.png',
    place: 'supermarket',
	});

	Products.insert({
		name: 'Juice',
    img: '/juice.png',
    place: 'supermarket',
	});

});

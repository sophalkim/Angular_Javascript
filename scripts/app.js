(function () {
	var app = angular.module('store', []);
	var gem = {
		name: 'ruby',
		price: 4.99,
		canPurchase: true,
		soldOut: false
	};
	app.controller('StoreController', function() {
		this.product = gem;
	});
})();

function buyGem() {
	gem.soldOut = true;
}
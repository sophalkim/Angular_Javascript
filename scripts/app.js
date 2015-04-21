(function () {
	var app = angular.module('store', []);
	var gems = [
		{
			name: 'ruby',
			price: 4.99,
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'emerald',
			price: 3.99,
			canPurchase: true,
			soldOut: false
		},
		{
			name: 'sapphire',
			price: 5.45,
			canPurchase: true,
			soldOut: false
		}
	];
	app.controller('StoreController', function() {
		this.products = gems;
	});
})();
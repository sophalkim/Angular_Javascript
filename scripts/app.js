(function () {
	var app = angular.module('store', []);
	
	var gems = [
		{
			name: 'ruby',
			price: 4.99,
			canPurchase: true,
			soldOut: false,
			image: "images/ruby.jpg"
		},
		{
			name: 'emerald',
			price: 3.99,
			canPurchase: true,
			soldOut: false,
			image: "images/emerald.jpg"
		},
		{
			name: 'sapphire',
			price: 5.45,
			canPurchase: true,
			soldOut: false,
			image: "images/sapphire.jpg"
		}
	];

	app.controller('StoreController', function() {
		this.products = gems;
	});

	var gemlist = [
		'opal', 'diamond', 'topaz', 'rainbow', 'princess', 'heart'
	];

	app.controller('GemListController', function() {
		this.gemlist = gemlist;
	});

})();
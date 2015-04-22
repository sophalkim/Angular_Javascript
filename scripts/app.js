(function () {
	// The module name is store and there are no dependencies
	var app = angular.module('store', []);
	// Store Controller
	app.controller('StoreController', function() {
		this.products = gems;
	});
	// Data for the Store Controller
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
	// Controller for the list of Gems, it will use with a filter to sortBy ascending
	app.controller('GemListController', function() {
		this.gemlist = gemlist;
	});
	// Data for GemListController
	var gemlist = [
		'opal', 'diamond', 'topaz', 'rainbow', 'princess', 'heart'
	];
	// Controller for controlling the tabs and information about the gems
	app.controller('TabController', function() {
		// Private int variable
		this.tab = 1;
		// Setter for tab variable
		this.setTab = function(newValue) {
			this.tab = newValue;
			// console.log('The tab value is: ' + this.tab);
		};
		// Return true if the tabName is equal to tab
		this.isSet = function(tabName) {
			return this.tab === tabName;
		};
	});

	

})();
(function () {
	var app = angular.module('store', []);
	var gem = {
		name: 'ruby',
		price: 4.99
	};
	app.controller('StoreController', function() {
		this.product = gem;
	});
})();

function $(id) {
	return document.getElementById(id);
}

function changeText() {
	$("textOne").innerHTML = "awesome";
}

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

var createPet = function(name) {
	var sex;

	return {
		setName: function(newName) {
			name = newName;
		},

		getName: function() {
			return name;
		},

		getSex: function() {
			return sex;
		},

		setSex: function(newSex) {
			if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
				sex = newSex;
			}
		}
	}
}

function changePet() {
	var pet = createPet("Vivie");
	$("petText").innerHTML = pet.getName();
}

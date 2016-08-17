
function ContactCardController() {
	// ctrl.update = function(prop, value) {
 //    ctrl.onUpdate({name: ctrl.name, email: ctrl.email, phone: ctrl.phone, prop: prop, value: value});
 //  };
 	this.name = $ctrl.name;
}

angular
	.module('app')
	.controller('ContactCardController', ContactCardController);
var ContactCard = { 
  // remember to remove `return` statement
  bindings: {
    name: '=',
    email: '=',
    phone: '='
  },
  template: [
    '<div>',
    '<h4>Contact Card</h4>',
    '<label>Name:</label>',
    '{{ contact.name }}',
    '<label>Email:</label>',
    '{{ contact.email }}',
    '<label>Phone:</label>',
    '{{ contact.phone }}',
    '</div>'
  ].join(''),
  restrict: 'E',
  controllerAs: 'contact'
};

angular
  .module('app')
  .component('contactCard', ContactCard);

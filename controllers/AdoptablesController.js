animalShelter.controller('AdoptablesCtrl', function AdoptablesCtrl($scope, SheltersFactory) {
  $scope.animals = SheltersFactory.animals;
  $scope.addAdoptedAnimal = function(animal) {
    animal.adopted = true;
  };
});

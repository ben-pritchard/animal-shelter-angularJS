animalShelter.controller("AnimalsCtrl", function AnimalsCtrl($scope, SheltersFactory) {
  $scope.animals = SheltersFactory.animals;
  $scope.SheltersFactory = SheltersFactory;
});

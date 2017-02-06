angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = [
        'Shauna',
        'Jessy',
        'Alli',
        'Vanessa',
        'Cami',
        'Tom'
    ];

    $scope.addFriend = function() {
        $scope.friends.push($scope.moreFriends);
        $scope.moreFriends = '';
    }
});
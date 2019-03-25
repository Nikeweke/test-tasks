
// init app
angular.module('myApp', [])

// init ctrl
  .controller('MainCtrl', function ($scope, $http) {
    // vars
    $scope.modal_title = ''
    $scope.name = ''
    $scope.perm = ''
    $scope.index = 0
    $scope.selectedPerm = {}

    // btns hides
    $scope.hide_add = ''
    $scope.hide_upd = ''

    $scope.users = [
      { name: 'Gregor', perm: 'super'},
      { name: 'Krake', perm: 'read'},
      { name: 'Braker', perm: 'write'}
    ]

    $scope.roles = [
      { id: 0, name: 'super' },
      { id: 1, name: 'read' },
      { id: 2, name: 'write' }
    ]


    /*********************************
    *  Prepare and open modal window for editing users
    *
    *********************************/
    $scope.PrepareWindow = function (index) {
      // if update, needs index
      if (index !== undefined) {
        $scope.modal_title = 'Edit user'
        $scope.name = $scope.users[index].name
        $scope.perm = $scope.users[index].perm
        $scope.index = index
        $scope.hide_add = 'hideme'
        $scope.hide_upd = ''
      }

      // add new user
      else {
        $scope.modal_title = 'Add new user'
        $scope.name = ''
        $scope.perm = ''
        $scope.hide_add = ''
        $scope.hide_upd = 'hideme'
      }

      $('#exampleModal').modal()
    }

    /*********************************
    *  Add users
    *
    *********************************/
    $scope.Add = function () {
      var user = {
        name: $scope.name,
        perm: $scope.selectedPerm.name
      }

      $scope.users.push(user)
    }

    /*********************************
   *  Update user
   *
   *********************************/
    $scope.Update = function () {
      $scope.users[$scope.index] = {
        name: $scope.name,
        perm: $scope.selectedPerm.name
      }
    }

    /*********************************
   *  Delet user
   *
   *********************************/
    $scope.Del = function (index) {
      $scope.users.splice(index, 1)
    }
  })

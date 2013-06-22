/// <reference path="../app.ts" />
/// <reference path="../services.ts" />

'use strict';

module app.controllers {

    export class MyController implements IController {
        constructor (private $scope, private myService) {
            $scope.message = myService.someMethod();

        }
    }

}

// Remember to pass all the services used by the constructor of the Controller.
app.registerController('MyController', ['$scope', 'myService']);

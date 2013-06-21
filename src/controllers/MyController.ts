/// <reference path="../app.ts" />

'use strict';

module app.controllers {

    export class MyController implements IController {
        constructor (private $scope) {
            $scope.message = 'Hello world!';
        }
    }

}

// Remember to pass all the services used by the constructor of the Controller.
app.registerController('MyController', ['$scope']);

/// <reference path="../app.ts" />

'use strict';

module app.controllers {

    export class MyController implements IController {
        constructor (private $scope) {
            $scope.message = 'Hello world!';
        }
    }

}

app.registerController('MyController', ['$scope']);

/// <reference path="../app.ts" />

'use strict';

module app.controllers {

    export class MyController implements IController {
        constructor (private $scope) {
            $scope.things = [1,2,3,4]
        }
    }

}

app.registerController('MyController', ['$scope']);

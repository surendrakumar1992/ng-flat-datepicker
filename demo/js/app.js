(function() {

    'use strict';

    /**
     * Test code for ng-datepicker demo
     */
    angular
        .module('testApp', ['ngFlatDatepicker'])
        .controller('mainController', ['$scope', mainController]);

    function mainController ($scope) {

        $scope.datepickerConfig = {
            allowFuture: false,
            dateFormat: 'DD/MM/YYYY',
			startYear : 2000 // Dropdown startYear Default start from 1960
        };
    }

})();

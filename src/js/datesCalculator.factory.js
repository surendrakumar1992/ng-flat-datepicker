(function(){

    'use strict';

    /**
     * @desc Dates calculator factory
     */

     angular
         .module('ngFlatDatepicker')
         .factory('datesCalculator', datesCalculator);

    function datesCalculator () {

        /**
         * List all years for the select
			@startYear integer Dropdown list starting year
         * @return {[type]} [description]
         */
        function getYearsList(startYear) {
            var yearsList = [];
            for (var i = startYear; i <= moment().year(); i++) {
                yearsList.push(i);
            }
            return yearsList;
        }

        /**
         * List all days name in the current locale
         * @return {[type]} [description]
         */
        function getDaysNames () {
            var daysNameList = [];
            for (var i = 0; i < 7 ; i++) {
                daysNameList.push(moment().weekday(i).format('ddd'));
            }
            return daysNameList;
        }

        return {
            getYearsList: getYearsList,
            getDaysNames: getDaysNames
        };
    }

})();

define(['angular', 'moment'], function(angular, moment) {
    'use strict';

    angular.module('superdesk.directives').

        /**
         * sdGroupDates directive will group list items by a date provided as a param.
         *
         * Usage:
         * <li ng-repeat="item in items" ng-model="item" sd-group-dates="updated">
         *
         * Params:
         * @param {object} ngModel
         * @param {string} sdGroupDates - model field to group by
         */
        directive('sdGroupDates', function() {
            var lastDate = null;
            var COMPARE_FORMAT = 'YYYY-M-D';
            var DISPLAY_FORMAT = 'D. MMMM';
            return {
                require: 'ngModel',
                link: function(scope, element, attrs, ngModel) {
                    ngModel.$render = function() {
                        var date = moment.utc(ngModel.$viewValue[attrs.sdGroupDates]);
                        if (scope.$first || lastDate.format(COMPARE_FORMAT) !== date.format(COMPARE_FORMAT)) {
                            element.prepend('<div class="date"><span>' + date.format(DISPLAY_FORMAT) + '</span></div>');
                            element.addClass('with-date');
                            lastDate = date;
                        }
                    };
                }
            };
        });
});
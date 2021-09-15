global.jasmine = true;
window.jasmine = true;
require('../lib/angular/angular.min');
require('../lib/angular-mocks/angular-mocks');
require('./phone-list.module');
require('./phone-list.component');

describe('phoneList', function () {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(angular.mock.module('phoneList'));

    // Test the controller
    describe('PhoneListController', function () {

        it('should create a `phones` model with 3 phones', inject(function ($componentController) {
            var ctrl = $componentController('phoneList');

            expect(ctrl.phones.length).toBe(3);
        }));

    });

});
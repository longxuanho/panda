import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import './tbisDetailsMap.css';
import template from './tbisDetailsMap.html';

class TbisDetailsMap {
    constructor($scope) {
        'ngInject';

        this.map = {
            center: {
                latitude: 10.7642583,
                longitude: 106.7897017
            },
            zoom: 15,
            events: {
                click: (mapModel, eventName, originalEventArgs) => {
                    if (this.pickLocation) {
                        this.setLocation(originalEventArgs[0].latLng.lat(), originalEventArgs[0].latLng.lng());
                        $scope.$apply();
                    }
                }
            }
        };

        this.marker = {
            options: {
                draggable: true
            },
            events: {
                dragend: (marker, eventName, mapModel, args) => {
                    if (this.pickLocation) {
                        this.setLocation(marker.getPosition().lat(), marker.getPosition().lng());
                        $scope.$apply();
                    }

                }
            }
        };
    }

    setLocation(latitude, longitude) {
        this.location = {
            latitude,
            longitude
        };
    }
}

const name = 'tbisDetailsMap';

// create a module
export default angular.module(name, [
    angularMeteor,
    'nemLogging', // https://github.com/angular-ui/angular-google-maps/issues/1633
    'uiGmapgoogle-maps'
]).component(name, {
    template,
    controllerAs: name,
    bindings: {
        location: '=',
        pickLocation: '<'
    },
    controller: TbisDetailsMap
});
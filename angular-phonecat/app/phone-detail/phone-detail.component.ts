'use strict';

import {Phone, PhoneData} from '../core/phone/phone.service';

class PhoneDetailController {

    phone:PhoneData;
    mainImageUrl:string;

    static $inject = ['$routeParams', 'phone'];

    constructor($routeParams:angular.route.IRouteParamsService, phone:Phone) {
        let phoneId = $routeParams['phoneId'];

        phone.get(phoneId).subscribe(data => {
            this.phone = data;

            this.setImage(data.images[0]);
        });
    }

    setImage(imageUrl:string) {
        this.mainImageUrl = imageUrl;
    }

}

// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: '',
    controller: PhoneDetailController
});

import angular from 'angular';
import angularMeteor from 'angular-meteor';

import _ from 'underscore';

class TbisFilterPanelSolverService {

    constructor() {
        'ngInject';

    }

}

const name = 'tbisFilterPanelSolverService';

// create a module
export default angular.module(name, [
    angularMeteor
])
    .service(name, TbisFilterPanelSolverService);


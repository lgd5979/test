/**
 * MainCtrl - controller
 */
function MainCtrl() {

    this.userName = '';
    this.helloText = '';

};


angular
    .module('zcake')
    .controller('MainCtrl', MainCtrl)
angular.module('delta98.ionic.sideMenuDepth', [])
    .directive('sideMenuDepth', function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attr) {
            var sideMenu    = angular.element($element[0].offsetParent).find('ion-side-menu')[0];
            var scrollDelay = 0.4;
            var initScale   = 0.7;

            sideMenu.style[ionic.CSS.TRANSFORM] = 'scale(' + initScale + ')';
            sideMenu.style.opacity = 1;

            $scope.$watch('sideMenuContentTranslateX', function (newVal, oldVal) {
                var newScale = (newVal * scrollDelay / 100) + initScale;
                var scale = (newScale > 1) ? 1 : newScale;
                ionic.requestAnimationFrame(function () {
                    sideMenu.style[ionic.CSS.TRANSFORM] = 'scale(' + scale + ')';

                    sideMenu.style.opacity = (1 - (1 - (newVal / 138)));
                });
            });
        }
    }
});


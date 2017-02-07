/**
 * Created by stefan.trajkovic on 7.2.2017..
 */
(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                productResource]);

    function productResource($resource) {
        return $resource("/api/products/:productId")
    }
}());
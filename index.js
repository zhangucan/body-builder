"use strict";
exports.__esModule = true;
var request_body_search_1 = require("./lib/request-body-search");
var query_1 = require("./lib/query");
var requestBodySearch = function () { return new request_body_search_1.RequestBodySearch(); };
exports.requestBodySearch = requestBodySearch;
var metricQuery = function () { return new query_1.Query(); };
exports.metricQuery = metricQuery;

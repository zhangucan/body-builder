import { RequestBodySearch } from "./lib/request-body-search";
import { Query } from "./lib/query";
const  requestBodySearch = () => new RequestBodySearch();
const metricQuery = () => new Query();
export {
    requestBodySearch,
    metricQuery
}


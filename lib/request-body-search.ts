'use strict';
import * as _ from "lodash";
import {Query} from "./query"
export class RequestBodySearch {
  _queries: Query[] = []
  _body: any
  constructor() {
  }
  query(query: Query) {
    this._queries.push(query._body);
    return this;
  }
  querys(queries: Query[]) {
    queries.forEach(query => this.query(query));
    return this;
  }
  start(start: number) {
    this._body.start = start;
    return this;
  }
  end(end: number) {
    this._body.end = end;
    return this;
  }
  build() {
    const body = _.cloneDeep(this._body);
    const queries = _.cloneDeep(this._queries);
    return _.assign(body, { queries })
  }
}

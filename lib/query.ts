'use strict';
import * as _ from "lodash";
export class Query {
  _body: any
  constructor() {
    this._body = {};
  }
  tags(tagsEntry: object) {
    this._body.tags = tagsEntry;
    return this;
  }
  downsample(downsample: string) {
    this._body.downsample = downsample;
    return this;
  }
  limit(limit: number) {
    this._body.limit = limit;
    return this;
  }
  offset(offset: number) {
    this._body.offset = offset;
    return this;
  }
  bulid() {
    const body = _.cloneDeep(this._body);
    return body;
  }
}

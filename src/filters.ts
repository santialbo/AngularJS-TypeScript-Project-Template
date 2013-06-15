/// <reference path="app.ts" />

'use strict';

module app.filters {

    export class RangeTo implements IFilter {
        filter (start: number, end: number) {
            var out = []
            for (var i = start; i < end; ++i) out.push(i)
            return out
        }
    }

}

app.registerFilter('RangeTo', []);

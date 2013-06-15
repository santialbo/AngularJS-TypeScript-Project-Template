/// <reference path="app.ts" />

'use strict';

module app.filters {

    export class RangeTo implements IFilter {
        filter (input: string, ...args: any[]) {
            var out = [], start = parseInt(input), end = parseInt(args[0])
            for (var i = start; i < end; ++i) out.push(i)
            return out
        }
    }

}

app.registerFilter('RangeTo', []);

import { Injectable } from '@angular/core';

@Injectable()
export class Params
{
    private _value1;
    private _value2;

    get value1() { return this._value1; }
    get value2() { return this._value2; }

    constructor( v1, v2 ) {
        this._value1 = v1;
        this._value2 = v2;
    }
}

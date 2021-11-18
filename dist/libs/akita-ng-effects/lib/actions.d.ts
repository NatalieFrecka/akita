import { Subject } from 'rxjs';
import { Action } from './types';
import * as i0 from "@angular/core";
export declare class Actions extends Subject<Action> {
    dispatch(value: Action): void;
    logAction(value: Action): void;
    static ɵfac: i0.ɵɵFactoryDef<Actions, never>;
    static ɵprov: i0.ɵɵInjectableDef<Actions>;
}

import { Observable } from 'rxjs';
import { EffectOptions } from './types';
export declare function createEffect<T>(actions$: () => Observable<T>, options?: EffectOptions): Observable<T>;

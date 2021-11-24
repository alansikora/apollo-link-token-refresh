import { Observable, Operation, NextLink, FetchResult } from '@apollo/client/core';
export interface SubscriberInterface {
    next?: (result: FetchResult) => void;
    error?: (error: Error) => void;
    complete?: () => void;
}
export interface QueuedRequest {
    operation: Operation;
    forward?: NextLink;
    subscriber?: SubscriberInterface;
    observable?: Observable<FetchResult>;
    next?: (result: FetchResult) => void;
    error?: (error: Error) => void;
    complete?: () => void;
}
export declare class OperationQueuing {
    queuedRequests: QueuedRequest[];
    constructor();
    enqueueRequest(request: QueuedRequest): Observable<FetchResult>;
    consumeQueue(): void;
}
//# sourceMappingURL=queuing.d.ts.map
const androidRequest = <T>(task: string, ...args: any[]): T => {
    if (task in AndroidWrapper)
        return AndroidWrapper[task](...args)
    else throw Error('method is not implemented');
}

const androidAsyncRequest = <T, >(task: string) => {
    if (task in AndroidWrapper)
        return new Promise<T>((resolve, reject) => {
            const requestID = "asyncRequest_" + Math.floor(Math.random() * 1000);
            window[requestID] = {
                callback: (result: AndroidResponse<T>) => {
                    if ('success' in result)
                        resolve(result.success)
                    else if ('error' in result)
                        reject(result.error)
                    delete window[requestID]
                }
            }
            AndroidWrapper[task](requestID)
        })
    else throw Error('method is not implemented');
}

type AndroidResponse<T> =
    { error: AndroidError } |
    { success: T }

type AndroidError =
    { message: string }

type AndroidPermission =
    "GRANTED" |
    "NOT_GRANTED" |
    "BLOCKED"

type AndroidLocation =
    {
        latitude: number;
        longitude: number;
        isMock: boolean;
    }

export {androidRequest, androidAsyncRequest}
export type {AndroidError, AndroidPermission, AndroidLocation}
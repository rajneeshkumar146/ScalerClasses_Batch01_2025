Promise.myPromiseAny = function (arrOfPromises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(arrOfPromises)) {
            reject("Expected a array of promises. But recived: ", arrOfPromises);
            return;
        }

        let unResolvedPromisesArrayLength = arrOfPromises.length;
        const resolvedPromisesResult = [];
        const failureExceptions = [];

        if (unResolvedPromisesArrayLength === 0) {
            resolve(resolvedPromisesResult);
        }

        arrOfPromises.forEach(async (promise) => {
            try {
                const value = await promise;
                resolvedPromisesResult.push(value);

                unResolvedPromisesArrayLength--;
                resolve(resolvedPromisesResult);
                return;
            } catch (err) {
                
                failureExceptions.push(err);
            }
        });

        reject("[AggregateError: All promises were rejected] { [errors]: " + failureExceptions + "}");
    });
}

const promise1 = Promise.resolve(100);
const promise2 = Promise.resolve(200);
const promise3 = Promise.reject(300);
const promise4 = Promise.reject(400);

const promiseAll = async () => {
    console.log("1: ");
    const group1 = await Promise.any([promise1, promise2]);
    console.log("2: ", group1);
    const group2 = await Promise.any([promise3, promise4])

    console.log("3: ", group2);
    return [group1, group2]
}

promiseAll().then(console.log).catch(function (err) {
    console.log("Hit by error: ", err);
});


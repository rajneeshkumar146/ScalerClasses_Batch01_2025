let productValue = 500;

function apply20Coupon() {
    console.log("New Price: ", productValue - (productValue * 0.2));
}

function throttle(cb, haltAllCallForInterval = 500) {
    shouldWait = false;

    return function (...args) {
        if (shouldWait) {
            console.log("this coupon is already applied, Wait for 3 hr");
            return;
        }

        // Call Method and set waiting flag.

        cb(...args);
        shouldWait = true;

        setTimeout(() => {
            shouldWait = false;
        }, haltAllCallForInterval);
    }

}


const throttledApplyCoupon = throttle(apply20Coupon, 3000);
console.log("```````````````````");
throttledApplyCoupon();  //1
console.log("```````````````````");
throttledApplyCoupon();  //2

setTimeout(() => {
    console.log("at t=2000");
    throttledApplyCoupon(); //3
}, 2000);

setTimeout(() => {
    console.log(" at t=5000");
    throttledApplyCoupon(); //4
}, 5000);
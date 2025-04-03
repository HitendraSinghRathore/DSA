function debounce(fn,delay) {
    let timer = null;

    return function debouncedFn(...args) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => fn.apply(this,args), delay);
    }
}



function throttle(fn,delay) {
    let hasRun = false;
    let oldArgs;
    let timer;
    return function throttledFn(...args) {
        if(!hasRun) {
            fn.apply(this, args);
            hasRun = true;
            timer = () => setTimeout(() => {
                hasRun = false;
                if(oldArgs) {
                    fn.apply(this, oldArgs);
                    hasRun = true;
                    oldArgs = undefined;
                    timer();
                }
            },delay)
        } else {
            oldArgs = args;
        }
    }
}
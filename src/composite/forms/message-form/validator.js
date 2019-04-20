function choose(regex) {
    return function(input, cb) {
        const valid = regex.test(input.value);
        if(cb instanceof Function) {
            cb(valid, input);
        } else {
            return valid;
        }
    }
}

const name = choose(/^[a-zA-Z0-9]+$/);
const email = choose(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

export default {name, email};
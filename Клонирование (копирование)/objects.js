import isObject from 'lodash/isObject';

// BEGIN (write your solution here)

export default function cloneDeep(obj) {
    if (isObject(obj)) {
        let res = {};
        for (let k in obj) {
            res[k] = cloneDeep(obj[k])
        }
        return res;
    }
    else {
        return obj;
    }
}
// END
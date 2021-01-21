export default (obj, arr) => {
    let result = obj;
    for (const key of arr){
        if (Object.prototype.hasOwnProperty.call(result, key)) {
            result = result[key];
        }
        else{
            return null;
        }
    }
    return result;
}


// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import isObject from 'lodash/isObject';

// BEGIN (write your solution here)

export const cloneDeep = (obj) => {
    if (!_.isObject(obj)) {
        return obj;
    }
    else {
        let res = {};
        for (let k in obj) {
            res[k] = cloneDeep(obj[k])
        }
        return cloneDeep(obj)
    }
}
// END

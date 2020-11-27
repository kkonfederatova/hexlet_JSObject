// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
export default (obj1, arr, obj2) => {
    if (arr.length != 0){
        return Object.assign(obj1, _.pick(obj2,arr))
    }
    return Object.assign(obj1, obj2);
}
// END

/* BEGIN решение на курсе
export default (object, keys, data) => {
    const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
    Object.assign(object, filteredData);
};
 END */
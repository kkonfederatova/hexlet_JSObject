// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
export default (data, arr) => {
    const result = {};
    for (const item of arr){
        if (data.hasOwnProperty(item)){
            result.[item] = data.[item];
        }
    }
    return result;
}
// END

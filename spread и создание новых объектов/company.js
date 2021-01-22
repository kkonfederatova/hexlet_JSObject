// @ts-check

// BEGIN (write your solution here)
export default (name, ...objs) => {
    let result = { state:'moderating' };
    result.name = name;
    result.createdAt = Date.now();
    for (let obj of objs) {
        result = { ...result, ...obj}
    }
    return result;
}
// END
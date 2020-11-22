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
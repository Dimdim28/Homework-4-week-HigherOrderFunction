'use strict';

const iterate = (obj, callback) => {
    const allKeys = Object.keys(obj);
    for( const key of allKeys){
        const value = obj[key];
        callback(key,value,obj);
    }
}


module.exports = { iterate };

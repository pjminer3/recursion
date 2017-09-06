// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = '';

  function stringify(o) {
    if (o === undefined) {
      return;
    } else if (typeof o === 'function') {
      return;
    }

    if (typeof o === 'number') {
      result += o.toString();
    } else if (typeof o === 'string') {
      result += ('"' + o + '"');
    } else if (typeof o === 'boolean') {
      result += o.toString();
    } else if (o === null) {
      result += 'null';
    } else {
      // The cases below are if the obj is truly an object
      if (Array.isArray(o) === true) {
        // if the object is an array
        result += '[';
        for (let i = 0; i < o.length - 1; i++) {
          stringify(o[i]);
          result += ',';
        }
        stringify(o[o.length - 1]);
        result += ']';
      } else {
        // if the object is an object
        result += '{';
        if (Object.keys(o).length > 0) {
          for (let i in o) {
            if (o[i] === undefined || typeof o[i] === 'function') {
            } else {
              stringify(i);
              result += ':';
              stringify(o[i]);
              result += ',';
            }
          }
          if (result.length > 1) {
            result = result.slice(0, result.length -1);
          }
        }
        result += '}';
      }
    }
  }
  
  stringify(obj);
  return result;
};

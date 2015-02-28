
function classSet ( classes ) {
  return typeof classes !== 'object' ?
    Array.prototype.join.call(arguments, ' ') :
    Object.keys(classes).filter(function(className){
      return classes[className];
    }).join(' ');
}

module.exports = classSet;

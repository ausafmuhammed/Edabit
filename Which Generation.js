function generation(x, y) {
  if (`${x}, ${y}` == `-3, f`){
    return "great grandmother";
  } else if (`${x}, ${y}`   == `-3, m`) {
    return "great grandfather";
  }if (`${x}, ${y}` == `-2, f`){
    return "grandmother";
  } else if (`${x}, ${y}`   == `-2, m`) {
    return "grandfather";
  } if (`${x}, ${y}` == `-1, f`){
    return "mother";
  } else if (`${x}, ${y}`   == `-1, m`) {
    return "father";
  }else if (`${x}, ${y}` == `0, f`||`${x}, ${y}` == `0, m`){
    return "me!";
  } if (`${x}, ${y}` == `1, f`){
    return "daughter";
  } else if (`${x}, ${y}`   == `1, m`) {
    return "son";
  } if (`${x}, ${y}` == `2, f`){
    return "granddaughter";
  } else if (`${x}, ${y}`   == `2, m`) {
    return "grandson";
  } if (`${x}, ${y}` == `3, f`){
    return "great granddaughter";
  } else if (`${x}, ${y}`   == `3, m`) {
    return "great grandson";
  } 
}
console.log(generation(0,"m"));
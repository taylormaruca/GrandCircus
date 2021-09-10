// what to wear based on temp and type of event
// casual "something comfy", semi-formal "a polo", formal "a suit"
// <54 degrees "a coat"
// 54-70 degrees "a jacket"
// >70 degrees "no jacket"
function whatToWear(event, temp) {
  if (event) {
    if (event.toLowerCase() === "Casual" && temp < 54) {
      return "Something comfy and a coat";
    } else if (event.toLowerCase() === "Casual" && (temp >= 54 && temp <= 70)) {
      return "Something comfy and a jacket";
    } else if (event.toLowerCase() === "Casual" && temp > 70) {
      return "Something comfy and no jacket";
    } else if (event.toLowerCase() === "Semi-formal" && temp < 54) {
      return "A polo and a coat";
    } else if (event.toLowerCase() === "Semi-formal" &&(temp >= 54 && temp <= 70)) {
        return "A polo and a jacket";
    } else if (event.toLowerCase() === "Semi-formal" && temp > 70) {
      return "A polo and no jacket";
    } else if (event.toLowerCase() === "Formal" && temp < 54) {
      return "A suit and a coat";
    } else if (event.toLowerCase() === "Formal" && (temp >= 54 && temp <= 70)) {
      return "A suit and a jacket";
    } else if (event.toLowerCase() === "Formal" && temp > 70) {
      return "A suit and no jacket";
    }
  }
  //   if (typeof temp === "string") {
  //     throw "Temp was not provided";
  //   }
  //   throw "Invalid unit";
}

module.exports = { whatToWear };

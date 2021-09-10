fetch('https://grandcircusco.github.io/demo-apis/donuts.json')
  .then(response => response.json())
  .then(data => {
    const result = data.results.find(element => element.name.toLowerCase() === "cake");
    console.log(result);
  });

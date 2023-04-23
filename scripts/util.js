async function readFile(location){
    const response = await fetch(location);
    const text = await response.text();
    return text;
  }
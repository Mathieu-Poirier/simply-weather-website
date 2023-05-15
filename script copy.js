fetch("PASTE API KEY HERE", {
  method: "GET",
  headers: {},
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    const temperature = data.currentConditions.temp;
    document.getElementById("jsonResponse").innerText =
      "Temperature: " + temperature + "°C";
  })
  .catch((error) => {
    console.error(error);
  });

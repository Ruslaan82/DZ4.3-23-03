const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("GET", "people.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();
  request.addEventListener("load", () => {
    const data = JSON.parse(request.response);

    data.map((item) => {
      const span = document.createElement("p");
      const p = document.createElement("p");
      const btn = document.createElement("button");

      span.innerHTML = `Name: ${item.name}`;
      document.querySelector(".nameAge").append(span);
      p.innerHTML = `Age: ${item.age}`;
      document.querySelector(".nameAge").append(p);
    });
  });
});

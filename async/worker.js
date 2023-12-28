addEventListener("message", function (event) {
  const total = event.data;
  for (let i = 0; i < total; i++) {
    postMessage(i);
  }
});

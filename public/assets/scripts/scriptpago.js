window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const submitBtn = document.querySelector(".submit-btn");

  form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitBtn.classList.add("loading");

      setTimeout(() => {
          submitBtn.classList.remove("loading");
          submitBtn.classList.add("sent");
          submitBtn.value = "Pago enviado";
      }, 3000);
  });
});
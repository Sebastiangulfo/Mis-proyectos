const buttons = document.querySelectorAll(".item");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.textContent.trim().toLowerCase();

    // Ocultar todas las secciones
    sections.forEach(sec => sec.classList.remove("active"));

    // Buscar la sección correspondiente
    const section = document.getElementById(target);

    if (section) {
      section.classList.add("active");
    }
  });
});
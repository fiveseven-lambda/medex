document.addEventListener("click", (e) => {
  const el = e.target.closest(".blank");
  if (!el) return;

  const id = el.dataset.id;
  const targets = id
    ? document.querySelectorAll(`.blank[data-id="${id}"]`)
    : [el];

  targets.forEach((t) => {
    t.textContent = t.dataset.answer;
    t.classList.add("revealed");
  });
});

const cushions = document.querySelectorAll('.cushion');

cushions.forEach(cushion => {
  cushion.addEventListener('click', () => {
    if (cushion.classList.contains('gray')) return; // already reserved
    const cushionName = cushion.id;
    const userName = prompt(`Enter your name for cushion ${cushionName}:`);
    if (userName) {
      cushion.classList.add("gray");
      cushion.textContent = `${cushionName}\n${userName}`;
      cushion.style.pointerEvents = "none";
    }
  });
});

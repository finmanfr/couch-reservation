const cushions = document.querySelectorAll('.cushion');

cushions.forEach(cushion => {
  cushion.addEventListener('click', () => {
    const cushionName = cushion.id;
    const userName = prompt(`Enter your name for cushion ${cushionName}:`);
    if (userName) {
      // mailto link
      window.location.href = `mailto:finsterstewart@gmail.com?subject=Cushion Reservation&body=Cushion ${cushionName} reserved by ${userName}`;
      cushion.classList.add("gray");
      cushion.style.pointerEvents = "none";
    }
  });
});

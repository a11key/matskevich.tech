// header.js

async function loadHTML(id, url) {
  const resp = await fetch(url);
  if (resp.ok) {
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;

    // --- Инициализация гамбургера после вставки header ---
    if (id === 'header-placeholder') {
      const menuToggle = document.getElementById("menu-toggle");
      const navMenu = document.getElementById("nav-menu");

      if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
          menuToggle.classList.toggle("active");
          navMenu.classList.toggle("active");
        });

        // Закрытие меню при клике на ссылку
        navMenu.querySelectorAll("a").forEach(link =>
          link.addEventListener("click", () => {
            menuToggle.classList.remove("active");
            navMenu.classList.remove("active");
          })
        );
      }
    }
  } else {
    console.error('Failed to load', url);
  }
}

// Загружаем header и footer
loadHTML('header-placeholder', 'header.html');
loadHTML('footer-placeholder', 'footer.html');

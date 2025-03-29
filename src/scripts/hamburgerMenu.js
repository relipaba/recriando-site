document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".header-container img");
    const menu = document.createElement("nav");
    menu.classList.add("hamburger-menu");
    menu.innerHTML = `
        <button class="close-menu">X</button>
        <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#feedback">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    `;
    document.body.appendChild(menu);

    // Adiciona evento de clique no botão do menu
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Adiciona evento de clique no botão "X" para fechar o menu
    const closeButton = menu.querySelector(".close-menu");
    closeButton.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
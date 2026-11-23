
const imagens = document.querySelectorAll(".gallery .image");

// Interação ao clicar nas fotografias
imagens.forEach((imagem) => {
    imagem.addEventListener("click", () => {
        imagem.classList.toggle("selected");
    });
});

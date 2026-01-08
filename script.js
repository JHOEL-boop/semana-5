const imageUrlInput = document.getElementById("imageUrl");
const addButton = document.getElementById("addImage");
const deleteButton = document.getElementById("deleteImage");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Agregar imagen
addButton.addEventListener("click", () => {
    const url = imageUrlInput.value;
    if (!url) return;

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => {
        if (selectedImage) {
            selectedImage.classList.remove("selected");
        }
        img.classList.add("selected");
        selectedImage = img;
    });

    gallery.appendChild(img);
    imageUrlInput.value = "";
});

// Eliminar imagen seleccionada
deleteButton.addEventListener("click", () => {
    if (selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});

// Atajo de teclado (Delete)
document.addEventListener("keydown", (e) => {
    if (e.key === "Delete" && selectedImage) {
        selectedImage.remove();
        selectedImage = null;
    }
});

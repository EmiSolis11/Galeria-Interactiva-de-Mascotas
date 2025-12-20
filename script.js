// Este archivo está listo para agregar funcionalidades JavaScript
// Por ahora, el efecto hover está manejado con CSS

console.log('🐾 Galería de mascotas cargada correctamente');

// Función para agregar una nueva mascota dinámicamente
function agregarMascota(nombre, emoji, fotos) {
    const container = document.querySelector('.pets-container');
    
    // Crear la tarjeta de la mascota
    const petCard = document.createElement('div');
    petCard.className = 'pet-card';
    
    // Crear el nombre
    const petName = document.createElement('div');
    petName.className = 'pet-name';
    petName.textContent = `${emoji} ${nombre}`;
    
    // Crear el contenedor de fotos
    const photosContainer = document.createElement('div');
    photosContainer.className = 'photos-container';
    
    // Agregar las fotos
    fotos.forEach((foto, index) => {
        if (foto) {
            // Si hay una URL de foto, crear una imagen
            const img = document.createElement('img');
            img.src = foto;
            img.alt = `Foto ${index + 1} de ${nombre}`;
            img.className = 'pet-photo';
            photosContainer.appendChild(img);
        } else {
            // Si no hay foto, crear un placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'photo-placeholder';
            placeholder.textContent = `Foto ${index + 1} de ${nombre}`;
            photosContainer.appendChild(placeholder);
        }
    });
    
    // Ensamblar todo
    petCard.appendChild(petName);
    petCard.appendChild(photosContainer);
    container.appendChild(petCard);
}

// Ejemplo de uso (descomenta para probar):
// agregarMascota('Toby', '🐶', ['foto1.jpg', 'foto2.jpg', 'foto3.jpg']);

// Función para agregar efecto de sonido al hacer hover (opcional)
function agregarSonido() {
    const petCards = document.querySelectorAll('.pet-card');
    
    petCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log('Mouse sobre:', card.querySelector('.pet-name').textContent);
            // Aquí puedes agregar un sonido si lo deseas
        });
    });
}

// Llamar la función cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    agregarSonido();
});
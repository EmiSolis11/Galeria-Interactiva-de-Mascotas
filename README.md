# 🐾 Galería Interactiva de Mascotas

Una galería web minimalista e interactiva que muestra fotos y videos de tus mascotas con efectos hover elegantes. Es una pagina simple pero pues es divertida para hacer y mostrar a tus mascotitas como yo que pues enseño a mis 3 bebes en este pequeño proyecto.

<img width="1916" height="961" alt="image" src="https://github.com/user-attachments/assets/a08e1bb1-8a6c-437a-9eb9-702fca2db986" />

<img width="1613" height="1076" alt="image" src="https://github.com/user-attachments/assets/b271f43b-ae8c-4326-b413-8ac0058e5999" />

<img width="1613" height="1076" alt="image" src="https://github.com/user-attachments/assets/e211c8a9-054c-4472-b234-861b66a1922a" />


## 📋 Descripción

Este proyecto es una galería web interactiva que permite mostrar fotos y videos de tus mascotas de forma elegante. Al pasar el cursor sobre el nombre de cada mascota, aparecen sus imágenes o videos a los lados con animaciones suaves.

## ✨ Características

- 🎨 **Diseño minimalista** con fondo oscuro
- 🖱️ **Efectos hover interactivos** - las imágenes aparecen al pasar el cursor
- 🎬 **Soporte para videos y fotos** - puedes mezclar ambos formatos
- 📱 **Responsive** - se adapta a diferentes tamaños de pantalla
- ⚡ **Sin dependencias** - HTML, CSS y JS puro
- 🎭 **Animaciones suaves** con transiciones CSS

## 🚀 Demo

[Ver demo en vivo](https://emisolis11.github.io/Galeria-Interactiva-de-Mascotas/)

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura del sitio
- **CSS3** - Estilos y animaciones
- **JavaScript** - Interactividad (opcional)

## 📂 Estructura del Proyecto

```
Galeria-Interactiva-de-Mascotas/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # JavaScript (funcionalidades extra)
├── images/             # Carpeta de medios
│   ├── roco1.mp4
│   ├── roco2.mp4
│   ├── luna1.jpeg
│   ├── luna2.jpeg
│   ├── mango1.mp4
│   └── mango2.jpeg
└── README.md           # Este archivo
```

## 💻 Instalación

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/EmiSolis11/Galeria-Interactiva-de-Mascotas.git
   ```

2. **Navega a la carpeta del proyecto:**
   ```bash
   cd Galeria-Interactiva-de-Mascotas
   ```

3. **Abre el archivo `index.html` en tu navegador**
   - Doble click en el archivo, o
   - Usa Live Server en VS Code para desarrollo

## 🎨 Personalización

### Cambiar los nombres de las mascotas

Edita el archivo `index.html` y modifica las etiquetas `<h2 class="pet-name">`:

```html
<h2 class="pet-name">TU_MASCOTA</h2>
```

### Agregar tus propias fotos/videos

1. Guarda tus archivos en la carpeta `images/`
2. Actualiza las rutas en `index.html`:

```html
<!-- Para imágenes -->
<img src="images/tu-foto.jpg" alt="Descripción" class="pet-photo">

<!-- Para videos -->
<video class="pet-photo" autoplay loop muted playsinline>
    <source src="images/tu-video.mp4" type="video/mp4">
</video>
```

### Cambiar colores

Edita `styles.css` y modifica estas variables:

```css
body {
    background-color: #2a2a2a;  /* Color de fondo */
}

.pet-name {
    color: #b0b0b0;  /* Color del texto */
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar este proyecto:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregando nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**EmiSolis11**

- GitHub: [@EmiSolis11](https://github.com/EmiSolis11)

## 🌟 Muestra tu apoyo

¡Dale una ⭐️ si este proyecto te ayudó!

---

⌨️ con ❤️ por [EmiSolis11](https://github.com/EmiSolis11)

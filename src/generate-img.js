const sharp = require('sharp');

const images = [
  // SLIDER
  'slider-1.jpg',
  'slider-2.jpg',
  'slider-3.jpg',
  'slider-4.jpg',
  'slider-5.jpg',

  // RECETAS
  'risotto.jpg',
  'pizza.jpg',
  'tarta-queso.jpg',
  'ensalada-cesar.jpg',
  'pollo-ajillo.jpg',
  'espaguettis-carbonara.jpg',
  'merluza-salsa-verde.jpg',
  'brownie.jpg',
  'bizcocho-limon.jpg',

  // EVENTOS
  'meat-carnival.jpg',
  'coffee-fest.jpg',
  'organic-food-iberia.jpg',
  'tapa-fusion.jpg',
  'gugenheim-bilbao.jpg',
  'jarras-cerveza.jpg',
  'castilla-la-mancha.jpg',
  'uva-vino.jpg',
  'valencia.jpg',

  //Sliders páginas detalle
  'risotto-slider1.jpg',
  'risotto-slider2.jpg',
  'risotto-slider3.jpg',
  'tartaqueso_slide1.jpg',
  'tartaqueso_slide2.jpg',
  'tartaqueso_slide3.jpg',
  'coffee_slide1.jpg',
  'coffee_slide2.jpg',
  'coffee_slide3.jpg',
  'tapa_slide1.jpg',
  'tapa_slide2.jpg',
  'tapa_slide3.jpg',

  //Hero secciones
  'hero_bck.jpg',
  'recetas.jpg',
  'eventos.jpg',
  'fuentes_informacion.jpg',

  //Direccion de arte
  'risotto-escritorio.jpg',
  'risotto-tablet.jpg',
  'risotto-movil.jpg',
  'tarta-queso-escritorio.jpg',
  'tarta-queso-tablet.jpg',
  'tarta-queso-movil.jpg',
  'coffee-fest-escritorio.jpg',
  'coffee-fest-tablet.jpg',
  'coffee-fest-movil.jpg',
  'tapa-fusion-escritorio.jpg',
  'tapa-fusion-tablet.jpg',
  'tapa-fusion-movil.jpg',

  //Logos
  'logo_sinfondo.png',
  'logo_favicon.png',

  //Imagen clip-path
  'inspiracion.jpg',
];

const sizes = [400, 800, 1200];

images.forEach(img => {
  sizes.forEach(size => {
      const outputName = img
        .replace('.jpg', `-${size}.webp`)
        .replace('.png', `-${size}.webp`);

        sharp(`img/${img}`)
        .resize(size)
        .toFormat('webp', { quality: 80 })
        .toFile(`img/${outputName}`)
        .then(() => console.log(`${img} -> ${size}px OK`))
        .catch(err => console.error(`Error con ${img}:`, err));
  });
});
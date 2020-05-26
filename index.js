const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
  const img = await imagemin(['images/*.jpg'], {
    destination: 'build/images',
    plugins: [
      imageminWebp({quality: 65})
    ]
  });

  console.log('You have amazing webP images 🚀');
  console.log(img)
})();
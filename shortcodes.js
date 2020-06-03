module.exports = {
  slider: (imgpath, pictures) => {
    if (!imgpath || !pictures) {
      return `
        <div class="alert alert-warning"> Slider Shortcode -> Error: Missing imgpath/pictures! </div>
        `;
    } else {
      return `
        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                ${createSwiperSlides(pictures, imgpath)}
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar
            <div class="swiper-scrollbar"></div> -->
        </div>
        `;
    }
  },
  audioplayer: (audiopath, filename) => {
    if(!audiopath || !filename) {
      return `
        <div class="alert alert-warning"> Audioplayer Shortcode -> Error: Missing audiopath/filename! </div>
        `;
    } else {
      return `
      <audio class="audio-player" controls source src="https://fschoenf.uber.space/rundgang/img/audio/${audiopath}/${filename}" />
      `;
    }
  }
}

/**
 * Creates swiper slides image div based on input
 * @param {Array} pictures 
 * @param {String} imgpath 
 * @returns {String} the html to render
 */
const createSwiperSlides = (pictures, imgpath) => {
  if (pictures) {
    return (pictures.map(picture => {
      return `<div class="swiper-slide swiper-slide--custom" style="background: url(https://fschoenf.uber.space/rundgang/img/slider/${imgpath}/${picture})"></div>`;
    })).join('');
  } else {
    return `<h1>Fehler: Es wurden keine Bilder definiert!</h1>`;
  }
}

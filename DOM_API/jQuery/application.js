export default () => {
  // BEGIN
  const carousels = $('[data-ride="carousel"]');
  carousels.each((_index, carousel) => {
    const root = $(carousel);
    const slides = root.find('.carousel-item');
    const maxIndex = slides.length - 1;

    const handlerGenerator = (next) => () => {
      const currentIndex = slides.filter('.active').index();
      const newCurrentIndex = next(currentIndex);
      slides.removeClass('active');
      slides.filter((id) => id === newCurrentIndex).addClass('active');
    };

    const prev = root.find('[data-slide="prev"]');
    prev.click(handlerGenerator((i) => (i === 0 ? maxIndex : i - 1)));
    const next = root.find('[data-slide="next"]');
    next.click(handlerGenerator((i) => (maxIndex === i ? 0 : i + 1)));
  });
  // END
};
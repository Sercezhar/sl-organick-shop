export function counterOnScroll() {
  function counterFunc(counterSelector, attributeSelector) {
    const counters = document.querySelectorAll(counterSelector);

    const interval = 1500;

    counters.forEach(counter => {
      let startsValue = 0;
      const endValue = parseInt(counter.getAttribute(attributeSelector));
      const duration = Math.floor(interval / endValue);
      console.log(endValue, duration);
      const counterHandler = setInterval(() => {
        startsValue += 1;
        counter.textContent = startsValue;

        if (startsValue == endValue) {
          clearInterval(counterHandler);
        }
      }, duration);
    });
  }

  // play animation on scroll
  const counterSection = document.querySelectorAll('.counters');

  function counterTrigger(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counterFunc('.counters__number', 'data-number');
      }
    });
  }

  const observer = new IntersectionObserver(counterTrigger);

  counterSection.forEach(box => {
    observer.observe(box);
  });
}

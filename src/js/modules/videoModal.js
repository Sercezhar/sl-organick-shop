export function videoModal() {
  const trigger = document.querySelector('.services-video__button');
  const backdrop = document.querySelector('.video-backdrop');
  const modal = document.querySelector('.video-modal');

  const video = `<iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          style='height: 100%; width: 100%;'
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>`;

  trigger.addEventListener('click', openModal);
  backdrop.addEventListener(
    'click',
    e => e.target === backdrop && closeModal()
  );

  function openModal() {
    modal.innerHTML = video;
    backdrop.classList.add('video-backdrop--visible');
    document.body.classList.add('locked');
  }

  function closeModal() {
    backdrop.classList.remove('video-backdrop--visible');
    document.body.classList.remove('locked');
    modal.innerHTML = '';
  }
}

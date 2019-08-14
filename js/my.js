(function wholeControl() {
  const text = 'Woochul Hyun';
  const subText = "Welcome to woochl Hyun's Portfolio Site.";
  let textI = 0;
  let textSubI = 0;

  function typing() {
    if (textI < text.length) {
      document.getElementById('mainBackTitle').innerHTML += text[textI];
      textI++;

      setTimeout(typing, 100);
    }
  }

  setInterval(() => {
    document.getElementById('mainBackTitle').innerHTML = '';
    textI = 0;
    typing();
  }, 7000);

  typing();

  function typingSub() {
    if (textSubI < subText.length) {
      document.getElementById('mainBackSubText').innerHTML += subText[textSubI];
      textSubI++;

      setTimeout(typingSub, 50);
    }
  }

  setInterval(() => {
    document.getElementById('mainBackSubText').innerHTML = '';
    textSubI = 0;
    setTimeout(typingSub, 1400);
  }, 7000);

  setTimeout(typingSub, 1400);

  function getCurrentScroll() {
    return window.scrollY;
  }

  document.addEventListener('scroll', () => {
    const currentScroll = getCurrentScroll();
    console.log(currentScroll);

    function progressFunc(num) {
      return `document.getElementById('progressBarAnimation${num}').classList.add('progressBarAnimation')`;
    }

    if (currentScroll > 600 && window.innerWidth > 991.98) {
      setTimeout(progressFunc(1), 50);
      setTimeout(progressFunc(2), 150);
      setTimeout(progressFunc(3), 250);
      setTimeout(progressFunc(4), 350);
      setTimeout(progressFunc(5), 450);
      setTimeout(progressFunc(6), 550);
    } else if (
      currentScroll > 1600 &&
      window.innerWidth < 991.98 &&
      window.innerWidth > 768
    ) {
      setTimeout(progressFunc(1), 50);
      setTimeout(progressFunc(2), 150);
      setTimeout(progressFunc(3), 250);
      setTimeout(progressFunc(4), 350);
      setTimeout(progressFunc(5), 450);
      setTimeout(progressFunc(6), 550);
    } else if (currentScroll > 1400 && window.innerWidth < 768) {
      setTimeout(progressFunc(1), 50);
      setTimeout(progressFunc(2), 150);
      setTimeout(progressFunc(3), 250);
      setTimeout(progressFunc(4), 350);
      setTimeout(progressFunc(5), 450);
      setTimeout(progressFunc(6), 550);
    }
  });

  document.addEventListener('scroll', () => {
    const currentScroll = getCurrentScroll();
    const fadeIn = document.getElementById('fadeInId');
    if (currentScroll > 600 && window.innerWidth > 991.98) {
      fadeIn.classList.add('fadeIn');
    } else if (
      currentScroll > 450 &&
      window.innerWidth < 991.98 &&
      window.innerWidth > 768
    ) {
      fadeIn.classList.add('fadeIn');
    } else if (currentScroll > 350 && window.innerWidth < 768) {
      fadeIn.classList.add('fadeIn');
    }
  });
})();

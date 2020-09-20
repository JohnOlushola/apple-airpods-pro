samesite = "strict";

const html = document.body;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 136;
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, "0")}.jpg`;

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image();
img.src = currentFrame(1);
canvas.width = 1158;
canvas.height = 770;

img.onload = function () {
  context.drawImage(img, 0, 0);
};

const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = (html.scrollHeight - window.innerHeight) / 2.25;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();

scrollDown = (frameIndex) => {
  console.log("frameIndex", frameIndex);
  // Change the number.
  let previous = 0;
  let now = 0;
  let state = false;

  now = frameCount;

  if (now > previous) {
    state = true;
  } else if (now < previous) {
    state = false;
  }

  previous = now;
  return state;
};

const loadBlocks = () => {};

// Fix Block
const block = document.getElementById("block");
const blockPosition = block.getBoundingClientRect(); // get initial position of the element

window.addEventListener("scroll", () => {
  const currentScroll = html.scrollTop;

  if (currentScroll >= 1582 && currentScroll < 1650) {
    console.log(true);
  }

  if (
    currentScroll >= blockPosition.top &&
    currentScroll <= blockPosition.bottom
  ) {
    // apply position: fixed if you
    block.classList.add("fix-block");
  } else {
    block.classList.remove("fix-block");
  }
});

// Fix Block
const blockTwo = document.getElementById("block-2");
const blockTwoPosition = blockTwo.getBoundingClientRect(); // get initial position of the element

window.addEventListener("scroll", () => {
  const currentScroll = html.scrollTop;

  if (
    currentScroll >= blockTwoPosition.top &&
    currentScroll <= blockTwoPosition.bottom
  ) {
    // apply position: fixed if you
    blockTwo.classList.add("fix-block");
  } else {
    blockTwo.classList.remove("fix-block");
  }
});

// Fix Block
const blockThree = document.getElementById("block-3");
const blockThreePosition = blockThree.getBoundingClientRect(); // get initial position of the element

window.addEventListener("scroll", () => {
  const currentScroll = html.scrollTop;

  if (
    currentScroll >= blockThreePosition.top &&
    currentScroll <= blockThreePosition.bottom
  ) {
    // apply position: fixed if you
    blockThree.classList.add("fix-block");
  } else {
    blockThree.classList.remove("fix-block");
  }
});

// Fix Block
const blockFour = document.getElementById("block-4");
const blockFourPosition = blockFour.getBoundingClientRect(); // get initial position of the element

window.addEventListener("scroll", () => {
  const currentScroll = html.scrollTop;

  if (
    currentScroll >= blockFourPosition.top &&
    currentScroll <= blockFourPosition.bottom
  ) {
    // apply position: fixed if you
    blockFour.classList.add("fix-block");
  } else {
    blockFour.classList.remove("fix-block");
  }
});

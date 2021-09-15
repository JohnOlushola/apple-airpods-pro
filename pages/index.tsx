import { useEffect, useRef } from "react";

const FRAME_COUNT = 136;
const BASE_URL_B1 =
  "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const currentFrame = (index: number) =>
      BASE_URL_B1 + index.toString().padStart(4, "0") + ".jpg";

    const img = new Image();
    img.src = currentFrame(1);

    const canvas: HTMLCanvasElement = canvasRef.current;
    const context: CanvasRenderingContext2D = canvas.getContext("2d");

    canvas.width = 1158;
    canvas.height = 770;

    const preloadImages = () => {
      for (let i = 1; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    const updateImage = (index: number) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    window.addEventListener("scroll", () => {
      let scrollTop = document.scrollingElement.scrollTop;

      const maxScrollTop =
        (document.body.scrollHeight - window.innerHeight) / 2.25;

      const scrollFraction = scrollTop / maxScrollTop;

      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.ceil(scrollFraction * FRAME_COUNT)
      );

      requestAnimationFrame(() => updateImage(frameIndex + 1));
    });

    img.onload = () => {
      context.drawImage(img, 0, 0);
    };

    preloadImages();
  }, []);

  return (
    <>
      <div className="landing min-h-screen bg-black">
        <canvas ref={canvasRef} className="bg-active"></canvas>
      </div>
    </>
  );
}

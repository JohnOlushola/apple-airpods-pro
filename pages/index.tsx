import { useEffect, useRef } from "react";
import Link from "next/link";

const FRAME_COUNT = 136;
const BASE_URL_B1 =
  "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/";

export default function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const currentFrame = (index: number) =>
      BASE_URL_B1 + index.toString().padStart(4, "0") + ".jpg";

    // Set image
    const img = new Image();
    img.src = currentFrame(1);

    // Set canvas
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context: CanvasRenderingContext2D = canvas.getContext("2d");

    // Canvas size
    canvas.width = 1158;
    canvas.height = 770;

    // Preload images
    const preloadImages = () => {
      for (let i = 1; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    };

    // Update image
    const updateImage = (index: number) => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    };

    // Handle scroll event and update image
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

    // Draw image
    img.onload = () => {
      context.drawImage(img, 0, 0);
    };

    // blocks
    const handleScrollForBlock = (blockId) => {
      const block = document.getElementById(blockId);

      if (!block) {
        console.error(`Element with id ${blockId} not found.`);
        return;
      }

      const blockPosition = block.getBoundingClientRect();

      const handleScroll = () => {
        const currentScroll = document.scrollingElement.scrollTop;

        if (
          currentScroll >= blockPosition.top &&
          currentScroll <= blockPosition.bottom
        ) {
          block.classList.add("fix-block");
        } else {
          block.classList.remove("fix-block");
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    // Apply the scroll behavior for each block
    handleScrollForBlock("block-1");
    handleScrollForBlock("block-2");
    handleScrollForBlock("block-3");
    handleScrollForBlock("block-4");

    preloadImages();
  }, []);

  return (
    <>
      <div className="landing min-h-screen">
        <canvas ref={canvasRef} className="bg-active z-0"></canvas>
        <div className="h-screen flex flex-col items-center align-middle justify-center hero overscroll-contain">
          <h1 className="font-bold tracking-tight hero-text leading-none">
            AirPods Pro
          </h1>
          <div className="inline-flex mt-3 gap-2">
            <Link href="/#" passHref={true}>
              <a className="text-2xl font-semibold mr-4 hover:underline">
                Watch the product film
              </a>
            </Link>
          </div>
        </div>

        {/* Blocks */}
        <div className="fixed-block" id="block-1">
          <div className="fixed-block-content" id="block-content">
            <p className="fixed-block-text">
              Active Noise Cancellation for immersive sound.
            </p>
          </div>
        </div>

        <div className="fixed-block" id="block-2">
          <div className="fixed-block-content" id="block-content">
            <p className="fixed-block-text">
              Transparency mode for hearing what’s happening around you.
            </p>
          </div>
        </div>

        <div className="fixed-block" id="block-3">
          <div className="fixed-block-content" id="block-content">
            <p className="fixed-block-text">
              A customizable fit for all-day comfort.
            </p>
          </div>
        </div>

        <div className="fixed-block" id="block-4">
          <div className="fixed-block-content" id="block-content">
            <p className="fixed-block-text">{/* Empty */}</p>
          </div>
        </div>
      </div>
    </>
  );
}

import { useEffect, useRef } from 'react';
import styles from './NoiseCanvas.module.scss';

const NoiseCanvas = () => {
  // Create canvas ref
  const canvasRef = useRef(null);

  const noise = () => {
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D;

    let windowWidth: number;
    let windowHeight: number;

    const noiseData: ImageData[] = [];
    const frame = 0;

    let loopTimeout: number;

    // Generate noises image data
    const createNoise = () => {
      const idata = context.createImageData(windowWidth, windowHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xff000000;
        }
      }

      noiseData.push(idata);
    };

    // Paint noises onto the canvas
    const paintNoise = (frame: number) => {
      if (frame === 9) {
        frame = 0;
      } else {
        frame++;
      }

      context.putImageData(noiseData[frame], 0, 0);
    };

    // Loop to add noises infinitely
    const loop = () => {
      paintNoise(frame);

      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop);
      }, 1000 / 25);
    };

    // Setup sizes and noises
    const setup = () => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;

      canvas.width = windowWidth;
      canvas.height = windowHeight;

      for (let i = 0; i < 10; i++) {
        createNoise();
      }

      loop();
    };

    // Reset noises on resize
    let resizeThrottle: number;
    const reset = () => {
      window.addEventListener(
        'resize',
        () => {
          window.clearTimeout(resizeThrottle);

          resizeThrottle = window.setTimeout(() => {
            window.clearTimeout(loopTimeout);
            setup();
          }, 200);
        },
        false
      );
    };

    // Init noises onto the canvas
    const init = (() => {
      canvas = canvasRef.current!;
      context = canvas.getContext('2d')!;

      setup();
    })();
  };

  // Init canvas
  useEffect(() => {
    noise();
  }, []);

  return <canvas ref={canvasRef} className={styles.noiseCanvas} />;
};
export default NoiseCanvas;

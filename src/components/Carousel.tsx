"use client";
import Image from "next/image";
import { useState } from "react";

class CarouselManager {
  images: string[];
  currentImage: string;
  currentIndex: number;
  timer: NodeJS.Timeout | undefined;

  constructor(images: string[]) {
    this.images = images;
    this.currentImage = images[0];
    this.currentIndex = 0;
  }

  private generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomImage() {
    const randomIndex = this.generateRandomNumber(0, this.images.length - 1);
    const imageUrl = this.images[randomIndex];
    this.currentImage = imageUrl;
    this.currentIndex = randomIndex;
  }

  nextImage() {
    let nextIndex = this.currentIndex + 1;

    if (nextIndex >= this.images.length) {
      nextIndex = 0;
    }

    this.currentImage = this.images[nextIndex];
    this.currentIndex = nextIndex;
  }

  reset() {
    this.currentIndex = 0;
    this.currentImage = this.images[0];
  }
}

function Carousel({
  images,
  height,
  width,
  className,
}: {
  images: string[];
  height: number;
  width: number;
  className?: string;
}) {
  const [carousel, setCarousel] = useState(new CarouselManager(images));
  const [currentImage, setCurrentImage] = useState(carousel.currentImage);

  const handleMouseEnter = () => {
    carousel.timer = setInterval(() => {
      carousel.nextImage();
      setCurrentImage(carousel.currentImage);
    }, 2000);
  };

  const handleMouseLeave = () => {
    clearInterval(carousel.timer);
    carousel.reset();
    setCurrentImage(carousel.currentImage);
  };

  return (
    <Image
      src={currentImage}
      alt="Image"
      height={height}
      width={width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    />
  );
}

export default Carousel;

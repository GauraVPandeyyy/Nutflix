import React from "react";
import { HeroParallax } from "./hero-parallax.tsx";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "/product",
    thumbnail: "/src/assets/01.jpg",
  },
  {
    title: "Cursor",
    link: "/product",
    thumbnail: "/src/assets/02.jpg",
  },
  {
    title: "Rogue",
    link: "/product",
    thumbnail: "/src/assets/03.jpg",
  },

  {
    title: "Editorially",
    link: "/product",
    thumbnail: "/src/assets/04.jpg",
  },
  {
    title: "Editrix AI",
    link: "/product",
    thumbnail: "/src/assets/05.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "/product",
    thumbnail: "/src/assets/01.jpg",
  },

  {
    title: "Algochurn",
    link: "/product",
    thumbnail: "/src/assets/02.jpg",
  },
  {
    title: "Aceternity UI",
    link: "/product",
    thumbnail: "/src/assets/03.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "/product",
    thumbnail: "/src/assets/04.jpg",
  },
  {
    title: "SmartBridge",
    link: "/product",
    thumbnail: "/src/assets/05.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "/product",
    thumbnail: "/src/assets/01.jpg",
  },

  {
    title: "Creme Digital",
    link: "/product",
    thumbnail: "/src/assets/02.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "/product",
    thumbnail: "/src/assets/03.jpg",
  },
  {
    title: "Invoker Labs",
    link: "/product",
    thumbnail: "/src/assets/04.jpg",
  },
  {
    title: "E Free Invoice",
    link: "/product",
    thumbnail: "/src/assets/05.jpg",
  },
];

export type GalleryRow = {
  /** Flex-grow ratios matching the Figma mosaic widths */
  columns: number[];
};

export type GalleryEvent = {
  id: string;
  date: string;
  title: string;
  highlight: string;
  rows: GalleryRow[];
};

export const galleryCarouselSlides = [
  {
    id: "slide-1",
    src: "/images/gallery-carousel-1.png",
    alt: "Cherry+ Network group photo",
  },
  {
    id: "slide-2",
    src: "/images/gallery-carousel-1.png",
    alt: "Cherry+ Network event highlight",
  },
  {
    id: "slide-3",
    src: "/images/gallery-carousel-1.png",
    alt: "Cherry+ Network campus event",
  },
  {
    id: "slide-4",
    src: "/images/gallery-carousel-1.png",
    alt: "Cherry+ Network community gathering",
  },
];

export const galleryEvents: GalleryEvent[] = [
  {
    id: "app-archives",
    date: "1st March 2024",
    title: "App",
    highlight: "Archives",
    rows: [
      { columns: [346, 409, 320, 441] },
      { columns: [409, 441, 320, 346, 409] },
    ],
  },
  {
    id: "ataraxia-23",
    date: "11th September 2023",
    title: "Ataraxia",
    highlight: "‘23",
    rows: [
      { columns: [409, 320, 441, 409] },
      { columns: [409, 441, 320, 346, 409] },
    ],
  },
  {
    id: "elysian-23",
    date: "19th August 2023",
    title: "Elysian",
    highlight: "‘23",
    rows: [{ columns: [409, 441, 320, 409, 346] }],
  },
  {
    id: "orphanage-visit",
    date: "26th February 2023",
    title: "Orphanage",
    highlight: "Visit",
    rows: [
      { columns: [346, 409, 320, 441] },
      { columns: [409, 441, 320, 346, 409] },
    ],
  },
  {
    id: "301-redirect",
    date: "28th September 2022",
    title: "301",
    highlight: "Redirect",
    rows: [
      { columns: [409, 441, 320, 346] },
      { columns: [346, 409, 320, 441] },
    ],
  },
];

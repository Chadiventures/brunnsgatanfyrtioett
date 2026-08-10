export function Gallery({ images }: { images: { src: string; alt: string; label: string }[] }) {
  return (
    <div className="mt-10 columns-1 gap-3 [column-fill:_balance] sm:mt-14 sm:columns-2 sm:gap-4 lg:columns-3">
      {images.map((img, i) => (
        <figure
          key={img.src}
          className="group relative mb-3 overflow-hidden break-inside-avoid bg-clay sm:mb-4"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading={i < 2 ? "eager" : "lazy"}
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent px-4 py-3 opacity-100 transition-opacity duration-500 sm:px-5 sm:py-4 sm:opacity-0 sm:group-hover:opacity-100">
            <span className="block font-serif text-sm italic text-linen/80">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-0.5 block text-sm uppercase tracking-[0.15em] text-linen">
              {img.label}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

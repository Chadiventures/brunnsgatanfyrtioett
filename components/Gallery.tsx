export function Gallery({ images }: { images: { src: string; alt: string; label: string }[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-3 [column-fill:_balance] sm:mt-14 sm:block sm:columns-2 sm:gap-4 lg:columns-3">
      {images.map((img, i) => (
        <figure
          key={img.src}
          className="group relative overflow-hidden bg-clay sm:mb-4 sm:break-inside-avoid"
        >
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-auto">
            <img
              src={img.src}
              alt={img.alt}
              className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-auto"
              loading={i < 2 ? "eager" : "lazy"}
            />
          </div>
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-4 py-3.5 opacity-100 transition-opacity duration-500 sm:px-5 sm:py-4 sm:opacity-0 sm:group-hover:opacity-100">
            <span className="block font-serif text-sm italic text-linen/80">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="mt-0.5 block text-[0.7rem] uppercase tracking-[0.16em] text-linen sm:text-sm sm:tracking-[0.15em]">
              {img.label}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

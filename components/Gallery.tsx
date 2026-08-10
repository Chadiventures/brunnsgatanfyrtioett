export function Gallery({ images }: { images: { src: string; alt: string; label: string }[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
      {images.map((img, i) => (
        <figure
          key={img.src}
          className="relative mb-4 overflow-hidden break-inside-avoid group bg-clay"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 px-5 py-4 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="block font-serif italic text-sm text-linen/80">{String(i + 1).padStart(2, "0")}</span>
            <span className="block uppercase tracking-[0.15em] text-sm text-linen mt-0.5">{img.label}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

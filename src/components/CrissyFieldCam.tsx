export default function CrissyFieldCam() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">
        Live from Crissy Field
      </h2>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        A live view of the Golden Gate Bridge from Crissy Field, San Francisco.
      </p>
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-stone-50">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/0aF8elLpiMo?autoplay=1&mute=1&loop=1&modestbranding=1&rel=0"
            title="Crissy Field — Golden Gate Bridge Live Camera"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            style={{ border: "none" }}
          />
        </div>
        <div className="flex items-center justify-between border-t border-border px-6 py-3">
          <span className="text-xs text-muted">
            Crissy Field East Beach, San Francisco
          </span>
          <a
            href="https://www.parksconservancy.org/parks/park-web-cams"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs font-medium"
          >
            Parks Conservancy
          </a>
        </div>
      </div>
    </section>
  );
}

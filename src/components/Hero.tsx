export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Text content */}
        <div>
          <h1 className="animate-fade-in-up font-serif text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Hola, I am
            <br />
            <span className="italic">Adriana Sainz</span>
          </h1>
          <p className="animate-fade-in-up-delay-1 mt-6 max-w-md text-lg leading-relaxed text-muted">
            A creative professional passionate about designing meaningful
            experiences. I blend strategy, research, and design to craft
            solutions that make a real impact.
          </p>
          <div className="animate-fade-in-up-delay-2 mt-8 flex gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              View Work
            </a>
          </div>
        </div>

        {/* Visual element */}
        <div className="animate-fade-in-up-delay-3 flex justify-center">
          <div className="relative h-80 w-80 md:h-96 md:w-96">
            {/* Abstract decorative shape */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 opacity-60" />
            <div className="absolute inset-4 rounded-full border-2 border-stone-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-8xl italic text-stone-400 md:text-9xl">
                AS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

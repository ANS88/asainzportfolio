"use client";

export default function Marquee() {
  const items = [
    "Strategy",
    "Research",
    "Design",
    "Development",
    "Innovation",
    "Creativity",
  ];

  const marqueeContent = items.map((item, i) => (
    <span key={i} className="flex items-center">
      <span className="font-serif text-3xl italic md:text-5xl">{item}</span>
      <span className="mx-6 text-2xl text-muted md:mx-10 md:text-4xl">
        ~
      </span>
    </span>
  ));

  return (
    <section className="overflow-hidden border-y border-border py-8 md:py-12">
      <div className="animate-marquee flex whitespace-nowrap">
        <div className="flex">{marqueeContent}</div>
        <div className="flex">{marqueeContent}</div>
      </div>
    </section>
  );
}

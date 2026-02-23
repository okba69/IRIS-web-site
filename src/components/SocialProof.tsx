export default function SocialProof() {
  const logos = [
    "TechCrunch", "Wired", "The Verge", "Forbes", "CNET"
  ];

  return (
    <section className="py-16 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-white/20 uppercase tracking-[0.3em] mb-10">Ils parlent de nous</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale">
          {logos.map((logo) => (
            <span key={logo} className="text-2xl font-display font-bold">{logo}</span>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-40">
          <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full">
            <span className="text-[10px] font-bold">CE CERTIFIED</span>
          </div>
          <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full">
            <span className="text-[10px] font-bold">ROHS COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-full">
            <span className="text-[10px] font-bold">BLUE LIGHT FILTER</span>
          </div>
        </div>
      </div>
    </section>
  );
}

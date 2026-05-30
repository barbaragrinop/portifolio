import { Work } from "../../components";
import { EXPERIENCES } from "../../data/experiences";

export default function Works() {
  return (
    <section id="works" className="bg-black-primary py-20 px-5">
      <div className="max-w-4xl mx-auto">

        {/* título */}
        <div className="flex gap-1 mb-3 justify-center lg:justify-start">
          <span className="text-2xl font-bold text-white">works</span>
          <span className="text-2xl font-bold text-pink-primary">.</span>
        </div>
        <p className="text-grey-primary/50 text-sm mb-14 text-center lg:text-left">
          Minha trajetória profissional
        </p>

        {/* timeline */}
        <div>
          {EXPERIENCES.map((exp, i) => (
            <Work.TimelineRow
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === EXPERIENCES.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

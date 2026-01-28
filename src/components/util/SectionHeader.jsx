import { Reveal } from "./Reveal";

export const SectionHeader = ({ title, dir = "r" }) => {
  return (
    <div
      className="flex items-center mb-16"
      style={{
        flexDirection: dir === "r" ? "row" : "row-reverse",
      }}
    >
      <div className="h-px bg-gray-800 opacity-30 flex-grow" />
      <h3 className="flex-shrink-0 flex items-center gap-3 font-bold uppercase text-lg whitespace-nowrap">
        <Reveal>
          <span className="text-red-500">.</span>
          {title}
          <span className="text-red-500">.</span>
        </Reveal>
      </h3>
      <div className="h-px bg-gray-800 opacity-30 flex-grow" />
    </div>
  );
};
// import { IconHexagon } from "@tabler/icons-react";
import IconCloud from "./MagicUI/icon-cloud";
import { slugs } from "../User";


export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.5s] items-center justify-center">
      <IconCloud iconSlugs={slugs} />
      {/* <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={120} color="#64FFDA" stroke={1.25} /> */}
      <div className=" absolute font-mono text-primaryColor font-semibold text-6xl -z-10">CM</div>
    </div>
  );
}
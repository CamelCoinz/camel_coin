import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import FutureListing from "../components/FutureListing";
import { TokenIncrease } from "../components/TokenIncrease";
import { Tokenomics } from "../components/Tokenomics";
import HowToBuy from "../components/HowToBuy";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TokenIncrease />
      <Tokenomics />
      <FutureListing />
      <Roadmap />
      <HowToBuy />
      <Team />
      <Footer />
    </>
  );
}

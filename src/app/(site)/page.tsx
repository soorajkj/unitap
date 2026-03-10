import { Fragment } from "react";
import FAQs from "@/components/[site]/FAQs";
import Features from "@/components/[site]/Features";
import Hero from "@/components/[site]/Hero";
import Pricing from "@/components/[site]/Pricing";
import Testimonials from "@/components/[site]/Testimonials";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQs />
    </Fragment>
  );
}

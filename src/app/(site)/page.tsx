import { Fragment } from "react";
import Hero from "@/components/[site]/Hero";
import Testimonials from "@/components/[site]/Testimonials";

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <Testimonials />
    </Fragment>
  );
}

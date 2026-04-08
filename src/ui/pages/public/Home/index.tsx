import heroImage from "@/assets/hero-barbershop.jpg";
import { Hero } from "@/ui/layouts/Hero";
import { Link } from "react-router";

export function HomePage() {
  return (
    <>
      <Hero background={heroImage}>
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-3">
            <Link to="/booking" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/contacto" className="btn btn-outline">
              Contactanos
            </Link>
          </div>
        </div>
      </Hero>
    </>
  );
}

import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";

import { profile } from "../constants";
import ThemeToggle from "../atoms/ThemeToggle";

const NotFound = () => (
  <div className="relative grid min-h-screen place-items-center overflow-hidden px-6">
    <div
      className="pointer-events-none absolute inset-0 -z-10 grid-bg"
      aria-hidden="true"
    />

    <div className="absolute right-6 top-6">
      <ThemeToggle />
    </div>

    <div className="text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-5 text-display-sm sm:text-display">
        This page doesn&apos;t exist.
      </h1>
      <p className="mx-auto mt-5 max-w-md text-base text-muted">
        The link may be outdated or mistyped. Everything about {profile.name} is
        one click away.
      </p>

      <Link to="/" className="btn-primary mt-9">
        <LuArrowLeft className="h-4 w-4" />
        Back to homepage
      </Link>
    </div>
  </div>
);

export default NotFound;

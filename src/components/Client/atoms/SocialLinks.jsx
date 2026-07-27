import { FaGithub, FaInstagram, FaLinkedinIn, FaSpotify } from "react-icons/fa6";
import { socials } from "../constants";

export const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  spotify: FaSpotify,
};

const SocialLinks = ({ className = "", size = "md" }) => {
  const box = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const glyph = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socials.map(({ name, url, icon }) => {
        const Icon = socialIcons[icon];
        return (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              title={name}
              className={`grid ${box} place-items-center rounded-full border border-line
                          bg-surface text-muted transition-colors duration-200 hover:text-ink`}
            >
              <Icon className={glyph} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;

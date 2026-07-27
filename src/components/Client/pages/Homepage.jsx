import { Helmet } from "react-helmet";

import {
  About,
  Certificate,
  Contact,
  Experience,
  Feedback,
  Footer,
  Hero,
  NavigationBar,
  Tech,
  Works,
} from "../../index";
import { product, profile, socials } from "../constants";

const SITE_URL = "https://leonatk.dev/";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: product.name,
  url: product.url,
  description: product.description,
  founder: { "@type": "Person", name: profile.name, url: SITE_URL },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: SITE_URL,
  image: `${SITE_URL}logo.svg`,
  jobTitle: profile.roleLong,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prishtina",
    addressCountry: "XK",
  },
  worksFor: { "@type": "Organization", name: profile.currentCompanyFull },
  description: profile.intro,
  knowsLanguage: ["sq", "en"],
  knowsAbout: [
    "TypeScript",
    "JavaScript",
    "React",
    "React Native",
    "Next.js",
    "Gatsby.js",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
  ],
  sameAs: socials.map((social) => social.url),
};

const Homepage = () => (
  <>
    <Helmet>
      <title>{`${profile.name} — ${profile.role}`}</title>
      <meta name="description" content={profile.intro} />
      <link rel="canonical" href={SITE_URL} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta
        property="og:title"
        content={`${profile.name} — ${profile.role}`}
      />
      <meta property="og:description" content={profile.intro} />
      <meta property="og:site_name" content={`${profile.name} Portfolio`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${profile.name} — ${profile.role}`}
      />
      <meta name="twitter:description" content={profile.intro} />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
    </Helmet>

    <NavigationBar />

    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Works />
      <Tech />
      <Certificate />
      <Feedback />
      <Contact />
    </main>

    <Footer />
  </>
);

export default Homepage;

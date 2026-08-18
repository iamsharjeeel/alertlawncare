export const brand = {
  name: "Smart Lawn Pro",
  logoWord: "SMART LAWN",
  logoTld: ".pro",
  domain: "SmartLawn.Pro",
  url: "https://smartlawn.pro",
  phoneDisplay: "936-301-4433",
  phoneTel: "+19363014433",
  taglineLeft: "AUTOMATED MAINTENANCE SOLUTIONS",
  taglineRight: "COMMERCIAL & RESIDENTIAL",
  headlineLead: "Your Property",
  headlineAccent: "Maintains Itself.",
  subhead: "Three robots. One vendor. Every week covered.",
  serviceArea: "Conroe, Montgomery, Willis & The Woodlands",
  email: "hello@smartlawn.pro",
} as const;

export const services = [
  {
    id: "lawn",
    num: "01",
    title: "Lawn Bots",
    body: "Cut daily instead of weekly. Curb appeal holds between visits — clean edges, fine clippings, a finished lawn every day.",
    image: "/images/lawn.jpg",
    alt: "Robotic mower maintaining a lawn",
  },
  {
    id: "pool",
    num: "02",
    title: "Pool Bots",
    body: "Continuous cleaning. Clear water, balanced chemistry, swim-ready every day.",
    image: "/images/pool.jpg",
    alt: "Robotic pool cleaner working underwater",
  },
  {
    id: "floor",
    num: "03",
    title: "Floor Bots",
    body: "Overnight interior cleaning. Staff and family arrive to finished floors.",
    image: "/images/floor.jpg",
    alt: "Robotic floor cleaner under furniture",
  },
] as const;

export const bullets = [
  "Free assessment before purchase",
  "Professional installation & optimization",
  "Right solution matched to your property",
  "ROI calculated & maximized for you",
] as const;

export const credentials = [
  "USMC VETERAN OWNED",
  "FAMILY OPERATED",
  "FULLY MANAGED",
] as const;

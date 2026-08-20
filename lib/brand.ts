export const brand = {
  name: "Smart Lawn Pro",
  wordmark: "SMART LAWN.PRO",
  wordmarkLead: "SMART LAWN",
  wordmarkTld: ".PRO",
  domain: "SmartLawn.Pro",
  url: "https://smartlawn.pro",
  phoneDisplay: "936-301-4433",
  phoneTel: "+19363014433",
  serviceArea: "Conroe, Montgomery, Willis and The Woodlands",
  region: "Texas",
} as const;

export const nav = [
  { href: "#systems", label: "Systems" },
  { href: "#residential", label: "Residential" },
  { href: "#commercial", label: "Commercial" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

export const systems = [
  {
    id: "lawn",
    index: "01",
    label: "Lawn",
    title: "Keep the cut consistent.",
    body: "A robotic mower works on a recurring schedule instead of waiting for the next lawn day. We assess the property, configure the mowing area and manage the system after installation.",
    image: "/images/lawn.jpg",
    alt: "Autonomous robotic mower working across a maintained residential lawn.",
  },
  {
    id: "pool",
    index: "02",
    label: "Pool",
    title: "Keep cleaning in the routine.",
    body: "Robotic pool cleaning can run on a regular schedule so debris has less time to build up between cleanings. We help match the system and operating routine to the pool.",
    image: "/images/pool.jpg",
    alt: "Robotic pool cleaner moving across the floor of a clear residential swimming pool.",
  },
  {
    id: "floors",
    index: "03",
    label: "Floors",
    title: "Put repetitive floor cleaning on a schedule.",
    body: "Robotic floor systems can handle routine cleaning during lower-traffic periods, giving homes, offices and facilities a cleaner starting point without adding another recurring task to the day.",
    image: "/images/floor.jpg",
    alt: "Robotic floor cleaner working beside a rug in a contemporary living room.",
    specs: ["Mapped indoor routes", "Off-peak operating windows", "Homes, offices and facilities"],
  },
] as const;

export const operatingWeek = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  rows: [
    { label: "Typical visit", active: [false, false, false, true, false, false, false] },
    { label: "Lawn", active: [true, false, true, false, true, false, true] },
    { label: "Pool", active: [false, true, false, true, false, true, false] },
    { label: "Floors", active: [true, true, true, true, true, false, false] },
  ],
} as const;

export const residentialPoints = [
  "Free property assessment",
  "System matched to the property",
  "Professional installation and configuration",
  "Ongoing managed service",
] as const;

export const commercialPoints = [
  "Property-specific recommendation",
  "Operating schedule planning",
  "Professional deployment",
  "Ongoing service",
  "Cost and labor review where applicable",
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Walk the property",
    body: "We look at the layout, recurring maintenance, obstacles and how the property is used.",
  },
  {
    index: "02",
    title: "Match the system",
    body: "We recommend the equipment and schedule that fit the job. If automation does not make sense somewhere, we say so.",
  },
  {
    index: "03",
    title: "Install and configure",
    body: "We handle setup, mapping, operating areas and the initial schedule.",
  },
  {
    index: "04",
    title: "Keep it working",
    body: "Smart Lawn Pro remains the point of contact for the systems we manage, including adjustments and service needs.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Tim and David are the best guys to have ANYTHING done for your lawn / property. They completely changed the curb appeal of our house and in three days. I absolutely 100% recommend reaching out to them... you won't be disappointed.",
    name: "Joseph",
    location: "Conroe, TX",
  },
  {
    quote:
      "If you're looking for the absolute best property management and lawncare service in Montgomery County, Texas... look no further. These guys truly do it all... Highly recommended to anyone needing dependable, high-quality lawncare.",
    name: "Timothy Lancaster",
    location: "Montgomery County, TX",
  },
  {
    quote:
      "Great service, reliable and personable! Work is done with high quality and excellence. Father-son-daughter teams will take good care of your residential or commercial property.",
    name: "J C",
    location: "Texas",
  },
] as const;

export const faqs = [
  {
    q: "What happens during the assessment?",
    a: "We walk the property, review the work you want to automate and look at the layout, coverage and operating schedule. Then we recommend the systems that fit.",
  },
  {
    q: "Do I need all three systems?",
    a: "No. The setup should match the property. The assessment can cover lawn, pool and floors together or focus on the areas you want to automate first.",
  },
  {
    q: "Is this for homes or commercial properties?",
    a: "Both. Smart Lawn Pro works with residential and commercial properties, with the equipment and schedule selected around the site.",
  },
  {
    q: "Who handles installation?",
    a: "Smart Lawn Pro handles the initial installation and configuration for the systems we manage.",
  },
  {
    q: "What happens when the equipment needs attention?",
    a: "Smart Lawn Pro remains your service contact for the managed systems we install.",
  },
  {
    q: "Can I call instead of filling out the form?",
    a: "Yes. Call 936-301-4433.",
  },
] as const;

export const interestOptions = [
  { value: "Lawn", label: "Lawn" },
  { value: "Pool", label: "Pool" },
  { value: "Floors", label: "Floors" },
  { value: "Not sure yet", label: "Not sure yet" },
] as const;

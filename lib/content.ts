// Single source of truth for all site content.
// Edit here to update copy across the whole site.

export const company = {
  name: "Elite Processing Team",
  legalName: "Elite Processing Team LLC",
  tagline:
    "Elite Processing Team is an easy solution for all mortgage brokers to expand their business.",
  blurb: "Elite Processing Team LLC is a third-party loan processing company.",
  mission:
    "Our mission is to provide a quick and easy transaction for both the loan officer and the borrower. We remove the more time-consuming tasks off the plate of the MLO so they can focus on what they do best — closing more loans and growing their business.",
  phone: "(586) 663-2159",
  phoneHref: "+15866632159",
  email: "info@eliteprocessingteam.com",
  nmls: "2186494",
  nmlsUrl:
    "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2186494",
  siteUrl: "https://www.eliteprocessingteam.com",
  year: 2026,
  social: {
    facebook: "https://www.facebook.com/eliteprocessingteamllc",
    instagram: "https://www.instagram.com/eliteprocessingteamllc",
  },
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Coverage", href: "#coverage" },
  { label: "Lenders", href: "#lenders" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Document Retrieval",
    description:
      "We will retrieve all necessary documents in order to submit the file to the lender.",
    icon: "FileSearch",
  },
  {
    title: "Loan Submission",
    description: "We will submit all documents to the underwriter.",
    icon: "Send",
  },
  {
    title: "Conditional Approval",
    description:
      "We will follow up with the client in order to clear all conditions.",
    icon: "ClipboardCheck",
  },
  {
    title: "Clear to Close",
    description: "We will schedule the closing with the client.",
    icon: "KeyRound",
  },
];

export const approvedStates = [
  "California",
  "Colorado",
  "Florida",
  "Georgia",
  "Illinois",
  "Indiana",
  "Michigan",
  "Montana",
  "New Jersey",
  "North Carolina",
  "Ohio",
  "Oklahoma",
  "Pennsylvania",
  "South Carolina",
  "Texas",
  "Virginia",
];

export const upcomingStates = [
  "Idaho",
  "Maryland",
  "Minnesota",
  "Oregon",
  "Tennessee",
  "Washington",
];

// Real lender logos pulled from the original site, stored in /public/lenders/.
export const lenders = [
  { name: "UWM", file: "/lenders/uwm.png" },
  { name: "Rocket Pro TPO", file: "/lenders/rocket-pro-tpo.jpg" },
  { name: "Cardinal Financial", file: "/lenders/cardinal-financial.png" },
  { name: "Carrington Mortgage Services", file: "/lenders/carrington.png" },
  { name: "EPM", file: "/lenders/epm.png" },
  { name: "Flagstar Bank", file: "/lenders/flagstar.png" },
  { name: "Greenbox Loans", file: "/lenders/greenbox.png" },
  { name: "Homepoint", file: "/lenders/homepoint.png" },
  { name: "Mutual Mortgage", file: "/lenders/mutual-mortgage.png" },
  { name: "Provident Funding", file: "/lenders/provident-funding.png" },
  { name: "Resi Central", file: "/lenders/resi-central.png" },
  { name: "Sierra Pacific Mortgage", file: "/lenders/sierra-pacific.png" },
  { name: "United Ag Lending", file: "/lenders/united-ag-lending.png" },
  { name: "WestGen Lending", file: "/lenders/westgen.png" },
  { name: "Windsor Mortgage", file: "/lenders/windsor.png" },
  { name: "Caliber Home Loans", file: "/lenders/caliber.png" },
];

export const testimonials = [
  {
    quote:
      "Adding Deepa to my team was one of the best decisions I made. She has helped me increase my volume and takes the processing stress off my plate so I can focus on my clients.",
    name: "Nikki",
    role: "Creative Mortgage",
  },
  {
    quote:
      "Deepa is a hard worker and a quick learner. She communicates clearly and follows up promptly. I highly recommend the Elite Processing Team.",
    name: "Chirag",
    role: "VEMA Mortgage",
  },
];

export const team = [
  {
    name: "Deepa Patel",
    role: "Founder & CEO",
    photo: "/team/deepa-patel.jpg",
    bio: "When I joined the mortgage industry, I quickly realized that the most important part of the loan approval process, loan processing, was also the most tedious. Through my experience in this field, I gathered techniques to make this process seamless for all parties involved. This motivated me to create Elite Processing Team. Attention to detail has always been one of my strengths, and I intend to channel this skill to make Elite Processing Team the perfect link between the loan officer, the lender, and most importantly, the borrower.",
  },
  {
    name: "Christina Sanchez",
    role: "Loan Processor",
    photo: "/team/christina-sanchez.jpg",
    bio: "I have been working in the mortgage industry for several years, during which I have come to understand the critical importance of customer service and effective communication. Whether dealing with Loan Officers, Lenders, or Borrowers, providing exceptional customer service significantly streamlines the loan process. My expertise includes both conventional loans and Non-QM loans.",
  },
];

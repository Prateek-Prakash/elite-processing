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
  { label: "Pricing", href: "/pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Owner", href: "#team" },
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

// PRICING — placeholder figures. Replace `price` and feature lists with the
// real numbers/terms. `highlight: true` visually features a tier.
export const pricing = {
  note: "Flat per-file pricing, paid at closing. No monthly fees, no upfront cost — you only pay when the loan closes.",
  tiers: [
    {
      name: "Conventional & Government",
      price: "$XXX",
      unit: "per file",
      blurb: "Conventional, FHA, VA, and USDA loans.",
      features: [
        "Full document retrieval",
        "Submission to underwriting",
        "Condition follow-up to clear-to-close",
        "Closing coordination",
      ],
      highlight: false,
    },
    {
      name: "Non-QM & Jumbo",
      price: "$XXX",
      unit: "per file",
      blurb: "Bank statement, DSCR, jumbo, and other non-QM products.",
      features: [
        "Everything in Conventional & Government",
        "Complex income & asset review",
        "Specialized non-QM lender submission",
        "Priority condition management",
      ],
      highlight: true,
    },
    {
      name: "Contract / Per-Hour",
      price: "$XX",
      unit: "per hour",
      blurb: "Overflow help and à la carte processing tasks.",
      features: [
        "Pay only for time used",
        "Scales with your pipeline",
        "Great for busy seasons",
        "No long-term commitment",
      ],
      highlight: false,
    },
  ],
};

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

export const testimonials = [
  {
    quote:
      "Adding Deepa to my team was one of the best decisions I made. She is very attentive to detail and very responsive to all my clients. She has helped me increase my volume by taking the back-end paperwork off my plate and letting me focus on the front-end. I would recommend her to anyone looking to grow their business.",
    name: "Nikki",
    role: "Creative Mortgage",
  },
  {
    quote:
      "Deepa is a hard worker and a quick learner. She communicates clearly and follows up promptly with clients, underwriters, and third-party agents to get the necessary information and get the loan to closing. Always willing to go the extra mile.",
    name: "Chirag",
    role: "VEMA Mortgage",
  },
  {
    quote:
      "Deepa and her team are the best processors I have ever worked with. She utilizes all technology available which makes Elite Processing loans close quicker and easier than other companies. She has amazing communication skills, so you are always kept informed and updated. From start to finish she makes the process transparent and flawless. I would not recommend anyone else more than her!",
    name: "Haley",
    role: "UWM",
  },
  {
    quote:
      "Deepa is by far the best loan processor I have worked with in recent years. She has strong communication skills and maintains constant communication with clients to ensure a timely closing of loans while maintaining the highest level of customer service. I highly recommend Deepa and her team for loan processing.",
    name: "Vipul",
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
];

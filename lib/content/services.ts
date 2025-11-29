// Services page content for TeddyFix website

// Main services page content
export const servicesPage = {
  pageTitle: "Our Services",
  pageSubtitle:
    "From fast diagnostics to full performance tuning — we've got you covered.",
  sections: [
    {
      id: "maintenance",
      icon: "wrench",
      title: "Maintenance & Repair",
      intro:
        "This is where trust begins. Whether you're maintaining your family car, daily driver, or full taxi fleet — we offer fast, clean, and professional repair work you can count on.",
      list: [
        "Full vehicle diagnostics and troubleshooting advice",
        "Chassis and suspension repair",
        "Braking system repair and pad replacement",
        "Engine component repair and replacement",
        "Electronic system and module diagnostics",
        "Small parts and consumables replacement (bulbs, batteries, etc.)",
      ],
      cta: {
        label: "Book a Repair",
        href: "https://wa.me/31612345678",
      },
    },
    {
      id: "detailing",
      icon: "sparkle",
      title: "Detailing & Ceramic Coating",
      intro:
        "Your car isn't just a machine — it's a statement. We keep it looking fresh, protected, and ready to impress with premium detailing and paint preservation treatments.",
      list: [
        "Headlight and brake light polishing & restoration",
        "Minor paint scratch removal (doors, bumpers, hood)",
        "Premium ceramic coating (paint + windows)",
        "Hydrophobic protection = less dirt, less washing",
        "UV resistance and long-term value protection",
      ],
      cta: {
        label: "Schedule Detailing",
        href: "https://wa.me/31612345678",
      },
    },
    {
      id: "tuning",
      icon: "flag",
      title: "Performance & Tuning",
      intro:
        "Why settle for standard? Whether you're upgrading a road car or preparing a machine for FIA-approved racing, we bring power, precision, and speed to every build.",
      list: [
        "Engine tuning: intake, exhaust, turbo optimization",
        "Exhaust system upgrades and performance flow",
        "Brake system upgrades and handling improvements",
        "Visual tuning: body kit installation and refinements",
        "FIA-compliant race car preparation and certification support",
      ],
      cta: {
        label: "Start a Tuning Project",
        href: "https://wa.me/31612345678",
      },
    },
  ],
};

// Individual service category details (for potential sub-pages)
export const serviceCategories = {
  maintenance: {
    title: "Maintenance & Repair",
    tagline: "Drive smooth. Stay safe. Fix fast.",
    description:
      "We offer complete support for your vehicle — from diagnostic insights to fast, reliable repairs. Whether it's your daily driver, family van, or taxi fleet, we'll get you back on the road quickly.",
    longDescription:
      "Our service covers everything from chassis, engine, and brake repairs to troubleshooting electronic faults and replacing key components.",
    services: [
      {
        name: "Vehicle Diagnostics",
        description:
          "Complete diagnostic scan with expert troubleshooting advice",
        icon: "search",
      },
      {
        name: "Chassis Repair",
        description: "Structural repairs to keep your vehicle safe and stable",
        icon: "car",
      },
      {
        name: "Braking System",
        description:
          "Full brake service — pads, rotors, fluid, and ABS systems",
        icon: "shield",
      },
      {
        name: "Engine Repairs",
        description: "Component replacement and engine overhauls",
        icon: "cog",
      },
      {
        name: "Electronics",
        description: "Electrical diagnostics and component repairs",
        icon: "zap",
      },
      {
        name: "Small Parts",
        description:
          "Quick replacements — bulbs, filters, batteries, and more",
        icon: "tool",
      },
    ],
  },
  detailing: {
    title: "Detailing & Ceramic Coating",
    tagline: "Make your car look — and stay — new.",
    description:
      "Our detailing services restore clarity and beauty. From polishing headlights to removing paint scratches, we bring your vehicle back to life.",
    longDescription:
      "With professional-grade ceramic coating, you'll protect its value, resist dirt and UV damage, and enjoy a car that stays cleaner longer.",
    services: [
      {
        name: "Headlight Detailing",
        description: "Restore clarity to foggy or yellowed headlights",
        icon: "sun",
      },
      {
        name: "Brake Light Detailing",
        description: "Clean and polish for maximum visibility",
        icon: "circle",
      },
      {
        name: "Paint Scratch Removal",
        description: "Professional correction for scratches and swirl marks",
        icon: "edit",
      },
      {
        name: "Ceramic Coating - Paint",
        description:
          "Long-lasting protection against UV, dirt, and minor scratches",
        icon: "shield",
      },
      {
        name: "Ceramic Coating - Windows",
        description: "Hydrophobic coating for improved visibility in rain",
        icon: "droplet",
      },
    ],
    benefits: [
      "Rain beads off instantly",
      "UV protection for your paint",
      "Scratch-resistant surface",
      "Higher resale value",
      "Less frequent washing needed",
    ],
  },
  performance: {
    title: "Performance & Tuning",
    tagline: "Why is standard not enough?",
    description:
      "We turn metal into speed. Whether you want sharper handling or full racing compliance, our tuning services are built around power, precision, and passion.",
    longDescription:
      "From engine and brake upgrades to visual modifications and FIA-compliant race builds, this is where machines evolve.",
    services: [
      {
        name: "Engine Tuning",
        description: "Intake, turbocharger, and ECU optimization",
        icon: "flame",
      },
      {
        name: "Brake System Tuning",
        description: "High-performance brake upgrades for track or street",
        icon: "octagon",
      },
      {
        name: "Exhaust System",
        description: "Performance exhausts for better flow and sound",
        icon: "wind",
      },
      {
        name: "Body Kit Tuning",
        description: "Aesthetic upgrades and aerodynamic modifications",
        icon: "layers",
      },
      {
        name: "Racing Car Prep",
        description: "Full FIA-compliant race preparation",
        icon: "flag",
      },
    ],
    quote: "We turn metal into speed.",
  },
};

export const fleetServices = {
  title: "Fleet & Taxi Services",
  tagline: "Your fleet. Our priority.",
  description:
    "Time off the road is money lost. TeddyFix offers dedicated service for taxi and fleet operators with priority scheduling, bulk pricing, and guaranteed turnaround times.",
  features: [
    {
      title: "Priority Service Lanes",
      description: "Skip the queue with dedicated fleet scheduling",
    },
    {
      title: "Bulk Maintenance Bundles",
      description: "Cost-effective packages for regular servicing",
    },
    {
      title: "24/7 Emergency Support",
      description: "When your fleet can't wait, neither do we",
    },
    {
      title: "Pickup & Drop-off",
      description: "We come to you — minimize your downtime",
    },
    {
      title: "Maintenance Contracts",
      description: "Predictable costs with scheduled service agreements",
    },
  ],
};

// Premium service - Forensic Pre-Purchase Inspection
export const prePurchaseInspection = {
  id: "inspection",
  icon: "shield",
  badge: "Premium Service",
  title: "Forensic Pre-Purchase Inspection",
  tagline: "Before you buy, let Spas see what the seller doesn't want you to.",
  intro:
    "Buying a used car? Our certified forensic automotive expert will uncover hidden problems, fraud, and risks before you sign. Don't trust your gut — trust the expert.",
  features: [
    {
      title: "VIN Verification",
      description: "Detect VIN manipulation and confirm vehicle history",
      icon: "search",
    },
    {
      title: "Hidden Damage Detection",
      description: "Find accident repairs and structural damage invisible to the eye",
      icon: "eye",
    },
    {
      title: "Odometer Fraud Check",
      description: "Identify rollback signs and mileage inconsistencies",
      icon: "clock",
    },
    {
      title: "Paint & Body Analysis",
      description: "Spot repainting, filler, and hidden bodywork",
      icon: "layers",
    },
    {
      title: "Full Diagnostic Scan",
      description: "Deep computer scan for error codes and system health",
      icon: "cpu",
    },
    {
      title: "Mechanical Risk Assessment",
      description: "Engine, transmission, and drivetrain integrity check",
      icon: "wrench",
    },
  ],
  benefits: [
    "Avoid buying a lemon",
    "Negotiate with confidence",
    "Protect your investment",
    "Peace of mind before signing",
  ],
  cta: {
    label: "Book an Inspection",
    href: "https://wa.me/31612345678",
  },
  expert: {
    name: "Spas Genchin",
    title: "Certified Forensic Automotive Expert",
    note: "20+ years experience in vehicle analysis and fraud detection",
  },
};

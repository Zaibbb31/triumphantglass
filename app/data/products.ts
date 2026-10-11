export interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  breadcrumb: string;
  tagline: string;
  availability: string;
  heroImage: string;
  gridImages: string[];
  fullWidthImage: string;
  objectNotes: {
    heading: string;
    description: string[];
    specs: {
      productType: string;
      dimensions: string;
      weight: string;
      finish: string;
      leadTime: string;
      designer: string;
      year: string;
    };
  };
  materialMethod: {
    heading: string;
    materialsFinish: string[];
    productionMethod: string[];
  };
}

export const PRODUCT_DATA: ProductDetail = {
  slug: "ledger-glass-luminaire",
  name: "Ledger Glass Luminaire",
  category: "Chandeliers",
  breadcrumb: "Chandeliers / Quiet Structure",
  tagline:
    "A mouth-blown fluted Venetian glass cylinder carries a tensioned bronze armature, with tiered crystal prisms registering the radiant load of light.",
  availability: "Made to Order",
  heroImage:
    "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=1400&auto=format&fit=crop",
  gridImages: [
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1000&auto=format&fit=crop",
  ],
  fullWidthImage:
    "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2200&auto=format&fit=crop",
  objectNotes: {
    heading: "The piece, in full.",
    description: [
      "Ledger is drawn as a sequence of readable luminances. Four hand-turned cast bronze struts are connected by circumferential tension rings and a concealed central ballast; a continuous curtain of mouth-blown fluted crystal forms the core and disperses ambient warmth.",
      "The optical crystal prisms refract illumination without glare, while the upper gilded ring anchors the structural balance. Individual glass canes can be serviced or unhooked for maintenance without dismantling the primary chandelier frame.",
      "The luminaire is calibrated for intimate dining salons yet engineered with enough presence for double-height architectural foyers, with a smoothly dimmable driver compatible with 0-10V, DALI, and phase dimming.",
    ],
    specs: {
      productType: "Tiered Crystal Chandelier",
      dimensions: "Ø 110 × H 145 cm (Suspension drop up to 300 cm)",
      weight: "38.5 kg",
      finish: "Hand-rubbed champagne bronze; optical clear and smoked crystal prisms with solid brass saddle-stitched fittings.",
      leadTime: "8–10 weeks",
      designer: "Ari Bell & Atelier Firozabad",
      year: "2026",
    },
  },
  materialMethod: {
    heading: "What it is made from, and how.",
    materialsFinish: [
      "Solid architectural cast bronze; high-refractive lead-free K9 optical crystal; mouth-blown Venetian soda glass; stainless-steel internal load cable.",
      "Hand-patinated antique champagne bronze; diamond-cut crystal spears with micro-beveled flame-polished edges.",
    ],
    productionMethod: [
      "Bronze components are cast via lost-wax cire-perdue technique, precision milled, and assembled with concealed internal indexing pins. The framework is dry-balanced before patination.",
      "The crystal canes are mouth-blown into ribbed beechwood molds, annealed over 36 hours, and hand-cut to length. Each prism is balanced to within 2 grams before final white-glove packaging.",
    ],
  },
};

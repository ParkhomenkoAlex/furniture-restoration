import type { Service } from "@/app/types/Service";

export const services: Service[] = [
    {
        id: "furniture-restoration",
        number: "01",
        title: "Furniture Restoration",
        shortDescription:
            "Careful restoration that brings worn furniture back to life while preserving its original character.",
        description:
            "We restore furniture with a careful balance between repair and preservation. Our approach focuses on bringing a piece back to a beautiful, functional condition without erasing the marks, materials, and details that give it character.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Beautifully restored vintage furniture",
        suitableFor: ["Tables", "Chairs", "Cabinets", "Dressers", "Sideboards"],
        process: [
            "Condition assessment",
            "Structural and surface repair",
            "Finish restoration",
            "Final detailing",
        ],
        materials: [
            "Solid wood",
            "Wood veneer",
            "Traditional finishes",
            "Natural oils and waxes",
        ],
    },
    {
        id: "wood-repair",
        number: "02",
        title: "Wood Repair",
        shortDescription:
            "Structural and cosmetic wood repairs that restore strength, stability, and visual integrity.",
        description:
            "From loose joints and cracks to missing pieces and damaged veneer, we repair wooden furniture with attention to both structure and appearance. Repairs are made to feel like part of the original piece rather than an obvious addition.",
        image: "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Woodworking tools and craftsmanship",
        suitableFor: [
            "Cracks",
            "Loose joints",
            "Broken components",
            "Damaged veneer",
            "Missing details",
        ],
        process: [
            "Damage assessment",
            "Structural stabilization",
            "Wood repair and replacement",
            "Surface blending",
        ],
        materials: [
            "Solid timber",
            "Wood veneer",
            "Traditional adhesives",
            "Matched replacement wood",
        ],
    },
    {
        id: "upholstery",
        number: "03",
        title: "Upholstery",
        shortDescription:
            "Thoughtful upholstery work that gives well-loved seating a new life without losing its character.",
        description:
            "We restore and renew upholstered furniture with attention to comfort, proportion, and original design. Depending on the piece, this can include replacing worn materials, rebuilding padding, and selecting a fabric that complements its history.",
        image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Elegant upholstered furniture",
        suitableFor: [
            "Armchairs",
            "Dining chairs",
            "Sofas",
            "Ottomans",
            "Occasional seating",
        ],
        process: [
            "Frame inspection",
            "Padding and support assessment",
            "Fabric selection",
            "Upholstery and finishing",
        ],
        materials: [
            "Natural fabrics",
            "Performance textiles",
            "Traditional padding",
            "Leather",
        ],
    },
    {
        id: "refinishing",
        number: "04",
        title: "Refinishing",
        shortDescription:
            "Careful surface restoration that reveals the beauty of the original wood and finish.",
        description:
            "When a finish has become tired, damaged, or unsuitable for the piece, we carefully restore the surface. The goal is not to make old furniture look new, but to reveal and protect the character already present in the material.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Warm wooden furniture surface",
        suitableFor: [
            "Tables",
            "Cabinets",
            "Desks",
            "Wooden chairs",
            "Decorative pieces",
        ],
        process: [
            "Existing finish assessment",
            "Surface preparation",
            "Finish application",
            "Hand polishing and detailing",
        ],
        materials: [
            "Natural oils",
            "Wax",
            "Shellac",
            "Traditional wood finishes",
        ],
    },
    {
        id: "antique-restoration",
        number: "05",
        title: "Antique Restoration",
        shortDescription:
            "Sensitive restoration for antique pieces where history, authenticity, and craftsmanship matter.",
        description:
            "Antique furniture requires a different level of restraint. We work carefully to preserve original materials, construction techniques, patina, and decorative details while addressing damage that affects the piece's condition or usability.",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Antique furniture in a refined interior",
        suitableFor: [
            "Antique tables",
            "Period chairs",
            "Cabinets",
            "Chests",
            "Decorative furniture",
        ],
        process: [
            "Historical and condition assessment",
            "Minimal intervention planning",
            "Conservation-focused repair",
            "Final preservation treatment",
        ],
        materials: [
            "Original materials",
            "Traditional finishes",
            "Period-appropriate timber",
            "Reversible treatments",
        ],
    },
    {
        id: "furniture-conservation",
        number: "06",
        title: "Furniture Conservation",
        shortDescription:
            "Minimal-intervention care focused on preserving the original materials, history, and integrity of a piece.",
        description:
            "Conservation is about protecting what remains rather than transforming it. We carefully stabilize and preserve valuable furniture while retaining its original character, patina, construction, and evidence of age.",
        image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Historic wooden furniture detail",
        suitableFor: [
            "Historic furniture",
            "Family heirlooms",
            "Museum-quality pieces",
            "Collectible furniture",
        ],
        process: [
            "Detailed condition assessment",
            "Documentation",
            "Minimal stabilization",
            "Protective conservation",
        ],
        materials: [
            "Original materials",
            "Reversible adhesives",
            "Traditional conservation materials",
            "Protective finishes",
        ],
    },
];

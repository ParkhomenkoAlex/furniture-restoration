import { AboutItem } from "@/app/types/AboutItem";

export const aboutMaterials: AboutItem[] = [
    {
        id: "wood",
        number: "01",
        title: "Wood",
        description: [
            "Walnut, oak, ash, mahogany, beech, and other timbers all age differently. Their grain, colour, movement, and previous finishes help determine how they should be treated.",
            "We aim to preserve the character of the timber rather than flattening it into a uniform new surface.",
        ],
        image: "https://images.unsplash.com/photo-1515446134809-993c501ca304?q=80&w=1740&auto=format&fit=crop",
        imageAlt: "Natural wood grain",
    },
    {
        id: "finishes",
        number: "02",
        title: "Finishes",
        description: [
            "Oil, wax, shellac, lacquer, and other finishes create very different relationships with wood. The right choice depends on the furniture, its age, and the result we are trying to preserve.",
        ],
        image: "https://images.unsplash.com/photo-1629976828074-c248d94c82ea?w=900&auto=format&fit=crop&q=60",
        imageAlt: "Furniture finishing process",
    },
    {
        id: "fabrics",
        number: "03",
        title: "Fabrics",
        description: [
            "Upholstery is more than a colour choice. Texture, weight, pattern, and construction all influence how a finished piece feels and how closely it relates to its original character.",
        ],
        image: "https://images.unsplash.com/photo-1781495140807-a033e49840e4?q=80&w=1740&auto=format&fit=crop",
        imageAlt: "Furniture upholstery fabric",
    },
    {
        id: "hardware",
        number: "04",
        title: "Hardware",
        description: [
            "Handles, hinges, locks, screws, and other small components are easy to overlook. They are often some of the strongest clues to how a piece was originally made.",
        ],
        image: "https://images.unsplash.com/photo-1783701074987-c8f4aa07c48b?q=80&w=1740&auto=format&fit=crop",
        imageAlt: "Furniture hardware and fittings",
    },
];

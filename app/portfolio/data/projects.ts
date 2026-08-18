export type Project = {
    slug: string;
    title: string;
    category: string;
    description: string;
    image: string;
    year: number;
};

export const projects: Project[] = [
    {
        slug: "victorian-armchair",
        title: "Victorian Armchair",
        category: "Chair Restoration",
        description:
            "A complete restoration of a Victorian armchair, including structural repairs, wood refinishing and new upholstery.",
        image: "/images/1.jpg",
        year: 2026,
    },
    {
        slug: "oak-dining-table",
        title: "Oak Dining Table",
        category: "Furniture Restoration",
        description:
            "Restoration of a solid oak dining table with surface repair, refinishing and preservation of its original character.",
        image: "/images/2.jpg",
        year: 2026,
    },
    {
        slug: "mid-century-chair",
        title: "Mid-Century Chair",
        category: "Chair Restoration",
        description:
            "A mid-century chair brought back to life with careful wood restoration and traditional upholstery.",
        image: "/images/3.jpg",
        year: 2025,
    },
];

export type Project = {
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    year: number;

    location?: string;

    images?: {
        src: string;
        alt: string;
    }[];

    beforeAfter?: {
        before: string;
        after: string;
    };

    materials?: string[];

    restoration?: {
        structuralRepair?: string;
        woodwork?: string;
        upholstery?: string;
        finishing?: string;
    };
};

export const projects: Project[] = [
    {
        slug: "victorian-armchair2",
        title: "Victorian Armchair",
        category: "Chair Restoration",

        shortDescription:
            "A family armchair worn by generations of use, carefully restored without erasing the traces that made it theirs.",

        longDescription:
            "This Victorian armchair arrived carrying more than years of wear. It had belonged to the same family for generations, moving from one home to another and becoming part of countless quiet moments along the way. The frame had loosened, the timber had lost its warmth, and the upholstery had finally given way, but beneath it all was a beautifully made piece with plenty of life left in it. Our aim was not to make the chair look new. Instead, we wanted to bring it back to the condition it deserved while preserving the small marks and imperfections that told its story. The original oak was carefully cleaned and restored by hand, the structure was repaired using traditional methods, and the seat was rebuilt with natural linen. The result is a chair that feels ready for another generation, rather than one that has simply been taken back in time.",

        image: "/images/1.jpg",
        year: 2026,
        location: "London, UK",

        images: [
            {
                src: "/images/1.jpg",
                alt: "Restored Victorian armchair",
            },
            {
                src: "/images/1-2.jpg",
                alt: "Detail of the restored Victorian armchair",
            },
            {
                src: "/images/1-3.jpg",
                alt: "Woodwork detail of the Victorian armchair",
            },
        ],

        beforeAfter: {
            before: "/images/1-before.jpg",
            after: "/images/1.jpg",
        },

        materials: [
            "Solid oak",
            "Natural wax",
            "Linen",
            "Traditional upholstery",
        ],

        restoration: {
            structuralRepair:
                "The original frame was carefully inspected, repaired and reinforced where necessary while retaining as much of the original structure as possible.",

            woodwork:
                "The oak frame was gently cleaned and restored by hand, removing years of surface wear without losing the character of the original timber.",

            upholstery:
                "The seat was rebuilt using traditional upholstery techniques and finished with natural linen.",

            finishing:
                "A natural wax finish was applied to protect the timber while preserving its original warmth and patina.",
        },
    },

    {
        slug: "oak-dining-table",
        title: "Oak Dining Table",
        category: "Furniture Restoration",

        shortDescription:
            "A well-loved dining table brought back to life, keeping every mark that belonged to the family gathered around it.",

        longDescription:
            "There are pieces of furniture that become part of a home without anyone noticing when it happens. This solid oak dining table was one of them. For years it had been the place where meals were shared, birthdays celebrated, homework was done and conversations stretched long into the evening. Its surface had collected scratches, stains and the softer marks of everyday life, while years of use had left the joints loose and the finish tired. We chose to preserve as much of that history as possible. Rather than sanding the table back to something unrecognisable, the surface was carefully cleaned and refinished, allowing its natural imperfections to remain visible. The structure was repaired and strengthened, then the oak was treated with natural oil and wax. The table left the workshop looking cared for rather than replaced — ready to become part of many more evenings around it.",

        image: "/images/2.jpg",
        year: 2026,
        location: "London, UK",

        images: [
            {
                src: "/images/2.jpg",
                alt: "Restored oak dining table",
            },
            {
                src: "/images/2-2.jpg",
                alt: "Oak dining table surface detail",
            },
            {
                src: "/images/2-3.jpg",
                alt: "Detail of the restored oak table",
            },
        ],

        beforeAfter: {
            before: "/images/2-before.jpg",
            after: "/images/2.jpg",
        },

        materials: ["Solid oak", "Natural oil", "Oak wax"],

        restoration: {
            structuralRepair:
                "The table frame was dismantled and carefully repaired, correcting loose joints and restoring its original stability.",

            woodwork:
                "The tabletop was carefully cleaned and refinished by hand, retaining natural imperfections and signs of age.",

            finishing:
                "Several coats of natural oil and wax were applied to protect the surface and enhance the warmth of the oak.",
        },
    },

    {
        slug: "mid-century-chair",
        title: "Mid-Century Chair",
        category: "Chair Restoration",

        shortDescription:
            "A forgotten mid-century chair with beautiful bones, rediscovered beneath decades of wear and an outdated interior.",

        longDescription:
            "This mid-century chair had spent years in a room where it was rarely noticed. Its fabric had faded, the timber had become dull, and several joints had started to loosen. Yet the proportions were still elegant and the original craftsmanship was unmistakable. The challenge was to restore the chair without turning it into something it was never meant to be. The frame was carefully disassembled and repaired, while the teak was cleaned and refinished to reveal the warmth of the original grain. The old upholstery was replaced with a natural wool fabric chosen for its texture and durability. What emerged was not a completely different chair, but the same chair finally given the attention it had been missing for years. Sometimes restoration is less about changing a piece and more about helping people see it again.",

        image: "/images/3.jpg",
        year: 2025,
        location: "London, UK",

        images: [
            {
                src: "/images/3.jpg",
                alt: "Restored mid-century chair",
            },
            {
                src: "/images/3-2.jpg",
                alt: "Detail of the mid-century chair",
            },
            {
                src: "/images/3-3.jpg",
                alt: "Upholstery detail of the restored chair",
            },
        ],

        beforeAfter: {
            before: "/images/3-before.jpg",
            after: "/images/3.jpg",
        },

        materials: [
            "Teak",
            "Natural oil",
            "Wool fabric",
            "Traditional upholstery",
        ],

        restoration: {
            structuralRepair:
                "The frame was carefully disassembled and repaired, restoring the original joints and structural integrity.",

            woodwork:
                "The teak was cleaned and refinished to bring back its natural colour and grain without removing its character.",

            upholstery:
                "The original upholstery was replaced with a durable natural wool fabric while retaining the chair's original proportions.",

            finishing:
                "The timber was finished with a natural oil to provide protection while keeping the original mid-century appearance.",
        },
    },

    {
        slug: "walnut-chest",
        title: "Walnut Chest",
        category: "Cabinet Restoration",

        shortDescription:
            "A traditional walnut chest restored with care, revealing the depth and character hidden beneath years of worn finish.",

        longDescription:
            "This walnut chest had spent decades in the same bedroom, quietly accumulating the signs of everyday use. The drawers had become difficult to open, the original finish had darkened unevenly and several areas of veneer had lifted from the surface. The restoration focused on bringing back the clarity of the walnut without removing the character that came with age. Each drawer was repaired and adjusted by hand, loose veneer was carefully secured, and the original surface was cleaned before receiving a new protective finish. The result is a piece that feels both familiar and renewed, with the warmth of the walnut once again at the centre of its appearance.",

        image: "/images/4.jpg",
        year: 2025,
        location: "London, UK",

        images: [
            {
                src: "/images/4.jpg",
                alt: "Restored walnut chest",
            },
            {
                src: "/images/4-2.jpg",
                alt: "Walnut chest drawer detail",
            },
            {
                src: "/images/4-3.jpg",
                alt: "Detail of the restored walnut surface",
            },
        ],

        beforeAfter: {
            before: "/images/4-before.jpg",
            after: "/images/4.jpg",
        },

        materials: ["Walnut", "Wood veneer", "Natural oil", "Furniture wax"],

        restoration: {
            structuralRepair:
                "The drawers and internal structure were repaired and adjusted to restore smooth and reliable movement.",

            woodwork:
                "Loose veneer was carefully secured and damaged areas of the walnut surface were repaired by hand.",

            finishing:
                "The original finish was cleaned back and replaced with a subtle protective finish that enhances the walnut grain.",
        },
    },

    {
        slug: "writing-desk",
        title: "Writing Desk",
        category: "Desk Restoration",

        shortDescription:
            "A compact writing desk restored for everyday use while preserving the quiet character of its original craftsmanship.",

        longDescription:
            "This writing desk had spent years tucked away in a corner of the house. Its surface was marked by countless years of writing, the legs had become slightly unstable and the finish had lost much of its original depth. Rather than completely refinishing the desk, we chose to preserve some of the marks that reflected its history. The joints were carefully repaired, the surface was cleaned and lightly restored, and the timber was finished with natural oil. Small imperfections were deliberately left visible, keeping the desk connected to the years it had already lived through.",

        image: "/images/5.jpg",
        year: 2025,
        location: "London, UK",

        images: [
            {
                src: "/images/5.jpg",
                alt: "Restored writing desk",
            },
            {
                src: "/images/5-2.jpg",
                alt: "Writing desk surface detail",
            },
            {
                src: "/images/5-3.jpg",
                alt: "Detail of the restored desk",
            },
        ],

        beforeAfter: {
            before: "/images/5-before.jpg",
            after: "/images/5.jpg",
        },

        materials: ["Oak", "Natural oil", "Furniture wax"],

        restoration: {
            structuralRepair:
                "The original joints were repaired and the legs were stabilised while preserving the desk's original construction.",

            woodwork:
                "The desktop was carefully cleaned and lightly restored, retaining small marks from years of use.",

            finishing:
                "Natural oil and wax were applied to protect the timber and restore its warmth.",
        },
    },

    {
        slug: "painted-wardrobe",
        title: "Painted Wardrobe",
        category: "Cabinet Restoration",

        shortDescription:
            "A tired painted wardrobe carefully restored while retaining the layers and imperfections that gave it its character.",

        longDescription:
            "This old wardrobe had accumulated several layers of paint over the years, each one reflecting a different period in the life of the house. The doors no longer closed properly and the surface had become heavily worn around the handles and edges. Instead of stripping the wardrobe completely, the restoration focused on stabilising the structure and carefully repairing the most damaged areas. The existing layers were cleaned and softened, allowing traces of the earlier finishes to remain visible. The result preserves the character of the wardrobe while making it practical and reliable for everyday use once again.",

        image: "/images/6.jpg",
        year: 2024,
        location: "London, UK",

        images: [
            {
                src: "/images/6.jpg",
                alt: "Restored painted wardrobe",
            },
            {
                src: "/images/6-2.jpg",
                alt: "Painted wardrobe door detail",
            },
            {
                src: "/images/6-3.jpg",
                alt: "Detail of the restored wardrobe",
            },
        ],

        beforeAfter: {
            before: "/images/6-before.jpg",
            after: "/images/6.jpg",
        },

        materials: ["Painted timber", "Natural wax", "Brass hardware"],

        restoration: {
            structuralRepair:
                "The wardrobe doors and internal structure were repaired and adjusted to restore proper alignment.",

            woodwork:
                "Damaged timber around the doors and frame was repaired while preserving the existing layers of paint.",

            finishing:
                "The restored surface was protected with a subtle wax finish that keeps the aged appearance intact.",
        },
    },

    {
        slug: "oak-coffee-table",
        title: "Oak Coffee Table",
        category: "Table Restoration",

        shortDescription:
            "A heavily used oak coffee table restored with a lighter touch, keeping the marks that made it part of the home.",

        longDescription:
            "This oak coffee table had become the centre of a busy living room. Its surface showed years of cups, books, scratches and everyday use, while one of the joints had started to loosen. The restoration was intentionally restrained. The structure was repaired first, followed by a careful cleaning of the tabletop and a light restoration of the finish. Rather than removing every imperfection, the surface was left with subtle traces of its previous life. A natural oil and wax finish brought back the warmth of the oak and gave the table the protection it needed for many more years of use.",

        image: "/images/7.jpg",
        year: 2024,
        location: "London, UK",

        images: [
            {
                src: "/images/7.jpg",
                alt: "Restored oak coffee table",
            },
            {
                src: "/images/7-2.jpg",
                alt: "Oak coffee table surface detail",
            },
            {
                src: "/images/7-3.jpg",
                alt: "Detail of the restored coffee table",
            },
        ],

        beforeAfter: {
            before: "/images/7-before.jpg",
            after: "/images/7.jpg",
        },

        materials: ["Solid oak", "Natural oil", "Oak wax"],

        restoration: {
            structuralRepair:
                "The loose joint was repaired and the frame was stabilised without changing the original construction.",

            woodwork:
                "The tabletop was cleaned and lightly restored to preserve its natural grain and signs of use.",

            finishing:
                "A natural oil and wax finish was applied to protect the surface and restore the warmth of the oak.",
        },
    },

    {
        slug: "upholstered-lounge-chair",
        title: "Lounge Chair",
        category: "Upholstery Restoration",

        shortDescription:
            "A classic lounge chair given a new lease of life through careful structural repair and traditional upholstery.",

        longDescription:
            "This lounge chair had all the right proportions but had lost much of its comfort after years of use. The original upholstery had become worn and the frame had developed movement in several joints. The chair was carefully stripped back to reveal the original construction, allowing the frame to be repaired before the upholstery was rebuilt. Traditional techniques were used throughout, with new natural fabric chosen to complement the original form. The finished chair feels familiar rather than transformed — comfortable, strong and ready for everyday use again.",

        image: "/images/8.jpg",
        year: 2024,
        location: "London, UK",

        images: [
            {
                src: "/images/8.jpg",
                alt: "Restored upholstered lounge chair",
            },
            {
                src: "/images/8-2.jpg",
                alt: "Lounge chair upholstery detail",
            },
            {
                src: "/images/8-3.jpg",
                alt: "Detail of the restored lounge chair",
            },
        ],

        beforeAfter: {
            before: "/images/8-before.jpg",
            after: "/images/8.jpg",
        },

        materials: [
            "Beech frame",
            "Natural linen",
            "Wool",
            "Traditional upholstery",
        ],

        restoration: {
            structuralRepair:
                "The frame was carefully repaired and stabilised, restoring the original strength of the chair.",

            upholstery:
                "The old upholstery was removed and rebuilt using traditional methods and natural fabrics.",

            finishing:
                "The exposed timber was cleaned and finished with a subtle natural wax.",
        },
    },
];

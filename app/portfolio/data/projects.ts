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
];

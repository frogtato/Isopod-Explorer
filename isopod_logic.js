const isopods = [
    {
        name: "Woodlouse (Oniscidea)",
        image: "isopod_gallery/woodlouse.jpg",
        description: "Woodlice are crustaceans from the monophyletic suborder Oniscidea within the isopods.",
        facts: [
            "They breathe through tracheal-like structures called pseudotrachea.",
            "They primarily feed on decaying organic matter.",
            "They are among the few crustaceans to have fully adapted to life on land."
        ],
        source: "https://en.wikipedia.org/wiki/Woodlouse",
    },
    {
        name: "Giant Isopod (Bathynomus giganteus)",
        image: "isopod_gallery/giant_isopod.jpg",
        description: "Giant isopods are crustaceans in the genus Bathynomus, a group of large isopods.",
        facts: [
            "They are scavengers found in the deep sea.",
            "They can survive without food for up to five years.",
            "Their large size is an example of deep-sea gigantism."
        ],
        source: "https://en.wikipedia.org/wiki/Giant_isopod",
    },
    {
        name: "Pill Bug (Armadillidiidae)",
        image: "isopod_gallery/pill_bug.jpg",
        description: "Pill bugs are terrestrial isopods that roll into a ball when threatened.",
        facts: [
            "Pill bugs are also called 'roly-polies.'",
            "They are one of the few crustaceans adapted to land.",
            "They excrete ammonia directly through their shells, which requires moist environments."
        ],
        source: "https://en.wikipedia.org/wiki/Pill_bug",
    },
    {
        name: "Zebra Isopod (Armadillidium maculatum)",
        image: "isopod_gallery/zebra_isopod.jpg",
        description: "A terrestrial species known for its black-and-white striped pattern, often referred to as zebra markings.",
        facts: [
            "Native to Europe.",
            "Popular in terrariums due to their distinctive appearance.",
            "They thrive in leaf litter and other decaying plant material."
        ],
        source: "https://en.wikipedia.org/wiki/Armadillidium",
    },
    {
        name: "Dairy Cow Isopod (Porcellio laevis)",
        image: "isopod_gallery/dairy_cow_isopod.jpg",
        description: "Porcellio laevis is a species of woodlouse, often nicknamed 'Dairy Cow' for its characteristic spotted appearance.",
        facts: [
            "Known for their fast breeding.",
            "Highly adaptable to various environments.",
            "They are named for their spotted coloration resembling dairy cows."
        ],
        source: "https://en.wikipedia.org/wiki/Porcellio",
    },
    {
        name: "Little Sea Isopod (Idotea balthica)",
        image: "isopod_gallery/little_sea_isopod.jpg",
        description: "Idotea balthica is a small marine isopod found in the Atlantic, Mediterranean, and Black Seas.",
        facts: [
            "Males can grow up to 4 cm and are usually more colorful than females.",
            "They eat seaweed and are often found in stranded seaweed on shores.",
            "Their telson has a distinct keel and pointed tip, which helps identify them."
        ],
        source: "https://en.wikipedia.org/wiki/Idotea_balthica",
    },
    {
        name: "Clown Isopod (Armadillidium klugii)",
        image: "isopod_gallery/clown_isopod.jpg",
        description: "Armadillidium klugii is a Balkan species with red, yellow, or white patterns thought to mimic the venomous Mediterranean black widow.",
        facts: [
            "Found in the Mediterranean region.",
            "Popular in exotic pet collections for their vibrant appearance.",
            "Their coloration may act as a deterrent to predators."
        ],
        source: "https://en.wikipedia.org/wiki/Armadillidium_klugii",
    },
    {
        name: "Lava Isopod (Porcellio scaber)",
        image: "isopod_gallery/lava_isopod.jpg",
        description: "A common terrestrial isopod found in various habitats, notable for its reddish hues and adaptability.",
        facts: [
            "Often reddish in color, reminiscent of lava.",
            "Used in composting for breaking down organic matter.",
            "They can tolerate drier conditions compared to other isopods."
        ],
        source: "https://en.wikipedia.org/wiki/Porcellio_scaber",
    },
    {
        name: "Rubber Ducky Isopod (Cubaris sp.)",
        image: "isopod_gallery/rubber_ducky_isopod.jpg",
        description: "Cubaris sp., or 'Rubber Ducky,' is a rare terrestrial isopod named for its resemblance to a rubber duck.",
        facts: [
            "Known for their unique, 'duck face' appearance.",
            "Require high humidity to thrive.",
            "Originated in limestone caves of Thailand."
        ],
        source: "https://en.wikipedia.org/wiki/Cubaris",
    }
];

const isopodName = document.getElementById("isopod-name");
const isopodImage = document.getElementById("isopod-image");
const isopodDescription = document.getElementById("isopod-description");
const isopodSource = document.getElementById("isopod-source");

function showRandomIsopod() {
    const randomIsopod = isopods[Math.floor(Math.random() * isopods.length)];
    isopodName.textContent = randomIsopod.name; // Existing line
    isopodImage.src = randomIsopod.image; // Existing line
    isopodImage.style.display = "block"; // New line to show the image
    isopodDescription.innerHTML = `<strong>${randomIsopod.description}</strong><br>${randomIsopod.facts.join("<br>")}`; // Existing line
    isopodSource.innerHTML = `<a href="${randomIsopod.source}" target="_blank">Source: ${randomIsopod.source}</a>`; // Existing line
}

document.getElementById("new-isopod-btn").addEventListener("click", showRandomIsopod);
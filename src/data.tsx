import Francine from "../src/Assets/Francine-bg.jpg";

export const navLinks = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const navLinksSubMenu = [
  {
    name: "Animals",
    link: "/work/animals",
  },
  {
    name: "Flowers",
    link: "/work/flowers",
  },
  {
    name: "Food",
    link: "/work/food",
  },
  {
    name: "Landscape",
    link: "/work/landscape",
  },
  {
    name: "Portrait",
    link: "/work/portrait",
  },
  {
    name: "Product",
    link: "/work/product",
  },
  {
    name: "Event",
    link: "/work/event",
  },
];

export const aboutPage = [
  {
    image: Francine,
    alt: "photographer",
    text: "I am Francine, a Web Developer and self-taught Photographer.\nPhotography became part of my life since I moved to Hamburg, Germany. It helped me through a very difficult time - when I lost my father. He loved photography! The first camera I used belonged to him - a Canon 450D. Naturally, I still have it, but I have decided to keep it very well guarded and safe. It has been used to record many, many beautiful moments, so I would love to keep it very well preserved. At the moment, my faithful companion is a Canon 250D, and a diverse kit of lenses. At WORK you can see bit of my work and my photographic vision."
  }
]

export const contactAddress = [
  {
    title: "da silva fotografie",
    email: "franmelopepe@gmail.com",
    mailTo: "mailto:franmelopepe@gmail.com",
    phone: "(+49) 01522 2801863",
    country: "Hamburg | DE",
    
  }
]

export const footerData = [
  {
    ownerName: "da silva fotografie",
    developedBy: "Developed by: Francine Melo | 2024 ",
    link: "https://www.francinemelopepe.de/"
  }
]

export const ContactFormData = [
  {
    id: "name",
    title: "Name:",
    htmlFor: "name",
    name: "user_name",
    type: "text",
    placeholder: "Name",
  },
  {
    id: "email",
    title: "E-mail:",
    htmlFor: "email",
    name: "user_email",
    type: "text",
    placeholder: "E-mail",
  },
  {
    id: "phone",
    title: "Phone:",
    htmlFor: "phone",
    name: "user_phone",
    type: "tel",
  },
]

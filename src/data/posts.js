const posts = [
  {
    id: 1,
    title: '"A Line is Never Alone"',
    content:
      "Randomly generating 500 lines. The page reloads every 60 seconds.",
    image: "/img/theline.png",
    liveLink: "https://a-line-is-never-alone.netlify.app/",
    codeLink: "https://github.com/Wallenborg/line-art",
  },
  {
    id: 2,
    title: '"Digital Eclipse - A Year on the Web"',
    content:
      "The website features a dynamic background color that transitions from white to black over the course of 365 days from its creation date. It dynamically updates the background color of the webpage based on the number of days remaining. Each day, the background color becomes slightly darker, gradually transitioning to black over the course of the year. After 365 days have passed, the countdown resets, and the background color transition begins again, ensuring that the website continuously cycles through the white-to-black transition every 366 days. The idea is to have a year-long experience within an online digital space. Start date 2024-03-28",
    image: "/img/theday.png",
    liveLink: "https://a-year.netlify.app/",
    codeLink: "https://github.com/Wallenborg/Ayear",
  },
  {
    id: 3,
    title: '"you love i"',
    content: "Made this small project a random text placement, I LOVE YOU : )",
    image: "/img/theiloveyou.png",
    liveLink: "https://youlovei.netlify.app/",
    codeLink: "https://github.com/Wallenborg/I-love-you",
  },
  {
    id: 4,
    title: '"No Love Lost in the Garden of Eden"',
    content:
      "The web-page unfolds as a digital landscape, resembling a garden or forest populated by early internet GIF files associated with plant life and verdant symbolism. No Love Lost in the Garden of Eden - stands as an exploration and tribute to the aesthetics of early internet culture, particularly the unsophisticated yet charming GIF animations that once proliferated online. Visitors are invited to meander through this digital terrain by simply scrolling through the webpage. The GIFs are randomly placed on the web page",
    image: "/img/thegif.png",
    liveLink: "https://www.niklaswallenborg.com/nolovelost.html",
    codeLink: "",
  },
  {
    id: 5,
    title: '"Snow Crash"',
    content:
      "When the computer crashed and wrote gibberish into the bitmap, the result was something that looked vaguely like static on a broken television set— a snow crash. This JavaScript code dynamically creates a grid of colored boxes within an HTML container. It initializes by generating the boxes once and then updates them continuously. Each box is styled with a random background color selected from a predefined array of colors. The size of the grid adjusts based on the dimensions of the browser window.",
    image: "/img/thesnow.png",
    liveLink: "https://snow-crash.netlify.app/",
    codeLink: "",
  },
  {
    id: 6,
    title: '"What were the skies like when you were young?"',
    content:
      "The code generates and semi-transparent circles that move randomly within the screen. Each circle starts from the center of the previous circle’s position.",
    image: "/img/thesky.png",
    liveLink: "https://what-were-the-skies-like.netlify.app/",
    codeLink: "",
  },

  {
    id: 7,
    title: '"The Blob Generator"',
    content:
      "On loading the page, an initial blob is drawn. When the user clicks the New Blob button, the canvas is cleared, and new blobs with varying sizes, positions, and colors are generated (Canvas and JavaScript).",
    image: "/img/theblob.png",
    liveLink: "https://the-blob-generator.netlify.app/",
    codeLink: "https://github.com/Wallenborg/the-blob",
  },
  {
    id: 8,
    title: '"Neam Chimpsky - Sentence Generator"',
    content:
      "This build started with thoughts on AI language models, leading to primate language experiments and the idea that 1,000 monkeys with 1,000 laptops could write a Shakespearean text. It explores randomness, communication, and creativity. Using JavaScript, it displays random words from Nim Chimpsky's vocabulary on scroll, with the number of words chosen based on a probability array.",
    image: "/img/theneam.png",
    liveLink: "https://me-give-orange.netlify.app/",
    codeLink: "https://github.com/Wallenborg/neam",
  },
  {
    id: 9,
    title: '"Abstract Pixel Art Generator"',
    content:
      "This build generates abstract pixel art. It creates a grid of cells based on screen size and applies semi-transparent colors with a 20% chance. Four colors are applied sequentially, with each layer affecting a new random set of cells, repeating until all colors are used.",
    image: "/img/thepixelart.png",
    liveLink: "https://a-p-a-g.netlify.app/",
    codeLink: "https://github.com/Wallenborg/pixel-art-abstract",
  },
  {
    id: 10,
    title: '"Ripple Effect"',
    content:
      "The web is like water—always flowing, always changing, yet still remembering. This build creates ripple effects, generating expanding rings that progressively grow larger, with increasing distance between them. As the rings expand, they fade out smoothly. GSAP powers the animations, managing the size, opacity, and timing for a fluid and natural ripple effect.",
    image: "/img/theripple.png",
    liveLink: "https://r-e.netlify.app",
    codeLink: "https://github.com/Wallenborg/ripple",
  },
  {
    id: 11,
    title: '"Like the Matrix but Happy and Colorful"',
    content:
      "This project creates a colorful text animation inspired by the Matrix. Users input text, which appears as falling characters in random colors. The letters cascade down the screen at varying speeds, creating a dynamic effect. JavaScript powers the animation on a canvas, ensuring smooth and continuous motion.",
    image: "/img/thematrix.png",
    liveLink: "https://ltmbhac.netlify.app/",
    codeLink: "https://github.com/Wallenborg/matrix",
  },
];

export default posts;

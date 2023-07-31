import dayjs, {Dayjs} from "dayjs";

function getImgUrl(name: string): string {
    return new URL(`./assets/${name}`, import.meta.url).href
}

export interface PieceType {
    id: string,
    category: string,
    alt: string,
    file: string,
    date: Dayjs,
    blurb: string
}

const _pieces = [
    {
        category: "nightly",
        alt: "ink drawing of nightly",
        file: 'IMG_9352.PNG',
        date: dayjs("2023-06-29"),
        blurb: "A perspective drawing of Nightly sleeping on the couch."
    },
    {
        category: "nightly",
        alt: "digital sketch of nightly looking down",
        file: 'IMG_0567.PNG',
        date: dayjs("2022-12-16"),
        blurb: "Nightly successfully convinces me that she needs another treat."
    },
    {
        category: "places",
        alt: "fisheye perspective of an imaginary cafe",
        file: 'IMG_0566.PNG',
        date: dayjs("2022-12-27"),
        blurb: "A mishmash of cafe's that I worked on while drawing this piece. I initially started this on paper and scanned it into Procreate to trace digitally."
    },
    {
        category: "nightly",
        alt: "stick figure nightly",
        file: 'IMG_0565.PNG',
        date: dayjs("2022-12-31"),
        blurb: "A silly stick figure of Nightly."
    },
    {
        category: "animals",
        alt: "lamb and rat",
        file: 'IMG_0564.PNG',
        date: dayjs("2022-12-31"),
        blurb: "My parents as their Zodiac animals. Zodiac signs are to my parents what horoscopes are to my generation, and they place a lot of meaning in which year and animal you were born to. With this drawing, I wanted to honor my parent's relationship with themselves as well as their culture."
    },
    {
        category: "people",
        alt: "dancing feet",
        file: 'IMG_0563.PNG',
        date: dayjs("2022-08-22"),
        blurb: "A study of dancing feet."
    },
    {
        category: "people",
        alt: "values and face places",
        file: 'IMG_0562.PNG',
        date: dayjs("2022-08-22"),
        blurb: "A study in face planes. My first time trying to draw what looks like a face using only values and no outlines. Using negative space to create the illusion of depth and form. "
    },
    {
        category: "people",
        alt: "russell from the gorillaz",
        file: 'IMG_0561.PNG',
        date: dayjs("2022-08-30"),
        blurb: "I was and still am a huge fan of the Gorillaz. This is a drawing of Russel I made when I had a couple hours to kill on an airplane."
    },
    {
        category: "people",
        alt: "study in human body perspective",
        file: 'IMG_0560.PNG',
        date: dayjs("2022-08-24"),
        blurb: "A study of foreshortening of the human body. Was feeling inspired by Kim Jung Gi's artwork."
    },
    {
        category: "people",
        alt: "study of eyes",
        file: 'IMG_0559.PNG',
        date: dayjs("2022-08-25"),
        blurb: "A study of of eyes."
    },
    {
        category: "people",
        alt: "study of noses",
        file: 'IMG_0558.PNG',
        date: dayjs("2022-08-26"),
        blurb: "A study of side profile noses."
    },
    {
        category: "people",
        alt: "photo realistic hand",
        file: 'IMG_0557.PNG',
        date: dayjs("2022-09-07"),
        blurb: "My left hand. There are surprisingly a whole lot of colors in something as simple as skin."
    },
    {
        category: "people",
        alt: "blue and yellow man",
        file: 'IMG_0556.PNG',
        date: dayjs("2022-09-12"),
        blurb: "I wanted to capture a feeling, and was drawn in by this person's solemn expression. I'm also experimenting with a different color palette and different brushes."
    },
    {
        category: "people",
        alt: "night market girl with mask",
        file: 'IMG_0555.PNG',
        date: dayjs("2022-10-19"),
        blurb: "Drawing from a reference of night market photos taken by a friend who recently took a trip to Korea. COVID not really being "
    },
    {
        category: "people",
        alt: "portrait of me times three",
        file: 'IMG_0593.PNG',
        date: dayjs("2022-12-13"),
        blurb: "A portrait of me times three. I had watched this heart-wrenching movie called The Whale recently where the director had a Q&A afterwards and talked about how difficult it is in the era of social media to find nuance in the black and white. I loved how the movie built up every character's internal struggle/push and pulls, and I wanted to do a self portrait to explore these different characters in my story."
    },
    {
        category: "animals",
        alt: "cat",
        file: 'IMG_0552.PNG',
        date: dayjs("2022-08-15"),
        blurb: "The fluffiest loaf of a cat."
    },
    {
        category: "animals",
        alt: "elephant",
        file: 'IMG_0551.PNG',
        date: dayjs("2022-08-15"),
        blurb: "An early study of an elephant. Started with the biggest shapes I could see and then went into the details."
    },
    {
        category: "nightly",
        alt: "nightly in the dark",
        file: 'IMG_0550.PNG',
        date: dayjs("2022-08-18"),
        blurb: "Impressionistic study of nightly in the shadows. She sometimes reminds of me of the wolf from Puss in Boots: The Last Wish."
    },
    {
        category: "clothing",
        alt: "yellow t-shirt on mannequin",
        file: 'IMG_0549.PNG',
        date: dayjs("2022-07-07"),
        blurb: "I'd wanted to draw this shirt ever since I moved to Bed Stuy. There was an unsuccessful clothing store next to where I used to live that I passed by almost every day. This shirt was always on display in the windows for the entire year I lived there and was never sold. The lightning and wrinkles always caught my eye for some reason."
    },
    {
        category: "clothing",
        alt: "study of friends shirt",
        file: 'IMG_0548.PNG',
        date: dayjs("2022-07-08"),
        blurb: "My friend was excited about a new shirt he'd gotten and I decided to draw it. Here I only use one color while trying to capture the different folds and wrinkles in clothing. It's interesting how clothes of different material fall in gravity, and this shirt was definitely a lighter summer shirt."
    },
    {
        category: "clothing",
        alt: "workwear",
        file: 'IMG_0547.PNG',
        date: dayjs("2022-07-07"),
        blurb: "Work wear shots featuring heavy denim material. I am honestly a big fan of workwear."
    },
    {
        category: "places",
        alt: "a day at the brooklyn museum",
        file: 'IMG_0546.PNG',
        date: dayjs("2022-10-07"),
        blurb: "I was getting into 5 point perspective drawings studying Kim Jung Gi's drawings, and I decided to challenge myself with a 10 point perspective. My friend and I had recently visited the Brooklyn Museum and after a day of creative stimulation, I sat down and tried to draw everything I remembered seeing. The giant KAWS in the back gets me everytime."
    },
    {
        category: "places",
        alt: "my parent's place",
        file: 'IMG_0545.PNG',
        date: dayjs("2022-08-10"),
        blurb: "I don't really call the place my parent's live at home, because I didn't grow up there. We moved a total of 7 times while my sister and I grew up in Queens, and it means that this new 'home' that my parents have designated can feel cold and empty at times."
    },
    {
        category: "places",
        alt: "5 point perspective of 1 bedroom",
        file: 'IMG_0543.PNG',
        date: dayjs("2022-07-31"),
        blurb: "My first 5 point perspective drawing. There was a bit of a learning curve about how common shapes were distorted by so many different vanishing points."
    },
    {
        category: "places",
        alt: "5 point perspective of burly",
        file: 'IMG_0542.PNG',
        date: dayjs("2022-08-28"),
        blurb: "Burly coffee shop. Great coffee great people. Had an iced americano."
    },
    {
        category: "places",
        alt: "3 panels of my refrigerator",
        file: 'IMG_0541.PNG',
        date: dayjs("2022-10-16"),
        blurb: "The contents of my refrigerator. A study of separating the foreground from the background and making things pop with intentional composition and colors."
    },
    {
        category: "food",
        alt: "xiao long bao",
        file: 'IMG_0540.PNG',
        date: dayjs("2022-10-20"),
        blurb: "a super raw iPad sketch of some shadows in some xiao long bao. And yes I ate them all."
    },
    {
        category: "food",
        alt: "sunny side eggs",
        file: 'IMG_0539.PNG',
        date: dayjs("2022-10-20"),
        blurb: "Crispy sunny side eggs."
    },
    {
        category: "nature",
        alt: "an abstract study of my plants",
        file: 'IMG_0538.PNG',
        date: dayjs("2022-10-19"),
        blurb: "A collection of foliage that I've gathered and hoarded over the past few years. I love using greens and yellows in my art."
    },
    {
        category: "nature",
        alt: "a blue tree",
        file: 'IMG_0536.PNG',
        date: dayjs("2022-12-20"),
        blurb: "If there was a way to capture a feeling completely and holistically in art, I wouldn't continue making art."
    },
    {
        category: "places",
        alt: "a sunset in bushwick",
        file: 'IMG_0535.PNG',
        date: dayjs("2022-12-20"),
        blurb: "I used one hue and only tuned the brighness of the color to make sure the sunset really popped. Inspired by monet's sunrise paintings."
    },
    {
        category: "people",
        alt: "a man with a cat on a rainy day",
        file: 'IMG_0534.PNG',
        date: dayjs("2022-08-11"),
        blurb: "In this painting I capture a feeling of comfortable loneliness and the relationship between an old man and his street cat companion."
    },
    {
        category: "nature",
        alt: "yellow trees in shenandoah",
        file: 'IMG_0533.PNG',
        date: dayjs("2022-07-31"),
        blurb: "I had recently went on a road trip to Shenandoah National park, and fall colors were on my mind. A study using mostly one color and trying to see what kind of feeling yellow evokes."
    },
    {
        category: "nature",
        alt: "waterfalls",
        file: 'IMG_0532.PNG',
        date: dayjs("2022-08-02"),
        blurb: "Waterfalls in Norway."
    },
    {
        category: "places",
        alt: "an idyllic scene in shinjuku",
        file: 'IMG_0531.PNG',
        date: dayjs("2022-08-18"),
        blurb: "Found a really lovely picture capturing a slice of life in Shinjuku. They're just so many details packed into this photo!"
    },
]

export const pieces: PieceType[] = _pieces.map((_piece) => ({
    ..._piece,
    id: _piece.file,
    file: getImgUrl(_piece.file)
})).sort((a, b)=>b.date.diff(a.date))

const _categoryToPieces: Record<string, PieceType[]> = {}
pieces.forEach((piece) => {
    _categoryToPieces[piece.category] = [...(_categoryToPieces[piece.category] ?? []), piece]
})

export const categoryToPieces = _categoryToPieces

export const categories = ["all", ...Object.keys(categoryToPieces)]
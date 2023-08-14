import dayjs, {Dayjs} from "dayjs";
import {CSSProperties} from "react";

function getImgUrl(name: string): string {
    return new URL(`./assets/${name}`, import.meta.url).href
}

export interface PieceType {
    id: string,
    category: string[],
    alt: string,
    file: string,
    date: Dayjs,
    blurb: string,
    style: CSSProperties
}

const _pieces = [
    {
        category: ["people"],
        alt: "grid of quick side profile sketches",
        file: 'side_profile.png',
        date: dayjs("2022-08-10"),
        blurb: "A study of different facial expressions and how that shows up in the side profile. Constraint: spend less than 15 seconds on each face."
    },
    {
        category: ["people"],
        alt: "hands study",
        file: 'hands.png',
        date: dayjs("2022-08-09"),
        blurb: "A study of lighting and hands."
    },
    {
        category: ["people"],
        alt: "bodybuilder study",
        file: 'bodybuilder.png',
        date: dayjs("2022-07-25"),
        blurb: "Body study #2"
    },
    {
        category: ["people"],
        alt: "woman wearing red mask",
        file: 'mask.png',
        date: dayjs("2022-08-11"),
        blurb: "A new type of N95."
    },
    {
        category: ["nightly", "animals"],
        alt: "digital sketch of nightly looking down",
        file: 'IMG_0567.PNG',
        date: dayjs("2022-12-16"),
        blurb: "Nightly successfully convinces me that she needs another treat."
    },
    {
        category: ["places"],
        alt: "fisheye perspective of an imaginary cafe",
        file: 'IMG_0566.PNG',
        date: dayjs("2022-12-27"),
        blurb: "A mishmash of cafe's that I worked on while drawing this piece. I initially started this on paper and scanned it into Procreate to trace digitally."
    },
    {
        category: ["nightly", "animals"],
        alt: "stick figure nightly",
        file: 'IMG_0565.PNG',
        date: dayjs("2022-12-31"),
        blurb: "A silly stick figure of Nightly."
    },
    {
        category: ["animals"],
        alt: "lamb and rat",
        file: 'IMG_0564.PNG',
        date: dayjs("2022-12-31"),
        blurb: "My parents as their Zodiac animals. Zodiac signs are to my parents what horoscopes are to my generation, and they place a lot of meaning in which year and animal you were born to. With this drawing, I wanted to honor my parent's relationship with themselves as well as their culture."
    },
    {
        category: ["people"],
        alt: "dancing feet",
        file: 'IMG_0563.PNG',
        date: dayjs("2022-08-22"),
        blurb: "A study of dancing feet."
    },
    {
        category: ["people"],
        alt: "values and face places",
        file: 'IMG_0562.PNG',
        date: dayjs("2022-08-22"),
        blurb: "A study in face planes. My first time trying to draw what looks like a face using only values and no outlines. Using negative space to create the illusion of depth and form. "
    },
    {
        category: ["people"],
        alt: "russell from the gorillaz",
        file: 'IMG_0561.PNG',
        date: dayjs("2022-08-30"),
        blurb: "I was and still am a huge fan of the Gorillaz. This is a drawing of Russel I made when I had a couple hours to kill on an airplane."
    },
    {
        category: ["people"],
        alt: "study in human body perspective",
        file: 'IMG_0560.PNG',
        date: dayjs("2022-08-24"),
        blurb: "A study of foreshortening of the human body. Was feeling inspired by Kim Jung Gi's artwork."
    },
    {
        category: ["people"],
        alt: "study of eyes",
        file: 'IMG_0559.PNG',
        date: dayjs("2022-08-25"),
        blurb: "A study of of eyes."
    },
    {
        category: ["people"],
        alt: "study of noses",
        file: 'IMG_0558.PNG',
        date: dayjs("2022-08-26"),
        blurb: "A study of side profile noses."
    },
    {
        category: ["people"],
        alt: "photo realistic hand",
        file: 'IMG_0557.PNG',
        date: dayjs("2022-09-07"),
        blurb: "My left hand. There are surprisingly a whole lot of colors in something as simple as skin."
    },
    {
        category: ["people"],
        alt: "blue and yellow man",
        file: 'IMG_0556.PNG',
        date: dayjs("2022-09-12"),
        blurb: "I wanted to capture a feeling, and was drawn in by this person's solemn expression. I'm also experimenting with a different color palette and different brushes."
    },
    {
        category: ["people"],
        alt: "night market girl with mask",
        file: 'IMG_0555.PNG',
        date: dayjs("2022-10-19"),
        blurb: "Drawing from a reference of night market photos taken by a friend who recently took a trip to Korea. COVID not really being "
    },
    {
        category: ["people"],
        alt: "portrait of me times three",
        file: 'IMG_0593.jpg',
        date: dayjs("2022-12-13"),
        blurb: "A portrait of me times three. I had watched this heart-wrenching movie called The Whale recently where the director had a Q&A afterwards and talked about how difficult it is in the era of social media to find nuance in the black and white. I loved how the movie built up every character's internal struggle/push and pulls, and I wanted to do a self portrait to explore these different characters in my story."
    },
    {
        category: ["people"],
        alt: "portrait of me times three 2",
        file: 'timesthree2.JPG',
        date: dayjs("2022-12-13"),
        blurb: "Another version of a portrait of me times three. The window frame is a quite literal representation of the constraints of these characters."
    },
    {
        category: ["nature"],
        alt: "monstera",
        file: 'monstera.jpg',
        date: dayjs("2022-10-20"),
        blurb: "A lettuce plant in the sun. This is another study of bold colors with minimal values and outlines."
    },
    {
        category: ["animals"],
        alt: "cat",
        file: 'IMG_0552.PNG',
        date: dayjs("2022-08-15"),
        blurb: "The fluffiest loaf of a cat."
    },
    {
        category: ["animals"],
        alt: "elephant",
        file: 'IMG_0551.PNG',
        date: dayjs("2022-08-15"),
        blurb: "An early study of an elephant. Started with the biggest shapes I could see and then went into the details."
    },
    {
        category: ["nightly", "animals"],
        alt: "nightly in the dark",
        file: 'IMG_0550.PNG',
        date: dayjs("2022-08-18"),
        blurb: "Impressionistic study of nightly in the shadows. She sometimes reminds of me of the wolf from Puss in Boots: The Last Wish."
    },
    {
        category: ["clothing"],
        alt: "yellow t-shirt on mannequin",
        file: 'IMG_0549.PNG',
        date: dayjs("2022-07-07"),
        blurb: "I'd wanted to draw this shirt ever since I moved to Bed Stuy. There was an unsuccessful clothing store next to where I used to live that I passed by almost every day. This shirt was always on display in the windows for the entire year I lived there and was never sold. The lightning and wrinkles always caught my eye for some reason."
    },
    {
        category: ["clothing"],
        alt: "study of friends shirt",
        file: 'IMG_0548.PNG',
        date: dayjs("2022-07-08"),
        blurb: "My friend was excited about a new shirt he'd gotten and I decided to draw it. Here I only use one color while trying to capture the different folds and wrinkles in clothing. It's interesting how clothes of different material fall in gravity, and this shirt was definitely a lighter summer shirt."
    },
    {
        category: ["clothing"],
        alt: "workwear",
        file: 'IMG_0547.PNG',
        date: dayjs("2022-07-07"),
        blurb: "Work wear shots featuring heavy denim material. I am honestly a big fan of workwear."
    },
    {
        category: ["places"],
        alt: "a day at the brooklyn museum",
        file: 'IMG_0546.PNG',
        date: dayjs("2022-10-07"),
        blurb: "I was getting into 5 point perspective drawings studying Kim Jung Gi's drawings, and I decided to challenge myself with a 10 point perspective. My friend and I had recently visited the Brooklyn Museum and after a day of creative stimulation, I sat down and tried to draw everything I remembered seeing. The giant KAWS in the back gets me everytime."
    },
    {
        category: ["places"],
        alt: "my parent's place",
        file: 'IMG_0545.PNG',
        date: dayjs("2022-08-10"),
        blurb: "I don't really call the place my parent's live at home, because I didn't grow up there. We moved a total of 7 times while my sister and I grew up in Queens, and it means that this new 'home' that my parents have designated can feel cold and empty at times."
    },
    {
        category: ["places"],
        alt: "5 point perspective of 1 bedroom",
        file: 'IMG_0543.PNG',
        date: dayjs("2022-07-31"),
        blurb: "My first 5 point perspective drawing. There was a bit of a learning curve about how common shapes were distorted by so many different vanishing points."
    },
    {
        category: ["places"],
        alt: "5 point perspective of burly",
        file: 'IMG_0542.PNG',
        date: dayjs("2022-08-28"),
        blurb: "Burly coffee shop. Great coffee great people. Had an iced americano."
    },
    {
        category: ["places"],
        alt: "3 panels of my refrigerator",
        file: 'IMG_0541.PNG',
        date: dayjs("2022-10-16"),
        blurb: "The contents of my refrigerator. A study of separating the foreground from the background and making things pop with intentional composition and colors."
    },
    {
        category: ["still"],
        alt: "xiao long bao",
        file: 'IMG_0540.PNG',
        date: dayjs("2022-10-20"),
        blurb: "a super raw iPad sketch of some shadows in some xiao long bao. And yes I ate them all."
    },
    {
        category: ["still"],
        alt: "sunny side eggs",
        file: 'IMG_0539.PNG',
        date: dayjs("2022-10-20"),
        blurb: "Crispy sunny side eggs."
    },
    {
        category: ["nature"],
        alt: "an abstract study of my plants",
        file: 'IMG_0538.PNG',
        date: dayjs("2022-10-19"),
        blurb: "A collection of foliage that I've gathered and hoarded over the past few years. I love using greens and yellows in my art."
    },
    {
        category: ["nature"],
        alt: "a blue tree",
        file: 'IMG_0536.PNG',
        date: dayjs("2022-12-20"),
        blurb: "If there was a way to capture a feeling completely and holistically in art, I don't think I'd continue making art. It was winter in NY, I was walking my dog, and I saw a tree that made me feel a little colder."
    },
    {
        category: ["places"],
        alt: "fisheye of my RAV4",
        file: 'back_seat.jpg',
        date: dayjs("2023-04-12"),
        blurb: "On a road trip from SF to NYC, I found some time to practice more fisheye perspectives."
    },
    {
        category: ["places"],
        alt: "pink highlighter of megabus scene",
        file: 'megabus.jpg',
        date: dayjs("2023-07-30"),
        blurb: "Megabus lights. I drew this in the dark on a 1AM redeye Megabus to NYC. The only color I had in my backpack was a pink highlighter, but I like how it contrasts with the dark values of the windows in this scene."
    },
    {
        category: ["still"],
        alt: "bmw motorbike",
        file: 'bmw.jpg',
        date: dayjs("2023-03-08"),
        blurb: "Motorcycle studies at the Munich BMW Welt Museum."
    },
    {
        category: ["people", "micro"],
        alt: "micro self portrait in green",
        file: 'mug.jpg',
        date: dayjs("2023-05-15"),
        blurb: "Mirrors were setup in the interactive part of an art museum so that people could draw self portraits of themselves. I see myself in this but also don't really at times."
    },
    {
        category: ["people"],
        alt: "large self portrait in HB",
        file: 'self_portrait.jpg',
        date: dayjs("2023-02-11"),
        style: {
            maxHeight: 800,
        },
        blurb: "Giant self portrait in HB."
    },
    {
        category: ["places"],
        alt: "abstract brooklyn bridge",
        file: 'brooklyn_bridge.jpg',
        date: dayjs("2023-05-01"),
        blurb: "In the night, the city skyline contains so much detail, with lights coming from every building window and reflections sparkling along the water. This drawing abstracts the night into simple shapes that make Brooklyn Bridge Park identifiable, but challenges the viewer to work for the bigger picture."
    },
    {
        category: ["places", "still"],
        alt: "messy table",
        file: 'cafe_du_monde.JPG',
        date: dayjs("2023-02-26"),
        blurb: "The accidentally beautiful composition of my messy dining table after coming back from a long trip. A fun exercise of following the lines until you can't follow them anymore."
    },
    {
        category: ["people"],
        alt: "camera man",
        file: 'camera.jpg',
        date: dayjs("2023-03-22"),
        blurb: "A collage of two frames of two different movies. One tells a feel-good story about an up and coming pop star, and another is a black and white murder crime mystery from the 90's."
    },
    {
        category: ["places"],
        alt: "a sunset in bushwick",
        file: 'IMG_0535.jpg',
        date: dayjs("2022-12-20"),
        blurb: "I used one hue and only tuned the brighness of the color to make sure the sunset really popped. Inspired by monet's sunrise paintings."
    },
    {
        category: ["people"],
        alt: "model in sitting pose",
        file: 'charcoal.jpg',
        date: dayjs("2023-03-19"),
        style: {
            maxHeight: 800,
        },
        blurb: "This is a large charcoal drawing of live model at my figure drawing class. I put down a midtone in the beginning and added/removed values as I worked on the piece."
    },
    {
        category: ["people", "micro"],
        alt: "micro sketch of an ear",
        file: 'ear.jpg',
        date: dayjs("2023-02-05"),
        blurb: "A micro drawing of an ear. I was experimenting with controlling my pencil strokes so that they are all parallel to each other, which gives the piece a really interesting brushed and soft look."
    },
    {
        category: ["people"],
        alt: "quick charcoal figures",
        file: 'figure.jpg',
        date: dayjs("2023-05-11"),
        blurb: "Four 1 min poses in charcoal.",
        style: {
            maxHeight: 700,
        },
    },
    {
        category: ["animals", "micro"],
        alt: "gorilla",
        file: 'IMG_9785.JPG',
        date: dayjs("2023-04-23"),
        style: {
            maxHeight: 700,
        },
        blurb: "The biggest silver back gorilla at the Amsterdam Zoo. I couldn't catch his name but he came up really close to the glass and sat still, almost as if he was asking for me to draw him."
    },
    {
        category: ["animals", "micro"],
        alt: "bingo bar scene",
        file: 'IMG_9786.JPG',
        date: dayjs("2023-04-23"),
        style: {
            maxHeight: 800,
        },
        blurb: "After a long day of museum and zoo hopping, we went to a drag bingo event. The top panel was drawn on the back of one the extra slips in between rounds in BIC."
    },
    {
        category: ["animals", "nightly"],
        alt: "nightly on the couch",
        file: 'nightly_moving.jpg',
        date: dayjs("2023-04-10"),
        blurb: "Nightly wanting to be closer to me. Nightly started to move during the sketch which is why you can see three ghostly outlines of Nightly's head as she inches closer towards me."
    },
    {
        category: ["animals", "nightly"],
        alt: "nightly sleeping with her eyes open",
        file: 'nightly_side.jpg',
        date: dayjs("2023-01-16"),
        blurb: "A side profile of Nightly sleeping with her eyes open."
    },
    {
        category: ["places"],
        alt: "a street corner",
        file: 'nyc_corner.jpg',
        date: dayjs("2023-02-16"),
        blurb: "A busy intersection in Brooklyn somewhere."
    },
    {
        category: ["nature", "still"],
        alt: "a leaf",
        file: 'plant.jpg',
        date: dayjs("2022-10-20"),
        blurb: "A single stem. So simple it could be a tattoo."
    },
    {
        category: ["nature", "places"],
        alt: "a picnic scene",
        file: 'shadows_philly.jpg',
        date: dayjs("2023-07-30"),
        blurb: "I'm starting to exercise drawing with my feelings more, instead of producing one-to-one copies of what I see in front of me. Nostalgia and peace seems to be central unifying themes in a lot of my art, and in this drawing I tried to evoke these simple emotions we associate often with childhood and sunny days and summer vacations. Maybe I gravitate towards this theme so that I can hold onto it in a material way."
    },
    {
        category: ["animals", "nightly"],
        alt: "nightly in perspective",
        file: 'nightly_side_2.jpg',
        date: dayjs("2023-06-29"),
        style: {
            maxHeight: 1000,
        },
        blurb: "The top panel is the first sketch of nightly that I started with. I wanted to dramatize the perspective to an unrealistic extent, and pushed her hind legs way into the back of the scene. Made using a Micron 0.5 and Copic Cool Grey C6-S."
    },
    {
        category: ["people"],
        alt: "a drawing of my sister and me as kids",
        file: 'siblings.jpg',
        date: dayjs("2023-04-02"),
        blurb: "A lot has changed these past 20 years but the big sister having the little brother's back has always been the one constant in my life I'm very grateful for. Happy national sibling day!"
    },
    {
        category: ["people", "micro"],
        alt: "a lithograph stamp of dad",
        file: 'stamp_boy.JPG',
        date: dayjs("2023-01-05"),
        style: {
            maxHeight: 400,
        },
        blurb: "Gifted to dad. There is a stamp in Korea that teachers give out to children who do well in school that says 참 잘했어요! (Very good job!) with a picture of a boy and girl. It's a tradition that existed when my parents were in school and still exist today, making it a common language that transcends generations of Koreans right?"
    },
    {
        category: ["people", "micro"],
        alt: "a lithograph stamp of mom",
        file: 'stamp_girl.JPG',
        date: dayjs("2023-01-05"),
        style: {
            maxHeight: 700,
        },
        blurb: "Gifted to mom. There is a stamp in Korea that teachers give out to children who do well in school that says 참 잘했어요! (Very good job!) with a picture of a boy and girl. It's a tradition that existed when my parents were in school and still exist today, making it a common language that transcends generations of Koreans right?"
    },
    {
        category: ["animals", "nightly"],
        alt: "nightly in three quarters",
        file: 'nightly_three_quarter.jpg',
        date: dayjs("2023-04-03"),
        style: {
            maxHeight: 800,
        },
        blurb: "A stunning three quarters pose by Nightly. BIC fine tip."
    },
    {
        category: ["still", "people", "micro"],
        alt: "fragmented skull",
        file: 'IMG_9784.JPG',
        style: {
            maxHeight: 500,
        },
        date: dayjs("2023-04-22"),
        blurb: "A micro sketch of a shattered skull."
    },
    {
        category: ["animals"],
        alt: "lithography of two birds sitting on branch",
        file: 'engagement.jpg',
        date: dayjs("2023-03-18"),
        blurb: "Made a lino stamp for friends who got recently engaged! I wanted to try a different medium and remembered having a lot of fun making rubber stamps for the first time at the local hackerspace. The small details were pretty tedious and hand crampy but some headphones and a good playlist always helps with getting in the flow."
    },
    {
        category: ["people"],
        alt: "a man with a cat on a rainy day",
        file: 'IMG_0534.jpg',
        date: dayjs("2022-08-11"),
        blurb: "In this painting I capture a feeling of comfortable loneliness and the relationship between an old man and his street cat companion."
    },
    {
        category: ["nature", "places"],
        alt: "waterfall",
        file: 'waterfalls.jpg',
        date: dayjs("2023-07-08"),
        blurb: "An abstract rendition of a waterfall."
    },
    {
        category: ["nature"],
        alt: "yellow trees in shenandoah",
        file: 'IMG_0533.jpg',
        date: dayjs("2022-07-31"),
        blurb: "I had recently went on a road trip to Shenandoah National park, and fall colors were on my mind. A study using mostly one color and trying to see what kind of feeling yellow evokes."
    },
    {
        category: ["nature"],
        alt: "waterfalls",
        file: 'IMG_0532.jpg',
        date: dayjs("2022-08-02"),
        blurb: "Waterfalls in Norway."
    },
    {
        category: ["places"],
        alt: "an idyllic scene in shinjuku",
        file: 'IMG_0531.PNG',
        date: dayjs("2022-08-18"),
        blurb: "Found a really lovely picture capturing a slice of life in Shinjuku. They're just so many details packed into this photo!"
    },
    {
        category: ["places"],
        alt: "hotel desk",
        file: 'hotel_desk.jpg',
        date: dayjs("2023-05-15"),
        blurb: "A simple sketch of a therapeutic art session after a long day."
    },
    {
        category: ["nature"],
        alt: "international peace garden",
        file: 'international_garden.jpg',
        date: dayjs("2023-05-15"),
        blurb: "Trees are notoriously difficult to draw, at least in my opinion, and here I'm experimenting with breaking down the leaves and form of the tree and leaves into more geometrical large shapes and shadows."
    },
    {
        category: ["animations"],
        alt: "three bouncing balls of different materials",
        file: '2.MP4',
        date: dayjs("2023-07-19"),
        blurb: "Three different balls of different masses. A study of squashing and stretching different materials and slow in/out timings. Study inspired by Toniko Pantoja's animation course."
    },
    {
        category: ["animations"],
        alt: "moving bouncing ball",
        file: '3.MP4',
        date: dayjs("2023-07-25"),
        blurb: "A study of a bouncing ball across two planes. Here I add a tail to explore secondary actions that adds some personality to the ball. Study inspired by Toniko Pantoja's animation course."
    },
    {
        category: ["animations"],
        alt: "waving flag",
        file: '1.mp4',
        style: {
            height: 400,
        },
        date: dayjs("2023-07-24"),
        blurb: "An easy way to study how the energy flows through a material is by drawing a flag flapping in the wind. This is an isolated study of how C and S curves may present themselves in a 3D object. Study inspired by Toniko Pantoja's animation course."
    },
    {
        category: ["animations"],
        alt: "in betweening hammer animation study",
        file: 'hammer.mp4',
        style: {
            height: 400,
        },
        date: dayjs("2023-08-02"),
        blurb: "In-betweening with context study. This is a common assignment in animation classes, where you start out with two key frames and fill in the frames in between. The two starting frames here are the hammer at the height of its potential energy and the last frame where it's resting on top of the nail. In order to exaggerate the thunk and weight of the hammer crashing down, there is a squash happening on impact and a slow out to regain its original form. Study inspired by Toniko Pantoja's animation course."
    },
    {
        category: ["animations"],
        alt: "pendulum",
        file: 'arcs.mp4',
        style: {
            height: 300,
        },
        date: dayjs("2023-08-02"),
        blurb: "Arcs are useful when something rotates or moves in space. This study explores favoring key frames and slow ins and outs. Study inspired by Toniko Pantoja's animation course."
    },
    {
        category: ["animations"],
        alt: "fish swimming",
        file: 'fish.MP4',
        style: {
            height: 400,
        },
        date: dayjs("2023-08-04"),
        blurb: "One of the things I'm finding most difficult to grasp about animation is how to translate real life timing into a rhythm on paper. Movement in real life can be boring and static at times, but uneven and interesting sometimes random movement can be really engaging to look at. Study inspired by Toniko Pantoja's animation course."
    },
    {
        category: ["animations"],
        alt: "arm throwing ball",
        file: 'arm_throw.MP4',
        style: {
            height: 400,
        },
        date: dayjs("2023-08-05"),
        blurb: "A single arm throwing a ball. Timing charts which you can see in a few frames were used to plan which parts of the animation needed more frames and slowed down and which could move quickly. Study inspired by Toniko Pantoja's animation course."
    },
    {
        category: ["people", "places"],
        alt: "two people in a subway car",
        file: 'subway.jpg',
        date: dayjs("2023-08-10"),
        blurb: "Two strangers in a subway car minding their own business. Thought it'd be interesting to draw these characters and the background in isolation and bring them together in a sort of collage. The colors and elements and pen styles inevitably clash, but is interesting to look at."
    },
    {
        category: ["nature"],
        alt: "nature in hudson yards",
        file: 'trees.jpg',
        date: dayjs("2023-08-10"),
        blurb: "Trees in two copic markers. Pockets of nature near Hudson Yards that are man-made and colorless."
    },
    {
        category: ["places"],
        alt: "collection of items in hudson yards",
        file: 'hudson.jpg',
        date: dayjs("2023-08-10"),
        blurb: "Foreground elements are indistinguishable from the background, and presents a hectic scene of city life. I wanted to overwhelm the viewer with elements that are in-your-face."
    },
    {
        category: ["animations"],
        alt: "walk cycle front and side profile",
        file: 'walkfrontside.MP4',
        style: {
            height: 400,
        },
        date: dayjs("2023-08-07"),
        blurb: "A study of the walk cycle as seen from the front and side. Any walking character goes through a walk cycle of contact → down → pass → up → contact → down → pass → up → ... Depending on the personality, shape, stride of the character there might be slight variations in each step of this walk, but generally the same rules are followed. Study inspired by Toniko Pantoja's animation course."
    },
    {
        category: ["animations"],
        alt: "walk cycle different attitudes",
        file: 'walkcycle.MP4',
        style: {
            height: 400,
        },
        date: dayjs("2023-08-08"),
        blurb: "By switching up the timing and body position of the characters in each part of the walk cycle, you can introduce secondary actions to give a little personality to the character. The leftmost stride bounces a extra beat by dipping lower during the up frame, giving it a more bouncy happy go lucky kind of attitude. The rightmost character is hunched over facing downwards, and its legs come up higher than normal to exaggerate the weight of each stomp. Study inspired by Toniko Pantoja's animation course."
    },
    {
        category: ["animations"],
        alt: "appeal study",
        file: 'appeals.PNG',
        style: {
            maxHeight: 800,
        },
        date: dayjs("2023-08-13"),
        blurb: "What makes a character appealing? It could be a combination of many subtle things, especially when doing a character study for something that is very much non-human like a floursack. Here I exaggerate emotions with body language, asymmetry, and other techniques like using tassles as hands to make the character relatable, expressive, and overall more interesting to look at. Study inspired by Toniko Pantoja's animation course."
    },
]

export const pieces: PieceType[] = _pieces.map((_piece) => ({
    ..._piece,
    id: _piece.file,
    file: getImgUrl(_piece.file),
    style: {..._piece.style}
})).sort((a, b) => b.date.diff(a.date))

const _categoryToPieces: Record<string, PieceType[]> = {
    all: pieces
}
pieces.forEach((piece) => {
    piece.category.forEach((category) => {
        _categoryToPieces[category] = [...(_categoryToPieces[category] ?? []), piece]
    })
})

export const categoryToPieces = _categoryToPieces

export const categories = [...Object.keys(categoryToPieces).sort((a,b) => a.localeCompare(b))]
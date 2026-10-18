import TraditionPage, { NICOLAU_2001, Term } from "../components/traditionPage"

// Sections are in the order they happen, from the first omens to the exhumation years later.
const SECTIONS = [
    {
        id: "omens",
        stage: "Before death",
        title: "Omens and Beliefs",
        paragraphs: [
            {
                pages: "107",
                text: <>Of someone who is dying, the Aromanians said that &ldquo;their ball of yarn is being wound up&rdquo; (<Term>îl&apos;i si-adună gl&apos;iemlu</Term>), as if a life were a thread coming to its end.</>,
            },
            {
                pages: "107",
                text: <>Death announced itself in dreams. Dreaming of yourself dressed in white and flying towards the sky, or of the walls of your house collapsing, was a sign of death; a black flag seen in a dream foretold the death of a young person, and pulling out one of your own teeth meant losing someone close.</>,
            },
            {
                pages: "107",
                text: <>Those who died on a Sunday or during Holy Week were considered blessed. The soul of the dead was believed to be taken by the angel of death, Haron.</>,
            },
            {
                pages: "107",
                text: <>The soul of someone who was murdered and left unburied was thought to wander everywhere, while their blood cried out until the body had completely decayed. Anyone who died on the road was carried to the nearest cemetery or buried on the spot where they died.</>,
            },
        ],
    },
    {
        id: "dying",
        stage: "The hour of death",
        title: "The Last Moments",
        paragraphs: [
            {
                pages: "107",
                text: <>A dying person was never left alone. Whoever kept watch had to make sure their head stayed straight, because a dead person with a tilted head would &ldquo;pull&rdquo; another member of the family after them. If the dead seemed to smile, or their neck did not stiffen, it was a sign that someone else in the family would soon die.</>,
            },
            {
                pages: "108",
                text: <>The family had to be careful not to mourn too loudly at the moment of death, because their crying could turn the soul back. When someone had a hard death, the body was turned to face the east and their clothes were given at once to a poor person, who had to say <Term>Dum&apos; l&apos;eartâ-lu!</Term> (&ldquo;May God forgive him!&rdquo;).</>,
            },
            {
                pages: "108",
                text: <>When the head of the family died, an iron object was put into the fire for the health of those left behind, and the family brought the fire tongs to their mouths so that they would be &ldquo;as strong as iron&rdquo;.</>,
            },
            {
                pages: "107-108",
                text: <>Children needed special protection. If someone in the house died in the month a child was born, the child was locked in a room with a key hanging from its belt. Relatives born in the same month as the dead person were not allowed to see the body; if they wished to attend the funeral, they had to carry a key in their pocket for forty days.</>,
            },
        ],
    },
    {
        id: "preparing",
        stage: "The first day",
        title: "Preparing the Body",
        paragraphs: [
            {
                pages: "108",
                text: <>Once the dying person had given up their soul, an old woman closed their eyes and tied their jaw shut, with black cloth for the old and white cloth for the young. The same woman then tied their hands and feet.</>,
            },
            {
                pages: "108",
                text: <>The body was washed by an elderly person of the same sex, who also dressed it and received clothes in return for this service. The water from the washing was thrown out as far from the house as possible.</>,
            },
            {
                pages: "108",
                text: <>The dead were buried in their wedding clothes, with the buttons left undone. Money, wheat, and small gifts were placed in their pockets for other relatives already in the next world, to whom they were sending greetings (<Term>ncl&apos;inâciuni</Term>). A coin was placed in their mouth, a flour cake at their breast, and their nose and ears were stopped with incense.</>,
            },
            {
                pages: "108",
                text: <>The body was laid out on a woven rug on the floor of the best room, with its feet towards the door and candles burning at its head and feet, and the room was censed with incense.</>,
            },
            {
                pages: "109",
                text: <>The coffin was lined with a woollen blanket, a white cloth longer than the coffin, and a pillow, and the body was laid in it by men from outside the family. The mother or wife measured the body with a black thread and placed the thread in the coffin, along with the cloths that had tied the jaw, hands, and feet. A shepherd was buried with his crook.</>,
            },
            {
                pages: "108",
                text: <>If the young person who died was engaged, the kerchiefs given by the girl&apos;s family at the betrothal were placed in the coffin.</>,
            },
        ],
    },
    {
        id: "mourning",
        stage: "From the first day",
        title: "A House in Mourning",
        paragraphs: [
            {
                pages: "108",
                text: <>In the room where the dead lay, the mirrors were covered with black cloth or turned to face the wall; otherwise the dead risked becoming a <Term>vârcolac</Term> (a werewolf, or restless undead spirit). The door of the room stayed open until the body left the house.</>,
            },
            {
                pages: "108",
                text: <>A black flag was hung at the gate and a black cloth at the door, where it remained for six months. The customary words of condolence were <Term>Bană la voi!</Term> (&ldquo;Long live you!&rdquo;).</>,
            },
            {
                pages: "108",
                text: <>The men of a mourning family did not shave for forty days. Women wore black clothes and a black headscarf, and a widow did not go to celebrations or pay visits for three years.</>,
            },
            {
                pages: "108",
                text: <>If the dead was young, their mother was not supposed to attend the burial, because her tears would draw the soul back into the body, and for forty days it would see everything happening around it.</>,
            },
        ],
    },
    {
        id: "wake",
        stage: "The nights before the funeral",
        title: "The Wake",
        paragraphs: [
            {
                pages: "109",
                text: <>The dead were watched over day and night. No one lamented after sunset, so that the soul would not find it hard to leave the body and become a <Term>vârcolac</Term>, and two women never lamented at the same time.</>,
            },
            {
                pages: "109",
                text: <>Those who came to the wake were given coffee without sugar, so that Haron, the angel of death, would not &ldquo;get a taste&rdquo; for the house and come back. Visitors could &ldquo;send&rdquo; objects to their own dead by placing them in the coffin, and the coins they left were shared among the gravediggers. Everyone washed their hands when leaving.</>,
            },
            {
                pages: "109",
                text: <>At the wake, women sang special songs for the dead, which they composed themselves from the person&apos;s life: how many children they had left behind, and how those children had been left alone in the world.</>,
            },
            {
                pages: "109",
                text: <>No one was allowed to step over the dead. If an animal passed over the coffin, the dead person &ldquo;became shadowed&rdquo;: apparitions would start to appear on the walls of the house, and the dead would turn into a shadow. If a cat jumped over the coffin, the dead became a <Term>vârcolac</Term>.</>,
            },
            { subheading: "The Vârcolaci (Werewolves)" },
            {
                pages: "109",
                text: <>To stop the dead from becoming a <Term>vârcolac</Term>, the grave was guarded at all times. The dead who had a bleeding wound that had not been scalded were also believed to become <Term>vârcolaci</Term>, and their bodies did not decay.</>,
            },
            {
                pages: "109",
                text: <>After sunset, the <Term>vârcolaci</Term> went from house to house, making noise and moving objects, though they could not leave their graves on Saturday nights. They could appear as a dog, a cat, a hen, a pan, a black tree stump, a bluish flame, or a spark.</>,
            },
            {
                pages: "109",
                text: <>Sometimes a <Term>vârcolac</Term> came back home in its old form and fathered children with its former wife. These children, called <Term>abraşi</Term>, had very yellow skin and hair, and only they had full power over the <Term>vârcolaci</Term>: they could shoot them if they caught them outside their graves. Holy water and quicklime were thrown into a <Term>vârcolac</Term>&apos;s grave.</>,
            },
            {
                pages: "110",
                text: <>Nicolau records a story from Kruševo: a few years earlier, a young man named Ilio died, and word soon spread that he had become a <Term>vârcolac</Term> who came home every night, throwing pots about and riding his horse. His family found no peace until they paid an Albanian about thirty francs to hunt him down, which he did after several nights.</>,
            },
        ],
    },
    {
        id: "funeral",
        stage: "The third day",
        title: "The Funeral",
        paragraphs: [
            {
                pages: "110",
                text: <>The funeral took place three days after death, never on a Monday. As the dead left the house, water was thrown after them so they would not be thirsty in the other world. The coffin was carried out by four men from outside the family.</>,
            },
            {
                pages: "110",
                text: <>Once the coffin was out, an old woman threw something breakable after it, saying <Term>S-moarâ moartea!</Term> (&ldquo;May death die!&rdquo;) or <Term>Aestâ moarti şi-altâ nu!</Term> (&ldquo;This death and no other!&rdquo;). After the service before leaving for the cemetery, an old woman placed a gold coin in the dead person&apos;s mouth.</>,
            },
            {
                pages: "110",
                text: <>The procession was led by a woman from outside the family, carrying the <i>colivă</i> (boiled wheat for the dead). It stopped at every crossroads, where the priest said short prayers and the family threw coins. As they carried the coffin, people touched iron so that they would be strong as iron.</>,
            },
            {
                pages: "110",
                text: <>At the last farewell in the church, the family kissed the icon and the dead person&apos;s forehead and cheek; the women of the family kissed the forehead, and unmarried girls kissed the hand. A relative took two grains of wheat from the <i>colivă</i> and put them in a pocket, in order to dream of the dead that night.</>,
            },
            {
                pages: "110",
                text: <>After the service, the dead was covered from the waist down with a white cloth on which the priest drew the bones of a skeleton in charcoal. At the graveside this cloth was laid over the body, and two coins were put in the dead person&apos;s pocket to pay Saint Peter at the gate.</>,
            },
            {
                pages: "110",
                text: <>Leaving the cemetery, an old woman handed out the <i>colivă</i>, and the mourners washed their hands at the cemetery fountain. On the way back, a woman met the procession holding a shovel of burning coals and a jug of water, and everyone washed their hands over the coals.</>,
            },
            { subheading: "The Funeral Meal" },
            {
                pages: "110",
                text: <>The funeral meal (<i>praznic</i>) consisted of boiled wheat, bread, <Term>rachiu</Term> and wine, and those who ate said <Term>Sâ-l&apos;i si aflâ!</Term> (&ldquo;Let him be found!&rdquo;). Pilaf was forbidden, so that deaths would not multiply in the family. The family of the dead did not eat, and each guest received a towel or a handkerchief.</>,
            },
        ],
    },
    {
        id: "forty-days",
        stage: "Days 3 to 40",
        title: "The Forty Days",
        paragraphs: [
            {
                pages: "110",
                text: <>No one went to the grave for two days after the funeral, &ldquo;so that the dead could settle in well&rdquo;. On the third day, the family went after sunset with flowers, candles and water, and an old woman sprinkled the grave with water from head to foot.</>,
            },
            {
                pages: "111",
                text: <>For three evenings, a slice of bread and a plate of food, and sometimes a bottle of water, were set out where the dead had lain. For three days their place was kept at the table, and at every meal the eldest of the family spilled a spoonful of food on the floor, saying <Term>Ti morţâ</Term> (&ldquo;For the dead&rdquo;), to which the others answered <Term>Sâ-l&apos;i si aflâ</Term>.</>,
            },
            {
                pages: "111",
                text: <>The soul was believed to stay in the house for forty days. During that time a candle burned in the house, the mirrors stayed covered, and the family did not change their underclothes, so as not to dream of the dead. A widow did not change her shirt for forty days, to keep her husband from appearing in her dreams.</>,
            },
            {
                pages: "111",
                text: <>Once the body had left, the room was cleaned and smoked with burning cedar wood. A red flag was placed on the grave of a young person. Those killed by lightning, unbaptised children, and those who died in battle were taken straight to the cemetery, without a church service.</>,
            },
            {
                pages: "107",
                text: <>A stillborn child remained unbaptised and was buried without a priest, candles or services, at the far edge of the cemetery, and no memorials were held for it.</>,
            },
        ],
    },
    {
        id: "remembering",
        stage: "Up to seven years",
        title: "Remembering the Dead",
        paragraphs: [
            {
                pages: "111",
                text: <>Memorials (<i>pomeni</i>) were held at 3, 9, 20 and 40 days, at 3 and 6 months, and at one year, a year and a half, and three years. No one worked on those days. For the memorials, cakes of chickpea flour spread with honey were made, and pie was handed out at crossroads for the souls of the dead.</>,
            },
            {
                pages: "111",
                text: <>At the one-year memorial, the eldest son broke a loaf of bread over his head and asked God&apos;s forgiveness for his father&apos;s sins. The dead who were not remembered regularly appeared to their relatives in dreams, or became <Term>vârcolaci</Term>.</>,
            },
            {
                pages: "111",
                text: <>At the memorial held two weeks before Saint Theodore&apos;s Day, women did not wash their hair, because the dead might get tangled in it and take them away. On Saint Lazarus&apos; Day, small ring-shaped breads were given away for the dead.</>,
            },
            {
                pages: "109, 111",
                text: <>Three years after the burial, the body was exhumed and the bones were gathered in a cloth sack and sprinkled with oil. If the body had not decayed, it was believed the dead had committed grave sins: new memorials were held, candles lit, oil taken to the church, and the women of the family cleaned the church, and the next exhumation was made after six years. At seven years, the washed bones were placed in a common grave.</>,
            },
            { subheading: "Laments" },
            {
                pages: "111",
                text: <>Laments (<i>bocete</i>) were sung in both Aromanian and Greek. Nicolau&apos;s collection includes laments for a young girl, for a student, for a son, for when the coffin leaves the house, and for when the dead are exhumed.</>,
            },
            {
                title: "From a lament for a young girl",
                pages: "111",
                verse: {
                    original: [
                        "La ţinţi şeasi marmurâ,",
                        "Iu doarmi feata singurâ,",
                        "Singurâ feata ş-lândzidâ,",
                        "Lândzidâ lea ş-isusitâ.",
                    ],
                    translation: [
                        "By the five or six marble stones,",
                        "where the girl sleeps alone,",
                        "alone, the girl, and ill,",
                        "ill, and betrothed.",
                    ],
                },
            },
        ],
    },
]

export default function Death() {
    return (
        <TraditionPage
            title="Aromanian Death and Burial Traditions"
            intro="Death, like birth and marriage, was surrounded by rituals meant to help the soul leave this world peacefully and to protect the living, from the first omens to the memorials held years later."
            sections={SECTIONS}
            source={NICOLAU_2001}
        />
    )
}

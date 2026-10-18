import TraditionPage, { NICOLAU_2001, Term } from "../components/traditionPage"

// Sections are in the order they happen, from conception to the child's first years.
const SECTIONS = [
    {
        id: "conception",
        stage: "Before birth",
        title: "Conception and Pregnancy",
        paragraphs: [
            {
                pages: "59",
                text: <>Having many children was historically common. The birth of a boy was traditionally met with greater joy, although daughters were also considered a source of good fortune.</>,
            },
            {
                pages: "59",
                text: <>Fathers generally hoped for a first-born son to carry on their own father&apos;s name, while mothers hoped for a daughter to carry on their mother&apos;s name.</>,
            },
            {
                pages: "59-60",
                text: <>Women who wished to avoid or end a pregnancy, or who struggled with infertility, turned to a wide range of folk remedies and rituals: carrying particular objects, visiting a midwife for a special massage, undergoing heat treatments, or making pilgrimages and vows at church.</>,
            },
            {
                pages: "61",
                text: <>The community also held many beliefs about how the timing of conception shaped the child. Children conceived on a Monday were thought to be born beautiful, healthy, and intelligent, while conception on a Saturday was believed to bring serious misfortune such as blindness or lameness.</>,
            },
            { subheading: "Guessing the Child's Sex" },
            {
                pages: "61",
                text: <>A belly shaped like an egg, more pointed at the front, meant a boy, and a boy was said to move more towards the right. If the mother&apos;s lips and eyes swelled during pregnancy, or her face became very blotchy, she would have a girl.</>,
            },
            {
                pages: "61",
                text: <>Many small tests were used to find out. A sieve was rolled across the floor: if it landed with the mesh facing up, the baby was a boy. A bird&apos;s breastbone was placed in hot ashes: if its two sides moved closer together, it was a boy, and if they moved apart, a girl. Salt or flour was sprinkled on the mother&apos;s head without her knowing: if she then touched her nose it was a boy, and if she touched her neck, a girl.</>,
            },
            { subheading: "During the Pregnancy" },
            {
                pages: "61",
                text: <>A pregnant woman was given everything she wanted and her every whim was granted, but she was not supposed to announce or talk about her condition. She kept to herself as much as possible, avoided the company of men, and stayed away from the place where cloth was being warped for weaving.</>,
            },
            {
                pages: "61-62",
                text: <>Her everyday actions were thought to shape the birth. If she stepped in ashes or other dirty places, the baby would be born with the cord around its neck; if she put wood on the fire thick end first, it would be born feet first; and if she ate twin fruits or eggs with two yolks, she would have twins. A pregnant woman could not act as a midwife, because she would take on the pains of the woman giving birth.</>,
            },
        ],
    },
    {
        id: "birth",
        stage: "Day 1",
        title: "The Birth",
        paragraphs: [
            {
                pages: "62",
                text: <>The moment labor began was kept as discreet as possible, with a household member quietly fetching the midwife. Upon entering, the midwife performed a small ritual with a wet cloth on the mother&apos;s back to ease the delivery.</>,
            },
            {
                pages: "62",
                text: <>While his wife gave birth, the husband left the house and only came back once it was over. Before the birth began, the mother kissed the four corners of the room. She gave birth on the floor, on new bedding, in front of a fire that was kept burning the whole time, and without taking off her dress.</>,
            },
            {
                pages: "62",
                text: <>To speed a difficult labor, objects such as an egg, a shuttle, or a &ldquo;thunderstone&rdquo; were passed through the mother&apos;s shirt while formulas were recited comparing the ease of the object&apos;s passage to the child&apos;s birth.</>,
            },
            {
                pages: "63",
                text: <>After the birth, the mother performed several ritual acts, such as stepping over a tray of burning coals while declaring she had &ldquo;passed through fire and was not burned&rdquo; (<Term>Tricui pritu focu ș-nu mi-arșiu</Term>).</>,
            },
            {
                pages: "63",
                text: <>The midwife then walked around the new mother making the sign of the cross in the air with an axe. Each time, the two exchanged the words <Term>Ţi tal&apos;i?</Term> (&ldquo;What are you cutting?&rdquo;) and <Term>Ţâ tal&apos;iu utenţâli</Term> (&ldquo;I am cutting your headaches!&rdquo;).</>,
            },
            {
                pages: "63",
                text: <>The midwife tied a red-and-white belt around the new mother&apos;s belly so that her heart would not &ldquo;fall down&rdquo;, and attached a garlic clove and a necklace of red and white beads, wrapped in a handkerchief, to her knit cap to prevent headaches. She then announced the birth from the window or doorway, where children waited to carry the news to the father and the rest of the village in exchange for a small reward.</>,
            },
            {
                pages: "63",
                text: <>It is said that through birth, a woman rids herself of all the sicknesses and illnesses she has accumulated in her life.</>,
            },
        ],
    },
    {
        id: "newborn",
        stage: "Days 1–3",
        title: "Caring for the Newborn",
        paragraphs: [
            {
                pages: "64-65",
                text: <>Until its first bath, the baby was called <Term>tecnu</Term>; from then until the baptism it was called <Term>ghifticu</Term> or <Term>turcaciu</Term>, among other names. Until it was baptised, no one made the sign of the cross over it, picked it up in their arms or kissed it.</>,
            },
            {
                pages: "65",
                text: <>Salt, oil and a silver coin were put in the first bath. Afterwards the baby was dusted with salt and stayed &ldquo;in salt&rdquo; for anywhere from twelve hours to three days, until the midwife wiped it off and bathed the child again.</>,
            },
            {
                pages: "65",
                text: <>In the first swaddling, the midwife sewed in the father&apos;s wedding ring; if twins were born, the mother&apos;s ring was sewn into the second baby&apos;s swaddling. When the child stopped being swaddled, the ring went back to the icon, ready for the next child.</>,
            },
            {
                pages: "65",
                text: <>For the first three days, the baby&apos;s sex was kept secret: if it was a girl, people said it was a boy, and the other way around. The moon was not allowed to &ldquo;see&rdquo; the baby&apos;s nappies until it was a year old, and a child was not to look in a mirror before the age of three.</>,
            },
            {
                pages: "67",
                text: <>The placenta was censed with incense by the father&apos;s sister and buried deep in a clean place, because if animals ate it, the child would become a <Term>vârcolac</Term> (a werewolf). A baby born with a caul (part of the membrane still on its head) was considered lucky for life.</>,
            },
            { subheading: "Protection from the Evil Eye" },
            {
                pages: "65-66",
                text: <>Babies were thought to catch the evil eye very easily, and the more they were cuddled and admired, the easier it was. When the godfather saw the baby for the first time, he spat three times in its ears and pinned a coin to its cap. Some families pricked a small star on the baby&apos;s forehead with a needle as protection.</>,
            },
            {
                pages: "66",
                text: <>To find out who had cast the evil eye, an old woman made the sign of the cross with a burning coal over a bowl of &ldquo;silent water&rdquo; (water carried from the well without speaking), dropped the coal in, and named everyone who might have done it. The person at whose name the coal sank was the one. The child was then washed with the water and given three sips of it.</>,
            },
            { subheading: "When Children Did Not Survive" },
            {
                pages: "67-68",
                text: <>Families who had lost several children took special measures. The mother might pass the newborn out through the window to the godfather, who took it straight to church before it had even nursed; or a relative would leave the baby on the road to the church, and the first person to find it had to take it there and baptise it. Some mothers bought the baby&apos;s clothes with money borrowed from relatives, or had it made a blood brother of several children whose parents were still alive.</>,
            },
        ],
    },
    {
        id: "fates",
        stage: "Night 3",
        title: "The Fates and the Feast",
        paragraphs: [
            {
                pages: "69",
                text: <>On the third night after birth, the Aromanians believed that the Fate-Spirits (<Term>Ursitoarele</Term>), known by names such as <Term>Mire</Term>, <Term>Albe</Term>, <Term>Hărioase</Term>, and <Term>Muşate</Term>, visited the newborn to decide its destiny.</>,
            },
            {
                pages: "69",
                text: <>The Mire were imagined as three young women dressed in white, who waited in gardens and under the eaves of houses. Anyone who saw them that night had to cross themselves, say a prayer and cough, so as not to step on them. The third Mire was the most powerful, because her wish always came true, and the spirits sometimes left a mark on the baby&apos;s nose or cheeks.</>,
            },
            {
                pages: "69-70",
                text: <>Doors were left open that night, and a special feast, &ldquo;the table of Saint Mary&rdquo; (<Term>masa ali Stâ-Mârii</Term>), was prepared in their honor with breads, a roast lamb, and other dishes, some of which were deliberately set aside for the visiting spirits.</>,
            },
            {
                pages: "69-70",
                text: <>A woman whose parents were both still alive broke a special cake, <Term>turta ali Stâ-Mârii</Term> (&ldquo;Saint Mary&apos;s cake&rdquo;), over the head of a boy whose parents were also alive. That boy was believed to keep a kind of authority over the newborn for the rest of his life. Every crumb of the cake and every dish on the table had to be finished, or the child would grow up to be a thief.</>,
            },
            {
                pages: "70",
                text: <>Objects such as a pen, a coin, and a pair of pliers were placed on the infant&apos;s pillow so the baby might symbolically &ldquo;choose&rdquo; a future profession. Under a boy&apos;s head people also put money, books, inkwells and pens, and under a girl&apos;s, needles, thimbles and scissors.</>,
            },
        ],
    },
    {
        id: "baptism",
        stage: "First Sunday",
        title: "Naming and Baptism",
        paragraphs: [
            {
                pages: "71",
                text: <>Until baptism, the child&apos;s name was kept strictly secret, in some cases even from the parents, since revealing it early was believed to endanger the infant&apos;s life.</>,
            },
            {
                pages: "71",
                text: <>For a boy, the godfather typically chose a name from the father&apos;s family (or gave his own name); for a girl, the godmother chose a name from the mother&apos;s family.</>,
            },
            {
                pages: "71",
                text: <>The bond between godparents and godchildren was taken very seriously: their families were forbidden to marry each other for nine generations, and a godfather who was not invited to baptise the child could curse it. The godparents of the baptism usually became the godparents of the child&apos;s wedding too.</>,
            },
            {
                pages: "71",
                text: <>Baptism customarily took place on the first Sunday after birth, or within a month if the godfather was away.</>,
            },
            {
                pages: "71",
                text: <>The christening procession, called a <Term>taifă</Term>, brought the child to church. The priest received the infant, spat lightly behind its ear to protect it from catching cold, and pronounced its name, which children then announced throughout the village for a small payment.</>,
            },
            {
                pages: "71",
                text: <>On the way to church, the baby was carried by a recently married woman, so that she in turn would have a child.</>,
            },
            {
                pages: "72",
                text: <>On the way home, the godfather carried the baptismal candle along with the child. If the candle went out on the way, it was read as an omen that the child&apos;s life would be short. On the way home, the godfather also stopped at the houses of three relatives on the father&apos;s side.</>,
            },
            {
                pages: "72",
                text: <>At the doorway, the godfather handed the newly christened baby to the mother with the traditional words marking the child&apos;s passage to a Christian state: <Term>Turcu-ni dâdeși, creștinu ț-aducu</Term> (&ldquo;You gave me a Turk, I bring you back a Christian&rdquo;).</>,
            },
        ],
    },
    {
        id: "lauzia",
        stage: "Days 1–40",
        title: "The Forty-Day Confinement (Lăuzia)",
        paragraphs: [
            {
                pages: "63",
                text: <>For forty days after birth, the new mother (<Term>lăuza</Term>) was considered extremely vulnerable, &ldquo;like glass&rdquo;. She could not wear a cross or pray before icons, could not change her clothes, and could not leave the house after sunset without covering herself completely, or the mountains would tremble. Before the baptism she could not be left alone with the baby, because evil spirits (<Term>Ginții</Term>) would come and eat the newborn.</>,
            },
            {
                pages: "63",
                text: <>She was so fragile that if she visited the neighbours, all the glass in their house would break. Two new mothers were not supposed to meet, especially if they had given birth on the same day; if they did, they had to exchange rings.</>,
            },
            {
                pages: "63",
                text: <>Sharp objects, ropes, garlic, and red-and-white threads were placed around her bed and doorway to ward off evil spirits and the <Term>Umbre</Term>, evil shades believed to threaten mother and child.</>,
            },
            {
                pages: "63",
                text: <>Mirrors in the room were covered, and the space was censed with incense every night during this period.</>,
            },
            {
                pages: "68",
                text: <>Many beliefs surrounded breastfeeding. The first feed took place twenty-four hours after the birth, at sunrise, with the mother holding a sieve with a loaf of bread in it on her head. To keep her milk, she wore a silver ring around her neck, never handed anything directly to anyone (she put it on the ground instead), and covered the windows at nightfall so that her milk could not be &ldquo;stolen&rdquo;.</>,
            },
            {
                pages: "64",
                text: <>The first day after birth was closed to visitors. From the second day on, visitors, mostly women bearing small pastries, began to come, though no one shook hands with the new mother during this period out of concern for purity.</>,
            },
            {
                pages: "64",
                text: <>At the end of the forty days, mother and child, freshly washed and dressed, went together to church for a blessing.</>,
            },
        ],
    },
    {
        id: "first-year",
        stage: "The first years",
        title: "First Milestones",
        paragraphs: [
            {
                pages: "72",
                text: <>When the baby&apos;s first teeth came through, wheat, chickpeas and maize were boiled, with the words <Term>Cum creapâ gârnul, s-creapâ ş-dinţâl&apos;i</Term> (&ldquo;As the grain bursts open, so may the teeth burst through&rdquo;).</>,
            },
            {
                pages: "72",
                text: <>When the child started to walk, a few small sticks were tied on its back and it was led three times around a tree.</>,
            },
            {
                pages: "72",
                text: <>When the child was weaned, the embers in the hearth were put out and set aside, to be lit again when the next child was born.</>,
            },
        ],
    },
]

export default function Birth() {
    return (
        <TraditionPage
            title="Aromanian Birth Traditions"
            intro="Among the Aromanians, birth was surrounded by an extensive web of beliefs and rituals meant to protect mother and child through every stage, from conception and delivery to baptism and the end of the forty-day confinement."
            sections={SECTIONS}
            source={NICOLAU_2001}
        />
    )
}

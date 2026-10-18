import Link from "next/link"
import BackToTop from "../components/backToTop"
import { SectionHeading } from "../components/learnPage"
import { TraditionHeader, NICOLAU_2001, Term } from "../components/traditionPage"

const JURNALUL_2006 = {
    title: "Tradiţii şi bucate aromâneşti",
    author: "Mara Răducanu and Anna Borca",
    publisher: "Jurnalul",
    year: 2006,
    url: "https://jurnalul.ro/timp-liber/culinar/traditii-si-bucate-aromanesti-15232.html",
}

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]

// Dishes from the Jurnalul article, each with its full recipe (rewritten from the article).
// `aromanian` marks names written in Aromanian rather than Romanian; `id` is the recipe's anchor on the page.
const DISHES = [
    {
        id: "pita",
        name: "Pita",
        aromanian: true,
        english: "Layered pie",
        description: "The dish no Aromanian table was without: thin sheets of dough brushed with fat, stacked, and baked around a filling. It was often compared to a pizza in looks.",
        summary: ["Nettles, spinach, sorrel or leeks", "Sheep's cheese", "Minced meat and onion", "Sweet pumpkin with milk and vanilla"],
        recipe: {
            title: "Pita with spinach",
            ingredients: [
                { heading: "For the dough", items: ["600 g flour", "350 g margarine or butter", "½ glass of lukewarm water", "½ teaspoon salt", "1 teaspoon vinegar"] },
                { heading: "For the filling", items: ["1 kg spinach (or sorrel, or nettles)", "300 g sheep's telemea cheese", "5 eggs", "200 g yogurt or buttermilk", "100 ml oil"] },
            ],
            steps: [
                "Sift the flour onto a board. In the middle, add a walnut-sized piece of margarine, the vinegar and the salt, mix them in, then add the lukewarm water little by little until the dough is fairly firm and forms small bubbles. Cover it and let it rest for 30–40 minutes.",
                "Divide the dough in two and keep one half covered. Roll the other half into a log, cut it into 14–15 pieces, and roll each piece into a sheet about the size of a small plate.",
                "Melt some margarine. Stack the sheets one on top of the other, brushing each one with margarine, except the top one. Put the stack on a floured plate in the fridge, and do the same with the second half of the dough.",
                "For the filling, boil the spinach, drain it well and chop it finely on a wooden board. Cook it briefly in hot oil to let the water out, then let it cool and mix in the grated cheese, the beaten eggs and the yogurt.",
                "Roll out the first stack of dough into a greased baking tray, spread the filling over the middle, cover it with the second stack, and bake it in a preheated oven.",
            ],
            variants: [
                {
                    title: "Leek filling",
                    items: ["Leeks", "A cup of milk", "Eggs and sheep's cheese", "A little oil"],
                    method: "The leeks don't need boiling. Wash and chop them, then cook them with a little oil and a cup of milk until soft. Let them cool and mix in the eggs and the cheese.",
                },
                {
                    title: "Meat filling",
                    items: ["1 kg lean minced beef or pork", "3–4 eggs", "2–3 onions", "A glass of milk", "Salt and pepper"],
                    method: "Fry the minced meat together with the chopped onions and let it cool. Then mix it well with the eggs, the milk, salt and pepper.",
                },
                {
                    title: "Pumpkin filling (sweet)",
                    items: ["1.5 kg pumpkin", "A glass of milk", "Sugar to taste", "1 vanilla pod", "50 g butter"],
                    method: "Peel the pumpkin, remove the seeds and grate it coarsely. Soften it with a little water, then cook it in the milk until tender. Sweeten it, add the vanilla and the butter, and keep it on the heat until it is thick and dry, like mashed potatoes.",
                },
            ],
        },
    },
    {
        id: "pita-crescuta",
        name: "Pita crescută",
        english: "Raised pita",
        description: "A taller version made with a yeasted dough, laid in four sheets with crumbled sheep's cheese and dabs of fat between them, then baked hot until it rises.",
        summary: ["Flour and yeast", "Milk", "Sheep's cheese", "Butter or margarine"],
        recipe: {
            ingredients: [
                { items: ["500 g flour", "1 packet of yeast", "250 ml milk", "1 tablespoon salt", "500 g sheep's cheese", "250 g margarine or butter"] },
            ],
            steps: [
                "Make a starter from the lukewarm milk, the yeast and one or two tablespoons of the flour. Mix well and leave it to rise for 15–30 minutes.",
                "Mix the rest of the flour with a walnut-sized piece of margarine and the starter. Knead it and leave it to rise for two hours.",
                "Grease a deep baking tray with margarine and divide the dough into four parts.",
                "Roll out the first sheet and lay it in the tray. Scatter cheese and small pieces of margarine over it here and there. Lay the second sheet on top and do the same, and so on with the rest, putting cheese and margarine between the sheets.",
                "Bake it in a preheated oven, on a high heat at first until it rises, then on a lower heat.",
            ],
        },
    },
    {
        id: "piperchi",
        name: "Piperchi țârgâsiti",
        aromanian: true,
        english: "Fried peppers",
        alsoCalled: "ardei prăjiţi",
        description: "Peppers cooked in oil with chopped tomatoes, finished with sheep's cheese and eggs. On fasting days the cheese and eggs were left out, and the plain version was also served with roast meat.",
        summary: ["Bell peppers", "Tomatoes", "Sheep's cheese or urdă", "Eggs"],
        recipe: {
            ingredients: [
                { items: ["1 kg bell peppers", "2–3 tomatoes (about ½ kg)", "250 g sheep's cheese or urdă", "2 eggs", "Oil"] },
            ],
            steps: [
                "Wash the peppers, remove the seeds and cut them into fairly large pieces. Cook them gently in oil.",
                "Peel the tomatoes, chop them finely and add them to the peppers. Leave everything on the heat for about 10–15 minutes.",
                "Add the cheese or urdă to taste, then the eggs, one after the other.",
            ],
            notes: "On fasting days, leave out the eggs and the cheese. In winter you can use roasted peppers from the freezer, and without cheese and eggs the peppers also make a side dish for roast meat.",
        },
    },
    {
        id: "tarator",
        name: "Tarator",
        english: "Cucumber and yogurt salad",
        description: "A cold salad of finely chopped cucumber and garlic in sheep's yogurt, with a little olive oil and dill or mint.",
        summary: ["Cucumbers", "Sheep's yogurt", "Garlic", "Dill or mint"],
        recipe: {
            ingredients: [
                { items: ["500 g sheep's yogurt", "3–4 cucumbers", "2 cloves of garlic", "2 teaspoons olive oil", "A bunch of dill or mint leaves", "Salt and pepper"] },
            ],
            steps: [
                "Peel the cucumbers and chop them very finely, and the garlic too.",
                "Pour the yogurt over them, then add the dill or mint, the olive oil, salt and pepper.",
                "Mix well and keep it cold until serving.",
            ],
        },
    },
    {
        id: "cornuri",
        name: "Cornuri",
        english: "Crescent rolls",
        description: "Rolled crescents of soft yeasted dough, brushed with egg yolk and sprinkled with poppy seeds, caraway, sesame or salt before baking.",
        summary: ["Flour, milk and yeast", "Eggs", "Poppy seeds, caraway, sesame"],
        recipe: {
            ingredients: [
                { heading: "For the starter", items: ["½ litre lukewarm milk", "4 tablespoons sugar", "1 teaspoon salt", "A walnut-sized piece of yeast", "1–2 tablespoons flour"] },
                { heading: "For the dough", items: ["1 kg flour", "3 eggs", "3 small cups of oil", "1 packet of margarine or butter"] },
                { heading: "For the topping", items: ["1 egg yolk", "Poppy seeds, caraway, sesame or salt"] },
            ],
            steps: [
                "Mix the starter ingredients and leave them to rise for 15–30 minutes.",
                "Make a dough from the eggs, oil, flour and margarine, and mix it well with the starter. Knead it and leave it to rise for one or two hours, with the bowl covered by a cloth.",
                "Divide the dough into five equal parts and roll each one out into a sheet about ½ cm thick. Cut each sheet into eight pieces and roll them up into crescents.",
                "Lay them in an oiled tray and leave them to rise for another half hour.",
                "Brush them with egg yolk, sprinkle them with poppy seeds, caraway, sesame or salt, and put a small piece of margarine on each one. Bake for 15–20 minutes.",
            ],
        },
    },
    {
        id: "gaina",
        name: "Găină à la macedoine",
        english: "Macedonian-style chicken",
        description: "Boiled chicken layered in a tray with grated cheese and ham, covered with eggs beaten into yogurt, and baked slowly. Served warm.",
        summary: ["Chicken", "Ham", "Caşcaval cheese", "Eggs and yogurt", "Garlic and basil"],
        recipe: {
            ingredients: [
                { items: ["1 chicken", "200 g ham", "100 g caşcaval cheese", "3–4 eggs", "1 cup of yogurt", "Garlic and basil", "Salt, pepper and oil"] },
            ],
            steps: [
                "Boil the chicken, then cut the meat into small pieces. Season it and add finely chopped garlic.",
                "Put half of the meat in an oiled baking tray and grate about a centimetre of cheese over it. Add the ham, then more grated cheese, then the rest of the meat.",
                "Beat the eggs with the yogurt and a little salt, and pour it over the top.",
                "Bake on a low heat for an hour to an hour and a half, and serve it warm.",
            ],
        },
    },
]

const THROUGH_THE_YEAR = [
    {
        occasion: "New Year",
        pages: "54-55",
        text: <>A pie was baked with small tokens hidden inside: a coin, a little stick, a double ring, a tiny shepherd&apos;s crook, a sheep pen, a distaff. Whoever found the stick would be a good householder that year, and whoever found the ring would have luck with the sheep. In Doliani the pie was spun three times on the table, and each person took the slice that stopped in front of them. A piece was kept until Epiphany.</>,
    },
    {
        occasion: "1 February",
        pages: "59",
        text: <>Boiled nettles were eaten from the tip of a knife to &ldquo;refresh the blood&rdquo;, and people drank the milk of a black sheep so that the spring would be sweet and the summer warm.</>,
    },
    {
        occasion: "Cheese Sunday",
        pages: "34",
        text: <>After the meal, a piece of halva or an egg was hung on a string from a stick held by the most respected person present, and everyone took turns trying to catch it with their mouth.</>,
    },
    {
        occasion: "The first week of Lent",
        pages: "34",
        text: <>In Doliani, women beat wheat on a stone and washed it until it turned white, then boiled it with sugar, walnuts and cinnamon. Plates of it, each with a piece of warm bread, were sent round to the neighbours.</>,
    },
    {
        occasion: "1 March",
        pages: "37",
        text: <>Women made flat cakes spread with honey and shared them within the family.</>,
    },
    {
        occasion: "Saint Theodore's Day",
        pages: "37",
        text: <>Eight days after Easter, women baked ring-shaped breads (<i>colaci</i>) and gave them away. Those who received one answered <Term>S-ţâ bâneadzâ prăvdzâli!</Term> (&ldquo;May your animals live long!&rdquo;).</>,
    },
    {
        occasion: "Christmas",
        pages: "49-50",
        text: <>Several <i>colaci</i> were baked: for the family, for Christmas, for Christ, and for the carollers. The carollers&apos; breads, made from the best flour and given out still warm, were shaped like rings, snails, crescents, tulips, or discs marked with a cross. Even the animals got <i>colaci</i> made of bran. If the carollers were given a <i>colac</i> that was too small, they hung it on the host&apos;s door to make fun of them.</>,
    },
]

const LIFE_EVENTS = [
    {
        occasion: "A birth",
        href: "/birth",
        pages: "64, 69-70",
        text: <>Women visiting a new mother brought doughnuts (<Term>tiyăni</Term>), pilaf, red wine and rice pudding. On the third night, a special cake for the Fates, <Term>turta ali Stâ-Mârii</Term>, was broken over a boy&apos;s head, and every crumb had to be eaten.</>,
    },
    {
        occasion: "A wedding",
        href: "/wedding",
        pages: "82, 87",
        text: <>The wedding bread was kneaded with water fetched from three different wells. The feast itself was pilaf, roast meat, a soup of offal and bread. No cakes were made; instead, guests were given Turkish delight, sweets and fruit.</>,
    },
    {
        occasion: "A funeral",
        href: "/death",
        pages: "110-111",
        text: <>The funeral meal was boiled wheat (<i>colivă</i>), bread, <Term>rachiu</Term> and wine, and pilaf was forbidden so that deaths would not multiply in the family. For the memorials that followed, cakes of chickpea flour spread with honey were made.</>,
    },
]

function JurnalulCite() {
    return <cite className="block text-sm not-italic text-yellow-700">{JURNALUL_2006.publisher}, {JURNALUL_2006.year}</cite>
}

function NicolauCite({ pages }) {
    return <cite className="block text-sm not-italic text-yellow-700">{NICOLAU_2001.author}, {NICOLAU_2001.year}, p. {pages}</cite>
}

function DiamondList({ items, className = "" }) {
    return (
        <ul className={`flex flex-col gap-2 ${className}`}>
            {items.map((item) => (
                <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                    {item}
                </li>
            ))}
        </ul>
    )
}

function Recipe({ dish, number }) {
    const { recipe } = dish

    return (
        <article id={`recipe-${dish.id}`} className="scroll-mt-6 rounded-sm border-4 border-double border-rose-950/30 bg-white p-6 sm:p-10">
            <p className="font-serif text-lg italic text-yellow-700">{number}. {dish.english}</p>
            <h3 lang={dish.aromanian ? "rup" : "ro"} className="font-serif text-3xl font-semibold text-rose-950">{recipe.title ?? dish.name}</h3>

            <div className="mt-8 grid gap-10 md:grid-cols-[1fr_2fr]">
                <div>
                    {recipe.ingredients.map((group, i) => (
                        <div key={i} className={i > 0 ? "mt-6" : ""}>
                            <h4 className="font-serif text-xl font-semibold text-rose-950">{group.heading ?? "Ingredients"}</h4>
                            <DiamondList items={group.items} className="mt-3 text-base text-yellow-950" />
                        </div>
                    ))}
                </div>
                <div>
                    <h4 className="font-serif text-xl font-semibold text-rose-950">Method</h4>
                    <ol className="mt-3 flex flex-col gap-4">
                        {recipe.steps.map((step, i) => (
                            <li key={i} className="flex gap-4 text-base text-yellow-950 md:text-lg">
                                <span className="w-10 shrink-0 font-serif text-xl italic text-gold">{ROMAN_NUMERALS[i]}.</span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ol>
                    {recipe.notes && (
                        <p className="mt-6 rounded-sm border-l-4 border-gold bg-orange-50 p-4 text-base text-yellow-950">{recipe.notes}</p>
                    )}
                </div>
            </div>

            {recipe.variants && (
                <div className="mt-10 border-t border-rose-950/15 pt-8">
                    <h4 className="font-serif text-2xl italic text-yellow-700">Other fillings</h4>
                    <p className="mt-2 text-base text-yellow-950">Use the same dough as above, with one of these fillings instead.</p>
                    <ul className="mt-6 grid gap-6 md:grid-cols-3">
                        {recipe.variants.map((variant) => (
                            <li key={variant.title} className="rounded-sm border border-rose-950/20 bg-orange-50/60 p-5">
                                <h5 className="font-serif text-xl font-semibold text-rose-950">{variant.title}</h5>
                                <DiamondList items={variant.items} className="mt-3 text-sm text-yellow-950" />
                                <p className="mt-4 text-base text-yellow-950">{variant.method}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </article>
    )
}

function CustomEntry({ entry }) {
    return (
        <li className="border-t border-rose-950/15 pt-5">
            <h4 className="font-serif text-xl italic text-yellow-700">
                {entry.href ? (
                    <Link href={entry.href} className="underline decoration-gold/50 underline-offset-4 hover:text-rose-950 hover:decoration-rose-950 transition-colors">{entry.occasion}</Link>
                ) : entry.occasion}
            </h4>
            <p className="mt-2 text-base text-yellow-950 md:text-lg">
                {entry.text}
                <NicolauCite pages={entry.pages} />
            </p>
        </li>
    )
}

export default function Food() {
    return (
        <div className="flex flex-col flex-1 min-h-screen bg-orange-50 font-sans">
            <TraditionHeader
                label="At the table"
                title="Aromanian Food"
                intro="Simple, generous cooking built on sheep's cheese and yogurt, peppers and greens, and above all pita, and food woven through every custom of the year."
            />

            <main>
                <section aria-labelledby="table" className="mx-auto max-w-3xl px-5 pt-16 text-center">
                    <SectionHeading id="table" className="mx-auto">At the Aromanian table</SectionHeading>
                    <p className="mt-6 text-base text-yellow-950 md:text-lg">
                        Wherever Aromanians settled, in Albania, Greece, Bulgaria, the former Yugoslavia or Romania, they kept their
                        customs, and their cooking with them. The one dish never missing from the table is <Term>pita</Term>, a kind of
                        pie made from thin sheets of dough with all sorts of fillings. Alongside it come peppers, sheep&apos;s cheese and
                        yogurt, and baked breads scattered with seeds.
                        <JurnalulCite />
                    </p>
                </section>

                <section aria-labelledby="dishes" className="mx-auto max-w-5xl px-5 py-16">
                    <SectionHeading id="dishes">Traditional dishes</SectionHeading>

                    <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {DISHES.map((dish, i) => (
                            <li key={dish.name} className="flex flex-col rounded-sm border border-rose-950/30 bg-white p-6">
                                <span className="font-serif text-2xl italic text-gold">{ROMAN_NUMERALS[i]}</span>
                                <h3 lang={dish.aromanian ? "rup" : "ro"} className="mt-1 font-serif text-2xl font-semibold text-rose-950">{dish.name}</h3>
                                <p className="font-serif text-lg italic text-yellow-700">
                                    {dish.english}
                                    {dish.alsoCalled && <> (<span lang="ro">{dish.alsoCalled}</span>)</>}
                                </p>
                                <p className="mt-3 flex-1 text-base text-yellow-950">{dish.description}</p>
                                <div className="mt-4 border-t border-rose-950/15 pt-4">
                                    <p className="font-serif text-base italic text-rose-950">Made with</p>
                                    <DiamondList items={dish.summary} className="mt-2 text-sm text-yellow-950" />
                                </div>
                                <a href={`#recipe-${dish.id}`} className="group mt-5 flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-wide text-gold hover:text-rose-950 transition-colors">
                                    See the recipe
                                    <span aria-hidden className="h-2 w-2 rotate-225 border-t-2 border-l-2 border-current transition-transform group-hover:translate-y-0.5" />
                                </a>
                            </li>
                        ))}
                    </ol>
                    <p className="mt-4"><JurnalulCite /></p>
                </section>

                <section aria-labelledby="recipes" className="border-y border-yellow-600/30 bg-orange-100/50">
                    <div className="mx-auto max-w-5xl px-5 py-16">
                        <SectionHeading id="recipes" eyebrow="To try at home">The recipes</SectionHeading>

                        <ol className="mt-10 flex flex-col gap-10">
                            {DISHES.map((dish, i) => (
                                <li key={dish.id}>
                                    <Recipe dish={dish} number={ROMAN_NUMERALS[i]} />
                                </li>
                            ))}
                        </ol>
                        <p className="mt-6"><JurnalulCite /></p>
                    </div>
                </section>

                <section aria-labelledby="customs" className="mx-auto max-w-5xl px-5 py-16">
                    <SectionHeading id="customs">Food in customs and celebrations</SectionHeading>
                    <p className="mt-6 max-w-3xl text-base text-yellow-950 md:text-lg">
                        For the Aromanians, food was rarely just a meal. Breads, cakes and dishes marked the turning of the year and
                        every stage of life.
                    </p>

                    <div className="mt-10 grid gap-12 md:grid-cols-2">
                        <div>
                            <h3 className="font-serif text-3xl font-semibold text-rose-950">Through the year</h3>
                            <ol className="mt-6 flex flex-col gap-6">
                                {THROUGH_THE_YEAR.map((entry) => <CustomEntry key={entry.occasion} entry={entry} />)}
                            </ol>
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl font-semibold text-rose-950">At life&apos;s milestones</h3>
                            <ol className="mt-6 flex flex-col gap-6">
                                {LIFE_EVENTS.map((entry) => <CustomEntry key={entry.occasion} entry={entry} />)}
                            </ol>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="sources" className="mx-auto max-w-5xl border-t border-yellow-600/30 px-5 py-16">
                    <SectionHeading id="sources">Sources</SectionHeading>
                    <ul className="mt-6 flex flex-col gap-3 text-base text-yellow-950 md:text-lg">
                        <li>
                            {JURNALUL_2006.author}, <a href={JURNALUL_2006.url} target="_blank" rel="noopener noreferrer" className="italic underline decoration-yellow-600 hover:text-rose-950 hover:decoration-rose-950 transition-colors">{JURNALUL_2006.title}</a>, {JURNALUL_2006.publisher}, 9 August {JURNALUL_2006.year}.
                        </li>
                        <li>
                            {NICOLAU_2001.author}, <a href={NICOLAU_2001.url} target="_blank" rel="noopener noreferrer" className="italic underline decoration-yellow-600 hover:text-rose-950 hover:decoration-rose-950 transition-colors">{NICOLAU_2001.title}</a>, {NICOLAU_2001.year}.
                        </li>
                    </ul>
                </section>
            </main>

            <BackToTop />
        </div>
    )
}

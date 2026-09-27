import Link from "next/link" 

export default function Wedding() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-orange-50 font-sans">
            <header className="relative w-full text-orange-50">
                <div className="flex flex-col items-center justify-start pt-5 gap-2 text-center">
                    <h1 className="text-base font-bold m-5 text-yellow-600 md:text-4xl sm:text-2xl">Aromanian Betrothal and Wedding Traditions</h1>
                </div>
            </header>

            <main className="w-full max-w-3xl p-5 py-8">
                <div>
                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                       Marriage among the Aromanians unfolded as a long, carefully staged process stretching from childhood matchmaking through a multi-day wedding celebration and beyond.                  
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        Matchmaking and Early Betrothal (Peţitul)
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Around 1900, matchmakers (pruxiniţl'i) sometimes arranged marriages between people who had never met, using photographs to make the match.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.77</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Certain days were considered favorable or unfavorable for matchmaking: it was good to go asking for a bride's hand under a full moon, but February and Tuesdays were avoided entirely.
                        
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.77</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Breaking off an engagement was considered to burden one's soul with a serious sin.
                        
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.77</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Remarkably, betrothals were sometimes arranged between parents while their children were still small, typically between the ages of seven and twelve, and such an early engagement held even if one of the children later turned out to have a physical disability.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.77-78</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The initiative for these childhood engagements belonged to the boy's father, and the conversation between the two fathers was conducted allusively, in coded language, so that a refusal would not cause offense.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.78</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        A full Aromanian betrothal actually consisted of two separate ceremonies:
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The Small Sign (Semnul Mic / Protlu Semnu) which was held at the bride's house on a Monday, Thursday, or Sunday outside of fasting periods, this first ceremony involved parents, close relatives, and the future godparents, but not the groom-to-be.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.78</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The two families performed a ritualized, allegorical dialogue in which the groom's side spoke of having "lost a young goat" that wandered into the bride's family's yard, using the metaphor to formally ask for the girl.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.78</cite>
                    </p>

                    <h4 className="m-2 pb-5 text-yellow-600 font-bold text-base sm:m-3 text-lg md:text-xl">
                       The Betrothal Dialogue
                    </h4>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The bride-to-be's parents (BP): "Ți vimtu v-aduți pi la noi?" (What brings you to our house?)
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The groom-to-be's parents (GP): "Chirum nâ iadâ ș-vițina ta n-aspusi câ intră tu uborlu a vostru." (We lost a goat and your neighbor told us that it came into your yard.)
                    </p>

                    <p className="text-yellow-950 text-sm m-2 md:text-lg sm:m-3 text-base">
                        BP: "Iadâ xeanâ tu uborlu a nostru?! Mutriți tu uboru, mutriți și n-casâ, ma iadâ xeanâ nu-ari s-aflați, Noi avem unâ iadâ, ma easti a noastrâ. Ma s-vreț va vâ u-aspuneamu, s-u videț" (A lost goat in our yard?! Look in the yard, in the house, but you won't find it. We have a goat, but it's ours. If you want, we can show it to you.)
                    </p>

                    <p className="text-yellow-950 text-sm m-2 md:text-lg sm:m-3 text-base">
                        GP: "Ti aestâ vinimu, s-u videmu și s-v-aspunenemu, easti ea i nu-i... (apare fata cu ochii in pământ si cu mainile puse în cingătoare.) - Cuscre, aestâ-i ți câftămu, aestâ-i iada ți chirumu. Câ ți n-arâsesicâ nu-i aoați?" (Thats why we came, to see her and to tell you, is it her or not? (the girl apears with her eyes cast down and her hands on her belt.) Co-father-in-law, this is the goat we were looking for, this is the goat that we lost. Why did you tell us it wasn't here?)
                    </p>

                    <p className="flex flex-col text-yellow-950 text-sm m-2 md:text-lg sm:m-3 text-base">
                        BP: "Ma dzâț câ aestâ-i iada ți câftaț, câ ea easti iada voastrâ, atumțea s-vâ bâneadzâ!" (If you say that this is the goat you were looking for, that this is your goat, may she bring you endless joy.)
                        <cite className="text-rose-950 text-xs block italic">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.78</cite>
                    </p>

                    <p className="text-yellow-950 pt-5 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The groom's father gave the bride a gold coin wrapped in an embroidered cloth, and the young bride-to-be performed an elaborate sequence of hand-kissing and cheek-touching gestures with the assembled guests and children, receiving small monetary gifts in return. Afterward she served the guests sweets, candy, and rachiu (strong alchoholic beverage, usually made by the bride's family).
                        
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.78-79</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                       The Great Betrothal (Băşearea / Marea Isozmâtă) is celebrated on a Saturday evening outside of fasting periods, again with both families and godparents present, and, in many villages, still without the groom himself attending.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.78</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The following day, the two families gathered again to discuss wedding arrangements amid singing and dancing, with the bride dancing beside her future father-in-law.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.79</cite>
                    </p>

                    
                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                       Gifts given to the bride at this stage were not handed to her directly but placed on her shoulder, and she responded by kissing the giver's hand.
                        
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.80</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                       Various regional variants of the betrothal existed, among the Fărșeroţi, for example, the sign consisted of gold coins tied in a red kerchief, ceremonially passed through an elder's beard before being entrusted to the bride's mother.
                        
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.80</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        It was common for a young engaged woman to actually be caught and have the ring forced onto her finger amid a mock chase when the groom's relatives arrived to formalize things.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.80</cite>
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        The Long Engagement
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Custom required that at least a year pass between betrothal and wedding, and sometimes as long as four years, during which the two families visited one another but the young couple did not.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.80</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        hroughout this period, strict avoidance rules governed the couple's behavior: an engaged woman was expected to avoid all contact with her fiancé's relatives, going so far as to splash water at and flee from any male relative of her betrothed who happened to see her at the well.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.80</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        She could attend a dance only if specifically invited by her fiancé's relatives, and she continued wearing the necklace of coins (salba) given by her future father-in-law as a visible sign of her engaged status.
                        
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.80-81</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        During this time, the groom's family brought a steady stream of gifts such as a gold watch, a long gold chain, bracelets, dress fabric, shoes, sweets, and seasonal presents at St Gheoghe's day, St Mary's day, Easter, Christmas, New Year, and on her name day.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.81</cite>
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        The Wedding Preparations
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Certain periods were avoided for weddings altogether: leap years and the month of May were both considered inauspicious, and most weddings instead took place between the feasts of Saints Peter and Paul (June 29) and the Minor Feast of Saint Mary, excluding the two-week fast of the Dormition, meaning most weddings clustered in late summer, sometimes twenty to thirty in a single village in the month of August.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.81</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Throughout the week, relatives brought sheep and goats as gifts for the wedding feast, and the groom receives from his uncle a ram with golden horns, adorned with a mirror on its forehead and threads of tinsel and colored wool.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.82</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Baking the ceremonial wedding bread involved its own rituals. Young girls from the family were sent by the groom's mother to fetch water from three different wells, the dough was kneaded exclusively by women with money thrown in by the groom for children to retrieve with their teeth, and specific rounds of bread were dedicated to the godfather and to the bride's relatives.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.82-85</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The bride's dowry (paia), displayed publicly on the Friday before the wedding, could be extraordinarily extensive. One period source cited by Nicolau lists an inventory including dozens of pairs of stockings, shirts, headscarves, aprons, embroidered slippers, mattresses, quilts, and pillows, along with a cash gift of 50 to 300 gold coins.
                        
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.85-86</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        If the groom's family was poor, a wealthier bride's father might supply the young couple with as many as a hundred goats or sheep.
                        
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.86</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Friday also saw the ritual slaughter of sheep for the feast, sometimes twenty to thirty animals for a single wedding, and the bride and groom bathed separately at different bathhouses that day.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.87</cite>
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        The Wedding Weekend
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        From Saturday until Monday, the bride traditionally ate nothing at all, since eating during this period was considered immodest. Saturday evening brought separate parties at each family's house, at which the young men of the bride's family invited over those of the groom's, though the bride herself did not attend.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.87</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Mirrors in the room were covered and the space was censed with incense every night during this period.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.64</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        That same evening, the groom's father visited the bride's family to formally deliver the bridal necklace (salba) and the wedding flag, in an elaborate ceremony involving an exchange of ceremonial bread, meat, coffee, and rachiu between the two fathers, and a formal handoff of the earnest money and rings wrapped in a red kerchief.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.87-88</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        If the couple came from different villages, the groom's family would even travel there in advance under the pretext of a courtesy visit, one of whose unspoken, purposes was to let the bride's father confirm that the groom really was the young man agreed upon.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.65</cite>
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        The Wedding Flag (Hlambura)
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The wedding flag is one of the central ritual objects of an Aromanian wedding, and its making, delivery, and eventual dismantling each carried their own significance.
                    </p>

                    <h4 className="m-2 text-yellow-600 font-bold text-base sm:m-3 text-lg md:text-xl">
                        The Construction
                    </h4>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The flag was prepared by the godfather and the groom's best men (fîrtaţi) on the Saturday afternoon before the wedding, or earlier, Thursday or Friday, if the bride lived in another village and the flag needed to travel there in time.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.88</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Among the Grămosteni, it consisted of a dogwood-wood pole, 2 to 2.5 meters tall, crossed near the top by a shorter perpendicular piece of equal-length arms (30–40 cm) to form an even cross. A square of red cloth, about a meter to a side and trimmed with lace and fringe, was mounted on the pole, and red apples were fixed into the three free arms of the crosspiece.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.88</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Among the Fărșeroţi, the custom instead called for two separate flags, cut from the forest a full week ahead by both young men and young women together: one carried a white cloth with bells sewn along its edges and three small branches at the tip, arranged into a cross and likewise studded with apples; the other bore a ball of red wool at its tip. Both flags were kept mounted on the groom's house until the end of the wedding, when the departing bridal procession carried them along.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.88-89</cite>
                    </p>

                    <h4 className="m-2 text-yellow-600 font-bold text-base sm:m-3 text-lg md:text-xl">
                        The Presentation and Symbolism
                    </h4>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Once decorated, the flag was ceremonially "paid for" and danced, in a moment marked by a specific song in which the godfather, the mother-in-law, and other relatives are each urged in turn to "throw into the hlambură", that is, to contribute money toward it.
                        
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.88</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The godfather then carried the finished flag at the head of the wedding procession for the rest of the ceremony, including when escorting the bride to fetch water from the well (<cite className="italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.88, 104</cite>), and it was he who "bought back" the flag with money from the young men of the bride's family before the couple's final departure.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.96</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The flag's apples, red cloth, and bells mark it as a wish for fertility and abundance for the new household, while its role at the head of every procession gave it something like the function of a banner of protection, announcing and leading the couple through each stage of the rite. Its delivery was taken seriously enough that if the bride's family had recently suffered a death, her father could refuse to let the flag be brought to the house at all.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.88</cite>
                    </p>

                    <h4 className="m-2 text-yellow-600 font-bold text-base sm:m-3 text-lg md:text-xl">
                        The Dismantling After the Wedding
                    </h4>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The flag was not simply put away once the celebrations ended, it was ritually broken apart. On the Wednesday following the wedding, the godfather untied it: the apples were divided among the unmarried young people who had attended, and the cloth itself was given to the bride's mother-in-law.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.89</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The wooden pole was notched in two places and handed to the bride to break with her own hands; the groom then used these broken pieces to playfully strike her, in a gesture of mock chastisement.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.89</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Two of the smallest fragments were thrown up onto the roof of the house, while the third was kept by the mother-in-law, who used it to make a distaff for her new daughter-in-law, turning the war memory of the flag's wood directly into a tool for the bride's new domestic life
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.89</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        A few tufts of wool from the flag were left on the roof of the groom's house for forty days before being spun into thread for the bride's stockings.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.89</cite>
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        The Wedding Attire
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Wedding attire was highly distinctive. Bridal garments (nivişteşţi) among the Grămosteni Aromanians included an elaborate multi-piece headdress (căciulă) that could weigh up to 2 to 2.5 kilograms, decorated with gold and silver coins, silk veils (zâvon and cipă), and various beaded ornaments.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.90-91</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The bride wore special embroidered yellow-leather boots at her wedding that she would never wear again afterward, keeping them only as a memento.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.89</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Beneath the wedding clothes, the groom deliberately continued to wear an old, unwashed undergarment, out of a belief that if a clean replacement fell into an enemy's hands it could be used to curse his virility.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.91</cite>
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        The Wedding Ceremony
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Sunday was the day of the ceremony itself. The groom was shaved that morning, traditionally begun by the godfather, provided both his parents were still living, and finished by the barber, accompanied by ritual songs.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.91</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Once dressed, the groom received his parents' blessing before an icon, flanked by his two best men (fîrtaţi). As he set out for the bride's house, a lamb was sacrificed and he rode his horse over it; various obstacles: a jug of water, loaves of bread were placed in his path for him to ride over as well.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.93</cite>
                    </p>
                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        When the groom's procession reached the bride's house, a whole sequence of ritualized mock resistance took place: the bride's brothers might block the horses, demanding a "ransom" of wine or money before letting the procession through, and family members would playfully strike the groom and his attendants.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.93-94</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The bride's mother presented the groom's party with gifts of bread, pastries, and food, while attendants from the groom's side tried to secretly steal a small household object, believed to represent the bride's good luck.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.101-102</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        During the vows, rice was thrown over the couple's heads "so that they take root," and a boy would climb onto the roof to hammer on it, a charm meant to ensure that any children born of the marriage would not be born deaf.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.102</cite>
                    </p>


                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Immediately after the ceremony, young men would playfully strike the wedding guests, a mock-flagellation from which not even the priest was exempt.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.102</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Before leaving her parents' home, the bride made a final visit to the room where she had spent time with her friends, drank three times from a cup of holy water given by her mother, and crossed herself three times.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.96</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        As she stepped over the threshold for the last time, she was not permitted to look back.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.97</cite>
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        After the Wedding
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The days following the wedding were filled with further ritual: on Monday and Tuesday, groups of young men disguised themselves in costume (babuyearii), sometimes dressed as gendarmes or as members of the bride's family, faces blackened with charcoal, and staged mock accusations that the groom's family had "stolen" the bride, extracting comic ransoms of food, drink, or money before the post-wedding feast.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.102</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Verification of the bride's virginity was carried out on Wednesday morning by the mother-in-law and the godmother, inspecting the bride's nightgown. Her chastity was then publicly signaled through red kerchiefs displayed by young female relatives and through sweetened red rachiu served to the guests, with young messengers rewarded for carrying the news back to the bride's parents.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.105</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        The trip to the well was one of the bride's first public duties as a married woman, taking place sometime between Tuesday and Thursday depending on the wedding's length. She bowed three times before the water and tossed in coins and sweets, then filled and emptied a jug three times while being watched by the wedding party, accompanied by a well-known ceremonial song.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.103-104</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Because many households had no separate bedroom for the new couple, wealthier families sometimes built a simple temporary structure beside the house for the wedding night. The newlyweds otherwise waited until the rest of the household was asleep before retiring together, or in some cases spent the night outdoors.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.104</cite>
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        A return visit to the bride's parents (turnarea nveastâl'ei)
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        Turnarea nveastâl'ei was typically held the first Saturday after the wedding, or sometimes as late as a month afterward, served to demonstrate that the groom's family was pleased with their new daughter-in-law; both families exchanged gifts on this occasion.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.106</cite>
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:text-lg sm:m-3 text-base">
                        For the first year of marriage the young wife was referred to as nveastâ nauâ ("new bride"), and elaborate systems of address governed how she referred to and was addressed by different members of her new family, terms that varied by whether her husband was the eldest, middle, or youngest son, and that distinguished her from other daughters-in-law living in the same household.
                        <cite className="text-sm block italic text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.106</cite>
                    </p>
                </div>

                <p className="m-2 text-rose-950 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                    Sources: 
                </p>

                <ul className="pb-10">
                    <li>
                        <Link href="https://www.proiectavdela.ro/pdf/irina_nicolau_aromanii_credinte_si_obiceiuri.pdf">
                           <p className="text-yellow-950 text-sm m-2 md:text-lg sm:m-3 text-base">
                                Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001
                           </p>
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    )
}
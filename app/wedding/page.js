import TraditionPage, { NICOLAU_2001, Term } from "../components/traditionPage"

// Sections are in the order they happen, from the first matchmaking to the bride's first year of marriage.
const SECTIONS = [
    {
        id: "betrothal",
        stage: "Years before",
        title: "Matchmaking and Betrothal",
        paragraphs: [
            {
                pages: "77",
                text: <>Around 1900, matchmakers (<Term>pruxiniţl&apos;i</Term>) sometimes arranged marriages between people who had never met, using photographs to make the match.</>,
            },
            {
                pages: "77",
                text: <>Certain days were considered favorable or unfavorable for matchmaking: it was good to go asking for a bride&apos;s hand under a full moon, but February and Tuesdays were avoided entirely.</>,
            },
            {
                pages: "77",
                text: <>Breaking off an engagement was considered to burden one&apos;s soul with a serious sin.</>,
            },
            {
                pages: "77-78",
                text: <>Remarkably, betrothals were sometimes arranged between parents while their children were still small, typically between the ages of seven and twelve. Such an early engagement held even if one of the children later turned out to have a physical disability.</>,
            },
            {
                pages: "78",
                text: <>The initiative for these childhood engagements belonged to the boy&apos;s father, and the conversation between the two fathers was conducted allusively, in coded language, so that a refusal would not cause offense.</>,
            },
            {
                pages: "78",
                text: <>When the two fathers agreed, they turned to face the east and said <Term>Al Dumnidză si s-facâ!</Term> (&ldquo;Let it be God&apos;s will!&rdquo;). A boy who was away in the mountains with the sheep could be betrothed in his absence, and the young couple were often told about the match only shortly before the ceremony.</>,
            },
            {
                text: <>A full Aromanian betrothal consisted of two separate ceremonies.</>,
            },
            { subheading: "The Small Sign (Semnul Mic / Protlu Semnu)" },
            {
                pages: "78",
                text: <>Held at the bride&apos;s house on a Monday, Thursday, or Sunday outside of fasting periods, this first ceremony involved the parents, close relatives, and the future godparents, but not the groom-to-be.</>,
            },
            {
                pages: "78",
                text: <>The two families performed a ritualized, allegorical dialogue in which the groom&apos;s side spoke of having &ldquo;lost a young goat&rdquo; that had wandered into the bride&apos;s family&apos;s yard, using the metaphor to formally ask for the girl.</>,
            },
            {
                pages: "78",
                text: <>In some places the groom-to-be did attend, bringing the rings tied in a kerchief. The bundle was passed from hand to hand around the room, held only in the right hand, and each guest wished <Term>S-prucupseascâ şi si-nchirdâseascâ!</Term> (&ldquo;May it prosper and flourish!&rdquo;).</>,
            },
            {
                title: "The Betrothal Dialogue",
                pages: "78",
                dialogue: [
                    {
                        speaker: "The bride's parents",
                        original: "Ți vimtu v-aduți pi la noi?",
                        translation: "What brings you to our house?",
                    },
                    {
                        speaker: "The groom's parents",
                        original: "Chirum nâ iadâ ș-vițina ta n-aspusi câ intră tu uborlu a vostru.",
                        translation: "We lost a goat, and your neighbor told us that it came into your yard.",
                    },
                    {
                        speaker: "The bride's parents",
                        original: "Iadâ xeanâ tu uborlu a nostru?! Mutriți tu uboru, mutriți și n-casâ, ma iadâ xeanâ nu-ari s-aflați. Noi avem unâ iadâ, ma easti a noastrâ. Ma s-vreț va vâ u-aspuneamu, s-u videț.",
                        translation: "A lost goat in our yard?! Look in the yard, look in the house, but you won't find a lost goat. We have a goat, but she is ours. If you want, we can show her to you.",
                    },
                    {
                        speaker: "The groom's parents",
                        original: "Ti aestâ vinimu, s-u videmu și s-v-aspunenemu, easti ea i nu-i...",
                        translation: "That's why we came, to see her and to tell you whether it is her or not...",
                    },
                    {
                        direction: "The girl appears with her eyes cast down and her hands on her belt.",
                    },
                    {
                        speaker: "The groom's parents",
                        original: "Cuscre, aestâ-i ți câftămu, aestâ-i iada ți chirumu. Câ ți n-arâsesi câ nu-i aoați?",
                        translation: "Co-father-in-law, this is the one we were looking for, this is the goat we lost. Why did you tell us she wasn't here?",
                    },
                    {
                        speaker: "The bride's parents",
                        original: "Ma dzâț câ aestâ-i iada ți câftaț, câ ea easti iada voastrâ, atumțea s-vâ bâneadzâ!",
                        translation: "If you say that this is the goat you were looking for, that she is your goat, then may she bring you endless joy!",
                    },
                ],
            },
            {
                pages: "78",
                text: <>The groom&apos;s father gave the bride a gold coin wrapped in an embroidered cloth, and the bride-to-be performed an elaborate sequence of hand-kissing and cheek-touching gestures with the assembled guests and children, receiving small monetary gifts in return. Afterward she served the guests sweets, candy, and <Term>rachiu</Term> (a strong alcoholic drink, usually made by the bride&apos;s family).</>,
            },
            { subheading: "The Great Betrothal (Băşearea / Marea Isozmâtă)" },
            {
                pages: "79",
                text: <>The second ceremony was celebrated on a Saturday evening outside of fasting periods, again with both families and the godparents present and, in many villages, still without the groom himself.</>,
            },
            {
                pages: "79",
                text: <>The following day, the two families gathered again to discuss the wedding arrangements amid singing and dancing, with the bride dancing beside her future father-in-law.</>,
            },
            {
                pages: "80",
                text: <>Gifts given to the bride at this stage were not handed to her directly but placed on her shoulder, and she responded by kissing the giver&apos;s hand.</>,
            },
            {
                pages: "80",
                text: <>The gifts were then displayed for two or three days, hung on a string in one room. When the guests left the party, the bride-to-be pinned a flower or a green sprig to their chest, kissed their hand, and received money in return. At the betrothal the young couple whitened their faces with flour, and the rings they exchanged were filled with bread and dipped in wine.</>,
            },
            {
                pages: "80",
                text: <>Various regional variants of the betrothal existed. Among the Fărșeroţi, for example, the sign consisted of gold coins tied in a red kerchief, ceremonially passed through an elder&apos;s beard before being entrusted to the bride&apos;s mother.</>,
            },
            {
                pages: "80",
                text: <>It was common for a young engaged woman to actually be caught and have the ring forced onto her finger amid a mock chase when the groom&apos;s relatives arrived to formalize things.</>,
            },
        ],
    },
    {
        id: "engagement",
        stage: "1 to 4 years",
        title: "The Long Engagement",
        paragraphs: [
            {
                pages: "80",
                text: <>Custom required that at least a year pass between betrothal and wedding, and sometimes as long as four years, during which the two families visited one another but the young couple did not.</>,
            },
            {
                pages: "80",
                text: <>Throughout this period, strict avoidance rules governed the couple&apos;s behavior. An engaged woman was expected to avoid all contact with her fiancé&apos;s relatives, going so far as to splash water at, and flee from, any male relative of her betrothed who happened to see her at the well.</>,
            },
            {
                pages: "80-81",
                text: <>She could attend a dance only if specifically invited by her fiancé&apos;s relatives, and she kept wearing the necklace of coins (<Term>salba</Term>) given by her future father-in-law as a visible sign of her engaged status.</>,
            },
            {
                pages: "80",
                text: <>Two or three gold coins (<Term>flurii</Term>) sewn onto a handkerchief and worn on her fez, or on a band around her neck, also showed that a girl was engaged.</>,
            },
            {
                pages: "81",
                text: <>When the groom&apos;s relatives visited, they slipped sweets into her pockets. A relative of hers had to take them out: if she did it herself, she would quarrel with her mother-in-law after the wedding.</>,
            },
            {
                pages: "81",
                text: <>Sometimes a fiancé persuaded one of her relatives to arrange a secret visit while her parents were away. She received him with her eyes covered by a cloth and did not say a single word to him.</>,
            },
            {
                pages: "81",
                text: <>During this time, the groom&apos;s family brought a steady stream of gifts, such as a gold watch, a long gold chain, bracelets, dress fabric, shoes, and sweets, along with seasonal presents on St George&apos;s Day, St Mary&apos;s Day, Easter, Christmas, New Year, and her name day. During Lent they brought her halva, and at Easter a large candle (<Term>lâmbadhă</Term>).</>,
            },
        ],
    },
    {
        id: "preparations",
        stage: "The week before",
        title: "The Wedding Preparations",
        paragraphs: [
            {
                pages: "81",
                text: <>Certain periods were avoided for weddings altogether: leap years and the month of May were both considered inauspicious. Most weddings took place between the feast of Saints Peter and Paul (June 29) and the Minor Feast of Saint Mary, excluding the two-week fast of the Dormition, so they clustered in late summer, sometimes twenty to thirty in a single village in the month of August.</>,
            },
            {
                pages: "81",
                text: <>Young people usually married before the age of twenty; among the Grămosteni, at around fourteen to sixteen. The ideal age gap was four or five years, the groom being the older.</>,
            },
            {
                pages: "81",
                text: <>The weddings of widows and widowers took place only at night. A wedding, once begun, could not be stopped: if someone died during it, the wedding and the funeral went on side by side.</>,
            },
            {
                pages: "81-82",
                text: <>Younger siblings of the bride or groom who had been born in the same month were believed to be in mortal danger at the wedding. When the couple left home, these siblings were locked in a room at a neighbour&apos;s house, and let out by a relative only after the couple had gone.</>,
            },
            {
                pages: "82",
                text: <>The groom chose four best men (<Term>fîrtaţi</Term>) from the unmarried young men of the village, two of whom stayed at his side the whole time. The girls and young wives who helped prepare the wedding were called <Term>surate</Term>, and two of them never left the bride. Everyone taking part in the wedding, whether related or not, was called a <Term>cuscru</Term> for its duration.</>,
            },
            {
                pages: "82",
                text: <>On the Monday of the wedding week, the men of the groom&apos;s family went to the forest to bring firewood for both families, singing ceremonial songs heard at no other point in the wedding. The same day, girls came to the groom&apos;s house to sift the wheat, while he threw chestnuts, chickpeas, coins and sweets into their sieves.</>,
            },
            {
                pages: "82",
                text: <>Throughout the week, relatives brought sheep and goats as gifts for the wedding feast, and the groom received from his uncle a ram with golden horns, adorned with a mirror on its forehead and threads of tinsel and colored wool.</>,
            },
            {
                pages: "82-85",
                text: <>Baking the ceremonial wedding bread involved its own rituals. Young girls from the family were sent by the groom&apos;s mother to fetch water from three different wells, the dough was kneaded only by women, with money thrown in by the groom for children to retrieve with their teeth, and specific rounds of bread were dedicated to the godfather and to the bride&apos;s relatives.</>,
            },
            {
                pages: "85-86",
                text: <>The bride&apos;s dowry (<Term>paia</Term>), displayed publicly on the Friday before the wedding, could be extraordinarily extensive. One period source cited by Nicolau lists dozens of pairs of stockings, shirts, headscarves, aprons, embroidered slippers, mattresses, quilts, and pillows, along with a cash gift of 50 to 300 gold coins.</>,
            },
            {
                pages: "87",
                text: <>While the dowry was displayed, the bride&apos;s side sang a song that playfully accused the whole family, father, mother, grandparents, brothers and sisters, of having tricked the girl with a dowry that was far too small. Among the Fărșeroţi, the dowry was loaded onto a horse with a boy sitting on top, and it had to reach the groom&apos;s house before the bride did.</>,
            },
            {
                pages: "86",
                text: <>If the groom&apos;s family was poor, a wealthier bride&apos;s father might supply the young couple with as many as a hundred goats or sheep.</>,
            },
            {
                pages: "87",
                text: <>Friday also saw the ritual slaughter of sheep for the feast, sometimes twenty to thirty animals for a single wedding, and the bride and groom bathed separately, at different bathhouses, that day.</>,
            },
        ],
    },
    {
        id: "weekend",
        stage: "Saturday",
        title: "The Wedding Weekend",
        paragraphs: [
            {
                pages: "87",
                text: <>From Saturday until Monday, the bride traditionally ate nothing at all, since eating during this period was considered immodest. Saturday evening brought separate parties at each family&apos;s house, at which the young men of the bride&apos;s family invited over those of the groom&apos;s, though the bride herself did not attend.</>,
            },
            {
                pages: "87-88",
                text: <>That same evening, the groom&apos;s father visited the bride&apos;s family to formally deliver the bridal necklace (<Term>salba</Term>) and the wedding flag, in an elaborate ceremony involving an exchange of ceremonial bread, meat, coffee, and <Term>rachiu</Term> between the two fathers, and a formal handoff of the earnest money and rings wrapped in a red kerchief.</>,
            },
            {
                pages: "88",
                text: <>If the couple came from different villages, the groom&apos;s family would travel there in advance under the pretext of a courtesy visit, one of whose unspoken purposes was to let the bride&apos;s father confirm that the groom really was the young man agreed upon.</>,
            },
        ],
    },
    {
        id: "flag",
        stage: "Saturday",
        title: "The Wedding Flag (Hlambura)",
        paragraphs: [
            {
                text: <>The wedding flag is one of the central ritual objects of an Aromanian wedding, and its making, delivery, and eventual dismantling each carried their own significance.</>,
            },
            { subheading: "The Construction" },
            {
                pages: "88",
                text: <>The flag was prepared by the godfather and the groom&apos;s best men (<Term>fîrtaţi</Term>) on the Saturday afternoon before the wedding, or earlier, on Thursday or Friday, if the bride lived in another village and the flag needed to travel there in time.</>,
            },
            {
                pages: "88",
                text: <>Among the Grămosteni, it consisted of a dogwood pole, 2 to 2.5 meters tall, crossed near the top by a shorter piece with arms of equal length (30–40 cm) to form an even cross. A square of red cloth, about a meter to a side and trimmed with lace and fringe, was mounted on the pole, and red apples were fixed onto the three free arms of the crosspiece.</>,
            },
            {
                pages: "88-89",
                text: <>Among the Fărșeroţi, the custom instead called for two separate flags, cut from the forest a full week ahead by young men and young women together. One carried a white cloth with bells sewn along its edges and three small branches at the tip, arranged into a cross and likewise studded with apples; the other bore a ball of red wool at its tip. Both flags were kept mounted on the groom&apos;s house until the end of the wedding, when the departing bridal procession carried them along.</>,
            },
            { subheading: "The Presentation and Symbolism" },
            {
                pages: "88",
                text: <>Once decorated, the flag was ceremonially &ldquo;paid for&rdquo; and danced, in a moment marked by a specific song in which the godfather, the mother-in-law, and other relatives are each urged in turn to &ldquo;throw into the <Term>hlambură</Term>&rdquo;, that is, to contribute money toward it.</>,
            },
            {
                pages: "99, 104",
                text: <>The godfather then carried the finished flag at the head of the wedding procession for the rest of the ceremony, including when escorting the bride to fetch water from the well, and it was he who &ldquo;bought back&rdquo; the flag with money from the young men of the bride&apos;s family before the couple&apos;s final departure.</>,
            },
            {
                pages: "88",
                text: <>The flag&apos;s apples, red cloth, and bells mark it as a wish for fertility and abundance for the new household, while its place at the head of every procession made it something like a banner of protection, announcing and leading the couple through each stage of the rite. Its delivery was taken seriously enough that if the bride&apos;s family had recently suffered a death, her father could refuse to let the flag be brought to the house at all.</>,
            },
            { subheading: "The Dismantling After the Wedding" },
            {
                pages: "89",
                text: <>The flag was not simply put away once the celebrations ended; it was ritually broken apart. On the Wednesday following the wedding, the godfather untied it: the apples were divided among the unmarried young people who had attended, and the cloth itself was given to the bride&apos;s mother-in-law.</>,
            },
            {
                pages: "89",
                text: <>The wooden pole was notched in two places and handed to the bride to break with her own hands; the groom then used the broken pieces to playfully strike her, in a gesture of mock chastisement.</>,
            },
            {
                pages: "89",
                text: <>Two of the smallest fragments were thrown up onto the roof of the house, while the third was kept by the mother-in-law, who used it to make a distaff for her new daughter-in-law, turning the wood of the flag into a tool for the bride&apos;s new domestic life.</>,
            },
            {
                pages: "89",
                text: <>A few tufts of wool from the flag were left on the roof of the groom&apos;s house for forty days before being spun into thread for the bride&apos;s stockings.</>,
            },
        ],
    },
    {
        id: "attire",
        stage: "Sunday",
        title: "The Wedding Attire",
        paragraphs: [
            {
                pages: "90-91",
                text: <>Wedding attire was highly distinctive. Bridal garments (<Term>nivişteşţi</Term>) among the Grămosteni included an elaborate multi-piece headdress (<Term>căciulă</Term>) that could weigh 2 to 2.5 kilograms, decorated with gold and silver coins, silk veils (<Term>zâvon</Term> and <Term>cipă</Term>), and various beaded ornaments.</>,
            },
            {
                pages: "89",
                text: <>The bride wore special embroidered yellow-leather boots at her wedding that she would never wear again, keeping them only as a memento.</>,
            },
            {
                pages: "89",
                text: <>The wedding clothes were made by a tailor, often brought in from another village, at least a week before the wedding. He worked under an awning in the courtyard, which turned the sewing into a show for the whole neighbourhood. After taking the measurements, the tailor would claim that his scissors would not cut until the mother gave him a gift and threw money onto the cloth, and the relatives watching did the same. A poker or a pair of tongs was passed through the finished clothes so that the couple would be strong as iron.</>,
            },
            {
                pages: "91",
                text: <>Beneath the wedding clothes, the groom deliberately kept wearing an old, unwashed undergarment, out of a belief that if a clean one fell into an enemy&apos;s hands it could be used to curse his virility.</>,
            },
        ],
    },
    {
        id: "ceremony",
        stage: "Sunday",
        title: "The Wedding Ceremony",
        paragraphs: [
            {
                pages: "91",
                text: <>Sunday was the day of the ceremony itself. The groom was shaved that morning, a shave traditionally begun by the godfather, provided both his parents were still living, and finished by the barber, accompanied by ritual songs.</>,
            },
            {
                pages: "93",
                text: <>Once dressed, the groom received his parents&apos; blessing before an icon, flanked by his two best men (<Term>fîrtaţi</Term>). As he set out for the bride&apos;s house, a lamb was sacrificed and he rode his horse over it, along with other obstacles, such as a jug of water and loaves of bread, placed in his path.</>,
            },
            {
                pages: "93",
                text: <>Before leaving, he drank three times from a glass of holy water given to him by his mother, and stepped over the threshold with his right foot first.</>,
            },
            {
                pages: "93-94",
                text: <>When the groom&apos;s procession reached the bride&apos;s house, a whole sequence of ritualized mock resistance took place: the bride&apos;s brothers might block the horses, demanding a &ldquo;ransom&rdquo; of wine or money before letting the procession through, and family members would playfully strike the groom and his attendants.</>,
            },
            {
                pages: "93",
                text: <>The bride&apos;s mother met the groom in the courtyard, tied a string around him and slapped him. From inside the house the bride&apos;s family shouted <Term>Iu vâ duţeţ, more? Nu vâ u dămu!</Term> (&ldquo;Where are you going? We won&apos;t give her to you!&rdquo;). Nicolau records that at a wedding in Lăstuni in 1979, the bride&apos;s relatives built a barrier of maize stalks, and the groom was only let through after paying.</>,
            },
            {
                pages: "95",
                text: <>During the meal at the bride&apos;s house, the two sides sang songs of ritual hostility mocking each other; one teases the groom for bringing as his best men &ldquo;two toothless old men and two bachelors&rdquo;. Sometimes these songs turned into real quarrels and fights, and a few weddings ended there.</>,
            },
            {
                pages: "93-94",
                text: <>The bride&apos;s mother presented the groom&apos;s party with gifts of bread, pastries, and food, while attendants from the groom&apos;s side tried to secretly steal a small household object, believed to represent the bride&apos;s good luck.</>,
            },
            {
                pages: "102",
                text: <>During the vows, rice was thrown over the couple&apos;s heads &ldquo;so that they take root&rdquo;, and a boy would climb onto the roof to hammer on it, a charm meant to ensure that any children born of the marriage would not be born deaf.</>,
            },
            {
                pages: "102",
                text: <>Immediately after the ceremony, young men would playfully strike the wedding guests, a mock flagellation from which not even the priest was exempt.</>,
            },
            {
                pages: "96",
                text: <>Before leaving her parents&apos; home, the bride made a final visit to the room where she had spent time with her friends, drank three times from a cup of holy water given by her mother, and crossed herself three times.</>,
            },
            {
                pages: "97, 99",
                text: <>Before leaving her parents&apos; home, she drank water from the laps of her close relatives, and she would do the same with the groom&apos;s relatives when she arrived at his house. The groom&apos;s party paid her parents 31 coins for her, after haggling that made everyone laugh, and the children of the family sat on the dowry so that the groom&apos;s father had to buy it back from them. As she stepped over the threshold for the last time, she was not permitted to look back.</>,
            },
            { subheading: "Arriving at the Groom's House" },
            {
                pages: "100",
                text: <>The bride stepped into her new home over a piece of iron. She came in carrying a loaf of bread under each arm and the two wedding candles in her hands, while her mother-in-law walked ahead laying strips of woollen cloth in her path. At the door, the mother-in-law smeared the bride&apos;s lips with honey and the bride did the same to her; then the bride smeared honey on the door and the hearth. The two candles were set into the two loaves and placed on the table.</>,
            },
            {
                pages: "100",
                text: <>The groom tapped her lightly on the back with a rose branch. His relatives threw their hats at her; the hats were piled on a chair, she sat on them for a few seconds, then threw them over her shoulder. In some places she was also tested by having to lift tables, chairs and logs scattered around the courtyard using only her right hand.</>,
            },
            {
                pages: "101, 103",
                text: <>The new family sang her a wish that she would have nine sons: two shepherds to bring butter and cheese, two tailors, two goldsmiths, two coppersmiths, and one to become a brave captain to protect his eight brothers. Throughout the wedding, the bride stood silent, with her eyes on the ground and her face half covered.</>,
            },
            {
                pages: "101-102",
                text: <>The religious ceremony took place in the evening, at the groom&apos;s house, and the bride&apos;s parents did not attend. When the priest asked whether they agreed to the marriage, the groom answered &ldquo;yes&rdquo;, while the bride answered by kissing the priest&apos;s hand.</>,
            },
        ],
    },
    {
        id: "after",
        stage: "Monday to Thursday",
        title: "After the Wedding",
        paragraphs: [
            {
                pages: "102",
                text: <>The days following the wedding were filled with further ritual. On Monday and Tuesday, groups of young men in costume (<Term>babuyearii</Term>), sometimes dressed as gendarmes or as members of the bride&apos;s family, with faces blackened with charcoal, staged mock accusations that the groom&apos;s family had &ldquo;stolen&rdquo; the bride, extracting comic ransoms of food, drink, or money before the post-wedding feast.</>,
            },
            {
                pages: "102-103",
                text: <>On the Monday, the bride handed out her gifts to the guests (<Term>arcarea doarâloru</Term>), laying each one on their shoulder. The guests then went out into the courtyard and &ldquo;danced&rdquo; the gifts, still on their shoulders. When the bride led the round dance for the first time, the person next to her held the wedding flag in the hand closest to her, because no one was allowed to touch her.</>,
            },
            {
                pages: "102, 105",
                text: <>Her new household soon put her to work: she was asked to bake a pie, on the fourth day with a rolling pin improvised from a thorny rose branch, and was given wool to spin. After she sang for the guests on the Wednesday, her father-in-law gave her a chain to hang a pocket knife from, to defend herself and to cut bread for her children.</>,
            },
            {
                pages: "105-106",
                text: <>Between 100 and 200 sheep might be slaughtered for one wedding, and when the guests left on the Wednesday, each received a roast leg of mutton. It was also common for the groom to leave for the mountains with the sheep right after the wedding.</>,
            },
            {
                pages: "105",
                text: <>Verification of the bride&apos;s virginity was carried out on Wednesday morning by the mother-in-law and the godmother, who inspected the bride&apos;s nightgown. Her chastity was then publicly signaled through red kerchiefs displayed by young female relatives and through sweetened red <Term>rachiu</Term> served to the guests, with young messengers rewarded for carrying the news back to the bride&apos;s parents.</>,
            },
            {
                pages: "103-104",
                text: <>The trip to the well was one of the bride&apos;s first public duties as a married woman, taking place sometime between Tuesday and Thursday depending on the wedding&apos;s length. She bowed three times before the water and tossed in coins and sweets, then filled and emptied a jug three times while the wedding party watched, accompanied by a well-known ceremonial song.</>,
            },
            {
                pages: "104",
                text: <>Because many households had no separate bedroom for the new couple, wealthier families sometimes built a simple temporary structure beside the house for the wedding night. Otherwise, the newlyweds waited until the rest of the household was asleep before retiring together, or in some cases spent the night outdoors.</>,
            },
        ],
    },
    {
        id: "return-visit",
        stage: "The first Saturday after",
        title: "The Return Visit to the Bride's Parents (Turnarea Nveastâl'ei)",
        paragraphs: [
            {
                pages: "106",
                text: <>The return visit (<Term>turnarea nveastâl&apos;ei</Term>) was typically held on the first Saturday after the wedding, or sometimes as late as a month afterward, and served to show that the groom&apos;s family was pleased with their new daughter-in-law. Both families exchanged gifts on this occasion.</>,
            },
            {
                pages: "106",
                text: <>For the first year of marriage the young wife was called <Term>nveastâ nauâ</Term> (&ldquo;new bride&rdquo;), and elaborate systems of address governed how she referred to, and was addressed by, the members of her new family. These terms varied by whether her husband was the eldest, middle, or youngest son, and distinguished her from other daughters-in-law living in the same household.</>,
            },
        ],
    },
    {
        id: "married-life",
        stage: "The first years",
        title: "The First Years of Marriage",
        paragraphs: [
            {
                pages: "106-107",
                text: <>The young couple&apos;s relationship stayed very reserved in front of others. They did not use each other&apos;s names, saying only &ldquo;he&rdquo; or &ldquo;she&rdquo;. Until their first child was born, they did not speak to each other in front of their parents, and the wife did not address her husband in front of anyone else; if he came into a room where other people were, she left.</>,
            },
            {
                pages: "107",
                text: <>For the first year, the couple could only go visiting together with the husband&apos;s family. After that they could go alone, but they were not allowed to talk on the way: he walked in front and she followed. When they had to sit next to each other at the table, a cat, a chair or a broom was placed between them, and some couples were not allowed to look each other in the eye for three years after the wedding.</>,
            },
            {
                pages: "107",
                text: <>For forty days after the wedding, the bride kissed the hand of everyone older than her and received a coin each time. In a house with several daughters-in-law, the mother-in-law decided who did which work, and the heaviest chores usually fell to the youngest.</>,
            },
        ],
    },
]

export default function Wedding() {
    return (
        <TraditionPage
            title="Aromanian Betrothal and Wedding Traditions"
            intro="Marriage among the Aromanians unfolded as a long, carefully staged process, stretching from childhood matchmaking through a multi-day wedding celebration and beyond."
            sections={SECTIONS}
            source={NICOLAU_2001}
        />
    )
}

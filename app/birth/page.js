import Link from "next/link"

export default function Birth() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-orange-50 font-sans">
            <header className="relative w-full text-orange-50">
                <div className="flex flex-col items-center justify-start pt-5 gap-2 text-center">
                    <h1 className="text-base font-bold m-5 text-yellow-600 md:text-4xl sm:text-2xl">Aromanian Birth Traditions</h1>
                </div>
            </header>

            <main className="w-full max-w-3xl p-5 py-8">
                <div>
                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                       Among the Aromanians, birth was surrounded by an extensive web of beliefs and rituals meant to protect mother and child through every stage. From conception to the fortieth day after delivery and beyond, to baptism
                    
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001</cite>.                    
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:pb-10 text-2xl">
                        Conception and Pregnancy
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        Having many children was historically common, and the birth of a boy was traditionally met with greater joy, although daughters were also considered a source of good fortune
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.59</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        Fathers generally hoped for a first-born son to carry on their own father's name, while mothers hoped for a daughter to carry on their mother's name
                        
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.59</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                       Women who wished to avoid or end a pregnancy, or who struggled with infertility, turned to a wide range of folk remedies and rituals such as carrying particular objects to visiting a midwife for special massage, undergoing heat treatments, or making pilgrimages and vows at church
                        
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.59-60</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        The community also held many beliefs about how the timing and circumstances of conception shaped the child: children conceived on a Monday were thought to be born beautiful, healthy, and intelligent, while conception on a Saturday was believed to bring serious misfortune such as blindness or lameness
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.61</cite>.
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:pb-10 text-2xl">
                        The Birth
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        The moment labor began was kept as discreet as possible, with a household member quietly fetching the midwife. Upon entering, the midwife performed a small ritual with a wet cloth on the mother's back to ease the delivery
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.62</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        A range of sympathetic magic was used to speed a difficult labor by passing objects such as an egg, a shuttle, or a "thunderstone" through the mother's shirt while reciting formulas comparing the ease of the object's passage to the child's birth
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.62</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        After the birth, the mother performed several ritual acts, such as stepping over a tray of burning coals while declaring she had "passed through fire and was not burned" ("Tricui pritu focu ș-nu mi-arșiu")
                        
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.63</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                       The midwife tied a red-and-white belt around the new mother's belly, to prevent the new mother's heart from falling down, attached a garlic clove and a necklace made from red and white beads wrapped in a kandkerchief to her knit cap to prevent headaches, and eventually announced the birth from the window or doorway where children would wait to carry the news to the father and the rest of the village in exchange for a small reward
                        
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.63</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                       It is said that through birth, a woman gets rid of all the sicknesses and illnesses she has accumulated in her life
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.63</cite>.
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:pb-10 text-2xl">
                        The Forty-Day Confinement (known as Lăuzia)
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        For forty days following birth, the new mother(lăuza) was considered extremely vulnerable, "like glass", and was hedged about with protective customs: she could not wear a cross or pray before religious icons, could not be left alone with the baby before baptism, because the lăuza becomes shadowed and evil spirits (Ginții) will come and eat the newborn, could not change her clothes, and could not leave the house after sunset without covering herself completely, because the mountins would tremble
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.63</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        Sharp objects, ropes, garlic, and red-and-white threads were placed around her bed and doorway to ward off evil spirits and the "Umbre", evil shades believed to threaten mother and child
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.64</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        Mirrors in the room were covered and the space was censed with incense every night during this period
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.64</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        Visitors, mostly women bearing small pastries, began coming from the second day onward, though the very first day after birth was off-limits to visitors, and no one shook hands with the new mother during this period out of purity concerns
                        
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.64-65</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        At the end of the forty days, mother and child, freshly washed and dressed, and went together to church for a blessing
                        
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.65</cite>.
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:pb-10 text-2xl">
                        The Fates and the Naming Feast
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        On the third night after birth, the Aromanians believed that the Fate-Spirits (Ursitoarele) known by names such as Mire, Albe, Hărioase, and Muşate visited the newborn to determine its destiny
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.69</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        Doors were left open that night, and a special feast, "the table of Saint Mary" (masa ali Stâ-Mârii), was prepared in their honor with breads, a roast lamb, and other dishes, some of which had to be deliberately left aside for the visiting spirits
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.69-70</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        Various objects such as a pen, a coin and a pair of pliers, were placed on the infant's pillow so the baby might symbolically "choose" a future profession
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.64</cite>.
                    </p>

                    <h3 className="m-2 pb-5 text-rose-950 font-bold text-lg sm:m-3 text-xl md:pb-10 text-2xl">
                        Naming and Baptism
                    </h3>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        Until baptism, the child's chosen name was kept strictly secret, even from the parents in some cases, since revealing it early was believed to endanger the infant's life
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.71</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        If the newborn was a boy, the godfather typically chose a name from the father's family (or gave his own name), while the godmother chose from the mother's family if the newborn was a girl
                        
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.71</cite>.
                    </p>
                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        Baptism customarily took place on the first Sunday after birth, or within a month if the godfather was away
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.71</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        The christening procession, called a taifă, brought the child to church, where the priest received the infant, spat lightly behind its ear against catching cold, and pronounced its name which was announced throughout the village by children for a small payment
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.71</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        On the way home, the godfather carried the baptismal candle along with the child; if the candle went out en route, this was read as an omen that the child's life would be short
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.72</cite>.
                    </p>

                    <p className="text-yellow-950 pb-5 text-sm m-2 md:pb-10 text-lg sm:m-3 text-base">
                        At the doorway, the godfather handed the newly christened baby to the mother with the traditional words marking the child's passage from an unbaptized to a Christian state ("Turcu-ni dâdeși, creștinu ț-aducu")
                        <cite className="text-yellow-600">Aromânii. Credințe și obiceiuri, Irina Nicolau, 2001, pg.72</cite>.
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
import Link from "next/link"

export default function Quizzes() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-orange-50 font-sans">
            <header>
                <div className="flex flex-col items-center justify-start pt-5 gap-2 text-center">
                    <h1 className="text-base font-bold text-yellow-600 md:text-4xl sm:text-2xl">Quizzes & Practice</h1>
                </div>
            </header>

            <main className="w-full max-w-3xl p-5 py-8">
                <p className="text-yellow-950 pb-5 text-xs m-5 md:text-lg sm:m-3 text-base">
                    Structured practice materials for Aromanian are rare, which makes the few that exist especially valuable.
                    <cite className="text-sm block italic text-yellow-600">RISE UP Project, How to Use Digital Tools to Support Minoritised Languages</cite>
                </p>

                <p className="text-yellow-950 pb-5 text-xs m-5 md:text-lg sm:m-3 text-base">
                    One of the most complete is Anveatsã Armãneashti, an e-learning platform created in 2015–2016 by Elena Saricu Todica and Florentina, marking the first time digital tools for learning and teaching Aromanian were made available online.

                    <cite className="text-sm block italic text-yellow-600">RISE UP Project, How to Use Digital Tools to Support Minoritised Languages</cite>
                </p>

                <p className="text-yellow-950 pb-5 text-xs m-5 md:text-lg sm:m-3 text-base">
                    The platform is organized into three levels: an English-language track structured similarly to Duolingo for vocabulary and grammar practice, an in-language track for learners who already speak some Aromanian, and a document archive intended for self-study and advanced learners.

                    <cite className="text-sm block italic text-yellow-600">RISE UP Project, How to Use Digital Tools to Support Minoritised Languages</cite>
                </p>

                <div>
                    <h3 className="m-2 pb-5 text-yellow-600 font-bold text-lg sm:m-3 text-xl md:text-2xl">
                        Useful links:
                    </h3>

                    <Link href="https://armaneashti.online/?fbclid=PAcGRvZgRleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAwyNTYyODEwNDA1NTgAAaeZNtqje5Ln3d7vSVqMZKy3eK7qLWbL1BAC5rIy57uTHTVLlJErR1Obts7t8w_aem_r5Ai8IoCPSlAGHBQliq8Cg" className="m-5 text-sm font-bold text-rose-950 md:text-xl sm: m-3 text-lg">
                        Anveatsã Armãneashti
                    </Link>

                    <p className="text-yellow-950 pb-5 text-xs m-5 md:text-lg sm:m-3 text-base">
                        The first online platform built specifically for learning Aromanian, offering vocabulary, grammar, and self-study materials for learners at different levels.
                    </p>

                </div>

            </main>
        </div>
    )
}
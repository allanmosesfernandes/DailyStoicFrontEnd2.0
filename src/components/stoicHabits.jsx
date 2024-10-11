import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

const StoicHabits = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-center text-center mt-2 lg:pb-20 mb-8">
                <h1 className="font-gothic text-4xl lg:text-6xl border-t-2 border-slate-400 border-b-2 mb-10 p-4">
                    3 Everyday stoic habits
                </h1>
                <div className="leading-relaxed">
                    <p className="lg:text-xl sm:text-xl text-md font-playfair lg:w-9/12 w-11/12 m-auto leading-10">
                        Here are three simple Stoic habits you can incorporate into your daily life.{' '}
                        <br />
                        These timeless practices will help you build resilience, cultivate
                        gratitude, and live more intentionally.
                    </p>

                    <div className='mt-8'>
                        <Accordion
                            type="single"
                            collapsible
                            className="mx-auto lg:text-xl sm:text-xl text-md font-playfair lg:w-9/12 w-11/12 m-auto leading-10"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <span className="font-gothic">1.</span>Start your day with gratitude{' '}
                                </AccordionTrigger>
                                <AccordionContent className="lg:text-xl sm:text-xl text-md font-playfair mb-6">
                                    <p className="italic mb-3">
                                        <span className="">
                                            When you arise in the morning, think of what a precious
                                            privilege it is to be alive — to breathe, to think, to
                                            enjoy, to love.
                                        </span>
                                        — Marcus Aurelius
                                    </p>
                                    <p>
                                        Begin each day by listing three things you are grateful for. It
                                        could be something simple, like the warmth of the morning sun, a
                                        fresh cup of coffee, or the kindness of a friend. This small
                                        ritual helps shift your perspective to focus on the positives
                                        and cultivates a sense of fulfillment and contentment.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <span className="font-gothic">2.</span>Take wandering walks{' '}
                                </AccordionTrigger>
                                <AccordionContent className="lg:text-xl sm:text-xl text-md font-playfair mb-6">
                                    <p className="italic mb-3">
                                        <span className="">
                                            We should take wandering outdoor walks so that the mind
                                            might be nourished and refreshed by the open air and deep
                                            breathing.
                                        </span>
                                        — Marcus Aurelius
                                    </p>
                                    <p>
                                        Incorporate regular walks into your routine. Walking embodies
                                        the Stoic principle of "Solvitur Ambulando"—"it is solved by
                                        walking." These walks are not just about physical exercise but
                                        are an opportunity to clear your mind, connect with nature, and
                                        practice mindfulness.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    <span className="font-gothic">3.</span>Make time to read{' '}
                                </AccordionTrigger>
                                <AccordionContent className="lg:text-xl sm:text-xl text-md font-playfair mb-6">
                                    <p className="italic mb-3">
                                        <span className="">
                                            Reading nourishes the mind and refreshes it when it is
                                            wearied
                                        </span>
                                        — Seneca
                                    </p>
                                    <p>
                                        Reading is an essential habit for personal growth and
                                        self-reflection. Make time each day to read, whether it’s a
                                        book, an article, or even a few pages of something
                                        thought-provoking. Reading expands your knowledge, stimulates
                                        your imagination, and introduces you to new perspectives.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoicHabits;

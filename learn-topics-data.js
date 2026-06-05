/* ═══════════════════════════════════════════════════════════════════════════
   LEARN TOPICS DATA  —  learn-topics-data.js  (v7 Phase 5)
   58 CT/CE subtopics × 12 tasks = 696 tasks
   NOTE: options[0] = correct answer — shuffled at runtime.
   alternateAnswers[] present where multiple answers are valid.
   hint field present on VT, MG-verb, and WF tasks.
   flavor field present on every task: personalities|history|social|science.
   dualMode flag: true = MCQ + Type-in.
   ═══════════════════════════════════════════════════════════════════════════ */

const LEARN_TOPICS = [
  {
    id: "verb-tenses",
    title: "Verb Tenses & Voice",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "vt-prs-s",
        title: "Present Simple",
        tasks: [
          {
            id: "vt-prs-s-01",
            stem: "Roger Federer ___ tennis in a style admired by fans around the world.",
            options: ["plays", "is playing", "has played"],
            answer: "plays",
            explanation: "Permanent abilities and characteristic actions use Present Simple.",
            fullExplanation: "Present Simple describes permanent abilities and characteristic behaviour. 'Is playing' would suggest he is playing right now. 'Has played' would emphasise experience up to now, not his trademark style.",
            source: "Murphy, EGU (4e), Unit 1",
            hint: "play",
            flavor: "personalities"
          },
          {
            id: "vt-prs-s-02",
            stem: "Westminster Abbey ___ near the Houses of Parliament in central London.",
            options: ["stands", "is standing", "has stood"],
            answer: "stands",
            explanation: "Permanent locations use Present Simple.",
            fullExplanation: "Geographical facts and permanent locations take Present Simple. 'Is standing' suggests a temporary position. 'Has stood' focuses on duration and is unnecessary for a simple factual location.",
            source: "Swan, PEU (4e), §482.1",
            hint: "stand",
            flavor: "history"
          },
          {
            id: "vt-prs-s-03",
            stem: "My neighbour always ___ her dog before breakfast, whatever the weather.",
            options: ["walks", "is walking", "walked"],
            answer: "walks",
            explanation: "'Always' with a routine signals Present Simple.",
            fullExplanation: "Habitual actions marked by adverbs of frequency (always, usually, often) use Present Simple. 'Is walking' describes an action in progress right now. 'Walked' is Past Simple and would imply the habit has ended.",
            source: "Murphy, EGU (4e), Unit 1",
            hint: "walk",
            flavor: "social"
          },
          {
            id: "vt-prs-s-04",
            stem: "Sound ___ more slowly than light, which is why we see lightning before we hear thunder.",
            options: ["travels", "is travelling", "travelled"],
            answer: "travels",
            explanation: "Scientific facts use Present Simple.",
            fullExplanation: "Universal scientific truths are always expressed with Present Simple. 'Is travelling' would describe a single sound wave moving right now, not a general law. 'Travelled' is past tense and would mean this is no longer the case.",
            source: "Murphy, EGU (4e), Unit 1",
            hint: "travel",
            flavor: "science"
          },
          {
            id: "vt-prs-s-05",
            stem: "Serena Williams ___ younger players whenever she has time between tournaments.",
            options: ["coaches", "is coaching", "has coached"],
            answer: "coaches",
            explanation: "Regular repeated actions take Present Simple.",
            fullExplanation: "'Whenever' introduces a repeated pattern, which Present Simple expresses. 'Is coaching' describes a session happening right now. 'Has coached' refers to past experience, not a regular habit.",
            source: "Swan, PEU (4e), §482.2",
            hint: "coach",
            flavor: "personalities"
          },
          {
            id: "vt-prs-s-06",
            stem: "The Colosseum ___ millions of visitors to Rome each year.",
            options: ["attracts", "is attracting", "attracted"],
            answer: "attracts",
            explanation: "Recurring general facts use Present Simple.",
            fullExplanation: "'Each year' marks a recurring general fact, which Present Simple expresses. 'Is attracting' would suggest a temporary trend. 'Attracted' would refer to a past period only.",
            source: "Murphy, EGU (4e), Unit 1",
            hint: "attract",
            flavor: "history"
          },
          {
            id: "vt-prs-s-07",
            stem: "The receptionist ___ the office at half past eight every weekday.",
            options: ["opens", "is opening", "has opened"],
            answer: "opens",
            explanation: "Scheduled routine actions take Present Simple.",
            fullExplanation: "'Every weekday' signals a fixed schedule, which Present Simple expresses. 'Is opening' means the action is in progress now. 'Has opened' suggests a single past event with present relevance.",
            source: "Murphy, EGU (4e), Unit 1",
            hint: "open",
            flavor: "social"
          },
          {
            id: "vt-prs-s-08",
            stem: "Mercury ___ around the Sun faster than any other planet in the solar system.",
            options: ["orbits", "is orbiting", "orbited"],
            answer: "orbits",
            explanation: "Astronomical facts take Present Simple.",
            fullExplanation: "Permanent astronomical facts are expressed with Present Simple. 'Is orbiting' would describe an event happening in this instant. 'Orbited' would wrongly imply the planet no longer does so.",
            source: "Swan, PEU (4e), §482.1",
            hint: "orbit",
            flavor: "science"
          },
          {
            id: "vt-prs-s-09",
            stem: "Leonardo da Vinci's Mona Lisa ___ in the Louvre Museum in Paris.",
            options: ["hangs", "is hanging", "has hung"],
            answer: "hangs",
            explanation: "Present, permanent location — Present Simple.",
            fullExplanation: "The permanent location of an artwork takes Present Simple. 'Is hanging' would describe a temporary placement. 'Has hung' would emphasise duration, which the sentence doesn't require.",
            source: "Murphy, EGU (4e), Unit 1",
            hint: "hang",
            flavor: "personalities"
          },
          {
            id: "vt-prs-s-10",
            stem: "Hadrian's Wall ___ across northern England from coast to coast.",
            options: ["stretches", "is stretching", "stretched"],
            answer: "stretches",
            explanation: "Permanent geographical facts take Present Simple.",
            fullExplanation: "Permanent physical facts about the landscape are expressed with Present Simple. 'Is stretching' suggests active movement. 'Stretched' would mean the wall no longer exists, which is inaccurate.",
            source: "Swan, PEU (4e), §482.1",
            hint: "stretch",
            flavor: "history"
          },
          {
            id: "vt-prs-s-11",
            stem: "Our landlord ___ the rent on the first of every month without fail.",
            options: ["collects", "is collecting", "collected"],
            answer: "collects",
            explanation: "Regularly repeated actions use Present Simple.",
            fullExplanation: "'Every month' marks a routine, which Present Simple expresses. 'Is collecting' means right now. 'Collected' is past tense and would imply the routine has ended.",
            source: "Murphy, EGU (4e), Unit 1",
            hint: "collect",
            flavor: "social"
          },
          {
            id: "vt-prs-s-12",
            stem: "Photosynthesis ___ sunlight into chemical energy that plants store as sugars.",
            options: ["converts", "is converting", "converted"],
            answer: "converts",
            explanation: "Scientific processes expressed as general truths use Present Simple.",
            fullExplanation: "Processes described as general scientific truths take Present Simple. 'Is converting' would describe a single moment of conversion. 'Converted' would be past and incorrectly suggest the process has ended.",
            source: "Swan, PEU (4e), §482.1",
            hint: "convert",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-prs-c",
        title: "Present Continuous",
        tasks: [
          {
            id: "vt-prs-c-01",
            stem: "Look! The museum ___ Frida Kahlo's self-portraits in a special exhibition this month.",
            options: ["is displaying", "displays", "has displayed"],
            answer: "is displaying",
            explanation: "'This month' signals a temporary situation — Present Continuous is required.",
            fullExplanation: "Present Continuous describes something happening on a temporary basis around now. 'Displays' is Present Simple, which would state a permanent or habitual fact. 'Has displayed' is Present Perfect, focusing on past experience rather than the current temporary event.",
            source: "Murphy, EGU (4e), Unit 3",
            hint: "display",
            flavor: "personalities"
          },
          {
            id: "vt-prs-c-02",
            stem: "Archaeologists ___ the ruins of an ancient Roman forum near Naples at the moment.",
            options: ["are excavating", "excavate", "have excavated"],
            answer: "are excavating",
            explanation: "'At the moment' marks an ongoing action — Present Continuous is needed.",
            fullExplanation: "Present Continuous expresses an action in progress right now. 'Excavate' is Present Simple, which describes a habitual or general truth. 'Have excavated' is Present Perfect, focusing on completed experience rather than the ongoing process.",
            source: "Murphy, EGU (4e), Unit 3",
            hint: "excavate",
            flavor: "history"
          },
          {
            id: "vt-prs-c-03",
            stem: "My sister ___ for a new flat right now because her landlord sold the building.",
            options: ["is looking", "looks", "looked"],
            answer: "is looking",
            explanation: "'Right now' signals an action in progress — Present Continuous.",
            fullExplanation: "Present Continuous marks an activity currently in progress. 'Looks' in Present Simple would describe a regular habit, not a temporary search. 'Looked' is Past Simple, implying the search is already finished.",
            source: "Murphy, EGU (4e), Unit 3",
            hint: "look",
            flavor: "social"
          },
          {
            id: "vt-prs-c-04",
            stem: "Global temperatures ___ at an accelerating rate according to this decade's satellite data.",
            options: ["are rising", "rise", "rose"],
            answer: "are rising",
            explanation: "A changing trend ongoing over a period uses Present Continuous.",
            fullExplanation: "Present Continuous describes a developing or changing situation. 'Rise' (Present Simple) would state a timeless fact rather than a current trend. 'Rose' is Past Simple and would imply the process has already ended.",
            source: "Swan, PEU (4e), §482.4",
            hint: "rise",
            flavor: "science"
          },
          {
            id: "vt-prs-c-05",
            stem: "Muhammad Ali's daughter ___ his boxing legacy through a series of public speeches this year.",
            options: ["is promoting", "promotes", "has promoted"],
            answer: "is promoting",
            explanation: "'This year' signals a temporary ongoing activity — Present Continuous.",
            fullExplanation: "Present Continuous is used for activities happening in an extended present period ('this year'). 'Promotes' would be a habitual Present Simple. 'Has promoted' focuses on the fact that it has happened, not the ongoing nature of the effort.",
            source: "Murphy, EGU (4e), Unit 3",
            hint: "promote",
            flavor: "personalities"
          },
          {
            id: "vt-prs-c-06",
            stem: "Restorers ___ the frescoes inside the Sistine Chapel during this season's conservation programme.",
            options: ["are cleaning", "clean", "cleaned"],
            answer: "are cleaning",
            explanation: "A temporary activity in the current period uses Present Continuous.",
            fullExplanation: "Present Continuous describes work currently in progress over a defined temporary period. 'Clean' (Present Simple) would imply a permanent routine. 'Cleaned' is Past Simple, putting the action in a completed past time.",
            source: "Murphy, EGU (4e), Unit 4",
            hint: "clean",
            flavor: "history"
          },
          {
            id: "vt-prs-c-07",
            stem: "Our manager is always ___ the team meetings at the last minute, which drives everyone mad.",
            options: ["rescheduling", "reschedule", "rescheduled"],
            answer: "rescheduling",
            explanation: "'Is always rescheduling' — Present Continuous with 'always' for an annoying repeated habit.",
            fullExplanation: "Present Continuous with 'always' highlights an irritating habitual behaviour. The -ing form must follow 'is always'. 'Reschedule' is the bare infinitive and cannot follow 'is'. 'Rescheduled' is the past participle and does not fit here grammatically.",
            source: "Murphy, EGU (4e), Unit 4",
            hint: "reschedule",
            flavor: "social"
          },
          {
            id: "vt-prs-c-08",
            stem: "The Arctic ice sheet ___ at a measurable rate each summer due to rising air temperatures.",
            options: ["is melting", "melts", "melted"],
            answer: "is melting",
            explanation: "An ongoing environmental change uses Present Continuous.",
            fullExplanation: "Present Continuous expresses a developing situation — the ice is in the process of melting as a current trend. 'Melts' (Present Simple) would describe a simple factual seasonal cycle. 'Melted' is Past Simple, implying the process is over.",
            source: "Swan, PEU (4e), §482.4",
            hint: "melt",
            flavor: "science"
          },
          {
            id: "vt-prs-c-09",
            stem: "Stephen Hawking's publisher ___ a new illustrated edition of A Brief History of Time this season.",
            options: ["is releasing", "releases", "released"],
            answer: "is releasing",
            explanation: "'This season' marks a temporary current activity — Present Continuous.",
            fullExplanation: "Present Continuous is used for activities happening around the present moment. 'Releases' (Present Simple) would express a habitual or scheduled routine fact. 'Released' is Past Simple and places the action in a finished past moment.",
            source: "Murphy, EGU (4e), Unit 3",
            hint: "release",
            flavor: "personalities"
          },
          {
            id: "vt-prs-c-10",
            stem: "Historians ___ newly discovered letters written by Napoleon during the Egyptian campaign.",
            options: ["are analysing", "analyse", "analysed"],
            answer: "are analysing",
            explanation: "Work currently in progress uses Present Continuous.",
            fullExplanation: "Present Continuous describes an action actively in progress now. 'Analyse' in Present Simple would state a habitual action or general truth. 'Analysed' in Past Simple would move the analysis to a completed past moment.",
            source: "Murphy, EGU (4e), Unit 3",
            hint: "analyse",
            flavor: "history"
          },
          {
            id: "vt-prs-c-11",
            stem: "My neighbour is always ___ his music after midnight — the whole street can hear it.",
            options: ["blasting", "blast", "blasted"],
            answer: "blasting",
            explanation: "'Is always blasting' — Present Continuous with 'always' for an annoying habit.",
            fullExplanation: "Present Continuous with 'always' expresses an irritating repeated behaviour. The -ing form must follow 'is always'. 'Blast' is the bare infinitive and cannot follow 'is'. 'Blasted' is the past participle and does not fit this slot grammatically.",
            source: "Murphy, EGU (4e), Unit 4",
            hint: "blast",
            flavor: "social"
          },
          {
            id: "vt-prs-c-12",
            stem: "Scientists ___ a new vaccine for the dengue virus in trials currently under way in Brazil.",
            options: ["are testing", "test", "tested"],
            answer: "are testing",
            explanation: "Trials currently in progress use Present Continuous.",
            fullExplanation: "Present Continuous describes scientific work happening right now. 'Test' (Present Simple) would describe a routine or general scientific truth. 'Tested' is Past Simple, implying the trials have already concluded.",
            source: "Murphy, EGU (4e), Unit 3",
            hint: "test",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-pst-s",
        title: "Past Simple",
        tasks: [
          {
            id: "vt-pst-s-01",
            stem: "Marie Curie ___ the Nobel Prize in Chemistry in 1911, becoming the first person to win it twice.",
            options: ["won", "has won", "was winning"],
            answer: "won",
            explanation: "A completed past action with a specific date uses Past Simple.",
            fullExplanation: "Past Simple is used for completed actions at a definite past time ('in 1911'). 'Has won' is Present Perfect, which does not go with a closed past time marker. 'Was winning' is Past Continuous, which describes an action in progress rather than the moment of completion.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "win",
            flavor: "personalities"
          },
          {
            id: "vt-pst-s-02",
            stem: "The Berlin Wall ___ in November 1989, marking the end of the Cold War era in Europe.",
            options: ["fell", "has fallen", "was falling"],
            answer: "fell",
            explanation: "A completed historical event with a specific date uses Past Simple.",
            fullExplanation: "Past Simple describes a completed event at a specific past moment ('November 1989'). 'Has fallen' is Present Perfect, incompatible with a closed time reference. 'Was falling' is Past Continuous and would describe an ongoing process rather than the decisive event.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "fall",
            flavor: "history"
          },
          {
            id: "vt-pst-s-03",
            stem: "We ___ the flight departure board, then grabbed our luggage and ran to the gate.",
            options: ["checked", "were checking", "have checked"],
            answer: "checked",
            explanation: "A sequence of completed past actions uses Past Simple.",
            fullExplanation: "Past Simple expresses a sequence of completed actions (checked → grabbed → ran). 'Were checking' is Past Continuous, describing an action in progress rather than a quick completed one. 'Have checked' is Present Perfect and doesn't fit the narrative past sequence.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "check",
            flavor: "social"
          },
          {
            id: "vt-pst-s-04",
            stem: "Isaac Newton ___ the laws of motion in the late seventeenth century.",
            options: ["formulated", "has formulated", "was formulating"],
            answer: "formulated",
            explanation: "A completed past discovery with a time marker uses Past Simple.",
            fullExplanation: "Past Simple is required for completed actions placed at a specific past period ('late seventeenth century'). 'Has formulated' is Present Perfect, which cannot combine with a closed past time reference. 'Was formulating' implies the process was still in progress and incomplete.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "formulate",
            flavor: "science"
          },
          {
            id: "vt-pst-s-05",
            stem: "Pablo Picasso ___ Guernica in 1937 as a response to the bombing of a Basque town.",
            options: ["painted", "was painting", "has painted"],
            answer: "painted",
            explanation: "A single completed past action at a specified date uses Past Simple.",
            fullExplanation: "Past Simple records a completed event at a known past date ('1937'). 'Was painting' is Past Continuous and suggests an unfinished, ongoing process. 'Has painted' is Present Perfect, which cannot be anchored to a closed past date.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "paint",
            flavor: "personalities"
          },
          {
            id: "vt-pst-s-06",
            stem: "The first modern Olympic Games ___ in Athens in 1896 after a gap of more than a thousand years.",
            options: ["took place", "have taken place", "were taking place"],
            answer: "took place",
            explanation: "A completed historical event with a specific year uses Past Simple.",
            fullExplanation: "Past Simple is required for a completed event at a definite past date ('1896'). 'Have taken place' is Present Perfect, incompatible with a closed past time marker. 'Were taking place' is Past Continuous, implying an event in progress at that moment.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "take",
            flavor: "history"
          },
          {
            id: "vt-pst-s-07",
            stem: "The children ___ their sandwiches, drank their juice, and then played in the garden.",
            options: ["ate", "were eating", "have eaten"],
            answer: "ate",
            explanation: "A past sequence of completed actions uses Past Simple.",
            fullExplanation: "Past Simple describes a series of completed actions in sequence (ate → drank → played). 'Were eating' is Past Continuous, implying the eating was still in progress, which breaks the sequence. 'Have eaten' is Present Perfect and does not fit a narrative sequence set in the past.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "eat",
            flavor: "social"
          },
          {
            id: "vt-pst-s-08",
            stem: "Charles Darwin ___ his theory of natural selection after observing finch species in the Galápagos Islands.",
            options: ["developed", "was developing", "has developed"],
            answer: "developed",
            explanation: "A completed past scientific discovery uses Past Simple.",
            fullExplanation: "Past Simple records a completed achievement. 'Was developing' is Past Continuous, emphasising the process rather than the completed result. 'Has developed' is Present Perfect, which would not anchor the event to a past context as clearly as needed.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "develop",
            flavor: "science"
          },
          {
            id: "vt-pst-s-09",
            stem: "Maya Angelou ___ I Know Why the Caged Bird Sings, published in 1969.",
            options: ["wrote", "has written", "was writing"],
            answer: "wrote",
            explanation: "A completed past act of creation with an associated date uses Past Simple.",
            fullExplanation: "Past Simple is used for completed actions at a specific past time ('published in 1969'). 'Has written' is Present Perfect and cannot be linked to a closed past date. 'Was writing' is Past Continuous and focuses on the process rather than the completed work.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "write",
            flavor: "personalities"
          },
          {
            id: "vt-pst-s-10",
            stem: "Pompeii ___ under metres of volcanic ash when Mount Vesuvius erupted in 79 AD.",
            options: ["disappeared", "has disappeared", "was disappearing"],
            answer: "disappeared",
            explanation: "A completed historical event at a specific past date uses Past Simple.",
            fullExplanation: "Past Simple expresses a completed action at a definite past time ('79 AD'). 'Has disappeared' is Present Perfect, incompatible with a closed historical date. 'Was disappearing' is Past Continuous, suggesting the process was still in progress — but the sudden burial was instantaneous.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "disappear",
            flavor: "history"
          },
          {
            id: "vt-pst-s-11",
            stem: "My grandfather ___ his first car when he was twenty-five and drove it for over thirty years.",
            options: ["bought", "was buying", "has bought"],
            answer: "bought",
            explanation: "A past completed action linked to a specific age uses Past Simple.",
            fullExplanation: "Past Simple is used for a completed event at a definite past time ('when he was twenty-five'). 'Was buying' is Past Continuous, implying the purchase was in progress and not yet finished. 'Has bought' is Present Perfect, which would not match the past narrative context.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "buy",
            flavor: "social"
          },
          {
            id: "vt-pst-s-12",
            stem: "Alexander Fleming ___ penicillin accidentally in his laboratory in London in 1928.",
            options: ["discovered", "was discovering", "has discovered"],
            answer: "discovered",
            explanation: "A completed past discovery with a specific date uses Past Simple.",
            fullExplanation: "Past Simple records a completed event at a specific past date ('1928'). 'Was discovering' is Past Continuous, implying an ongoing process of discovery rather than the key moment. 'Has discovered' is Present Perfect, which cannot be anchored to a closed past date.",
            source: "Murphy, EGU (4e), Unit 5",
            hint: "discover",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-pst-c",
        title: "Past Continuous",
        tasks: [
          {
            id: "vt-pst-c-01",
            stem: "Agatha Christie ___ her most famous detective novel when she received the news of her missing husband.",
            options: ["was writing", "wrote", "had written"],
            answer: "was writing",
            explanation: "An action in progress at a past moment uses Past Continuous.",
            fullExplanation: "Past Continuous describes an action that was in progress at a specific past moment. 'Wrote' is Past Simple, which would describe a completed event. 'Had written' is Past Perfect, implying the writing was already finished before the news arrived.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "write",
            flavor: "personalities"
          },
          {
            id: "vt-pst-c-02",
            stem: "Soldiers ___ across the border when the armistice was suddenly announced in 1918.",
            options: ["were marching", "marched", "had marched"],
            answer: "were marching",
            explanation: "An action in progress when another (short) event interrupted it uses Past Continuous.",
            fullExplanation: "Past Continuous describes the ongoing background action (marching) that was interrupted by the armistice. 'Marched' is Past Simple, which would present both actions as equally completed and sequential. 'Had marched' is Past Perfect, suggesting the marching was completed before the announcement.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "march",
            flavor: "history"
          },
          {
            id: "vt-pst-c-03",
            stem: "I ___ a report when the power suddenly went out and I lost all my work.",
            options: ["was writing", "wrote", "have written"],
            answer: "was writing",
            explanation: "An action in progress at the moment of interruption uses Past Continuous.",
            fullExplanation: "Past Continuous describes the background action (writing) that was interrupted by the power cut. 'Wrote' is Past Simple and would suggest the writing was completed, not interrupted. 'Have written' is Present Perfect and does not fit a finished past narrative.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "write",
            flavor: "social"
          },
          {
            id: "vt-pst-c-04",
            stem: "The volcano ___ ash and gas for several hours before lava finally reached the village.",
            options: ["was ejecting", "ejected", "had ejected"],
            answer: "was ejecting",
            explanation: "A prolonged background process before another past event uses Past Continuous.",
            fullExplanation: "Past Continuous expresses an ongoing process (ejecting) that preceded and was still in progress when another event (lava reaching the village) occurred. 'Ejected' is Past Simple, treating the action as a simple completed event. 'Had ejected' is Past Perfect, implying the ejection was completely over before the lava appeared.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "eject",
            flavor: "science"
          },
          {
            id: "vt-pst-c-05",
            stem: "Nikola Tesla ___ on his wireless electricity project when Edison publicly challenged his methods.",
            options: ["was working", "worked", "has worked"],
            answer: "was working",
            explanation: "An ongoing past activity interrupted by another event uses Past Continuous.",
            fullExplanation: "Past Continuous describes Tesla's activity in progress (working on the project) at the moment of the interruption (Edison's challenge). 'Worked' is Past Simple, which would simply state a completed action. 'Has worked' is Present Perfect and does not fit a past narrative context.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "work",
            flavor: "personalities"
          },
          {
            id: "vt-pst-c-06",
            stem: "Thousands of pilgrims ___ to Santiago de Compostela when the cathedral's main door was sealed for renovation.",
            options: ["were travelling", "travelled", "had travelled"],
            answer: "were travelling",
            explanation: "A background activity in progress when a shorter event occurred uses Past Continuous.",
            fullExplanation: "Past Continuous describes the ongoing movement of pilgrims (background) at the moment the door was sealed (foreground event). 'Travelled' in Past Simple would present both actions as a completed sequence. 'Had travelled' is Past Perfect, implying the journey was entirely complete before the sealing.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "travel",
            flavor: "history"
          },
          {
            id: "vt-pst-c-07",
            stem: "The waiter ___ the order when someone at the next table knocked a glass off the table.",
            options: ["was taking", "took", "had taken"],
            answer: "was taking",
            explanation: "The interrupted action (taking the order) uses Past Continuous.",
            fullExplanation: "Past Continuous describes the action in progress (taking the order) that was interrupted by the noise from the next table. 'Took' is Past Simple, which would suggest both events happened one after another in sequence. 'Had taken' is Past Perfect, implying the order was already fully taken before the interruption.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "take",
            flavor: "social"
          },
          {
            id: "vt-pst-c-08",
            stem: "The rover ___ soil samples from the Martian surface when one of its wheels became stuck in a dune.",
            options: ["was collecting", "collected", "had collected"],
            answer: "was collecting",
            explanation: "An activity in progress at the moment of interruption uses Past Continuous.",
            fullExplanation: "Past Continuous expresses the ongoing process (collecting samples) that was interrupted by the wheel getting stuck. 'Collected' in Past Simple would make the two events sequential and both completed. 'Had collected' is Past Perfect, implying collection was finished before the wheel problem arose.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "collect",
            flavor: "science"
          },
          {
            id: "vt-pst-c-09",
            stem: "Vincent van Gogh ___ Starry Night while he was staying in the Saint-Paul-de-Mausole asylum in 1889.",
            options: ["was creating", "created", "had created"],
            answer: "was creating",
            explanation: "An action in progress during a specified past period uses Past Continuous.",
            fullExplanation: "Past Continuous describes an activity in progress during a background period ('while he was staying'). 'Created' in Past Simple would simply state the work as a completed event without linking it to the overlapping action. 'Had created' is Past Perfect, wrongly implying the creation was completed before the asylum stay.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "create",
            flavor: "personalities"
          },
          {
            id: "vt-pst-c-10",
            stem: "Workers ___ the foundations of the new parliament building when they unearthed Roman mosaic tiles.",
            options: ["were digging", "dug", "had dug"],
            answer: "were digging",
            explanation: "The interrupted background activity uses Past Continuous.",
            fullExplanation: "Past Continuous describes the ongoing action (digging) at the moment of discovery (finding the tiles). 'Dug' in Past Simple would present both events as a simple sequence. 'Had dug' is Past Perfect, implying the digging was completed before the tiles were found.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "dig",
            flavor: "history"
          },
          {
            id: "vt-pst-c-11",
            stem: "My brother ___ a podcast when his microphone suddenly stopped working mid-sentence.",
            options: ["was recording", "recorded", "has recorded"],
            answer: "was recording",
            explanation: "The action in progress at the moment of interruption uses Past Continuous.",
            fullExplanation: "Past Continuous describes the background activity (recording) that was cut short by the microphone failure. 'Recorded' in Past Simple would suggest both events were brief and sequential. 'Has recorded' is Present Perfect and does not fit a specific past narrative.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "record",
            flavor: "social"
          },
          {
            id: "vt-pst-c-12",
            stem: "The International Space Station ___ over the Pacific Ocean when the solar panel sensor malfunctioned.",
            options: ["was orbiting", "orbited", "had orbited"],
            answer: "was orbiting",
            explanation: "An action in progress at a specified past moment uses Past Continuous.",
            fullExplanation: "Past Continuous describes the ongoing action (orbiting) at the moment when the shorter event (malfunction) occurred. 'Orbited' in Past Simple would treat both as completed sequential events. 'Had orbited' is Past Perfect, suggesting the orbit was entirely over before the malfunction.",
            source: "Murphy, EGU (4e), Unit 6",
            hint: "orbit",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-pp-s",
        title: "Present Perfect Simple",
        tasks: [
          {
            id: "vt-pp-s-01",
            stem: "Malala Yousafzai ___ the Nobel Peace Prize, making her the youngest laureate in history.",
            options: ["has won", "won", "was winning"],
            answer: "has won",
            explanation: "A life achievement viewed from the present perspective uses Present Perfect.",
            fullExplanation: "Present Perfect describes a past event with current relevance and no specific closed past time marker. 'Won' is Past Simple, which would require a specific date to be idiomatic. 'Was winning' is Past Continuous, implying an action in progress rather than a completed achievement.",
            source: "Murphy, EGU (4e), Unit 7",
            hint: "win",
            flavor: "personalities"
          },
          {
            id: "vt-pp-s-02",
            stem: "Explorers ___ all seven continents, completing a journey that started over five hundred years ago.",
            options: ["have mapped", "mapped", "were mapping"],
            answer: "have mapped",
            explanation: "A life-experience achievement with present relevance uses Present Perfect.",
            fullExplanation: "Present Perfect expresses an achievement whose result is relevant now. 'Mapped' in Past Simple would require a specific past time expression. 'Were mapping' is Past Continuous, describing an ongoing activity rather than the completed result.",
            source: "Murphy, EGU (4e), Unit 7",
            hint: "map",
            flavor: "history"
          },
          {
            id: "vt-pp-s-03",
            stem: "My colleague ___ just ___ back from a business trip to Seoul and looks exhausted.",
            options: ["has / arrived", "had / arrived", "was / arriving"],
            answer: "has / arrived",
            explanation: "'Just' with Present Perfect describes a very recent completed action.",
            fullExplanation: "Present Perfect with 'just' expresses an action completed very recently with present consequence (she looks exhausted). 'Had arrived' is Past Perfect, placing the arrival before another past event — not applicable here. 'Was arriving' is Past Continuous, describing an action in progress.",
            source: "Murphy, EGU (4e), Unit 8",
            hint: "arrive",
            flavor: "social"
          },
          {
            id: "vt-pp-s-04",
            stem: "Scientists ___ evidence of water ice in the permanently shadowed craters of the Moon.",
            options: ["have detected", "detected", "were detecting"],
            answer: "have detected",
            explanation: "A recent scientific discovery with present relevance uses Present Perfect.",
            fullExplanation: "Present Perfect describes a discovery that is relevant to the present scientific understanding, without a closed date. 'Detected' in Past Simple would require a specific time marker. 'Were detecting' is Past Continuous and would imply the detection was still in progress.",
            source: "Murphy, EGU (4e), Unit 7",
            hint: "detect",
            flavor: "science"
          },
          {
            id: "vt-pp-s-05",
            stem: "Roger Federer ___ never ___ a match at Wimbledon in the first round throughout his career.",
            options: ["has / lost", "had / lost", "was / losing"],
            answer: "has / lost",
            explanation: "'Never' + Present Perfect expresses a life-experience fact up to now.",
            fullExplanation: "Present Perfect with 'never' describes something that has not occurred in someone's life experience up to the present. 'Had lost' is Past Perfect, relating to a point before another past event. 'Was losing' is Past Continuous and does not work with 'never' in this context.",
            source: "Murphy, EGU (4e), Unit 8",
            hint: "lose",
            flavor: "personalities"
          },
          {
            id: "vt-pp-s-06",
            stem: "Archaeologists ___ already ___ three underground chambers beneath the Great Pyramid this year.",
            options: ["have / discovered", "had / discovered", "were / discovering"],
            answer: "have / discovered",
            explanation: "'Already' + Present Perfect reports something completed before expected, relevant now.",
            fullExplanation: "Present Perfect with 'already' emphasises that something has happened sooner than expected, and 'this year' (open period) confirms it. 'Had discovered' is Past Perfect, used before another past event. 'Were discovering' is Past Continuous, not compatible with 'already' in this structure.",
            source: "Murphy, EGU (4e), Unit 8",
            hint: "discover",
            flavor: "history"
          },
          {
            id: "vt-pp-s-07",
            stem: "The package ___ not ___ yet, so please do not sign anything on the delivery form.",
            options: ["has / arrived", "had / arrived", "was / arriving"],
            answer: "has / arrived",
            explanation: "'Yet' + negative Present Perfect describes something expected but not completed.",
            fullExplanation: "Negative Present Perfect with 'yet' expresses that something expected has not happened up to now. 'Had arrived' is Past Perfect, used before a past reference point. 'Was arriving' is Past Continuous and does not work with 'yet' in this structure.",
            source: "Murphy, EGU (4e), Unit 8",
            hint: "arrive",
            flavor: "social"
          },
          {
            id: "vt-pp-s-08",
            stem: "The average global sea level ___ by about twenty centimetres since the early twentieth century.",
            options: ["has risen", "rose", "was rising"],
            answer: "has risen",
            explanation: "'Since' with a span to the present uses Present Perfect.",
            fullExplanation: "Present Perfect with 'since' expresses a change that started in the past and continues to be relevant now. 'Rose' is Past Simple, which would require the period to be closed and finished. 'Was rising' is Past Continuous, describing progress rather than the cumulative result.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "rise",
            flavor: "science"
          },
          {
            id: "vt-pp-s-09",
            stem: "Jane Austen ___ only six completed novels, yet her influence on English literature has been immense.",
            options: ["has left", "left", "was leaving"],
            answer: "has left",
            explanation: "A legacy still relevant today uses Present Perfect to connect past to present.",
            fullExplanation: "Present Perfect links Austen's past creative output to its continuing relevance ('has been immense'). 'Left' in Past Simple would treat the legacy as a closed past fact. 'Was leaving' is Past Continuous and describes an ongoing process, not a completed body of work.",
            source: "Murphy, EGU (4e), Unit 7",
            hint: "leave",
            flavor: "personalities"
          },
          {
            id: "vt-pp-s-10",
            stem: "Humanity ___ to the Moon six times since Neil Armstrong first landed there in 1969.",
            options: ["has travelled", "travelled", "was travelling"],
            answer: "has travelled",
            explanation: "'Since 1969' connecting past to present uses Present Perfect.",
            fullExplanation: "Present Perfect with 'since' expresses repeated experience across a period stretching to the present. 'Travelled' in Past Simple would need a specific, closed time reference. 'Was travelling' is Past Continuous and describes an action in progress rather than completed visits.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "travel",
            flavor: "history"
          },
          {
            id: "vt-pp-s-11",
            stem: "I ___ for this job for three months, but I still haven't heard back from the company.",
            options: ["have been waiting", "waited", "am waiting"],
            answer: "have been waiting",
            explanation: "'For three months' extending to now uses Present Perfect (Continuous) for ongoing states.",
            fullExplanation: "Present Perfect expresses an action or state that began in the past and continues to the present ('for three months'). 'Waited' in Past Simple would imply the wait is over. 'Am waiting' is Present Continuous, which expresses the current moment but does not convey duration from a past starting point.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "wait",
            flavor: "social"
          },
          {
            id: "vt-pp-s-12",
            stem: "Researchers ___ for decades to develop a material stronger than steel but lighter than aluminium.",
            options: ["have been trying", "tried", "are trying"],
            answer: "have been trying",
            explanation: "'For decades' reaching the present uses Present Perfect for an ongoing effort.",
            fullExplanation: "Present Perfect expresses effort that started in the past and continues now ('for decades'). 'Tried' in Past Simple would close the time frame and imply the attempts have stopped. 'Are trying' is Present Continuous and describes the current moment only, without expressing the duration from the past.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "try",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-pp-c",
        title: "Present Perfect Continuous",
        tasks: [
          {
            id: "vt-pp-c-01",
            stem: "Agatha Christie ___ detective fiction since the 1920s, and her novels remain bestsellers worldwide.",
            options: ["has been writing", "wrote", "has written"],
            answer: "has been writing",
            explanation: "'Since the 1920s' with present relevance signals Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous emphasises the unbroken continuity of an activity from a past starting point to the present. 'Since the 1920s' marks when the activity began. 'Wrote' (Past Simple) would suggest she has stopped. 'Has written' (Present Perfect Simple) focuses on the completed body of work rather than the ongoing act of writing.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "write",
            flavor: "personalities"
          },
          {
            id: "vt-pp-c-02",
            stem: "Historians ___ medieval manuscripts in the Vatican archives for centuries to understand the Middle Ages.",
            options: ["have been studying", "studied", "have studied"],
            answer: "have been studying",
            explanation: "An unbroken scholarly activity from the past to the present uses Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous expresses a process that has been in progress over a long period and continues to the present. 'For centuries' gives the extended duration. 'Studied' (Past Simple) would imply the research has stopped. 'Have studied' (Present Perfect Simple) would emphasise the accumulated findings rather than the ongoing activity of studying.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "study",
            flavor: "history"
          },
          {
            id: "vt-pp-c-03",
            stem: "My brother ___ for a new job since he was made redundant last spring.",
            options: ["has been looking", "looked", "is looking"],
            answer: "has been looking",
            explanation: "'Since he was made redundant' with ongoing search requires Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous links a past starting point ('since last spring') to the present, showing the activity is still ongoing. 'Looked' (Past Simple) would suggest the job search is finished. 'Is looking' (Present Continuous) describes only the present moment and does not convey how long the search has lasted.",
            source: "Murphy, EGU (4e), Unit 10",
            hint: "look",
            flavor: "social"
          },
          {
            id: "vt-pp-c-04",
            stem: "Scientists ___ the movement of tectonic plates for decades, confirming the theory of continental drift.",
            options: ["have been monitoring", "monitored", "have monitored"],
            answer: "have been monitoring",
            explanation: "An ongoing scientific activity over 'decades' to the present uses Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous highlights that a process has been going on continuously from the past to now. 'For decades' signals the duration. 'Monitored' (Past Simple) would wrongly imply the monitoring has ceased. 'Have monitored' (Present Perfect Simple) would focus on the confirmed results rather than the continuing act of observation.",
            source: "Swan, PEU (4e), §421.2",
            hint: "monitor",
            flavor: "science"
          },
          {
            id: "vt-pp-c-05",
            stem: "Stephen Hawking ___ the mysteries of the universe since the 1960s, producing groundbreaking theories.",
            options: ["has been investigating", "investigated", "has investigated"],
            answer: "has been investigating",
            explanation: "'Since the 1960s' with ongoing scientific inquiry uses Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous expresses duration of an activity that began at a specific past point and continues to the present. 'Since the 1960s' marks the start of this unbroken inquiry. 'Investigated' (Past Simple) would suggest his research ended. 'Has investigated' (Present Perfect Simple) would focus on completed discoveries rather than the ongoing activity of investigation.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "investigate",
            flavor: "personalities"
          },
          {
            id: "vt-pp-c-06",
            stem: "Explorers ___ the ruins of ancient Rome ever since the Renaissance period began.",
            options: ["have been visiting", "visited", "are visiting"],
            answer: "have been visiting",
            explanation: "'Ever since' with ongoing activity from the past to now requires Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous uses 'ever since' to mark the beginning of an unbroken activity that continues to the present. 'Visited' (Past Simple) would suggest visits have stopped. 'Are visiting' (Present Continuous) describes only what is happening at this moment and does not capture the historical duration.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "visit",
            flavor: "history"
          },
          {
            id: "vt-pp-c-07",
            stem: "The children ___ all afternoon and the living room is now a complete mess.",
            options: ["have been playing", "played", "were playing"],
            answer: "have been playing",
            explanation: "'All afternoon' explaining a present result uses Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous explains a present situation (the messy room) through an activity that has been happening over a recent period. 'All afternoon' is a key duration marker for this tense. 'Played' (Past Simple) would imply the playing is over and not link to the current state. 'Were playing' (Past Continuous) refers to a past moment only and cannot explain the present mess.",
            source: "Murphy, EGU (4e), Unit 10",
            hint: "play",
            flavor: "social"
          },
          {
            id: "vt-pp-c-08",
            stem: "Engineers ___ on solar panel efficiency for years, recently achieving conversion rates above twenty percent.",
            options: ["have been working", "worked", "are working"],
            answer: "have been working",
            explanation: "'For years' with a recently achieved result signals Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous shows that work has been ongoing for an extended period, leading to a recent outcome. 'For years' marks the duration. 'Worked' (Past Simple) would imply the engineering effort has ended. 'Are working' (Present Continuous) only describes the current moment and misses the historical duration of the effort.",
            source: "Swan, PEU (4e), §421.3",
            hint: "work",
            flavor: "science"
          },
          {
            id: "vt-pp-c-09",
            stem: "Pablo Picasso ___ new artistic styles since his early career, continually reinventing himself as a painter.",
            options: ["has been exploring", "explored", "has explored"],
            answer: "has been exploring",
            explanation: "'Since his early career' with ongoing artistic activity uses Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous expresses an activity that started in the past and has continued to the present. 'Since his early career' marks the beginning of this unbroken process of exploration. 'Explored' (Past Simple) would imply he stopped exploring new styles. 'Has explored' (Present Perfect Simple) would focus on the styles he has already mastered rather than the ongoing act of exploration.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "explore",
            flavor: "personalities"
          },
          {
            id: "vt-pp-c-10",
            stem: "The Nile ___ through northeastern Africa for millions of years, shaping the landscape over time.",
            options: ["has been flowing", "flowed", "has flowed"],
            answer: "has been flowing",
            explanation: "A natural, ongoing process over 'millions of years' to now uses Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous expresses a process that has been going on continuously from a distant past point to the present. 'For millions of years' gives the duration. 'Flowed' (Past Simple) would wrongly imply the river stopped flowing. 'Has flowed' (Present Perfect Simple) would emphasise the total distance covered rather than the ongoing nature of the flow.",
            source: "Murphy, EGU (4e), Unit 9",
            hint: "flow",
            flavor: "history"
          },
          {
            id: "vt-pp-c-11",
            stem: "Our project team ___ on the report since Monday and we plan to submit it tomorrow.",
            options: ["has been working", "worked", "is working"],
            answer: "has been working",
            explanation: "'Since Monday' with work still in progress uses Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous links the past starting point ('since Monday') to the present, showing the activity is still ongoing. 'Worked' (Past Simple) would imply the report work is finished. 'Is working' (Present Continuous) only describes what is happening right now without expressing the duration since Monday.",
            source: "Murphy, EGU (4e), Unit 10",
            hint: "work",
            flavor: "social"
          },
          {
            id: "vt-pp-c-12",
            stem: "Glaciers ___ at an accelerating rate since the mid-twentieth century due to rising global temperatures.",
            options: ["have been retreating", "retreated", "have retreated"],
            answer: "have been retreating",
            explanation: "'Since the mid-twentieth century' with an ongoing process uses Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous highlights an ongoing natural process from a specific past point to the present. 'Since the mid-twentieth century' marks the start of accelerating retreat. 'Retreated' (Past Simple) would wrongly suggest glaciers have stopped retreating. 'Have retreated' (Present Perfect Simple) would focus on the measured distance of retreat rather than the continuing process.",
            source: "Swan, PEU (4e), §421.2",
            hint: "retreat",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-pastperf",
        title: "Past Perfect Simple",
        tasks: [
          {
            id: "vt-pastperf-01",
            stem: "By the time Mozart ___ his first symphony, he had already composed several minuets and sonatas.",
            options: ["wrote", "had written", "was writing"],
            answer: "wrote",
            explanation: "The second, earlier action uses Past Perfect; the later action ('By the time') uses Past Simple.",
            fullExplanation: "In 'By the time + Past Simple, Past Perfect' structures, the 'by the time' clause takes Past Simple for the later reference point. The earlier completed action ('had already composed') uses Past Perfect. 'Had written' would make both clauses Past Perfect, creating ambiguity. 'Was writing' (Past Continuous) is wrong because 'wrote' gives the finished event marking the time boundary.",
            source: "Murphy, EGU (4e), Unit 16",
            hint: "write",
            flavor: "personalities"
          },
          {
            id: "vt-pastperf-02",
            stem: "By the time the Roman legions ___ Britain in 43 AD, several Celtic tribes had already settled the island.",
            options: ["invaded", "had invaded", "were invading"],
            answer: "invaded",
            explanation: "'By the time' + Past Simple marks the later event; the earlier fact takes Past Perfect.",
            fullExplanation: "The 'by the time' clause takes Past Simple ('invaded') to mark the reference point in the past. The action completed before that — tribes settling the island — uses Past Perfect ('had already settled'). 'Had invaded' would make both clauses Past Perfect, removing the time sequence. 'Were invading' (Past Continuous) does not express the completed point-in-time event needed here.",
            source: "Murphy, EGU (4e), Unit 16",
            hint: "invade",
            flavor: "history"
          },
          {
            id: "vt-pastperf-03",
            stem: "When the guests arrived, Sarah ___ all the food and was ready to serve dinner.",
            options: ["had prepared", "prepared", "was preparing"],
            answer: "had prepared",
            explanation: "The earlier completed action before the guests arrived uses Past Perfect Simple.",
            fullExplanation: "Past Perfect Simple ('had prepared') shows that Sarah finished preparing before the guests arrived. The sequence is clear: first the preparation, then the arrival. 'Prepared' (Past Simple) would suggest both happened at the same time or in quick succession, losing the before-and-after distinction. 'Was preparing' (Past Continuous) would imply she was still in the middle of cooking when they arrived.",
            source: "Murphy, EGU (4e), Unit 16",
            hint: "prepare",
            flavor: "social"
          },
          {
            id: "vt-pastperf-04",
            stem: "Before the telescope ___ in the early 1600s, astronomers had relied solely on the naked eye.",
            options: ["was invented", "had been invented", "invented"],
            answer: "was invented",
            explanation: "'Before' + Past Simple marks the later event; the earlier situation uses Past Perfect.",
            fullExplanation: "The 'before' clause takes Past Simple ('was invented') to mark the later event that ended the preceding situation. The earlier ongoing state ('had relied') uses Past Perfect. 'Had been invented' in the 'before' clause would create a non-standard double Past Perfect. 'Invented' would be incorrect since the telescope cannot invent itself — the passive 'was invented' is required.",
            source: "Swan, PEU (4e), §421.4",
            hint: "invent",
            flavor: "science"
          },
          {
            id: "vt-pastperf-05",
            stem: "Charles Dickens ___ three novels before he turned thirty, establishing himself as a major literary voice.",
            options: ["had published", "published", "had been publishing"],
            answer: "had published",
            explanation: "Three completed novels before turning thirty uses Past Perfect Simple.",
            fullExplanation: "Past Perfect Simple ('had published') expresses an action (publishing three novels) completed before a past reference point (turning thirty). 'Published' (Past Simple) would simply list two past events without clearly showing which came first. 'Had been publishing' (Past Perfect Continuous) would emphasise the ongoing process of writing rather than the completed achievement of three finished novels.",
            source: "Murphy, EGU (4e), Unit 16",
            hint: "publish",
            flavor: "personalities"
          },
          {
            id: "vt-pastperf-06",
            stem: "After the last soldier ___, the generals signed the peace treaty ending World War One.",
            options: ["had withdrawn", "withdrew", "was withdrawing"],
            answer: "had withdrawn",
            explanation: "The earlier completed action before signing uses Past Perfect Simple.",
            fullExplanation: "Past Perfect Simple ('had withdrawn') shows that the soldiers' withdrawal was completed before the generals signed the treaty. 'After' signals sequence: first withdrawal, then signing. 'Withdrew' (Past Simple) in an 'after' clause is also grammatically possible in informal usage but 'had withdrawn' is the more precise sequence marker. 'Was withdrawing' (Past Continuous) would imply the withdrawal was still in progress when the signing happened.",
            source: "Murphy, EGU (4e), Unit 16",
            hint: "withdraw",
            flavor: "history"
          },
          {
            id: "vt-pastperf-07",
            stem: "By the time the manager arrived, the team ___ the problem and submitted a solution.",
            options: ["had already solved", "already solved", "was already solving"],
            answer: "had already solved",
            explanation: "'By the time the manager arrived' signals the later past event; solving came earlier — Past Perfect.",
            fullExplanation: "Past Perfect Simple with 'already' ('had already solved') stresses that the solution was complete before the manager's arrival. 'By the time' introduces the later reference point. 'Already solved' (Past Simple without had) is grammatically incomplete for this sequence marker. 'Was already solving' (Past Continuous) would mean solving was in progress when the manager arrived, not that it was finished.",
            source: "Murphy, EGU (4e), Unit 16",
            hint: "solve",
            flavor: "social"
          },
          {
            id: "vt-pastperf-08",
            stem: "Before scientists ___ the structure of DNA in 1953, the mechanism of heredity remained a mystery.",
            options: ["discovered", "had discovered", "were discovering"],
            answer: "discovered",
            explanation: "'Before' + Past Simple marks the boundary event; the earlier state takes Past Perfect.",
            fullExplanation: "The 'before' clause takes Past Simple ('discovered') to mark the event that ended a prior situation. The earlier ongoing state ('remained a mystery') is already in Past Simple here, showing the normal two-past-simple pattern when 'before' makes the sequence clear. 'Had discovered' in the 'before' clause would be redundant. 'Were discovering' (Past Continuous) does not express the definitive moment of discovery.",
            source: "Swan, PEU (4e), §421.4",
            hint: "discover",
            flavor: "science"
          },
          {
            id: "vt-pastperf-09",
            stem: "By the time Isaac Newton published Principia Mathematica, he ___ the laws of motion for years.",
            options: ["had formulated", "had been formulating", "formulated"],
            answer: "had formulated",
            explanation: "Completed formulation before publication uses Past Perfect Simple.",
            fullExplanation: "Past Perfect Simple ('had formulated') shows that Newton's theoretical work was complete before the reference point of publication. 'Had been formulating' (Past Perfect Continuous) would emphasise the ongoing process of work rather than the completed achievement. 'Formulated' (Past Simple) would simply list two events without clearly marking which came first.",
            source: "Murphy, EGU (4e), Unit 16",
            hint: "formulate",
            flavor: "personalities"
          },
          {
            id: "vt-pastperf-10",
            stem: "By the time the Berlin Wall fell in 1989, the Cold War ___ for over four decades.",
            options: ["had lasted", "lasted", "had been lasting"],
            answer: "had lasted",
            explanation: "Duration of state completed before the 1989 reference point uses Past Perfect Simple.",
            fullExplanation: "Past Perfect Simple ('had lasted') expresses a state that had been ongoing and was complete by a specific past reference point (1989). 'By the time' introduces the later event that followed. 'Lasted' (Past Simple) would simply state a fact without connecting to the reference point of the Wall's fall. 'Had been lasting' (Past Perfect Continuous) is unusual with stative verbs like 'last'; Past Perfect Simple is preferred.",
            source: "Murphy, EGU (4e), Unit 16",
            hint: "last",
            flavor: "history"
          },
          {
            id: "vt-pastperf-11",
            stem: "She realised she ___ her passport at home only when the airport security officer asked for it.",
            options: ["had left", "left", "was leaving"],
            answer: "had left",
            explanation: "Leaving the passport happened before the realisation — Past Perfect Simple.",
            fullExplanation: "Past Perfect Simple ('had left') shows that the act of leaving the passport at home occurred earlier than the moment of realisation at security. 'Left' (Past Simple) would place both events at the same time, making the sequence less clear. 'Was leaving' (Past Continuous) would suggest she was in the process of leaving when asked, which contradicts the meaning.",
            source: "Murphy, EGU (4e), Unit 16",
            hint: "leave",
            flavor: "social"
          },
          {
            id: "vt-pastperf-12",
            stem: "Before the ozone layer ___ thinning in the 1970s, scientists had not predicted such rapid atmospheric change.",
            options: ["began", "had begun", "was beginning"],
            answer: "began",
            explanation: "'Before' + Past Simple marks the later event; the earlier state uses Past Perfect.",
            fullExplanation: "The 'before' clause uses Past Simple ('began') to mark the event that changed a prior situation. The situation that preceded it ('had not predicted') is expressed in Past Perfect. 'Had begun' in the 'before' clause would create a non-standard double past perfect sequence. 'Was beginning' (Past Continuous) implies a process in progress rather than the definitive starting point of a detectable trend.",
            source: "Swan, PEU (4e), §421.4",
            hint: "begin",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-fut-will",
        title: "Future with will",
        tasks: [
          {
            id: "vt-fut-will-01",
            stem: "I think Serena Williams ___ remembered as one of the greatest athletes in sporting history.",
            options: ["will be", "is going to be", "is being"],
            answer: "will be",
            explanation: "'I think' signals a personal prediction, which uses 'will', not 'going to'.",
            fullExplanation: "'Will' is used for predictions based on personal opinion or belief, especially after phrases like 'I think', 'I believe', or 'I expect'. 'Is going to be' is used for predictions based on visible present evidence, which is absent here. 'Is being' (Present Continuous) does not express a future prediction at all.",
            source: "Murphy, EGU (4e), Unit 19",
            hint: "be",
            flavor: "personalities"
          },
          {
            id: "vt-fut-will-02",
            stem: "Historians believe future generations ___ the moon landing of 1969 as the greatest technological achievement of the century.",
            options: ["will regard", "are going to regard", "regard"],
            answer: "will regard",
            explanation: "A belief-based future prediction uses 'will', not 'going to'.",
            fullExplanation: "'Will' expresses predictions and opinions about the future, especially after verbs of belief such as 'believe', 'think', and 'expect'. 'Are going to regard' would imply there is current evidence pointing to this outcome, which is not the case here. 'Regard' (Present Simple) does not express a future meaning in this context.",
            source: "Murphy, EGU (4e), Unit 19",
            hint: "regard",
            flavor: "history"
          },
          {
            id: "vt-fut-will-03",
            stem: "A: The printer has run out of ink. B: Don't worry, I ___ a new cartridge from the supply room.",
            options: ["will get", "am going to get", "am getting"],
            answer: "will get",
            explanation: "A decision made at the moment of speaking uses 'will', not 'going to'.",
            fullExplanation: "'Will' is used for spontaneous decisions made at the moment of speaking, in response to new information. The speaker decides to get a cartridge only after hearing about the problem. 'Am going to get' would imply the speaker had already planned this before the conversation. 'Am getting' (Present Continuous for future) also suggests a prior arrangement.",
            source: "Murphy, EGU (4e), Unit 20",
            hint: "get",
            flavor: "social"
          },
          {
            id: "vt-fut-will-04",
            stem: "Experts predict that artificial intelligence ___ many repetitive tasks within the next ten years.",
            options: ["will automate", "is going to automate", "automates"],
            answer: "will automate",
            explanation: "An expert prediction about the future uses 'will'.",
            fullExplanation: "'Will' expresses predictions, especially those based on knowledge, analysis, or expert opinion rather than immediate visible evidence. 'Is going to automate' would require present evidence of the automation already beginning. 'Automates' (Present Simple) would express a general habit or schedule, not a future prediction.",
            source: "Murphy, EGU (4e), Unit 19",
            hint: "automate",
            flavor: "science"
          },
          {
            id: "vt-fut-will-05",
            stem: "I promise I ___ you the book back before the end of the week, without fail.",
            options: ["will give", "am going to give", "am giving"],
            answer: "will give",
            explanation: "'I promise I will' is the standard form for a promise — a key use of 'will'.",
            fullExplanation: "'Will' is the standard future form for promises and assurances. 'I promise I will give' signals a personal commitment made at the moment of speaking. 'Am going to give' would imply a prior plan rather than a promise made now. 'Am giving' (Present Continuous for future) would suggest an already-arranged exchange, not a promise.",
            source: "Murphy, EGU (4e), Unit 20",
            hint: "give",
            flavor: "personalities"
          },
          {
            id: "vt-fut-will-06",
            stem: "Many historians believe the construction of the Suez Canal ___ continue to influence global trade for centuries.",
            options: ["will", "is going to", "is"],
            answer: "will",
            explanation: "A future opinion-based prediction after 'believe' uses 'will'.",
            fullExplanation: "'Will' follows verbs of opinion such as 'believe' to express a prediction about the future. 'Is going to' would require visible present evidence of something about to happen. 'Is' (Present Simple) states a current fact rather than a future prediction.",
            source: "Murphy, EGU (4e), Unit 19",
            hint: "continue",
            flavor: "history"
          },
          {
            id: "vt-fut-will-07",
            stem: "A: I cannot carry all these bags upstairs. B: That's fine — I ___ you with them.",
            options: ["will help", "am going to help", "am helping"],
            answer: "will help",
            explanation: "A spontaneous offer made at the moment of hearing a problem uses 'will'.",
            fullExplanation: "'Will' is used for offers and volunteering help decided at the moment of speaking. The speaker hears the problem and immediately offers assistance. 'Am going to help' would suggest the speaker had already planned to help before the request. 'Am helping' (Present Continuous for future) implies a prior arrangement rather than a spontaneous offer.",
            source: "Murphy, EGU (4e), Unit 20",
            hint: "help",
            flavor: "social"
          },
          {
            id: "vt-fut-will-08",
            stem: "Scientists expect that quantum computers ___ traditional encryption methods within the next two decades.",
            options: ["will surpass", "are going to surpass", "surpass"],
            answer: "will surpass",
            explanation: "'Expect' signals an opinion-based prediction, requiring 'will'.",
            fullExplanation: "'Will' follows 'expect' to express a scientific prediction or forecast. 'Are going to surpass' would imply there is immediate, visible evidence that quantum computers are on the verge of surpassing encryption — which is not indicated here. 'Surpass' (Present Simple) cannot express a future prediction without a time marker that forces the future interpretation.",
            source: "Murphy, EGU (4e), Unit 19",
            hint: "surpass",
            flavor: "science"
          },
          {
            id: "vt-fut-will-09",
            stem: "Shakespeare's works ___ be studied and performed for centuries to come, I am certain of that.",
            options: ["will", "are going to", "are"],
            answer: "will",
            explanation: "'I am certain' signals a belief-based prediction using 'will'.",
            fullExplanation: "'Will' expresses strong predictions based on personal certainty or belief. 'I am certain of that' confirms this is an opinion about the future, not an observation of present evidence. 'Are going to' would imply visible current signs of this outcome. 'Are' (Present Simple) states an existing fact, not a future prediction.",
            source: "Murphy, EGU (4e), Unit 19",
            hint: "study",
            flavor: "personalities"
          },
          {
            id: "vt-fut-will-10",
            stem: "Archaeologists believe new excavations at Pompeii ___ reveal more details about Roman daily life.",
            options: ["will", "are going to", "are"],
            answer: "will",
            explanation: "'Believe' followed by a future prediction uses 'will', not 'going to'.",
            fullExplanation: "'Will' is used after verbs of belief ('believe', 'think', 'expect') to express a prediction about the future. 'Are going to' would require visible present-tense evidence that the revelation is imminent. 'Are' (Present Simple) does not express a future meaning in this sentence.",
            source: "Murphy, EGU (4e), Unit 19",
            hint: "reveal",
            flavor: "history"
          },
          {
            id: "vt-fut-will-11",
            stem: "A: The coffee machine is broken again. B: I ___ call the engineer right away.",
            options: ["will", "am going to", "am"],
            answer: "will",
            explanation: "A decision made at the moment of learning about a problem uses 'will'.",
            fullExplanation: "'Will' expresses a spontaneous decision made in response to new information. The speaker decides to call the engineer only upon hearing the machine is broken. 'Am going to' would suggest the call was already planned before this conversation. 'Am' (Present Continuous) would need a verb form ('am calling') to express a future arrangement.",
            source: "Murphy, EGU (4e), Unit 20",
            hint: "call",
            flavor: "social"
          },
          {
            id: "vt-fut-will-12",
            stem: "Researchers predict that Mars ___ support a small human colony before the end of the twenty-first century.",
            options: ["will", "is going to", "is"],
            answer: "will",
            explanation: "'Predict' signals a future opinion requiring 'will', not 'going to'.",
            fullExplanation: "'Will' follows verbs such as 'predict', 'think', 'believe', and 'expect' to express a future opinion or forecast. 'Is going to' would require observable present evidence that a colony is imminent. 'Is' (Present Simple) states a current fact and does not express a future prediction.",
            source: "Murphy, EGU (4e), Unit 19",
            hint: "support",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-fut-going",
        title: "Future with going to",
        tasks: [
          {
            id: "vt-fut-going-01",
            stem: "Usain Bolt announced last week that he ___ a training academy for young sprinters in Jamaica.",
            options: ["is going to open", "will open", "opens"],
            answer: "is going to open",
            explanation: "A pre-announced plan or intention uses 'going to', not 'will'.",
            fullExplanation: "'Going to' expresses a pre-decided intention or plan that was formed before the moment of speaking. Bolt announced the plan last week, so the intention already exists. 'Will open' would be a spontaneous decision or prediction based on opinion, not a prior plan. 'Opens' (Present Simple) could express a scheduled event but is less natural here without a timetable context.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "open",
            flavor: "personalities"
          },
          {
            id: "vt-fut-going-02",
            stem: "Look at those dark clouds — it ___ rain before the outdoor ceremony finishes.",
            options: ["is going to", "will", "is"],
            answer: "is going to",
            explanation: "Visible present evidence (dark clouds) predicts an imminent event — 'going to', not 'will'.",
            fullExplanation: "'Going to' is used for predictions based on visible present evidence. The dark clouds are concrete signs that rain is imminent. 'Will' would express an opinion-based prediction without reference to present evidence. 'Is' (Present Simple) cannot express a future prediction in this context.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "rain",
            flavor: "history"
          },
          {
            id: "vt-fut-going-03",
            stem: "We have already booked the tickets — we ___ visit the Louvre Museum next Saturday.",
            options: ["are going to", "will", "are"],
            answer: "are going to",
            explanation: "A visit decided and booked in advance is a plan — 'going to', not 'will'.",
            fullExplanation: "'Going to' expresses a plan or intention that was decided before the moment of speaking. The tickets are already booked, confirming a prior decision. 'Will' would suggest a spontaneous decision made right now, which contradicts 'already booked'. 'Are' (Present Simple) would need a time expression and context of a fixed schedule to work as a future form.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "visit",
            flavor: "social"
          },
          {
            id: "vt-fut-going-04",
            stem: "The seismograph readings are off the scale — the volcano ___ erupt within hours.",
            options: ["is going to", "will", "is"],
            answer: "is going to",
            explanation: "Current instrument readings provide present evidence of imminent eruption — 'going to'.",
            fullExplanation: "'Going to' is used when present evidence makes a future event appear certain or imminent. The seismograph readings are visible, concrete proof that the eruption is about to happen. 'Will' would express an opinion-based forecast rather than an evidence-based prediction. 'Is' (Present Simple) cannot express a future event without a future time reference.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "erupt",
            flavor: "science"
          },
          {
            id: "vt-fut-going-05",
            stem: "Leonardo da Vinci's notebooks have been digitised, and the museum ___ release them online next year.",
            options: ["is going to", "will", "releases"],
            answer: "is going to",
            explanation: "A pre-announced institutional plan uses 'going to', not 'will'.",
            fullExplanation: "'Going to' expresses a plan or intention already decided before the moment of speaking. The museum has made the decision to release the notebooks online — it is a prior plan. 'Will' would be used for a prediction or a spontaneous decision made right now. 'Releases' (Present Simple for future) would only work for a fixed scheduled event like a timetable.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "release",
            flavor: "personalities"
          },
          {
            id: "vt-fut-going-06",
            stem: "The government has approved funding, and they ___ restore the ancient aqueduct over the next three years.",
            options: ["are going to", "will", "restore"],
            answer: "are going to",
            explanation: "An approved plan with confirmed funding uses 'going to', not 'will'.",
            fullExplanation: "'Going to' expresses an intention or plan already decided and backed by action (approved funding). 'Will' would be used for a prediction or an unplanned decision, but here the decision is already made. 'Restore' (Present Simple) would require a fixed timetable structure to express a future event.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "restore",
            flavor: "history"
          },
          {
            id: "vt-fut-going-07",
            stem: "I have decided that I ___ apply for the management position that has just been advertised.",
            options: ["am going to", "will", "am"],
            answer: "am going to",
            explanation: "'I have decided' signals a prior intention — 'going to', not 'will'.",
            fullExplanation: "'Going to' follows expressions of prior decision such as 'I have decided', 'I have planned', or 'I intend'. The decision was made before speaking. 'Will' would suggest the speaker decides at this very moment — contradicting 'have decided'. 'Am' (without an infinitive) cannot form a future tense on its own here.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "apply",
            flavor: "social"
          },
          {
            id: "vt-fut-going-08",
            stem: "The patient's test results show dangerously high cholesterol levels — the doctor says he ___ need surgery.",
            options: ["is going to", "will", "is"],
            answer: "is going to",
            explanation: "Present medical evidence predicting a certain outcome requires 'going to'.",
            fullExplanation: "'Going to' is used when present observable evidence (the test results) makes a future outcome almost certain. The test results are concrete present signs of what will happen. 'Will' would express the doctor's general opinion without direct connection to the present evidence. 'Is' (Present Simple) cannot express a future prediction in this structure.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "need",
            flavor: "science"
          },
          {
            id: "vt-fut-going-09",
            stem: "Pablo Picasso reportedly told friends he ___ start a new painting series inspired by African masks.",
            options: ["was going to", "would", "was"],
            answer: "was going to",
            explanation: "A reported prior intention in past context uses 'was going to', not 'would'.",
            fullExplanation: "'Was going to' is the past form of 'going to' used for a pre-existing plan or intention reported in the past. Picasso had already decided before telling his friends. 'Would' could express a prediction in reported speech but does not capture the sense of a prior personal intention. 'Was' (Past Simple of 'to be') cannot form a future meaning here without the infinitive.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "start",
            flavor: "personalities"
          },
          {
            id: "vt-fut-going-10",
            stem: "The demolition company has confirmed that they ___ tear down the old city walls next month.",
            options: ["are going to", "will", "tear"],
            answer: "are going to",
            explanation: "A confirmed, pre-arranged plan uses 'going to', not 'will'.",
            fullExplanation: "'Going to' expresses a confirmed plan or arrangement already decided before speaking. The demolition company has confirmed this — the decision is made. 'Will' would be appropriate for a spontaneous decision or an opinion-based prediction. 'Tear' (Present Simple) would need a fixed-schedule context such as a timetable to function as a future form.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "tear",
            flavor: "history"
          },
          {
            id: "vt-fut-going-11",
            stem: "Watch out — that shelf is very unstable and it ___ fall if you add more weight.",
            options: ["is going to", "will", "falls"],
            answer: "is going to",
            explanation: "Visible instability as present evidence of imminent collapse uses 'going to'.",
            fullExplanation: "'Going to' is used when the speaker can see present evidence that makes a future event seem inevitable. The visible instability of the shelf is the evidence. 'Will' would be used for a conditional prediction ('it will fall if...') based on opinion rather than visible proof. 'Falls' (Present Simple) would describe a habitual or scheduled event, which does not fit this warning context.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "fall",
            flavor: "social"
          },
          {
            id: "vt-fut-going-12",
            stem: "Carbon dioxide levels in the atmosphere have reached record highs — scientists warn the planet ___ warm further.",
            options: ["is going to", "will", "is"],
            answer: "is going to",
            explanation: "Measured record-high CO2 levels provide present evidence of predicted warming — 'going to'.",
            fullExplanation: "'Going to' is used when present observable data (record CO2 levels) serves as concrete evidence that a future event is almost certain. 'Will' would express a general opinion-based prediction not tied to the specific present evidence. 'Is' (Present Simple) cannot function as a future prediction without a time marker and additional context.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "warm",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-pass-prs",
        title: "Passive — present",
        tasks: [
          {
            id: "vt-pass-prs-01",
            stem: "The Nobel Peace Prize ___ every year in Oslo, Norway.",
            options: ["is awarded", "awards", "was awarded"],
            answer: "is awarded",
            explanation: "Passive Present: is/are + past participle for a current regular action.",
            fullExplanation: "We use is/are + past participle (is awarded) when the subject receives the action and the agent is unimportant. 'Awards' is active and would need an agent subject. 'Was awarded' is Passive Past and implies it no longer happens.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "award",
            flavor: "personalities"
          },
          {
            id: "vt-pass-prs-02",
            stem: "The Magna Carta ___ in the British Library in London.",
            options: ["is kept", "keeps", "was kept"],
            answer: "is kept",
            explanation: "Passive Present states where the document is currently stored.",
            fullExplanation: "'Is kept' (is + past participle) correctly expresses the present passive for a fact about the document's current location. 'Keeps' is active and would need a human subject. 'Was kept' would incorrectly place the storage in the past.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "keep",
            flavor: "history"
          },
          {
            id: "vt-pass-prs-03",
            stem: "The office meeting room ___ for group presentations every Friday.",
            options: ["is used", "uses", "was used"],
            answer: "is used",
            explanation: "Passive Present: the room receives the action of being used.",
            fullExplanation: "'Is used' is the correct Passive Present (is + past participle) showing the room is the recipient of the action. 'Uses' is an active third-person singular form and needs an agent subject. 'Was used' is Passive Past and would wrongly suggest this no longer happens.",
            source: "Swan, PEU (4e), §417",
            hint: "use",
            flavor: "social"
          },
          {
            id: "vt-pass-prs-04",
            stem: "Oxygen ___ in the lungs and then transported to cells throughout the body.",
            options: ["is absorbed", "absorbs", "was absorbed"],
            answer: "is absorbed",
            explanation: "Scientific passive process: the subject (oxygen) receives the action.",
            fullExplanation: "'Is absorbed' (is + past participle) correctly expresses the passive for a universal biological process. 'Absorbs' is active and would require oxygen to perform the action. 'Was absorbed' is Past Passive and would wrongly imply this process no longer occurs.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "absorb",
            flavor: "science"
          },
          {
            id: "vt-pass-prs-05",
            stem: "Pablo Picasso's Guernica ___ in the Museo Reina Sofía in Madrid.",
            options: ["is displayed", "displays", "was displayed"],
            answer: "is displayed",
            explanation: "Passive Present: the painting is the recipient of the action.",
            fullExplanation: "'Is displayed' uses is + past participle to express the current permanent location of the artwork in the passive voice. 'Displays' is active and would need a museum or curator as subject. 'Was displayed' is Passive Past and incorrectly implies the painting is no longer there.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "display",
            flavor: "personalities"
          },
          {
            id: "vt-pass-prs-06",
            stem: "The Olympic Games ___ by thousands of athletes from around the world.",
            options: ["are attended", "attend", "were attended"],
            answer: "are attended",
            explanation: "Passive Present with plural subject: are + past participle.",
            fullExplanation: "'Are attended' uses are + past participle for the plural subject 'The Olympic Games'. 'Attend' is the active form and would need a different subject. 'Were attended' is Past Passive and would wrongly imply the games no longer take place.",
            source: "Swan, PEU (4e), §417",
            hint: "attend",
            flavor: "history"
          },
          {
            id: "vt-pass-prs-07",
            stem: "New employees ___ on health and safety procedures during their first week.",
            options: ["are trained", "train", "were trained"],
            answer: "are trained",
            explanation: "Passive Present: new employees receive the training.",
            fullExplanation: "'Are trained' (are + past participle) correctly expresses that the employees are the recipients of the action. 'Train' is the active form and implies the employees train others. 'Were trained' is Past Passive and would suggest this practice has ended.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "train",
            flavor: "social"
          },
          {
            id: "vt-pass-prs-08",
            stem: "Carbon dioxide ___ by plants during the process of photosynthesis.",
            options: ["is absorbed", "absorbs", "was absorbed"],
            answer: "is absorbed",
            explanation: "Passive Present for a scientific fact: CO₂ receives the action.",
            fullExplanation: "'Is absorbed' (is + past participle) expresses the passive voice for a permanent scientific truth. 'Absorbs' is active and would mean CO₂ itself absorbs something. 'Was absorbed' is Past Passive and incorrectly implies this process has stopped.",
            source: "Swan, PEU (4e), §417",
            hint: "absorb",
            flavor: "science"
          },
          {
            id: "vt-pass-prs-09",
            stem: "William Shakespeare's plays ___ in theatres across the world every season.",
            options: ["are performed", "perform", "were performed"],
            answer: "are performed",
            explanation: "Passive Present with plural subject: are + past participle.",
            fullExplanation: "'Are performed' uses are + past participle for the plural subject 'plays'. 'Perform' is active and would need actors or theatres as subject. 'Were performed' is Past Passive and would wrongly imply the plays are no longer staged.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "perform",
            flavor: "personalities"
          },
          {
            id: "vt-pass-prs-10",
            stem: "The Eiffel Tower ___ by approximately seven million tourists every year.",
            options: ["is visited", "visits", "was visited"],
            answer: "is visited",
            explanation: "Passive Present: the tower is the recipient of the visiting action.",
            fullExplanation: "'Is visited' (is + past participle) is the correct Passive Present for a recurring fact. 'Visits' is the active form and would need the tower as an agent. 'Was visited' is Past Passive and would imply tourists no longer go there.",
            source: "Swan, PEU (4e), §417",
            hint: "visit",
            flavor: "history"
          },
          {
            id: "vt-pass-prs-11",
            stem: "The rubbish bins in our street ___ twice a week by the local council.",
            options: ["are emptied", "empty", "were emptied"],
            answer: "are emptied",
            explanation: "Passive Present for a regular municipal routine.",
            fullExplanation: "'Are emptied' (are + past participle) correctly expresses the passive voice for a recurring current action. 'Empty' is the active base form and would need the bins as agent. 'Were emptied' is Past Passive and would wrongly suggest this service has ceased.",
            source: "Murphy, EGU (4e), Unit 21",
            hint: "empty",
            flavor: "social"
          },
          {
            id: "vt-pass-prs-12",
            stem: "Satellites ___ to monitor weather patterns across the entire globe.",
            options: ["are used", "use", "were used"],
            answer: "are used",
            explanation: "Passive Present: satellites receive the action of being used.",
            fullExplanation: "'Are used' (are + past participle) correctly expresses that satellites are the subject receiving the action. 'Use' is active and would mean satellites use something else. 'Were used' is Past Passive and would imply satellites are no longer employed for this purpose.",
            source: "Swan, PEU (4e), §417",
            hint: "use",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-pass-pst",
        title: "Passive — past",
        tasks: [
          {
            id: "vt-pass-pst-01",
            stem: "The theory of relativity ___ by Albert Einstein in 1905.",
            options: ["was developed", "developed", "is developed"],
            answer: "was developed",
            explanation: "Passive Past: was + past participle for a completed historical action.",
            fullExplanation: "'Was developed' (was + past participle) correctly places the action in the past with Einstein as the implied agent. 'Developed' is the active form and would need Einstein as subject. 'Is developed' is Passive Present and contradicts the completed past context of 1905.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "develop",
            flavor: "personalities"
          },
          {
            id: "vt-pass-pst-02",
            stem: "The Berlin Wall ___ in November 1989, ending the division of Germany.",
            options: ["was demolished", "demolished", "is demolished"],
            answer: "was demolished",
            explanation: "Passive Past: the wall received the action in a completed historical event.",
            fullExplanation: "'Was demolished' (was + past participle) correctly expresses the completed past passive action. 'Demolished' is active and would require an explicit agent subject. 'Is demolished' is Present Passive and is incorrect for a finished historical event.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "demolish",
            flavor: "history"
          },
          {
            id: "vt-pass-pst-03",
            stem: "My sister ___ for the position of manager last month, but she was not selected.",
            options: ["was interviewed", "interviewed", "is interviewed"],
            answer: "was interviewed",
            explanation: "Passive Past: she received the action of being interviewed in the past.",
            fullExplanation: "'Was interviewed' (was + past participle) correctly expresses the completed past passive. 'Interviewed' is active and would mean she conducted interviews herself. 'Is interviewed' is Passive Present and contradicts the past time marker 'last month'.",
            source: "Swan, PEU (4e), §417",
            hint: "interview",
            flavor: "social"
          },
          {
            id: "vt-pass-pst-04",
            stem: "The structure of DNA ___ by Watson and Crick in 1953.",
            options: ["was discovered", "discovered", "is discovered"],
            answer: "was discovered",
            explanation: "Passive Past: DNA received the action in a completed scientific discovery.",
            fullExplanation: "'Was discovered' (was + past participle) correctly expresses the completed past passive. 'Discovered' is the active form and would require Watson and Crick as the explicit subject. 'Is discovered' is Passive Present and is wrong for a finished historical event.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "discover",
            flavor: "science"
          },
          {
            id: "vt-pass-pst-05",
            stem: "Romeo and Juliet ___ by William Shakespeare in the late sixteenth century.",
            options: ["was written", "wrote", "is written"],
            answer: "was written",
            explanation: "Passive Past: the play received the action of being written.",
            fullExplanation: "'Was written' (was + past participle) correctly expresses the completed past passive for a singular work. 'Wrote' is active and needs Shakespeare as subject. 'Is written' is Passive Present and contradicts the historical time frame.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "write",
            flavor: "personalities"
          },
          {
            id: "vt-pass-pst-06",
            stem: "The ancient city of Pompeii ___ by the eruption of Mount Vesuvius in 79 AD.",
            options: ["was destroyed", "destroyed", "is destroyed"],
            answer: "was destroyed",
            explanation: "Passive Past: Pompeii received the action from the volcanic eruption.",
            fullExplanation: "'Was destroyed' (was + past participle) correctly expresses a completed past event in which the city was the recipient. 'Destroyed' is active and would require the eruption as the explicit subject. 'Is destroyed' is Passive Present and is grammatically wrong for a historical event.",
            source: "Swan, PEU (4e), §417",
            hint: "destroy",
            flavor: "history"
          },
          {
            id: "vt-pass-pst-07",
            stem: "All the guests ___ to the wedding reception by email last week.",
            options: ["were invited", "invited", "are invited"],
            answer: "were invited",
            explanation: "Passive Past with plural subject: were + past participle.",
            fullExplanation: "'Were invited' (were + past participle) is the correct Passive Past for the plural subject 'guests'. 'Invited' is active and would mean the guests sent invitations themselves. 'Are invited' is Passive Present and conflicts with the past time marker 'last week'.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "invite",
            flavor: "social"
          },
          {
            id: "vt-pass-pst-08",
            stem: "The first artificial satellite, Sputnik 1, ___ by the Soviet Union in 1957.",
            options: ["was launched", "launched", "is launched"],
            answer: "was launched",
            explanation: "Passive Past: Sputnik received the action of being launched.",
            fullExplanation: "'Was launched' (was + past participle) correctly places the completed action in the past with the Soviet Union as the implied agent. 'Launched' is active and requires an explicit subject. 'Is launched' is Passive Present and is wrong for a completed historical event.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "launch",
            flavor: "science"
          },
          {
            id: "vt-pass-pst-09",
            stem: "Frida Kahlo ___ for her self-portraits, which reflected her physical and emotional pain.",
            options: ["was celebrated", "celebrated", "is celebrated"],
            answer: "was celebrated",
            explanation: "Passive Past: Kahlo received admiration during her lifetime.",
            fullExplanation: "'Was celebrated' (was + past participle) correctly uses the past passive to describe Kahlo's recognition during her life. 'Celebrated' is active and would require a different subject. 'Is celebrated' is Passive Present and shifts the meaning to the present day, which changes the intended focus.",
            source: "Swan, PEU (4e), §417",
            hint: "celebrate",
            flavor: "personalities"
          },
          {
            id: "vt-pass-pst-10",
            stem: "The Taj Mahal ___ in Agra, India, in the seventeenth century by Emperor Shah Jahan.",
            options: ["was built", "built", "is built"],
            answer: "was built",
            explanation: "Passive Past: the Taj Mahal was the object of building in the past.",
            fullExplanation: "'Was built' (was + past participle) correctly expresses the past passive for a completed historical construction. 'Built' is active and needs the emperor as the explicit grammatical subject. 'Is built' is Passive Present and is wrong for a finished past event.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "build",
            flavor: "history"
          },
          {
            id: "vt-pass-pst-11",
            stem: "The stolen wallet ___ to its owner by a kind stranger in the park.",
            options: ["was returned", "returned", "is returned"],
            answer: "was returned",
            explanation: "Passive Past: the wallet received the action of being returned.",
            fullExplanation: "'Was returned' (was + past participle) correctly expresses the completed past passive, with the wallet as the recipient of the action. 'Returned' is active and would mean the wallet itself came back. 'Is returned' is Passive Present and conflicts with the clearly completed past event.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "return",
            flavor: "social"
          },
          {
            id: "vt-pass-pst-12",
            stem: "Penicillin ___ by Alexander Fleming in 1928 when he noticed mould in his laboratory.",
            options: ["was discovered", "discovered", "is discovered"],
            answer: "was discovered",
            explanation: "Passive Past: penicillin received the action of being discovered.",
            fullExplanation: "'Was discovered' (was + past participle) correctly expresses the completed past passive. 'Discovered' is active and needs Fleming as the explicit grammatical subject. 'Is discovered' is Passive Present and is inconsistent with the historical date 1928.",
            source: "Swan, PEU (4e), §417",
            hint: "discover",
            flavor: "science"
          }
        ]
      },
      {
        id: "vt-pass-mix",
        title: "Passive — mixed tenses",
        tasks: [
          {
            id: "vt-pass-mix-01",
            stem: "Marie Curie ___ with two Nobel Prizes during her lifetime — one in Physics and one in Chemistry.",
            options: ["was honoured", "is honoured", "has been honoured"],
            answer: "was honoured",
            explanation: "Passive Past for a completed biographical fact.",
            fullExplanation: "'Was honoured' (was + past participle) is correct because Curie's life is a finished historical period. 'Is honoured' (Passive Present) would imply she is still alive. 'Has been honoured' (Present Perfect Passive) focuses on relevance to now, but the context specifies a completed life event.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "honour",
            flavor: "personalities"
          },
          {
            id: "vt-pass-mix-02",
            stem: "The Great Wall of China ___ over many centuries to protect against northern invasions.",
            options: ["was built", "is built", "has been built"],
            answer: "was built",
            explanation: "Passive Past: a completed historical construction process.",
            fullExplanation: "'Was built' (was + past participle) correctly describes a finished past event spanning many centuries. 'Is built' (Passive Present) would mean construction is ongoing. 'Has been built' (Present Perfect Passive) suggests a connection to now that is inappropriate for an ancient finished project.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "build",
            flavor: "history"
          },
          {
            id: "vt-pass-mix-03",
            stem: "Our company's annual report ___ just ___ for review by the board of directors.",
            options: ["has been submitted", "was submitted", "is submitted"],
            answer: "has been submitted",
            explanation: "Present Perfect Passive: recent action with present relevance.",
            fullExplanation: "'Has been submitted' (has/have + been + past participle) expresses a recent completed action that is still relevant now. 'Was submitted' (Passive Past) focuses only on the past with no present connection. 'Is submitted' (Passive Present) describes a habit, not a single recent act.",
            source: "Swan, PEU (4e), §419",
            hint: "submit",
            flavor: "social"
          },
          {
            id: "vt-pass-mix-04",
            stem: "Thousands of new species ___ in the Amazon rainforest in recent decades.",
            options: ["have been identified", "were identified", "are identified"],
            answer: "have been identified",
            explanation: "Present Perfect Passive: ongoing discoveries up to the present.",
            fullExplanation: "'Have been identified' (have + been + past participle) correctly expresses discoveries spanning up to now. 'Were identified' (Passive Past) would place the discoveries in a closed past period. 'Are identified' (Passive Present) describes a current routine rather than accumulating discoveries.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "identify",
            flavor: "science"
          },
          {
            id: "vt-pass-mix-05",
            stem: "The Sistine Chapel ceiling ___ by Michelangelo between 1508 and 1512.",
            options: ["was painted", "is painted", "has been painted"],
            answer: "was painted",
            explanation: "Passive Past: a completed historical artistic event.",
            fullExplanation: "'Was painted' (was + past participle) is correct for a finished action anchored in a specific past period. 'Is painted' (Passive Present) implies it is being painted now. 'Has been painted' (Present Perfect Passive) is inappropriate because the time period is defined and closed.",
            source: "Swan, PEU (4e), §417",
            hint: "paint",
            flavor: "personalities"
          },
          {
            id: "vt-pass-mix-06",
            stem: "The ancient Olympic Games ___ in Olympia, Greece, for nearly twelve centuries.",
            options: ["were held", "are held", "have been held"],
            answer: "were held",
            explanation: "Passive Past: the games took place in a finished historical period.",
            fullExplanation: "'Were held' (were + past participle) correctly describes a completed historical period that has ended. 'Are held' (Passive Present) would imply the ancient games are still running. 'Have been held' (Present Perfect Passive) suggests continuity to the present, which is incorrect for the ancient games.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "hold",
            flavor: "history"
          },
          {
            id: "vt-pass-mix-07",
            stem: "The road outside our house ___ since Monday and traffic is being diverted.",
            options: ["has been repaired", "was repaired", "is repaired"],
            answer: "has been repaired",
            explanation: "Present Perfect Passive: repair work started in the past and is still relevant now.",
            fullExplanation: "'Has been repaired' (has + been + past participle) expresses an action that began in the past and still has present relevance. 'Was repaired' (Passive Past) would suggest the job is finished. 'Is repaired' (Passive Present) describes a recurring routine rather than an ongoing specific event.",
            source: "Swan, PEU (4e), §419",
            hint: "repair",
            flavor: "social"
          },
          {
            id: "vt-pass-mix-08",
            stem: "The ozone layer ___ by the release of chlorofluorocarbons over several decades.",
            options: ["has been damaged", "was damaged", "is damaged"],
            answer: "has been damaged",
            explanation: "Present Perfect Passive: cumulative damage up to the present.",
            fullExplanation: "'Has been damaged' (has + been + past participle) correctly expresses cumulative harm extending to the present day. 'Was damaged' (Passive Past) would close the action in a finished period. 'Is damaged' (Passive Present) would describe a current repeated action rather than accumulated harm.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "damage",
            flavor: "science"
          },
          {
            id: "vt-pass-mix-09",
            stem: "Agatha Christie's detective novels ___ into more than one hundred languages worldwide.",
            options: ["have been translated", "were translated", "are translated"],
            answer: "have been translated",
            explanation: "Present Perfect Passive: translations accumulate up to now.",
            fullExplanation: "'Have been translated' (have + been + past participle) correctly expresses an ongoing result relevant to the present. 'Were translated' (Passive Past) would imply translations stopped at some point in the past. 'Are translated' (Passive Present) describes a regular current practice rather than a cumulative achievement.",
            source: "Swan, PEU (4e), §419",
            hint: "translate",
            flavor: "personalities"
          },
          {
            id: "vt-pass-mix-10",
            stem: "The first printed books ___ produced in Europe using Gutenberg's press in the 1450s.",
            options: ["were produced", "are produced", "have been produced"],
            answer: "were produced",
            explanation: "Passive Past: a completed event with a specific historical date.",
            fullExplanation: "'Were produced' (were + past participle) is correct for a finished historical event anchored in the 1450s. 'Are produced' (Passive Present) implies books are still produced by Gutenberg's press. 'Have been produced' (Present Perfect Passive) is inappropriate because the specific past timeframe closes the action.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "produce",
            flavor: "history"
          },
          {
            id: "vt-pass-mix-11",
            stem: "The new community library ___ this year and readers have welcomed it warmly.",
            options: ["has been opened", "was opened", "is opened"],
            answer: "has been opened",
            explanation: "Present Perfect Passive: recent opening with present relevance.",
            fullExplanation: "'Has been opened' (has + been + past participle) expresses a recent completed action with a clear link to the present reaction. 'Was opened' (Passive Past) focuses on the past without the current relevance. 'Is opened' (Passive Present) would describe a routine daily action, not a single recent event.",
            source: "Swan, PEU (4e), §419",
            hint: "open",
            flavor: "social"
          },
          {
            id: "vt-pass-mix-12",
            stem: "Over two million asteroids ___ in the asteroid belt between Mars and Jupiter.",
            options: ["have been catalogued", "were catalogued", "are catalogued"],
            answer: "have been catalogued",
            explanation: "Present Perfect Passive: ongoing scientific cataloguing up to now.",
            fullExplanation: "'Have been catalogued' (have + been + past participle) correctly expresses an ongoing cumulative scientific effort extending to the present. 'Were catalogued' (Passive Past) would close the process at a past time. 'Are catalogued' (Passive Present) would describe a current routine, not an accumulating total.",
            source: "Murphy, EGU (4e), Unit 22",
            hint: "catalogue",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "mixed-grammar",
    title: "Mixed Grammar",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "mg-mod-obl",
        title: "Modals — obligation",
        tasks: [
          {
            id: "mg-mod-obl-01",
            stem: "Doctors ___ keep patient information confidential at all times — it is a core professional duty.",
            options: ["must", "should", "don't have to"],
            answer: "must",
            explanation: "'Must' expresses a strong internal or professional obligation.",
            fullExplanation: "'Must' conveys a strong internal rule or moral/professional obligation felt by the doctor themselves. 'Should' merely expresses advice or a weaker recommendation. 'Don't have to' means there is no obligation, which directly contradicts the mandatory nature of patient confidentiality.",
            source: "Murphy, EGU (4e), Unit 31",
            hint: "keep",
            flavor: "personalities"
          },
          {
            id: "mg-mod-obl-02",
            stem: "Soldiers ___ obey the orders of their commanding officers under military law.",
            options: ["have to", "must", "mustn't"],
            answer: "have to",
            explanation: "'Have to' expresses external obligation imposed by rules or laws.",
            fullExplanation: "'Have to' expresses an obligation that comes from an external rule — in this case, military law — not from the soldier's personal feelings. 'Must' also expresses obligation but typically from an internal or personal sense of duty. 'Mustn't' expresses prohibition, the opposite of what the sentence requires.",
            source: "Murphy, EGU (4e), Unit 32",
            hint: "obey",
            flavor: "history"
          },
          {
            id: "mg-mod-obl-03",
            stem: "You ___ wear a seatbelt while driving — it is required by law in most countries.",
            options: ["have to", "should", "don't have to"],
            answer: "have to",
            explanation: "'Have to' expresses a legal external obligation.",
            fullExplanation: "'Have to' signals external obligation imposed by law. 'Should' indicates advice or recommendation but lacks the force of legal requirement. 'Don't have to' means no obligation exists, which is factually wrong here — it is a legal requirement.",
            source: "Murphy, EGU (4e), Unit 32",
            hint: "wear",
            flavor: "social"
          },
          {
            id: "mg-mod-obl-04",
            stem: "Scientists ___ report their findings accurately so that other researchers can replicate them.",
            options: ["must", "don't have to", "mustn't"],
            answer: "must",
            explanation: "'Must' expresses a strong internal ethical obligation.",
            fullExplanation: "'Must' conveys a strong moral or professional obligation that comes from within the scientific community's own standards. 'Don't have to' implies no obligation, contradicting the ethical imperative. 'Mustn't' means prohibition, which is the wrong meaning entirely.",
            source: "Swan, PEU (4e), §348",
            hint: "report",
            flavor: "science"
          },
          {
            id: "mg-mod-obl-05",
            stem: "Nelson Mandela believed that citizens ___ fight unjust laws through peaceful means.",
            options: ["should", "mustn't", "don't have to"],
            answer: "should",
            explanation: "'Should' expresses moral advice or a strong recommendation.",
            fullExplanation: "'Should' is correct here because it conveys Mandela's belief — a moral stance or recommendation rather than a binding rule. 'Mustn't' expresses prohibition, meaning citizens are forbidden, which contradicts Mandela's advocacy. 'Don't have to' means absence of obligation, which misrepresents the strength of his belief.",
            source: "Murphy, EGU (4e), Unit 33",
            hint: "fight",
            flavor: "personalities"
          },
          {
            id: "mg-mod-obl-06",
            stem: "Visitors to the Louvre ___ touch any of the artworks on display — it is strictly forbidden.",
            options: ["mustn't", "must", "don't have to"],
            answer: "mustn't",
            explanation: "'Mustn't' expresses prohibition — something that is not allowed.",
            fullExplanation: "'Mustn't' expresses a strong prohibition — visitors are forbidden from touching the artworks. 'Must' would mean they are obliged to touch them, which is the opposite. 'Don't have to' indicates that touching is optional, which fails to convey the strict ban.",
            source: "Murphy, EGU (4e), Unit 31",
            hint: "touch",
            flavor: "history"
          },
          {
            id: "mg-mod-obl-07",
            stem: "You ___ bring a gift to your colleague's birthday party — it is entirely optional.",
            options: ["don't have to", "must", "mustn't"],
            answer: "don't have to",
            explanation: "'Don't have to' means there is no obligation — it is optional.",
            fullExplanation: "'Don't have to' correctly expresses the absence of obligation: bringing a gift is optional. 'Must' would incorrectly imply it is compulsory. 'Mustn't' would mean it is forbidden, which completely reverses the intended meaning.",
            source: "Murphy, EGU (4e), Unit 31",
            hint: "bring",
            flavor: "social"
          },
          {
            id: "mg-mod-obl-08",
            stem: "Engineers ___ check the structural integrity of a bridge before it opens to traffic.",
            options: ["must", "should", "don't have to"],
            answer: "must",
            explanation: "'Must' conveys a strong safety obligation imposed by professional standards.",
            fullExplanation: "'Must' expresses a non-negotiable professional obligation, especially where public safety is involved. 'Should' softens this to mere advice. 'Don't have to' implies the check is optional, which would be dangerous and contradicts safety regulations.",
            source: "Swan, PEU (4e), §348",
            hint: "check",
            flavor: "science"
          },
          {
            id: "mg-mod-obl-09",
            stem: "Winston Churchill insisted that leaders ___ never show weakness to their adversaries.",
            options: ["should", "have to", "don't have to"],
            answer: "should",
            explanation: "'Should' conveys a strong personal recommendation or principle.",
            fullExplanation: "'Should' is correct because it captures Churchill's personal belief or advice — a moral stance rather than an external rule. 'Have to' implies an external obligation imposed by others, which changes the source of the compulsion. 'Don't have to' signals the absence of obligation, contradicting the intended message.",
            source: "Murphy, EGU (4e), Unit 33",
            hint: "show",
            flavor: "personalities"
          },
          {
            id: "mg-mod-obl-10",
            stem: "Passengers ___ smoke in any area of the aircraft — it is prohibited by aviation law.",
            options: ["mustn't", "don't have to", "should"],
            answer: "mustn't",
            explanation: "'Mustn't' expresses a strict prohibition.",
            fullExplanation: "'Mustn't' correctly expresses that smoking on board is forbidden. 'Don't have to' would mean smoking is simply not required, implying it is still permitted — which is factually wrong. 'Should' offers advice, which grossly understates the legal prohibition.",
            source: "Murphy, EGU (4e), Unit 31",
            hint: "smoke",
            flavor: "history"
          },
          {
            id: "mg-mod-obl-11",
            stem: "Children ___ attend school in most countries — it is compulsory by national law.",
            options: ["have to", "should", "mustn't"],
            answer: "have to",
            explanation: "'Have to' expresses an obligation imposed by law.",
            fullExplanation: "'Have to' signals an external obligation — here, a legal requirement set by national government. 'Should' would be advice, not a legal compulsion. 'Mustn't' expresses prohibition, meaning children are forbidden from attending, which is the opposite of the intended meaning.",
            source: "Murphy, EGU (4e), Unit 32",
            hint: "attend",
            flavor: "social"
          },
          {
            id: "mg-mod-obl-12",
            stem: "Plants ___ have sunlight to carry out photosynthesis — it is an absolute biological necessity.",
            options: ["must", "should", "don't have to"],
            answer: "must",
            explanation: "'Must' expresses an absolute necessity — there is no alternative.",
            fullExplanation: "'Must' is correct for a biological necessity where there is no alternative — photosynthesis cannot occur without light. 'Should' implies this is advisable rather than essential. 'Don't have to' suggests sunlight is optional for plants, which is scientifically false.",
            source: "Swan, PEU (4e), §348",
            hint: "have",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-mod-pos",
        title: "Modals — possibility / deduction",
        tasks: [
          {
            id: "mg-mod-pos-01",
            stem: "Stephen Hawking wrote extensively about black holes, so he ___ have been deeply familiar with the subject.",
            options: ["must", "might", "can't"],
            answer: "must",
            explanation: "'Must' expresses logical certainty based on strong evidence.",
            fullExplanation: "'Must' is correct because the evidence (years of research and writing) makes the conclusion logically certain. 'Might' would weaken this to mere possibility, which understates the evidence. 'Can't' expresses logical impossibility — the opposite conclusion.",
            source: "Murphy, EGU (4e), Unit 29",
            hint: "have",
            flavor: "personalities"
          },
          {
            id: "mg-mod-pos-02",
            stem: "The ancient Egyptians ___ have had advanced knowledge of mathematics to build the pyramids.",
            options: ["must", "can't", "might"],
            answer: "must",
            explanation: "'Must' expresses logical certainty — the pyramids prove this.",
            fullExplanation: "'Must' is correct because the precision of the pyramids makes advanced mathematical knowledge a logical certainty. 'Can't' means it is logically impossible, which contradicts the archaeological evidence. 'Might' suggests only a possibility, which understates the logical force of the conclusion.",
            source: "Murphy, EGU (4e), Unit 29",
            hint: "have",
            flavor: "history"
          },
          {
            id: "mg-mod-pos-03",
            stem: "The light is off and the car is gone — they ___ be at home.",
            options: ["can't", "must", "might"],
            answer: "can't",
            explanation: "'Can't' expresses logical impossibility based on clear evidence.",
            fullExplanation: "'Can't' is correct because two pieces of evidence (no light, no car) lead to the logical conclusion that being home is impossible. 'Must' would mean we are certain they are home, which contradicts the evidence. 'Might' suggests it is possible they are home, which ignores the strong evidence to the contrary.",
            source: "Murphy, EGU (4e), Unit 30",
            hint: "be",
            flavor: "social"
          },
          {
            id: "mg-mod-pos-04",
            stem: "These clouds are very dark — it ___ rain later this afternoon.",
            options: ["might", "must", "can't"],
            answer: "might",
            explanation: "'Might' expresses possibility — it is not certain but is possible.",
            fullExplanation: "'Might' correctly expresses that rain is possible but not certain, based on the appearance of dark clouds. 'Must' would mean rain is logically certain, which overstates the conclusion from cloud observation alone. 'Can't' means rain is impossible, which directly contradicts the evidence.",
            source: "Swan, PEU (4e), §344",
            hint: "rain",
            flavor: "science"
          },
          {
            id: "mg-mod-pos-05",
            stem: "Agatha Christie wrote over sixty novels in her career, so she ___ have been an incredibly prolific author.",
            options: ["must", "might", "can't"],
            answer: "must",
            explanation: "'Must' expresses logical certainty based on well-known facts.",
            fullExplanation: "'Must' is correct because sixty-plus novels is strong factual evidence for the conclusion. 'Might' would imply we are not sure, which is inconsistent with the factual evidence given. 'Can't' expresses logical impossibility — the opposite of what the facts support.",
            source: "Murphy, EGU (4e), Unit 29",
            hint: "have",
            flavor: "personalities"
          },
          {
            id: "mg-mod-pos-06",
            stem: "No one has opened this room for five centuries — the air inside ___ be very stale.",
            options: ["must", "might", "can't"],
            answer: "must",
            explanation: "'Must' expresses logical certainty deduced from the situation.",
            fullExplanation: "'Must' is correct because five centuries without ventilation makes stale air a logical certainty. 'Might' would suggest mere possibility, understating what the evidence clearly implies. 'Can't' would mean stale air is impossible, which contradicts basic physics.",
            source: "Murphy, EGU (4e), Unit 29",
            hint: "be",
            flavor: "history"
          },
          {
            id: "mg-mod-pos-07",
            stem: "She hasn't replied to my emails for two days — she ___ be on holiday.",
            options: ["may", "must", "can't"],
            answer: "may",
            explanation: "'May' expresses a reasonable possibility without certainty.",
            fullExplanation: "'May' correctly expresses a plausible explanation that cannot be confirmed — she might be on holiday, but we are not sure. 'Must' would mean we are logically certain she is on holiday, which overstates the inference. 'Can't' means it is impossible she is on holiday, which nothing in the sentence supports.",
            source: "Swan, PEU (4e), §344",
            hint: "be",
            flavor: "social"
          },
          {
            id: "mg-mod-pos-08",
            stem: "The temperature on the surface of the Sun ___ be pleasant — it exceeds 5,000°C.",
            options: ["can't", "might", "must"],
            answer: "can't",
            explanation: "'Can't' expresses logical impossibility given the extreme temperature.",
            fullExplanation: "'Can't' is correct because 5,000°C makes a pleasant temperature logically impossible. 'Might' implies a possibility of pleasantness, which the extreme heat rules out. 'Must' would mean it is logically certain to be pleasant, contradicting the scientific fact.",
            source: "Murphy, EGU (4e), Unit 30",
            hint: "be",
            flavor: "science"
          },
          {
            id: "mg-mod-pos-09",
            stem: "Beethoven continued to compose music after he became deaf, so he ___ have had extraordinary musical memory.",
            options: ["must", "can't", "might"],
            answer: "must",
            explanation: "'Must' expresses a logically certain deduction from remarkable facts.",
            fullExplanation: "'Must' is correct because the ability to compose without hearing is strong evidence for exceptional musical memory. 'Can't' would mean such memory is logically impossible, contradicting the historical fact. 'Might' weakens the conclusion to a mere guess, which understates the logical force of the evidence.",
            source: "Murphy, EGU (4e), Unit 29",
            hint: "have",
            flavor: "personalities"
          },
          {
            id: "mg-mod-pos-10",
            stem: "The castle was built in the twelfth century, so the builders ___ have used modern machinery.",
            options: ["can't", "must", "might"],
            answer: "can't",
            explanation: "'Can't' expresses logical impossibility — modern machines did not exist then.",
            fullExplanation: "'Can't' is correct because modern machinery did not exist in the twelfth century, making its use logically impossible. 'Must' would mean the builders certainly used modern machinery, which is historically impossible. 'Might' implies it is possible they used modern machinery, again contradicting historical fact.",
            source: "Murphy, EGU (4e), Unit 30",
            hint: "have",
            flavor: "history"
          },
          {
            id: "mg-mod-pos-11",
            stem: "I can hear music from the flat next door — the neighbours ___ be having a party.",
            options: ["could", "can't", "must"],
            answer: "could",
            explanation: "'Could' expresses a tentative possibility based on limited evidence.",
            fullExplanation: "'Could' correctly expresses a tentative possibility — the music is evidence but does not prove a party. 'Can't' would mean a party is impossible, which is not supported by the evidence. 'Must' would indicate logical certainty, but music alone does not rule out other explanations.",
            source: "Swan, PEU (4e), §344",
            hint: "be",
            flavor: "social"
          },
          {
            id: "mg-mod-pos-12",
            stem: "Water has been detected on Mars, so microbial life ___ exist there in some form.",
            options: ["might", "can't", "must"],
            answer: "might",
            explanation: "'Might' expresses scientific possibility — not ruled out but not confirmed.",
            fullExplanation: "'Might' correctly expresses that life on Mars is scientifically possible but unconfirmed. 'Can't' would mean life is logically impossible, which scientists have not concluded. 'Must' would imply life is certain to exist, which goes far beyond what current evidence supports.",
            source: "Murphy, EGU (4e), Unit 29",
            hint: "exist",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-cond-0",
        title: "Zero conditional",
        tasks: [
          {
            id: "mg-cond-0-01",
            stem: "If you heat Marie Curie's original lab notebooks, they ___ radioactive gases because of radium contamination.",
            options: ["release", "will release", "would release"],
            answer: "release",
            explanation: "Zero conditional: general truth about a repeatable event uses present simple in both clauses.",
            fullExplanation: "Zero conditional expresses universal or always-true facts: If + present simple, present simple. 'Will release' is first conditional (specific future prediction). 'Would release' is second conditional (hypothetical/unreal).",
            source: "Murphy, EGU (4e), Unit 38",
            hint: "release",
            flavor: "personalities"
          },
          {
            id: "mg-cond-0-02",
            stem: "If Roman soldiers ___ the frontier of Hadrian's Wall, they immediately signalled the garrison.",
            options: ["breached", "breach", "had breached"],
            answer: "breached",
            explanation: "Historical zero conditional: past simple in both clauses for a repeated past procedure.",
            fullExplanation: "When a condition was always true in the past, zero conditional uses past simple in both clauses. 'Breach' is present simple (describes a current truth). 'Had breached' is past perfect, which belongs to third conditional.",
            source: "Swan, PEU (4e), §247.3",
            hint: "breach",
            flavor: "history"
          },
          {
            id: "mg-cond-0-03",
            stem: "If the office printer runs out of paper, you ___ the tray from the supply room.",
            options: ["refill", "will refill", "would refill"],
            answer: "refill",
            explanation: "Zero conditional: a standard workplace procedure uses present simple in both clauses.",
            fullExplanation: "Zero conditional states a procedure that is always followed: If + present simple, present simple. 'Will refill' implies a single future prediction (first conditional). 'Would refill' makes the situation hypothetical (second conditional).",
            source: "Murphy, EGU (4e), Unit 38",
            hint: "refill",
            flavor: "social"
          },
          {
            id: "mg-cond-0-04",
            stem: "If you mix red and blue light, you ___ magenta, not purple — unlike pigment mixing.",
            options: ["get", "will get", "would get"],
            answer: "get",
            explanation: "Zero conditional: universal scientific truth uses present simple in the main clause.",
            fullExplanation: "Zero conditional states a fact that is always true. Both clauses use present simple. 'Will get' implies a specific future event (first conditional). 'Would get' implies a hypothetical situation (second conditional).",
            source: "Hewings, AGU (3e), Unit 37",
            hint: "get",
            flavor: "science"
          },
          {
            id: "mg-cond-0-05",
            stem: "If Abraham Lincoln ___ a speech during the Civil War, enormous crowds gathered to hear him.",
            options: ["gave", "gives", "had given"],
            answer: "gave",
            explanation: "Historical habitual zero conditional: past simple in both clauses for repeated past events.",
            fullExplanation: "When a condition was repeatedly true in a past period, zero conditional uses past simple in both clauses. 'Gives' is present simple and describes a current recurring fact. 'Had given' is past perfect, belonging to third conditional.",
            source: "Swan, PEU (4e), §247.3",
            hint: "give",
            flavor: "personalities"
          },
          {
            id: "mg-cond-0-06",
            stem: "If soldiers ___ their rations in the trenches of World War I, illness quickly followed.",
            options: ["ran out of", "run out of", "had run out of"],
            answer: "ran out of",
            explanation: "Historical zero conditional: past simple for a repeatedly true past condition and result.",
            fullExplanation: "Repeated past conditions and results use past simple in both clauses of the zero conditional. 'Run out of' is present simple and describes a current general truth. 'Had run out of' is past perfect and signals third conditional.",
            source: "Hewings, AGU (3e), Unit 37",
            hint: "run",
            flavor: "history"
          },
          {
            id: "mg-cond-0-07",
            stem: "If our neighbours ___ a party on a weeknight, we ask them to keep the noise down.",
            options: ["have", "had", "will have"],
            answer: "have",
            explanation: "Zero conditional: a recurring social situation uses present simple in the if-clause.",
            fullExplanation: "Zero conditional describes what always happens in a recurring situation; both clauses use present simple. 'Had' is second conditional (unreal present). 'Will have' is first conditional (specific future prediction).",
            source: "Murphy, EGU (4e), Unit 38",
            hint: "have",
            flavor: "social"
          },
          {
            id: "mg-cond-0-08",
            stem: "If you cool a gas, its volume ___, provided the pressure stays constant.",
            options: ["decreases", "will decrease", "would decrease"],
            answer: "decreases",
            explanation: "Zero conditional: Charles's Law stated as a universal scientific truth uses present simple.",
            fullExplanation: "Scientific laws that always hold are expressed with zero conditional — both clauses in present simple. 'Will decrease' implies a specific future event (first conditional). 'Would decrease' makes the condition hypothetical (second conditional).",
            source: "Hewings, AGU (3e), Unit 37",
            hint: "decrease",
            flavor: "science"
          },
          {
            id: "mg-cond-0-09",
            stem: "If Nikola Tesla ___ an experiment late at night, his assistants stayed until it was finished.",
            options: ["started", "starts", "had started"],
            answer: "started",
            explanation: "Historical habitual zero conditional: past simple in both clauses for a repeated past routine.",
            fullExplanation: "Repeated past routines use past simple in both clauses of the zero conditional. 'Starts' is present simple (current general truth). 'Had started' is past perfect and belongs to third conditional.",
            source: "Swan, PEU (4e), §247.3",
            hint: "start",
            flavor: "personalities"
          },
          {
            id: "mg-cond-0-10",
            stem: "If the Berlin Wall ___ breached at any point during the Cold War, guards responded with force.",
            options: ["was", "is", "were"],
            answer: "was",
            explanation: "Historical zero conditional if-clause: past simple for a repeatedly true past condition.",
            fullExplanation: "A condition that was repeatedly true in a historical period uses past simple in the if-clause. 'Is' is present simple and describes a current fact. 'Were' introduces second conditional (present subjunctive/unreal).",
            source: "Swan, PEU (4e), §247.3",
            hint: "be",
            flavor: "history"
          },
          {
            id: "mg-cond-0-11",
            stem: "If a customer complains about the service, the manager always ___ them a discount.",
            options: ["offers", "will offer", "would offer"],
            answer: "offers",
            explanation: "Zero conditional: a standard business procedure uses present simple in the main clause.",
            fullExplanation: "Zero conditional covers habitual procedures that always apply: If + present simple, present simple. 'Will offer' turns the sentence into a first conditional (specific future prediction). 'Would offer' signals a hypothetical second conditional.",
            source: "Murphy, EGU (4e), Unit 38",
            hint: "offer",
            flavor: "social"
          },
          {
            id: "mg-cond-0-12",
            stem: "If water ___ below zero degrees Celsius, it freezes and expands, which can crack pipes.",
            options: ["drops", "will drop", "would drop"],
            answer: "drops",
            explanation: "Zero conditional: a universal scientific fact about water uses present simple in the if-clause.",
            fullExplanation: "Zero conditional expresses facts that are universally and permanently true. The if-clause uses present simple. 'Will drop' makes it a first conditional (future prediction about a specific event). 'Would drop' makes it a second conditional (hypothetical).",
            source: "Hewings, AGU (3e), Unit 37",
            hint: "drop",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-cond-1",
        title: "First conditional",
        tasks: [
          {
            id: "mg-cond-1-01",
            stem: "If Roger Federer enters the tournament next month, he ___ the final.",
            options: ["will reach", "would reach", "reaches"],
            answer: "will reach",
            explanation: "First conditional: real future prediction uses will + base verb in the main clause.",
            fullExplanation: "First conditional (real/possible future): If + present simple, will + infinitive. 'Would reach' is second conditional (unreal present). 'Reaches' is zero conditional (general truth), not a future prediction.",
            source: "Murphy, EGU (4e), Unit 39",
            hint: "reach",
            flavor: "personalities"
          },
          {
            id: "mg-cond-1-02",
            stem: "If the archaeologists ___ digging next season, they may uncover more Roman artefacts.",
            options: ["continue", "continued", "will continue"],
            answer: "continue",
            explanation: "First conditional if-clause takes present simple, not future tense.",
            fullExplanation: "In first conditional, the if-clause uses present simple — never 'will'. 'Continued' is past simple and belongs to second conditional. 'Will continue' is a common learner error: 'will' cannot follow 'if' in this construction.",
            source: "Swan, PEU (4e), §248.1",
            hint: "continue",
            flavor: "history"
          },
          {
            id: "mg-cond-1-03",
            stem: "If the flight is delayed, my brother ___ us from the airport instead.",
            options: ["will pick up", "would pick up", "picks up"],
            answer: "will pick up",
            explanation: "First conditional main clause: will + base verb for a real future plan.",
            fullExplanation: "First conditional expresses a realistic future plan: If + present simple, will + infinitive. 'Would pick up' is second conditional (hypothetical). 'Picks up' in the main clause without 'will' removes the future prediction and creates a zero conditional meaning.",
            source: "Murphy, EGU (4e), Unit 39",
            hint: "pick",
            flavor: "social"
          },
          {
            id: "mg-cond-1-04",
            stem: "If the Mars rover detects methane, scientists ___ it as a sign of possible past life.",
            options: ["will interpret", "would interpret", "interpreted"],
            answer: "will interpret",
            explanation: "First conditional: realistic scientific scenario uses will + verb in main clause.",
            fullExplanation: "First conditional covers real, possible future events. The main clause uses will + base verb. 'Would interpret' signals second conditional (unreal/hypothetical). 'Interpreted' is past simple, unrelated to future prediction.",
            source: "Hewings, AGU (3e), Unit 38",
            hint: "interpret",
            flavor: "science"
          },
          {
            id: "mg-cond-1-05",
            stem: "If Maya Angelou ___ a new poem tonight, the audience will give her a standing ovation.",
            options: ["recites", "recited", "will recite"],
            answer: "recites",
            explanation: "First conditional if-clause: present simple (not will) after 'if'.",
            fullExplanation: "In first conditional, the if-clause always takes present simple, even though the meaning is future. 'Recited' is past simple (second conditional). 'Will recite' is wrong — 'will' cannot be used after 'if' in conditional clauses.",
            source: "Swan, PEU (4e), §248.1",
            hint: "recite",
            flavor: "personalities"
          },
          {
            id: "mg-cond-1-06",
            stem: "If the treaty ___ signed at the next summit, trade between the two nations will improve.",
            options: ["is", "was", "will be"],
            answer: "is",
            explanation: "First conditional if-clause: present simple passive ('is signed') for a realistic future event.",
            fullExplanation: "First conditional requires present simple (or present simple passive) in the if-clause. 'Was' shifts the sentence to second conditional (unreal present). 'Will be' is incorrect — 'will' cannot be used after 'if' in conditional sentences.",
            source: "Murphy, EGU (4e), Unit 39",
            hint: "be",
            flavor: "history"
          },
          {
            id: "mg-cond-1-07",
            stem: "If the children finish their homework early, they ___ an extra hour of free time.",
            options: ["will get", "would get", "got"],
            answer: "will get",
            explanation: "First conditional: realistic promise uses will + verb in the main clause.",
            fullExplanation: "First conditional states a real, achievable outcome. The main clause uses will + infinitive. 'Would get' is second conditional (unlikely or hypothetical). 'Got' is past simple and does not express a future result.",
            source: "Murphy, EGU (4e), Unit 39",
            hint: "get",
            flavor: "social"
          },
          {
            id: "mg-cond-1-08",
            stem: "If a solar flare ___ Earth's magnetic field this week, power grids may be disrupted.",
            options: ["hits", "hit", "will hit"],
            answer: "hits",
            explanation: "First conditional if-clause: present simple for a real, possible future event.",
            fullExplanation: "First conditional treats the event as genuinely possible. The if-clause takes present simple. 'Hit' (past simple) is second conditional (hypothetical). 'Will hit' is a common error — 'will' is not used in the if-clause.",
            source: "Hewings, AGU (3e), Unit 38",
            hint: "hit",
            flavor: "science"
          },
          {
            id: "mg-cond-1-09",
            stem: "If Charles Dickens ___ his next instalment on time, his editor will be relieved.",
            options: ["delivers", "delivered", "will deliver"],
            answer: "delivers",
            explanation: "First conditional if-clause: present simple for a real future possibility.",
            fullExplanation: "First conditional always has present simple in the if-clause. 'Delivered' (past simple) belongs to second conditional (unreal/hypothetical). 'Will deliver' is incorrect after 'if' in standard conditional constructions.",
            source: "Swan, PEU (4e), §248.1",
            hint: "deliver",
            flavor: "personalities"
          },
          {
            id: "mg-cond-1-10",
            stem: "If the harvest ___ poor this autumn, food prices will rise across the region.",
            options: ["is", "were", "will be"],
            answer: "is",
            explanation: "First conditional if-clause: present simple for a realistic near-future scenario.",
            fullExplanation: "First conditional uses present simple in the if-clause to describe a real future possibility. 'Were' signals second conditional (hypothetical present). 'Will be' is not used after 'if' in conditional clauses.",
            source: "Murphy, EGU (4e), Unit 39",
            hint: "be",
            flavor: "history"
          },
          {
            id: "mg-cond-1-11",
            stem: "If the manager approves the budget, our team ___ the project by the end of the month.",
            options: ["will complete", "would complete", "completes"],
            answer: "will complete",
            explanation: "First conditional: approved budget leads to a real future outcome — will + verb.",
            fullExplanation: "First conditional main clause takes will + base verb to express a real future result. 'Would complete' is second conditional (hypothetical). 'Completes' (present simple in main clause) creates a zero conditional meaning — a general truth — not a future prediction.",
            source: "Murphy, EGU (4e), Unit 39",
            hint: "complete",
            flavor: "social"
          },
          {
            id: "mg-cond-1-12",
            stem: "If the new vaccine passes clinical trials, health authorities ___ it within the year.",
            options: ["will approve", "would approve", "approved"],
            answer: "will approve",
            explanation: "First conditional: real, anticipated future event uses will + base verb.",
            fullExplanation: "First conditional expresses a realistic expectation. The main clause uses will + infinitive. 'Would approve' implies the event is unlikely (second conditional). 'Approved' is past simple and does not express a future result.",
            source: "Hewings, AGU (3e), Unit 38",
            hint: "approve",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-cond-2",
        title: "Second conditional",
        tasks: [
          {
            id: "mg-cond-2-01",
            stem: "If Albert Einstein ___ alive today, he would be astonished by quantum computing.",
            options: ["were", "was", "had been"],
            answer: "were",
            explanation: "Second conditional if-clause: subjunctive 'were' for unreal present situations.",
            fullExplanation: "Second conditional uses 'were' (not 'was') for all persons in the if-clause when expressing an unreal present situation. 'Was' is grammatically common in informal speech but 'were' is the standard written form for CT/CE. 'Had been' belongs to the third conditional (unreal past).",
            source: "Murphy, EGU (4e), Unit 40",
            hint: "be",
            flavor: "personalities"
          },
          {
            id: "mg-cond-2-02",
            stem: "If the Roman Empire still existed, Latin ___ one of the world's major languages.",
            options: ["would be", "will be", "was"],
            answer: "would be",
            explanation: "Second conditional main clause: would + base verb for an unreal present outcome.",
            fullExplanation: "Second conditional expresses an unreal or impossible present situation. The main clause uses would + base verb. 'Will be' is first conditional (real future). 'Was' is past simple and would make the sentence a conditional zero (habitual past) or simply ungrammatical here.",
            source: "Swan, PEU (4e), §249.1",
            hint: "be",
            flavor: "history"
          },
          {
            id: "mg-cond-2-03",
            stem: "If I ___ you, I would apologise to the client straight away.",
            options: ["were", "am", "had been"],
            answer: "were",
            explanation: "Second conditional: 'If I were you' is the standard form for advice about an unreal situation.",
            fullExplanation: "'If I were you' is the fixed second conditional expression used to give advice. 'Am' would make it a first conditional or zero conditional (always true). 'Had been' is third conditional (unreal past event).",
            source: "Murphy, EGU (4e), Unit 40",
            hint: "be",
            flavor: "social"
          },
          {
            id: "mg-cond-2-04",
            stem: "If bees ___ to disappear entirely, many crops would fail within a few years.",
            options: ["were", "are", "had been"],
            answer: "were",
            explanation: "Second conditional if-clause: 'were to' + infinitive expresses a hypothetical future event.",
            fullExplanation: "Second conditional can use 'were to + infinitive' in the if-clause to express a hypothetical or unlikely future event. 'Are' creates a first conditional (realistic possibility). 'Had been' is third conditional (past hypothetical).",
            source: "Hewings, AGU (3e), Unit 38",
            hint: "be",
            flavor: "science"
          },
          {
            id: "mg-cond-2-05",
            stem: "If Frida Kahlo ___ in New York, she would have access to a much larger art market.",
            options: ["lived", "had lived", "lives"],
            answer: "lived",
            explanation: "Second conditional if-clause: past simple for an unreal present situation.",
            fullExplanation: "Second conditional if-clause uses past simple ('lived') to signal an unreal present condition. 'Had lived' is third conditional (unreal past). 'Lives' with 'would have access' creates a tense mismatch.",
            source: "Murphy, EGU (4e), Unit 40",
            hint: "live",
            flavor: "personalities"
          },
          {
            id: "mg-cond-2-06",
            stem: "If Napoleon ___ the Battle of Waterloo, Europe would look very different today.",
            options: ["won", "had won", "wins"],
            answer: "won",
            explanation: "Second conditional if-clause: past simple for a counterfactual present speculation.",
            fullExplanation: "Second conditional uses past simple in the if-clause to speculate about how the present would be different. 'Had won' shifts to third conditional (what would have happened in the past). 'Wins' is present simple and cannot combine with 'would look' to express a hypothetical.",
            source: "Swan, PEU (4e), §249.1",
            hint: "win",
            flavor: "history"
          },
          {
            id: "mg-cond-2-07",
            stem: "If our neighbours ___ less noise at night, everyone on the street would sleep better.",
            options: ["made", "make", "had made"],
            answer: "made",
            explanation: "Second conditional if-clause: past simple for an unreal present wish.",
            fullExplanation: "Second conditional expresses a present wish or unreal condition using past simple in the if-clause. 'Make' is present simple and would create a zero conditional (always true). 'Had made' is third conditional (unreal past).",
            source: "Murphy, EGU (4e), Unit 40",
            hint: "make",
            flavor: "social"
          },
          {
            id: "mg-cond-2-08",
            stem: "If the Amazon rainforest ___ to shrink further, global oxygen levels would decline noticeably.",
            options: ["were", "is", "had been"],
            answer: "were",
            explanation: "Second conditional: 'were to' in the if-clause signals a hypothetical future scenario.",
            fullExplanation: "'Were to + infinitive' in the if-clause marks a hypothetical or unlikely future event in second conditional. 'Is' creates a first conditional (realistic possibility). 'Had been' is third conditional (unreal past).",
            source: "Hewings, AGU (3e), Unit 38",
            hint: "be",
            flavor: "science"
          },
          {
            id: "mg-cond-2-09",
            stem: "If Nikola Tesla ___ better financial backing, he might have built his Wardenclyffe Tower.",
            options: ["had", "has", "had had"],
            answer: "had",
            explanation: "Second conditional if-clause: past simple for an unreal present/general condition.",
            fullExplanation: "Second conditional uses past simple in the if-clause. Here 'had' describes a hypothetical present state. 'Has' is present simple (zero/first conditional). 'Had had' is past perfect and belongs to the third conditional (unreal past).",
            source: "Swan, PEU (4e), §249.1",
            hint: "have",
            flavor: "personalities"
          },
          {
            id: "mg-cond-2-10",
            stem: "If the Great Wall of China ___ on flat terrain only, its construction would have taken far less time.",
            options: ["stood", "stands", "had stood"],
            answer: "stood",
            explanation: "Second conditional if-clause: past simple for a hypothetical present/general reality.",
            fullExplanation: "Second conditional uses past simple in the if-clause to express an unreal or contrary-to-fact present situation. 'Stands' is present simple (zero conditional). 'Had stood' is past perfect and would require 'would have taken' — third conditional.",
            source: "Murphy, EGU (4e), Unit 40",
            hint: "stand",
            flavor: "history"
          },
          {
            id: "mg-cond-2-11",
            stem: "If my commute ___ shorter, I would have more energy after work.",
            options: ["were", "is", "had been"],
            answer: "were",
            explanation: "Second conditional if-clause: 'were' for all persons in an unreal present wish.",
            fullExplanation: "Second conditional uses 'were' (subjunctive) for all grammatical persons in the if-clause when expressing an unreal wish about the present. 'Is' creates zero conditional (a fact). 'Had been' shifts the sentence to third conditional (unreal past).",
            source: "Murphy, EGU (4e), Unit 40",
            hint: "be",
            flavor: "social"
          },
          {
            id: "mg-cond-2-12",
            stem: "If the Moon ___ twice as large, ocean tides on Earth would be dramatically stronger.",
            options: ["were", "is", "had been"],
            answer: "were",
            explanation: "Second conditional: scientific hypothesis about an unreal present uses 'were' in the if-clause.",
            fullExplanation: "Second conditional if-clause uses 'were' (all persons) to describe an unreal or impossible present state. 'Is' would create a zero conditional (an actual fact). 'Had been' is third conditional (unreal past event).",
            source: "Hewings, AGU (3e), Unit 38",
            hint: "be",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-cond-3",
        title: "Third conditional",
        tasks: [
          {
            id: "mg-cond-3-01",
            stem: "If Amelia Earhart ___ better navigation equipment, she might have completed her round-the-world flight.",
            options: ["had had", "had", "would have had"],
            answer: "had had",
            explanation: "Third conditional if-clause: past perfect for an unreal past condition.",
            fullExplanation: "Third conditional expresses an unreal past situation: If + past perfect, would have + past participle. 'Had' is simple past (second conditional). 'Would have had' cannot be used in the if-clause.",
            source: "Murphy, EGU (4e), Unit 41",
            hint: "have",
            flavor: "personalities"
          },
          {
            id: "mg-cond-3-02",
            stem: "If the assassination at Sarajevo in 1914 ___ prevented, World War I might not have started.",
            options: ["had been", "was", "would have been"],
            answer: "had been",
            explanation: "Third conditional if-clause: past perfect passive for an unreal past event.",
            fullExplanation: "Third conditional if-clause uses past perfect (including passive 'had been prevented') to describe what did not happen in the past. 'Was' is simple past (second conditional counterfactual). 'Would have been' cannot be placed in the if-clause.",
            source: "Swan, PEU (4e), §250.1",
            hint: "be",
            flavor: "history"
          },
          {
            id: "mg-cond-3-03",
            stem: "If I had read the instructions more carefully, I ___ the machine.",
            options: ["would not have broken", "would not break", "had not broken"],
            answer: "would not have broken",
            explanation: "Third conditional main clause: would have + past participle for an unreal past result.",
            fullExplanation: "Third conditional main clause uses would + have + past participle to describe what would have been the outcome. 'Would not break' is second conditional (unreal present). 'Had not broken' cannot serve as a main clause; it is past perfect.",
            source: "Murphy, EGU (4e), Unit 41",
            hint: "break",
            flavor: "social"
          },
          {
            id: "mg-cond-3-04",
            stem: "If the first telescope ___ invented a century earlier, astronomy would have advanced much faster.",
            options: ["had been", "was", "were"],
            answer: "had been",
            explanation: "Third conditional if-clause: past perfect passive for a hypothetical historical event.",
            fullExplanation: "Third conditional uses past perfect passive ('had been invented') in the if-clause to describe an event that did not happen in the past. 'Was' is simple past (second conditional). 'Were' is present subjunctive and belongs to second conditional.",
            source: "Hewings, AGU (3e), Unit 39",
            hint: "be",
            flavor: "science"
          },
          {
            id: "mg-cond-3-05",
            stem: "Nelson Mandela ___ such an impact if he had not endured 27 years of imprisonment.",
            options: ["would not have made", "would not make", "had not made"],
            answer: "would not have made",
            explanation: "Third conditional main clause: would have + past participle for an unreal past result.",
            fullExplanation: "Third conditional main clause uses would + have + past participle. 'Would not make' is second conditional (unreal present). 'Had not made' is past perfect and cannot function as a main clause in this position.",
            source: "Swan, PEU (4e), §250.1",
            hint: "make",
            flavor: "personalities"
          },
          {
            id: "mg-cond-3-06",
            stem: "If the weather ___ better during the D-Day landings, fewer soldiers would have died on the beaches.",
            options: ["had been", "was", "were"],
            answer: "had been",
            explanation: "Third conditional if-clause: past perfect for an unreal past condition.",
            fullExplanation: "Third conditional requires past perfect in the if-clause to indicate a past event that did not happen. 'Was' (simple past) belongs to second conditional. 'Were' is the second conditional subjunctive form.",
            source: "Murphy, EGU (4e), Unit 41",
            hint: "be",
            flavor: "history"
          },
          {
            id: "mg-cond-3-07",
            stem: "My sister ___ for the job if she had known it was available.",
            options: ["would have applied", "would apply", "had applied"],
            answer: "would have applied",
            explanation: "Third conditional main clause: would + have + past participle for an unrealised past action.",
            fullExplanation: "Third conditional main clause: would + have + past participle. 'Would apply' is second conditional (unreal present). 'Had applied' is past perfect and cannot function as a main clause without a supporting modal.",
            source: "Murphy, EGU (4e), Unit 41",
            hint: "apply",
            flavor: "social"
          },
          {
            id: "mg-cond-3-08",
            stem: "If scientists ___ the ozone layer's depletion earlier, the Montreal Protocol might have come sooner.",
            options: ["had detected", "detected", "would have detected"],
            answer: "had detected",
            explanation: "Third conditional if-clause: past perfect for a hypothetical earlier discovery.",
            fullExplanation: "Third conditional requires past perfect in the if-clause. 'Detected' (simple past) belongs to second conditional. 'Would have detected' cannot appear in the if-clause in standard conditional grammar.",
            source: "Hewings, AGU (3e), Unit 39",
            hint: "detect",
            flavor: "science"
          },
          {
            id: "mg-cond-3-09",
            stem: "If Leonardo da Vinci ___ modern materials, he might have built working flying machines.",
            options: ["had had access to", "had access to", "would have had access to"],
            answer: "had had access to",
            explanation: "Third conditional if-clause: past perfect ('had had access to') for an unreal past condition.",
            fullExplanation: "Third conditional if-clause uses past perfect. 'Had access to' is simple past (second conditional). 'Would have had access to' cannot be placed in the if-clause.",
            source: "Swan, PEU (4e), §250.1",
            hint: "have",
            flavor: "personalities"
          },
          {
            id: "mg-cond-3-10",
            stem: "The Titanic ___ if its crew had spotted the iceberg thirty seconds earlier.",
            options: ["would have survived", "would survive", "had survived"],
            answer: "would have survived",
            explanation: "Third conditional main clause: would + have + past participle for an unrealised past outcome.",
            fullExplanation: "Third conditional main clause takes would + have + past participle. 'Would survive' is second conditional (unreal present). 'Had survived' is past perfect and cannot stand alone as a main clause in this sentence.",
            source: "Murphy, EGU (4e), Unit 41",
            hint: "survive",
            flavor: "history"
          },
          {
            id: "mg-cond-3-11",
            stem: "We ___ the train if the taxi had not been caught in traffic.",
            options: ["would have caught", "would catch", "had caught"],
            answer: "would have caught",
            explanation: "Third conditional main clause: would + have + past participle for an unrealised past result.",
            fullExplanation: "Third conditional main clause uses would + have + past participle to describe what would have happened. 'Would catch' is second conditional (unreal present). 'Had caught' is past perfect and functions as an if-clause, not a main clause.",
            source: "Murphy, EGU (4e), Unit 41",
            hint: "catch",
            flavor: "social"
          },
          {
            id: "mg-cond-3-12",
            stem: "If the asteroid ___ at a slightly different angle 66 million years ago, the dinosaurs might have survived.",
            options: ["had struck", "struck", "would have struck"],
            answer: "had struck",
            explanation: "Third conditional if-clause: past perfect for a hypothetical past event with different outcome.",
            fullExplanation: "Third conditional if-clause uses past perfect ('had struck') for an unreal past event. 'Struck' (simple past) belongs to second conditional counterfactual speculation. 'Would have struck' cannot be placed in the if-clause.",
            source: "Hewings, AGU (3e), Unit 39",
            hint: "strike",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-ger-inf",
        title: "Gerund vs infinitive",
        tasks: [
          {
            id: "mg-ger-inf-01",
            stem: "Agatha Christie enjoyed ___ her plots in intricate detail before writing a single word.",
            options: ["planning", "to plan", "to planning"],
            answer: "planning",
            explanation: "'Enjoy' always takes a gerund (-ing), never an infinitive.",
            fullExplanation: "'Enjoy' is a verb that only takes a gerund as its complement. 'To plan' (infinitive) is grammatically impossible after 'enjoy'. 'To planning' is never a valid English form.",
            source: "Murphy, EGU (4e), Unit 53",
            hint: "plan",
            flavor: "personalities"
          },
          {
            id: "mg-ger-inf-02",
            stem: "The generals agreed ___ a ceasefire after weeks of failed negotiations at the end of WWI.",
            options: ["to sign", "signing", "to signing"],
            answer: "to sign",
            explanation: "'Agree' takes an infinitive, not a gerund.",
            fullExplanation: "'Agree' is always followed by to + infinitive ('agree to do something'). 'Signing' is a gerund and is not used after 'agree'. 'To signing' is not a valid construction in English.",
            source: "Murphy, EGU (4e), Unit 54",
            hint: "sign",
            flavor: "history"
          },
          {
            id: "mg-ger-inf-03",
            stem: "My flatmate suggested ___ a Thai restaurant near the station for our Friday dinner.",
            options: ["trying", "to try", "to trying"],
            answer: "trying",
            explanation: "'Suggest' takes a gerund, not an infinitive.",
            fullExplanation: "'Suggest' is always followed by a gerund ('suggest doing something'). 'To try' (infinitive) is not used after 'suggest'. 'To trying' is not a valid English form.",
            source: "Swan, PEU (4e), §275.2",
            hint: "try",
            flavor: "social"
          },
          {
            id: "mg-ger-inf-04",
            stem: "Scientists hope ___ a vaccine for the new respiratory virus within eighteen months.",
            options: ["to develop", "developing", "to developing"],
            answer: "to develop",
            explanation: "'Hope' takes an infinitive, not a gerund.",
            fullExplanation: "'Hope' is followed by to + infinitive ('hope to do something'). A gerund ('developing') is not used after 'hope'. 'To developing' is never a valid form.",
            source: "Murphy, EGU (4e), Unit 54",
            hint: "develop",
            flavor: "science"
          },
          {
            id: "mg-ger-inf-05",
            stem: "Pablo Picasso avoided ___ the same style twice during his long artistic career.",
            options: ["repeating", "to repeat", "repeat"],
            answer: "repeating",
            explanation: "'Avoid' takes a gerund, not an infinitive or bare infinitive.",
            fullExplanation: "'Avoid' always takes a gerund ('avoid doing something'). 'To repeat' (infinitive) cannot follow 'avoid'. The bare infinitive 'repeat' is also incorrect after 'avoid'.",
            source: "Murphy, EGU (4e), Unit 53",
            hint: "repeat",
            flavor: "personalities"
          },
          {
            id: "mg-ger-inf-06",
            stem: "The peace treaty promised ___ all political prisoners held since the start of the conflict.",
            options: ["to release", "releasing", "to releasing"],
            answer: "to release",
            explanation: "'Promise' takes an infinitive, not a gerund.",
            fullExplanation: "'Promise' is followed by to + infinitive. 'Releasing' (gerund) is not used after 'promise'. 'To releasing' is not a grammatical English form.",
            source: "Swan, PEU (4e), §275.2",
            hint: "release",
            flavor: "history"
          },
          {
            id: "mg-ger-inf-07",
            stem: "The teacher stopped ___ a side note and returned to the main topic of the lesson.",
            options: ["making", "to make", "make"],
            answer: "making",
            explanation: "'Stop + gerund' means to cease an action — the teacher ceased making a note.",
            fullExplanation: "'Stop + gerund' means to finish/cease doing something. 'Stop to make' (stop + infinitive) means to pause in order to do something — here it would mean the teacher paused in order to make a note, changing the meaning. The bare infinitive 'make' is not used after 'stop'.",
            source: "Murphy, EGU (4e), Unit 55",
            hint: "make",
            flavor: "social"
          },
          {
            id: "mg-ger-inf-08",
            stem: "Seismologists plan ___ sensors along the fault line before the next predicted tremor.",
            options: ["to install", "installing", "to installing"],
            answer: "to install",
            explanation: "'Plan' takes an infinitive, not a gerund.",
            fullExplanation: "'Plan' is followed by to + infinitive ('plan to do something'). 'Installing' (gerund) is not used after 'plan'. 'To installing' is not a valid construction in English.",
            source: "Murphy, EGU (4e), Unit 54",
            hint: "install",
            flavor: "science"
          },
          {
            id: "mg-ger-inf-09",
            stem: "Winston Churchill did not mind ___ long hours into the night when drafting his wartime speeches.",
            options: ["working", "to work", "work"],
            answer: "working",
            explanation: "'Mind' takes a gerund, not an infinitive.",
            fullExplanation: "'Mind' (especially in negative sentences and questions) takes a gerund ('don't mind doing something'). 'To work' (infinitive) is not used after 'mind'. The bare infinitive 'work' is also incorrect after 'mind'.",
            source: "Murphy, EGU (4e), Unit 53",
            hint: "work",
            flavor: "personalities"
          },
          {
            id: "mg-ger-inf-10",
            stem: "By 1945, Allied commanders had decided ___ the war in the Pacific through a naval blockade.",
            options: ["to end", "ending", "to ending"],
            answer: "to end",
            explanation: "'Decide' takes an infinitive, not a gerund.",
            fullExplanation: "'Decide' is always followed by to + infinitive ('decide to do something'). 'Ending' (gerund) is not used after 'decide'. 'To ending' is not a grammatical English form.",
            source: "Murphy, EGU (4e), Unit 54",
            hint: "end",
            flavor: "history"
          },
          {
            id: "mg-ger-inf-11",
            stem: "I remember ___ the front door before we left, but the keys are not in my bag.",
            options: ["locking", "to lock", "lock"],
            answer: "locking",
            explanation: "'Remember + gerund' refers to a memory of a past action that was completed.",
            fullExplanation: "'Remember + gerund' means to recall a past action ('I remember locking' = I have a memory of having done it). 'Remember + infinitive' ('remember to lock') means not to forget to do it in the future. The bare infinitive 'lock' is not used after 'remember'.",
            source: "Murphy, EGU (4e), Unit 55",
            hint: "lock",
            flavor: "social"
          },
          {
            id: "mg-ger-inf-12",
            stem: "The satellite was programmed to try ___ contact with ground control every thirty seconds.",
            options: ["to re-establish", "re-establishing", "re-establish"],
            answer: "to re-establish",
            explanation: "'Try + infinitive' means to make an attempt to do something — the intended meaning here.",
            fullExplanation: "'Try + infinitive' means to attempt to do something ('the satellite tries to re-establish contact'). 'Try + gerund' means to experiment with a different approach to see if it helps. Here the satellite is programmed to attempt contact, so the infinitive is correct. The bare infinitive 're-establish' is not used after 'try'.",
            source: "Murphy, EGU (4e), Unit 55",
            hint: "re-establish",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-rel",
        title: "Relative clauses — basic",
        tasks: [
          {
            id: "mg-rel-01",
            stem: "Marie Curie, ___ discovered radium, was the first woman to win a Nobel Prize.",
            options: ["who", "which", "that"],
            answer: "who",
            explanation: "Use 'who' in a non-defining relative clause referring to a person.",
            fullExplanation: "'Who' is the correct relative pronoun for a person in a non-defining clause (set off by commas). 'Which' refers to things, not people. 'That' cannot be used in non-defining relative clauses.",
            source: "Murphy, EGU (4e), Unit 92",
            flavor: "personalities"
          },
          {
            id: "mg-rel-02",
            stem: "The Colosseum, ___ was built in 70 AD, could seat up to 80,000 spectators.",
            options: ["which", "who", "where"],
            answer: "which",
            explanation: "Use 'which' in a non-defining relative clause referring to a thing.",
            fullExplanation: "'Which' is correct for things in non-defining relative clauses (set off by commas). 'Who' is for people, not buildings. 'Where' refers to a place but cannot function as the subject of the relative clause here.",
            source: "Murphy, EGU (4e), Unit 92",
            flavor: "history"
          },
          {
            id: "mg-rel-03",
            stem: "The manager ___ interviewed me for the job called back the next morning.",
            options: ["who", "which", "whose"],
            answer: "who",
            explanation: "Use 'who' as the subject of a defining relative clause about a person.",
            fullExplanation: "'Who' refers to a person and acts as the subject of the defining clause. 'Which' is for things. 'Whose' is a possessive pronoun and would need a noun to follow it (e.g., 'whose office').",
            source: "Murphy, EGU (4e), Unit 91",
            flavor: "social"
          },
          {
            id: "mg-rel-04",
            stem: "Water ___ is heated to 100°C at sea level turns into steam.",
            options: ["that", "who", "whose"],
            answer: "that",
            explanation: "Use 'that' in a defining relative clause about a thing.",
            fullExplanation: "'That' is used in defining relative clauses for things. 'Who' refers to people. 'Whose' is possessive and cannot function as the subject here.",
            source: "Murphy, EGU (4e), Unit 91",
            flavor: "science"
          },
          {
            id: "mg-rel-05",
            stem: "William Shakespeare, ___ plays are still performed worldwide, lived from 1564 to 1616.",
            options: ["whose", "who", "which"],
            answer: "whose",
            explanation: "Use 'whose' to show that the plays belong to Shakespeare.",
            fullExplanation: "'Whose' is the possessive relative pronoun for people, meaning 'belonging to whom'. 'Who' can only be the subject or object of the clause, not a possessive. 'Which' is for things and cannot be possessive in this way.",
            source: "Murphy, EGU (4e), Unit 93",
            flavor: "personalities"
          },
          {
            id: "mg-rel-06",
            stem: "The town ___ Napoleon was born still attracts thousands of tourists each year.",
            options: ["where", "which", "that"],
            answer: "where",
            explanation: "Use 'where' to refer to a place in a relative clause.",
            fullExplanation: "'Where' refers to a location and replaces 'in which'. 'Which' could replace a noun but would need a preposition ('in which'). 'That' cannot follow a preposition in this structure.",
            source: "Murphy, EGU (4e), Unit 93",
            flavor: "history"
          },
          {
            id: "mg-rel-07",
            stem: "The neighbour ___ lives above us often plays music late at night.",
            options: ["who", "which", "whose"],
            answer: "who",
            explanation: "Use 'who' as the subject of a defining relative clause about a person.",
            fullExplanation: "'Who' refers to a person and acts as the subject of the defining clause. 'Which' is used for things. 'Whose' is possessive and would require a following noun.",
            source: "Murphy, EGU (4e), Unit 91",
            flavor: "social"
          },
          {
            id: "mg-rel-08",
            stem: "Bats, ___ are the only flying mammals, navigate using echolocation.",
            options: ["which", "who", "that"],
            answer: "which",
            explanation: "Use 'which' in a non-defining relative clause about animals.",
            fullExplanation: "'Which' is correct for animals and things in non-defining relative clauses. 'Who' is reserved for people. 'That' cannot be used in non-defining relative clauses (those set off by commas).",
            source: "Murphy, EGU (4e), Unit 92",
            flavor: "science"
          },
          {
            id: "mg-rel-09",
            stem: "Pablo Picasso, ___ co-founded Cubism, produced more than 20,000 works of art.",
            options: ["who", "which", "whose"],
            answer: "who",
            explanation: "Use 'who' in a non-defining relative clause about a named person.",
            fullExplanation: "'Who' is the correct pronoun for a named person in a non-defining clause. 'Which' refers to things or animals. 'Whose' is possessive and cannot act as the subject of the clause.",
            source: "Murphy, EGU (4e), Unit 92",
            flavor: "personalities"
          },
          {
            id: "mg-rel-10",
            stem: "Pompeii, ___ was buried by the eruption of Vesuvius, is now a UNESCO heritage site.",
            options: ["which", "who", "where"],
            answer: "which",
            explanation: "Use 'which' in a non-defining relative clause referring to a city.",
            fullExplanation: "'Which' is correct for things and places in non-defining relative clauses. 'Who' is for people. 'Where' introduces a relative clause of place but cannot be the subject of the verb 'was buried'.",
            source: "Murphy, EGU (4e), Unit 92",
            flavor: "history"
          },
          {
            id: "mg-rel-11",
            stem: "The restaurant ___ we had dinner last Saturday has just closed down.",
            options: ["where", "which", "that"],
            answer: "where",
            explanation: "Use 'where' to refer to a place in a defining relative clause.",
            fullExplanation: "'Where' (= in which) correctly refers to the restaurant as a location. 'Which' could work only with a preposition ('at which'). 'That' requires a preposition here and is awkward in a defining clause of place without one.",
            source: "Murphy, EGU (4e), Unit 93",
            flavor: "social"
          },
          {
            id: "mg-rel-12",
            stem: "Sound waves ___ travel through solid materials move faster than those in air.",
            options: ["that", "who", "which"],
            answer: "that",
            explanation: "Use 'that' in a defining relative clause about a thing.",
            fullExplanation: "'That' correctly introduces a defining relative clause about sound waves (a thing). 'Who' is for people. 'Which' is also grammatically possible in defining clauses but 'that' is the preferred choice when the clause is restrictive and essential to the meaning.",
            source: "Murphy, EGU (4e), Unit 91",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-comp",
        title: "Comparatives",
        tasks: [
          {
            id: "mg-comp-01",
            stem: "Einstein's theory of relativity is ___ any previous model of physics.",
            options: ["more complex than", "complexer than", "more complex as"],
            answer: "more complex than",
            explanation: "Multi-syllable adjectives form comparatives with 'more ... than'.",
            fullExplanation: "'More complex than' is correct because 'complex' is a multi-syllable adjective and takes 'more' for the comparative, followed by 'than'. 'Complexer' is not a standard form. 'More complex as' incorrectly uses 'as' instead of 'than'.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "complex",
            flavor: "personalities"
          },
          {
            id: "mg-comp-02",
            stem: "The Great Wall of China is ___ people often imagine when they first read about it.",
            options: ["longer than", "more long than", "as long as"],
            answer: "longer than",
            explanation: "One-syllable adjectives add '-er than' to form the comparative.",
            fullExplanation: "'Longer than' is correct; one-syllable adjectives like 'long' add '-er' and are followed by 'than'. 'More long than' incorrectly uses 'more' with a short adjective. 'As long as' expresses equality, not superiority.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "long",
            flavor: "history"
          },
          {
            id: "mg-comp-03",
            stem: "My new apartment is ___ my old one, so I have much more space now.",
            options: ["bigger than", "more big than", "bigger as"],
            answer: "bigger than",
            explanation: "Short adjectives double the final consonant and add '-er than'.",
            fullExplanation: "'Bigger than' is correct; 'big' (one syllable, vowel-consonant ending) doubles the 'g' and adds '-er', then 'than'. 'More big than' uses 'more' incorrectly with a short adjective. 'Bigger as' replaces 'than' with 'as', which is wrong in comparatives.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "big",
            flavor: "social"
          },
          {
            id: "mg-comp-04",
            stem: "Light travels ___ sound, which is why we see lightning before we hear thunder.",
            options: ["faster than", "more fast than", "faster as"],
            answer: "faster than",
            explanation: "One-syllable adjectives/adverbs add '-er than' to form the comparative.",
            fullExplanation: "'Faster than' is correct; 'fast' forms its comparative with '-er' followed by 'than'. 'More fast than' wrongly adds 'more' to a one-syllable word. 'Faster as' incorrectly uses 'as' in place of 'than'.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "fast",
            flavor: "science"
          },
          {
            id: "mg-comp-05",
            stem: "Frida Kahlo's later paintings are ___ her early works, reflecting greater personal pain.",
            options: ["more intense than", "intenser than", "more intense as"],
            answer: "more intense than",
            explanation: "Two-syllable adjectives usually form comparatives with 'more ... than'.",
            fullExplanation: "'More intense than' is correct because 'intense' is a two-syllable adjective ending in a consonant, taking 'more'. 'Intenser' is occasionally heard but non-standard. 'More intense as' wrongly uses 'as' instead of 'than'.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "intense",
            flavor: "personalities"
          },
          {
            id: "mg-comp-06",
            stem: "The winters in Siberia are ___ those in most of Western Europe.",
            options: ["colder than", "more cold than", "colder as"],
            answer: "colder than",
            explanation: "One-syllable adjectives add '-er than' to form the comparative.",
            fullExplanation: "'Colder than' is correct; 'cold' (one syllable) adds '-er' and is followed by 'than'. 'More cold than' incorrectly uses 'more' with a short adjective. 'Colder as' replaces 'than' with 'as', which is a German-influenced error.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "cold",
            flavor: "history"
          },
          {
            id: "mg-comp-07",
            stem: "The train to Edinburgh is ___ the bus because there are no traffic jams.",
            options: ["more reliable than", "reliablier than", "more reliable as"],
            answer: "more reliable than",
            explanation: "Multi-syllable adjectives form comparatives with 'more ... than'.",
            fullExplanation: "'More reliable than' is correct because 'reliable' (three syllables) always takes 'more'. 'Reliablier' is not a valid word. 'More reliable as' incorrectly substitutes 'as' for 'than'.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "reliable",
            flavor: "social"
          },
          {
            id: "mg-comp-08",
            stem: "Jupiter is ___ any other planet in our solar system by a large margin.",
            options: ["more massive than", "massiver than", "more massive as"],
            answer: "more massive than",
            explanation: "Multi-syllable adjectives form comparatives with 'more ... than'.",
            fullExplanation: "'More massive than' is correct; 'massive' (two syllables ending in '-ive') takes 'more'. 'Massiver' is not a standard comparative form. 'More massive as' wrongly replaces 'than' with 'as'.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "massive",
            flavor: "science"
          },
          {
            id: "mg-comp-09",
            stem: "Muhammad Ali was ___ most of his opponents, both physically and mentally.",
            options: ["faster than", "more fast than", "as fast as"],
            answer: "faster than",
            explanation: "One-syllable adverbs/adjectives add '-er than' for the comparative.",
            fullExplanation: "'Faster than' is correct; 'fast' takes '-er' and 'than'. 'More fast than' wrongly adds 'more' to a one-syllable form. 'As fast as' indicates equality, not superiority, which contradicts 'most of his opponents'.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "fast",
            flavor: "personalities"
          },
          {
            id: "mg-comp-10",
            stem: "The Industrial Revolution made manufactured goods ___ ever before in history.",
            options: ["cheaper than", "more cheap than", "cheaper as"],
            answer: "cheaper than",
            explanation: "One-syllable adjectives add '-er than' to form the comparative.",
            fullExplanation: "'Cheaper than' is correct; 'cheap' (one syllable) adds '-er' followed by 'than'. 'More cheap than' incorrectly uses 'more'. 'Cheaper as' replaces 'than' with 'as', which is a common learner error.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "cheap",
            flavor: "history"
          },
          {
            id: "mg-comp-11",
            stem: "Living in the city centre is ___ living in the suburbs because of the higher rents.",
            options: ["more expensive than", "expensiver than", "more expensive as"],
            answer: "more expensive than",
            explanation: "Multi-syllable adjectives form comparatives with 'more ... than'.",
            fullExplanation: "'More expensive than' is correct; 'expensive' (three syllables) takes 'more' and 'than'. 'Expensiver' is not a real word. 'More expensive as' wrongly substitutes 'as' for 'than'.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "expensive",
            flavor: "social"
          },
          {
            id: "mg-comp-12",
            stem: "Coral reefs are ___ open ocean habitats, hosting a far greater number of species.",
            options: ["more biodiverse than", "biodiverser than", "more biodiverse as"],
            answer: "more biodiverse than",
            explanation: "Multi-syllable adjectives form comparatives with 'more ... than'.",
            fullExplanation: "'More biodiverse than' is correct; 'biodiverse' (four syllables) always takes 'more'. 'Biodiverser' is not a recognised comparative form. 'More biodiverse as' wrongly replaces 'than' with 'as'.",
            source: "Murphy, EGU (4e), Unit 99",
            hint: "biodiverse",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-sup",
        title: "Superlatives",
        tasks: [
          {
            id: "mg-sup-01",
            stem: "Agatha Christie is ___ selling fiction writer of all time after Shakespeare and the Bible.",
            options: ["the best-selling", "the most good-selling", "the better-selling"],
            answer: "the best-selling",
            explanation: "'Good' forms the irregular superlative 'best', not 'most good'.",
            fullExplanation: "'The best-selling' uses the irregular superlative of 'good'. 'The most good-selling' is incorrect because 'good' never uses 'most'. 'The better-selling' is the comparative, not the superlative.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "good",
            flavor: "personalities"
          },
          {
            id: "mg-sup-02",
            stem: "The Nile is ___ river in Africa, stretching over 6,600 kilometres.",
            options: ["the longest", "the most long", "the longer"],
            answer: "the longest",
            explanation: "One-syllable adjectives form the superlative with 'the ... -est'.",
            fullExplanation: "'The longest' is correct; 'long' (one syllable) adds '-est' and takes 'the'. 'The most long' wrongly uses 'most' with a short adjective. 'The longer' is the comparative form, not the superlative.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "long",
            flavor: "history"
          },
          {
            id: "mg-sup-03",
            stem: "The Grand Canyon is one of ___ natural landmarks in the United States.",
            options: ["the most breathtaking", "the breathtakingest", "the more breathtaking"],
            answer: "the most breathtaking",
            explanation: "Multi-syllable adjectives form superlatives with 'the most ...'.",
            fullExplanation: "'The most breathtaking' is correct because 'breathtaking' (three syllables) takes 'most' for the superlative. 'The breathtakingest' is not a real word. 'The more breathtaking' is the comparative, not the superlative.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "breathtaking",
            flavor: "social"
          },
          {
            id: "mg-sup-04",
            stem: "The blue whale is ___ animal ever known to have lived on Earth.",
            options: ["the largest", "the most large", "the larger"],
            answer: "the largest",
            explanation: "One-syllable adjectives add '-est' with 'the' to form the superlative.",
            fullExplanation: "'The largest' is correct; 'large' drops the final 'e' and adds '-st'. 'The most large' incorrectly adds 'most' to a one-syllable adjective. 'The larger' is the comparative, not the superlative.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "large",
            flavor: "science"
          },
          {
            id: "mg-sup-05",
            stem: "Newton is often described as ___ scientist who ever lived.",
            options: ["the greatest", "the most great", "the greater"],
            answer: "the greatest",
            explanation: "One-syllable adjectives form the superlative with 'the ... -est'.",
            fullExplanation: "'The greatest' is correct; 'great' adds '-est'. 'The most great' wrongly uses 'most' with a one-syllable adjective. 'The greater' is the comparative and compares only two items, not all scientists.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "great",
            flavor: "personalities"
          },
          {
            id: "mg-sup-06",
            stem: "The Battle of the Somme was one of ___ conflicts of the First World War.",
            options: ["the most devastating", "the devastatingest", "the more devastating"],
            answer: "the most devastating",
            explanation: "Multi-syllable adjectives form superlatives with 'the most ...'.",
            fullExplanation: "'The most devastating' is correct because 'devastating' (four syllables) takes 'most'. 'The devastatingest' is not a real word. 'The more devastating' is the comparative form, not the superlative.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "devastating",
            flavor: "history"
          },
          {
            id: "mg-sup-07",
            stem: "This was ___ flight I have ever taken — we had terrible turbulence the whole way.",
            options: ["the worst", "the most bad", "the baddest"],
            answer: "the worst",
            explanation: "'Bad' has an irregular superlative: 'the worst'.",
            fullExplanation: "'The worst' is the irregular superlative of 'bad'. 'The most bad' is non-standard because 'bad' does not use 'most'. 'The baddest' is informal slang meaning 'the best' and is not a formal superlative.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "bad",
            flavor: "social"
          },
          {
            id: "mg-sup-08",
            stem: "Venus is ___ planet in our solar system, with surface temperatures above 460°C.",
            options: ["the hottest", "the most hot", "the hotter"],
            answer: "the hottest",
            explanation: "One-syllable adjectives with CVC pattern double the consonant and add '-est'.",
            fullExplanation: "'The hottest' is correct; 'hot' (CVC pattern) doubles the 't' and adds '-est'. 'The most hot' incorrectly uses 'most' with a one-syllable adjective. 'The hotter' is the comparative, not the superlative.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "hot",
            flavor: "science"
          },
          {
            id: "mg-sup-09",
            stem: "Mozart is considered one of ___ composers in the history of classical music.",
            options: ["the most gifted", "the giftedest", "the more gifted"],
            answer: "the most gifted",
            explanation: "Two-syllable adjectives ending in '-ed' take 'the most ...' for the superlative.",
            fullExplanation: "'The most gifted' is correct; 'gifted' (two syllables) takes 'most'. 'The giftedest' is not a standard superlative. 'The more gifted' is the comparative and implies comparison with only one other person.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "gifted",
            flavor: "personalities"
          },
          {
            id: "mg-sup-10",
            stem: "The Ming Dynasty built ___ section of the Great Wall of China.",
            options: ["the most extensive", "the extensivest", "the more extensive"],
            answer: "the most extensive",
            explanation: "Multi-syllable adjectives form superlatives with 'the most ...'.",
            fullExplanation: "'The most extensive' is correct; 'extensive' (three syllables) takes 'most'. 'The extensivest' is not a real word. 'The more extensive' is a comparative and cannot be used in a superlative context.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "extensive",
            flavor: "history"
          },
          {
            id: "mg-sup-11",
            stem: "That was ___ meal I have had in years — the service and food were outstanding.",
            options: ["the most enjoyable", "the enjoyablest", "the more enjoyable"],
            answer: "the most enjoyable",
            explanation: "Multi-syllable adjectives form superlatives with 'the most ...'.",
            fullExplanation: "'The most enjoyable' is correct; 'enjoyable' (four syllables) takes 'most'. 'The enjoyablest' is not a valid form. 'The more enjoyable' is comparative and compares only two items.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "enjoyable",
            flavor: "social"
          },
          {
            id: "mg-sup-12",
            stem: "The Amazon rainforest is ___ tropical ecosystem on the planet.",
            options: ["the most species-rich", "the species-richest", "the more species-rich"],
            answer: "the most species-rich",
            explanation: "Compound adjectives of more than one syllable form superlatives with 'the most ...'.",
            fullExplanation: "'The most species-rich' is correct; compound adjectives use 'most' for the superlative. 'The species-richest' is not standard for compound forms. 'The more species-rich' is the comparative, not the superlative.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "species-rich",
            flavor: "science"
          }
        ]
      },
      {
        id: "mg-quant",
        title: "Quantifiers — mixed",
        tasks: [
          {
            id: "mg-quant-01",
            stem: "Ada Lovelace spent ___ time working on Charles Babbage's Analytical Engine.",
            options: ["much", "many", "a few"],
            answer: "much",
            explanation: "Use 'much' with uncountable nouns like 'time'.",
            fullExplanation: "'Much' collocates with uncountable nouns such as 'time'. 'Many' is for countable plural nouns. 'A few' is for countable nouns and means 'some but not a lot', contradicting the sentence's implication of extensive work.",
            source: "Murphy, EGU (4e), Unit 83",
            flavor: "personalities"
          },
          {
            id: "mg-quant-02",
            stem: "There were ___ famous battles during the Napoleonic Wars, including Waterloo.",
            options: ["many", "much", "little"],
            answer: "many",
            explanation: "Use 'many' with countable plural nouns like 'battles'.",
            fullExplanation: "'Many' is correct with countable plural nouns such as 'battles'. 'Much' is for uncountable nouns. 'Little' is for uncountable nouns and means 'not much', which contradicts the factual statement.",
            source: "Murphy, EGU (4e), Unit 83",
            flavor: "history"
          },
          {
            id: "mg-quant-03",
            stem: "Would you like ___ sugar in your coffee, or do you prefer it without?",
            options: ["a little", "a few", "many"],
            answer: "a little",
            explanation: "Use 'a little' with uncountable nouns like 'sugar'.",
            fullExplanation: "'A little' means 'some (but not much)' and goes with uncountable nouns. 'A few' is for countable plural nouns. 'Many' is also for countable nouns and would not work with 'sugar'.",
            source: "Murphy, EGU (4e), Unit 84",
            flavor: "social"
          },
          {
            id: "mg-quant-04",
            stem: "Satellites can receive ___ data from Earth's surface simultaneously.",
            options: ["a great deal of", "many", "a few"],
            answer: "a great deal of",
            explanation: "Use 'a great deal of' (= a lot of) with uncountable nouns like 'data'.",
            fullExplanation: "'A great deal of' collocates with uncountable nouns such as 'data'. 'Many' is for countable plural nouns. 'A few' means 'some' and is used with countable plural nouns, not uncountable ones.",
            source: "Murphy, EGU (4e), Unit 83",
            flavor: "science"
          },
          {
            id: "mg-quant-05",
            stem: "Vincent van Gogh sold ___ paintings during his lifetime, despite his prolific output.",
            options: ["few", "little", "much"],
            answer: "few",
            explanation: "Use 'few' (= not many) with countable plural nouns like 'paintings'.",
            fullExplanation: "'Few' means 'not many' and is used with countable plural nouns. 'Little' means 'not much' and collocates with uncountable nouns. 'Much' is also for uncountable nouns and cannot be used with 'paintings'.",
            source: "Murphy, EGU (4e), Unit 84",
            flavor: "personalities"
          },
          {
            id: "mg-quant-06",
            stem: "There was ___ evidence of life in ancient Egypt before archaeologists found the hieroglyphs.",
            options: ["little", "few", "many"],
            answer: "little",
            explanation: "Use 'little' (= not much) with uncountable nouns like 'evidence'.",
            fullExplanation: "'Little' means 'not much' and goes with uncountable nouns such as 'evidence'. 'Few' means 'not many' and is for countable plural nouns. 'Many' is also for countable nouns and cannot modify an uncountable noun.",
            source: "Murphy, EGU (4e), Unit 84",
            flavor: "history"
          },
          {
            id: "mg-quant-07",
            stem: "Is there ___ milk left in the fridge, or shall I buy some on my way home?",
            options: ["any", "some", "every"],
            answer: "any",
            explanation: "Use 'any' in questions with uncountable nouns.",
            fullExplanation: "'Any' is used in questions and negative sentences with uncountable nouns. 'Some' would suggest the speaker expects a positive answer or is making an offer. 'Every' is used with singular countable nouns and cannot precede 'milk'.",
            source: "Murphy, EGU (4e), Unit 85",
            flavor: "social"
          },
          {
            id: "mg-quant-08",
            stem: "___ plant needs carbon dioxide and sunlight to carry out photosynthesis.",
            options: ["Every", "Much", "A few"],
            answer: "Every",
            explanation: "Use 'every' + singular noun to mean 'all members of a group without exception'.",
            fullExplanation: "'Every plant' means 'all plants without exception' and takes a singular countable noun. 'Much' is for uncountable nouns. 'A few' means 'some' and is for countable plural nouns, not the universal statement intended here.",
            source: "Murphy, EGU (4e), Unit 86",
            flavor: "science"
          },
          {
            id: "mg-quant-09",
            stem: "Nelson Mandela showed ___ remarkable courage throughout his 27 years in prison.",
            options: ["such", "many", "a few"],
            answer: "such",
            explanation: "Use 'such' before an uncountable noun phrase to intensify a quality.",
            fullExplanation: "'Such remarkable courage' uses 'such' to intensify the quality of an uncountable noun. 'Many' is for countable plural nouns. 'A few' is for countable plural nouns and means 'some'.",
            source: "Murphy, EGU (4e), Unit 83",
            flavor: "personalities"
          },
          {
            id: "mg-quant-10",
            stem: "___ soldier in the Roman legion received a standard daily ration of grain.",
            options: ["Each", "Many", "Little"],
            answer: "Each",
            explanation: "Use 'each' + singular countable noun to refer to individual members of a group.",
            fullExplanation: "'Each soldier' refers to every soldier individually and takes a singular countable noun. 'Many' is for countable plural nouns and cannot take a singular. 'Little' is for uncountable nouns.",
            source: "Murphy, EGU (4e), Unit 86",
            flavor: "history"
          },
          {
            id: "mg-quant-11",
            stem: "The children made ___ noise at the party, and the neighbours began to complain.",
            options: ["so much", "so many", "a few"],
            answer: "so much",
            explanation: "Use 'so much' with uncountable nouns like 'noise'.",
            fullExplanation: "'So much noise' is correct because 'noise' is uncountable. 'So many' is for countable plural nouns. 'A few' is for countable plural nouns and means 'some', which is too weak for this context.",
            source: "Murphy, EGU (4e), Unit 83",
            flavor: "social"
          },
          {
            id: "mg-quant-12",
            stem: "The deep ocean contains ___ species that have never been observed by scientists.",
            options: ["some", "much", "little"],
            answer: "some",
            explanation: "Use 'some' with countable plural nouns in affirmative sentences.",
            fullExplanation: "'Some species' is correct; 'some' works with countable plural nouns in affirmative statements. 'Much' is for uncountable nouns. 'Little' is for uncountable nouns and means 'not much'.",
            source: "Murphy, EGU (4e), Unit 85",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "articles",
    title: "Articles & Determiners",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "art-indef",
        title: "Indefinite a/an",
        tasks: [
          {
            id: "art-indef-01",
            stem: "Albert Einstein was ___ theoretical physicist who changed our understanding of space and time.",
            options: ["a", "an", "the"],
            answer: "a",
            explanation: "'Physicist' begins with the consonant sound /f/, so 'a' is correct.",
            fullExplanation: "The indefinite article 'a' is used before words beginning with a consonant sound. 'Physicist' starts with /f/, a consonant sound, so 'a physicist' is correct. 'An' is used before vowel sounds, not consonant sounds. 'The' would imply a unique or specific physicist already identified in context.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "personalities"
          },
          {
            id: "art-indef-02",
            stem: "The Magna Carta was ___ historic document signed in 1215 that limited royal power in England.",
            options: ["a", "an", "the"],
            answer: "a",
            explanation: "'Historic' begins with the consonant sound /h/, so 'a' is correct.",
            fullExplanation: "Although 'historic' begins with the letter 'h', the 'h' is pronounced, giving the consonant sound /h/. Therefore 'a historic' is correct. 'An historic' is an older usage but is not standard in modern English. 'The' signals a specific, unique item already known — here the item is being introduced for the first time.",
            source: "Swan, PEU (4e), §68",
            flavor: "history"
          },
          {
            id: "art-indef-03",
            stem: "My sister has just started ___ new job as a project manager at a tech company.",
            options: ["a", "an", "the"],
            answer: "a",
            explanation: "'New' begins with the consonant sound /n/, so 'a' is correct.",
            fullExplanation: "'New' begins with the consonant sound /n/, so 'a new job' is the correct form. 'An' is only used before vowel sounds such as /æ/, /ɛ/, /ɪ/, /ɒ/, /ʌ/. 'The' would imply a specific job already known to the listener.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "social"
          },
          {
            id: "art-indef-04",
            stem: "A solar eclipse occurs when the Moon passes between Earth and the Sun, casting ___ shadow on Earth's surface.",
            options: ["a", "an", "the"],
            answer: "a",
            explanation: "'Shadow' begins with the consonant sound /ʃ/, so 'a' is correct.",
            fullExplanation: "'Shadow' begins with the consonant sound /ʃ/, so 'a shadow' is required. 'An' is used before vowel sounds only. 'The' would suggest a specific shadow already introduced or uniquely defined, which is not the case here.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "science"
          },
          {
            id: "art-indef-05",
            stem: "Maya Angelou was ___ author whose poetry and memoirs explored race, identity, and resilience.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'Author' begins with the vowel sound /ɔː/, so 'an' is correct.",
            fullExplanation: "'Author' begins with the vowel sound /ɔː/, so 'an author' is correct. The rule applies to sound, not spelling: any word whose first sound is a vowel takes 'an'. 'A author' is incorrect because 'a' is used before consonant sounds only. 'The' would signal a specific, already-identified author.",
            source: "Swan, PEU (4e), §68",
            flavor: "personalities"
          },
          {
            id: "art-indef-06",
            stem: "The Eiffel Tower was considered ___ eyesore by many Parisians when it was first built in 1889.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'Eyesore' begins with the vowel sound /aɪ/, so 'an' is correct.",
            fullExplanation: "'Eyesore' begins with the vowel sound /aɪ/, so 'an eyesore' is required. The article choice is based on the initial sound of the following word. 'A eyesore' is incorrect. 'The eyesore' would suggest a specific one already established in context.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "history"
          },
          {
            id: "art-indef-07",
            stem: "Could you pass me ___ umbrella? It looks like it is going to rain.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'Umbrella' begins with the vowel sound /ʌ/, so 'an' is correct.",
            fullExplanation: "'Umbrella' begins with the vowel sound /ʌ/, so 'an umbrella' is correct. The indefinite article 'an' is required before any word whose initial sound is a vowel. 'A umbrella' is incorrect. If a specific umbrella had already been mentioned, 'the' would be used instead.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "social"
          },
          {
            id: "art-indef-08",
            stem: "An octopus has ___ unusually large brain relative to its body size, which explains its problem-solving ability.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'Unusually' begins with the vowel sound /ʌ/, so 'an' is correct.",
            fullExplanation: "'Unusually' begins with the vowel sound /ʌ/, so 'an unusually large brain' is correct. The article 'an' precedes the adjective here because the adjective, not the noun, directly follows the article. 'A unusually' is incorrect. 'The' would imply a specific brain already referred to.",
            source: "Swan, PEU (4e), §68",
            flavor: "science"
          },
          {
            id: "art-indef-09",
            stem: "Agatha Christie held ___ MBA from a business college before she became a famous crime writer.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "The acronym 'MBA' is pronounced 'em-bee-ay', beginning with the vowel sound /ɛ/, so 'an' is correct.",
            fullExplanation: "When an abbreviation is read letter by letter, the article is based on the pronunciation of the first letter. 'M' is pronounced /ɛm/, a vowel sound, so 'an MBA' is correct. 'A MBA' is incorrect. 'The' would imply a specific qualification already identified.",
            source: "Swan, PEU (4e), §68",
            flavor: "personalities"
          },
          {
            id: "art-indef-10",
            stem: "The eruption of Krakatoa in 1883 was ___ event so powerful that its sound was heard 4,800 kilometres away.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'Event' begins with the vowel sound /ɪ/, so 'an' is correct.",
            fullExplanation: "'Event' begins with the vowel sound /ɪ/, so 'an event' is required. The choice of 'an' depends on the initial sound of the word that directly follows the article. 'A event' is grammatically incorrect. 'The' would signal a specific event already known in context, but here 'event' is being classified for the first time.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "history"
          },
          {
            id: "art-indef-11",
            stem: "The manager gave each employee ___ honest assessment of their performance during the annual review.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'Honest' begins with the vowel sound /ɒ/ because the 'h' is silent, so 'an' is correct.",
            fullExplanation: "The 'h' in 'honest' is silent, so the word begins with the vowel sound /ɒ/. Therefore 'an honest' is correct — article choice depends on sound, not spelling. 'A honest' is incorrect. 'The honest assessment' would be used only if a specific assessment had already been mentioned.",
            source: "Swan, PEU (4e), §68",
            flavor: "social"
          },
          {
            id: "art-indef-12",
            stem: "A university student needs ___ efficient study strategy to manage multiple assignments at once.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'Efficient' begins with the vowel sound /ɪ/, so 'an' is correct.",
            fullExplanation: "'Efficient' begins with the vowel sound /ɪ/, so 'an efficient' is required. The article precedes the adjective, and its form depends on that adjective's initial sound. 'A efficient' is incorrect. 'The strategy' would imply a specific one already discussed.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "science"
          }
        ]
      },
      {
        id: "art-def",
        title: "Definite the",
        tasks: [
          {
            id: "art-def-01",
            stem: "Stephen Hawking dedicated his life to studying ___ universe and its origins.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "'The universe' is a unique object — there is only one universe.",
            fullExplanation: "'The' is used with unique, one-of-a-kind nouns. There is only one universe, making it inherently definite. 'A universe' would imply one of many possible universes, which contradicts the factual claim. 'An universe' is also incorrect because 'universe' begins with the consonant sound /juː/.",
            source: "Murphy, EGU (4e), Unit 72",
            flavor: "personalities"
          },
          {
            id: "art-def-02",
            stem: "Napoleon was exiled to Saint Helena, a remote island in ___ South Atlantic Ocean.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "Oceans take 'the' as part of their conventional proper names.",
            fullExplanation: "'The' is required before the names of oceans, seas, rivers, and mountain ranges as a grammatical convention. 'The South Atlantic Ocean' is a fixed proper noun requiring 'the'. 'A South Atlantic Ocean' is incorrect as it implies one of many. 'An' is incorrect because 'South' begins with a consonant sound.",
            source: "Swan, PEU (4e), §72",
            flavor: "history"
          },
          {
            id: "art-def-03",
            stem: "Could you please close ___ window? There is a draught coming in from outside.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "'The window' refers to a specific window known from shared context.",
            fullExplanation: "'The' is used when the speaker and listener share knowledge of a specific item — there is one identifiable window in the room. 'A window' would imply any window, not the one causing the draught. 'An' is incorrect because 'window' begins with the consonant sound /w/.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "social"
          },
          {
            id: "art-def-04",
            stem: "___ Sun is approximately 150 million kilometres from Earth.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "'The Sun' is unique — there is only one sun in our solar system.",
            fullExplanation: "'The' is used before unique celestial bodies that exist as single entities in our solar system. 'A sun' would suggest one of many suns, which is unnatural in this factual context. 'An' is incorrect because 'Sun' begins with the consonant sound /s/.",
            source: "Murphy, EGU (4e), Unit 72",
            flavor: "science"
          },
          {
            id: "art-def-05",
            stem: "Charles Dickens is widely regarded as ___ greatest Victorian novelist.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "Superlatives require 'the' to signal the top-ranked item.",
            fullExplanation: "Superlative adjectives ('greatest', 'tallest', 'most famous') always require 'the' because they identify a unique top position. 'A greatest' is ungrammatical. 'An' is incorrect because 'greatest' begins with the consonant sound /ɡ/.",
            source: "Swan, PEU (4e), §73",
            flavor: "personalities"
          },
          {
            id: "art-def-06",
            stem: "The Allies invaded Normandy in June 1944; ___ operation became known as D-Day.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "'The operation' refers back to the invasion just mentioned — second mention requires 'the'.",
            fullExplanation: "'The' is used on second or subsequent mention of a noun because it is now identified. The invasion was introduced in the first clause, so 'the operation' refers back to it. 'A operation' is incorrect both grammatically and by sense. 'An operation' would incorrectly re-introduce it as new and unidentified.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "history"
          },
          {
            id: "art-def-07",
            stem: "I saw a puppy and a kitten at the shelter. ___ puppy was sleeping when I arrived.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "'The puppy' is used on second mention — it was introduced in the previous sentence.",
            fullExplanation: "When a noun is mentioned for the first time, 'a' or 'an' is used. On second mention, 'the' is used because both speakers now know which one is meant. 'A puppy' would treat the puppy as new and unknown. 'An' is incorrect because 'puppy' begins with the consonant sound /p/.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "social"
          },
          {
            id: "art-def-08",
            stem: "DNA carries ___ genetic information that determines an organism's traits and development.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "'The genetic information' refers to the specific, unique set of information in DNA.",
            fullExplanation: "'The' is used because 'the genetic information' is specified and uniquely defined — DNA carries a particular type of information, not just any information. 'A genetic information' is ungrammatical as 'information' is uncountable. 'An' is incorrect because 'genetic' begins with the consonant sound /dʒ/.",
            source: "Swan, PEU (4e), §72",
            flavor: "science"
          },
          {
            id: "art-def-09",
            stem: "Pelé is considered ___ most celebrated footballer of the twentieth century.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "Superlative 'most celebrated' requires 'the'.",
            fullExplanation: "Superlatives like 'most celebrated' always take 'the' because they identify a unique top position in a group. 'A most celebrated' would be grammatically wrong in this superlative construction. 'An' is incorrect because 'most' begins with the consonant sound /m/.",
            source: "Murphy, EGU (4e), Unit 72",
            flavor: "personalities"
          },
          {
            id: "art-def-10",
            stem: "The Wright brothers made their first successful flight in 1903; ___ flight lasted just twelve seconds.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "'The flight' uses 'the' on second mention — it was introduced in the same sentence.",
            fullExplanation: "After introducing 'their first successful flight' with a possessive determiner, referring back to it as 'the flight' is correct because both the writer and reader now identify the same event. 'A flight' would wrongly treat it as new information. 'An flight' is ungrammatical.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "history"
          },
          {
            id: "art-def-11",
            stem: "She booked a hotel room near ___ city centre so she could walk to all the main attractions.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "'The city centre' refers to a specific, unique central area of that city.",
            fullExplanation: "'The city centre' is a unique, identifiable reference — every city has exactly one centre, and the context makes clear which city is meant. 'A city centre' would wrongly imply one of several possible centres. 'An' is incorrect because 'city' begins with the consonant sound /s/.",
            source: "Swan, PEU (4e), §73",
            flavor: "social"
          },
          {
            id: "art-def-12",
            stem: "___ Amazon River is the largest river in the world by volume of water.",
            options: ["the", "a", "an"],
            answer: "the",
            explanation: "Rivers take 'the' as a grammatical convention, and superlative 'largest' also requires 'the'.",
            fullExplanation: "'The' is conventionally required before river names (the Amazon, the Nile, the Thames). Additionally, the superlative 'largest' requires 'the' to mark the unique top-ranked item. 'A Amazon River' is incorrect. 'An' is incorrect because 'Amazon' begins with the vowel sound /æ/ — but the article choice is 'the' regardless.",
            source: "Murphy, EGU (4e), Unit 72",
            flavor: "science"
          }
        ]
      },
      {
        id: "art-zero",
        title: "Zero article",
        tasks: [
          {
            id: "art-zero-01",
            stem: "Isaac Newton believed that ___ mathematics was the language through which nature's laws could be expressed.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with abstract nouns like 'mathematics' when referring to the subject in general.",
            fullExplanation: "Abstract disciplines and fields of study (mathematics, science, philosophy) are used without any article when referred to in a general sense. 'The mathematics' would imply a specific branch or body of mathematics already identified in context. 'A mathematics' is ungrammatical because the noun is uncountable.",
            source: "Murphy, EGU (4e), Unit 75",
            flavor: "personalities"
          },
          {
            id: "art-zero-02",
            stem: "___ ancient Romans used concrete to construct buildings that have survived for over two thousand years.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with plural nouns referring to a general group of people.",
            fullExplanation: "General plural nouns referring to groups of people in a broad, non-specific sense require zero article. 'The ancient Romans' would refer to a specifically identified subset already discussed. 'A ancient Romans' is ungrammatical — 'a' cannot precede a plural noun.",
            source: "Swan, PEU (4e), §67",
            flavor: "history"
          },
          {
            id: "art-zero-03",
            stem: "The children always have ___ breakfast together before leaving for school.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with meals (breakfast, lunch, dinner) in a general, routine sense.",
            fullExplanation: "Meals referred to in a routine or general sense (have breakfast, eat lunch, cook dinner) take zero article. 'The breakfast' would imply a specific meal already identified. 'A breakfast' would be used only if the meal were modified (a large breakfast, a typical breakfast).",
            source: "Murphy, EGU (4e), Unit 75",
            flavor: "social"
          },
          {
            id: "art-zero-04",
            stem: "___ lions are apex predators that play a vital role in regulating prey populations on the savanna.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with plural nouns representing a species in general.",
            fullExplanation: "When referring to an entire species in general, the plural noun is used without an article (lions, elephants, whales). 'The lions' would refer to a specific group of lions already identified. 'A lions' is ungrammatical because 'a' cannot precede plural nouns.",
            source: "Murphy, EGU (4e), Unit 74",
            flavor: "science"
          },
          {
            id: "art-zero-05",
            stem: "Agatha Christie wrote most of her novels in ___ English, which made her the world's best-selling fiction writer.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with the names of languages.",
            fullExplanation: "Languages are used without any article when referred to by name (English, French, Mandarin). 'The English' would refer to the people of England, not the language. 'An English' is ungrammatical in this context.",
            source: "Swan, PEU (4e), §67",
            flavor: "personalities"
          },
          {
            id: "art-zero-06",
            stem: "___ World War One began in 1914, following decades of political tension across Europe.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Numbered world wars are referred to without an article when the number directly precedes the noun.",
            fullExplanation: "Phrases with a number or ordinal used as a proper name (World War One, World War Two) are conventionally used without 'the'. 'The World War One' adds an unnecessary definite article. 'A World War One' is incorrect because proper names do not take 'a'.",
            source: "Murphy, EGU (4e), Unit 75",
            flavor: "history"
          },
          {
            id: "art-zero-07",
            stem: "Many teenagers today travel to school by ___ bus rather than walking.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used in 'by + transport' phrases (by bus, by train, by car).",
            fullExplanation: "Transport phrases introduced by 'by' (by bus, by train, by plane, by car) always use zero article. 'By the bus' would suggest a specific bus already identified. 'By a bus' is ungrammatical in this fixed phrase structure.",
            source: "Swan, PEU (4e), §67",
            flavor: "social"
          },
          {
            id: "art-zero-08",
            stem: "___ gravity is the force that keeps planets in orbit around their host stars.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with abstract scientific nouns like 'gravity' in a general sense.",
            fullExplanation: "Abstract nouns denoting physical forces or phenomena (gravity, magnetism, friction) take zero article when used in a general statement. 'The gravity' would imply a specific instance of gravity already introduced. 'A gravity' is ungrammatical because 'gravity' is an uncountable noun.",
            source: "Murphy, EGU (4e), Unit 75",
            flavor: "science"
          },
          {
            id: "art-zero-09",
            stem: "Nelson Mandela spent 27 years in prison; after his release, he promoted ___ forgiveness rather than revenge.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with abstract nouns like 'forgiveness' in a general sense.",
            fullExplanation: "Abstract nouns expressing qualities or concepts (forgiveness, justice, love, peace) take zero article when used generally. 'The forgiveness' would imply a specific act of forgiveness already discussed. 'A forgiveness' is ungrammatical because 'forgiveness' is uncountable.",
            source: "Swan, PEU (4e), §67",
            flavor: "personalities"
          },
          {
            id: "art-zero-10",
            stem: "___ gladiators in ancient Rome fought in arenas to entertain large crowds.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with plural nouns referring to a general historical group.",
            fullExplanation: "General plural nouns used to make broad statements about a class of people (gladiators, soldiers, merchants) take zero article. 'The gladiators' would imply a specific group already identified. 'A gladiators' is ungrammatical because 'a' cannot precede plural nouns.",
            source: "Murphy, EGU (4e), Unit 74",
            flavor: "history"
          },
          {
            id: "art-zero-11",
            stem: "She was surprised to discover that ___ freedom feels overwhelming when you have too many choices.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with abstract nouns like 'freedom' in a general sense.",
            fullExplanation: "Abstract nouns (freedom, happiness, knowledge, truth) take zero article when referred to in a general, philosophical sense. 'The freedom' would point to a specific instance of freedom previously identified. 'A freedom' is ungrammatical because 'freedom' is an uncountable noun in this usage.",
            source: "Murphy, EGU (4e), Unit 75",
            flavor: "social"
          },
          {
            id: "art-zero-12",
            stem: "___ whales are the largest animals on Earth and are found in every ocean.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with plural nouns representing an entire species.",
            fullExplanation: "When making a general statement about an entire species, the plural noun is used without any article (whales, dolphins, sharks). 'The whales' would refer to a specific group of whales already identified. 'A whales' is ungrammatical because 'a' cannot precede plural nouns.",
            source: "Swan, PEU (4e), §67",
            flavor: "science"
          }
        ]
      },
      {
        id: "art-mixed",
        title: "Two-blank article choice",
        tasks: [
          {
            id: "art-mixed-01",
            stem: "Jane Austen was ___ author who wrote ___ most celebrated novel of her time, Pride and Prejudice.",
            options: ["an / the", "a / a", "the / an"],
            answer: "an / the",
            explanation: "'An author' — 'author' begins with vowel sound /ɔː/; 'the most celebrated' — superlative requires 'the'.",
            fullExplanation: "'An' is used before 'author' because it begins with the vowel sound /ɔː/. 'The' is required before the superlative 'most celebrated' because superlatives identify a unique top item. 'A / a' is wrong because 'author' needs 'an' and 'most celebrated' needs 'the'. 'The / an' is wrong because Austen is being introduced as a category member, not uniquely identified.",
            source: "Murphy, EGU (4e), Units 69–72",
            flavor: "personalities"
          },
          {
            id: "art-mixed-02",
            stem: "The French Revolution was ___ uprising that changed ___ political landscape of Europe forever.",
            options: ["an / the", "a / a", "the / a"],
            answer: "an / the",
            explanation: "'An uprising' — 'uprising' begins with vowel sound /ʌ/; 'the political landscape' — specific unique entity.",
            fullExplanation: "'An' precedes 'uprising' because the word begins with the vowel sound /ʌ/. 'The political landscape' uses 'the' because the landscape of Europe is a specific, uniquely identified entity. 'A / a' misuses 'a' before a vowel sound. 'The / a' wrongly uses 'the' before a first-mention indefinite noun and 'a' before a specific entity.",
            source: "Swan, PEU (4e), §68–73",
            flavor: "history"
          },
          {
            id: "art-mixed-03",
            stem: "She bought ___ new laptop and ___ laptop turned out to be much faster than her old one.",
            options: ["a / the", "the / a", "an / the"],
            answer: "a / the",
            explanation: "'A new laptop' — first mention; 'the laptop' — second mention, now identified.",
            fullExplanation: "On first mention, an unidentified noun takes 'a' or 'an'. On second mention, the same noun becomes identified and takes 'the'. 'The / a' reverses the correct order. 'An / the' is incorrect because 'new' begins with the consonant sound /n/, requiring 'a'.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "social"
          },
          {
            id: "art-mixed-04",
            stem: "Light travels at ___ speed of about 300,000 kilometres per second, making it ___ fastest thing in the universe.",
            options: ["a / the", "the / a", "a / a"],
            answer: "a / the",
            explanation: "'A speed' — approximate measure introduced for the first time; 'the fastest' — superlative requires 'the'.",
            fullExplanation: "'A speed of about 300,000 km/s' uses 'a' because the speed is being introduced as one approximate value. 'The fastest' requires 'the' because it is a superlative identifying a unique position. 'The / a' wrongly treats the speed as already known and omits 'the' before the superlative. 'A / a' omits 'the' from the superlative.",
            source: "Murphy, EGU (4e), Units 70–72",
            flavor: "science"
          },
          {
            id: "art-mixed-05",
            stem: "Mozart was ___ child prodigy who performed for ___ Emperor of Austria at the age of six.",
            options: ["a / the", "an / a", "the / a"],
            answer: "a / the",
            explanation: "'A child prodigy' — first mention, classification; 'the Emperor' — unique, specific title holder.",
            fullExplanation: "'A child prodigy' uses 'a' because 'child' begins with the consonant sound /tʃ/ and the noun is being introduced as a category. 'The Emperor of Austria' uses 'the' because there is one specific Emperor in that context. 'An / a' incorrectly applies 'an' before a consonant sound. 'The / a' wrongly treats Mozart as already defined and misclassifies the Emperor.",
            source: "Swan, PEU (4e), §68–73",
            flavor: "personalities"
          },
          {
            id: "art-mixed-06",
            stem: "The Great Wall of China was ___ enormous construction project that stretched across ___ northern frontier of the country.",
            options: ["an / the", "a / a", "the / a"],
            answer: "an / the",
            explanation: "'An enormous' — 'enormous' begins with vowel sound /ɪ/; 'the northern frontier' — specific unique geographic area.",
            fullExplanation: "'An' is required before 'enormous' because the adjective begins with the vowel sound /ɪ/. 'The northern frontier' takes 'the' because it refers to a specific, uniquely identifiable geographic area of China. 'A / a' incorrectly uses 'a' before a vowel sound. 'The / a' wrongly specifies the wall as already identified and uses 'a' before a specific entity.",
            source: "Murphy, EGU (4e), Units 69–72",
            flavor: "history"
          },
          {
            id: "art-mixed-07",
            stem: "Our neighbours have ___ dog and ___ dog barks every night.",
            options: ["a / the", "the / a", "a / a"],
            answer: "a / the",
            explanation: "'A dog' — first mention, unidentified; 'the dog' — second mention, now identified.",
            fullExplanation: "The first mention of an unspecified noun uses 'a' or 'an'. On second mention, it is identified and 'the' is used. 'The / a' reverses the order, wrongly treating the dog as known before it is introduced. 'A / a' fails to use 'the' on second mention.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "social"
          },
          {
            id: "art-mixed-08",
            stem: "Photosynthesis takes place in ___ specialised structure called ___ chloroplast, which is found inside plant cells.",
            options: ["a / a", "the / the", "an / the"],
            answer: "a / a",
            explanation: "Both nouns are introduced for the first time and begin with consonant sounds: 'a specialised structure' and 'a chloroplast'.",
            fullExplanation: "Both nouns are being introduced for the first time ('a specialised structure', 'a chloroplast'), so 'a' is correct for both. 'The / the' would wrongly treat both as already identified. 'An / the' incorrectly uses 'an' before 'specialised' which begins with the consonant sound /s/.",
            source: "Swan, PEU (4e), §68–73",
            flavor: "science"
          },
          {
            id: "art-mixed-09",
            stem: "Pablo Picasso co-founded ___ artistic movement called Cubism, which had ___ enormous impact on modern art.",
            options: ["an / an", "a / the", "the / an"],
            answer: "an / an",
            explanation: "'An artistic movement' — 'artistic' begins with vowel sound /ɑː/; 'an enormous impact' — 'enormous' begins with vowel sound /ɪ/.",
            fullExplanation: "Both 'artistic' and 'enormous' begin with vowel sounds (/ɑː/ and /ɪ/ respectively), so 'an' is correct before each. 'A / the' incorrectly uses 'a' before a vowel sound and 'the' for an unspecified impact. 'The / an' wrongly treats Cubism's movement as already identified before introduction.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "personalities"
          },
          {
            id: "art-mixed-10",
            stem: "During ___ Industrial Revolution, workers moved from ___ countryside into rapidly growing cities.",
            options: ["the / the", "a / the", "the / a"],
            answer: "the / the",
            explanation: "'The Industrial Revolution' — unique historical era; 'the countryside' — specific, unique geographic concept.",
            fullExplanation: "'The Industrial Revolution' uses 'the' because it is a unique, named historical period. 'The countryside' uses 'the' because it refers to the specific rural area of the country being discussed, not an unidentified countryside. 'A / the' wrongly uses 'a' before a unique proper noun. 'The / a' incorrectly uses 'a' before 'countryside', which refers to a specific area.",
            source: "Swan, PEU (4e), §72–73",
            flavor: "history"
          },
          {
            id: "art-mixed-11",
            stem: "She is ___ only person in the office who speaks Mandarin, which gives her ___ unique advantage in negotiations.",
            options: ["the / a", "a / the", "an / a"],
            answer: "the / a",
            explanation: "'The only person' — 'only' creates a unique reference requiring 'the'; 'a unique advantage' — 'unique' begins with consonant sound /juː/, first mention.",
            fullExplanation: "'The' is required before 'only person' because 'only' defines a unique individual. 'A unique advantage' uses 'a' because 'unique' begins with the consonant sound /juː/ and the advantage is being introduced for the first time. 'A / the' wrongly uses 'a' before the uniquely identified person. 'An / a' incorrectly uses 'an' before 'unique', which has a consonant initial sound.",
            source: "Murphy, EGU (4e), Units 70–72",
            flavor: "social"
          },
          {
            id: "art-mixed-12",
            stem: "Oxygen is ___ element essential for life on Earth; without it, ___ atmosphere would be unable to support most organisms.",
            options: ["an / the", "a / a", "the / a"],
            answer: "an / the",
            explanation: "'An element' — 'element' begins with vowel sound /ɛ/; 'the atmosphere' — unique, specific atmosphere of Earth.",
            fullExplanation: "'An' precedes 'element' because the word begins with the vowel sound /ɛ/. 'The atmosphere' uses 'the' because Earth has one specific, uniquely identifiable atmosphere. 'A / a' uses 'a' before a vowel sound and fails to identify the atmosphere. 'The / a' incorrectly treats 'element' as already defined and misclassifies the atmosphere.",
            source: "Swan, PEU (4e), §68–73",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "prepositions",
    title: "Prepositions & Particles",
    preset: "prepositions",
    dualMode: true,
    subtopics: [
      {
        id: "prep-time",
        title: "Time prepositions",
        tasks: [
          {
            id: "prep-time-01",
            stem: "Marie Curie was born ___ November 1867 in Warsaw, Poland.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "Use 'in' with months and years.",
            fullExplanation: "The rule for time prepositions: 'in' is used with months, years, seasons, and longer periods. 'On' is used with specific dates and named days. 'At' is used with clock times and short fixed points (at noon, at midnight).",
            source: "Murphy, EGU (4e), Unit 108",
            flavor: "personalities"
          },
          {
            id: "prep-time-02",
            stem: "The Battle of Waterloo took place ___ 18 June 1815.",
            options: ["on", "in", "at"],
            answer: "on",
            explanation: "Use 'on' with specific calendar dates.",
            fullExplanation: "'On' is required before a specific date (day + month combination). 'In' would be used if only the month or year were given. 'At' refers to clock times or fixed points in the day, not calendar dates.",
            source: "Murphy, EGU (4e), Unit 108",
            flavor: "history"
          },
          {
            id: "prep-time-03",
            stem: "The last train to Edinburgh leaves ___ midnight, so we must hurry.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "Use 'at' with clock times and fixed points like midnight.",
            fullExplanation: "'At' is used with exact times on the clock and fixed time-points such as midnight, noon, and dawn. 'In' is for periods and months. 'On' is for days and dates, not clock times.",
            source: "Murphy, EGU (4e), Unit 108",
            flavor: "social"
          },
          {
            id: "prep-time-04",
            stem: "The Earth completes one orbit around the Sun ___ approximately 365 days.",
            options: ["in", "for", "during"],
            answer: "in",
            explanation: "'In' states the time taken to complete an action.",
            fullExplanation: "'In' expresses the duration required to complete an action (finished within that span). 'For' describes a continuous duration without implying completion. 'During' indicates something happening within a period, not the span itself.",
            source: "Swan, PEU (4e), §416",
            flavor: "science"
          },
          {
            id: "prep-time-05",
            stem: "Mozart began composing music ___ the age of five.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "Use 'at' before 'the age of'.",
            fullExplanation: "The fixed expression is 'at the age of'. 'In' would be used for a year or period. 'On' is for days and dates. 'At the age of' is a standard collocation in English.",
            source: "Swan, PEU (4e), §416",
            flavor: "personalities"
          },
          {
            id: "prep-time-06",
            stem: "The Olympic Games were not held ___ World War II.",
            options: ["during", "for", "in"],
            answer: "during",
            explanation: "'During' means within a background period of time.",
            fullExplanation: "'During' is used to indicate that something happened at some point within a named period. 'For' would suggest a measured span of time. 'In' before a historical event name is not standard English when the meaning is 'throughout that period'.",
            source: "Murphy, EGU (4e), Unit 109",
            flavor: "history"
          },
          {
            id: "prep-time-07",
            stem: "She has been studying Japanese ___ three years and is now quite fluent.",
            options: ["for", "since", "during"],
            answer: "for",
            explanation: "'For' is used with a measured span of time.",
            fullExplanation: "'For' + a period of time expresses duration (three years is a measured span). 'Since' requires a starting point in time (a date or event), not a duration. 'During' introduces a background period, not a measured length.",
            source: "Murphy, EGU (4e), Unit 13",
            flavor: "social"
          },
          {
            id: "prep-time-08",
            stem: "Bacteria can double in number ___ as little as twenty minutes under ideal conditions.",
            options: ["in", "within", "for"],
            answer: "in",
            explanation: "'In' indicates the time required to complete a process.",
            fullExplanation: "'In' here means 'by the end of that time span', expressing how quickly a process completes. 'Within' is also grammatically acceptable but 'in' is the more natural choice in this scientific context. 'For' would imply the process lasts that long without necessarily completing.",
            source: "Swan, PEU (4e), §416",
            flavor: "science"
          },
          {
            id: "prep-time-09",
            stem: "Frida Kahlo painted some of her most celebrated works ___ the 1940s.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "Use 'in' with decades.",
            fullExplanation: "Decades and centuries take 'in' (in the 1940s, in the nineteenth century). 'On' is reserved for specific days and dates. 'At' is used for clock times and specific fixed points such as noon or midday.",
            source: "Murphy, EGU (4e), Unit 108",
            flavor: "personalities"
          },
          {
            id: "prep-time-10",
            stem: "The Berlin Wall fell ___ the night of 9 November 1989.",
            options: ["on", "in", "at"],
            answer: "on",
            explanation: "Use 'on' with a specific named night or date.",
            fullExplanation: "'On' is used with days and specific dates, including expressions like 'on the night of'. 'In' would apply to a month or year alone. 'At' refers to clock times and short daily reference points, not a full date.",
            source: "Murphy, EGU (4e), Unit 108",
            flavor: "history"
          },
          {
            id: "prep-time-11",
            stem: "The project must be completed ___ Friday; we cannot ask for an extension.",
            options: ["by", "until", "for"],
            answer: "by",
            explanation: "'By' means no later than a deadline.",
            fullExplanation: "'By' sets a deadline — the action must be finished at or before that point. 'Until' (or 'till') means the action continues up to that point, implying it stops then. 'For' indicates a duration, not a deadline.",
            source: "Murphy, EGU (4e), Unit 109",
            flavor: "social"
          },
          {
            id: "prep-time-12",
            stem: "Ocean water temperatures near the poles remain below freezing ___ several months each winter.",
            options: ["for", "since", "during"],
            answer: "for",
            explanation: "'For' expresses a measured duration of time.",
            fullExplanation: "'For' + a measured time span states how long a condition lasts (several months is a measurable duration). 'Since' marks the starting point of a period, not its length. 'During' names the background period (e.g. during winter) but does not specify its length.",
            source: "Murphy, EGU (4e), Unit 13",
            flavor: "science"
          }
        ]
      },
      {
        id: "prep-place",
        title: "Place prepositions",
        tasks: [
          {
            id: "prep-place-01",
            stem: "Albert Einstein was born ___ Ulm, a city in southern Germany.",
            options: ["in", "at", "on"],
            answer: "in",
            explanation: "Use 'in' with cities, countries, and enclosed spaces.",
            fullExplanation: "'In' is used with cities, towns, countries, and any space treated as an enclosed area. 'At' refers to a specific point or address. 'On' is used for surfaces and lines such as roads or coasts.",
            source: "Murphy, EGU (4e), Unit 110",
            flavor: "personalities"
          },
          {
            id: "prep-place-02",
            stem: "The ancient city of Pompeii lies ___ the foot of Mount Vesuvius in Italy.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At' indicates a specific point or position.",
            fullExplanation: "'At the foot of' is a fixed expression indicating a precise location relative to a landmark. 'In' would imply being enclosed within something. 'On' describes a surface or line, not a positional reference like the foot of a mountain.",
            source: "Swan, PEU (4e), §418",
            flavor: "history"
          },
          {
            id: "prep-place-03",
            stem: "There is a small café ___ the corner of Maple Street and High Road.",
            options: ["on", "at", "in"],
            answer: "on",
            explanation: "Use 'on' with streets and corners.",
            fullExplanation: "Streets and corners take 'on' in British and American English. 'At' can also work for a corner address, but 'on the corner' is the standard idiomatic phrase. 'In' would be used for enclosed spaces like rooms, not street corners.",
            source: "Murphy, EGU (4e), Unit 110",
            flavor: "social"
          },
          {
            id: "prep-place-04",
            stem: "The International Space Station orbits ___ an altitude of approximately 400 kilometres.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At' is used with specific altitudes and heights.",
            fullExplanation: "'At' collocates with measurements of altitude, height, speed, and temperature (at 400 km, at sea level). 'In' would imply being inside an enclosed space. 'On' describes surfaces or lines, not numerical measurement points.",
            source: "Swan, PEU (4e), §418",
            flavor: "science"
          },
          {
            id: "prep-place-05",
            stem: "Winston Churchill delivered many of his wartime speeches ___ the House of Commons.",
            options: ["in", "at", "on"],
            answer: "in",
            explanation: "Use 'in' inside named rooms and buildings.",
            fullExplanation: "Rooms and buildings are treated as enclosed spaces, so 'in' is correct. 'At' would be used for the building as a destination or address (at the House of Commons). 'On' is used for surfaces, floors, or lines.",
            source: "Murphy, EGU (4e), Unit 110",
            flavor: "personalities"
          },
          {
            id: "prep-place-06",
            stem: "The Magna Carta was signed ___ Runnymede, a meadow beside the River Thames.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At' is used for events at specific named locations.",
            fullExplanation: "For specific named sites treated as single points on a map, 'at' is preferred. 'In' would suggest a larger enclosed area (in a city). 'On' describes surfaces or lines such as roads and rivers, not event locations.",
            source: "Swan, PEU (4e), §418",
            flavor: "history"
          },
          {
            id: "prep-place-07",
            stem: "Please leave your shoes ___ the door before entering the house.",
            options: ["outside", "at", "on"],
            answer: "outside",
            explanation: "'Outside the door' means beyond the threshold.",
            fullExplanation: "'Outside' correctly places the shoes beyond the door's threshold. 'At the door' could work but implies standing at it, not placing objects there. 'On the door' would mean attached to its surface, which is not the intended meaning.",
            source: "Murphy, EGU (4e), Unit 110",
            flavor: "social"
          },
          {
            id: "prep-place-08",
            stem: "Coral reefs are found ___ warm, shallow tropical seas around the world.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "Use 'in' with seas, oceans, and large bodies of water.",
            fullExplanation: "Seas, oceans, and rivers are treated as three-dimensional spaces, so 'in' is the correct preposition. 'On' is used for surfaces such as the sea surface or a map. 'At' marks a specific point, not an extended aquatic environment.",
            source: "Murphy, EGU (4e), Unit 110",
            flavor: "science"
          },
          {
            id: "prep-place-09",
            stem: "Leonardo da Vinci's notebooks are held ___ the Royal Collection in Windsor Castle.",
            options: ["in", "at", "on"],
            answer: "in",
            explanation: "Use 'in' for collections and enclosed institutional spaces.",
            fullExplanation: "Items stored inside a collection or within an institution are located 'in' that collection or building. 'At' would treat Windsor Castle as a destination point. 'On' is used for surfaces such as shelves or walls, not entire collections.",
            source: "Murphy, EGU (4e), Unit 110",
            flavor: "personalities"
          },
          {
            id: "prep-place-10",
            stem: "The Eiffel Tower is situated ___ the Champ de Mars in central Paris.",
            options: ["on", "in", "at"],
            answer: "on",
            explanation: "Use 'on' with open parks, fields, and squares.",
            fullExplanation: "Open outdoor spaces treated as flat areas or grounds take 'on' (on the field, on the square, on the Champ de Mars). 'In' would describe being inside an enclosed space. 'At' marks an exact delivery point or destination, not a surrounding area.",
            source: "Swan, PEU (4e), §418",
            flavor: "history"
          },
          {
            id: "prep-place-11",
            stem: "The supermarket is ___ the pharmacy and the post office on King Street.",
            options: ["between", "among", "below"],
            answer: "between",
            explanation: "'Between' is used when two specific things are named.",
            fullExplanation: "'Between' is used when exactly two specific things (or a small definite group) are mentioned. 'Among' is for an unspecified or larger group of items. 'Below' indicates a lower position, which is not relevant here.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "social"
          },
          {
            id: "prep-place-12",
            stem: "Satellites in geostationary orbit remain ___ a fixed point on the Earth's surface.",
            options: ["above", "over", "on"],
            answer: "above",
            explanation: "'Above' means at a higher level, directly overhead.",
            fullExplanation: "'Above' indicates a position higher than a reference point without implying movement. 'Over' can also mean above but often suggests covering or crossing. 'On' implies contact with a surface, which a satellite does not have.",
            source: "Swan, PEU (4e), §10",
            flavor: "science"
          }
        ]
      },
      {
        id: "prep-dir",
        title: "Direction prepositions",
        tasks: [
          {
            id: "prep-dir-01",
            stem: "Amelia Earhart was the first woman to fly solo ___ the Atlantic Ocean in 1932.",
            options: ["across", "through", "along"],
            answer: "across",
            explanation: "'Across' means from one side to the other of a wide space.",
            fullExplanation: "'Across' describes movement from one side of an expanse (ocean, river, field) to the other. 'Through' implies moving inside and out the other side of an enclosed or three-dimensional space. 'Along' means following the length or edge of something.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "personalities"
          },
          {
            id: "prep-dir-02",
            stem: "Roman legions marched ___ Britain, building roads as they advanced.",
            options: ["through", "across", "past"],
            answer: "through",
            explanation: "'Through' means moving within an area from one side to another.",
            fullExplanation: "'Through' is used when movement passes within a territory, forest, or enclosed space. 'Across' focuses on crossing a surface from edge to edge. 'Past' means going beside a point without entering it.",
            source: "Swan, PEU (4e), §420",
            flavor: "history"
          },
          {
            id: "prep-dir-03",
            stem: "She walked ___ the bus stop and kept going without waiting for the bus.",
            options: ["past", "through", "towards"],
            answer: "past",
            explanation: "'Past' means going beside a point without stopping.",
            fullExplanation: "'Past' indicates movement beside and beyond a reference point without stopping. 'Through' would imply passing inside the stop, which is not possible. 'Towards' implies moving in the direction of something with the aim of reaching it.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "social"
          },
          {
            id: "prep-dir-04",
            stem: "Light travels ___ the vacuum of space at approximately 300,000 kilometres per second.",
            options: ["through", "across", "past"],
            answer: "through",
            explanation: "'Through' is used for movement within a medium or space.",
            fullExplanation: "'Through' describes movement within or inside a medium (through space, through water, through glass). 'Across' would suggest movement over a surface. 'Past' implies going by a fixed point, which is not the meaning here.",
            source: "Swan, PEU (4e), §420",
            flavor: "science"
          },
          {
            id: "prep-dir-05",
            stem: "After the ceremony, Nelson Mandela walked ___ the crowd, shaking hands with supporters.",
            options: ["through", "among", "past"],
            answer: "through",
            explanation: "'Through' is used for movement passing within a group or crowd.",
            fullExplanation: "'Through' describes navigating inside and out of a group or dense space. 'Among' indicates a static position within a group, not movement through it. 'Past' would mean going alongside the crowd without entering it.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "personalities"
          },
          {
            id: "prep-dir-06",
            stem: "The Silk Road stretched ___ Central Asia, linking China to the Mediterranean world.",
            options: ["across", "through", "along"],
            answer: "across",
            explanation: "'Across' describes spanning the width of a broad region.",
            fullExplanation: "'Across' expresses coverage from one side of an area to the other, suitable for a route that spans a vast region. 'Through' would suggest movement inside a more defined enclosed space. 'Along' implies following one edge or line, not spanning a whole region.",
            source: "Swan, PEU (4e), §420",
            flavor: "history"
          },
          {
            id: "prep-dir-07",
            stem: "The children ran ___ the park, heading towards the playground at the far end.",
            options: ["towards", "past", "around"],
            answer: "towards",
            explanation: "'Towards' means moving in the direction of a destination.",
            fullExplanation: "'Towards' indicates movement in the direction of a place or goal. 'Past' means going beside and beyond something. 'Around' means moving in a circuit or on all sides of something, not directly towards it.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "social"
          },
          {
            id: "prep-dir-08",
            stem: "Rivers flow ___ the sea, carrying dissolved minerals from inland rock formations.",
            options: ["towards", "onto", "along"],
            answer: "towards",
            explanation: "'Towards' shows the direction of flow.",
            fullExplanation: "'Towards' indicates the general direction of movement without necessarily implying arrival. 'Onto' means moving onto a surface, which is not the relationship between a river and the sea. 'Along' would mean the river follows the sea's edge, not flows toward it.",
            source: "Swan, PEU (4e), §420",
            flavor: "science"
          },
          {
            id: "prep-dir-09",
            stem: "Roger Federer tossed the ball ___ the air and served with great precision.",
            options: ["into", "onto", "towards"],
            answer: "into",
            explanation: "'Into' shows entry or movement to the interior of a space.",
            fullExplanation: "'Into' expresses movement entering a space or area (the air is treated as a three-dimensional space). 'Onto' implies movement onto the surface of something. 'Towards' shows direction but not actual entry.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "personalities"
          },
          {
            id: "prep-dir-10",
            stem: "During the French Revolution, protesters marched ___ the streets of Paris demanding reform.",
            options: ["along", "across", "into"],
            answer: "along",
            explanation: "'Along' means moving following the length of a road or path.",
            fullExplanation: "'Along' describes movement following the line or length of a street, river, or path. 'Across' would mean going from one side of the street to the other. 'Into' would imply entering the streets from outside, which does not fit the context of marching through them.",
            source: "Swan, PEU (4e), §420",
            flavor: "history"
          },
          {
            id: "prep-dir-11",
            stem: "The fire alarm went off and everyone walked quickly ___ the emergency exit.",
            options: ["towards", "into", "around"],
            answer: "towards",
            explanation: "'Towards' indicates movement in the direction of a specific point.",
            fullExplanation: "'Towards' shows movement heading in the direction of a goal without necessarily arriving. 'Into' would imply entering the exit itself. 'Around' suggests circular movement, not directed movement toward a point.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "social"
          },
          {
            id: "prep-dir-12",
            stem: "Migrating birds navigate ___ thousands of kilometres twice a year using the Earth's magnetic field.",
            options: ["across", "along", "through"],
            answer: "across",
            explanation: "'Across' describes spanning a wide area from one side to the other.",
            fullExplanation: "'Across' is correct for spanning wide geographical areas (continents, oceans). 'Along' would imply following a single route or edge. 'Through' would suggest movement within an enclosed three-dimensional space, less natural for a hemispheric journey.",
            source: "Swan, PEU (4e), §420",
            flavor: "science"
          }
        ]
      },
      {
        id: "prep-verb",
        title: "Verb + preposition",
        tasks: [
          {
            id: "prep-verb-01",
            stem: "Many historians agree ___ the view that the Industrial Revolution transformed modern society.",
            options: ["with", "on", "to"],
            answer: "with",
            explanation: "'Agree with' is used before a person or stated opinion.",
            fullExplanation: "The fixed collocation is 'agree with' when the object is a person or an expressed opinion/view. 'Agree on' collocates with a matter or topic under discussion (agree on a price). 'Agree to' collocates with a proposal, plan, or request.",
            source: "Swan, PEU (4e), §13",
            flavor: "personalities"
          },
          {
            id: "prep-verb-02",
            stem: "The outcome of the battle depended ___ the weather conditions on that fateful morning.",
            options: ["on", "of", "with"],
            answer: "on",
            explanation: "'Depend on' is the fixed verb + preposition collocation.",
            fullExplanation: "'Depend on' is a fixed collocation meaning to be determined by something. 'Depend of' is not standard English. 'Depend with' does not exist as a collocation.",
            source: "Murphy, EGU (4e), Unit 128",
            flavor: "history"
          },
          {
            id: "prep-verb-03",
            stem: "The children were listening ___ their teacher explain the rules of the game.",
            options: ["to", "at", "for"],
            answer: "to",
            explanation: "'Listen to' is the fixed collocation.",
            fullExplanation: "'Listen to' is the standard collocation — the preposition 'to' always follows 'listen' before its object. 'Listen at' is not standard. 'Listen for' means to wait attentively to hear something specific, which changes the meaning.",
            source: "Murphy, EGU (4e), Unit 128",
            flavor: "social"
          },
          {
            id: "prep-verb-04",
            stem: "Scientists look ___ unusual patterns in data when searching for new phenomena.",
            options: ["for", "at", "into"],
            answer: "for",
            explanation: "'Look for' means to search for something.",
            fullExplanation: "'Look for' means to search or try to find. 'Look at' means to direct the eyes toward something. 'Look into' means to investigate a matter — this changes the meaning from searching for a thing to investigating a topic.",
            source: "Murphy, EGU (4e), Unit 128",
            flavor: "science"
          },
          {
            id: "prep-verb-05",
            stem: "Pablo Picasso is often accused ___ breaking every rule of classical painting.",
            options: ["of", "for", "with"],
            answer: "of",
            explanation: "'Accuse of' is the correct fixed collocation.",
            fullExplanation: "'Accuse someone of (doing) something' is the fixed pattern in English. 'Accuse for' is not standard. 'Accuse with' does not exist as a collocation.",
            source: "Swan, PEU (4e), §13",
            flavor: "personalities"
          },
          {
            id: "prep-verb-06",
            stem: "The Roman Senate complained ___ the rising cost of grain imports from the provinces.",
            options: ["about", "of", "for"],
            answer: "about",
            explanation: "'Complain about' is the standard collocation for expressing dissatisfaction.",
            fullExplanation: "'Complain about' is the fixed collocation for expressing dissatisfaction with a situation or matter. 'Complain of' exists in medical English (complain of symptoms) but is less common in general use. 'Complain for' is not standard.",
            source: "Murphy, EGU (4e), Unit 128",
            flavor: "history"
          },
          {
            id: "prep-verb-07",
            stem: "The manager apologised ___ the long delay and offered customers a full refund.",
            options: ["for", "about", "to"],
            answer: "for",
            explanation: "'Apologise for' names the cause of the apology.",
            fullExplanation: "'Apologise for' introduces the reason or cause of the apology (for the delay, for the mistake). 'Apologise about' is less standard. 'Apologise to' names the person receiving the apology, not the reason.",
            source: "Murphy, EGU (4e), Unit 128",
            flavor: "social"
          },
          {
            id: "prep-verb-08",
            stem: "The Mars rover succeeded ___ capturing the first detailed images of the Martian surface.",
            options: ["in", "at", "on"],
            answer: "in",
            explanation: "'Succeed in' + gerund is the fixed collocation.",
            fullExplanation: "'Succeed in doing something' is the fixed pattern. 'Succeed at' is less common and used with general activities, not specific achievements with a gerund. 'Succeed on' is not a standard collocation.",
            source: "Swan, PEU (4e), §13",
            flavor: "science"
          },
          {
            id: "prep-verb-09",
            stem: "Nikola Tesla looked ___ alternating current as the future of electrical power distribution.",
            options: ["at", "for", "into"],
            answer: "at",
            explanation: "'Look at' means to direct attention or regard toward something.",
            fullExplanation: "'Look at something' means to regard or consider it in a particular way. 'Look for' means to search. 'Look into' means to investigate — none of these conveys the meaning of regarding something as an idea.",
            source: "Murphy, EGU (4e), Unit 128",
            flavor: "personalities"
          },
          {
            id: "prep-verb-10",
            stem: "Ancient Egyptian farmers relied ___ the annual flooding of the Nile to fertilise their fields.",
            options: ["on", "in", "for"],
            answer: "on",
            explanation: "'Rely on' is the fixed collocation meaning to depend on.",
            fullExplanation: "'Rely on' is the fixed collocation meaning to depend or count on someone or something. 'Rely in' is not standard English. 'Rely for' is not a collocation.",
            source: "Murphy, EGU (4e), Unit 128",
            flavor: "history"
          },
          {
            id: "prep-verb-11",
            stem: "The neighbours objected ___ the noise from the building site every morning.",
            options: ["to", "about", "against"],
            answer: "to",
            explanation: "'Object to' is the standard collocation.",
            fullExplanation: "'Object to' is the fixed collocation meaning to express opposition or disapproval. 'Object about' is not standard. 'Object against' is not a recognised collocation in English.",
            source: "Swan, PEU (4e), §13",
            flavor: "social"
          },
          {
            id: "prep-verb-12",
            stem: "Researchers have been working ___ a solution to antibiotic-resistant bacteria for many years.",
            options: ["on", "for", "at"],
            answer: "on",
            explanation: "'Work on' means to be engaged in developing something.",
            fullExplanation: "'Work on' is the fixed collocation for being engaged in developing, studying, or producing something. 'Work for' describes employment or purpose. 'Work at' implies effort applied to a task but is not the standard phrase when a specific project is the object.",
            source: "Murphy, EGU (4e), Unit 128",
            flavor: "science"
          }
        ]
      },
      {
        id: "prep-adj",
        title: "Adjective + preposition",
        tasks: [
          {
            id: "prep-adj-01",
            stem: "Marie Curie was famous ___ her pioneering research into radioactivity.",
            options: ["for", "of", "as"],
            answer: "for",
            explanation: "'Famous for' introduces the reason for someone's fame.",
            fullExplanation: "'Famous for' is the fixed collocation naming the achievement or quality that makes someone well known. 'Famous of' is not standard English. 'Famous as' introduces a role or title (famous as a scientist), which would change the sentence structure.",
            source: "Murphy, EGU (4e), Unit 129",
            flavor: "personalities"
          },
          {
            id: "prep-adj-02",
            stem: "Ancient Roman citizens were proud ___ their city's architectural achievements.",
            options: ["of", "for", "about"],
            answer: "of",
            explanation: "'Proud of' is the standard adjective + preposition collocation.",
            fullExplanation: "'Proud of' is a fixed collocation — the preposition 'of' follows 'proud'. 'Proud for' is not standard. 'Proud about' is sometimes used informally but 'of' is the required form in standard English.",
            source: "Murphy, EGU (4e), Unit 129",
            flavor: "history"
          },
          {
            id: "prep-adj-03",
            stem: "My younger sister is very good ___ mathematics and plans to study engineering.",
            options: ["at", "in", "with"],
            answer: "at",
            explanation: "'Good at' collocates with skills and subjects.",
            fullExplanation: "'Good at' is the fixed collocation used with skills, subjects, and activities. 'Good in' is not standard in this context (though used in some varieties of English). 'Good with' collocates with people or tools (good with children, good with his hands).",
            source: "Murphy, EGU (4e), Unit 129",
            flavor: "social"
          },
          {
            id: "prep-adj-04",
            stem: "Dolphins are capable ___ complex communication using a range of clicks and whistles.",
            options: ["of", "for", "in"],
            answer: "of",
            explanation: "'Capable of' is the fixed adjective + preposition collocation.",
            fullExplanation: "'Capable of' is a fixed collocation meaning having the ability to do something. 'Capable for' is not standard English. 'Capable in' does not collocate with the adjective 'capable' in this grammatical pattern.",
            source: "Swan, PEU (4e), §13",
            flavor: "science"
          },
          {
            id: "prep-adj-05",
            stem: "Frida Kahlo was deeply interested ___ Mexican folk art and pre-Columbian history.",
            options: ["in", "about", "for"],
            answer: "in",
            explanation: "'Interested in' is the standard collocation.",
            fullExplanation: "'Interested in' is the fixed collocation — the preposition 'in' always follows 'interested'. 'Interested about' is not standard. 'Interested for' is not a recognised collocation in English.",
            source: "Murphy, EGU (4e), Unit 129",
            flavor: "personalities"
          },
          {
            id: "prep-adj-06",
            stem: "The citizens were afraid ___ the army that was advancing towards their city walls.",
            options: ["of", "from", "about"],
            answer: "of",
            explanation: "'Afraid of' is the fixed collocation.",
            fullExplanation: "'Afraid of' is the standard collocation expressing fear of a person, thing, or situation. 'Afraid from' is not correct English. 'Afraid about' is sometimes heard informally but is not the standard fixed form.",
            source: "Murphy, EGU (4e), Unit 129",
            flavor: "history"
          },
          {
            id: "prep-adj-07",
            stem: "Our new neighbour seems very similar ___ the previous tenant in every way.",
            options: ["to", "from", "with"],
            answer: "to",
            explanation: "'Similar to' is the correct collocation.",
            fullExplanation: "'Similar to' is the fixed collocation. Note: the opposite, 'different from', uses a different preposition. 'Similar from' is not English. 'Similar with' is not a standard collocation.",
            source: "Murphy, EGU (4e), Unit 129",
            flavor: "social"
          },
          {
            id: "prep-adj-08",
            stem: "The Amazon rainforest is rich ___ biodiversity, containing millions of species.",
            options: ["in", "with", "of"],
            answer: "in",
            explanation: "'Rich in' collocates with resources, nutrients, and biodiversity.",
            fullExplanation: "'Rich in' is the standard collocation when describing abundance of a substance or quality (rich in vitamins, rich in biodiversity). 'Rich with' is used when the complement is concrete (a room rich with colour) but 'rich in' is standard for scientific contexts. 'Rich of' is not standard English.",
            source: "Swan, PEU (4e), §13",
            flavor: "science"
          },
          {
            id: "prep-adj-09",
            stem: "Charles Dickens was responsible ___ creating some of the most memorable characters in English literature.",
            options: ["for", "of", "with"],
            answer: "for",
            explanation: "'Responsible for' introduces the thing one is accountable for.",
            fullExplanation: "'Responsible for' is the fixed collocation meaning accountable or credited for something. 'Responsible of' is not standard. 'Responsible with' collocates with nouns such as money (responsible with money), changing the meaning entirely.",
            source: "Murphy, EGU (4e), Unit 129",
            flavor: "personalities"
          },
          {
            id: "prep-adj-10",
            stem: "The Renaissance was different ___ the Middle Ages in its emphasis on humanism.",
            options: ["from", "to", "than"],
            answer: "from",
            explanation: "'Different from' is the standard British English collocation.",
            fullExplanation: "'Different from' is the standard collocation in British English. 'Different to' is also accepted in informal British English but 'from' is preferred in formal writing. 'Different than' is used mainly in American English and is less acceptable in standard international English.",
            source: "Murphy, EGU (4e), Unit 129",
            flavor: "history"
          },
          {
            id: "prep-adj-11",
            stem: "The wedding coordinator was very pleased ___ how smoothly the reception had gone.",
            options: ["with", "about", "of"],
            answer: "with",
            explanation: "'Pleased with' collocates with a result or performance.",
            fullExplanation: "'Pleased with' is used when the object is the result, quality, or performance being evaluated (pleased with the outcome). 'Pleased about' focuses on the situation or event as a whole. 'Pleased of' is not a standard collocation.",
            source: "Murphy, EGU (4e), Unit 129",
            flavor: "social"
          },
          {
            id: "prep-adj-12",
            stem: "The ozone layer is vital ___ protecting the Earth's surface from harmful ultraviolet radiation.",
            options: ["for", "to", "in"],
            answer: "for",
            explanation: "'Vital for' introduces the function or purpose.",
            fullExplanation: "'Vital for' introduces a function or purpose (vital for survival, vital for protection). 'Vital to' is also used and means essential to a person or system (vital to life), but 'vital for + gerund' is the fixed pattern here. 'Vital in' does not follow the standard collocation pattern.",
            source: "Swan, PEU (4e), §13",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "word-formation",
    title: "Word Formation",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "wf-noun",
        title: "Noun suffixes",
        tasks: [
          {
            id: "wf-noun-01",
            stem: "Marie Curie's ___ (DEDICATE) to scientific research earned her two Nobel Prizes.",
            options: ["dedication", "dedicating", "dedicative"],
            answer: "dedication",
            explanation: "The suffix -tion turns the verb 'dedicate' into the noun 'dedication'.",
            fullExplanation: "Adding -tion to 'dedicate' (dropping the final -e) forms the noun 'dedication', meaning strong commitment. 'Dedicating' is a present participle, not a noun. 'Dedicative' is not a standard English word.",
            source: "Swan, PEU (4e), §344",
            hint: "dedicate",
            flavor: "personalities"
          },
          {
            id: "wf-noun-02",
            stem: "The ___ (ESTABLISH) of the United Nations in 1945 aimed to prevent future world wars.",
            options: ["establishment", "establishing", "establisher"],
            answer: "establishment",
            explanation: "The suffix -ment converts the verb 'establish' into the noun 'establishment'.",
            fullExplanation: "Adding -ment to 'establish' forms the noun 'establishment', referring to the act of setting something up. 'Establishing' is a gerund/participle. 'Establisher' is not a standard noun for this concept.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "establish",
            flavor: "history"
          },
          {
            id: "wf-noun-03",
            stem: "The manager praised her team for the ___ (KIND) they showed to new employees.",
            options: ["kindness", "kindly", "kinder"],
            answer: "kindness",
            explanation: "The suffix -ness converts the adjective 'kind' into the noun 'kindness'.",
            fullExplanation: "Adding -ness to the adjective 'kind' forms the noun 'kindness', meaning the quality of being kind. 'Kindly' is an adverb or adjective. 'Kinder' is the comparative form of the adjective.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "kind",
            flavor: "social"
          },
          {
            id: "wf-noun-04",
            stem: "The ___ (HUMID) in tropical rainforests can exceed ninety per cent throughout the year.",
            options: ["humidity", "humidness", "humidify"],
            answer: "humidity",
            explanation: "The suffix -ity converts the adjective 'humid' into the noun 'humidity'.",
            fullExplanation: "Adding -ity to 'humid' forms the noun 'humidity', denoting the degree of moisture in the air. 'Humidness' is theoretically possible but not the standard form. 'Humidify' is a verb, not a noun.",
            source: "Swan, PEU (4e), §344",
            hint: "humid",
            flavor: "science"
          },
          {
            id: "wf-noun-05",
            stem: "Leonardo da Vinci's extraordinary ___ (PERFORM) as both artist and inventor remains unmatched in history.",
            options: ["performance", "performing", "performer"],
            answer: "performance",
            explanation: "The suffix -ance converts the verb 'perform' into the noun 'performance'.",
            fullExplanation: "Adding -ance to 'perform' forms the noun 'performance', meaning achievement or execution of a task. 'Performing' is a participle. 'Performer' refers to a person, not the act or quality itself.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "perform",
            flavor: "personalities"
          },
          {
            id: "wf-noun-06",
            stem: "The ___ (COLONISE) of North America by European settlers began in the late fifteenth century.",
            options: ["colonisation", "colonising", "coloniser"],
            answer: "colonisation",
            explanation: "The suffix -ation converts the verb 'colonise' into the noun 'colonisation'.",
            fullExplanation: "Adding -ation to 'colonise' (dropping -e) gives 'colonisation', denoting the process or act of colonising. 'Colonising' is a participle. 'Coloniser' refers to a person who colonises.",
            source: "Swan, PEU (4e), §344",
            hint: "colonise",
            flavor: "history"
          },
          {
            id: "wf-noun-07",
            stem: "Good ___ (LEADER) is essential when a company faces a serious financial crisis.",
            options: ["leadership", "leaderness", "leading"],
            answer: "leadership",
            explanation: "The suffix -ship converts the noun 'leader' into the abstract noun 'leadership'.",
            fullExplanation: "Adding -ship to 'leader' forms 'leadership', meaning the ability or position of leading a group. 'Leaderness' is not a real word. 'Leading' is a participle or adjective, not the noun needed here.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "leader",
            flavor: "social"
          },
          {
            id: "wf-noun-08",
            stem: "The ___ (DENSE) of a material determines whether it will sink or float in water.",
            options: ["density", "denseness", "densify"],
            answer: "density",
            explanation: "The suffix -ity converts the adjective 'dense' into the noun 'density'.",
            fullExplanation: "The scientific term derived from 'dense' is 'density', formed with the suffix -ity (dropping -e). 'Denseness' exists but is informal and rarely used in scientific contexts. 'Densify' is a verb, not a noun.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "dense",
            flavor: "science"
          },
          {
            id: "wf-noun-09",
            stem: "William Shakespeare showed remarkable ___ (OBSERVE) of human nature in his plays.",
            options: ["observation", "observing", "observer"],
            answer: "observation",
            explanation: "The suffix -ation converts the verb 'observe' into the noun 'observation'.",
            fullExplanation: "Adding -ation to 'observe' (dropping -e) gives 'observation', meaning careful watching or a remark. 'Observing' is a participle. 'Observer' refers to a person who observes, not the act itself.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "observe",
            flavor: "personalities"
          },
          {
            id: "wf-noun-10",
            stem: "The ___ (NEIGHBOUR) of Montmartre in Paris became famous for its community of artists in the 19th century.",
            options: ["neighbourhood", "neighbourness", "neighbouring"],
            answer: "neighbourhood",
            explanation: "The suffix -hood converts the noun 'neighbour' into 'neighbourhood', a collective/place noun.",
            fullExplanation: "Adding -hood to 'neighbour' forms 'neighbourhood', meaning a district or local area. 'Neighbourness' is not a standard word. 'Neighbouring' is an adjective meaning nearby.",
            source: "Swan, PEU (4e), §344",
            hint: "neighbour",
            flavor: "history"
          },
          {
            id: "wf-noun-11",
            stem: "My sister showed great ___ (PATIENT) while waiting three hours for the appointment.",
            options: ["patience", "patiency", "patiently"],
            answer: "patience",
            explanation: "The suffix -ence converts the adjective 'patient' into the noun 'patience'.",
            fullExplanation: "Adding -ence to 'patient' (dropping -t and adding -ce) gives 'patience', the ability to wait calmly. 'Patiency' is not a standard English word. 'Patiently' is an adverb, not a noun.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "patient",
            flavor: "social"
          },
          {
            id: "wf-noun-12",
            stem: "The ___ (ACTIVE) of a volcano can be predicted by monitoring seismic waves beneath the surface.",
            options: ["activity", "activeness", "activation"],
            answer: "activity",
            explanation: "The suffix -ity converts the adjective 'active' into the noun 'activity'.",
            fullExplanation: "The standard noun from 'active' used in a scientific context is 'activity', formed with -ity (dropping -e). 'Activeness' is grammatically possible but not idiomatic in scientific writing. 'Activation' (from 'activate') means the process of making something active, not its degree of activity.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "active",
            flavor: "science"
          }
        ]
      },
      {
        id: "wf-adj",
        title: "Adjective suffixes",
        tasks: [
          {
            id: "wf-adj-01",
            stem: "Ada Lovelace was a ___ (REMARK) mathematician whose notes on Babbage's engine are considered the first algorithm.",
            options: ["remarkable", "remarkless", "remarking"],
            answer: "remarkable",
            explanation: "The suffix -able converts the verb 'remark' into the adjective 'remarkable'.",
            fullExplanation: "Adding -able to 'remark' forms 'remarkable', meaning worthy of notice or extraordinary. 'Remarkless' is not a real word. 'Remarking' is a present participle, not an adjective.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "remark",
            flavor: "personalities"
          },
          {
            id: "wf-adj-02",
            stem: "The fall of Pompeii in 79 AD was a ___ (HISTORY) disaster that preserved an entire Roman city.",
            options: ["historical", "historic", "historyful"],
            answer: "historical",
            explanation: "The suffix -al converts the noun 'history' into the adjective 'historical', meaning relating to history.",
            fullExplanation: "'Historical' (history + -al) means relating to the study or events of history, fitting a reference to a past disaster. 'Historic' means famous or significant in history, which could also fit but is not derived from the -al rule being tested. 'Historyful' is not a real word.",
            source: "Swan, PEU (4e), §344",
            hint: "history",
            flavor: "history"
          },
          {
            id: "wf-adj-03",
            stem: "The new office building is very ___ (FUNCTION) and has meeting rooms on every floor.",
            options: ["functional", "functious", "functioning"],
            answer: "functional",
            explanation: "The suffix -al converts the noun 'function' into the adjective 'functional'.",
            fullExplanation: "Adding -al to 'function' gives 'functional', meaning designed to be practical and useful. 'Functious' is not a real word. 'Functioning' is a participle used as an adjective meaning in operation, but it doesn't carry the sense of practical design.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "function",
            flavor: "social"
          },
          {
            id: "wf-adj-04",
            stem: "Sharks have a ___ (POWER) sense of smell that allows them to detect blood from great distances.",
            options: ["powerful", "powerless", "powerish"],
            answer: "powerful",
            explanation: "The suffix -ful converts the noun 'power' into the adjective 'powerful'.",
            fullExplanation: "Adding -ful to 'power' forms 'powerful', meaning having great strength or capacity. 'Powerless' (power + -less) means lacking power — the opposite meaning. 'Powerish' is not a real word.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "power",
            flavor: "science"
          },
          {
            id: "wf-adj-05",
            stem: "Mozart was considered a ___ (MUSIC) genius who composed his first symphony at the age of eight.",
            options: ["musical", "musicious", "musicful"],
            answer: "musical",
            explanation: "The suffix -al converts the noun 'music' into the adjective 'musical'.",
            fullExplanation: "Adding -al to 'music' forms 'musical', meaning relating to or talented in music. 'Musicious' is not a real English word. 'Musicful' is also non-standard and does not exist.",
            source: "Swan, PEU (4e), §344",
            hint: "music",
            flavor: "personalities"
          },
          {
            id: "wf-adj-06",
            stem: "The construction of the Eiffel Tower was ___ (CONTROVERSY) at the time, with many Parisians opposing it.",
            options: ["controversial", "controversious", "controversable"],
            answer: "controversial",
            explanation: "The suffix -al converts the noun 'controversy' into the adjective 'controversial'.",
            fullExplanation: "Adding -al (with spelling adjustment) to 'controversy' gives 'controversial', meaning causing debate or disagreement. 'Controversious' is not a standard word. 'Controversable' is also non-existent in English.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "controversy",
            flavor: "history"
          },
          {
            id: "wf-adj-07",
            stem: "Our neighbour's dog is completely ___ (HARM) and loves being petted by strangers.",
            options: ["harmless", "harmful", "harming"],
            answer: "harmless",
            explanation: "The suffix -less converts the noun 'harm' into the adjective 'harmless', meaning causing no harm.",
            fullExplanation: "Adding -less to 'harm' forms 'harmless', meaning posing no danger. 'Harmful' (harm + -ful) means causing damage — the opposite. 'Harming' is a present participle, not an adjective here.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "harm",
            flavor: "social"
          },
          {
            id: "wf-adj-08",
            stem: "Coral reefs are extremely ___ (SENSE) to changes in ocean temperature and acidity.",
            options: ["sensitive", "senseless", "senseful"],
            answer: "sensitive",
            explanation: "The suffix -ive converts the noun/verb 'sense' into the adjective 'sensitive'.",
            fullExplanation: "Adding -ive (with spelling change) to 'sense' gives 'sensitive', meaning easily affected by external conditions. 'Senseless' means without sense or consciousness — wrong meaning. 'Senseful' is not a standard English word.",
            source: "Swan, PEU (4e), §344",
            hint: "sense",
            flavor: "science"
          },
          {
            id: "wf-adj-09",
            stem: "Frida Kahlo's paintings are full of ___ (COLOUR) symbolism drawn from Mexican folk traditions.",
            options: ["colourful", "colourless", "colourish"],
            answer: "colourful",
            explanation: "The suffix -ful converts the noun 'colour' into the adjective 'colourful', meaning full of colour.",
            fullExplanation: "Adding -ful to 'colour' forms 'colourful', meaning vivid or full of interest. 'Colourless' (colour + -less) means having no colour — opposite meaning. 'Colourish' is not a standard word.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "colour",
            flavor: "personalities"
          },
          {
            id: "wf-adj-10",
            stem: "During the Middle Ages, travel across Europe was extremely ___ (DANGER) due to bandits and disease.",
            options: ["dangerous", "dangerful", "dangerless"],
            answer: "dangerous",
            explanation: "The suffix -ous converts the noun 'danger' into the adjective 'dangerous'.",
            fullExplanation: "Adding -ous to 'danger' forms 'dangerous', meaning likely to cause harm. 'Dangerful' is not a real word. 'Dangerless' is also non-existent; the correct opposite would be 'safe'.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "danger",
            flavor: "history"
          },
          {
            id: "wf-adj-11",
            stem: "The customer service team was very ___ (RESPONSE) and answered our email within an hour.",
            options: ["responsive", "responseful", "responseless"],
            answer: "responsive",
            explanation: "The suffix -ive converts the noun/verb 'response/respond' into the adjective 'responsive'.",
            fullExplanation: "Adding -ive to the base 'respons(e)' forms 'responsive', meaning reacting quickly and positively. 'Responseful' is not a real word. 'Responseless' is also non-standard.",
            source: "Swan, PEU (4e), §344",
            hint: "response",
            flavor: "social"
          },
          {
            id: "wf-adj-12",
            stem: "The migration patterns of monarch butterflies are ___ (CYCLE) and tied to seasonal temperature changes.",
            options: ["cyclical", "cycleous", "cycleful"],
            answer: "cyclical",
            explanation: "The suffix -al (via -ical) converts the noun 'cycle' into the adjective 'cyclical'.",
            fullExplanation: "Adding -ical to 'cycle' (with spelling adjustment) forms 'cyclical', meaning recurring in cycles. 'Cycleous' is not a real word. 'Cycleful' is also non-existent in English.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "cycle",
            flavor: "science"
          }
        ]
      },
      {
        id: "wf-adv",
        title: "Adverb -ly",
        tasks: [
          {
            id: "wf-adv-01",
            stem: "Stephen Hawking communicated ___ (BRAVE) with the world despite being almost completely paralysed.",
            options: ["bravely", "brave", "bravily"],
            answer: "bravely",
            explanation: "The suffix -ly converts the adjective 'brave' into the adverb 'bravely'.",
            fullExplanation: "Adding -ly to 'brave' (keeping the final -e) gives 'bravely'. Adjectives ending in a consonant + -e simply add -ly. 'Brave' is the adjective, not the adverb. 'Bravily' is an incorrect spelling — the -e is retained before -ly.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "brave",
            flavor: "personalities"
          },
          {
            id: "wf-adv-02",
            stem: "The Roman army was ___ (BASIC) organised around units of 80 soldiers called centuries.",
            options: ["basically", "basic", "basicly"],
            answer: "basically",
            explanation: "Adjectives ending in -ic add -ally to form the adverb: basic → basically.",
            fullExplanation: "Adjectives ending in -ic require the suffix -ally (not just -ly): basic → basically. 'Basic' is the adjective form. 'Basicly' is a common misspelling — the correct rule for -ic adjectives is to add -ally.",
            source: "Swan, PEU (4e), §18",
            hint: "basic",
            flavor: "history"
          },
          {
            id: "wf-adv-03",
            stem: "My younger brother ___ (HAPPY) agreed to help me move into my new flat.",
            options: ["happily", "happly", "happyly"],
            answer: "happily",
            explanation: "Adjectives ending in consonant + -y change -y to -i before adding -ly: happy → happily.",
            fullExplanation: "When an adjective ends in consonant + -y, change -y to -i and add -ly: happy → happily. 'Happy' is the adjective. 'Happyly' is a misspelling — the -y must change to -i before -ly.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "happy",
            flavor: "social"
          },
          {
            id: "wf-adv-04",
            stem: "Sound travels ___ (SIGNIFICANT) faster through water than through air.",
            options: ["significantly", "significant", "significantely"],
            answer: "significantly",
            explanation: "The suffix -ly converts the adjective 'significant' into the adverb 'significantly'.",
            fullExplanation: "Adding -ly to 'significant' (which ends in -ant) forms 'significantly'. The -t is retained and -ly is simply appended. 'Significant' is the adjective. 'Significantely' is not a real word.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "significant",
            flavor: "science"
          },
          {
            id: "wf-adv-05",
            stem: "Charles Darwin ___ (CAREFUL) documented thousands of specimens during his voyage on the Beagle.",
            options: ["carefully", "careful", "carefuly"],
            answer: "carefully",
            explanation: "The suffix -ly converts the adjective 'careful' into the adverb 'carefully'.",
            fullExplanation: "Adding -ly to 'careful' (which ends in -l) simply gives 'carefully'. Note the double -l: careful + ly = carefully. 'Careful' is the adjective. 'Carefuly' is a misspelling with only one -l.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "careful",
            flavor: "personalities"
          },
          {
            id: "wf-adv-06",
            stem: "The Great Wall of China was ___ (GRADUAL) built over many centuries by different Chinese dynasties.",
            options: ["gradually", "gradual", "gradully"],
            answer: "gradually",
            explanation: "The suffix -ly converts the adjective 'gradual' into the adverb 'gradually'.",
            fullExplanation: "Adding -ly to 'gradual' gives 'gradually'. The adjective ends in -al, and -ly is added directly. 'Gradual' is the adjective. 'Gradully' is a misspelling — the full form 'gradual' must be preserved before adding -ly.",
            source: "Swan, PEU (4e), §18",
            hint: "gradual",
            flavor: "history"
          },
          {
            id: "wf-adv-07",
            stem: "Our manager spoke ___ (CLEAR) so that everyone understood the new policy without confusion.",
            options: ["clearly", "clear", "clearely"],
            answer: "clearly",
            explanation: "The suffix -ly converts the adjective 'clear' into the adverb 'clearly'.",
            fullExplanation: "Adding -ly to 'clear' (which ends in a consonant) gives 'clearly'. No spelling changes are needed. 'Clear' is the adjective. 'Clearely' is a misspelling — there is no -e insertion before -ly for this word.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "clear",
            flavor: "social"
          },
          {
            id: "wf-adv-08",
            stem: "The Earth's magnetic poles shift ___ (CONTINUOUS) over geological time due to movements in the core.",
            options: ["continuously", "continuous", "continuousely"],
            answer: "continuously",
            explanation: "The suffix -ly converts the adjective 'continuous' into the adverb 'continuously'.",
            fullExplanation: "Adding -ly to 'continuous' gives 'continuously'. The adjective ends in -ous, and -ly is added directly without changes. 'Continuous' is the adjective. 'Continuousely' is a non-standard misspelling.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "continuous",
            flavor: "science"
          },
          {
            id: "wf-adv-09",
            stem: "Agatha Christie wrote ___ (INCREDIBLE) complex plots that confused even the most attentive readers.",
            options: ["incredibly", "incredible", "incredibley"],
            answer: "incredibly",
            explanation: "Adjectives ending in -ble drop the -e before adding -ly: incredible → incredibly.",
            fullExplanation: "Adjectives ending in -le drop the final -e and add -ly: incredible → incredibly. 'Incredible' is the adjective. 'Incredibley' is a misspelling — only -y (after dropping -e) is added, giving -bly not -bley.",
            source: "Swan, PEU (4e), §18",
            hint: "incredible",
            flavor: "personalities"
          },
          {
            id: "wf-adv-10",
            stem: "Ancient Egyptians ___ (SKILL) used mathematics and astronomy to align the pyramids with the stars.",
            options: ["skilfully", "skillful", "skilfuly"],
            answer: "skilfully",
            explanation: "Adjectives ending in -ful add -ly to form the adverb: skilful → skilfully.",
            fullExplanation: "Adding -ly to 'skilful' gives 'skilfully' (British spelling). 'Skillful' is the American adjective form, not the adverb needed here. 'Skilfuly' is a misspelling — the full stem 'skilful' must be kept before -ly.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "skilful",
            flavor: "history"
          },
          {
            id: "wf-adv-11",
            stem: "Our neighbours ___ (EASY) found a parking space because they arrived before eight o'clock.",
            options: ["easily", "easy", "easyly"],
            answer: "easily",
            explanation: "Adjectives ending in consonant + -y change -y to -i before adding -ly: easy → easily.",
            fullExplanation: "When an adjective ends in consonant + -y, change -y to -i before adding -ly: easy → easily. 'Easy' is the adjective. 'Easyly' is a misspelling — -y must become -i before -ly is added.",
            source: "Murphy, EGU (4e), Unit 100",
            hint: "easy",
            flavor: "social"
          },
          {
            id: "wf-adv-12",
            stem: "Bats navigate ___ (ACCURATE) in total darkness using a system of high-frequency sound waves.",
            options: ["accurately", "accurate", "accuratly"],
            answer: "accurately",
            explanation: "Adjectives ending in -ate add -ly to form the adverb: accurate → accurately.",
            fullExplanation: "Adding -ly to 'accurate' (ending in -e) gives 'accurately'. The -e is retained before -ly for adjectives ending in -ate. 'Accurate' is the adjective. 'Accuratly' is a misspelling — the -e must be kept: accurate + ly.",
            source: "Swan, PEU (4e), §18",
            hint: "accurate",
            flavor: "science"
          }
        ]
      },
      {
        id: "wf-neg",
        title: "Negative prefixes",
        tasks: [
          {
            id: "wf-neg-01",
            stem: "Nelson Mandela refused to accept the ___ (EQUAL) treatment of people under apartheid.",
            options: ["unequal", "inequal", "disqual"],
            answer: "unequal",
            explanation: "The negative prefix un- is used with the adjective 'equal' to form 'unequal'.",
            fullExplanation: "The standard negative of 'equal' is 'unequal', formed with the prefix un-. 'Inequal' is not standard English (the correct in- form is 'inequality'). 'Disqual' is not a real word.",
            source: "Murphy, EGU (4e), Unit 74",
            hint: "equal",
            flavor: "personalities"
          },
          {
            id: "wf-neg-02",
            stem: "The treaty signed in 1919 was widely seen as ___ (FAIR) to Germany, fuelling resentment across the country.",
            options: ["unfair", "infair", "misfair"],
            answer: "unfair",
            explanation: "The negative prefix un- attaches to the adjective 'fair' to form 'unfair'.",
            fullExplanation: "Un- is the standard negative prefix for 'fair': unfair means not fair or unjust. 'Infair' is not a real English word. 'Misfair' is also non-existent; mis- means wrongly, not negating an adjective.",
            source: "Swan, PEU (4e), §383",
            hint: "fair",
            flavor: "history"
          },
          {
            id: "wf-neg-03",
            stem: "It is considered ___ (POLITE) to speak loudly on the phone in a quiet library.",
            options: ["impolite", "unpolite", "dispolite"],
            answer: "impolite",
            explanation: "The negative prefix im- is used before adjectives beginning with p: polite → impolite.",
            fullExplanation: "The prefix im- is used instead of in- before roots starting with p or b: impolite. 'Unpolite' is non-standard; 'un-' is not used with 'polite'. 'Dispolite' is not a real English word.",
            source: "Murphy, EGU (4e), Unit 74",
            hint: "polite",
            flavor: "social"
          },
          {
            id: "wf-neg-04",
            stem: "Some chemical reactions are ___ (REVERSIBLE) and permanently change the substances involved.",
            options: ["irreversible", "unreversible", "disreversible"],
            answer: "irreversible",
            explanation: "The negative prefix ir- is used before adjectives beginning with r: reversible → irreversible.",
            fullExplanation: "The prefix ir- is used before roots starting with r for assimilation: irreversible. 'Unreversible' is non-standard; un- is not typically used with -ible/-able adjectives from Latin roots. 'Disreversible' is not a real word.",
            source: "Swan, PEU (4e), §383",
            hint: "reversible",
            flavor: "science"
          },
          {
            id: "wf-neg-05",
            stem: "Nikola Tesla felt ___ (APPRECIATE) by many of his contemporaries, who favoured Edison instead.",
            options: ["unappreciated", "disappreciated", "misappreciated"],
            answer: "unappreciated",
            explanation: "The prefix un- negates the past participle 'appreciated' to give 'unappreciated'.",
            fullExplanation: "Un- attached to past participles expresses the state of not receiving something: unappreciated. 'Disappreciated' is not a standard English word. 'Misappreciated' could suggest wrongly appreciated, which changes the meaning.",
            source: "Murphy, EGU (4e), Unit 74",
            hint: "appreciate",
            flavor: "personalities"
          },
          {
            id: "wf-neg-06",
            stem: "The invention of gunpowder made many traditional medieval fortifications ___ (EFFECTIVE) against attack.",
            options: ["ineffective", "uneffective", "diseffective"],
            answer: "ineffective",
            explanation: "The negative prefix in- attaches to the adjective 'effective' to form 'ineffective'.",
            fullExplanation: "In- is the standard negative prefix for 'effective': ineffective means not producing results. 'Uneffective' is non-standard; 'un-' is not used with 'effective'. 'Diseffective' is not a real English word.",
            source: "Swan, PEU (4e), §383",
            hint: "effective",
            flavor: "history"
          },
          {
            id: "wf-neg-07",
            stem: "The landlord was charged with ___ (HONEST) after failing to return the deposit.",
            options: ["dishonesty", "unhonesty", "inhonesty"],
            answer: "dishonesty",
            explanation: "The prefix dis- negates 'honesty' to form 'dishonesty', meaning lack of integrity.",
            fullExplanation: "The negative form of 'honest/honesty' uses dis-: dishonesty. 'Unhonesty' is non-standard; dis- is fixed for this word. 'Inhonesty' is also not a standard English word.",
            source: "Murphy, EGU (4e), Unit 74",
            hint: "honest",
            flavor: "social"
          },
          {
            id: "wf-neg-08",
            stem: "It is ___ (LEGAL) to dispose of electronic waste in ordinary landfill sites in most European countries.",
            options: ["illegal", "unlegal", "nonlegal"],
            answer: "illegal",
            explanation: "The negative prefix il- is used before adjectives beginning with l: legal → illegal.",
            fullExplanation: "The prefix il- (a variant of in-) is used before roots starting with l for assimilation: illegal. 'Unlegal' is non-standard; il- is fixed for 'legal'. 'Nonlegal' exists in law but means 'not governed by law', not 'against the law'.",
            source: "Swan, PEU (4e), §383",
            hint: "legal",
            flavor: "science"
          },
          {
            id: "wf-neg-09",
            stem: "Albert Einstein found arithmetic drills ___ (INTERESTING) and preferred to think about abstract problems.",
            options: ["uninteresting", "disinteresting", "noninteresting"],
            answer: "uninteresting",
            explanation: "The prefix un- negates the adjective 'interesting' to form 'uninteresting'.",
            fullExplanation: "Un- is the standard prefix to negate 'interesting': uninteresting. 'Disinteresting' is sometimes used informally, but the standard form is 'uninteresting'. 'Noninteresting' is not a standard compound.",
            source: "Murphy, EGU (4e), Unit 74",
            hint: "interesting",
            flavor: "personalities"
          },
          {
            id: "wf-neg-10",
            stem: "The destruction of the Library of Alexandria was a ___ (REPLACE) loss for human knowledge.",
            options: ["irreplaceable", "unreplaceable", "misreplaceable"],
            answer: "irreplaceable",
            explanation: "The prefix ir- negates 'replaceable' (beginning with r) to form 'irreplaceable'.",
            fullExplanation: "The prefix ir- (variant of in-) assimilates before r: irreplaceable means impossible to replace. 'Unreplaceable' is non-standard; ir- is required here. 'Misreplaceable' is not a real word.",
            source: "Swan, PEU (4e), §383",
            hint: "replaceable",
            flavor: "history"
          },
          {
            id: "wf-neg-11",
            stem: "The instructions on the medicine bottle were ___ (CLEAR) and confused several customers at the pharmacy.",
            options: ["unclear", "inclear", "disclear"],
            answer: "unclear",
            explanation: "The prefix un- negates the adjective 'clear' to form 'unclear'.",
            fullExplanation: "Un- is the standard negative prefix for 'clear': unclear. 'Inclear' is not a standard English word. 'Disclear' also does not exist; un- is the correct prefix here.",
            source: "Murphy, EGU (4e), Unit 74",
            hint: "clear",
            flavor: "social"
          },
          {
            id: "wf-neg-12",
            stem: "Plastic waste is ___ (BIODEGRADABLE), making it a persistent threat to ocean ecosystems.",
            options: ["non-biodegradable", "unbiodegradable", "imbiodegradable"],
            answer: "non-biodegradable",
            explanation: "The prefix non- negates compound adjectives like 'biodegradable' to form 'non-biodegradable'.",
            fullExplanation: "Non- is used to negate technical or compound adjectives, often hyphenated: non-biodegradable. 'Unbiodegradable' is non-standard; the accepted scientific term uses non-. 'Imbiodegradable' is not a real word.",
            source: "Hewings, AGU (3e), Unit 70",
            hint: "biodegradable",
            flavor: "science"
          }
        ]
      },
      {
        id: "wf-mixed",
        title: "Mixed word formation",
        tasks: [
          {
            id: "wf-mixed-01",
            stem: "Pablo Picasso helped ___ (REVOLUTION) the art world by co-founding the Cubist movement in the early 1900s.",
            options: ["revolutionise", "revolution", "revolutionary"],
            answer: "revolutionise",
            explanation: "The suffix -ise forms a verb from the noun 'revolution': revolutionise.",
            fullExplanation: "Adding -ise to 'revolution' (with the -tion dropping) gives the verb 'revolutionise', meaning to bring about radical change. 'Revolution' is the noun form. 'Revolutionary' is an adjective or noun referring to a person, not the verb form.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "revolution",
            flavor: "personalities"
          },
          {
            id: "wf-mixed-02",
            stem: "The Industrial Revolution helped ___ (MODERN) factories across Europe by introducing steam-powered machinery.",
            options: ["modernise", "modern", "modernity"],
            answer: "modernise",
            explanation: "The verb-forming suffix -ise converts the adjective 'modern' into the verb 'modernise'.",
            fullExplanation: "Adding -ise to 'modern' forms the verb 'modernise', meaning to make something more up-to-date. 'Modern' is the adjective. 'Modernity' is an abstract noun, not a verb.",
            source: "Swan, PEU (4e), §344",
            hint: "modern",
            flavor: "history"
          },
          {
            id: "wf-mixed-03",
            stem: "It can be hard to ___ (SIMPLE) tax forms so that ordinary people can complete them without expert help.",
            options: ["simplify", "simplise", "simpleness"],
            answer: "simplify",
            explanation: "The verb-forming suffix -ify converts the adjective 'simple' into the verb 'simplify'.",
            fullExplanation: "Adding -ify to 'simple' (dropping -le) gives the verb 'simplify', meaning to make easier. 'Simplise' is not a real word. 'Simpleness' is a noun, not a verb.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "simple",
            flavor: "social"
          },
          {
            id: "wf-mixed-04",
            stem: "Scientists use lasers to ___ (INTENSE) light beams for use in medical and industrial applications.",
            options: ["intensify", "intensise", "intensity"],
            answer: "intensify",
            explanation: "The suffix -ify converts the adjective 'intense' into the verb 'intensify'.",
            fullExplanation: "Adding -ify to 'intense' (with spelling adjustment) gives the verb 'intensify', meaning to make stronger or more severe. 'Intensise' is not a standard English word. 'Intensity' is a noun, not a verb.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "intense",
            flavor: "science"
          },
          {
            id: "wf-mixed-05",
            stem: "Beethoven's ___ (DEAF) did not prevent him from composing some of his greatest symphonies.",
            options: ["deafness", "deafly", "deafhood"],
            answer: "deafness",
            explanation: "The suffix -ness converts the adjective 'deaf' into the noun 'deafness'.",
            fullExplanation: "Adding -ness to 'deaf' forms the noun 'deafness', meaning the condition of being unable to hear. 'Deafly' would be an adverb form, but the sentence requires a noun subject. 'Deafhood' is used in the Deaf community but is not the standard medical term here.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "deaf",
            flavor: "personalities"
          },
          {
            id: "wf-mixed-06",
            stem: "The ___ (COLONISE) of America by Spain brought both cultural exchange and devastating conflict.",
            options: ["colonisation", "colonising", "colonisement"],
            answer: "colonisation",
            explanation: "The suffix -ation converts the verb 'colonise' into the noun 'colonisation'.",
            fullExplanation: "Adding -ation to 'colonise' (dropping -e) forms the noun 'colonisation', the process of establishing a colony. 'Colonising' is a present participle. 'Colonisement' is not a standard English word.",
            source: "Swan, PEU (4e), §344",
            hint: "colonise",
            flavor: "history"
          },
          {
            id: "wf-mixed-07",
            stem: "The school decided to ___ (COURAGE) students by displaying their artwork in the main corridor.",
            options: ["encourage", "couragise", "couragify"],
            answer: "encourage",
            explanation: "The prefix en- converts the noun 'courage' into the verb 'encourage'.",
            fullExplanation: "The prefix en- attaches to the noun 'courage' to form the verb 'encourage', meaning to give confidence or support. 'Couragise' is not a real word. 'Couragify' is also non-existent in English.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "courage",
            flavor: "social"
          },
          {
            id: "wf-mixed-08",
            stem: "Genetic engineering can ___ (ABLE) scientists to produce crops that resist drought and disease.",
            options: ["enable", "ability", "ableness"],
            answer: "enable",
            explanation: "The prefix en- converts the adjective/noun 'able' into the verb 'enable'.",
            fullExplanation: "The prefix en- attaches to 'able' to form the verb 'enable', meaning to make possible or give the means to do something. 'Ability' is a noun, not a verb. 'Ableness' is a non-standard noun form.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "able",
            flavor: "science"
          },
          {
            id: "wf-mixed-09",
            stem: "Maya Angelou worked tirelessly to ___ (POWER) young Black writers and give them a public voice.",
            options: ["empower", "enpower", "powerise"],
            answer: "empower",
            explanation: "The prefix em- (a form of en-) converts the noun 'power' into the verb 'empower'.",
            fullExplanation: "Em- (variant of en- before p/b) attaches to 'power' to form 'empower', meaning to give authority or confidence to someone. 'Enpower' is a misspelling — the correct form is 'empower'. 'Powerise' is not a standard English word.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "power",
            flavor: "personalities"
          },
          {
            id: "wf-mixed-10",
            stem: "The ___ (SIGN) of the Magna Carta in 1215 limited the powers of the English king for the first time.",
            options: ["signing", "signage", "signment"],
            answer: "signing",
            explanation: "The gerund 'signing' (verb + -ing used as a noun) is the natural noun form needed here.",
            fullExplanation: "The gerund 'signing' (sign + -ing) functions as a noun referring to the act of signing a document. 'Signage' refers to signs (notices/displays), not the act of signing. 'Signment' is not a real English word.",
            source: "Swan, PEU (4e), §344",
            hint: "sign",
            flavor: "history"
          },
          {
            id: "wf-mixed-11",
            stem: "The hotel receptionist tried to ___ (COMFORT) the guests whose luggage had been lost by the airline.",
            options: ["comfort", "discomfort", "uncomfortable"],
            answer: "comfort",
            explanation: "Here 'comfort' is used as a verb, meaning to console or reassure someone.",
            fullExplanation: "The verb 'comfort' means to console someone in distress. 'Discomfort' means to cause unease — the opposite of the intended meaning. 'Uncomfortable' is an adjective, not a verb form.",
            source: "Murphy, EGU (4e), Unit 73",
            hint: "comfort",
            flavor: "social"
          },
          {
            id: "wf-mixed-12",
            stem: "Rising ocean temperatures can ___ (STABLE) coral reef ecosystems and cause widespread bleaching.",
            options: ["destabilise", "unstabilise", "instabilise"],
            answer: "destabilise",
            explanation: "The prefix de- combined with -ise forms the verb 'destabilise', meaning to make unstable.",
            fullExplanation: "The prefix de- (meaning reversal or removal) combines with 'stable' and -ise to form 'destabilise'. 'Unstabilise' is non-standard; de- is the correct prefix for this verb. 'Instabilise' is not a real English word.",
            source: "Hewings, AGU (3e), Unit 68",
            hint: "stable",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "one-word-gap",
    title: "One-Word Gap",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "owg-quant",
        title: "Quantifier expressions",
        tasks: [
          {
            id: "owg-quant-01",
            stem: "Einstein produced ___ of groundbreaking work during his miraculous year of 1905.",
            options: ["a great deal", "a great number", "plenty"],
            answer: "a great deal",
            explanation: "'A great deal of' collocates with uncountable nouns like 'work'.",
            fullExplanation: "'A great deal of work' is correct because 'work' here is uncountable and 'a great deal of' collocates with uncountable nouns. 'A great number of' is for countable plural nouns. 'Plenty of' is possible but 'plenty' alone (without 'of') cannot precede 'of work'. 'A couple of' means roughly two and collocates with countable nouns.",
            source: "Swan, PEU (4e), §467",
            flavor: "personalities"
          },
          {
            id: "owg-quant-02",
            stem: "A ___ of historians believe the fall of Rome was caused by a combination of factors.",
            options: ["number", "deal", "lot"],
            answer: "number",
            explanation: "'A number of' means 'several' and precedes countable plural nouns.",
            fullExplanation: "'A number of historians' means 'several historians' and is correct with a countable plural noun. 'A deal of' is not a standard fixed expression. 'A lot of' is correct but 'lot' alone without 'of' immediately after does not work here because the blank is followed by 'of'. 'A couple of' would mean only about two, not a broad range.",
            source: "Swan, PEU (4e), §467",
            flavor: "history"
          },
          {
            id: "owg-quant-03",
            stem: "There are ___ of seats left on the flight, so you can book without worrying.",
            options: ["plenty", "a great deal", "a number"],
            answer: "plenty",
            explanation: "'Plenty of' means 'more than enough' and works with both countable and uncountable nouns.",
            fullExplanation: "'Plenty of seats' means 'more than enough seats' and works here because 'seats' is a countable plural noun. 'A great deal of' collocates with uncountable nouns. 'A number of' is possible but 'a number' alone without 'of' following is wrong here. 'A couple of' implies only two.",
            source: "Swan, PEU (4e), §467",
            flavor: "social"
          },
          {
            id: "owg-quant-04",
            stem: "The ocean contains ___ of dissolved salts and minerals in every litre of seawater.",
            options: ["lots", "a number", "a couple"],
            answer: "lots",
            explanation: "'Lots of' means 'a large amount of' and works with uncountable nouns like 'dissolved salts'.",
            fullExplanation: "'Lots of dissolved salts' is correct; 'lots of' (informal for 'a lot of') collocates with uncountable quantities. 'A number of' is for countable plural nouns. 'A couple of' implies roughly two. 'A few of' means 'some but not many' and is for countable nouns.",
            source: "Swan, PEU (4e), §467",
            flavor: "science"
          },
          {
            id: "owg-quant-05",
            stem: "Frida Kahlo produced ___ of self-portraits that explored her physical and emotional pain.",
            options: ["a number", "a great deal", "plenty"],
            answer: "a number",
            explanation: "'A number of' means 'several' and precedes countable plural nouns like 'self-portraits'.",
            fullExplanation: "'A number of self-portraits' means 'several self-portraits' and correctly uses a countable plural noun. 'A great deal of' is for uncountable nouns. 'Plenty of' works but 'plenty' alone without 'of' after the blank does not fit. 'A lot of' works, but 'a lot' alone before 'of' does not match the blank structure here.",
            source: "Swan, PEU (4e), §467",
            flavor: "personalities"
          },
          {
            id: "owg-quant-06",
            stem: "A ___ of soldiers deserted during the harsh winter campaign of 1812.",
            options: ["great number", "great deal", "plenty"],
            answer: "great number",
            explanation: "'A great number of' means 'very many' and precedes countable plural nouns.",
            fullExplanation: "'A great number of soldiers' means 'very many soldiers' and is correct with a countable plural noun. 'A great deal of' is for uncountable quantities. 'Plenty' works only with 'of' and would need 'A plenty of', which is not idiomatic. 'A couple of' means only about two.",
            source: "Swan, PEU (4e), §467",
            flavor: "history"
          },
          {
            id: "owg-quant-07",
            stem: "I only need ___ of minutes to finish packing; the taxi can wait outside.",
            options: ["a couple", "a great deal", "plenty"],
            answer: "a couple",
            explanation: "'A couple of' means 'two or approximately two' and fits a small countable quantity.",
            fullExplanation: "'A couple of minutes' means 'about two minutes' and fits the context of a short wait. 'A great deal of' is for uncountable nouns and implies a large amount. 'Plenty of' means 'more than enough'. 'A number of' means 'several', which is more than two.",
            source: "Swan, PEU (4e), §467",
            flavor: "social"
          },
          {
            id: "owg-quant-08",
            stem: "Scientists have gathered ___ of evidence showing that the Earth's core is made of iron.",
            options: ["a great deal", "a great number", "a couple"],
            answer: "a great deal",
            explanation: "'A great deal of' collocates with uncountable nouns like 'evidence'.",
            fullExplanation: "'A great deal of evidence' is correct because 'evidence' is uncountable. 'A great number of' requires a countable plural noun. 'A couple of' implies roughly two. 'A few of' means 'some but not many' and is for countable nouns.",
            source: "Swan, PEU (4e), §467",
            flavor: "science"
          },
          {
            id: "owg-quant-09",
            stem: "Roger Federer spent ___ of time practising serve techniques in his early career.",
            options: ["a great deal", "a great number", "a couple"],
            answer: "a great deal",
            explanation: "'A great deal of' collocates with uncountable nouns like 'time'.",
            fullExplanation: "'A great deal of time' is correct because 'time' is uncountable. 'A great number of' is for countable plural nouns. 'A couple of' implies roughly two. 'Plenty of' works but 'plenty' alone is not idiomatic before 'of time' in this structure.",
            source: "Swan, PEU (4e), §467",
            flavor: "personalities"
          },
          {
            id: "owg-quant-10",
            stem: "A ___ of significant battles were fought along the Eastern Front during World War II.",
            options: ["great number", "great deal", "couple"],
            answer: "great number",
            explanation: "'A great number of' means 'very many' and is used with countable plural nouns.",
            fullExplanation: "'A great number of battles' is correct; 'battles' is a countable plural noun. 'A great deal of' is for uncountable quantities. 'A couple of' means roughly two, which undersells the scale of the Eastern Front. 'A lot of' works, but 'lot' alone after the article 'A' would need 'of' not 'great'.",
            source: "Swan, PEU (4e), §467",
            flavor: "history"
          },
          {
            id: "owg-quant-11",
            stem: "We have ___ of time before the last train leaves, so there is no need to rush.",
            options: ["plenty", "a number", "a couple"],
            answer: "plenty",
            explanation: "'Plenty of time' means 'more than enough time' and collocates with uncountable nouns.",
            fullExplanation: "'Plenty of time' correctly uses 'plenty of' with the uncountable noun 'time'. 'A number of' is for countable plural nouns. 'A couple of' means about two (e.g., minutes). 'A great number of' is for countable plural nouns.",
            source: "Swan, PEU (4e), §467",
            flavor: "social"
          },
          {
            id: "owg-quant-12",
            stem: "The rainforest produces ___ of the oxygen that living organisms on Earth depend on.",
            options: ["lots", "a number", "a couple"],
            answer: "lots",
            explanation: "'Lots of' means 'a large amount of' and works with uncountable nouns like 'oxygen'.",
            fullExplanation: "'Lots of oxygen' is correct because 'oxygen' is an uncountable noun and 'lots of' means 'a large amount of'. 'A number of' is for countable plural nouns. 'A couple of' implies roughly two. 'A great number of' is for countable plural nouns.",
            source: "Swan, PEU (4e), §467",
            flavor: "science"
          }
        ]
      },
      {
        id: "owg-fixed",
        title: "Fixed phrases & collocations",
        tasks: [
          {
            id: "owg-fixed-01",
            stem: "Leonardo da Vinci planned the Vitruvian Man well ___ advance, sketching dozens of proportional studies.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "'In advance' is the fixed phrase meaning 'beforehand'.",
            fullExplanation: "'In advance' is a fixed collocation meaning 'before a particular time or event'. 'On advance' is not a standard expression. 'At advance' is not used. 'By advance' does not exist as a set phrase.",
            source: "Swan, PEU (4e), §282",
            flavor: "personalities"
          },
          {
            id: "owg-fixed-02",
            stem: "After years of Roman occupation, the native Britons rose up ___ last and drove back the invaders.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At last' is the fixed phrase meaning 'finally, after a long wait'.",
            fullExplanation: "'At last' is a fixed phrase meaning 'finally, after a long time'. 'In last' is not idiomatic. 'On last' does not exist as a set phrase. 'By last' is not used in this sense.",
            source: "Swan, PEU (4e), §282",
            flavor: "history"
          },
          {
            id: "owg-fixed-03",
            stem: "The customer broke the vase ___ purpose and then pretended it was an accident.",
            options: ["on", "in", "by"],
            answer: "on",
            explanation: "'On purpose' is the fixed phrase meaning 'deliberately'.",
            fullExplanation: "'On purpose' is the fixed collocation meaning 'intentionally' or 'deliberately'. 'In purpose' is not standard English. 'By purpose' is not a recognised phrase. 'At purpose' does not exist.",
            source: "Swan, PEU (4e), §282",
            flavor: "social"
          },
          {
            id: "owg-fixed-04",
            stem: "The two comets collided ___ chance, in a region of space with no other objects nearby.",
            options: ["by", "at", "on"],
            answer: "by",
            explanation: "'By chance' is the fixed phrase meaning 'accidentally' or 'without planning'.",
            fullExplanation: "'By chance' is the fixed collocation meaning 'accidentally' or 'not by design'. 'At chance' is not standard. 'On chance' is occasionally used in 'on the off chance' but not without 'the'. 'In chance' does not exist as a set phrase.",
            source: "Swan, PEU (4e), §282",
            flavor: "science"
          },
          {
            id: "owg-fixed-05",
            stem: "Mahatma Gandhi preferred to deliver his most important messages ___ person whenever possible.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "'In person' is the fixed phrase meaning 'physically present, not via technology'.",
            fullExplanation: "'In person' is a fixed collocation meaning 'physically present rather than via phone or letter'. 'On person' is not idiomatic. 'At person' does not exist. 'By person' is not a standard phrase.",
            source: "Swan, PEU (4e), §282",
            flavor: "personalities"
          },
          {
            id: "owg-fixed-06",
            stem: "The trains during the Industrial Revolution rarely arrived ___ time due to mechanical faults.",
            options: ["on", "in", "at"],
            answer: "on",
            explanation: "'On time' means 'punctually, at the scheduled moment'.",
            fullExplanation: "'On time' is a fixed phrase meaning 'punctually' or 'at the scheduled moment'. 'In time' means 'before it is too late', which changes the meaning. 'At time' is not standard. 'By time' is not idiomatic in this context.",
            source: "Swan, PEU (4e), §282",
            flavor: "history"
          },
          {
            id: "owg-fixed-07",
            stem: "We managed to catch the last bus just ___ time before the service stopped for the night.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "'In time' means 'before it is too late, with time to spare'.",
            fullExplanation: "'In time' means 'before it is too late or before a deadline'. 'On time' means 'punctually at the scheduled moment', not 'before it is too late'. 'At time' is not idiomatic. 'By time' is not a set phrase.",
            source: "Swan, PEU (4e), §282",
            flavor: "social"
          },
          {
            id: "owg-fixed-08",
            stem: "Students who learn multiplication tables ___ heart find mental arithmetic much easier.",
            options: ["by", "in", "on"],
            answer: "by",
            explanation: "'By heart' is the fixed phrase meaning 'from memory'.",
            fullExplanation: "'By heart' is a fixed collocation meaning 'from memory, without notes'. 'In heart' is not a standard phrase. 'On heart' does not exist. 'At heart' means 'fundamentally' or 'in one's character', which is unrelated.",
            source: "Swan, PEU (4e), §282",
            flavor: "science"
          },
          {
            id: "owg-fixed-09",
            stem: "Charles Dickens wrote many of his novels ___ advance, selling chapters to magazines before they were finished.",
            options: ["in", "on", "by"],
            answer: "in",
            explanation: "'In advance' is the fixed phrase meaning 'beforehand'.",
            fullExplanation: "'In advance' correctly means 'before the event or deadline'. 'On advance' is not a standard expression. 'By advance' does not exist as an idiom. 'At advance' is not used.",
            source: "Swan, PEU (4e), §282",
            flavor: "personalities"
          },
          {
            id: "owg-fixed-10",
            stem: "The allied forces arrived ___ last at Normandy, turning the tide of the Second World War.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At last' is the fixed phrase meaning 'finally, after a long wait'.",
            fullExplanation: "'At last' means 'finally, after a long period of waiting or effort'. 'In last' is not idiomatic. 'On last' does not exist as a set expression. 'By last' is not used with this meaning.",
            source: "Swan, PEU (4e), §282",
            flavor: "history"
          },
          {
            id: "owg-fixed-11",
            stem: "My colleague knocked over the ink ___ purpose to test how the new cleaner worked.",
            options: ["on", "in", "at"],
            answer: "on",
            explanation: "'On purpose' is the fixed phrase meaning 'deliberately'.",
            fullExplanation: "'On purpose' is the established collocation meaning 'intentionally'. 'In purpose' is not standard. 'At purpose' does not exist. 'By purpose' is not a recognised fixed expression in English.",
            source: "Swan, PEU (4e), §282",
            flavor: "social"
          },
          {
            id: "owg-fixed-12",
            stem: "The two scientists met ___ chance at a conference and later collaborated on a Nobel Prize-winning discovery.",
            options: ["by", "on", "at"],
            answer: "by",
            explanation: "'By chance' is the fixed phrase meaning 'accidentally, without prior planning'.",
            fullExplanation: "'By chance' is a fixed collocation meaning 'accidentally' or 'not by design'. 'On chance' is used only in 'on the off chance' and not standalone. 'At chance' is not standard. 'In chance' does not exist as a fixed phrase.",
            source: "Swan, PEU (4e), §282",
            flavor: "science"
          }
        ]
      },
      {
        id: "owg-conn",
        title: "Discourse connectors",
        tasks: [
          {
            id: "owg-conn-01",
            stem: "Marie Curie faced persistent discrimination as a woman in science; ___, she became the first person to win two Nobel Prizes.",
            options: ["nevertheless", "therefore", "moreover"],
            answer: "nevertheless",
            explanation: "'Nevertheless' signals contrast — she succeeded despite the obstacles.",
            fullExplanation: "'Nevertheless' introduces a concessive contrast: despite the hardship, the outcome was positive. 'Therefore' would imply the discrimination caused her success, which is illogical. 'Moreover' adds information rather than contrasting. 'Consequently' signals a result, not a contrast.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "personalities"
          },
          {
            id: "owg-conn-02",
            stem: "The Roman Empire collapsed in 476 AD; ___, its legal and architectural legacy shaped European civilisation for centuries.",
            options: ["however", "therefore", "meanwhile"],
            answer: "however",
            explanation: "'However' signals a contrast between collapse and lasting influence.",
            fullExplanation: "'However' introduces a contrasting idea: the empire fell, yet its influence endured. 'Therefore' would mean the collapse caused the influence, which misrepresents the logic. 'Meanwhile' indicates simultaneous events. 'Otherwise' introduces a condition or alternative outcome.",
            source: "Swan, PEU (4e), §261",
            flavor: "history"
          },
          {
            id: "owg-conn-03",
            stem: "The restaurant was fully booked for Saturday; ___, we decided to order a takeaway instead.",
            options: ["therefore", "however", "moreover"],
            answer: "therefore",
            explanation: "'Therefore' signals the logical result of the restaurant being full.",
            fullExplanation: "'Therefore' introduces a conclusion that follows logically from the previous statement. 'However' would signal contrast, not consequence. 'Moreover' would add an extra point, not a result. 'Nevertheless' would signal continuation despite an obstacle, which does not fit here.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "social"
          },
          {
            id: "owg-conn-04",
            stem: "Bees pollinate roughly one third of global food crops; ___, their declining populations pose a serious threat to agriculture.",
            options: ["consequently", "although", "however"],
            answer: "consequently",
            explanation: "'Consequently' links declining bee populations as a result to the prior fact about their importance.",
            fullExplanation: "'Consequently' shows the logical outcome: because bees are vital, their decline has serious consequences. 'Although' introduces a contrast or concession, not a result. 'However' signals contrast, not cause-and-effect. 'Meanwhile' refers to events happening at the same time.",
            source: "Swan, PEU (4e), §261",
            flavor: "science"
          },
          {
            id: "owg-conn-05",
            stem: "Winston Churchill was a gifted painter and writer; ___, he is best remembered as a wartime Prime Minister.",
            options: ["however", "therefore", "furthermore"],
            answer: "however",
            explanation: "'However' contrasts his lesser-known talents with his primary historical identity.",
            fullExplanation: "'However' signals that despite Churchill's other talents, his main reputation is as Prime Minister. 'Therefore' would wrongly suggest his artistic skills caused his political fame. 'Furthermore' would add to the same idea, not contrast. 'Consequently' implies a cause-and-effect that is not present here.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "personalities"
          },
          {
            id: "owg-conn-06",
            stem: "The Berlin Wall fell in November 1989; ___, Germany was officially reunified less than a year later.",
            options: ["consequently", "however", "although"],
            answer: "consequently",
            explanation: "'Consequently' marks reunification as a direct result of the Wall's fall.",
            fullExplanation: "'Consequently' shows that reunification followed as a logical result of the Wall falling. 'However' would introduce a contrast where none is intended. 'Although' introduces a concession. 'Otherwise' signals an alternative condition, which does not fit the meaning.",
            source: "Swan, PEU (4e), §261",
            flavor: "history"
          },
          {
            id: "owg-conn-07",
            stem: "You must submit your application before the deadline; ___, it will not be considered.",
            options: ["otherwise", "however", "moreover"],
            answer: "otherwise",
            explanation: "'Otherwise' signals a negative consequence if the condition is not met.",
            fullExplanation: "'Otherwise' introduces the alternative negative outcome if the condition is not satisfied. 'However' contrasts two facts but does not introduce a conditional consequence. 'Moreover' and 'furthermore' both add positive information, not a negative alternative.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "social"
          },
          {
            id: "owg-conn-08",
            stem: "The human brain contains approximately 86 billion neurons; ___, each neuron can form thousands of connections.",
            options: ["moreover", "however", "otherwise"],
            answer: "moreover",
            explanation: "'Moreover' adds a further impressive fact to the one already stated.",
            fullExplanation: "'Moreover' introduces an additional point that reinforces or extends the previous one. 'However' would contrast the two facts, which is not the intended relationship. 'Otherwise' signals a conditional alternative. 'Nevertheless' signals contrast despite an obstacle.",
            source: "Swan, PEU (4e), §261",
            flavor: "science"
          },
          {
            id: "owg-conn-09",
            stem: "Frida Kahlo suffered severe physical pain for most of her life; ___, her artistic output was remarkably prolific.",
            options: ["nevertheless", "therefore", "moreover"],
            answer: "nevertheless",
            explanation: "'Nevertheless' highlights her prolific output despite ongoing pain.",
            fullExplanation: "'Nevertheless' introduces a surprising positive outcome despite a negative condition. 'Therefore' would incorrectly suggest her pain caused her prolific output. 'Moreover' adds information without the concessive contrast. 'Consequently' signals a logical result, not a concession.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "personalities"
          },
          {
            id: "owg-conn-10",
            stem: "Pompeii was buried under volcanic ash in 79 AD; ___, archaeologists are still uncovering new finds at the site today.",
            options: ["meanwhile", "therefore", "otherwise"],
            answer: "meanwhile",
            explanation: "'Meanwhile' signals that excavations continue alongside the historical context of the burial.",
            fullExplanation: "'Meanwhile' connects two events occurring in parallel across time: the ancient burial and the ongoing modern excavation. 'Therefore' would wrongly suggest the burial caused today's discoveries as a logical conclusion. 'Otherwise' introduces a conditional alternative. 'Consequently' signals a direct result, which is too strong here.",
            source: "Swan, PEU (4e), §261",
            flavor: "history"
          },
          {
            id: "owg-conn-11",
            stem: "The train service was cancelled due to engineering works; ___, passengers were offered a free replacement bus.",
            options: ["therefore", "however", "although"],
            answer: "therefore",
            explanation: "'Therefore' presents the free bus as the direct result of the cancellation.",
            fullExplanation: "'Therefore' introduces a conclusion or consequence: because the trains were cancelled, a bus was provided. 'However' would signal contrast, not result. 'Although' introduces a concessive clause. 'Furthermore' adds information rather than drawing a consequence.",
            source: "Murphy, EGU (4e), Unit 111",
            flavor: "social"
          },
          {
            id: "owg-conn-12",
            stem: "Sharks have existed for over 450 million years; ___, they have survived five mass extinction events.",
            options: ["furthermore", "however", "otherwise"],
            answer: "furthermore",
            explanation: "'Furthermore' adds an equally impressive fact to reinforce the idea of sharks' ancient resilience.",
            fullExplanation: "'Furthermore' adds a second point that strengthens the first: not only are they ancient, but they also survived mass extinctions. 'However' would introduce a contrast that is not intended. 'Otherwise' signals a negative alternative condition. 'Nevertheless' signals contrast despite an obstacle.",
            source: "Swan, PEU (4e), §261",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "extra-word",
    title: "Extra Word Removal",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "err-aux",
        title: "Redundant auxiliaries",
        tasks: [
          {
            id: "err-aux-01",
            stem: "Einstein said he did not never doubt the power of imagination. Find the redundant word: ___",
            options: ["did", "not", "never"],
            answer: "did",
            explanation: "'Not never' is already a double negative; 'did' creates a redundant auxiliary.",
            fullExplanation: "The construction 'did not never' contains two negations plus an unnecessary auxiliary. Removing 'did' leaves 'he not never doubted', but the core error is the auxiliary 'did' paired with 'not never'. In standard English, 'never doubted' alone suffices. 'did' is the extra auxiliary making the clause grammatically overloaded.",
            source: "Swan, PEU (4e), §147",
            flavor: "personalities"
          },
          {
            id: "err-aux-02",
            stem: "By the time the war did ended, millions of people had lost their homes. Find the redundant word: ___",
            options: ["did", "ended", "had"],
            answer: "did",
            explanation: "'Did ended' is wrong; 'did' is a redundant auxiliary before a past-tense verb.",
            fullExplanation: "'Did' is used for emphasis or questions only with base-form verbs (did end). Here 'ended' is already past simple, so 'did' is both redundant and creates a double-marking error. The sentence needs either 'ended' or 'did end', not 'did ended'. 'Had', 'lost' are correct in their clauses.",
            source: "Murphy, EGU (4e), Unit 43",
            flavor: "history"
          },
          {
            id: "err-aux-03",
            stem: "She does works very hard every day to support her family. Find the redundant word: ___",
            options: ["does", "works", "very"],
            answer: "does",
            explanation: "'Does works' incorrectly adds the auxiliary 'does' to a main verb already inflected with -s.",
            fullExplanation: "'Does' as an auxiliary requires the base form: 'she does work'. Here 'works' is already inflected for third-person singular, so adding 'does' is redundant. Either 'she works' or 'she does work (for emphasis)' is correct. 'Very', 'support' are correct.",
            source: "Murphy, EGU (4e), Unit 43",
            flavor: "social"
          },
          {
            id: "err-aux-04",
            stem: "Water does boils at 100 °C at standard atmospheric pressure. Find the redundant word: ___",
            options: ["does", "boils", "at"],
            answer: "does",
            explanation: "'Does boils' is ungrammatical; 'does' requires the base form 'boil', so 'does' is the redundant auxiliary here.",
            fullExplanation: "When 'does' is used for emphasis, the main verb must stay in base form: 'water does boil'. Since 'boils' is already a correctly inflected present-simple form, inserting 'does' before it creates a double-marking error. Remove 'does' to leave the correct statement of a scientific fact.",
            source: "Swan, PEU (4e), §482.1",
            flavor: "science"
          },
          {
            id: "err-aux-05",
            stem: "Picasso could was able to complete a drawing in under a minute. Find the redundant word: ___",
            options: ["could", "was", "able"],
            answer: "could",
            explanation: "'Could was able to' stacks two ability modals; 'could' is the redundant auxiliary.",
            fullExplanation: "'Could' and 'was able to' both express past ability. Using them together is redundant — only one is needed. 'Could complete' or 'was able to complete' are both correct alone. 'Was', 'able', and 'complete' all belong to the 'was able to' structure and are necessary.",
            source: "Murphy, EGU (4e), Unit 29",
            flavor: "personalities"
          },
          {
            id: "err-aux-06",
            stem: "The Berlin Wall was been built in 1961 to separate East and West Germany. Find the redundant word: ___",
            options: ["was", "been", "built"],
            answer: "was",
            explanation: "'Was been built' is a malformed passive; 'was' is redundant next to 'been built'.",
            fullExplanation: "The correct passive past form is 'was built' (simple) or 'had been built' (perfect). 'Was been built' mixes both patterns incorrectly. Here 'been built' already provides the passive participle chain; the extra 'was' before it is the redundant auxiliary. 'Separate' functions correctly as an infinitive after 'to'.",
            source: "Murphy, EGU (4e), Unit 21",
            flavor: "history"
          },
          {
            id: "err-aux-07",
            stem: "My colleague did mentioned that the meeting had been rescheduled. Find the redundant word: ___",
            options: ["did", "mentioned", "had"],
            answer: "did",
            explanation: "'Did mentioned' is wrong; 'did' is redundant when the verb is already in the past form.",
            fullExplanation: "'Did' for past tense must accompany the base form (did mention). 'Mentioned' is already past simple, so 'did' is a superfluous auxiliary. The clause needs only 'My colleague mentioned'. 'Had been' in the second clause is correct past perfect passive.",
            source: "Murphy, EGU (4e), Unit 43",
            flavor: "social"
          },
          {
            id: "err-aux-08",
            stem: "Sound waves do travels through air by compressing and expanding molecules. Find the redundant word: ___",
            options: ["do", "travels", "through"],
            answer: "do",
            explanation: "'Do travels' is ungrammatical; 'do' requires the base form 'travel', making 'do' redundant with the inflected 'travels'.",
            fullExplanation: "The emphatic auxiliary 'do/does' must be followed by the bare infinitive. 'Travels' is already third-person singular present; adding 'do' (which also marks present) creates double-marking. Remove 'do' and keep 'travels', or use 'Sound waves do travel' for emphasis. 'Through' and 'expanding' are correctly used.",
            source: "Swan, PEU (4e), §147",
            flavor: "science"
          },
          {
            id: "err-aux-09",
            stem: "Ada Lovelace would could write mathematical algorithms well ahead of her time. Find the redundant word: ___",
            options: ["would", "could", "write"],
            answer: "would",
            explanation: "'Would could' stacks two modal auxiliaries, which is ungrammatical; 'would' is redundant.",
            fullExplanation: "English does not permit two modal auxiliaries in sequence (*would could). 'Could write' alone correctly expresses past ability. 'Would write' expresses a past habit but changes the meaning. Since 'could' fits the intended meaning of ability, 'would' is the redundant auxiliary here. 'Ahead' is used correctly.",
            source: "Murphy, EGU (4e), Unit 29",
            flavor: "personalities"
          },
          {
            id: "err-aux-10",
            stem: "The Titanic has was sunk in 1912 after striking an iceberg in the North Atlantic. Find the redundant word: ___",
            options: ["has", "was", "sunk"],
            answer: "has",
            explanation: "'Has was sunk' wrongly combines present perfect and simple past auxiliaries; 'has' is redundant.",
            fullExplanation: "The event occurred in 1912, so simple past passive 'was sunk' is correct. Adding 'has' attempts to form a present perfect passive but conflicts with the specific past time reference '1912'. The two auxiliaries 'has' and 'was' cannot co-occur here. Remove 'has' to leave the grammatical 'was sunk'.",
            source: "Murphy, EGU (4e), Unit 13",
            flavor: "history"
          },
          {
            id: "err-aux-11",
            stem: "The children must have to finish their homework before dinner. Find the redundant word: ___",
            options: ["must", "have", "finish"],
            answer: "must",
            explanation: "'Must have to' combines two obligation modals; 'must' is redundant before 'have to'.",
            fullExplanation: "'Must' and 'have to' both express obligation, so using them together is redundant. Either 'must finish' or 'have to finish' is correct. 'Must have' has a different meaning (deduction about the past), which does not fit the context of a daily rule. Remove 'must' to leave the natural 'have to finish'.",
            source: "Murphy, EGU (4e), Unit 31",
            flavor: "social"
          },
          {
            id: "err-aux-12",
            stem: "Plants can are able to convert sunlight into energy through photosynthesis. Find the redundant word: ___",
            options: ["can", "are", "able"],
            answer: "can",
            explanation: "'Can are able to' stacks two ability expressions; 'can' is redundant before 'are able to'.",
            fullExplanation: "'Can' and 'are able to' both express ability. Combining them produces an ungrammatical double-ability construction. Use either 'plants can convert' or 'plants are able to convert'. Here 'are able to' is retained, so 'can' is the redundant element. 'Convert' correctly follows as the base-form verb.",
            source: "Murphy, EGU (4e), Unit 29",
            flavor: "science"
          }
        ]
      },
      {
        id: "err-prep",
        title: "Redundant prepositions",
        tasks: [
          {
            id: "err-prep-01",
            stem: "Marie Curie entered into the laboratory every morning before dawn to continue her research. Find the redundant word: ___",
            options: ["into", "every", "before"],
            answer: "into",
            explanation: "'Enter' does not take 'into'; the preposition is redundant after 'entered'.",
            fullExplanation: "'Enter' is a transitive verb that takes a direct object without a preposition: 'entered the laboratory'. Adding 'into' is a common redundancy. 'Every', 'before', and 'continue' are all correctly used in their positions.",
            source: "Swan, PEU (4e), §185",
            flavor: "personalities"
          },
          {
            id: "err-prep-02",
            stem: "Soldiers during World War I discussed about the harsh conditions in their letters home. Find the redundant word: ___",
            options: ["about", "during", "harsh"],
            answer: "about",
            explanation: "'Discuss' is transitive and takes no preposition; 'about' is redundant.",
            fullExplanation: "'Discuss' requires a direct object, not a prepositional phrase: 'discussed the harsh conditions'. 'Discuss about' is a very common learner error. 'During', 'harsh', and 'letters' are all correctly placed in the sentence.",
            source: "Swan, PEU (4e), §185",
            flavor: "history"
          },
          {
            id: "err-prep-03",
            stem: "She explained to me about the new company policy during the morning briefing. Find the redundant word: ___",
            options: ["about", "to", "during"],
            answer: "about",
            explanation: "'Explain to someone' is correct, but 'explain about' adds a redundant preposition.",
            fullExplanation: "'Explain' can take 'to someone' for the indirect object, but the content explained takes a direct object without 'about': 'She explained the policy to me'. Adding 'about' after 'explained' is redundant. 'To', 'during', and 'morning' are all correctly used.",
            source: "Swan, PEU (4e), §185",
            flavor: "social"
          },
          {
            id: "err-prep-04",
            stem: "Satellites orbit around the Earth at altitudes ranging from 160 to 36,000 kilometres. Find the redundant word: ___",
            options: ["around", "at", "from"],
            answer: "around",
            explanation: "'Orbit' already implies circular motion; 'around' is a redundant preposition.",
            fullExplanation: "The verb 'orbit' inherently means to travel in a circular path around a body, so adding 'around' is redundant: 'Satellites orbit the Earth'. 'At', 'from', and 'to' are all necessary to describe the altitude range correctly.",
            source: "Swan, PEU (4e), §185",
            flavor: "science"
          },
          {
            id: "err-prep-05",
            stem: "Muhammad Ali returned back to professional boxing after his ban was lifted in 1970. Find the redundant word: ___",
            options: ["back", "to", "after"],
            answer: "back",
            explanation: "'Returned back' is redundant; 'returned' already means to go back.",
            fullExplanation: "The verb 'return' already encodes the idea of going back, so adding 'back' is pleonastic. 'Returned to boxing' is the correct form. 'To', 'after', and 'was' are all correctly used in the sentence.",
            source: "Swan, PEU (4e), §185",
            flavor: "personalities"
          },
          {
            id: "err-prep-06",
            stem: "Ancient Romans would approach up to strangers in the forum to exchange news and gossip. Find the redundant word: ___",
            options: ["up", "to", "in"],
            answer: "up",
            explanation: "'Approach up to' is redundant; 'approach to' or 'approach' already covers the motion.",
            fullExplanation: "'Approach' means to move closer; 'up' adds nothing. The correct form is 'approach strangers' (transitive) or 'approach to strangers' in some dialects, but 'approach up to' is redundant. 'To', 'in', and 'exchange' are correctly used.",
            source: "Swan, PEU (4e), §185",
            flavor: "history"
          },
          {
            id: "err-prep-07",
            stem: "Where do you usually go to on your summer holidays every year? Find the redundant word: ___",
            options: ["to", "do", "on"],
            answer: "to",
            explanation: "'Go to on' is redundant; 'go on holiday' is the correct collocation.",
            fullExplanation: "The phrase 'go on holiday' uses 'on'; the directional 'to' before 'on' is unnecessary and creates an awkward double preposition. 'Do', 'on', and 'every' are all correctly positioned. The sentence should read: 'Where do you usually go on your summer holidays?'",
            source: "Swan, PEU (4e), §185",
            flavor: "social"
          },
          {
            id: "err-prep-08",
            stem: "Bees can detect of the Earth's magnetic field to navigate over long distances. Find the redundant word: ___",
            options: ["of", "can", "over"],
            answer: "of",
            explanation: "'Detect' is transitive and takes no 'of'; the preposition is redundant.",
            fullExplanation: "The verb 'detect' takes a direct object without a preposition: 'detect the Earth's magnetic field'. 'Detect of' is a learner error, adding a spurious preposition. 'Can', 'over', and 'long' are all correctly used in the sentence.",
            source: "Swan, PEU (4e), §185",
            flavor: "science"
          },
          {
            id: "err-prep-09",
            stem: "Nikola Tesla often emphasized on the importance of practical experimentation over theory. Find the redundant word: ___",
            options: ["on", "often", "of"],
            answer: "on",
            explanation: "'Emphasize' is transitive; 'on' after it is a redundant preposition.",
            fullExplanation: "'Emphasize' takes a direct object: 'emphasized the importance'. 'Emphasize on' is a common hypercorrection. 'Often', 'of', and 'over' are all used correctly in the sentence.",
            source: "Swan, PEU (4e), §185",
            flavor: "personalities"
          },
          {
            id: "err-prep-10",
            stem: "The French Revolution rose up against the privileges of the aristocracy and the clergy. Find the redundant word: ___",
            options: ["up", "against", "of"],
            answer: "up",
            explanation: "'Rose up against' is redundant; 'rose against' is the correct idiom here.",
            fullExplanation: "'Rise against' (rebel against) is the standard collocation; 'up' is redundant in this context. Note that 'rise up' can mean 'to rebel' intransitively, but 'rose up against' with a full object is pleonastic. 'Against', 'of', and 'the' are all correctly used.",
            source: "Swan, PEU (4e), §185",
            flavor: "history"
          },
          {
            id: "err-prep-11",
            stem: "Please refer back to the first chapter if you want to understand the main theme. Find the redundant word: ___",
            options: ["back", "to", "if"],
            answer: "back",
            explanation: "'Refer back to' is redundant; 'refer to' already implies returning to a source.",
            fullExplanation: "'Refer to' already means to direct attention back to something. Adding 'back' is pleonastic because the sense of returning is built into 'refer'. 'To', 'if', and 'main' are all correctly used in the sentence.",
            source: "Swan, PEU (4e), §185",
            flavor: "social"
          },
          {
            id: "err-prep-12",
            stem: "Scientists must first observe of a phenomenon carefully before proposing any explanation. Find the redundant word: ___",
            options: ["of", "must", "before"],
            answer: "of",
            explanation: "'Observe' is transitive; adding 'of' creates a redundant prepositional phrase.",
            fullExplanation: "The verb 'observe' takes a direct object directly: 'observe a phenomenon'. 'Observe of' is an erroneous addition of a preposition. 'Must', 'before', and 'any' are all correctly placed in the sentence.",
            source: "Swan, PEU (4e), §185",
            flavor: "science"
          }
        ]
      },
      {
        id: "err-art",
        title: "Redundant articles",
        tasks: [
          {
            id: "err-art-01",
            stem: "Frida Kahlo spent the most of her career painting self-portraits that reflected her pain. Find the redundant word: ___",
            options: ["the", "most", "her"],
            answer: "the",
            explanation: "The correct phrase is 'most of her career', not 'the most of'; 'the' is redundant here.",
            fullExplanation: "'Most of' is a quantifier that does not take a definite article. 'The most of' is a learner error; 'the most' is used only for superlatives (the most talented). Here 'the' is superfluous. 'Most', 'her', and 'painting' are all correctly used.",
            source: "Murphy, EGU (4e), Unit 80",
            flavor: "personalities"
          },
          {
            id: "err-art-02",
            stem: "During the Middle Ages, a peasants rarely owned the land they farmed. Find the redundant word: ___",
            options: ["a", "the", "they"],
            answer: "a",
            explanation: "'A peasants' is wrong; the plural noun 'peasants' takes no indefinite article.",
            fullExplanation: "The indefinite article 'a/an' is used only before singular countable nouns. 'Peasants' is plural, so no article is needed: 'peasants rarely owned'. 'A' before a plural noun is always an error. 'The', 'they', and 'rarely' are all correctly used.",
            source: "Murphy, EGU (4e), Unit 67",
            flavor: "history"
          },
          {
            id: "err-art-03",
            stem: "She arrived at the home just in time to cook dinner for the whole family. Find the redundant word: ___",
            options: ["the", "at", "just"],
            answer: "the",
            explanation: "'At home' is a fixed phrase; inserting 'the' before 'home' is redundant.",
            fullExplanation: "'At home' is a set expression with zero article. Adding 'the' turns it into a specific building rather than the idiomatic sense of being home. 'At', 'just', and 'whole' are all correctly used in the sentence.",
            source: "Murphy, EGU (4e), Unit 75",
            flavor: "social"
          },
          {
            id: "err-art-04",
            stem: "The oxygen is essential for all aerobic organisms, including humans and most animals. Find the redundant word: ___",
            options: ["The", "for", "all"],
            answer: "The",
            explanation: "Generic substances use zero article; 'The' before 'oxygen' as a general concept is redundant.",
            fullExplanation: "When referring to a substance in general, English uses zero article: 'Oxygen is essential'. 'The oxygen' would mean a specific quantity of oxygen. As a scientific generalisation, 'The' is redundant here. 'For', 'all', and 'most' are all correctly used.",
            source: "Murphy, EGU (4e), Unit 74",
            flavor: "science"
          },
          {
            id: "err-art-05",
            stem: "Shakespeare is widely regarded as a greatest playwright in the English language. Find the redundant word: ___",
            options: ["a", "as", "in"],
            answer: "a",
            explanation: "Superlative 'greatest' requires the definite article 'the', not 'a'; 'a' is redundant.",
            fullExplanation: "Superlatives must be preceded by the definite article 'the': 'the greatest playwright'. 'A' is the indefinite article and cannot precede a superlative. The sentence should read 'regarded as the greatest'. 'As', 'in', and the second 'the' are correctly used.",
            source: "Murphy, EGU (4e), Unit 67",
            flavor: "personalities"
          },
          {
            id: "err-art-06",
            stem: "The ancient Roman soldiers were the required to carry their equipment on long marches. Find the redundant word: ___",
            options: ["the", "ancient", "carry"],
            answer: "the",
            explanation: "'Were required' is correct; 'the' between 'were' and 'required' is a redundant article.",
            fullExplanation: "The passive construction 'were required to' needs no article between the auxiliary 'were' and the past participle 'required'. Inserting 'the' breaks the passive structure. 'Ancient', 'carry', and 'long' are all correctly used.",
            source: "Murphy, EGU (4e), Unit 67",
            flavor: "history"
          },
          {
            id: "err-art-07",
            stem: "My neighbour goes to the work by bicycle every morning to save on transport costs. Find the redundant word: ___",
            options: ["the", "by", "every"],
            answer: "the",
            explanation: "'Go to work' is a fixed phrase with zero article; 'the' before 'work' is redundant.",
            fullExplanation: "'Go to work' uses zero article, like 'go to school' or 'go to bed'. 'The work' would refer to a specific piece of work, not the place of employment. Remove 'the' to leave the idiomatic 'goes to work'. 'By', 'every', and 'save' are all correctly used.",
            source: "Murphy, EGU (4e), Unit 75",
            flavor: "social"
          },
          {
            id: "err-art-08",
            stem: "Light from the Sun takes approximately eight a minutes to reach Earth's surface. Find the redundant word: ___",
            options: ["a", "the", "approximately"],
            answer: "a",
            explanation: "'Eight minutes' takes no article; 'a' between 'eight' and 'minutes' is redundant.",
            fullExplanation: "The indefinite article 'a' can precede 'minute' in singular ('a minute'), but not when a numeral like 'eight' is used. 'Eight minutes' stands alone without any article. 'A' is therefore redundant. 'The', 'the', and 'approximately' are all correctly used.",
            source: "Murphy, EGU (4e), Unit 67",
            flavor: "science"
          },
          {
            id: "err-art-09",
            stem: "Agatha Christie wrote the over eighty detective novels during her long career as an author. Find the redundant word: ___",
            options: ["the", "over", "during"],
            answer: "the",
            explanation: "'Over eighty' is a quantifying phrase; 'the' before it is a redundant article.",
            fullExplanation: "When 'over' is used as a quantifier meaning 'more than', it does not require a preceding definite article: 'wrote over eighty novels'. Inserting 'the' before 'over eighty' is redundant. 'Over', 'during', and 'as' are all correctly used.",
            source: "Murphy, EGU (4e), Unit 67",
            flavor: "personalities"
          },
          {
            id: "err-art-10",
            stem: "Invention of the printing press in the 1440s changed a history of communication forever. Find the redundant word: ___",
            options: ["a", "the", "of"],
            answer: "a",
            explanation: "'History of communication' needs 'the', not 'a'; 'a' before 'history' is the redundant article.",
            fullExplanation: "When referring to 'the history of communication' as a specific, unique body of events, the definite article 'the' is required. Using 'a history' implies one of many possible histories, which is not the intended meaning. 'A' is the wrong and redundant article here. The other articles and 'of' are correctly used.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "history"
          },
          {
            id: "err-art-11",
            stem: "The manager asked us to go to the bed early the night before the big presentation. Find the redundant word: ___",
            options: ["the", "early", "before"],
            answer: "the",
            explanation: "'Go to bed' is a fixed zero-article phrase; 'the' before 'bed' is redundant.",
            fullExplanation: "Fixed expressions like 'go to bed', 'go to school', and 'in hospital' use zero article. Adding 'the' before 'bed' turns it into a specific piece of furniture rather than the idiomatic activity. Remove the first 'the' (before 'bed') to leave 'go to bed'. 'Early', 'before', and 'big' are correctly used.",
            source: "Murphy, EGU (4e), Unit 75",
            flavor: "social"
          },
          {
            id: "err-art-12",
            stem: "The bats navigate in the total darkness using a system called echolocation. Find the redundant word: ___",
            options: ["The", "in", "total"],
            answer: "The",
            explanation: "Generic reference to a species uses zero article; 'The' before 'bats' as a class is redundant.",
            fullExplanation: "When making a general statement about a species or class, English uses the plural with zero article: 'Bats navigate'. 'The bats' would refer to specific bats already mentioned. For a scientific generalisation, 'The' is redundant. 'In', 'total', and 'called' are all correctly used.",
            source: "Murphy, EGU (4e), Unit 74",
            flavor: "science"
          }
        ]
      },
      {
        id: "err-pron",
        title: "Redundant pronouns",
        tasks: [
          {
            id: "err-pron-01",
            stem: "Albert Einstein he developed the theory of relativity in the early twentieth century. Find the redundant word: ___",
            options: ["he", "the", "early"],
            answer: "he",
            explanation: "'Albert Einstein he' is a double subject; the pronoun 'he' is redundant after the noun.",
            fullExplanation: "In English, a subject noun and a subject pronoun cannot both occupy the subject slot in the same clause: 'Albert Einstein developed'. Using both 'Albert Einstein' and 'he' creates a double-subject error common in some L1 transfers. 'The', 'early', and 'developed' are all correctly placed.",
            source: "Swan, PEU (4e), §423",
            flavor: "personalities"
          },
          {
            id: "err-pron-02",
            stem: "The Roman army it marched thousands of miles to conquer new territories across Europe. Find the redundant word: ___",
            options: ["it", "The", "miles"],
            answer: "it",
            explanation: "'The Roman army it marched' has a redundant pronoun 'it' repeating the subject.",
            fullExplanation: "The subject 'The Roman army' already fills the subject position. Inserting 'it' immediately after creates an illegal double-subject structure. The sentence should read 'The Roman army marched'. 'The', 'miles', and 'across' are all correctly used.",
            source: "Swan, PEU (4e), §423",
            flavor: "history"
          },
          {
            id: "err-pron-03",
            stem: "My older sister she always borrows my clothes without asking me first. Find the redundant word: ___",
            options: ["she", "always", "without"],
            answer: "she",
            explanation: "'My older sister she' has a redundant pronoun; the noun phrase is the subject already.",
            fullExplanation: "English does not allow a resumptive pronoun to repeat the subject within the same clause. 'My older sister always borrows' is the correct structure. Adding 'she' after the noun phrase is a frequent learner error. 'Always', 'without', and 'asking' are all correctly used.",
            source: "Swan, PEU (4e), §423",
            flavor: "social"
          },
          {
            id: "err-pron-04",
            stem: "The ozone layer it protects the Earth from harmful ultraviolet radiation emitted by the Sun. Find the redundant word: ___",
            options: ["it", "The", "from"],
            answer: "it",
            explanation: "'The ozone layer it protects' has a redundant pronoun 'it' shadowing the subject.",
            fullExplanation: "The noun phrase 'The ozone layer' is the complete subject; the pronoun 'it' is therefore superfluous. English requires one subject per clause, not two. The sentence should read 'The ozone layer protects the Earth'. 'The', 'from', and 'harmful' are all correctly placed.",
            source: "Swan, PEU (4e), §423",
            flavor: "science"
          },
          {
            id: "err-pron-05",
            stem: "Vincent van Gogh he sold only one painting during his entire lifetime. Find the redundant word: ___",
            options: ["he", "only", "during"],
            answer: "he",
            explanation: "'Vincent van Gogh he' has the redundant pronoun 'he'; the proper noun is the subject.",
            fullExplanation: "A proper noun and a co-referential subject pronoun cannot both serve as subject in the same clause. 'Vincent van Gogh sold only one painting' is the correct sentence. 'He' is redundant. 'Only', 'during', and 'entire' are all correctly used.",
            source: "Swan, PEU (4e), §423",
            flavor: "personalities"
          },
          {
            id: "err-pron-06",
            stem: "The battle of Waterloo it ended Napoleon's rule and changed the course of European history. Find the redundant word: ___",
            options: ["it", "The", "changed"],
            answer: "it",
            explanation: "'The battle of Waterloo it ended' has the pronoun 'it' redundantly echoing the subject.",
            fullExplanation: "The full noun phrase 'The battle of Waterloo' is the subject; inserting the pronoun 'it' before the verb creates a double-subject. The sentence should read 'The battle of Waterloo ended Napoleon's rule'. 'The', 'changed', and 'European' are all correctly placed.",
            source: "Swan, PEU (4e), §423",
            flavor: "history"
          },
          {
            id: "err-pron-07",
            stem: "Our next-door neighbour he complains about the noise every single weekend. Find the redundant word: ___",
            options: ["he", "about", "every"],
            answer: "he",
            explanation: "'Our next-door neighbour he' is a double subject; 'he' is the redundant pronoun.",
            fullExplanation: "English does not allow a resumptive pronoun to duplicate the noun-phrase subject within the main clause. 'Our next-door neighbour complains about the noise' is correct. 'About', 'every', and 'single' are all correctly placed in the sentence.",
            source: "Swan, PEU (4e), §423",
            flavor: "social"
          },
          {
            id: "err-pron-08",
            stem: "Tectonic plates they move very slowly, typically just a few centimetres each year. Find the redundant word: ___",
            options: ["they", "very", "typically"],
            answer: "they",
            explanation: "'Tectonic plates they move' is a double subject; 'they' is the redundant pronoun.",
            fullExplanation: "The plural noun phrase 'Tectonic plates' already functions as the subject; adding 'they' repeats the subject role. The sentence should read 'Tectonic plates move very slowly'. 'Very', 'typically', and 'each' are all correctly used.",
            source: "Swan, PEU (4e), §423",
            flavor: "science"
          },
          {
            id: "err-pron-09",
            stem: "Charles Darwin he spent five years aboard HMS Beagle collecting specimens from around the world. Find the redundant word: ___",
            options: ["he", "five", "collecting"],
            answer: "he",
            explanation: "'Charles Darwin he spent' has the redundant pronoun 'he' duplicating the proper-noun subject.",
            fullExplanation: "'Charles Darwin' is the subject; the pronoun 'he' immediately after is superfluous. The correct sentence is 'Charles Darwin spent five years aboard HMS Beagle'. 'Five', 'collecting', and 'around' are all correctly used.",
            source: "Swan, PEU (4e), §423",
            flavor: "personalities"
          },
          {
            id: "err-pron-10",
            stem: "The Great Wall of China it stretches for thousands of kilometres across northern China. Find the redundant word: ___",
            options: ["it", "of", "for"],
            answer: "it",
            explanation: "'The Great Wall of China it stretches' has a redundant pronoun 'it' after the long noun phrase.",
            fullExplanation: "The noun phrase 'The Great Wall of China' is the full subject. Inserting 'it' before the verb is a resumptive-pronoun error. The sentence should read 'The Great Wall of China stretches for thousands of kilometres'. 'Of', 'for', and 'across' are all correctly used.",
            source: "Swan, PEU (4e), §423",
            flavor: "history"
          },
          {
            id: "err-pron-11",
            stem: "The receptionist she handed me the keys and showed me to my room. Find the redundant word: ___",
            options: ["she", "The", "handed"],
            answer: "she",
            explanation: "'The receptionist she' has the redundant pronoun 'she' echoing the noun subject.",
            fullExplanation: "The noun phrase 'The receptionist' is the complete subject; the pronoun 'she' directly after it is redundant. English allows only one subject element per clause. 'The', 'handed', and 'showed' are all correctly used in the sentence.",
            source: "Swan, PEU (4e), §423",
            flavor: "social"
          },
          {
            id: "err-pron-12",
            stem: "A black hole it bends light so strongly that nothing, not even photons, can escape its gravity. Find the redundant word: ___",
            options: ["it", "so", "even"],
            answer: "it",
            explanation: "'A black hole it bends' has the redundant pronoun 'it' duplicating the subject.",
            fullExplanation: "The noun phrase 'A black hole' is the subject; adding the pronoun 'it' creates an illegal double subject. The sentence should read 'A black hole bends light so strongly'. 'So', 'even', and 'can' are all correctly used.",
            source: "Swan, PEU (4e), §423",
            flavor: "science"
          }
        ]
      },
      {
        id: "err-int",
        title: "Redundant intensifiers",
        tasks: [
          {
            id: "err-int-01",
            stem: "Mozart was very absolutely brilliant at composing music from an early age. Find the redundant word: ___",
            options: ["very", "absolutely", "brilliant"],
            answer: "very",
            explanation: "'Absolutely' is a maximiser that replaces 'very'; 'very' before 'absolutely' is redundant.",
            fullExplanation: "'Absolutely' is an extreme/maximising adverb used with adjectives like 'brilliant' instead of 'very'. Pairing 'very' with 'absolutely' is redundant because 'absolutely' already expresses the maximum degree. Use either 'very brilliant' or 'absolutely brilliant'. 'Early' is correctly used.",
            source: "Swan, PEU (4e), §18",
            flavor: "personalities"
          },
          {
            id: "err-int-02",
            stem: "The discovery of Tutankhamun's tomb in 1922 was completely totally unexpected by archaeologists. Find the redundant word: ___",
            options: ["completely", "totally", "unexpected"],
            answer: "completely",
            explanation: "'Completely totally' stacks two synonymous intensifiers; 'completely' is the redundant one.",
            fullExplanation: "'Completely' and 'totally' are both maximising adverbs with the same function. Placing both before 'unexpected' is redundant. Either 'completely unexpected' or 'totally unexpected' is sufficient. 'Unexpected' and 'discovery' are correctly used.",
            source: "Swan, PEU (4e), §18",
            flavor: "history"
          },
          {
            id: "err-int-03",
            stem: "The concert was really truly amazing, and the audience gave a standing ovation. Find the redundant word: ___",
            options: ["really", "truly", "amazing"],
            answer: "really",
            explanation: "'Really truly' pairs two equivalent boosters; 'really' is the redundant intensifier.",
            fullExplanation: "'Really' and 'truly' both intensify adjectives like 'amazing'. Using both together is a redundant stacking of degree adverbs. Either 'really amazing' or 'truly amazing' expresses the idea adequately. 'Amazing' and 'standing' are both correctly used.",
            source: "Swan, PEU (4e), §18",
            flavor: "social"
          },
          {
            id: "err-int-04",
            stem: "The temperature in the core of the Sun is extremely incredibly high, reaching millions of degrees. Find the redundant word: ___",
            options: ["extremely", "incredibly", "high"],
            answer: "extremely",
            explanation: "'Extremely incredibly' stacks two intensifiers; 'extremely' is redundant before 'incredibly'.",
            fullExplanation: "'Extremely' and 'incredibly' are both degree adverbs modifying 'high'. Only one is needed. 'Incredibly high' is the natural collocation; 'extremely' adds nothing and creates redundancy. 'High' and 'millions' are correctly used.",
            source: "Swan, PEU (4e), §18",
            flavor: "science"
          },
          {
            id: "err-int-05",
            stem: "Serena Williams is very utterly dedicated to her training and fitness routine. Find the redundant word: ___",
            options: ["very", "utterly", "dedicated"],
            answer: "very",
            explanation: "'Utterly' is a maximiser incompatible with 'very'; 'very' before 'utterly' is redundant.",
            fullExplanation: "'Utterly' functions as an absolute maximiser similar to 'absolutely' or 'completely', replacing the graded intensifier 'very'. Placing 'very' before 'utterly' is redundant. Use 'utterly dedicated' or 'very dedicated'. 'Dedicated' and 'fitness' are correctly used.",
            source: "Swan, PEU (4e), §18",
            flavor: "personalities"
          },
          {
            id: "err-int-06",
            stem: "The fall of the Roman Empire was deeply profoundly significant for the history of Europe. Find the redundant word: ___",
            options: ["deeply", "profoundly", "significant"],
            answer: "deeply",
            explanation: "'Deeply profoundly' stacks two synonymous intensifiers; 'deeply' is redundant before 'profoundly'.",
            fullExplanation: "'Deeply' and 'profoundly' both intensify 'significant' with the same meaning. Using both is pleonastic. Either 'deeply significant' or 'profoundly significant' is appropriate. 'Significant' and 'history' are correctly used.",
            source: "Swan, PEU (4e), §18",
            flavor: "history"
          },
          {
            id: "err-int-07",
            stem: "I was quite fairly surprised to hear that the office would be closing early on Friday. Find the redundant word: ___",
            options: ["quite", "fairly", "surprised"],
            answer: "quite",
            explanation: "'Quite fairly' stacks two similar scalar adverbs; 'quite' is redundant before 'fairly'.",
            fullExplanation: "'Quite' and 'fairly' both signal a moderate degree of an adjective. Using them together is redundant. 'Fairly surprised' or 'quite surprised' is sufficient. 'Surprised' and 'early' are correctly used in the sentence.",
            source: "Swan, PEU (4e), §18",
            flavor: "social"
          },
          {
            id: "err-int-08",
            stem: "Volcanoes can be highly extremely dangerous and must be monitored around the clock. Find the redundant word: ___",
            options: ["highly", "extremely", "dangerous"],
            answer: "highly",
            explanation: "'Highly extremely' stacks two intensifiers; 'highly' is redundant before 'extremely'.",
            fullExplanation: "'Highly' and 'extremely' are both intensifying adverbs. Used together before 'dangerous' they are redundant. 'Extremely dangerous' is the standard collocation; 'highly dangerous' is also acceptable, but combining both is unnecessary. 'Dangerous' and 'around' are correctly used.",
            source: "Swan, PEU (4e), §18",
            flavor: "science"
          },
          {
            id: "err-int-09",
            stem: "Leonardo da Vinci was most certainly undoubtedly the greatest polymath of the Renaissance. Find the redundant word: ___",
            options: ["most", "certainly", "undoubtedly"],
            answer: "most",
            explanation: "'Most certainly undoubtedly' contains three stacked adverbs; 'most' is the redundant intensifier.",
            fullExplanation: "'Certainly' and 'undoubtedly' already express the same high degree of confidence; adding 'most' before 'certainly' is an extra redundant layer. Either 'certainly the greatest' or 'undoubtedly the greatest' is sufficient. 'Greatest' is correctly used as a superlative.",
            source: "Swan, PEU (4e), §18",
            flavor: "personalities"
          },
          {
            id: "err-int-10",
            stem: "The invention of the steam engine was simply absolutely pivotal to the Industrial Revolution. Find the redundant word: ___",
            options: ["simply", "absolutely", "pivotal"],
            answer: "simply",
            explanation: "'Simply absolutely' pairs two incompatible boosters; 'simply' is redundant before 'absolutely'.",
            fullExplanation: "'Absolutely' is a maximising adverb for adjectives like 'pivotal'. 'Simply' as an intensifier belongs to a different register and overlaps in function. The combination 'simply absolutely' is redundant. 'Absolutely pivotal' stands alone. 'Pivotal' and 'invention' are correctly used.",
            source: "Swan, PEU (4e), §18",
            flavor: "history"
          },
          {
            id: "err-int-11",
            stem: "The project deadline is so very extremely tight that the team is working overtime. Find the redundant word: ___",
            options: ["very", "so", "extremely"],
            answer: "very",
            explanation: "'So very extremely' stacks three degree adverbs; 'very' in the middle is the most redundant.",
            fullExplanation: "'So extremely tight' already conveys high intensity; inserting 'very' between 'so' and 'extremely' adds nothing and over-stacks adverbs. 'So' is the head intensifier here, making 'very' redundant. 'So', 'extremely', and 'overtime' are all correctly retained.",
            source: "Swan, PEU (4e), §18",
            flavor: "social"
          },
          {
            id: "err-int-12",
            stem: "The deep ocean is totally completely dark below a depth of around one thousand metres. Find the redundant word: ___",
            options: ["totally", "completely", "below"],
            answer: "totally",
            explanation: "'Totally completely' stacks two synonymous maximisers; 'totally' is redundant before 'completely'.",
            fullExplanation: "'Totally' and 'completely' are both absolute degree adverbs modifying 'dark'. Using both is redundant; one is sufficient. 'Completely dark' is the more standard collocation in scientific prose. 'Below' and 'around' are correctly used as prepositions.",
            source: "Swan, PEU (4e), §18",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "word-two-sentences",
    title: "Word for Two Sentences",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "w2s-poly",
        title: "Polysemous words",
        tasks: [
          {
            id: "w2s-poly-01",
            stem: "1) The ___ of the river is very wide at this point near the sea.\n2) She opened her ___ to speak, but no words came out.",
            options: ["mouth", "bank", "edge"],
            answer: "mouth",
            explanation: "'Mouth' means the river's opening to the sea and also the human facial feature for speaking.",
            fullExplanation: "'Mouth' is polysemous: the mouth of a river is where it meets the sea, and the mouth on a face is the organ of speech. 'Bank' fits sentence 1 (riverbank) but not sentence 2. 'Edge' and 'face' fit neither sentence naturally as a single shared word.",
            source: "Swan, PEU (4e), §595",
            flavor: "personalities"
          },
          {
            id: "w2s-poly-02",
            stem: "1) The soldiers were ordered to ___ the enemy's supply lines during the night raid.\n2) He decided to ___ several scenes from his novel before sending it to the editor.",
            options: ["cut", "destroy", "block"],
            answer: "cut",
            explanation: "'Cut' means to sever supply lines militarily and also to delete or remove text.",
            fullExplanation: "'Cut' is polysemous: to cut supply lines means to sever them tactically, and to cut scenes means to delete or remove them. 'Destroy' works for sentence 1 but is too strong for sentence 2. 'Block' fits sentence 1 partially but not sentence 2. 'Remove' fits sentence 2 but not the military phrasing of sentence 1.",
            source: "Swan, PEU (4e), §595",
            flavor: "history"
          },
          {
            id: "w2s-poly-03",
            stem: "1) The waiter brought the ___ at the end of the meal and everyone split it equally.\n2) Parliament passed a new ___ to regulate the use of social media platforms.",
            options: ["bill", "cheque", "law"],
            answer: "bill",
            explanation: "'Bill' means a restaurant payment document and also a proposed law in parliament.",
            fullExplanation: "'Bill' is polysemous: a restaurant bill is the document showing what is owed, and a parliamentary bill is a proposed piece of legislation. 'Cheque' fits sentence 1 loosely but not sentence 2. 'Law' fits sentence 2 but not sentence 1. 'Note' fits neither sentence in the intended role.",
            source: "Swan, PEU (4e), §595",
            flavor: "social"
          },
          {
            id: "w2s-poly-04",
            stem: "1) The ___ of the experiment confirmed that the new vaccine was highly effective.\n2) She received her ___ in the post and was delighted to have passed the exam.",
            options: ["result", "proof", "data"],
            answer: "result",
            explanation: "'Result' applies to both experimental outcomes and examination grades.",
            fullExplanation: "'Result' is polysemous: the result of an experiment is its outcome or finding, and an exam result is the mark or grade. 'Proof' fits sentence 1 marginally but not sentence 2 idiomatically. 'Data' belongs to sentence 1 but not sentence 2. 'Score' fits sentence 2 but not sentence 1 naturally.",
            source: "Swan, PEU (4e), §595",
            flavor: "science"
          },
          {
            id: "w2s-poly-05",
            stem: "1) Beethoven's Ninth ___ was performed for the first time in Vienna in 1824.\n2) The school orchestra played a short ___ at the beginning of the graduation ceremony.",
            options: ["symphony", "concert", "opera"],
            answer: "symphony",
            explanation: "'Symphony' refers to a large orchestral composition and also a type of orchestral performance.",
            fullExplanation: "Beethoven's Ninth Symphony is a famous orchestral composition. 'A symphony' can also describe an orchestral performance or piece played by an orchestra. 'Concert' fits sentence 2 (concert piece) but not sentence 1 as a composition type. 'Opera' and 'recital' do not fit both sentences with the same word.",
            source: "Swan, PEU (4e), §595",
            flavor: "personalities"
          },
          {
            id: "w2s-poly-06",
            stem: "1) The Roman ___ stretched from Britain in the north to Egypt in the south.\n2) He built a business ___ that expanded to three continents within a decade.",
            options: ["empire", "state", "colony"],
            answer: "empire",
            explanation: "'Empire' denotes both a political territorial domain and a large business organisation.",
            fullExplanation: "'Empire' is polysemous: the Roman Empire was a political entity controlling vast territory, and a business empire is a large commercial organisation. 'State' fits neither sentence as naturally. 'Colony' fits sentence 1 partially but not sentence 2. 'Domain' can fit sentence 2 loosely but is awkward for sentence 1.",
            source: "Swan, PEU (4e), §595",
            flavor: "history"
          },
          {
            id: "w2s-poly-07",
            stem: "1) She gave a warm ___ to all the guests who arrived at the dinner party.\n2) The hotel ___ desk is open twenty-four hours a day for guests' convenience.",
            options: ["reception", "welcome", "greeting"],
            answer: "reception",
            explanation: "'Reception' means both a welcoming response and a front-desk area in a hotel.",
            fullExplanation: "'Reception' is polysemous: a warm reception means a welcoming response, and a hotel reception is the front desk where guests check in. 'Welcome' fits sentence 1 but not sentence 2. 'Greeting' fits sentence 1 but not sentence 2. 'Entrance' fits neither sentence in the same role.",
            source: "Swan, PEU (4e), §595",
            flavor: "social"
          },
          {
            id: "w2s-poly-08",
            stem: "1) The scientist examined a thin ___ of ice from Antarctica to study past climates.\n2) A ___ of cloud covered the mountain peak as the hikers reached the summit.",
            options: ["layer", "sheet", "cover"],
            answer: "layer",
            explanation: "'Layer' means a stratum of ice and also a horizontal level of cloud.",
            fullExplanation: "'Layer' is polysemous: a layer of ice is a thin stratum used in climate research, and a layer of cloud is a horizontal band in the atmosphere. 'Sheet' fits sentence 1 (sheet of ice) but not sentence 2 naturally. 'Cover' fits sentence 2 loosely but not sentence 1. 'Band' does not fit sentence 1.",
            source: "Swan, PEU (4e), §595",
            flavor: "science"
          },
          {
            id: "w2s-poly-09",
            stem: "1) The detective had a sharp ___ for detail and noticed every small clue at the crime scene.\n2) She trained her ___ on the distant peak through the telescope for several minutes.",
            options: ["eye", "mind", "focus"],
            answer: "eye",
            explanation: "'Eye' means both an ability to notice detail and the physical organ used to look through a telescope.",
            fullExplanation: "'Eye' is polysemous: 'a sharp eye for detail' means the ability to notice things closely, and 'trained her eye on' means she directed her gaze through the telescope. 'Mind' fits sentence 1 partially but not sentence 2. 'Focus' and 'lens' do not replace 'eye' in both sentences as a single shared noun.",
            source: "Swan, PEU (4e), §595",
            flavor: "personalities"
          },
          {
            id: "w2s-poly-10",
            stem: "1) The Allies launched a major ___ on the beaches of Normandy in June 1944.\n2) The company's marketing ___ for the new product increased sales by forty percent.",
            options: ["campaign", "attack", "strategy"],
            answer: "campaign",
            explanation: "'Campaign' denotes both a military operation and a planned marketing initiative.",
            fullExplanation: "'Campaign' is polysemous: a military campaign is a series of operations with a strategic objective, and a marketing campaign is a coordinated promotional effort. 'Attack' fits sentence 1 but not sentence 2. 'Strategy' fits sentence 2 but not sentence 1 as a count noun in this context. 'Mission' fits sentence 1 marginally but not sentence 2.",
            source: "Swan, PEU (4e), §595",
            flavor: "history"
          },
          {
            id: "w2s-poly-11",
            stem: "1) The landlord agreed to ___ the broken heating system before winter arrived.\n2) She spent the weekend trying to ___ her relationship with her estranged sister.",
            options: ["fix", "improve", "solve"],
            answer: "fix",
            explanation: "'Fix' means to repair a physical system and also to mend a damaged personal relationship.",
            fullExplanation: "'Fix' is polysemous: to fix a heating system means to repair it, and to fix a relationship informally means to restore it to a better state. 'Improve' fits sentence 2 but is less natural in sentence 1 for a broken system. 'Solve' and 'handle' fit neither sentence as precisely as 'fix'.",
            source: "Swan, PEU (4e), §595",
            flavor: "social"
          },
          {
            id: "w2s-poly-12",
            stem: "1) The gravitational ___ of a massive star can bend light passing near it.\n2) He had a powerful ___ on younger colleagues and inspired many to pursue research.",
            options: ["pull", "force", "push"],
            answer: "pull",
            explanation: "'Pull' means gravitational attraction and also personal or magnetic influence over others.",
            fullExplanation: "'Pull' is polysemous: the gravitational pull of a star is the attractive force it exerts, and a 'pull' on colleagues means personal influence or charisma. 'Force' fits sentence 1 physically but not sentence 2 idiomatically. 'Push' and 'draw' do not fit both sentences with the same word.",
            source: "Swan, PEU (4e), §595",
            flavor: "science"
          }
        ]
      },
      {
        id: "w2s-particle",
        title: "Particle-noun homonyms",
        tasks: [
          {
            id: "w2s-particle-01",
            stem: "1) Marie Curie refused to give ___ her research even when funding was almost gone.\n2) The old generator finally gave ___ after forty years of continuous operation.",
            options: ["up", "off", "away"],
            answer: "up",
            explanation: "'Give up' means to abandon an effort and also to stop functioning (of a machine).",
            fullExplanation: "'Give up' is polyfunctional: to give up research means to abandon it, and for a machine to give up means to stop working. 'Give off' means to emit something. 'Give away' means to donate or reveal. 'Give over' (informal) means to stop, but is not standard for a machine failing.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "personalities"
          },
          {
            id: "w2s-particle-02",
            stem: "1) The Roman legions set ___ from the city at dawn to begin their long march north.\n2) The loud explosion set ___ car alarms all along the street.",
            options: ["off", "up", "out"],
            answer: "off",
            explanation: "'Set off' means to begin a journey and also to trigger something.",
            fullExplanation: "'Set off' is polyfunctional: to set off on a march means to depart, and to set off an alarm means to trigger it. 'Set up' means to establish something. 'Set out' could work for sentence 1 (depart) but not sentence 2 (trigger). 'Set away' is not a standard phrasal verb.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "history"
          },
          {
            id: "w2s-particle-03",
            stem: "1) The manager asked us to put ___ the meeting until the following Monday.\n2) The loud music really put ___ the guests who were trying to have a conversation.",
            options: ["off", "away", "back"],
            answer: "off",
            explanation: "'Put off' means to postpone and also to make someone feel uncomfortable or reluctant.",
            fullExplanation: "'Put off' is polyfunctional: to put off a meeting means to postpone it, and to put someone off means to make them feel discouraged or uncomfortable. 'Put away' means to store. 'Put back' also means to postpone but is less idiomatic for discomfort. 'Put out' means to extinguish or inconvenience.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "social"
          },
          {
            id: "w2s-particle-04",
            stem: "1) Scientists broke ___ the complex polymer into its basic chemical components.\n2) The ceasefire talks broke ___ and both sides returned to open conflict.",
            options: ["down", "up", "off"],
            answer: "down",
            explanation: "'Break down' means to decompose a substance and also to fail or collapse (of talks).",
            fullExplanation: "'Break down' is polyfunctional: to break down a polymer means to decompose it into smaller units, and for talks to break down means to fail. 'Break up' can mean to split into pieces but less naturally describes talks failing. 'Break off' means to stop suddenly. 'Break apart' is not a standard single-particle phrasal verb.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "science"
          },
          {
            id: "w2s-particle-05",
            stem: "1) Agatha Christie came ___ the plot idea for her first novel quite by accident.\n2) The hikers came ___ a ruined castle while walking through the forest.",
            options: ["across", "up", "over"],
            answer: "across",
            explanation: "'Come across' means to encounter or discover something unexpectedly, fitting both sentences.",
            fullExplanation: "'Come across' is polyfunctional: to come across an idea means to think of or encounter it, and to come across a castle means to find it unexpectedly. 'Come up with' works for sentence 1 but requires 'with', not just 'up'. 'Come over' and 'come through' do not fit both sentences with the same particle.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "personalities"
          },
          {
            id: "w2s-particle-06",
            stem: "1) The general called ___ the attack after learning that reinforcements would not arrive.\n2) The football match was called ___ because of a severe thunderstorm.",
            options: ["off", "up", "back"],
            answer: "off",
            explanation: "'Call off' means to cancel a planned action, fitting both the military attack and the sports match.",
            fullExplanation: "'Call off' means to cancel something: calling off an attack means cancelling it, and calling off a match means cancelling it due to bad conditions. 'Call up' means to summon or telephone. 'Call back' means to return a call. 'Call away' means to summon someone elsewhere — none fit both sentences.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "history"
          },
          {
            id: "w2s-particle-07",
            stem: "1) Could you turn ___ the television? I am trying to concentrate on my reading.\n2) The interviewer turned ___ every candidate who lacked the required qualifications.",
            options: ["down", "off", "away"],
            answer: "down",
            explanation: "'Turn down' means to reduce volume and also to reject a request or person.",
            fullExplanation: "'Turn down' is polyfunctional: to turn down the TV means to lower its volume, and to turn down candidates means to reject them. 'Turn off' means to switch off completely, not lower the volume. 'Turn away' means to send someone away without serving them. 'Turn back' means to reverse direction.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "social"
          },
          {
            id: "w2s-particle-08",
            stem: "1) The burning chemical reaction gives ___ a large amount of heat and light.\n2) A rotten egg gives ___ a very unpleasant smell that is difficult to ignore.",
            options: ["off", "out", "up"],
            answer: "off",
            explanation: "'Give off' means to emit heat, light, or smell, fitting both sentences.",
            fullExplanation: "'Give off' means to emit or produce (heat, light, or smell). It fits both: a reaction gives off heat and light, and a rotten egg gives off a smell. 'Give out' can also mean to emit but more often means to run out or distribute. 'Give up' means to abandon. 'Give away' means to donate or reveal.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "science"
          },
          {
            id: "w2s-particle-09",
            stem: "1) Nelson Mandela drew ___ his own suffering to find the strength to forgive his captors.\n2) The new school curriculum draws ___ recent research from psychology and linguistics.",
            options: ["on", "up", "away"],
            answer: "on",
            explanation: "'Draw on' means to use a resource or experience as a basis, fitting both sentences.",
            fullExplanation: "'Draw on' is polyfunctional: to draw on suffering or experience means to use it as a resource, and a curriculum that draws on research uses that research as its foundation. 'Draw up' means to prepare a document. 'Draw away' means to move away. 'Draw over' is not a standard phrasal verb.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "personalities"
          },
          {
            id: "w2s-particle-10",
            stem: "1) The peace conference broke ___ into separate working groups after a major disagreement.\n2) The engaged couple decided to break ___ after realising they had very different values.",
            options: ["up", "down", "off"],
            answer: "up",
            explanation: "'Break up' means to divide into smaller groups and also to end a relationship or gathering.",
            fullExplanation: "'Break up' is polyfunctional: a conference breaks up into smaller groups meaning it divides, and a couple breaking up means ending their relationship. 'Break down' means to fail or decompose. 'Break off' means to stop or snap something. 'Break apart' is not a standard single-particle phrasal verb.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "history"
          },
          {
            id: "w2s-particle-11",
            stem: "1) The taxi pulled ___ at the entrance to the hotel and the passengers stepped out.\n2) She pulled ___ an outstanding presentation and impressed all the senior managers.",
            options: ["off", "up", "out"],
            answer: "off",
            explanation: "'Pull off' means to stop briefly at the roadside and also to succeed at something difficult.",
            fullExplanation: "'Pull off' is polyfunctional: a vehicle pulls off (at an entrance) meaning it stops briefly, and to pull off a presentation means to succeed at something challenging. 'Pull up' also means to stop a vehicle but does not fit sentence 2. 'Pull out' means to exit or withdraw. 'Pull over' means to stop at the roadside but does not fit sentence 2.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "social"
          },
          {
            id: "w2s-particle-12",
            stem: "1) The space probe carried ___ a series of experiments to measure cosmic radiation.\n2) The surgeon carried ___ the complex operation with remarkable skill and precision.",
            options: ["out", "on", "off"],
            answer: "out",
            explanation: "'Carry out' means to perform or execute a task, fitting both scientific experiments and surgical procedures.",
            fullExplanation: "'Carry out' is polyfunctional: to carry out experiments means to perform them, and to carry out an operation means to perform it. 'Carry on' means to continue. 'Carry off' means to remove by force or to succeed despite difficulty. 'Carry through' means to complete something despite obstacles.",
            source: "Murphy, EGU (4e), Unit 135",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "error-id",
    title: "Error Identification",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "ei-verb",
        title: "Wrong verb form",
        tasks: [
          {
            id: "ei-verb-01",
            stem: "Marie Curie (A) has dedicated her entire life to science and discovered two new elements (B) before she (C) died in (D) 1934.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Has dedicated' is wrong with a closed past timeframe; Past Simple 'dedicated' is required.",
            fullExplanation: "Present perfect cannot be used when the time frame is closed (Curie's life ended in 1934). Past Simple 'dedicated' is correct. Parts (B) 'before she', (C) 'died in', and (D) '1934' are all grammatically correct.",
            source: "Murphy, EGU (4e), Unit 7",
            flavor: "personalities"
          },
          {
            id: "ei-verb-02",
            stem: "The First World War (A) had begun in 1914, (B) triggered by the assassination of Archduke Franz Ferdinand and (C) a chain of (D) military alliances.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Had begun' is wrong for a standalone historical fact; Past Simple 'began' is needed.",
            fullExplanation: "Past Perfect describes an event completed before another past event. As a standalone historical statement with no prior reference point, Past Simple 'began' is correct. Parts (B), (C), and (D) are all grammatically correct.",
            source: "Murphy, EGU (4e), Unit 15",
            flavor: "history"
          },
          {
            id: "ei-verb-03",
            stem: "My colleague (A) has finished (B) the report yesterday and (C) sent it straight (D) to the manager.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Has finished' is wrong with 'yesterday'; Past Simple 'finished' is required.",
            fullExplanation: "Present perfect cannot co-occur with definite past time adverbials like 'yesterday'. The correct form is 'finished' (Past Simple). Parts (B) 'the report yesterday', (C) 'sent it straight', and (D) 'to the manager' are all correct.",
            source: "Murphy, EGU (4e), Unit 7",
            flavor: "social"
          },
          {
            id: "ei-verb-04",
            stem: "Water (A) is consisting (B) of hydrogen and oxygen, two of (C) the most abundant elements (D) in the universe.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Is consisting' is wrong; stative 'consist' does not take a continuous form.",
            fullExplanation: "Stative verbs such as 'consist', 'contain', and 'belong' are never used in progressive tenses. The correct form is 'consists'. Parts (B) 'of hydrogen and oxygen', (C) 'the most abundant elements', and (D) 'in the universe' are all correct.",
            source: "Murphy, EGU (4e), Unit 3",
            flavor: "science"
          },
          {
            id: "ei-verb-05",
            stem: "Agatha Christie (A) wrote over sixty novels, many of which were adapted into films after she (B) has retired (C) from (D) public life.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Has retired' is wrong in a past-time clause; Past Simple 'retired' is required.",
            fullExplanation: "The clause refers to a completed past event (Christie's retirement), so Past Simple 'retired' is correct. Present perfect 'has retired' cannot anchor to a closed past reference point. Parts (A) 'wrote', (C) 'from', and (D) 'public life' are all correct.",
            source: "Murphy, EGU (4e), Unit 7",
            flavor: "personalities"
          },
          {
            id: "ei-verb-06",
            stem: "When the Berlin Wall (A) fell in 1989, thousands of people (B) was celebrating (C) in the streets (D) on both sides.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Was celebrating' is wrong; plural 'thousands of people' requires 'were celebrating'.",
            fullExplanation: "The subject 'thousands of people' is plural, so the auxiliary must also be plural: 'were celebrating'. 'Was' is only correct with singular subjects. Parts (A) 'fell in 1989', (C) 'in the streets', and (D) 'on both sides' are all correct.",
            source: "Murphy, EGU (4e), Unit 11",
            flavor: "history"
          },
          {
            id: "ei-verb-07",
            stem: "The manager (A) was explaining the new policy (B) when his phone (C) suddenly (D) had rung.",
            options: ["A", "B", "C", "D"],
            answer: "D",
            explanation: "'Had rung' is wrong; a sudden interruption uses Past Simple 'rang'.",
            fullExplanation: "When a Past Continuous action is interrupted, the interrupting verb uses Past Simple. 'Rang' is correct; 'had rung' (Past Perfect) implies the phone rang before the explanation began, which contradicts the meaning. Parts (A) 'was explaining', (B) 'when his phone', and (C) 'suddenly' are all correct.",
            source: "Murphy, EGU (4e), Unit 14",
            flavor: "social"
          },
          {
            id: "ei-verb-08",
            stem: "Light (A) travels at 300,000 km per second, meaning it (B) was reaching (C) the Moon (D) in just over a second.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Was reaching' is wrong; a permanent scientific fact needs Present Simple 'reaches'.",
            fullExplanation: "Universal scientific laws use Present Simple. 'Was reaching' incorrectly implies a past or temporary action. The correct form is 'reaches'. Parts (A) 'travels', (C) 'the Moon', and (D) 'in just over a second' are all correct.",
            source: "Murphy, EGU (4e), Unit 1",
            flavor: "science"
          },
          {
            id: "ei-verb-09",
            stem: "Nikola Tesla (A) invented many devices, but he never (B) had received (C) the recognition (D) he deserved during his lifetime.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Had received' (Past Perfect) is wrong here; Past Simple 'received' is correct.",
            fullExplanation: "Past Perfect requires a prior reference point in the past, which this sentence does not provide. Past Simple 'received' is the correct form. Parts (A) 'invented', (C) 'the recognition', and (D) 'he deserved' are all correct.",
            source: "Murphy, EGU (4e), Unit 15",
            flavor: "personalities"
          },
          {
            id: "ei-verb-10",
            stem: "By 1969, NASA (A) has successfully (B) landed astronauts on (C) the Moon (D) for the first time.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Has successfully' (Present Perfect) is wrong; 'by 1969' requires Past Perfect 'had'.",
            fullExplanation: "'By [past date]' signals completion before a past point, requiring Past Perfect 'had'. Present perfect 'has' refers to completion relative to now, not to 1969. Parts (B) 'landed astronauts on', (C) 'the Moon', and (D) 'for the first time' are all correct.",
            source: "Murphy, EGU (4e), Unit 15",
            flavor: "history"
          },
          {
            id: "ei-verb-11",
            stem: "Our teacher always gives us homework on Fridays, but last week (A) she is (B) completely (C) forgetting to (D) set any.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'She is' introduces Present tense; 'last week' requires Past Simple 'she forgot'.",
            fullExplanation: "'Last week' anchors the event in the past, so Past Simple is required. 'She is forgetting' uses Present Continuous, which cannot describe a completed past event. The correct form is 'she forgot'. Parts (B) 'completely', (C) 'forgetting to', and (D) 'set any' are otherwise correct.",
            source: "Murphy, EGU (4e), Unit 5",
            flavor: "social"
          },
          {
            id: "ei-verb-12",
            stem: "Bees communicate by dancing; each dance tells other bees where (A) the nectar (B) was located (C) within (D) the surrounding area.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Was located' (Past Passive) is wrong; a current biological fact uses Present Passive 'is located'.",
            fullExplanation: "The sentence describes a general, ongoing biological behaviour, so the verb should be Present Passive 'is located'. 'Was located' incorrectly shifts the meaning to the past. Parts (A) 'the nectar', (C) 'within', and (D) 'the surrounding area' are all correct.",
            source: "Murphy, EGU (4e), Unit 1",
            flavor: "science"
          }
        ]
      },
      {
        id: "ei-prep",
        title: "Wrong preposition",
        tasks: [
          {
            id: "ei-prep-01",
            stem: "Ada Lovelace is widely regarded (A) as the world's first programmer; she collaborated (B) to Charles Babbage (C) on his (D) Analytical Engine.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Collaborated to' is wrong; the correct collocation is 'collaborated with'.",
            fullExplanation: "The verb 'collaborate' takes the preposition 'with', not 'to'. 'With' signals joint effort. Parts (A) 'as the world's first programmer', (C) 'on his', and (D) 'Analytical Engine' are all correct.",
            source: "Swan, PEU (4e), §460",
            flavor: "personalities"
          },
          {
            id: "ei-prep-02",
            stem: "The ancient Egyptians believed in life (A) after death and buried their pharaohs (B) inside of (C) elaborate tombs filled (D) with treasures.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Inside of' is wrong; the correct preposition is 'inside' alone.",
            fullExplanation: "In standard English 'inside' functions as a preposition without 'of'. 'Inside elaborate tombs' is correct. Parts (A) 'after death', (C) 'elaborate tombs filled', and (D) 'with treasures' are all correct.",
            source: "Swan, PEU (4e), §263",
            flavor: "history"
          },
          {
            id: "ei-prep-03",
            stem: "My sister apologised (A) about being late and explained that (B) she had been (C) stuck in traffic (D) for over an hour.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Apologised about' is wrong; the correct collocation is 'apologised for'.",
            fullExplanation: "The verb 'apologise' takes the preposition 'for', not 'about'. 'Apologised for being late' is correct. Parts (B) 'she had been', (C) 'stuck in traffic', and (D) 'for over an hour' are all correct.",
            source: "Swan, PEU (4e), §460",
            flavor: "social"
          },
          {
            id: "ei-prep-04",
            stem: "Earthquakes occur when tectonic plates slide (A) against one another (B) along fault lines situated (C) deep beneath (D) of the Earth's surface.",
            options: ["A", "B", "C", "D"],
            answer: "D",
            explanation: "'Beneath of' is wrong; 'beneath' is a standalone preposition and does not take 'of'.",
            fullExplanation: "'Beneath' stands alone as a preposition before a noun phrase. Adding 'of' is a learner error. 'Beneath the Earth's surface' is correct. Parts (A) 'against one another', (B) 'along fault lines', and (C) 'deep beneath' are all correct.",
            source: "Swan, PEU (4e), §263",
            flavor: "science"
          },
          {
            id: "ei-prep-05",
            stem: "Muhammad Ali was famous (A) for his lightning speed and often boasted (B) about his skill, claiming he was the greatest (C) fighter (D) at the world.",
            options: ["A", "B", "C", "D"],
            answer: "D",
            explanation: "'At the world' is wrong; the correct expression is 'in the world'.",
            fullExplanation: "Superlatives referring to global scope use 'in the world', not 'at the world'. Parts (A) 'for his lightning speed', (B) 'about his skill', and (C) 'fighter' are all correct.",
            source: "Swan, PEU (4e), §461",
            flavor: "personalities"
          },
          {
            id: "ei-prep-06",
            stem: "The French Revolution began in 1789 and resulted (A) to the execution (B) of King Louis XVI (C) and the eventual rise (D) of Napoleon Bonaparte.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Resulted to' is wrong; the correct collocation is 'resulted in'.",
            fullExplanation: "The verb 'result' always collocates with 'in': 'resulted in the execution'. 'Resulted to' is a common learner error. Parts (B) 'of King Louis XVI', (C) 'and the eventual rise', and (D) 'of Napoleon Bonaparte' are all correct.",
            source: "Swan, PEU (4e), §460",
            flavor: "history"
          },
          {
            id: "ei-prep-07",
            stem: "The children have been talking about the school trip (A) since weeks and are (B) looking forward (C) to every activity (D) on the programme.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Since weeks' is wrong; duration without a start point uses 'for': 'for weeks'.",
            fullExplanation: "'Since' is used with a point in time ('since Monday'). 'For' is used with a period of time ('for weeks'). Parts (B) 'looking forward', (C) 'to every activity', and (D) 'on the programme' are all correct.",
            source: "Murphy, EGU (4e), Unit 13",
            flavor: "social"
          },
          {
            id: "ei-prep-08",
            stem: "The ozone layer protects life on Earth by absorbing ultraviolet radiation, which is harmful (A) for living organisms (B) and can (C) cause (D) skin damage.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Harmful for' is wrong; the correct collocation is 'harmful to'.",
            fullExplanation: "The adjective 'harmful' collocates with 'to', not 'for'. 'Harmful to living organisms' is correct. Parts (B) 'and can', (C) 'cause', and (D) 'skin damage' are all correct.",
            source: "Swan, PEU (4e), §16",
            flavor: "science"
          },
          {
            id: "ei-prep-09",
            stem: "Leonardo da Vinci was interested (A) on painting, sculpture, (B) and architecture, as well as (C) many branches (D) of natural science.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Interested on' is wrong; the correct collocation is 'interested in'.",
            fullExplanation: "The adjective 'interested' always collocates with 'in'. 'Interested on' is a classic learner error. Parts (B) 'and architecture', (C) 'many branches', and (D) 'of natural science' are all correct.",
            source: "Swan, PEU (4e), §16",
            flavor: "personalities"
          },
          {
            id: "ei-prep-10",
            stem: "Allied forces landed (A) at Normandy (B) on 6 June 1944 in an operation (C) known as (D) the D-Day landings.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Landed at Normandy' is wrong; landing in a region uses 'in': 'landed in Normandy'.",
            fullExplanation: "For regions and territories, 'in' is the correct preposition. 'At' marks a specific point such as a harbour. 'Landed in Normandy' is correct. Parts (B) 'on 6 June 1944', (C) 'known as', and (D) 'the D-Day landings' are all correct.",
            source: "Murphy, EGU (4e), Unit 110",
            flavor: "history"
          },
          {
            id: "ei-prep-11",
            stem: "My brother is very good (A) at cooking and often prepares (B) a special dinner (C) for the family (D) in weekends.",
            options: ["A", "B", "C", "D"],
            answer: "D",
            explanation: "'In weekends' is wrong; the correct preposition for recurring day-parts is 'on': 'on weekends'.",
            fullExplanation: "Days and recurring weekly periods take 'on': 'on weekends'. 'In' is used for months, years, and seasons. Parts (A) 'at cooking', (B) 'a special dinner', and (C) 'for the family' are all correct.",
            source: "Murphy, EGU (4e), Unit 108",
            flavor: "social"
          },
          {
            id: "ei-prep-12",
            stem: "Volcanoes erupt when molten rock forces (A) its way through (B) of the Earth's crust (C) and emerges (D) at the surface.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Through of the Earth's crust' is wrong; 'through' alone is the correct preposition.",
            fullExplanation: "'Through' is a preposition and does not take 'of' before a noun. 'Forces its way through the Earth's crust' is correct. Parts (A) 'its way through', (C) 'and emerges', and (D) 'at the surface' are all correct.",
            source: "Swan, PEU (4e), §263",
            flavor: "science"
          }
        ]
      },
      {
        id: "ei-extra",
        title: "Redundant word",
        tasks: [
          {
            id: "ei-extra-01",
            stem: "Albert Einstein (A) he (B) developed the theory (C) of general relativity (D) in 1915.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "The pronoun 'he' after 'Albert Einstein' is a redundant resumptive pronoun.",
            fullExplanation: "In English, a sentence cannot have both a noun subject and a resumptive pronoun. 'Albert Einstein developed…' is correct; 'he' must be removed. Parts (B) 'developed the theory', (C) 'of general relativity', and (D) 'in 1915' are all correct.",
            source: "Swan, PEU (4e), §423",
            flavor: "personalities"
          },
          {
            id: "ei-extra-02",
            stem: "The Great Wall of China (A) it (B) was built over many centuries (C) to protect (D) the northern borders.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "The pronoun 'it' after 'The Great Wall of China' is a redundant resumptive pronoun.",
            fullExplanation: "English does not permit a noun subject and a resumptive pronoun in the same clause. 'The Great Wall … was built…' is correct; 'it' must be deleted. Parts (B) 'was built over many centuries', (C) 'to protect', and (D) 'the northern borders' are all correct.",
            source: "Swan, PEU (4e), §423",
            flavor: "history"
          },
          {
            id: "ei-extra-03",
            stem: "She (A) didn't (B) hardly know (C) what to say (D) when the boss praised her work.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Didn't' is redundant; 'hardly' is already negative, making 'didn't' a double negative.",
            fullExplanation: "'Hardly' is a negative adverb, so combining it with 'didn't' creates an ungrammatical double negative. The correct form is 'She hardly knew…'. Parts (B) 'hardly know', (C) 'what to say', and (D) 'when the boss praised her work' are all correct without the extra negative.",
            source: "Swan, PEU (4e), §375",
            flavor: "social"
          },
          {
            id: "ei-extra-04",
            stem: "The reason why the sky is blue (A) is because (B) of the way (C) light it (D) scatters in the atmosphere.",
            options: ["A", "B", "C", "D"],
            answer: "C",
            explanation: "The pronoun 'it' after 'light' is redundant; 'light' is already the subject of the clause.",
            fullExplanation: "In the relative clause 'the way light scatters', 'light' is the subject and 'it' repeats it needlessly. 'The way light scatters' is correct. Parts (A) 'is because', (B) 'of the way', and (D) 'scatters in the atmosphere' are all correct.",
            source: "Swan, PEU (4e), §423",
            flavor: "science"
          },
          {
            id: "ei-extra-05",
            stem: "Pablo Picasso returned (A) back (B) to Barcelona (C) after spending several (D) years in Paris.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Back' after 'returned' is redundant; 'return' already means 'go back'.",
            fullExplanation: "'Return' inherently means going back to a place, so 'back' adds nothing. The correct form is 'returned to Barcelona'. Parts (B) 'to Barcelona', (C) 'after spending several', and (D) 'years in Paris' are all correct.",
            source: "Swan, PEU (4e), §131",
            flavor: "personalities"
          },
          {
            id: "ei-extra-06",
            stem: "The Magna Carta is widely (A) regarded as one of (B) the most (C) important ever (D) legal documents in history.",
            options: ["A", "B", "C", "D"],
            answer: "C",
            explanation: "'Ever' is redundant alongside 'most'; superlatives already cover all time, making 'ever' unnecessary.",
            fullExplanation: "The phrase 'the most important ever legal documents' is awkward and redundant because 'most important in history' already covers all instances. 'Ever' adds nothing and disrupts the adjective order. The correct form is 'the most important legal documents in history'. Parts (A) 'regarded as one of', (B) 'the most', and (D) 'legal documents in history' are all correct.",
            source: "Swan, PEU (4e), §131",
            flavor: "history"
          },
          {
            id: "ei-extra-07",
            stem: "Could you (A) please repeat (B) again (C) what you said? I (D) didn't hear you clearly.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Again' is redundant; 'repeat' already means 'say again'.",
            fullExplanation: "The verb 'repeat' means 'do or say again', so adding 'again' is redundant. The correct form is 'please repeat what you said'. Parts (A) 'please repeat', (C) 'what you said?', and (D) 'didn't hear you clearly' are all correct.",
            source: "Swan, PEU (4e), §131",
            flavor: "social"
          },
          {
            id: "ei-extra-08",
            stem: "Each (A) every (B) cell in the human body (C) contains a complete (D) copy of the organism's genetic information.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Every' after 'each' is redundant; only one of 'each' or 'every' should be used.",
            fullExplanation: "'Each' and 'every' are near-synonymous determiners and cannot be combined. The correct form is either 'Each cell…' or 'Every cell…'. The redundant 'every' falls in segment (A). Parts (B) 'cell in the human body', (C) 'contains a complete', and (D) 'copy of the organism's genetic information' are all correct.",
            source: "Swan, PEU (4e), §184",
            flavor: "science"
          },
          {
            id: "ei-extra-09",
            stem: "Charles Darwin (A) he (B) spent five years aboard HMS Beagle, (C) observing wildlife that would later inspire (D) his theory of evolution.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "The pronoun 'he' after 'Charles Darwin' is a redundant resumptive pronoun.",
            fullExplanation: "In English, a sentence cannot have both a full noun subject and a resumptive pronoun. 'Darwin spent…' is correct. The redundant 'he' falls in segment (A). Parts (B) 'spent five years', (C) 'observing wildlife', and (D) 'his theory of evolution' are all correct.",
            source: "Swan, PEU (4e), §423",
            flavor: "personalities"
          },
          {
            id: "ei-extra-10",
            stem: "During the Industrial Revolution, workers (A) often had to (B) to work (C) twelve-hour shifts in (D) dangerous factories.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'To to work' contains a doubled infinitive marker 'to'; only one 'to' is needed.",
            fullExplanation: "'Had to work' is the correct semi-modal form. The second 'to' in 'to to work' is a redundant repetition of the infinitive marker. Parts (A) 'often had to', (C) 'twelve-hour shifts in', and (D) 'dangerous factories' are all correct.",
            source: "Swan, PEU (4e), §307",
            flavor: "history"
          },
          {
            id: "ei-extra-11",
            stem: "The couple decided to (A) advance (B) plan their wedding (C) well in advance so that (D) all the guests could attend.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Advance' before 'plan' is redundant because 'well in advance' later already expresses the idea.",
            fullExplanation: "The phrase 'plan … well in advance' already conveys the concept of advance planning. The word 'advance' in segment (A) duplicates the meaning of 'in advance' in segment (C) and is redundant. The correct form is 'decided to plan their wedding well in advance'. Parts (B) 'plan their wedding', (C) 'well in advance', and (D) 'all the guests could attend' are all correct.",
            source: "Swan, PEU (4e), §131",
            flavor: "social"
          },
          {
            id: "ei-extra-12",
            stem: "Satellites orbit (A) around (B) the Earth at various altitudes, (C) transmitting data (D) back to ground stations.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Around' is redundant after 'orbit'; 'orbit' already means 'move in a circular path around'.",
            fullExplanation: "The verb 'orbit' inherently means 'revolve around', so adding 'around' is redundant. 'Satellites orbit the Earth' is correct. The redundant 'around' falls in segment (A). Parts (B) 'the Earth at various altitudes', (C) 'transmitting data', and (D) 'back to ground stations' are all correct.",
            source: "Swan, PEU (4e), §131",
            flavor: "science"
          }
        ]
      },
      {
        id: "ei-art",
        title: "Wrong article",
        tasks: [
          {
            id: "ei-art-01",
            stem: "Vincent van Gogh painted (A) the famous work 'The Starry Night' while staying (B) at a asylum (C) in Saint-Rémy-de-Provence (D) in 1889.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'A asylum' is wrong; before a vowel sound, the indefinite article is 'an'.",
            fullExplanation: "The word 'asylum' begins with a vowel sound, so it requires the article 'an', not 'a'. 'An asylum' is correct. Parts (A) 'the famous work', (C) 'in Saint-Rémy-de-Provence', and (D) 'in 1889' are all correct.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "personalities"
          },
          {
            id: "ei-art-02",
            stem: "The Eiffel Tower was built for (A) the 1889 World's Fair and quickly became (B) a symbol of (C) a France rather than just (D) its capital.",
            options: ["A", "B", "C", "D"],
            answer: "C",
            explanation: "'A France' is wrong; country names take zero article: 'of France'.",
            fullExplanation: "Country names do not take an indefinite article. 'A France' is incorrect; the correct form is simply 'of France'. Parts (A) 'the 1889 World's Fair', (B) 'a symbol of', and (D) 'its capital' are all correct.",
            source: "Murphy, EGU (4e), Unit 73",
            flavor: "history"
          },
          {
            id: "ei-art-03",
            stem: "My friend is studying to become (A) an doctor, which means (B) she spends most (C) of her time (D) in the library.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'An doctor' is wrong; 'doctor' begins with a consonant sound, so 'a doctor' is correct.",
            fullExplanation: "The word 'doctor' starts with the consonant /d/, so the indefinite article is 'a', not 'an'. Parts (B) 'she spends most', (C) 'of her time', and (D) 'in the library' are all correct.",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "social"
          },
          {
            id: "ei-art-04",
            stem: "The speed of (A) the light (B) in a vacuum (C) is approximately (D) 300,000 kilometres per second.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'The light' is wrong; 'light' as a physical phenomenon takes zero article: 'speed of light'.",
            fullExplanation: "When 'light' refers to the physical phenomenon in general, it is an uncountable noun and takes no article. 'The speed of light' (zero article) is correct. Parts (B) 'in a vacuum', (C) 'is approximately', and (D) '300,000 kilometres per second' are all correct.",
            source: "Murphy, EGU (4e), Unit 73",
            flavor: "science"
          },
          {
            id: "ei-art-05",
            stem: "William Shakespeare is considered (A) the greatest playwright (B) in a history of (C) the English (D) language.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'In a history' is wrong; the unique concept 'history of the English language' requires 'the history'.",
            fullExplanation: "When referring to a specific, unique body of history, the definite article 'the' is required: 'in the history of'. The indefinite article 'a' is incorrect here. Parts (A) 'the greatest playwright', (C) 'the English', and (D) 'language' are all correct.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "personalities"
          },
          {
            id: "ei-art-06",
            stem: "Ancient Rome was governed by (A) a Senate; at its peak the (B) empire stretched (C) from Britain to (D) the Middle East.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A Senate' is wrong; referring to Rome's specific, unique governing body requires 'the Senate'.",
            fullExplanation: "When referring to a specific, unique institution such as the Roman Senate, the definite article 'the' is required. 'A Senate' implies an unspecified body. Parts (B) 'empire stretched', (C) 'from Britain to', and (D) 'the Middle East' are all correct.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "history"
          },
          {
            id: "ei-art-07",
            stem: "My neighbour plays the piano (A) beautifully; she practises (B) for an hour every morning (C) before going (D) to a work.",
            options: ["A", "B", "C", "D"],
            answer: "D",
            explanation: "'To a work' is wrong; 'work' as a destination takes zero article: 'to work'.",
            fullExplanation: "In the phrase 'go to work', 'work' is used without an article because it refers to the activity, not a specific building. 'A work' is incorrect. Parts (A) 'beautifully', (B) 'for an hour every morning', and (C) 'before going' are all correct.",
            source: "Murphy, EGU (4e), Unit 74",
            flavor: "social"
          },
          {
            id: "ei-art-08",
            stem: "Photosynthesis is (A) the process by which plants (B) convert the sunlight (C) into (D) chemical energy stored as sugars.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Convert the sunlight' is wrong; 'sunlight' as a general substance takes zero article.",
            fullExplanation: "Uncountable substances used in a general sense take zero article. 'Sunlight' here refers to sunlight in general, not to specific sunlight. 'Convert sunlight' is correct. Parts (A) 'the process by which plants', (C) 'into', and (D) 'chemical energy stored as sugars' are all correct.",
            source: "Murphy, EGU (4e), Unit 73",
            flavor: "science"
          },
          {
            id: "ei-art-09",
            stem: "Frida Kahlo is best known for (A) her self-portraits, which often reflected (B) her physical pain and (C) the Mexican (D) a culture she celebrated.",
            options: ["A", "B", "C", "D"],
            answer: "D",
            explanation: "'A culture' is wrong in this referential context; 'the culture' (definite) is correct.",
            fullExplanation: "The phrase 'the Mexican culture she celebrated' refers to a specific, already-identified cultural context. The indefinite 'a culture' is incorrect. Parts (A) 'her self-portraits', (B) 'her physical pain and', and (C) 'the Mexican' are all correct.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "personalities"
          },
          {
            id: "ei-art-10",
            stem: "The construction of (A) the Taj Mahal was completed in 1653 on (B) the orders of (C) a Mughal emperor (D) Shah Jahan.",
            options: ["A", "B", "C", "D"],
            answer: "C",
            explanation: "'A Mughal emperor Shah Jahan' is wrong; the specific individual requires 'the': 'the Mughal emperor Shah Jahan'.",
            fullExplanation: "When naming a specific individual by title and name, the definite article is required: 'the Mughal emperor Shah Jahan'. 'A Mughal emperor' implies an unnamed one. Parts (A) 'the Taj Mahal', (B) 'the orders of', and (D) 'Shah Jahan' are all correct.",
            source: "Murphy, EGU (4e), Unit 70",
            flavor: "history"
          },
          {
            id: "ei-art-11",
            stem: "My brother bought (A) a new umbrella because (B) the forecast predicted (C) a heavy rain (D) all weekend.",
            options: ["A", "B", "C", "D"],
            answer: "C",
            explanation: "'A heavy rain' is wrong; 'rain' as an uncountable noun takes zero article in general statements.",
            fullExplanation: "In general weather statements, 'rain' is uncountable and takes zero article: 'heavy rain all weekend'. The indefinite article 'a' is incorrect. Parts (A) 'a new umbrella', (B) 'the forecast predicted', and (D) 'all weekend' are all correct.",
            source: "Murphy, EGU (4e), Unit 73",
            flavor: "social"
          },
          {
            id: "ei-art-12",
            stem: "The Amazon rainforest produces roughly (A) twenty percent of (B) the world's oxygen and is home (C) to an extraordinary (D) the variety of species.",
            options: ["A", "B", "C", "D"],
            answer: "D",
            explanation: "'An extraordinary the variety' is wrong; only one article is used — 'an extraordinary variety'.",
            fullExplanation: "A noun phrase can carry only one determiner. 'An extraordinary variety of species' is the correct form; 'the' is redundant. Parts (A) 'twenty percent of', (B) 'the world's oxygen', and (C) 'an extraordinary' are all correct — the extra 'the' is within segment (D).",
            source: "Murphy, EGU (4e), Unit 69",
            flavor: "science"
          }
        ]
      },
      {
        id: "ei-sva",
        title: "Subject-verb agreement",
        tasks: [
          {
            id: "ei-sva-01",
            stem: "Stephen Hawking, along with several colleagues, (A) were responsible (B) for many groundbreaking (C) contributions to (D) theoretical physics.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Were responsible' is wrong; the head subject 'Stephen Hawking' is singular, requiring 'was responsible'.",
            fullExplanation: "A singular subject followed by 'along with + noun' remains singular. 'Stephen Hawking … was responsible' is correct. Parts (B) 'for many groundbreaking', (C) 'contributions to', and (D) 'theoretical physics' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "personalities"
          },
          {
            id: "ei-sva-02",
            stem: "The number of soldiers (A) who died (B) in World War I (C) were far greater (D) than anyone had predicted.",
            options: ["A", "B", "C", "D"],
            answer: "C",
            explanation: "'Were far greater' is wrong; 'the number' is singular and requires 'was far greater'.",
            fullExplanation: "The expression 'the number of' takes a singular verb. 'The number … was far greater' is correct. 'A number of' (meaning 'many') takes plural. Parts (A) 'who died', (B) 'in World War I', and (D) 'than anyone had predicted' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "history"
          },
          {
            id: "ei-sva-03",
            stem: "Neither my brother nor my sister (A) have ever (B) visited (C) our grandparents' (D) old farmhouse.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Have ever visited' is wrong; with 'neither … nor', the verb agrees with the nearest subject ('my sister' — singular): 'has ever visited'.",
            fullExplanation: "With 'neither … nor', the verb agrees with the subject closest to it. 'My sister' is singular, so 'has ever visited' is correct. Parts (B) 'ever visited', (C) 'our grandparents'', and (D) 'old farmhouse' are all correct.",
            source: "Swan, PEU (4e), §369",
            flavor: "social"
          },
          {
            id: "ei-sva-04",
            stem: "The data collected by the satellite (A) shows (B) that the polar ice caps (C) are melting (D) at an alarming rate.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Shows' is wrong; 'data' is treated as plural in academic English: 'show'.",
            fullExplanation: "In formal/academic English, 'data' is plural and takes a plural verb: 'The data … show'. 'Shows' treats 'data' as singular. Parts (B) 'that the polar ice caps', (C) 'are melting', and (D) 'at an alarming rate' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "science"
          },
          {
            id: "ei-sva-05",
            stem: "Roger Federer, as well as many other top players, (A) have argued (B) that the grass surface (C) at Wimbledon is (D) the most demanding in tennis.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Have argued' is wrong; the head subject 'Roger Federer' is singular, requiring 'has argued'.",
            fullExplanation: "A singular subject joined to additional nouns by 'as well as' remains singular. 'Federer … has argued' is correct. 'Have argued' wrongly treats the subject as plural. Parts (B) 'that the grass surface', (C) 'at Wimbledon is', and (D) 'the most demanding in tennis' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "personalities"
          },
          {
            id: "ei-sva-06",
            stem: "The United States (A) were founded (B) in 1776 following the signing of (C) the Declaration (D) of Independence.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Were founded' is wrong; 'The United States' as a country name takes a singular verb: 'was founded'.",
            fullExplanation: "Country names ending in -s such as 'the United States', 'the Netherlands', and 'the Philippines' take singular verbs when referring to the country as a unit. 'Was founded' is correct. Parts (B) 'in 1776', (C) 'the Declaration', and (D) 'of Independence' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "history"
          },
          {
            id: "ei-sva-07",
            stem: "Each of the students (A) were asked (B) to submit (C) their assignment (D) by Friday.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Were asked' is wrong; 'each of' takes a singular verb: 'was asked'.",
            fullExplanation: "'Each of + plural noun' takes a singular verb because 'each' refers to individuals one by one. 'Was asked' is correct. Parts (B) 'to submit', (C) 'their assignment', and (D) 'by Friday' are all correct.",
            source: "Swan, PEU (4e), §182",
            flavor: "social"
          },
          {
            id: "ei-sva-08",
            stem: "Physics (A) are considered (B) one of the most (C) mathematically demanding (D) sciences at university.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Physics are considered' is wrong; academic subjects ending in -ics take singular verbs: 'is considered'.",
            fullExplanation: "Subjects of study ending in -ics (physics, mathematics, economics) are treated as singular nouns. 'Physics is considered' is correct. Parts (B) 'one of the most', (C) 'mathematically demanding', and (D) 'sciences at university' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "science"
          },
          {
            id: "ei-sva-09",
            stem: "Jane Austen's novels, especially Pride and Prejudice, (A) continues (B) to attract millions of (C) readers worldwide (D) every year.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Continues' is wrong; the head subject 'Jane Austen's novels' is plural, requiring 'continue'.",
            fullExplanation: "The subject 'novels' is plural. Even though a singular noun ('Pride and Prejudice') is mentioned as an appositive, the grammatical subject remains 'novels', which requires the plural verb 'continue'. Parts (B) 'to attract millions of', (C) 'readers worldwide', and (D) 'every year' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "personalities"
          },
          {
            id: "ei-sva-10",
            stem: "A large number of artefacts (A) from Ancient Rome (B) has been discovered (C) in Britain, providing evidence (D) of Roman settlement.",
            options: ["A", "B", "C", "D"],
            answer: "B",
            explanation: "'Has been discovered' is wrong; 'a large number of artefacts' requires the plural 'have been discovered'.",
            fullExplanation: "'A number of' means 'many' and takes a plural verb. 'A large number of artefacts have been discovered' is correct. 'The number of' (contrasting expression) takes singular. Parts (A) 'from Ancient Rome', (C) 'in Britain', and (D) 'providing evidence of Roman settlement' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "history"
          },
          {
            id: "ei-sva-11",
            stem: "The news about the redundancies (A) were shocking (B) to everyone in (C) the office and led (D) to weeks of uncertainty.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Were shocking' is wrong; 'the news' is always singular: 'was shocking'.",
            fullExplanation: "'News' is an uncountable noun that always takes a singular verb. 'The news … was shocking' is correct. Parts (B) 'to everyone in', (C) 'the office and led', and (D) 'to weeks of uncertainty' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "social"
          },
          {
            id: "ei-sva-12",
            stem: "The majority of Earth's surface (A) are covered (B) by water, which (C) plays a vital role (D) in regulating the climate.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'Are covered' is wrong; 'the majority of + singular noun' takes a singular verb: 'is covered'.",
            fullExplanation: "When 'the majority of' is followed by an uncountable or singular noun ('Earth's surface'), the verb is singular. 'Is covered' is correct. Parts (B) 'by water', (C) 'plays a vital role', and (D) 'in regulating the climate' are all correct.",
            source: "Swan, PEU (4e), §502",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "vocab-context",
    title: "Vocabulary in Context",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "voc-syn",
        title: "Synonym selection",
        tasks: [
          {
            id: "voc-syn-01",
            stem: "Einstein's theory of relativity was so ___ that most physicists needed years to fully grasp its implications.",
            options: ["profound", "deep", "heavy"],
            answer: "profound",
            explanation: "'Profound' means having deep intellectual insight or impact — the best fit for a revolutionary theory.",
            fullExplanation: "'Profound' precisely describes something of great depth and significance, especially in thought or understanding. 'Deep' is more spatial/informal; 'heavy' is informal/colloquial; 'serious' implies solemnity rather than intellectual depth.",
            source: "Longman Dictionary of Contemporary English (6e)",
            flavor: "personalities"
          },
          {
            id: "voc-syn-02",
            stem: "The fall of the Roman Empire was a ___ event that reshaped the entire political landscape of Europe.",
            options: ["pivotal", "central", "critical"],
            answer: "pivotal",
            explanation: "'Pivotal' means decisively important in determining outcomes — the strongest fit here.",
            fullExplanation: "'Pivotal' specifically implies that everything turned on this one point. 'Central' is vaguer; 'critical' can mean either 'crucial' or 'negative'; 'main' only means 'most important', not 'decisive turning point'.",
            source: "Oxford Advanced Learner's Dictionary (10e)",
            flavor: "history"
          },
          {
            id: "voc-syn-03",
            stem: "After the long flight, the passengers were ___ and desperate for a comfortable bed.",
            options: ["exhausted", "tired", "weary"],
            answer: "exhausted",
            explanation: "'Exhausted' means completely depleted of energy — the strongest degree of tiredness.",
            fullExplanation: "'Exhausted' is the most extreme synonym and best fits the context of a long-haul flight where someone is utterly spent. 'Tired' is mild; 'weary' suggests tedium more than physical depletion; 'drained' is close but more emotional.",
            source: "Longman Dictionary of Contemporary English (6e)",
            flavor: "social"
          },
          {
            id: "voc-syn-04",
            stem: "The new vaccine proved highly ___ in preventing the spread of the disease during clinical trials.",
            options: ["effective", "efficient", "productive"],
            answer: "effective",
            explanation: "'Effective' means producing the intended result — the precise medical/scientific term.",
            fullExplanation: "'Effective' describes something that achieves its intended outcome, the standard word in medical and scientific contexts. 'Efficient' focuses on economy of effort, not outcome; 'productive' relates to output; 'useful' is too general.",
            source: "Oxford Advanced Learner's Dictionary (10e)",
            flavor: "science"
          },
          {
            id: "voc-syn-05",
            stem: "Nelson Mandela was ___ for his role in ending apartheid and building a new democratic South Africa.",
            options: ["celebrated", "famous", "renowned"],
            answer: "celebrated",
            explanation: "'Celebrated' means publicly honoured and admired — implies active acclaim beyond mere recognition.",
            fullExplanation: "'Celebrated' conveys warm public admiration and honour, fitting Mandela's global reverence. 'Famous' is neutral; 'renowned' is close but more formal; 'known' is the weakest and most neutral.",
            source: "Longman Dictionary of Contemporary English (6e)",
            flavor: "personalities"
          },
          {
            id: "voc-syn-06",
            stem: "The printing press ___ the spread of knowledge by making books affordable for ordinary people.",
            options: ["facilitated", "helped", "supported"],
            answer: "facilitated",
            explanation: "'Facilitated' means made easier or possible — the most precise academic term for enabling a process.",
            fullExplanation: "'Facilitated' is the standard formal/academic verb for making something easier or removing obstacles. 'Helped' is informal and vague; 'supported' implies backing rather than enabling; 'aided' is close but slightly more hands-on.",
            source: "Oxford Advanced Learner's Dictionary (10e)",
            flavor: "history"
          },
          {
            id: "voc-syn-07",
            stem: "The couple decided to ___ their holiday to Spain until the following summer due to high prices.",
            options: ["postpone", "delay", "cancel"],
            answer: "postpone",
            explanation: "'Postpone' means to arrange a later date for something already planned — the most precise fit.",
            fullExplanation: "'Postpone' specifically means to move an event to a later time without cancelling it, which fits the context. 'Delay' suggests slowing down rather than rescheduling; 'cancel' implies abandonment; 'reschedule' is close but emphasises setting a new time rather than moving to later.",
            source: "Longman Dictionary of Contemporary English (6e)",
            flavor: "social"
          },
          {
            id: "voc-syn-08",
            stem: "Ocean currents ___ heat around the globe, playing a key role in regulating regional climates.",
            options: ["distribute", "spread", "carry"],
            answer: "distribute",
            explanation: "'Distribute' means to spread something across a wide area in a systematic way — the most precise scientific term.",
            fullExplanation: "'Distribute' is used in science for the systematic dispersal of energy or matter across a system. 'Spread' is informal; 'carry' implies transport without dispersal; 'deliver' suggests a specific destination rather than wide dispersal.",
            source: "Oxford Advanced Learner's Dictionary (10e)",
            flavor: "science"
          },
          {
            id: "voc-syn-09",
            stem: "Frida Kahlo's paintings ___ deep personal pain, making them emotionally powerful for viewers worldwide.",
            options: ["convey", "show", "express"],
            answer: "convey",
            explanation: "'Convey' means to communicate an idea or feeling through a medium — the most precise fit for art.",
            fullExplanation: "'Convey' precisely describes the way art communicates meaning or emotion to an audience. 'Show' is too visual and literal; 'express' focuses on the artist's output rather than the communication to a viewer; 'reveal' implies something hidden being discovered.",
            source: "Longman Dictionary of Contemporary English (6e)",
            flavor: "personalities"
          },
          {
            id: "voc-syn-10",
            stem: "The industrial revolution ___ traditional farming communities as millions moved to cities for factory work.",
            options: ["disrupted", "changed", "affected"],
            answer: "disrupted",
            explanation: "'Disrupted' means severely interrupted the normal function — the strongest fit for a radical transformation.",
            fullExplanation: "'Disrupted' implies a radical breaking of existing patterns, fitting the profound social upheaval of industrialisation. 'Changed' is too neutral; 'affected' is too mild; 'disturbed' implies temporary unsettlement rather than structural transformation.",
            source: "Oxford Advanced Learner's Dictionary (10e)",
            flavor: "history"
          },
          {
            id: "voc-syn-11",
            stem: "The receptionist greeted every visitor with a ___ smile that immediately put people at ease.",
            options: ["warm", "nice", "pleasant"],
            answer: "warm",
            explanation: "'Warm' describes a smile that conveys genuine friendliness and emotional openness — the most precise fit.",
            fullExplanation: "'Warm' is the standard collocation with 'smile' to describe sincere, heartfelt friendliness. 'Nice' is vague; 'pleasant' describes the effect rather than the quality; 'friendly' is an adjective more naturally paired with 'person' than 'smile'.",
            source: "Longman Dictionary of Contemporary English (6e)",
            flavor: "social"
          },
          {
            id: "voc-syn-12",
            stem: "Scientists have ___ a link between air pollution and the increase in respiratory diseases in urban areas.",
            options: ["established", "found", "discovered"],
            answer: "established",
            explanation: "'Established' means to demonstrate something firmly through rigorous evidence — the precise scientific term.",
            fullExplanation: "'Establish a link' is the standard academic collocation for demonstrating a verifiable connection through evidence. 'Found' and 'discovered' are more neutral and less formal; 'proved' implies mathematical certainty, which is atypical for epidemiological relationships.",
            source: "Oxford Advanced Learner's Dictionary (10e)",
            flavor: "science"
          }
        ]
      },
      {
        id: "voc-coll",
        title: "Collocation selection",
        tasks: [
          {
            id: "voc-coll-01",
            stem: "After years of work, Darwin finally ___ the courage to publish his theory of evolution in 1859.",
            options: ["summoned", "gathered", "found"],
            answer: "summoned",
            explanation: "'Summon the courage' is the fixed collocation meaning to force oneself to be brave.",
            fullExplanation: "'Summon the courage' (or 'summon up the courage') is the established English collocation. 'Gather courage' is possible but less idiomatic; 'find courage' is informal and weaker; 'collect courage' is not a standard English collocation.",
            source: "Longman Collocations Dictionary (2e)",
            flavor: "personalities"
          },
          {
            id: "voc-coll-02",
            stem: "The two world powers ___ an agreement in 1963 to ban nuclear weapons testing in the atmosphere.",
            options: ["reached", "made", "did"],
            answer: "reached",
            explanation: "'Reach an agreement' is the standard collocation.",
            fullExplanation: "'Reach an agreement' is the established collocation meaning to arrive at a mutually accepted deal. 'Make an agreement' is sometimes acceptable but less formal; 'do an agreement' is ungrammatical; 'take an agreement' is not a valid collocation.",
            source: "Longman Collocations Dictionary (2e)",
            flavor: "history"
          },
          {
            id: "voc-coll-03",
            stem: "Could you ___ me a favour and pick up some milk on your way home?",
            options: ["do", "make", "give"],
            answer: "do",
            explanation: "'Do someone a favour' is the fixed collocation in English.",
            fullExplanation: "'Do someone a favour' is the standard English collocation. 'Make a favour' is a common learner error influenced by other languages; 'give a favour' and 'take a favour' are not valid collocations.",
            source: "Longman Collocations Dictionary (2e)",
            flavor: "social"
          },
          {
            id: "voc-coll-04",
            stem: "Researchers are working to ___ a solution to the problem of microplastic pollution in ocean ecosystems.",
            options: ["develop", "make", "find"],
            answer: "develop",
            explanation: "'Develop a solution' is the standard academic collocation.",
            fullExplanation: "'Develop a solution' is the conventional collocation in scientific and technical writing. 'Find a solution' is informal and common in everyday language; 'make a solution' is used in chemistry but not for problem-solving; 'create a solution' is possible but less idiomatic.",
            source: "Longman Collocations Dictionary (2e)",
            flavor: "science"
          },
          {
            id: "voc-coll-05",
            stem: "Winston Churchill ___ a speech at the House of Commons that inspired the British public to keep fighting.",
            options: ["delivered", "gave", "made"],
            answer: "delivered",
            explanation: "'Deliver a speech' is the formal collocation used for formal public addresses.",
            fullExplanation: "'Deliver a speech' is the standard formal collocation for a prepared public address. 'Give a speech' is also acceptable but more neutral; 'make a speech' is informal; 'say a speech' is incorrect.",
            source: "Longman Collocations Dictionary (2e)",
            flavor: "personalities"
          },
          {
            id: "voc-coll-06",
            stem: "The Olympic Games were ___ by the ancient Greeks, initially held at Olympia every four years.",
            options: ["founded", "created", "started"],
            answer: "founded",
            explanation: "'Founded' is the correct collocation for the establishment of an institution or recurring event.",
            fullExplanation: "'Found' is the standard verb for establishing an institution, event, or organisation. 'Create' refers more to making something new; 'start' is informal; 'begun' is the past participle of 'begin' and does not collocate naturally with a passive description of institutional establishment.",
            source: "Oxford Collocations Dictionary (3e)",
            flavor: "history"
          },
          {
            id: "voc-coll-07",
            stem: "I need to ___ a decision about whether to accept the job offer by the end of the week.",
            options: ["make", "do", "take"],
            answer: "make",
            explanation: "'Make a decision' is the standard English collocation.",
            fullExplanation: "'Make a decision' is the fixed collocation in English. 'Do a decision' is a common learner error; 'take a decision' is used in some formal British contexts but 'make' is more universal; 'reach a decision' is possible but more often used with agreement or conclusion.",
            source: "Longman Collocations Dictionary (2e)",
            flavor: "social"
          },
          {
            id: "voc-coll-08",
            stem: "The experiment was designed to ___ light on the mechanisms of DNA repair in human cells.",
            options: ["shed", "throw", "cast"],
            answer: "shed",
            explanation: "'Shed light on' is the fixed idiomatic collocation meaning to illuminate or clarify.",
            fullExplanation: "'Shed light on' is the standard idiom for clarifying or explaining something. 'Throw light on' is also used but less formal; 'cast light on' is acceptable in some registers; 'shine light on' is not standard in this idiomatic sense.",
            source: "Oxford Collocations Dictionary (3e)",
            flavor: "science"
          },
          {
            id: "voc-coll-09",
            stem: "Mahatma Gandhi ___ a hunger strike to protest against British colonial rule in India.",
            options: ["staged", "held", "made"],
            answer: "staged",
            explanation: "'Stage a hunger strike' is the established collocation for deliberately organising a public protest action.",
            fullExplanation: "'Stage' collocates with protest actions ('stage a strike', 'stage a protest') to imply deliberate, public organisation. 'Hold a hunger strike' is possible but less natural; 'make' and 'do' do not collocate with 'hunger strike'.",
            source: "Longman Collocations Dictionary (2e)",
            flavor: "personalities"
          },
          {
            id: "voc-coll-10",
            stem: "The assassination of Archduke Franz Ferdinand ___ World War I, triggering a chain of military mobilisations.",
            options: ["sparked", "started", "caused"],
            answer: "sparked",
            explanation: "'Sparked a war' is the collocation for an event that ignites a sudden, large conflict.",
            fullExplanation: "'Spark' collocates with conflict nouns ('spark a war', 'spark a crisis') to describe a sudden triggering event. 'Started' and 'caused' are correct but more neutral and less vivid; 'began' is intransitive and cannot take a direct object.",
            source: "Oxford Collocations Dictionary (3e)",
            flavor: "history"
          },
          {
            id: "voc-coll-11",
            stem: "The project manager asked everyone to ___ notes during the meeting so nothing important was forgotten.",
            options: ["take", "make", "write"],
            answer: "take",
            explanation: "'Take notes' is the fixed English collocation for recording information during a meeting.",
            fullExplanation: "'Take notes' is the standard collocation in English. 'Make notes' is also used, but 'take notes' is the primary collocation especially in meeting contexts. 'Write notes' and 'keep notes' are not standard collocations for this activity.",
            source: "Longman Collocations Dictionary (2e)",
            flavor: "social"
          },
          {
            id: "voc-coll-12",
            stem: "The researchers ___ a breakthrough when they identified a protein that blocks tumour growth.",
            options: ["achieved", "made", "reached"],
            answer: "achieved",
            explanation: "'Achieved a breakthrough' is the standard scientific/academic collocation.",
            fullExplanation: "'Achieve a breakthrough' is the established collocation in academic and scientific writing. 'Make a breakthrough' is informal and common in journalism; 'reached a breakthrough' is incorrect — 'reach' collocates with 'agreement' or 'conclusion', not 'breakthrough'; 'got a breakthrough' is too informal.",
            source: "Oxford Collocations Dictionary (3e)",
            flavor: "science"
          }
        ]
      },
      {
        id: "voc-reg",
        title: "Register selection",
        tasks: [
          {
            id: "voc-reg-01",
            stem: "The biography described how Churchill ___ the nation through its darkest hours with remarkable resolve.",
            options: ["led", "took", "dragged"],
            answer: "led",
            explanation: "'Led' is the neutral-formal verb fitting a written biography.",
            fullExplanation: "In a formal biographical text, 'led' is the appropriate neutral-formal word for guiding a nation. 'Steered' is a metaphor that may appear in some formal texts but is more journalistic; 'took' is vague; 'dragged' is informal/pejorative.",
            source: "Murphy, EGU (4e), Unit 1; Oxford Writing Guide",
            flavor: "personalities"
          },
          {
            id: "voc-reg-02",
            stem: "The essay argues that the Industrial Revolution ___ profound social inequality across British society.",
            options: ["generated", "caused", "brought about"],
            answer: "generated",
            explanation: "'Generated' is the academic-register verb for producing an effect at scale.",
            fullExplanation: "In academic writing, 'generate' is the preferred formal verb for producing or creating a large-scale outcome. 'Caused' is neutral but less formal; 'brought about' is more journalistic; 'made' is too informal for academic prose.",
            source: "Academic Word List; Swales & Feak, Academic Writing for Graduate Students",
            flavor: "history"
          },
          {
            id: "voc-reg-03",
            stem: "A: 'Are you coming to the party tonight?' B: 'Yeah, I'll ___ by around nine if that's okay.'",
            options: ["pop", "arrive", "attend"],
            answer: "pop",
            explanation: "'Pop by' is informal/conversational — fits a casual invitation between friends.",
            fullExplanation: "'Pop by/round/in' is an informal British English collocation for a casual, brief visit. 'Arrive' is neutral but too formal for this conversation; 'attend' is formal/official; 'proceed' is overly bureaucratic and incongruous.",
            source: "Longman Dictionary of Contemporary English (6e)",
            flavor: "social"
          },
          {
            id: "voc-reg-04",
            stem: "The results ___ a statistically significant correlation between sleep deprivation and reduced cognitive performance.",
            options: ["indicate", "show", "prove"],
            answer: "indicate",
            explanation: "'Indicate' is the standard hedged verb in scientific reporting.",
            fullExplanation: "Scientific writing uses 'indicate' to present results cautiously, acknowledging possible uncertainty. 'Show' is more informal and assertive; 'prove' overclaims certainty inappropriate to empirical science; 'tell' is too conversational.",
            source: "Academic Word List; APA Publication Manual (7e)",
            flavor: "science"
          },
          {
            id: "voc-reg-05",
            stem: "The tribute ___ Mandela's extraordinary contribution to the pursuit of human dignity and freedom.",
            options: ["acknowledged", "mentioned", "talked about"],
            answer: "acknowledged",
            explanation: "'Acknowledged' is the formal-register verb for formally recognising someone's contribution.",
            fullExplanation: "In formal tribute or obituary writing, 'acknowledged' is the appropriate verb for formally recognising merit. 'Mentioned' is neutral but too casual; 'talked about' is conversational; 'noted down' means to write a note, not to give recognition.",
            source: "Oxford Writing Guide; Longman Dictionary of Contemporary English (6e)",
            flavor: "personalities"
          },
          {
            id: "voc-reg-06",
            stem: "Historians ___ the Black Death as one of the most catastrophic pandemics in human history.",
            options: ["characterise", "see", "reckon"],
            answer: "characterise",
            explanation: "'Characterise' is the formal academic verb for classifying or describing with precision.",
            fullExplanation: "Academic texts use 'characterise' to describe how scholars classify or define a subject. 'See' is neutral but less formal; 'reckon' is informal/dialectal; 'call' is too casual for academic writing.",
            source: "Academic Word List; Swales & Feak, Academic Writing for Graduate Students",
            flavor: "history"
          },
          {
            id: "voc-reg-07",
            stem: "Text message: 'The meeting got pushed back — just ___ in when you're ready, no rush!'",
            options: ["drop", "arrive", "attend"],
            answer: "drop",
            explanation: "'Drop in' is informal — the natural expression for a casual, unscheduled appearance.",
            fullExplanation: "'Drop in' is an informal phrasal verb meaning to visit or arrive without formality, fitting a text message. 'Arrive' is neutral-formal; 'attend' is formal/official; 'appear' is neutral but suggests unexpectedness or performance contexts.",
            source: "Longman Dictionary of Contemporary English (6e)",
            flavor: "social"
          },
          {
            id: "voc-reg-08",
            stem: "The study ___ that regular aerobic exercise significantly reduces the risk of cardiovascular disease.",
            options: ["demonstrates", "proves", "shows that"],
            answer: "demonstrates",
            explanation: "'Demonstrates' is the standard formal-academic verb for presenting research findings.",
            fullExplanation: "In journal abstracts, 'demonstrate' is preferred to signal that evidence supports a conclusion without overclaiming. 'Proves' overstates certainty; 'shows that' is correct but less formal for an abstract; 'points out' implies criticism or observation, not experimental evidence.",
            source: "APA Publication Manual (7e); Academic Word List",
            flavor: "science"
          },
          {
            id: "voc-reg-09",
            stem: "The biography ___ in detail how Beethoven continued composing even after losing his hearing entirely.",
            options: ["documents", "talks about", "discusses"],
            answer: "documents",
            explanation: "'Documents' is the formal verb for a biographical account providing evidence-based detail.",
            fullExplanation: "In formal biographical writing, 'document' means to present factual detail with evidence. 'Talks about' is conversational; 'discusses' is neutral-formal but suggests debate rather than factual narration; 'goes into' is informal.",
            source: "Oxford Writing Guide",
            flavor: "personalities"
          },
          {
            id: "voc-reg-10",
            stem: "The collapse of the Western Roman Empire ___ fundamental questions about the nature of imperial overextension.",
            options: ["raises", "brings up", "asks"],
            answer: "raises",
            explanation: "'Raises questions' is the standard academic collocation in formal analysis.",
            fullExplanation: "In academic writing, 'raises questions' or 'raises issues' is the standard formal collocation for introducing analytical problems. 'Brings up' is informal; 'asks' requires a human subject; 'poses questions' is also acceptable academically but 'raises' is more conventional.",
            source: "Academic Word List; Swales & Feak, Academic Writing for Graduate Students",
            flavor: "history"
          },
          {
            id: "voc-reg-11",
            stem: "A: 'Did you enjoy the wedding?' B: 'It was brilliant — we ___ the whole thing!'",
            options: ["loved", "found gratifying", "savoured"],
            answer: "loved",
            explanation: "'Loved' is the natural informal/conversational word for expressing enjoyment in casual speech.",
            fullExplanation: "In a casual conversation, 'loved' is the natural, emotionally direct word. 'Found gratifying' is overly formal for everyday speech; 'savoured' implies slow, deliberate enjoyment and sounds awkward here; 'appreciated' is too restrained and formal for enthusiastic casual expression.",
            source: "Longman Dictionary of Contemporary English (6e)",
            flavor: "social"
          },
          {
            id: "voc-reg-12",
            stem: "The article explains how black holes ___ any matter that crosses their event horizon.",
            options: ["consume", "eat", "devour"],
            answer: "consume",
            explanation: "'Consume' is the appropriate neutral-formal verb for a popular science article.",
            fullExplanation: "In popular science writing, 'consume' is precise and neutral without being overly technical. 'Eat' and 'swallow' are colloquial/anthropomorphic; 'devour' is journalistic/dramatic and less appropriate for factual science writing.",
            source: "Oxford Writing Guide",
            flavor: "science"
          }
        ]
      }
    ]
  },

  {
    id: "dialogue-skills",
    title: "Dialogue Skills",
    preset: "tenses",
    dualMode: true,
    subtopics: [
      {
        id: "dia-agree",
        title: "Agreement / disagreement",
        tasks: [
          {
            id: "dia-agree-01",
            stem: "A: 'I really admire Marie Curie — she was an extraordinary scientist.' B: '___, she was truly one of a kind.'",
            options: ["So do I", "Neither do I", "I don't either"],
            answer: "So do I",
            explanation: "'So do I' agrees with a positive statement using an auxiliary verb.",
            fullExplanation: "A expresses admiration (positive), so B agrees with 'So do I' (inverted structure: So + aux + subject). 'Neither do I' and 'I don't either' disagree with a negative statement; 'Me neither' responds to a negative.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "personalities"
          },
          {
            id: "dia-agree-02",
            stem: "A: 'I didn't find the museum exhibition on ancient Rome very interesting.' B: '___, to be honest — it lacked detail.'",
            options: ["Neither did I", "So did I", "I did too"],
            answer: "Neither did I",
            explanation: "'Neither did I' agrees with a negative past statement.",
            fullExplanation: "A's statement is negative ('didn't find … interesting'), so B agrees using 'Neither did I' (inverted negative agreement). 'So did I' agrees with a positive; 'I did too' and 'Me too' respond to positives.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "history"
          },
          {
            id: "dia-agree-03",
            stem: "A: 'I hate waiting in long queues at the supermarket.' B: '___ — it's such a waste of time.'",
            options: ["So do I", "Neither do I", "I don't either"],
            answer: "So do I",
            explanation: "'So do I' agrees with a positive (present) statement; 'hate' is the positive verb here.",
            fullExplanation: "A uses a positive verb ('I hate'), and B agrees with 'So do I'. 'Neither do I' and 'I don't either' would only apply if A had said 'I don't like'. 'Nor I' is archaic/literary.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "social"
          },
          {
            id: "dia-agree-04",
            stem: "A: 'I've never seen a total solar eclipse in person.' B: '___ — they say it's an unforgettable experience.'",
            options: ["Neither have I", "So have I", "I have too"],
            answer: "Neither have I",
            explanation: "'Neither have I' agrees with a negative present perfect statement.",
            fullExplanation: "A's statement is negative ('I've never seen'), so B agrees with 'Neither have I'. 'So have I' and 'I have too' agree with positive present perfect statements; 'Me too' responds to positives.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "science"
          },
          {
            id: "dia-agree-05",
            stem: "A: 'I think Picasso was the most innovative artist of the twentieth century.' B: '___ — his style was completely unlike anything before.'",
            options: ["So do I", "Neither do I", "I don't"],
            answer: "So do I",
            explanation: "'So do I' agrees with a positive opinion expressed with 'I think'.",
            fullExplanation: "A expresses a positive opinion ('I think Picasso was…'). B agrees with 'So do I'. 'Neither do I' and 'Nor do I' disagree with negative statements; 'I don't' is a direct contradiction.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "personalities"
          },
          {
            id: "dia-agree-06",
            stem: "A: 'I can't believe how quickly the Roman Empire collapsed after centuries of dominance.' B: '___ — historians still debate the exact causes.'",
            options: ["Neither can I", "So can I", "I can too"],
            answer: "Neither can I",
            explanation: "'Neither can I' agrees with a negative modal ('I can't believe').",
            fullExplanation: "A uses a negative modal ('can't believe'), so B agrees with 'Neither can I'. 'So can I' agrees with a positive modal; 'I can too' is positive; 'So do I' uses the wrong auxiliary ('do' instead of 'can').",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "history"
          },
          {
            id: "dia-agree-07",
            stem: "A: 'I don't really enjoy cooking elaborate meals on weekdays.' B: '___, actually — I prefer something quick and simple.'",
            options: ["Neither do I", "So do I", "I do too"],
            answer: "Neither do I",
            explanation: "'Neither do I' agrees with A's negative present simple statement.",
            fullExplanation: "A's statement is negative ('I don't enjoy'), so B agrees with 'Neither do I'. 'So do I' agrees with a positive; 'I do too' and 'Me too' agree with positives.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "social"
          },
          {
            id: "dia-agree-08",
            stem: "A: 'I find it amazing how many species are still undiscovered in deep ocean trenches.' B: '___ — it really shows how little we know.'",
            options: ["So do I", "Neither do I", "I don't either"],
            answer: "So do I",
            explanation: "'So do I' agrees with a positive present simple statement.",
            fullExplanation: "A makes a positive statement ('I find it amazing'), so B agrees with 'So do I'. 'Neither do I' and 'I don't either' respond to negatives; 'Nor I' is archaic.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "science"
          },
          {
            id: "dia-agree-09",
            stem: "A: 'I had never heard of Ada Lovelace before that documentary.' B: '___ — I only learned about her recently.'",
            options: ["Neither had I", "So had I", "I had too"],
            answer: "Neither had I",
            explanation: "'Neither had I' agrees with a negative past perfect statement.",
            fullExplanation: "A's statement is negative past perfect ('I had never heard of'), so B agrees with 'Neither had I'. 'So had I' responds to a positive past perfect; 'I had too' and 'Me too' are positive.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "personalities"
          },
          {
            id: "dia-agree-10",
            stem: "A: 'I was completely shocked by how many people died in the First World War.' B: '___ when I read the statistics for the first time.'",
            options: ["So was I", "Neither was I", "I wasn't either"],
            answer: "So was I",
            explanation: "'So was I' agrees with a positive past state ('I was shocked').",
            fullExplanation: "A uses a positive past tense ('I was shocked'), so B agrees with 'So was I' (inverted positive agreement). 'Neither was I' and 'Nor was I' respond to negative past statements; 'I wasn't either' contradicts the positive.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "history"
          },
          {
            id: "dia-agree-11",
            stem: "A: 'I haven't booked my holiday yet — everything is so expensive this year.' B: '___ — I'm going to wait until prices drop.'",
            options: ["Neither have I", "So have I", "I have too"],
            answer: "Neither have I",
            explanation: "'Neither have I' agrees with a negative present perfect statement.",
            fullExplanation: "A uses a negative present perfect ('I haven't booked'), so B agrees with 'Neither have I'. 'So have I' and 'I have too' agree with positive present perfect; 'Me too' agrees with a positive.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "social"
          },
          {
            id: "dia-agree-12",
            stem: "A: 'I think scientists should do more to communicate their findings to the general public.' B: '___ — science needs to be more accessible.'",
            options: ["So do I", "Neither do I", "I don't either"],
            answer: "So do I",
            explanation: "'So do I' agrees with a positive opinion using present simple.",
            fullExplanation: "A expresses a positive view ('I think scientists should…'), so B agrees with 'So do I'. 'Neither do I' and 'I don't either' respond to negative statements; 'Nor I' is archaic.",
            source: "Murphy, EGU (4e), Unit 47",
            flavor: "science"
          }
        ]
      },
      {
        id: "dia-sugg",
        title: "Suggestions",
        tasks: [
          {
            id: "dia-sugg-01",
            stem: "A: 'We need a topic for our history project.' B: '___ doing it on Marie Curie? She's fascinating.'",
            options: ["How about", "Why don't we", "Let's"],
            answer: "How about",
            explanation: "'How about' is followed directly by a gerund (-ing form) to make a suggestion.",
            fullExplanation: "'How about + -ing' is a standard suggestion pattern. 'Why don't we' requires a bare infinitive ('Why don't we do…'); 'Let's' also requires a bare infinitive; 'Shall we' requires a bare infinitive. Only 'How about' is followed by a gerund.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "personalities"
          },
          {
            id: "dia-sugg-02",
            stem: "A: 'I'd love to visit a historical site this weekend.' B: '___ go to the old castle nearby? It dates back to the 12th century.'",
            options: ["Why don't we", "How about", "What about"],
            answer: "Why don't we",
            explanation: "'Why don't we' is followed by a bare infinitive to make a joint suggestion.",
            fullExplanation: "'Why don't we + bare infinitive' is a standard suggestion form. 'How about' and 'What about' are followed by a gerund; 'Let's' requires a bare infinitive but would need to be followed by 'go' without 'we' included ('Let's go'). Here the blank is before 'go', making 'Why don't we' the correct choice.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "history"
          },
          {
            id: "dia-sugg-03",
            stem: "A: 'It's too cold to eat outside.' B: '___ move inside to the dining room instead?'",
            options: ["Shall we", "Why not", "How about"],
            answer: "Shall we",
            explanation: "'Shall we' is the correct suggestion form before a bare infinitive asking for agreement.",
            fullExplanation: "'Shall we + bare infinitive' is a polite suggestion seeking the other person's agreement. 'Why not' would work but requires 'Why not move…' without the subject 'we'; 'How about' and 'What about' require -ing forms.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "social"
          },
          {
            id: "dia-sugg-04",
            stem: "A: 'The lab needs more funding to continue the research.' B: '___ applying for a government science grant?'",
            options: ["What about", "Why don't we", "Shall we"],
            answer: "What about",
            explanation: "'What about' is followed by a gerund, making it the correct choice before 'applying'.",
            fullExplanation: "'What about + -ing' is a standard suggestion form. 'Why don't we' and 'Let's' need bare infinitives; 'Shall we' also needs a bare infinitive. Only 'What about' naturally precedes a gerund.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "science"
          },
          {
            id: "dia-sugg-05",
            stem: "A: 'I want to learn more about Beethoven's life.' B: '___ read his biography together — I have a great one at home.'",
            options: ["Let's", "Shall we", "How about"],
            answer: "Let's",
            explanation: "'Let's' (= let us) is followed by a bare infinitive and directly proposes a joint action.",
            fullExplanation: "'Let's + bare infinitive' is a direct, enthusiastic joint suggestion. 'Shall we' is also correct but adds a questioning tone; 'How about' requires a gerund; 'Why don't' needs 'we' ('Why don't we read…').",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "personalities"
          },
          {
            id: "dia-sugg-06",
            stem: "A: 'Our presentation on the French Revolution feels too long.' B: '___ cut the section on the Directory? It's the least relevant part.'",
            options: ["Why not", "How about", "Shall we"],
            answer: "Why not",
            explanation: "'Why not' is followed by a bare infinitive and offers a suggestion without a subject pronoun.",
            fullExplanation: "'Why not + bare infinitive' is an informal suggestion pattern without requiring 'we'. 'How about' requires a gerund; 'Shall we' and 'Let's' would work but grammatically need 'we' stated or implied — 'Why not cut' is the cleanest match here.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "history"
          },
          {
            id: "dia-sugg-07",
            stem: "A: 'It's someone's birthday at the office tomorrow.' B: '___ all chip in and buy a gift together?'",
            options: ["Why don't we", "How about", "What about"],
            answer: "Why don't we",
            explanation: "'Why don't we' followed by a bare infinitive is the correct joint suggestion form here.",
            fullExplanation: "'Why don't we + bare infinitive' ('all chip in') is the correct structure. 'How about' and 'What about' require -ing; 'Why not' works but typically omits the subject ('Why not all chip in?' is informal but 'Why don't we' is more idiomatic with 'all').",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "social"
          },
          {
            id: "dia-sugg-08",
            stem: "A: 'The students are struggling to understand photosynthesis.' B: '___ show them a short animated video to explain the process?'",
            options: ["Shall we", "Let's", "How about"],
            answer: "Shall we",
            explanation: "'Shall we' before a bare infinitive asks for agreement to a suggestion.",
            fullExplanation: "'Shall we + bare infinitive' ('show them') is the correct suggestion structure asking for the listener's agreement. 'Let's' is also possible but more assertive; 'How about' and 'What about' need -ing forms.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "science"
          },
          {
            id: "dia-sugg-09",
            stem: "A: 'I can't decide what documentary to watch.' B: '___ the one about Frida Kahlo? It got excellent reviews.'",
            options: ["What about", "Why don't we", "Let's"],
            answer: "What about",
            explanation: "'What about' can be followed directly by a noun phrase to suggest it as an option.",
            fullExplanation: "'What about + noun phrase' ('the one about Frida Kahlo') is a standard suggestion pattern. 'Why don't we', 'Let's', and 'Shall we' all require a verb (bare infinitive) after them, not a noun phrase.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "personalities"
          },
          {
            id: "dia-sugg-10",
            stem: "A: 'We still need an introduction for the essay on the Cold War.' B: '___ start with the Berlin Blockade of 1948? It really sets the scene.'",
            options: ["Why not", "How about", "What about"],
            answer: "Why not",
            explanation: "'Why not + bare infinitive' is an informal suggestion that works well before 'start'.",
            fullExplanation: "'Why not start with…' is a natural informal suggestion. 'How about' and 'What about' need a gerund ('starting'); 'Shall we' also works but is more formal — 'Why not' is the most idiomatic choice here.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "history"
          },
          {
            id: "dia-sugg-11",
            stem: "A: 'I'm not sure where to go for lunch.' B: '___ trying that new Italian place on the high street?'",
            options: ["How about", "Why don't we", "Let's"],
            answer: "How about",
            explanation: "'How about + -ing' is the correct structure before a gerund.",
            fullExplanation: "'How about + gerund' ('trying that new Italian place') is the standard pattern. 'Why don't we', 'Let's', and 'Shall we' all require bare infinitives.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "social"
          },
          {
            id: "dia-sugg-12",
            stem: "A: 'We need to reduce carbon emissions from our school.' B: '___ install solar panels on the roof? It would be a great long-term investment.'",
            options: ["Let's", "What about", "How about"],
            answer: "Let's",
            explanation: "'Let's + bare infinitive' proposes a direct joint action.",
            fullExplanation: "'Let's install' proposes a concrete joint action. 'What about' and 'How about' require gerunds ('installing'); 'Why not' works but 'Let's' is more direct and committed as a proposal.",
            source: "Murphy, EGU (4e), Unit 36",
            flavor: "science"
          }
        ]
      },
      {
        id: "dia-infer",
        title: "Speaker intent inference",
        tasks: [
          {
            id: "dia-infer-01",
            stem: "A: 'Do you think Einstein fully understood the implications of his own theory?' B: '___' What does B mean?",
            options: ["The question remains unresolved among experts.", "B does not want to answer the question.", "Scientists agree that Einstein did not understand his theory."],
            answer: "The question remains unresolved among experts.",
            explanation: "B implies the issue is still debated by specialists rather than settled.",
            fullExplanation: "B's reply 'That's a question scientists are still debating' signals ongoing expert disagreement, not avoidance or consensus. Options 2 misreads tone as evasive; option 3 implies false consensus; option 4 is contradicted by active scientific debate.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "personalities"
          },
          {
            id: "dia-infer-02",
            stem: "A: 'Were the Romans really as advanced as people say?' B: '___' What does B mean?",
            options: ["B confirms that the Romans were indeed highly advanced.", "B thinks people overestimate Roman achievements.", "B is unsure whether the Romans were advanced."],
            answer: "B confirms that the Romans were indeed highly advanced.",
            explanation: "B uses a rhetorical question with concrete evidence to confirm Roman sophistication.",
            fullExplanation: "B's reply 'Have you seen their aqueduct systems? They supplied cities of a million people' is a rhetorical question presenting evidence in support of Roman advancement. The other options misread B's tone as doubtful or critical.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "history"
          },
          {
            id: "dia-infer-03",
            stem: "A: 'Should I bring anything to the dinner party?' B: '___' What does B mean?",
            options: ["B is saying A does not need to bring anything.", "B is asking A to bring only one small item.", "B thinks A would not enjoy the party."],
            answer: "B is saying A does not need to bring anything.",
            explanation: "'Just yourself is more than enough' is an idiom meaning no gift or contribution is needed.",
            fullExplanation: "B's reply 'Oh, just yourself is more than enough!' is a polite, welcoming idiom meaning A's presence alone is sufficient. The other options misinterpret the idiomatic expression as literal or as expressing negative feelings.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "social"
          },
          {
            id: "dia-infer-04",
            stem: "A: 'Is climate change really as serious as scientists claim?' B: '___' What does B mean?",
            options: ["B believes the scientific consensus is clear and long-established.", "B thinks scientists have been wrong for decades.", "B is unsure about the current scientific evidence."],
            answer: "B believes the scientific consensus is clear and long-established.",
            explanation: "'The evidence has been in for decades' implies conclusive, long-standing scientific proof.",
            fullExplanation: "B's reply 'The evidence has been in for decades' implies that data is overwhelmingly established and not new. This affirms the seriousness of climate change. Options 2-4 all misread B as doubtful or critical of the science.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "science"
          },
          {
            id: "dia-infer-05",
            stem: "A: 'Do you think Frida Kahlo would have been as famous without her health struggles?' B: '___' What does B mean?",
            options: ["B believes Kahlo's suffering was inseparable from her artistic identity.", "B thinks Kahlo's health struggles harmed the quality of her work.", "B is suggesting Kahlo exaggerated her suffering for fame."],
            answer: "B believes Kahlo's suffering was inseparable from her artistic identity.",
            explanation: "B implies that Kahlo's pain was not separate from her art — it was the content itself.",
            fullExplanation: "B's reply 'Her pain was literally the subject matter of her art' argues that the suffering and the art were one. This makes the question of fame without struggle logically moot. Options 2-4 misinterpret B as dismissive or as reducing Kahlo's fame to sympathy.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "personalities"
          },
          {
            id: "dia-infer-06",
            stem: "A: 'Do you think the French Revolution achieved its goals?' B: '___' What does B mean?",
            options: ["B thinks the Revolution's ideals were real but took generations to fulfil.", "B believes the Revolution was a complete failure.", "B thinks the Revolution achieved all its goals immediately."],
            answer: "B thinks the Revolution's ideals were real but took generations to fulfil.",
            explanation: "B implies the goals were significant but their realisation was slow and gradual.",
            fullExplanation: "B's reply 'It set ideals that took another century to even begin fulfilling' means the goals were genuine and historically influential, but not quickly achieved. This rules out immediate success (option 3), complete failure (option 2), and irrelevance (option 4).",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "history"
          },
          {
            id: "dia-infer-07",
            stem: "A: 'The queue for the cinema is enormous!' B: '___' What does B mean?",
            options: ["B regrets that they did not book tickets online in advance.", "B is blaming A for not booking the tickets.", "B is happy they chose not to book online."],
            answer: "B regrets that they did not book tickets online in advance.",
            explanation: "'I knew we should have booked online' expresses shared regret about a missed opportunity.",
            fullExplanation: "B's reply 'I knew we should have booked online' uses 'should have' to express regret about a past decision. The 'we' makes it a shared rather than personal regret, so option 2 (blaming A) is wrong. Options 3 and 4 contradict the tone of regret.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "social"
          },
          {
            id: "dia-infer-08",
            stem: "A: 'Is it true that humans only use 10% of their brains?' B: '___' What does B mean?",
            options: ["B is saying the claim is false according to scientific evidence.", "B believes humans actually use even less than 10% of their brains.", "B agrees that the 10% figure is accurate."],
            answer: "B is saying the claim is false according to scientific evidence.",
            explanation: "'Thoroughly debunked by neuroscience' means science has conclusively shown the claim is false.",
            fullExplanation: "B's reply 'That myth has been thoroughly debunked by neuroscience' means scientific research has definitively disproved the claim. 'Debunked' explicitly means shown to be false. Options 2 and 3 contradict this; option 4 contradicts 'by neuroscience'.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "science"
          },
          {
            id: "dia-infer-09",
            stem: "A: 'Did Beethoven's deafness make his music better or worse?' B: '___' What does B mean?",
            options: ["B implies deafness did not prevent and may have deepened Beethoven's creativity.", "B believes Beethoven's best work was written before he went deaf.", "B thinks deafness was the sole reason for Beethoven's success."],
            answer: "B implies deafness did not prevent and may have deepened Beethoven's creativity.",
            explanation: "B points to the greatest works coming after total deafness, suggesting adversity may have enriched his music.",
            fullExplanation: "B's reply 'Some of his greatest works came after he went completely deaf' implies that losing hearing was not a barrier and possibly intensified his inner musical imagination. Option 2 contradicts B's statement; option 3 overstates the causal claim; option 4 is the opposite of what B implies.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "personalities"
          },
          {
            id: "dia-infer-10",
            stem: "A: 'Was the Great Wall of China worth the enormous human cost?' B: '___' What does B mean?",
            options: ["B is saying the question is morally and historically complex.", "B thinks the Wall was clearly not worth the human cost.", "B believes the question has an obvious straightforward answer."],
            answer: "B is saying the question is morally and historically complex.",
            explanation: "'History rarely gives a straightforward answer' signals recognition of the issue's moral and historical complexity.",
            fullExplanation: "B's reply 'History rarely gives a straightforward answer to that kind of question' acknowledges competing values and perspectives that prevent simple judgement. This is not a refusal to engage (option 4), nor a simple verdict either way (options 2 or 3).",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "history"
          },
          {
            id: "dia-infer-11",
            stem: "A: 'I've applied for ten jobs and heard nothing back.' B: '___' What does B mean?",
            options: ["B is encouraging A to be patient and stay optimistic.", "B is telling A to stop applying for jobs.", "B thinks A is not qualified for the positions."],
            answer: "B is encouraging A to be patient and stay optimistic.",
            explanation: "'Give it time — the right one will come along' is a reassuring expression urging patience.",
            fullExplanation: "B's reply 'Give it time — the right one will come along' is an idiomatic expression of encouragement, urging patience rather than giving practical advice to change strategy. Options 2-4 all misread B as critical or directive.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "social"
          },
          {
            id: "dia-infer-12",
            stem: "A: 'Do you think we will ever find life on another planet?' B: '___' What does B mean?",
            options: ["B thinks the existence of extraterrestrial life is statistically likely.", "B is certain that life has already been found on another planet.", "B believes the search for extraterrestrial life is pointless."],
            answer: "B thinks the existence of extraterrestrial life is statistically likely.",
            explanation: "B argues from the vastness of the universe that extraterrestrial life is probable.",
            fullExplanation: "B's reply 'Given the sheer number of planets out there, it would be more surprising if we didn't' is a probability argument, not a claim of confirmed discovery. Options 2 and 3 contradict B's reasoning; option 4 contradicts 'the sheer number of planets'.",
            source: "CT/CE Trainer Practice, dialogue inference",
            flavor: "science"
          }
        ]
      }
    ]
  }

]; /* end LEARN_TOPICS */


/* ─── PRESET DEFINITIONS ─────────────────────────────────────────────────── */
const LEARN_PRESETS = [
  {
    id: 'tenses',
    label: 'All Tenses',
    topicIds: ['verb-tenses']
  },
  {
    id: 'vocabulary',
    label: 'All Vocabulary',
    topicIds: ['vocabulary']
  },
  {
    id: 'prepositions',
    label: 'All Prepositions',
    topicIds: ['prepositions']
  },
  {
    id: 'grammar',
    label: 'All Grammar',
    topicIds: ['mixed-grammar', 'articles', 'error-id', 'word-formation']
  }
];

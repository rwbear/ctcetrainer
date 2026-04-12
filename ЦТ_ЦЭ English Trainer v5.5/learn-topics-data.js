/* ═══════════════════════════════════════════════════════════════════════════
   LEARN TOPICS DATA  —  learn-topics-data.js
   7 topics · 98 subtopics · 1545 tasks
   NOTE: options[0] = correct answer — shuffled at runtime.
   alternateAnswers[] present where multiple answers are valid.
   hint field present on Word Formation tasks (base word).
   ═══════════════════════════════════════════════════════════════════════════ */

const LEARN_TOPICS = [
  /* ─── VERB TENSES & VOICE ─── */
  {
    id: "verb-tenses",
    title: "Verb Tenses & Voice",
    preset: "tenses",
    subtopics: [
      {
        id: "vt-prs-s",
        title: "Present Simple",
        tasks: [
          {
            id: "vt-prs-s-01",
            stem: "The Earth ___ around the Sun once every year.",
            options: ["revolves", "is revolving", "revolved"],
            answer: "revolves",
            explanation: "Scientific facts take the Present Simple; 'revolves' is the correct 3rd-person singular form.",
            fullExplanation: "Present Simple is used for permanent truths and scientific facts. Third-person singular adds -s/-es. Present Continuous describes actions in progress right now, not timeless facts. 'Revolved' is past tense, which implies the Earth no longer orbits the Sun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-02",
            stem: "The library ___ at nine o'clock every morning, including Saturdays.",
            options: ["opens", "is opening", "has opened"],
            answer: "opens",
            explanation: "'opens' — Timetabled, scheduled events use Present Simple.",
            fullExplanation: "Present Simple is used for fixed timetables and schedules. 'Is opening' would mean the library is in the process of opening right now. 'Has opened' is Present Perfect, which focuses on a completed action with present relevance, not a routine schedule.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-03",
            stem: "Water ___ at 100 degrees Celsius at sea level.",
            options: ["boils", "is boiling", "boiled"],
            answer: "boils",
            explanation: "'boils' — Scientific laws and permanent truths use Present Simple.",
            fullExplanation: "This is a scientific fact — it describes a law of physics, not an action happening right now. Present Simple is the correct form for permanent and universal truths. 'Is boiling' would mean we are watching the water boil at this moment.",
            source: "Swan, M. Practical English Usage (4th ed.), §482.1"
          },
          {
            id: "vt-prs-s-04",
            stem: "___ the last train to Edinburgh always leave from Platform 3?",
            options: ["Does", "Do", "Is"],
            answer: "Does",
            explanation: "'Does' introduces a Yes/No question in Present Simple for a 3rd-person singular subject.",
            fullExplanation: "Yes/No questions in Present Simple with he/she/it require 'Does' + base verb. 'Do' is used with I/you/we/they. 'Is' would start a Present Continuous question, suggesting the train is in the process of leaving right now.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-05",
            stem: "She ___ three languages fluently: English, French, and Mandarin.",
            options: ["speaks", "is speaking", "has been speaking"],
            answer: "speaks",
            explanation: "'speaks' — Permanent abilities and states use Present Simple, not continuous forms.",
            fullExplanation: "Permanent abilities are described with Present Simple. 'Is speaking' would mean she is speaking at this very moment. 'Has been speaking' (Present Perfect Continuous) would stress the uninterrupted duration of an activity, which is inappropriate here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-06",
            stem: "The conference ___ on the 15th of March and ___ on the 19th.",
            options: ["starts / ends", "is starting / is ending", "started / ended"],
            answer: "starts / ends",
            explanation: "'starts' — Fixed future timetables use Present Simple, even when referring to the future.",
            fullExplanation: "Scheduled events on a timetable or calendar are expressed with Present Simple even when they refer to the future. 'Is starting / is ending' would be Present Continuous (used for personal arrangements, not official timetables). The past tense is wrong because the event has not happened yet.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-07",
            stem: "My grandfather ___ chess every evening after dinner.",
            options: ["plays", "is playing", "has played"],
            answer: "plays",
            explanation: "'plays' — Regular habits and routines use Present Simple.",
            fullExplanation: "Present Simple is used to describe habits and routines that happen repeatedly. Adverbs like 'every evening' are clear signals. 'Is playing' describes an action in progress at this moment, not a habit. 'Has played' focuses on past experience with present relevance.",
            source: "Swan, M. Practical English Usage (4th ed.), §482.2"
          },
          {
            id: "vt-prs-s-08",
            stem: "The sun ___ in the east and ___ in the west.",
            options: ["rises / sets", "is rising / is setting", "rose / set"],
            answer: "rises / sets",
            explanation: "'rises' — Universal geographical and natural facts use Present Simple.",
            fullExplanation: "These are permanent, universal facts about nature. Present Simple is the only correct form. Continuous forms describe ongoing actions happening right now. Past forms would incorrectly imply this is no longer true.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-09",
            stem: "He never ___ his coffee with sugar — he prefers it black.",
            options: ["drinks", "is drinking", "drank"],
            answer: "drinks",
            explanation: "'drinks' — 'Never' signals a habitual state — Present Simple is required.",
            fullExplanation: "The adverb 'never' indicates a habitual or permanent preference, which requires Present Simple. 'Is drinking' would describe what he is doing at this moment. 'Drank' is past tense and implies this habit belongs only to the past.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-10",
            stem: "The committee ___ twice a month to review the budget.",
            options: ["meets", "is meeting", "met"],
            answer: "meets",
            explanation: "'meets' — Regularly scheduled group activities use Present Simple.",
            fullExplanation: "A recurring meeting on a regular schedule is described with Present Simple. 'Is meeting' suggests the committee is meeting right now. 'Met' is Past Simple, describing a completed single event in the past.",
            source: "Swan, M. Practical English Usage (4th ed.), §482.2"
          },
          {
            id: "vt-prs-s-11",
            stem: "Light ___ much faster than sound — nearly a million times faster.",
            options: ["travels", "is travelling", "travelled"],
            answer: "travels",
            explanation: "'travels' — Scientific facts about physical properties use Present Simple.",
            fullExplanation: "This is a scientific fact about the constant speed of light — a universal truth that never changes. Present Simple is the required form. Continuous and past forms would be inappropriate for a timeless physical law.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-12",
            stem: "The CEO ___ the annual report to shareholders every April.",
            options: ["presents", "is presenting", "has presented"],
            answer: "presents",
            explanation: "'presents' — 'Every April' signals a repeated annual event — Present Simple is correct.",
            fullExplanation: "The expression 'every April' marks this as a regular, annual event. Present Simple describes such routines. 'Is presenting' would mean the CEO is doing this right now. 'Has presented' focuses on past experience, not a regular schedule.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-13",
            stem: "Bees ___ pollen from flowers to produce honey.",
            options: ["collect", "are collecting", "collected"],
            answer: "collect",
            explanation: "'collect' — General biological behaviour is a permanent fact — Present Simple applies.",
            fullExplanation: "This describes a permanent, general biological truth about bees as a species, not an action happening right now. Present Simple is used for scientific and natural facts. 'Are collecting' would mean we are watching specific bees doing this right now.",
            source: "Swan, M. Practical English Usage (4th ed.), §482.1"
          },
          {
            id: "vt-prs-s-14",
            stem: "Our flight ___ at 06:45, so we need to be at the airport by 04:30.",
            options: ["departs", "is departing", "departed"],
            answer: "departs",
            explanation: "'departs' — Fixed transport timetables use Present Simple even when referring to the future.",
            fullExplanation: "Flight times on official timetables are expressed with Present Simple, even when the event is in the future. This is a key use of Present Simple that distinguishes it from Present Continuous, which is used for personal arrangements rather than official schedules.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-s-15",
            stem: "The human heart ___ approximately 100,000 times every single day.",
            options: ["beats", "is beating", "beat"],
            answer: "beats",
            explanation: "'beats' — A permanent biological fact about the body uses Present Simple.",
            fullExplanation: "This is a scientific/biological fact that is always true. Present Simple describes permanent states and universal truths. 'Is beating' would imply we are listening to a specific heart right now. 'Beat' (past) would incorrectly suggest this is no longer true.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          }
        ]
      },
      {
        id: "vt-prs-c",
        title: "Present Continuous",
        tasks: [
          {
            id: "vt-prs-c-01",
            stem: "Please be quiet — the baby ___ in the next room.",
            options: ["is sleeping", "sleeps", "slept"],
            answer: "is sleeping",
            explanation: "'Is sleeping' describes an action in progress at this exact moment.",
            fullExplanation: "Present Continuous (am/is/are + -ing) describes actions happening right now. 'Be quiet' and 'in the next room' confirm this is happening at this moment. 'Sleeps' (Present Simple) would describe a habit. 'Slept' is past tense.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-02",
            stem: "We ___ our holidays in Portugal next August — the hotel is already booked.",
            options: ["are spending", "spend", "will spending"],
            answer: "are spending",
            explanation: "'are spending' — Present Continuous expresses a fixed future personal arrangement.",
            fullExplanation: "When a future plan is already arranged and confirmed (the hotel is booked), Present Continuous is used. 'Spend' (Present Simple) would describe a habit or routine. 'Will spending' is not a grammatical form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 3"
          },
          {
            id: "vt-prs-c-03",
            stem: "Why ___ you ___ at me like that? Have I said something wrong?",
            options: ["are / looking", "do / look", "have / looked"],
            answer: "are / looking",
            explanation: "'Are you looking' is the interrogative form of Present Continuous for an action happening now.",
            fullExplanation: "Present Continuous questions are formed with am/is/are + subject + -ing. The stare is happening at this very moment, which rules out Present Simple (habit) and Present Perfect (completed action with present relevance).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-04",
            stem: "The engineers ___ a new bridge across the river this year.",
            options: ["are constructing", "construct", "constructed"],
            answer: "are constructing",
            explanation: "'are constructing' — 'This year' marks a temporary activity in progress — Present Continuous is correct.",
            fullExplanation: "Present Continuous describes a temporary activity happening around the present time. 'This year' signals an ongoing project, not a permanent situation. 'Construct' (Present Simple) would suggest building bridges is their permanent, habitual activity. 'Constructed' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-05",
            stem: "She ___ to learn Japanese this semester at the language centre.",
            options: ["is trying", "tries", "tried"],
            answer: "is trying",
            explanation: "'is trying' — A temporary effort happening around the current period uses Present Continuous.",
            fullExplanation: "'This semester' signals a temporary, time-limited activity. Present Continuous is used for actions in progress over a period around the present. 'Tries' (Present Simple) would suggest this is her permanent, ongoing habit. 'Tried' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-06",
            stem: "The company ___ its headquarters to Berlin next month.",
            options: ["is moving", "moves", "moved"],
            answer: "is moving",
            explanation: "'is moving' — A definite future arrangement is expressed with Present Continuous.",
            fullExplanation: "A planned future event that is already decided and arranged uses Present Continuous. 'Next month' confirms it is future, but the plan is already in place. 'Moves' (Present Simple) would suggest a routine. 'Moved' is past tense.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 3"
          },
          {
            id: "vt-prs-c-07",
            stem: "Look! The volcano ___ — we need to evacuate immediately.",
            options: ["is erupting", "erupts", "has erupted"],
            answer: "is erupting",
            explanation: "'is erupting' — 'Look!' signals something happening at this very moment — Present Continuous is required.",
            fullExplanation: "'Look!' is a classic signal that the speaker is directing attention to something happening right now. Present Continuous describes an action in progress at this exact moment. 'Erupts' (Present Simple) would suggest this is a regular, scheduled event. 'Has erupted' focuses on the result, not the ongoing action.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-08",
            stem: "I ___ with my cousin this week while my apartment is being repaired.",
            options: ["am staying", "stay", "stayed"],
            answer: "am staying",
            explanation: "'am staying' — A temporary arrangement for a specific, limited period uses Present Continuous.",
            fullExplanation: "'This week' signals a temporary situation. Present Continuous expresses temporary states that contrast with the norm. 'Stay' (Present Simple) would suggest living with the cousin permanently. 'Stayed' is past tense.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-09",
            stem: "The professor ___ a very interesting argument in today's lecture.",
            options: ["is making", "makes", "has been making"],
            answer: "is making",
            explanation: "'is making' — An action in progress during the current lecture uses Present Continuous.",
            fullExplanation: "The phrase 'in today's lecture' places the action firmly in the present moment. Present Continuous describes what is happening now. 'Makes' would describe a habitual pattern. 'Has been making' would emphasise duration, not the ongoing present action.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-10",
            stem: "Sales figures ___ this quarter, which is encouraging for investors.",
            options: ["are rising", "rise", "rose"],
            answer: "are rising",
            explanation: "'are rising' — A changing trend happening around the present period uses Present Continuous.",
            fullExplanation: "Present Continuous can describe a developing or changing situation happening around now. 'This quarter' marks the current period. 'Rise' (Present Simple) would suggest a permanent, unchanging fact. 'Rose' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-11",
            stem: "He ___ a meeting with the director at 3 pm tomorrow.",
            options: ["is having", "has", "will having"],
            answer: "is having",
            explanation: "'is having' — A fixed future appointment uses Present Continuous.",
            fullExplanation: "Present Continuous is used for future events that are already arranged. 'Having a meeting' is an event/appointment, so it can appear in continuous form despite 'have' generally being stative. 'Has' (Present Simple) would describe a permanent situation or ownership. 'Will having' is not grammatical.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 3"
          },
          {
            id: "vt-prs-c-12",
            stem: "Temperatures across Europe ___ due to the ongoing climate crisis.",
            options: ["are increasing", "increase", "increased"],
            answer: "are increasing",
            explanation: "'are increasing' — A slow but ongoing change around the present uses Present Continuous.",
            fullExplanation: "Present Continuous describes trends and changing situations, not just actions happening at this precise moment. 'Due to the ongoing climate crisis' signals a gradual change in progress. 'Increase' (Present Simple) would suggest a simple, timeless fact. 'Increased' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-13",
            stem: "Don't call her now — she ___ her final exams this week.",
            options: ["is taking", "takes", "took"],
            answer: "is taking",
            explanation: "'is taking' — 'This week' marks a temporary event in progress — Present Continuous is correct.",
            fullExplanation: "The instruction 'Don't call her now' reinforces that something is happening in the present period. 'This week' signals a temporary, ongoing situation. 'Takes' (Present Simple) would describe a habit. 'Took' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-c-14",
            stem: "I can't talk right now — I ___ dinner with my family.",
            options: ["am having", "have", "had"],
            answer: "am having",
            explanation: "'am having' — An action in progress at this very moment uses Present Continuous, even for 'have'.",
            fullExplanation: "Although 'have' is typically a stative verb, 'have dinner/lunch/a meal' is an event/activity and can be used in continuous form. 'I can't talk right now' confirms the action is in progress. 'Have' alone (Present Simple) would sound unnatural here. 'Had' is past tense.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 4"
          },
          {
            id: "vt-prs-c-15",
            stem: "The two countries ___ a new trade agreement later this month.",
            options: ["are signing", "sign", "signed"],
            answer: "are signing",
            explanation: "'are signing' — A future event that is already officially planned uses Present Continuous.",
            fullExplanation: "When a formal future event is already confirmed and arranged, Present Continuous is used. 'Later this month' is future, but the arrangement is already in place. 'Sign' (Present Simple) would be used for timetabled routines, not one-time arrangements. 'Signed' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 3"
          }
        ]
      },
      {
        id: "vt-prs-sc",
        title: "Present Simple vs Continuous",
        tasks: [
          {
            id: "vt-prs-sc-01",
            stem: "I ___ what you mean — could you give an example?",
            options: ["don't understand", "am not understanding", "haven't understood"],
            answer: "don't understand",
            explanation: "'don't understand' — 'Understand' is a stative verb and cannot be used in continuous form.",
            fullExplanation: "Stative verbs describe mental states (understand, know, believe, remember, want, like, love, hate, need, prefer, forget). They are not normally used in continuous forms, even when referring to the present moment. 'Am not understanding' is non-standard. 'Haven't understood' is Present Perfect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 4"
          },
          {
            id: "vt-prs-sc-02",
            stem: "She usually ___ coffee, but today she ___ green tea.",
            options: ["drinks / is drinking", "is drinking / drinks", "drinks / drinks"],
            answer: "drinks / is drinking",
            explanation: "'drinks' — Present Simple for habits; Present Continuous for temporary exceptions.",
            fullExplanation: "'Usually' signals a habit → Present Simple. 'Today' signals a temporary change from the norm → Present Continuous. This contrast is one of the most tested patterns in the exam.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 1-2"
          },
          {
            id: "vt-prs-sc-03",
            stem: "He ___ that the new policy will have serious consequences.",
            options: ["believes", "is believing", "has believed"],
            answer: "believes",
            explanation: "'believes' — 'Believe' is a stative verb expressing an opinion — not used in continuous form.",
            fullExplanation: "Verbs of thinking and opinion (believe, know, think meaning 'hold an opinion', understand, suppose, expect, feel meaning 'think') are stative and do not take continuous forms. 'Is believing' is incorrect. 'Has believed' would focus on past experience.",
            source: "Swan, M. Practical English Usage (4th ed.), §552"
          },
          {
            id: "vt-prs-sc-04",
            stem: "The researcher ___ the data for her thesis at the moment.",
            options: ["is analysing", "analyses", "has analysed"],
            answer: "is analysing",
            explanation: "'is analysing' — 'At the moment' marks an ongoing, temporary activity — Present Continuous is required.",
            fullExplanation: "'At the moment' is one of the clearest Present Continuous signal phrases. It indicates an activity in progress right now. 'Analyses' (Present Simple) would describe her general, habitual work. 'Has analysed' focuses on a completed result.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-sc-05",
            stem: "This soup ___ delicious — what spices did you use?",
            options: ["tastes", "is tasting", "tasted"],
            answer: "tastes",
            explanation: "'tastes' — 'Taste' in the sense of 'having a flavour' is stative — Present Simple is correct.",
            fullExplanation: "Sense verbs (taste, smell, feel, look, sound) when used to describe a quality rather than an action are stative. 'The soup tastes delicious' = the soup has the quality of deliciousness. Compare: 'The chef is tasting the soup' (an action — tasting on purpose).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 4"
          },
          {
            id: "vt-prs-sc-06",
            stem: "I ___ my old friend online these days — she moved to Canada.",
            options: ["am missing", "miss", "have been missing"],
            answer: "am missing",
            explanation: "Here 'miss' describes a temporary emotional experience — both forms are possible, but 'am missing' emphasises the ongoing feeling right now.",
            fullExplanation: "While 'miss' is sometimes treated as stative, in informal English it can appear in continuous form to emphasise the active, ongoing nature of the feeling. 'Am missing' stresses that the feeling is particularly strong right now. 'Miss' (Present Simple) is also acceptable. 'Have been missing' would stress duration.",
            source: "Swan, M. Practical English Usage (4th ed.), §552.3",
            alternateAnswers: ["miss"]
          },
          {
            id: "vt-prs-sc-07",
            stem: "He ___ a year in Tokyo to improve his Japanese before starting his PhD.",
            options: ["is spending", "spends", "spent"],
            answer: "is spending",
            explanation: "'is spending' — A temporary stay during a specific period uses Present Continuous.",
            fullExplanation: "'A year in Tokyo' is a temporary, time-limited arrangement — not a permanent habit. Present Continuous describes temporary situations. 'Spends' (Present Simple) would imply this is a permanent, recurring pattern. 'Spent' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-sc-08",
            stem: "The new director ___ a very different approach to team management.",
            options: ["has", "is having", "is getting"],
            answer: "has",
            explanation: "'has' — 'Have' in the sense of 'possess a quality' is stative — Present Continuous is not used.",
            fullExplanation: "When 'have' means 'possess', 'own', or 'hold a quality', it is stative and does not take a continuous form. 'Is having' would be used for events/activities (is having a meeting, is having dinner). 'Is getting' changes the meaning entirely.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 4"
          },
          {
            id: "vt-prs-sc-09",
            stem: "___ you ___ anyone in London we could contact for advice?",
            options: ["Do / know", "Are / knowing", "Have / been knowing"],
            answer: "Do / know",
            explanation: "'Know' is a stative verb — it cannot be used in any continuous form.",
            fullExplanation: "'Know' is a stative verb of cognition that is never used in continuous forms. The correct question form with a stative verb is Do/Does + subject + base verb. 'Are knowing' is ungrammatical. 'Have been knowing' is also impossible.",
            source: "Swan, M. Practical English Usage (4th ed.), §552"
          },
          {
            id: "vt-prs-sc-10",
            stem: "The factory ___ about 2,000 cars a week, but this month they ___ at reduced capacity.",
            options: ["produces / are operating", "is producing / operate", "produces / operate"],
            answer: "produces / are operating",
            explanation: "'produces' — Present Simple for the normal rate; Present Continuous for the temporary exception.",
            fullExplanation: "The normal production rate is a habitual fact → Present Simple. The reduced capacity 'this month' is a temporary deviation → Present Continuous. This two-clause contrast pattern frequently appears in exam tasks.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 1-2"
          },
          {
            id: "vt-prs-sc-11",
            stem: "I ___ the novel is interesting, but I ___ it slowly because of work.",
            options: ["think / am reading", "am thinking / read", "think / read"],
            answer: "think / am reading",
            explanation: "'Think' expressing opinion is stative; 'read' here is a temporary ongoing activity.",
            fullExplanation: "When 'think' means 'hold an opinion', it is stative → Present Simple. 'Am reading' describes an ongoing activity in progress over the current period ('because of work' explains the slow pace) → Present Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 1-4"
          },
          {
            id: "vt-prs-sc-12",
            stem: "Why ___ you ___ your pen? It's very distracting.",
            options: ["are / tapping", "do / tap", "have / tapped"],
            answer: "are / tapping",
            explanation: "'are' — An annoying action happening right now at this moment uses Present Continuous.",
            fullExplanation: "'Why are you doing that?' addresses an action happening at this exact moment. The implied meaning is 'You are tapping your pen right now — stop it.' Present Simple 'do you tap' would describe a permanent habit. Present Perfect 'have you tapped' would focus on experience.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 2"
          },
          {
            id: "vt-prs-sc-13",
            stem: "The water in the kettle ___ — shall I make tea?",
            options: ["is boiling", "boils", "boiled"],
            answer: "is boiling",
            explanation: "'is boiling' — An action happening at this precise moment uses Present Continuous.",
            fullExplanation: "'The water is boiling' = we can see/hear it boiling right now. Compare: 'Water boils at 100°C' (Present Simple — a scientific fact). The signal here is the offer to make tea, which only makes sense if the boiling is happening now.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 1-2"
          },
          {
            id: "vt-prs-sc-14",
            stem: "She always ___ her keys, which ___ everyone in the office.",
            options: ["loses / annoys", "is losing / annoys", "loses / is annoying"],
            answer: "loses / annoys",
            explanation: "'loses' — 'Always' signals habitual actions — both verbs use Present Simple.",
            fullExplanation: "'Always' with Present Simple describes a repeated habit or characteristic. Both clauses describe habitual patterns. Note: 'She is always losing her keys' (Present Continuous with 'always') is also possible and expresses irritation/criticism, but is a different construction. The question tests the basic rule.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 1"
          },
          {
            id: "vt-prs-sc-15",
            stem: "I ___ your point, but I still ___ we should reconsider the budget.",
            options: ["see / think", "am seeing / think", "see / am thinking"],
            answer: "see / think",
            explanation: "Both 'see' (perceive/understand) and 'think' (hold opinion) are stative here.",
            fullExplanation: "'See' meaning 'understand/perceive' is stative → Present Simple. 'Think' meaning 'hold an opinion' is stative → Present Simple. Compare: 'I am seeing the doctor tomorrow' (an arrangement — 'see' as event) and 'I am thinking about your offer' (a mental process in progress — 'think' as dynamic).",
            source: "Swan, M. Practical English Usage (4th ed.), §552"
          }
        ]
      },
      {
        id: "vt-pst-s",
        title: "Past Simple",
        tasks: [
          {
            id: "vt-pst-s-01",
            stem: "Scientists ___ the structure of DNA in 1953.",
            options: ["discovered", "have discovered", "were discovering"],
            answer: "discovered",
            explanation: "'discovered' — Past Simple is used for a completed action at a specific past time (1953).",
            fullExplanation: "A definite time expression in the past (1953) requires Past Simple. Present Perfect cannot be used with a specific finished time. Past Continuous describes a background action in progress, not a completed discovery.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 6-7"
          },
          {
            id: "vt-pst-s-02",
            stem: "She ___ three languages by the time she graduated from university.",
            options: ["spoke", "has spoken", "was speaking"],
            answer: "spoke",
            explanation: "'spoke' — 'By the time she graduated' places both actions in a completed past sequence.",
            fullExplanation: "This sentence describes a situation that existed in the past. 'By the time she graduated' sets a definite past reference point. Past Simple (spoke) describes the state at that time. Past Perfect would also be possible, but Past Simple is the primary answer at B1 level.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 6"
          },
          {
            id: "vt-pst-s-03",
            stem: "The committee ___ not approve the proposal at last week's meeting.",
            options: ["did", "does", "has"],
            answer: "did",
            explanation: "Negative Past Simple uses 'did not' + base verb; 'did' is the auxiliary.",
            fullExplanation: "In negative Past Simple sentences, the auxiliary 'did' (past of 'do') carries the tense. The main verb returns to its base form: 'did not approve'. 'Does not' is Present Simple. 'Has not approved' is Present Perfect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "vt-pst-s-04",
            stem: "When ___ you last ___ to your doctor about the test results?",
            options: ["did / speak", "do / speak", "have / spoken"],
            answer: "did / speak",
            explanation: "'When' with a specific past event requires Past Simple; 'did' is the auxiliary in the question.",
            fullExplanation: "'When' in a question about a specific past event requires Past Simple. The auxiliary 'did' is placed before the subject, and the main verb is in its base form. 'Do you speak' is Present Simple. 'Have you spoken' is Present Perfect, which cannot be used with 'when' referring to a specific time.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 6-7"
          },
          {
            id: "vt-pst-s-05",
            stem: "Marie Curie ___ the Nobel Prize twice — in 1903 and again in 1911.",
            options: ["won", "has won", "was winning"],
            answer: "won",
            explanation: "'won' — Specific past dates require Past Simple, not Present Perfect.",
            fullExplanation: "The specific dates (1903 and 1911) make it clear that these events are finished and completed in the past. Present Perfect cannot be used with definite past time expressions. Past Continuous 'was winning' is not used for completed achievements.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 7-8"
          },
          {
            id: "vt-pst-s-06",
            stem: "The company ___ its first million in profit three years after its founding.",
            options: ["made", "has made", "was making"],
            answer: "made",
            explanation: "'made' — 'Three years after its founding' is a definite completed past moment — Past Simple is required.",
            fullExplanation: "A completed action at a defined point in the past takes Past Simple. 'Three years after its founding' specifies exactly when. Present Perfect cannot be combined with such specific past time references. Past Continuous would describe an ongoing process, not a completed milestone.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 6"
          },
          {
            id: "vt-pst-s-07",
            stem: "I ___ a very interesting podcast episode during my commute yesterday.",
            options: ["listened to", "have listened to", "was listening to"],
            answer: "listened to",
            explanation: "'listened to' — 'Yesterday' is a definite past time expression — Past Simple is required.",
            fullExplanation: "'Yesterday' clearly locates the event in a finished period of time, requiring Past Simple. Present Perfect cannot be used with 'yesterday'. 'Was listening to' (Past Continuous) would suggest an action in progress that was possibly interrupted, not a completed listening session.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 6"
          },
          {
            id: "vt-pst-s-08",
            stem: "The ancient Romans ___ a complex system of roads throughout Europe.",
            options: ["built", "have built", "were building"],
            answer: "built",
            explanation: "'built' — Completed actions by a group that no longer exists require Past Simple.",
            fullExplanation: "The ancient Romans are a historical group that no longer exists. Present Perfect cannot connect actions of such groups to the present. Past Simple is the only correct form for completed historical actions. 'Were building' emphasises the process, not the completed achievement.",
            source: "Swan, M. Practical English Usage (4th ed.), §483"
          },
          {
            id: "vt-pst-s-09",
            stem: "___ you ___ the director personally when you attended the film festival?",
            options: ["Did / meet", "Have / met", "Do / meet"],
            answer: "Did / meet",
            explanation: "'Did' — A question about a specific completed past event (attending the festival) uses Past Simple.",
            fullExplanation: "The context refers to a specific past event (the film festival you attended). Questions about specific, completed past events use Past Simple. 'Have you met' (Present Perfect) would ask about life experience without specifying when. 'Do you meet' is Present Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 6-7"
          },
          {
            id: "vt-pst-s-10",
            stem: "The earthquake ___ more than 8,000 people homeless overnight.",
            options: ["left", "has left", "was leaving"],
            answer: "left",
            explanation: "'left' — A specific past natural disaster event uses Past Simple for its consequences.",
            fullExplanation: "The earthquake is a specific, completed past event. Its consequence (leaving people homeless) was also a definite past outcome. Present Perfect would be used if the connection to the present is the focus — but without a time expression here, Past Simple narrates the historical event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 6"
          },
          {
            id: "vt-pst-s-11",
            stem: "She ___ the violin for twelve years before switching to the piano.",
            options: ["played", "had played", "was playing"],
            answer: "played",
            explanation: "'played' — Past Simple describes a completed period of activity that ended in the past.",
            fullExplanation: "Although Past Perfect would also be grammatically possible (had played), Past Simple is fully correct here and is the primary form tested at B1 level for this pattern. 'For twelve years' describes the duration of a completed past activity. 'Was playing' would emphasise a moment in progress, not the duration.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 6"
          },
          {
            id: "vt-pst-s-12",
            stem: "The government ___ new environmental regulations into law last year.",
            options: ["passed", "has passed", "was passing"],
            answer: "passed",
            explanation: "'passed' — 'Last year' is a finished time period — Past Simple is required.",
            fullExplanation: "'Last year' specifies a completed, finished period of time. Past Simple is the correct tense. Present Perfect cannot be used with 'last year'. 'Was passing' would incorrectly suggest the process was still ongoing and was possibly interrupted.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 6-7"
          },
          {
            id: "vt-pst-s-13",
            stem: "Columbus ___ the Americas in 1492, although he believed he had reached Asia.",
            options: ["reached", "has reached", "was reaching"],
            answer: "reached",
            explanation: "'reached' — Historical completed events at a specific time use Past Simple.",
            fullExplanation: "This is a historical fact with a specific year (1492). Past Simple is the only correct form for such completed historical events. Present Perfect requires a connection to the present and cannot be used with specific past dates. 'Was reaching' describes a process, not an arrival.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "vt-pst-s-14",
            stem: "He ___ his thesis successfully and received his doctorate last June.",
            options: ["defended", "has defended", "was defending"],
            answer: "defended",
            explanation: "'defended' — 'Last June' is a completed time period in the past — Past Simple is the only option.",
            fullExplanation: "'Last June' locates the action firmly in a finished past period. Both actions (defending and receiving) are completed events in sequence. Present Perfect cannot be used with 'last June'. 'Was defending' describes a process in progress, not a completed defence.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 6"
          },
          {
            id: "vt-pst-s-15",
            stem: "The fire ___ quickly through the old building, destroying everything inside.",
            options: ["spread", "has spread", "was spreading"],
            answer: "spread",
            explanation: "'spread' — A completed sequence of events in the past narrative uses Past Simple.",
            fullExplanation: "This narrates a completed past event. Past Simple is used for narrative sequences — actions that follow each other in chronological order. 'Has spread' (Present Perfect) would focus on present relevance, not the historical event. 'Was spreading' could describe the ongoing process but changes the meaning slightly — the sentence implies the spread is completed.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 6"
          }
        ]
      },
      {
        id: "vt-pst-c",
        title: "Past Continuous",
        tasks: [
          {
            id: "vt-pst-c-01",
            stem: "I ___ a report when the power cut suddenly happened.",
            options: ["was writing", "wrote", "had written"],
            answer: "was writing",
            explanation: "'was writing' — Past Continuous for the background action interrupted by a Past Simple event.",
            fullExplanation: "Past Continuous (was/were + -ing) describes an action in progress at a past moment. 'When the power cut happened' introduces the interrupting event in Past Simple. This is the classic interrupted-action pattern.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-02",
            stem: "While the children ___ in the garden, their parents prepared lunch inside.",
            options: ["were playing", "played", "had played"],
            answer: "were playing",
            explanation: "'were playing' — 'While' introduces the ongoing background action — Past Continuous is required.",
            fullExplanation: "'While' signals two simultaneous activities: one ongoing (Past Continuous) and one that may also be ongoing or completed. Here, 'were playing' is the background activity running parallel to 'prepared lunch'. Using Past Simple 'played' after 'while' would suggest the playing was completed before lunch preparation began.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-03",
            stem: "At this time yesterday, we ___ through the Austrian Alps by train.",
            options: ["were travelling", "travelled", "have travelled"],
            answer: "were travelling",
            explanation: "'were travelling' — 'At this time yesterday' pins us to a specific moment in the past — Past Continuous is required.",
            fullExplanation: "'At this time yesterday' specifies a moment in the past and asks what was in progress at that exact moment. Past Continuous is used for actions in progress at a specific past time. 'Travelled' (Past Simple) describes a completed journey. Present Perfect refers to experience, not a specific past moment.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-04",
            stem: "She ___ her favourite song when she heard the terrible news.",
            options: ["was humming", "hummed", "had hummed"],
            answer: "was humming",
            explanation: "'was humming' — Past Continuous for the action in progress before it was interrupted.",
            fullExplanation: "The humming was a background activity in progress when the news arrived (the interrupting event). Past Continuous = was/were + -ing. Past Simple 'hummed' would suggest the humming was completed before the news — a different sequence. Past Perfect 'had hummed' also implies completion before another event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-05",
            stem: "While I ___ for the bus, I ran into my old university professor.",
            options: ["was waiting", "waited", "had waited"],
            answer: "was waiting",
            explanation: "'was waiting' — 'While' with a simultaneous event uses Past Continuous for the ongoing background.",
            fullExplanation: "The waiting was in progress (background) when the encounter occurred (event). 'While + Past Continuous' is the standard pattern for this meaning. 'Waited' after 'while' would imply the wait ended before the encounter. 'Had waited' implies the wait was completed before the encounter.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-06",
            stem: "The suspect ___ CCTV footage from the bank at the time of the robbery.",
            options: ["was reviewing", "reviewed", "had reviewed"],
            answer: "was reviewing",
            explanation: "'was reviewing' — An action in progress at a specific past time uses Past Continuous.",
            fullExplanation: "The phrase 'at the time of the robbery' pinpoints a past moment. Past Continuous describes what was in progress at that exact time — providing an alibi. 'Reviewed' (Past Simple) describes a completed review event, not an ongoing process. 'Had reviewed' places the completion before another past event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-07",
            stem: "The two scientists ___ on their research when the breakthrough finally occurred.",
            options: ["were collaborating", "collaborated", "have collaborated"],
            answer: "were collaborating",
            explanation: "'were collaborating' — 'When the breakthrough occurred' interrupts the ongoing collaboration — Past Continuous is needed.",
            fullExplanation: "Past Continuous sets the scene of an ongoing activity. When a specific event (the breakthrough) occurs, it interrupts or happens during the ongoing action. Past Simple 'collaborated' would describe the collaboration as a completed unit, not a background in progress. Present Perfect is for experience, not specific past moments.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-08",
            stem: "What ___ you ___ when the earthquake struck?",
            options: ["were / doing", "did / do", "have / done"],
            answer: "were / doing",
            explanation: "'were' — 'When the earthquake struck' asks what was in progress at that exact past moment.",
            fullExplanation: "This is a Past Continuous question: 'What were you doing?' asks about an action in progress at a specific past moment (the earthquake). 'What did you do?' asks about a completed action in response. 'What have you done?' focuses on present relevance.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-09",
            stem: "The whole team ___ to finish the project when the client suddenly cancelled.",
            options: ["was racing", "raced", "has raced"],
            answer: "was racing",
            explanation: "'was racing' — The ongoing effort was interrupted by the cancellation — Past Continuous is correct.",
            fullExplanation: "The team's racing to finish was an ongoing background activity when the client's cancellation (the interrupting event) happened. Past Continuous captures this in-progress state. 'Raced' (Past Simple) would describe a completed race-to-finish, not an interrupted attempt. Present Perfect is inappropriate.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-10",
            stem: "It ___ heavily when we arrived at the mountain hut.",
            options: ["was snowing", "snowed", "had snowed"],
            answer: "was snowing",
            explanation: "'was snowing' — The snow was already in progress when we arrived — Past Continuous describes the scene.",
            fullExplanation: "Past Continuous sets the scene or background. When we arrived (Past Simple — the event), the snow was already in progress (Past Continuous — the background). 'Snowed' would mean the snow fell and stopped as a completed event. 'Had snowed' implies it finished before we arrived.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-11",
            stem: "She ___ Spanish in her room while her brother ___ TV in the living room.",
            options: ["was studying / was watching", "studied / watched", "was studying / watched"],
            answer: "was studying / was watching",
            explanation: "'was studying' — Two simultaneous ongoing background actions use Past Continuous for both.",
            fullExplanation: "When two actions were happening at the same time and both were in progress (neither interrupts the other), both verbs take Past Continuous. 'Studied / watched' would describe two completed, sequential actions rather than simultaneous, parallel ones.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-12",
            stem: "I noticed she ___ a new gold bracelet at the office party.",
            options: ["was wearing", "wore", "has worn"],
            answer: "was wearing",
            explanation: "'was wearing' — 'Noticed' (the observation event) interrupts/coincides with the ongoing state — Past Continuous is natural.",
            fullExplanation: "The wearing was an ongoing state in the background. The noticing was the specific observing event. Past Continuous describes the state that was in progress at the moment of observation. 'Wore' is acceptable but 'was wearing' is the more precise form here for a state observed mid-activity.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-13",
            stem: "The protesters ___ loudly outside the building all morning.",
            options: ["were chanting", "chanted", "had chanted"],
            answer: "were chanting",
            explanation: "'were chanting' — 'All morning' combined with an ongoing past activity uses Past Continuous.",
            fullExplanation: "'All morning' emphasises the duration of an ongoing action in the past — it was in progress throughout that period. Past Continuous is ideal for this. 'Chanted' (Past Simple) would describe the chanting as a single completed event. 'Had chanted' would place the completion before another past event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-14",
            stem: "He tripped and fell because he ___ at his phone while walking.",
            options: ["was looking", "looked", "has looked"],
            answer: "was looking",
            explanation: "'was looking' — The ongoing distraction (looking at phone) caused the trip — Past Continuous shows the cause.",
            fullExplanation: "Past Continuous explains what was happening at the time that caused or preceded the event. The looking was an ongoing action (he wasn't doing it once and stopping — he was distracted throughout). 'Looked' (Past Simple) would describe a single, completed glance, not the ongoing distraction.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-c-15",
            stem: "The delegates ___ their positions when the chairman ___ for a vote.",
            options: ["were still discussing / called", "discussed / was calling", "had discussed / called"],
            answer: "were still discussing / called",
            explanation: "'were still discussing' — Past Continuous for the ongoing debate interrupted by the Past Simple event (the call for a vote).",
            fullExplanation: "'Still' reinforces that the discussion was in progress (not yet complete) when the chairman's call interrupted it. This is the classic interrupted-action pattern: Past Continuous (ongoing) + when + Past Simple (event). 'Discussed / was calling' reverses the logic — the vote call cannot be the ongoing background.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          }
        ]
      },
      {
        id: "vt-pst-sc",
        title: "Past Simple vs Past Continuous",
        tasks: [
          {
            id: "vt-pst-sc-01",
            stem: "She ___ the phone while she ___ a bath.",
            options: ["dropped / was having", "was dropping / had", "dropped / had"],
            answer: "dropped / was having",
            explanation: "'dropped' — Past Simple for the sudden event; Past Continuous for the ongoing background action.",
            fullExplanation: "The classic interrupted-action pattern: the bath was ongoing (Past Continuous) when the phone dropped (Past Simple — the event). 'Was dropping / had' reverses the logic. 'Dropped / had' uses Past Simple for both, losing the sense of interruption.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-02",
            stem: "At 9 pm last night, they ___ dinner together.",
            options: ["were having", "had", "have had"],
            answer: "were having",
            explanation: "'were having' — 'At 9 pm last night' pins us to a moment in the past — Past Continuous describes what was in progress.",
            fullExplanation: "An expression like 'at [time] last night' specifies a moment in the past and asks what was in progress there. Past Continuous is the correct form. Past Simple 'had dinner' would describe a completed event, not an ongoing one at a specific moment.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-03",
            stem: "I ___ to music when my phone ___ and it was my old friend calling.",
            options: ["was listening / rang", "listened / was ringing", "was listening / was ringing"],
            answer: "was listening / rang",
            explanation: "'was listening' — Past Continuous for the ongoing activity; Past Simple for the sudden ringing event.",
            fullExplanation: "The listening was ongoing (background). The phone ringing was a sudden, brief event that interrupted it. Past Simple for the event (rang), Past Continuous for the background activity (was listening). 'Was ringing' would suggest ringing was also a prolonged background activity.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-04",
            stem: "The journalist ___ the story for months before the editor finally ___ it.",
            options: ["was investigating / approved", "investigated / was approving", "investigated / approved"],
            answer: "was investigating / approved",
            explanation: "'was investigating' — Past Continuous for the prolonged background activity; Past Simple for the decisive event.",
            fullExplanation: "The investigation was a prolonged, ongoing process (background) — Past Continuous. The editor's approval was a single, decisive event that concluded the process — Past Simple. 'Investigated / approved' uses Past Simple for both, losing the sense that investigation was still in progress when approval came.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-05",
            stem: "While he ___ for the interview, he ___ over a loose paving stone.",
            options: ["was walking / tripped", "walked / was tripping", "was walking / was tripping"],
            answer: "was walking / tripped",
            explanation: "'was walking' — 'While' introduces the ongoing background (walking); the trip is the sudden interrupting event.",
            fullExplanation: "'While' signals an ongoing action (Past Continuous). The trip/stumble was a sudden, brief event that occurred during the walk (Past Simple). 'Walked' after 'while' would imply the walking was completed before the trip. 'Was tripping' would make the brief trip into an ongoing process.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-06",
            stem: "The students ___ their presentations when the fire alarm suddenly ___.",
            options: ["were practising / went off", "practised / was going off", "were practising / was going off"],
            answer: "were practising / went off",
            explanation: "'were practising' — Practice was ongoing; the alarm going off was a sudden event.",
            fullExplanation: "The practising was an ongoing activity (Past Continuous) when the fire alarm triggered (a sudden, discrete event — Past Simple). 'Went off' is an instantaneous event — not a prolonged process, so Past Continuous 'was going off' would be unusual here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-07",
            stem: "___ you ___ a coat when you left the house, or did you forget it?",
            options: ["Were / wearing", "Did / wear", "Had / worn"],
            answer: "Were / wearing",
            explanation: "'Were you wearing' asks about a state in progress at a specific past moment (when you left).",
            fullExplanation: "'When you left the house' pins us to a specific past moment. 'Were you wearing' asks about what was in progress (your state) at that moment — Past Continuous. 'Did you wear' asks about a completed action or decision. 'Had you worn' uses Past Perfect, implying completion before another past event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-08",
            stem: "She ___ a letter to her sister when the lights suddenly ___ out.",
            options: ["was writing / went", "wrote / was going", "was writing / were going"],
            answer: "was writing / went",
            explanation: "'was writing' — Past Continuous for the ongoing letter-writing; Past Simple for the sudden power failure.",
            fullExplanation: "Writing the letter was in progress (Past Continuous). The lights going out was a sudden, instantaneous event (Past Simple). 'Wrote' would describe the letter-writing as a completed act. 'Were going' would make the power failure a prolonged process rather than a sudden event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-09",
            stem: "I ___ my keys on the way to work this morning.",
            options: ["lost", "was losing", "have lost"],
            answer: "lost",
            explanation: "'lost' — A completed single event in the recent past uses Past Simple, not Past Continuous.",
            fullExplanation: "Losing your keys is a momentary, completed event — not an ongoing process. Past Simple 'lost' is the correct form. 'Was losing' would describe a prolonged process of gradually misplacing something. 'Have lost' is Present Perfect — possible if still relevant now, but Past Simple is the primary form for narrating a past event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 6 & 14"
          },
          {
            id: "vt-pst-sc-10",
            stem: "The thief ___ in through an open window while the family ___ dinner.",
            options: ["climbed / was having", "was climbing / had", "climbed / had"],
            answer: "climbed / was having",
            explanation: "'climbed' — Past Simple for the action (the break-in); Past Continuous for the simultaneous background.",
            fullExplanation: "The climbing-in was the specific event (Past Simple). The family having dinner was the simultaneous ongoing background (Past Continuous). 'Was climbing' would suggest the break-in was a slow, prolonged process. 'Had dinner' would make the family meal a completed act rather than an ongoing situation.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-11",
            stem: "When I ___ at the station, the train ___ already.",
            options: ["arrived / was leaving", "was arriving / left", "arrived / left"],
            answer: "arrived / was leaving",
            explanation: "'arrived' — The arrival is the event; the leaving was already in progress when it happened.",
            fullExplanation: "The arrival (Past Simple — a sudden event) happened at the moment the train was in the process of leaving (Past Continuous — already in progress). This is a near-miss scenario: arriving just as something is happening. 'Was arriving / left' reverses the logic. 'Arrived / left' uses Past Simple for both, removing the sense of ongoing departure.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-12",
            stem: "He ___ his arm when he ___ off his bicycle on the icy road.",
            options: ["broke / fell", "was breaking / fell", "broke / was falling"],
            answer: "broke / fell",
            explanation: "'broke' — Both the fall and the fracture are instantaneous events — both use Past Simple.",
            fullExplanation: "Both 'fell' and 'broke his arm' are instantaneous, completed events that happened in rapid sequence. Neither was an ongoing background process. Both take Past Simple. 'Was breaking' would make the fracture a prolonged process. 'Was falling' would make the fall a prolonged background action.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 6 & 14"
          },
          {
            id: "vt-pst-sc-13",
            stem: "While the director ___ the film in New Zealand, producers in Hollywood ___ the rights.",
            options: ["was shooting / sold", "shot / were selling", "was shooting / were selling"],
            answer: "was shooting / sold",
            explanation: "'was shooting' — Past Continuous for the long ongoing filming; Past Simple for the decisive business event.",
            fullExplanation: "The filming was a long, ongoing process (Past Continuous). The selling of rights was a single, decisive business event (Past Simple). 'Shot / were selling' reverses the logic — the selling cannot be the prolonged background if it was a decisive transaction.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-14",
            stem: "Nobody ___ the building when the alarm ___.",
            options: ["was using / sounded", "used / was sounding", "was using / was sounding"],
            answer: "was using / sounded",
            explanation: "'was using' — Past Continuous for the state of the building; Past Simple for the alarm triggering.",
            fullExplanation: "The absence of people using the building was an ongoing background state (Past Continuous). The alarm sounding was a sudden event (Past Simple). 'Sounding' would make the alarm a prolonged, gradual process rather than an event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          },
          {
            id: "vt-pst-sc-15",
            stem: "I ___ across town when I suddenly ___ I had left my passport at home.",
            options: ["was driving / realised", "drove / was realising", "drove / realised"],
            answer: "was driving / realised",
            explanation: "'was driving' — Past Continuous for the ongoing drive; Past Simple for the sudden realisation.",
            fullExplanation: "The driving was an ongoing activity (background) when the realisation struck suddenly (Past Simple event). 'Drove / realised' uses Past Simple for both, losing the sense that the driving was still in progress. 'Was realising' makes the realisation a gradual process — realisations are typically sudden.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 14"
          }
        ]
      },
      {
        id: "vt-pp",
        title: "Present Perfect",
        tasks: [
          {
            id: "vt-pp-01",
            stem: "She ___ three novels so far, and she is already working on a fourth.",
            options: ["has written", "wrote", "writes"],
            answer: "has written",
            explanation: "'has written' — 'So far' signals an unfinished period up to now — Present Perfect is required.",
            fullExplanation: "Present Perfect (have/has + past participle) is used for achievements within an unfinished time period. 'So far' explicitly signals that the count continues into the present. Past Simple 'wrote' would require a specific finished time. Present Simple 'writes' describes a habit.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 7-8"
          },
          {
            id: "vt-pp-02",
            stem: "___ you ever visited the ancient ruins at Machu Picchu?",
            options: ["Have", "Did", "Are"],
            answer: "Have",
            explanation: "'Have' — 'Ever' with a life experience question requires Present Perfect.",
            fullExplanation: "'Ever' asks about life experience at any point up to now — a key signal for Present Perfect. 'Did you ever visit' is possible in informal American English, but 'Have you ever' is the standard British English form tested in ЦТ/ЦЭ.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-pp-03",
            stem: "I can't find my keys — I think I ___ them somewhere in the office.",
            options: ["have left", "left", "am leaving"],
            answer: "have left",
            explanation: "'have left' — A past action with a present consequence (can't find keys) uses Present Perfect.",
            fullExplanation: "Present Perfect connects a past action to a present result or consequence. The keys are missing NOW because of a past action (leaving them somewhere). 'Left' (Past Simple) would simply describe when they were left, without the present connection. Present Continuous is wrong for a completed action.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "vt-pp-04",
            stem: "This is the most remarkable scientific breakthrough we ___ in decades.",
            options: ["have seen", "saw", "see"],
            answer: "have seen",
            explanation: "'have seen' — Superlative + 'in decades' (unfinished period) requires Present Perfect.",
            fullExplanation: "After superlatives (the best, the most remarkable, the first), Present Perfect is used when the comparison covers an unfinished period ('in decades' extends to the present). 'Saw' would disconnect the record from the present. 'See' is Present Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-pp-05",
            stem: "The situation ___ significantly since the new director took over.",
            options: ["has improved", "improved", "was improving"],
            answer: "has improved",
            explanation: "'has improved' — 'Since' with a present result uses Present Perfect.",
            fullExplanation: "'Since' signals a change or development from a point in the past up to now — a core signal for Present Perfect. 'Improved' (Past Simple) would need a specific time expression. 'Was improving' (Past Continuous) would describe the ongoing process in the past, not the result now.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 7-8"
          },
          {
            id: "vt-pp-06",
            stem: "___ anyone ever told you that you look exactly like your grandmother?",
            options: ["Has", "Did", "Is"],
            answer: "Has",
            explanation: "'Ever' in a question about life experience uses Present Perfect with Has for 3rd-person subjects.",
            fullExplanation: "The subject 'anyone' is a 3rd-person singular indefinite, requiring 'Has'. The question asks about life experience ('ever') — a Present Perfect signal. 'Did anyone ever tell you' is also used but 'Has anyone ever told you' is the standard form for this structure.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 7-8"
          },
          {
            id: "vt-pp-07",
            stem: "The patient ___ the prescribed medication for three days now.",
            options: ["has been taking", "has taken", "took"],
            answer: "has been taking",
            explanation: "'has been taking' — 'For three days now' signals ongoing duration up to the present — Present Perfect Continuous or Simple.",
            fullExplanation: "While 'has taken' is possible (focusing on completion), 'has been taking' emphasises the ongoing, continuous nature of taking medication over the period. 'For three days now' strongly suggests duration. 'Took' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 9-10",
            alternateAnswers: ["has taken"]
          },
          {
            id: "vt-pp-08",
            stem: "It's the first time I ___ sushi, and I find it surprisingly good.",
            options: ["have tried", "tried", "try"],
            answer: "have tried",
            explanation: "'have tried' — 'It's the first time + Present Perfect' is a fixed pattern.",
            fullExplanation: "'It's the first time + someone + has done something' is a fixed grammatical pattern using Present Perfect. It refers to the first time something has happened up to now. 'It's the first time I tried' is a common error. 'Try' (Present Simple) makes no sense after 'It's the first time'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-pp-09",
            stem: "She ___ the proposal yet — the deadline is tomorrow.",
            options: ["hasn't submitted", "didn't submit", "isn't submitting"],
            answer: "hasn't submitted",
            explanation: "'hasn't submitted' — 'Yet' in a negative sentence signals Present Perfect — the action hasn't happened up to now.",
            fullExplanation: "'Yet' in negative sentences signals an expected action that hasn't occurred up to now — a key Present Perfect signal. 'Didn't submit' (Past Simple negative) would need a specific time. 'Isn't submitting' (Present Continuous negative) refers to an arrangement, not a current non-completed action.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 9"
          },
          {
            id: "vt-pp-10",
            stem: "I ___ just ___ a very urgent email from the head office.",
            options: ["have / received", "did / receive", "am / receiving"],
            answer: "have / received",
            explanation: "'have' — 'Just' in British English signals a very recent past event — Present Perfect is required.",
            fullExplanation: "In British English, 'just' with Present Perfect describes a very recently completed action. 'I have just received' = it happened a moment ago with present relevance. In American English, 'I just received' (Past Simple) is also used, but ЦТ/ЦЭ follows British norms.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 9"
          },
          {
            id: "vt-pp-11",
            stem: "This is only the second time the record ___ in the history of the tournament.",
            options: ["has been broken", "was broken", "is broken"],
            answer: "has been broken",
            explanation: "'has been broken' — 'Only the second time' with a superlative-like structure requires Present Perfect.",
            fullExplanation: "'It is only the second time + someone/something + has done something' uses Present Perfect because it counts occurrences from the past up to now in an unfinished historical period. Passive form: 'has been broken'. 'Was broken' would disconnect the event from the present count.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-pp-12",
            stem: "How long ___ you ___ in this city? I thought you moved here recently.",
            options: ["have / lived", "do / live", "did / live"],
            answer: "have / lived",
            explanation: "'have' — 'How long' + a situation that continues to the present uses Present Perfect.",
            fullExplanation: "'How long have you lived' asks about a situation that started in the past and continues now (you still live here). 'Do you live' (Present Simple) asks about the current situation but not its duration. 'Did you live' (Past Simple) would imply you no longer live there.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 7-8",
            alternateAnswers: ["have / been living"]
          },
          {
            id: "vt-pp-13",
            stem: "The company ___ already ___ its annual targets, despite difficult market conditions.",
            options: ["has / exceeded", "had / exceeded", "did / exceed"],
            answer: "has / exceeded",
            explanation: "'has' — 'Already' in a statement of achievement up to now uses Present Perfect.",
            fullExplanation: "'Already' in British English affirmative sentences signals a recently completed action or an achievement ahead of expectation — a Present Perfect signal. 'Had exceeded' is Past Perfect (used when both actions are in the past). 'Did exceed' uses Past Simple auxiliary 'did' for emphasis, not the standard form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 9"
          },
          {
            id: "vt-pp-14",
            stem: "Nobody ___ the question of why the ancient Egyptians built the pyramids.",
            options: ["has fully answered", "fully answered", "fully answers"],
            answer: "has fully answered",
            explanation: "'has fully answered' — An unresolved question with no specific past time uses Present Perfect.",
            fullExplanation: "The question remains unanswered up to the present moment — there is no specific time when someone failed to answer it. Present Perfect describes a situation that extends from the past to now. 'Fully answered' (Past Simple) would need a specific time. 'Fully answers' (Present Simple) would be a present habit.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-pp-15",
            stem: "I ___ never ___ such a beautiful performance in all my years of attending concerts.",
            options: ["have / seen", "did / see", "was / seeing"],
            answer: "have / seen",
            explanation: "'have' — 'Never' with a life experience statement uses Present Perfect.",
            fullExplanation: "'Never' with Present Perfect expresses a life experience that has not happened at any point up to now. 'I have never seen' covers the person's entire life experience. 'I did not see' (Past Simple) would refer to a specific occasion. 'Was seeing' (Past Continuous) describes an ongoing past action.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          }
        ]
      },
      {
        id: "vt-ppc",
        title: "Present Perfect Continuous",
        tasks: [
          {
            id: "vt-ppc-01",
            stem: "They ___ to fix the leak in the roof for two weeks, but it still drips.",
            options: ["have been trying", "have tried", "tried"],
            answer: "have been trying",
            explanation: "'have been trying' — 'For two weeks' + an ongoing activity signals Present Perfect Continuous.",
            fullExplanation: "Present Perfect Continuous (have/has + been + -ing) emphasises the duration of an activity that started in the past and continues (or recently stopped) into the present. 'For two weeks' is a key duration signal. 'Have tried' focuses on the result/number of attempts, not the duration.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 9-10"
          },
          {
            id: "vt-ppc-02",
            stem: "Your eyes are red. ___ you been crying?",
            options: ["Have", "Did", "Are"],
            answer: "Have",
            explanation: "'Have you been crying?' — present evidence of a recent past activity uses Present Perfect Continuous.",
            fullExplanation: "The red eyes are visible evidence of recent crying. Present Perfect Continuous is used when the result of an activity is visible in the present. The crying may have just stopped, but its effect is still visible. 'Did you cry?' asks about a specific past time. 'Are you crying?' asks about right now.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10"
          },
          {
            id: "vt-ppc-03",
            stem: "She ___ for the entrance exam since January without a single day off.",
            options: ["has been preparing", "has prepared", "prepared"],
            answer: "has been preparing",
            explanation: "'has been preparing' — 'Since January' + continuous preparation suggests Present Perfect Continuous.",
            fullExplanation: "'Since January' marks the start point of an uninterrupted activity that continues to the present. Present Perfect Continuous emphasises the continuous, unbroken nature of the preparation. 'Has prepared' would focus on the result (she is now prepared), not the ongoing process.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 9-10"
          },
          {
            id: "vt-ppc-04",
            stem: "How long ___ you ___ in this company? You clearly know everyone here.",
            options: ["have / been working", "are / working", "did / work"],
            answer: "have / been working",
            explanation: "'have' — 'How long' with an ongoing job situation uses Present Perfect Continuous.",
            fullExplanation: "'How long have you been working here?' asks about a situation that started in the past and continues now. The answer ('you clearly know everyone') confirms the ongoing connection. 'Are you working?' asks about a current arrangement, not duration. 'Did you work?' implies the work is finished.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10"
          },
          {
            id: "vt-ppc-05",
            stem: "The ground is still wet — it ___ all night.",
            options: ["has been raining", "has rained", "rained"],
            answer: "has been raining",
            explanation: "'has been raining' — Visible present evidence of an extended activity uses Present Perfect Continuous.",
            fullExplanation: "The wet ground is evidence of rain that has been happening throughout the night. Present Perfect Continuous describes an activity that was in progress over a period and whose effect is visible now. 'Has rained' focuses on the fact it rained (result), not the duration. 'Rained' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10"
          },
          {
            id: "vt-ppc-06",
            stem: "I ___ a book about the history of medicine lately — it is very absorbing.",
            options: ["have been reading", "have read", "read"],
            answer: "have been reading",
            explanation: "'have been reading' — 'Lately' + an ongoing, uncompleted activity uses Present Perfect Continuous.",
            fullExplanation: "'Lately' signals an ongoing activity around the recent present. Present Perfect Continuous emphasises the activity is in progress but not necessarily complete. 'Have read' would suggest the book is finished. 'Read' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 9-10"
          },
          {
            id: "vt-ppc-07",
            stem: "He looks exhausted — he ___ non-stop for eighteen hours.",
            options: ["has been working", "has worked", "worked"],
            answer: "has been working",
            explanation: "'has been working' — Visible exhaustion as evidence of prolonged continuous activity uses Present Perfect Continuous.",
            fullExplanation: "The exhaustion is a visible result of prolonged, continuous work. Present Perfect Continuous (has been working) emphasises the duration and the ongoing nature of the effort. 'Has worked for 18 hours' focuses on the total number of hours as an achievement, which is also possible but less natural for explaining tiredness.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10",
            alternateAnswers: ["has worked"]
          },
          {
            id: "vt-ppc-08",
            stem: "Scientists ___ the effects of microplastics on marine life for over a decade.",
            options: ["have been studying", "have studied", "studied"],
            answer: "have been studying",
            explanation: "'have been studying' — 'For over a decade' + an ongoing research process signals Present Perfect Continuous.",
            fullExplanation: "The research is a prolonged, ongoing process that started a decade ago and continues. 'For over a decade' is a duration signal for Present Perfect Continuous. 'Have studied' implies the research is complete. 'Studied' (Past Simple) needs a specific time.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 9-10"
          },
          {
            id: "vt-ppc-09",
            stem: "You look cold — how long ___ you ___ here in the rain?",
            options: ["have / been standing", "did / stand", "are / standing"],
            answer: "have / been standing",
            explanation: "'have' — 'How long' + visible current result (looking cold) uses Present Perfect Continuous.",
            fullExplanation: "'How long have you been standing here?' connects the duration of standing to its visible result (looking cold). Present Perfect Continuous asks about the length of an ongoing or recently completed activity. 'Did you stand?' asks about a specific past event. 'Are you standing?' asks about the present moment only.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10"
          },
          {
            id: "vt-ppc-10",
            stem: "The negotiations ___ for three months without reaching a final agreement.",
            options: ["have been going on", "have gone on", "went on"],
            answer: "have been going on",
            explanation: "'have been going on' — 'For three months' + an ongoing, inconclusive process uses Present Perfect Continuous.",
            fullExplanation: "'Have been going on' emphasises the continuous, unresolved nature of the negotiations. The fact that no agreement has been reached reinforces the ongoing nature. 'Have gone on' is also possible but slightly more neutral (just stating duration as a fact). 'Went on' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 9-10",
            alternateAnswers: ["have gone on"]
          },
          {
            id: "vt-ppc-11",
            stem: "I can tell you ___ — your hands are covered in flour.",
            options: ["have been baking", "have baked", "baked"],
            answer: "have been baking",
            explanation: "'have been baking' — Visible evidence (flour on hands) of a recent activity uses Present Perfect Continuous.",
            fullExplanation: "The flour on the hands is direct physical evidence of recent baking. Present Perfect Continuous is ideal for this 'deduction from evidence' pattern. 'Have baked' focuses on the result/product (the baked goods), not the messy process.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10"
          },
          {
            id: "vt-ppc-12",
            stem: "She ___ the same piece on the piano for the past hour — I know it perfectly now.",
            options: ["has been practising", "has practised", "practised"],
            answer: "has been practising",
            explanation: "'has been practising' — 'For the past hour' + repetitive, ongoing activity uses Present Perfect Continuous.",
            fullExplanation: "The piano practice has been ongoing for a defined period ('the past hour') up to the present. The speaker's comment ('I know it perfectly now') confirms the activity is still in progress or has just ended. 'Has practised' would focus on the act of practising as complete.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 9-10"
          },
          {
            id: "vt-ppc-13",
            stem: "My eyes hurt because I ___ at this screen all afternoon without a break.",
            options: ["have been staring", "have stared", "stared"],
            answer: "have been staring",
            explanation: "'have been staring' — Present physical discomfort caused by a continuous past activity uses Present Perfect Continuous.",
            fullExplanation: "Sore eyes are the present result of a prolonged, continuous activity. 'All afternoon' signals duration. Present Perfect Continuous links the continuous past activity directly to the present consequence. 'Have stared' would focus on the act as completed, not the duration.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10"
          },
          {
            id: "vt-ppc-14",
            stem: "The protesters ___ outside the ministry since early this morning.",
            options: ["have been demonstrating", "have demonstrated", "demonstrated"],
            answer: "have been demonstrating",
            explanation: "'have been demonstrating' — 'Since early this morning' + an ongoing, visible public activity uses Present Perfect Continuous.",
            fullExplanation: "The demonstration started this morning and is still in progress now. 'Since' marks the start point. Present Perfect Continuous emphasises the continuous activity from that point to now. 'Have demonstrated' would suggest the demonstration is over. 'Demonstrated' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 9-10"
          },
          {
            id: "vt-ppc-15",
            stem: "You smell of paint — ___ you been decorating the flat?",
            options: ["have", "did", "are"],
            answer: "have",
            explanation: "'have' — Visible/sensory evidence (smell of paint) of a recent activity uses Present Perfect Continuous.",
            fullExplanation: "'Have you been decorating?' deduces a recent activity from physical evidence (the smell of paint). Present Perfect Continuous is used when evidence in the present points to a recent past activity. 'Did you decorate?' asks about a specific past occasion. 'Are you decorating?' asks about right now.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10"
          }
        ]
      },
      {
        id: "vt-ppps",
        title: "Present Perfect vs Past Simple",
        tasks: [
          {
            id: "vt-ppps-01",
            stem: "I ___ your book — it was absolutely brilliant.",
            options: ["read", "have read", "was reading"],
            answer: "read",
            explanation: "'It was absolutely brilliant' uses past tense, placing the reading in the finished past — Past Simple.",
            fullExplanation: "The evaluative comment 'it was absolutely brilliant' uses Past Simple, which shows the reading is a finished, completed experience with a specific assessment. If the connection to the present were the focus (e.g., 'I have read your book and I think it's brilliant'), Present Perfect would be appropriate. Past Simple is correct here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 7-8"
          },
          {
            id: "vt-ppps-02",
            stem: "___ you see the documentary about the Amazon rainforest last night?",
            options: ["Did", "Have", "Were"],
            answer: "Did",
            explanation: "'Did' — 'Last night' is a specific finished time — Past Simple is the only correct form.",
            fullExplanation: "'Last night' is a definite past time expression. Past Simple is the only correct tense with such expressions. Present Perfect cannot be used with 'last night', 'yesterday', 'in 2019', 'an hour ago', etc.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "vt-ppps-03",
            stem: "The researchers ___ three new species of deep-sea fish this year.",
            options: ["have discovered", "discovered", "discover"],
            answer: "have discovered",
            explanation: "'have discovered' — 'This year' is an unfinished time period — Present Perfect connects the discovery to the present.",
            fullExplanation: "'This year' is an unfinished time period (the year is not over). Present Perfect connects actions within an unfinished period to the present. 'Discovered' (Past Simple) would be correct if the year were over. 'Discover' is Present Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 7-8"
          },
          {
            id: "vt-ppps-04",
            stem: "She ___ in Moscow for three years before moving to Berlin.",
            options: ["lived", "has lived", "was living"],
            answer: "lived",
            explanation: "'lived' — A completed period in the past (before moving) uses Past Simple.",
            fullExplanation: "The period in Moscow is finished — she moved to Berlin. A completed past period uses Past Simple. 'Has lived' (Present Perfect) would imply she still lives in Moscow. 'Was living' (Past Continuous) would describe the ongoing process rather than the completed period.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "vt-ppps-05",
            stem: "I ___ never ___ such bad service at a restaurant — this is unacceptable.",
            options: ["have / experienced", "did / experience", "was / experiencing"],
            answer: "have / experienced",
            explanation: "'have' — 'Never' with a life experience statement up to now uses Present Perfect.",
            fullExplanation: "'Never' with Present Perfect evaluates the entire life experience up to the present moment. 'I have never experienced' says: at no point in my life up to now have I encountered this. 'I did not experience' would refer to a specific time. 'Was experiencing' is Past Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-ppps-06",
            stem: "Einstein ___ his theory of special relativity in 1905.",
            options: ["published", "has published", "was publishing"],
            answer: "published",
            explanation: "'published' — Einstein is dead — actions by people no longer alive require Past Simple.",
            fullExplanation: "Present Perfect cannot be used for people who are no longer alive or for completed historical events at specific times. '1905' is a definite past date. Einstein's death also means there is no 'unfinished business' connecting the publication to the present. Past Simple is the only correct form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "vt-ppps-07",
            stem: "The museum ___ over a million visitors since it reopened after renovation.",
            options: ["has welcomed", "welcomed", "was welcoming"],
            answer: "has welcomed",
            explanation: "'has welcomed' — 'Since it reopened' marks an unfinished period — Present Perfect is required.",
            fullExplanation: "'Since' marks the start of an unfinished period that continues to the present. The museum is still open and still welcoming visitors. Present Perfect connects the past event (reopening) to the present count. 'Welcomed' (Past Simple) would imply the museum has now closed.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 7-8"
          },
          {
            id: "vt-ppps-08",
            stem: "When ___ you last ___ your dentist?",
            options: ["did / see", "have / seen", "do / see"],
            answer: "did / see",
            explanation: "'did' — 'When' referring to a specific past time requires Past Simple.",
            fullExplanation: "'When' in questions about a specific past occasion uses Past Simple. 'When did you last see?' asks about a specific point in time. 'When have you seen?' is not standard in English — Present Perfect is not used with 'when' in questions about specific times.",
            source: "Swan, M. Practical English Usage (4th ed.), §483.4"
          },
          {
            id: "vt-ppps-09",
            stem: "I ___ Tom since we were at school together — it must be twenty years now.",
            options: ["haven't seen", "didn't see", "wasn't seeing"],
            answer: "haven't seen",
            explanation: "'haven't seen' — 'Since' + a connection to the present uses Present Perfect negative.",
            fullExplanation: "'Since we were at school' marks the start point of a situation that continues to the present (still haven't seen him). Present Perfect negative is used for situations that have not occurred from a past point up to now. 'Didn't see' (Past Simple negative) would refer to a specific occasion.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 7-8"
          },
          {
            id: "vt-ppps-10",
            stem: "The Prime Minister ___ three statements about the crisis so far today.",
            options: ["has made", "made", "was making"],
            answer: "has made",
            explanation: "'has made' — 'So far today' is an unfinished time period — Present Perfect with 'so far' is required.",
            fullExplanation: "'So far today' means within the current day up to this moment. It is an unfinished time period. Present Perfect is correct. 'Made' (Past Simple) would be correct when 'today' has finished (e.g., at the end of the day). 'Was making' is Past Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-ppps-11",
            stem: "I ___ to Paris twice — once when I was twelve and again at university.",
            options: ["have been", "went", "was going"],
            answer: "have been",
            explanation: "'have been' — Life experience without a specific time focus uses Present Perfect; specific times given are just detail.",
            fullExplanation: "'I have been to Paris twice' reports a life experience. Even though specific times are mentioned in the explanation ('when I was twelve', 'at university'), the main statement is about cumulative life experience — Present Perfect. If the question were 'When did you go to Paris?' the answer would use Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-ppps-12",
            stem: "The ancient Greeks ___ the concept of democracy over two thousand years ago.",
            options: ["developed", "have developed", "were developing"],
            answer: "developed",
            explanation: "'developed' — A specific time in the distant past ('over two thousand years ago') requires Past Simple.",
            fullExplanation: "'Over two thousand years ago' is a definite past time expression. Past Simple is the only correct form with such expressions. Present Perfect cannot be used with 'ago'. The 'over two thousand years ago' reference makes this a historical event firmly in the past.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "vt-ppps-13",
            stem: "This is the third time she ___ the same mistake in this exercise.",
            options: ["has made", "made", "was making"],
            answer: "has made",
            explanation: "'has made' — 'This is the third time + Present Perfect' is a fixed pattern for counting occurrences up to now.",
            fullExplanation: "'This is the [ordinal] time + someone has done something' requires Present Perfect. The count includes all occurrences up to and including the present moment. 'Made' (Past Simple) would need a specific time. 'Was making' is Past Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-ppps-14",
            stem: "The government ___ more than ten billion pounds on the infrastructure project so far.",
            options: ["has spent", "spent", "was spending"],
            answer: "has spent",
            explanation: "'has spent' — 'So far' explicitly marks an ongoing, unfinished project — Present Perfect is required.",
            fullExplanation: "'So far' signals that spending is still happening — the project is not finished. Present Perfect connects the total spending from start to now. 'Spent' would be correct when the project is complete. 'Was spending' is Past Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 8"
          },
          {
            id: "vt-ppps-15",
            stem: "A: Have you eaten? B: Yes, I ___ a sandwich about an hour ago.",
            options: ["ate", "have eaten", "was eating"],
            answer: "ate",
            explanation: "'ate' — The specific time ('an hour ago') in the reply requires Past Simple.",
            fullExplanation: "Although the question uses Present Perfect ('Have you eaten?'), the reply specifies 'an hour ago' — a definite past time. The answer must switch to Past Simple because of that specific time expression. 'Have eaten' cannot be used with 'ago'. This tests whether students understand that the tense in the reply is governed by the time expression.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          }
        ]
      },
      {
        id: "vt-pastperf",
        title: "Past Perfect",
        tasks: [
          {
            id: "vt-pastperf-01",
            stem: "When we arrived at the theatre, the play ___ already ___.",
            options: ["had / started", "has / started", "was / starting"],
            answer: "had / started",
            explanation: "'had' — Past Perfect for an action completed before another past event (our arrival).",
            fullExplanation: "Past Perfect (had + past participle) describes an action that was completed before another past action. The play starting happened BEFORE we arrived. 'Has started' is Present Perfect (wrong tense frame). 'Was starting' is Past Continuous, suggesting the play was beginning at the exact moment of arrival.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "vt-pastperf-02",
            stem: "She was nervous during the interview because she ___ so little the night before.",
            options: ["had slept", "slept", "was sleeping"],
            answer: "had slept",
            explanation: "'had slept' — Past Perfect for the earlier event (poor sleep) that caused the later state (nervousness).",
            fullExplanation: "The poor sleep (Past Perfect) happened before the interview (Past Simple). Past Perfect marks the earlier event in a sequence of two past events. 'Slept' (Past Simple) would simply list two separate past events without clearly showing which came first. 'Was sleeping' describes ongoing sleep, not completed rest.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "vt-pastperf-03",
            stem: "By the time the rescue team reached the survivors, they ___ without water for three days.",
            options: ["had been going", "were going", "have been going"],
            answer: "had been going",
            explanation: "'had been going' — Past Perfect Continuous for the duration of an activity before another past event.",
            fullExplanation: "Past Perfect Continuous (had been + -ing) describes an ongoing activity whose duration is measured before a past reference point (when the rescue team arrived). 'Were going without water' is Past Continuous, which lacks the 'before' relationship. Present Perfect has no place in this past sequence.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 15-16"
          },
          {
            id: "vt-pastperf-04",
            stem: "He felt much more confident because he ___ the presentation three times.",
            options: ["had rehearsed", "rehearsed", "has rehearsed"],
            answer: "had rehearsed",
            explanation: "'had rehearsed' — Past Perfect for the earlier preparation that caused the later confidence.",
            fullExplanation: "The rehearsals (Past Perfect) happened before he felt confident (Past Simple). Past Perfect shows the causal earlier event. 'Rehearsed' (Past Simple) lists the events without showing which came first or caused the other. 'Has rehearsed' is Present Perfect, wrong tense frame for a completed past sequence.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "vt-pastperf-05",
            stem: "The police discovered that the suspect ___ the city two days before his arrest.",
            options: ["had left", "left", "was leaving"],
            answer: "had left",
            explanation: "'had left' — Past Perfect for the event (leaving) that preceded the later discovery.",
            fullExplanation: "The leaving happened before the discovery/arrest. Past Perfect marks the earlier of two past events. 'Left' (Past Simple) would simply state both events as equally past without the clear before/after relationship. 'Was leaving' describes ongoing departure at a specific past moment.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "vt-pastperf-06",
            stem: "I recognised her immediately because we ___ at a conference two years earlier.",
            options: ["had met", "met", "were meeting"],
            answer: "had met",
            explanation: "'had met' — Past Perfect for a prior acquaintance that explains the later recognition.",
            fullExplanation: "The meeting (Past Perfect) preceded and caused the recognition (Past Simple). Past Perfect shows the earlier event that provides the reason for the later reaction. 'Met' (Past Simple) lists two events without the causal 'because' relationship being grammatically reinforced.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "vt-pastperf-07",
            stem: "By 1945, the Allies ___ most of Europe from Nazi occupation.",
            options: ["had liberated", "liberated", "were liberating"],
            answer: "had liberated",
            explanation: "'had liberated' — 'By 1945' establishes a past deadline — Past Perfect describes completion before that point.",
            fullExplanation: "'By + a past time' signals completion before that past deadline — the defining context for Past Perfect. 'Liberated' (Past Simple) describes the action at some past time without emphasising completion before a deadline. 'Were liberating' would describe an ongoing process.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "vt-pastperf-08",
            stem: "She ___ the letter three times before she finally sent it.",
            options: ["had rewritten", "rewrote", "was rewriting"],
            answer: "had rewritten",
            explanation: "'had rewritten' — Past Perfect for the repeated earlier action that preceded the final sending.",
            fullExplanation: "All three rewrites happened before the sending. Past Perfect shows the earlier, completed action(s) relative to the main past event. 'Rewrote' (Past Simple) would also be grammatically possible here, but Past Perfect more clearly signals the temporal sequence when 'before' is used.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15",
            alternateAnswers: ["rewrote"]
          },
          {
            id: "vt-pastperf-09",
            stem: "The athlete was disqualified because he ___ a banned substance.",
            options: ["had taken", "took", "was taking"],
            answer: "had taken",
            explanation: "'had taken' — Past Perfect for the earlier violation that caused the later disqualification.",
            fullExplanation: "Taking the banned substance (Past Perfect) happened before the disqualification (Past Simple). The Past Perfect shows the causal earlier event. 'Took' (Past Simple) would list two past events but without the 'before' relationship being as clear. 'Was taking' suggests the substance was being consumed at the exact moment of disqualification.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "vt-pastperf-10",
            stem: "When I got to the car park, I realised I ___ my ticket at home.",
            options: ["had left", "left", "was leaving"],
            answer: "had left",
            explanation: "'had left' — Past Perfect for the earlier mistake (leaving the ticket) that caused the present problem.",
            fullExplanation: "The ticket was left at home before the arrival at the car park. Past Perfect marks the earlier action that causes a problem in the later narrative moment. 'Left' (Past Simple) is also used informally but Past Perfect is the grammatically precise form. 'Was leaving' would mean leaving as an ongoing process.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15",
            alternateAnswers: ["left"]
          },
          {
            id: "vt-pastperf-11",
            stem: "The CEO explained that profits ___ by 40% in the previous financial year.",
            options: ["had risen", "rose", "have risen"],
            answer: "had risen",
            explanation: "'had risen' — Past Perfect in reported speech for an event that occurred before the speaking moment.",
            fullExplanation: "In reported speech, the tense shifts back: 'Profits have risen' (original) → 'had risen' (reported). The rise in profits happened before the CEO's explanation. Past Perfect is used for backshifted Present Perfect in reported speech. 'Rose' (Past Simple) doesn't reflect the backshift. 'Have risen' is the original direct speech form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 15 & 48"
          },
          {
            id: "vt-pastperf-12",
            stem: "Nobody could explain how the diamond necklace ___ from the locked vault.",
            options: ["had disappeared", "disappeared", "was disappearing"],
            answer: "had disappeared",
            explanation: "'had disappeared' — Past Perfect for the mysterious event that preceded and puzzled the later investigators.",
            fullExplanation: "The disappearance happened before anyone tried to explain it. Past Perfect marks the earlier event. 'Disappeared' (Past Simple) would suggest the disappearance was happening at the same time as the explanation. 'Was disappearing' implies an ongoing, visible process of vanishing.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "vt-pastperf-13",
            stem: "She ___ Spanish for two years before she moved to Mexico City.",
            options: ["had been learning", "was learning", "learned"],
            answer: "had been learning",
            explanation: "'had been learning' — Past Perfect Continuous for the duration of activity before a past event.",
            fullExplanation: "Past Perfect Continuous (had been + -ing) shows that learning Spanish was ongoing for a duration (two years) before the move (Past Simple). 'Was learning' (Past Continuous) would describe ongoing learning at a specific past moment, not the duration before a later event. 'Learned' (Past Simple) would just list a completed action.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 15-16"
          },
          {
            id: "vt-pastperf-14",
            stem: "By the end of the first week, the volunteers ___ more than 500 meals to homeless people.",
            options: ["had distributed", "distributed", "were distributing"],
            answer: "had distributed",
            explanation: "'had distributed' — 'By the end of the first week' is a past deadline — Past Perfect shows completion before it.",
            fullExplanation: "'By the end of [a past period]' is a classic Past Perfect signal. All 500 meals were distributed before that deadline passed. 'Distributed' (Past Simple) would simply state the action without emphasising the before-deadline completion. 'Were distributing' describes an ongoing process, not a completed total.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "vt-pastperf-15",
            stem: "The children were allowed to watch TV because they ___ all their homework.",
            options: ["had finished", "finished", "have finished"],
            answer: "had finished",
            explanation: "'had finished' — Past Perfect for the completed earlier event (homework) that earned the reward.",
            fullExplanation: "Finishing homework (Past Perfect) was the condition that led to the permission (Past Simple). The homework was done before the TV time was allowed. Past Perfect clearly shows the before/after causal relationship. 'Finished' (Past Simple) would list both events without showing which came first. 'Have finished' is Present Perfect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          }
        ]
      },
      {
        id: "vt-pastperf-c",
        title: "Past Perfect Continuous",
        tasks: [
          {
            id: "vt-pastperf-c-01",
            stem: "She was exhausted — she ___ for fourteen hours without a break.",
            options: ["had been driving", "had driven", "was driving"],
            answer: "had been driving",
            explanation: "'had been driving' — Past Perfect Continuous for the duration of an activity before a past moment.",
            fullExplanation: "Past Perfect Continuous (had been + -ing) emphasises how long an activity had been in progress before a past reference point. The exhaustion is a result of prolonged continuous driving. 'Had driven' focuses on the completed act rather than the duration. 'Was driving' is Past Continuous (ongoing at a moment, not before another event).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-02",
            stem: "By the time the ambulance arrived, the paramedic ___ first aid for ten minutes.",
            options: ["had been administering", "had administered", "was administering"],
            answer: "had been administering",
            explanation: "'had been administering' — 'By the time' + duration shows an ongoing activity before a past deadline — Past Perfect Continuous.",
            fullExplanation: "'By the time' establishes a past reference point. The administering of first aid was a continuous activity that had been ongoing for ten minutes before the ambulance arrived. Past Perfect Continuous emphasises duration before the past reference point. 'Was administering' is Past Continuous (no duration-before relationship).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-03",
            stem: "His hands were trembling because he ___ in the cold for over an hour.",
            options: ["had been standing", "had stood", "was standing"],
            answer: "had been standing",
            explanation: "'had been standing' — Physical evidence (trembling) of prolonged past activity before a past state uses Past Perfect Continuous.",
            fullExplanation: "The trembling was the result of standing in the cold for a prolonged period before that moment. Past Perfect Continuous links the duration of the activity to the physical consequence. 'Had stood' focuses on the act rather than the ongoing duration. 'Was standing' is Past Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-04",
            stem: "The room smelled of cigarette smoke — clearly someone ___ there recently.",
            options: ["had been smoking", "had smoked", "smoked"],
            answer: "had been smoking",
            explanation: "'had been smoking' — Sensory evidence of a recent past continuous activity uses Past Perfect Continuous.",
            fullExplanation: "The smell is evidence of an ongoing activity (smoking) that had been taking place before that moment. Past Perfect Continuous captures the continuous nature of the activity. 'Had smoked' would focus on a single completed act (one cigarette). 'Smoked' is Past Simple.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-05",
            stem: "How long ___ they ___ before they finally agreed on a deal?",
            options: ["had / been negotiating", "were / negotiating", "did / negotiate"],
            answer: "had / been negotiating",
            explanation: "'How long had they been …' asks about duration of activity before a past event (the deal).",
            fullExplanation: "'How long had they been negotiating?' asks about the duration of an activity that preceded a past event (the deal). Past Perfect Continuous is the form for duration before a past reference point. 'Were they negotiating?' asks about ongoing activity at a specific past moment. 'Did they negotiate?' asks about a completed past event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-06",
            stem: "She finally sat down — she ___ on her feet all day.",
            options: ["had been on", "was on", "has been on"],
            answer: "had been on",
            explanation: "'had been on' — Past Perfect Continuous for the prolonged state before a past action (sitting down).",
            fullExplanation: "Being on her feet was an ongoing state throughout the day before she sat down. Past Perfect Continuous shows the duration of this state before the past event. 'Was on her feet' is Past Continuous (ongoing at a past moment, without the before relationship). 'Has been on' is Present Perfect Continuous (connects to the present, not a past event).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-07",
            stem: "I realised they ___ to deceive us all along.",
            options: ["had been trying", "were trying", "tried"],
            answer: "had been trying",
            explanation: "'had been trying' — Past Perfect Continuous for an ongoing activity (deception attempts) before a past realisation.",
            fullExplanation: "The realisation (Past Simple) happened at a past moment. The deception attempts were a continuous activity that had been going on before and up to that realisation. Past Perfect Continuous captures this. 'Were trying' is Past Continuous (ongoing at a past moment, without the completed duration before the realisation). 'Tried' is a single completed past act.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-08",
            stem: "The pipes burst because the water ___ at very high pressure for weeks.",
            options: ["had been flowing", "flowed", "was flowing"],
            answer: "had been flowing",
            explanation: "'had been flowing' — The causal prolonged condition before the pipe failure uses Past Perfect Continuous.",
            fullExplanation: "The high-pressure flow (ongoing activity over weeks — Past Perfect Continuous) was the cause of the burst (Past Simple). Past Perfect Continuous shows a prolonged causal condition that preceded the event. 'Flowed' (Past Simple) would list two events without the causal, duration relationship. 'Was flowing' is Past Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-09",
            stem: "The walls were covered in paint — the children ___ in the art room all afternoon.",
            options: ["had been painting", "had painted", "were painting"],
            answer: "had been painting",
            explanation: "'had been painting' — Visible evidence of prolonged continuous past activity uses Past Perfect Continuous.",
            fullExplanation: "The paint-covered walls are evidence of continuous painting over the afternoon. Past Perfect Continuous captures both the duration and the ongoing nature of the activity before the moment of discovery. 'Had painted' would focus on the completed act (a mural, a picture). 'Were painting' is Past Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-10",
            stem: "The team ___ the project for six months when the budget was suddenly cut.",
            options: ["had been developing", "developed", "was developing"],
            answer: "had been developing",
            explanation: "'had been developing' — Past Perfect Continuous for the duration of ongoing work before a past interruption.",
            fullExplanation: "The development was an ongoing process (six months) before the budget cut interrupted it. Past Perfect Continuous emphasises duration before a past event that ended or disrupted the activity. 'Developed' (Past Simple) would list two events without the duration-before relationship. 'Was developing' is Past Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-11",
            stem: "He ___ so hard that year that he barely noticed the summer passing.",
            options: ["had been working", "worked", "was working"],
            answer: "had been working",
            explanation: "'had been working' — Past Perfect Continuous for an ongoing intensive activity over a defined past period.",
            fullExplanation: "'That year' defines a completed past period. Past Perfect Continuous (had been working) emphasises the continuous, intensive nature of the work throughout that period, explaining why he didn't notice the summer. 'Worked' (Past Simple) describes the work as a completed event. 'Was working' is Past Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-12",
            stem: "By the time I arrived, everyone ___ for the meeting to start.",
            options: ["had been waiting", "was waiting", "waited"],
            answer: "had been waiting",
            explanation: "'had been waiting' — 'By the time I arrived' establishes a past deadline — duration before that point uses Past Perfect Continuous.",
            fullExplanation: "'By the time I arrived' sets a past reference point. The waiting was ongoing for some duration before my arrival. Past Perfect Continuous shows this prior, continuous waiting. 'Was waiting' is Past Continuous (ongoing at the moment of arrival, but without the duration emphasis). 'Waited' describes a completed wait.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-13",
            stem: "The athlete's muscles ached terribly — she ___ at maximum intensity since dawn.",
            options: ["had been training", "trained", "has been training"],
            answer: "had been training",
            explanation: "'had been training' — Physical exhaustion from prolonged activity before a past moment uses Past Perfect Continuous.",
            fullExplanation: "The aching muscles are a result of training that had been going on continuously since dawn. Past Perfect Continuous connects the duration of the activity to the physical consequence at a past moment. 'Trained' (Past Simple) focuses on a completed event. 'Has been training' is Present Perfect Continuous (connects to now, not a past moment).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          },
          {
            id: "vt-pastperf-c-14",
            stem: "She admitted she ___ the decision to leave for months before telling anyone.",
            options: ["had been considering", "considered", "was considering"],
            answer: "had been considering",
            explanation: "'had been considering' — Past Perfect Continuous in reported speech for a prolonged past process.",
            fullExplanation: "In reported speech, the tense shifts back: 'I have been considering' (original) → 'had been considering'. The consideration was ongoing for months before the admission. Past Perfect Continuous shows the duration of this prior mental process. 'Considered' (Past Simple) would describe a single completed decision event. 'Was considering' is Past Continuous (no duration-before relationship).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 16 & 48"
          },
          {
            id: "vt-pastperf-c-15",
            stem: "The investors were delighted — the stock ___ steadily for three consecutive quarters.",
            options: ["had been rising", "rose", "has been rising"],
            answer: "had been rising",
            explanation: "'had been rising' — Past Perfect Continuous for a steady trend over a period before a past moment of reaction.",
            fullExplanation: "The delight (past state) was caused by a steady rise that had been ongoing for three quarters before that moment. Past Perfect Continuous shows this prior, continuous trend. 'Rose' (Past Simple) describes the rise as a single completed event. 'Has been rising' connects to the present, not a past moment of reaction.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 16"
          }
        ]
      },
      {
        id: "vt-fut-will",
        title: "Future with \"will\"",
        tasks: [
          {
            id: "vt-fut-will-01",
            stem: "A: I'm cold. B: I ___ close the window for you.",
            options: ["'ll close", "am going to close", "am closing"],
            answer: "'ll close",
            explanation: "'ll close' — 'Will' for a spontaneous decision made at the moment of speaking.",
            fullExplanation: "When a decision is made at the moment of speaking (in response to information just received), we use 'will' (= 'll). 'Going to close' would indicate a plan made before this moment. Present Continuous 'am closing' indicates a pre-arranged event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19"
          },
          {
            id: "vt-fut-will-02",
            stem: "I think it ___ rain tomorrow — look at those dark clouds on the horizon.",
            options: ["will", "is going to", "is"],
            answer: "will",
            explanation: "'I think' + prediction without direct visual evidence uses 'will'.",
            fullExplanation: "With 'I think', 'I believe', 'I expect', 'probably', 'perhaps', predictions are expressed with 'will'. Note: 'It's going to rain' is also correct here given the visual evidence (dark clouds), but 'I think' signals an opinion/prediction → 'will'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19",
            alternateAnswers: ["is going to"]
          },
          {
            id: "vt-fut-will-03",
            stem: "Don't worry — I ___ help you with those heavy boxes.",
            options: ["'ll", "am going to", "am"],
            answer: "'ll",
            explanation: "An offer made in the moment of seeing a need uses 'will'.",
            fullExplanation: "Offers and promises made spontaneously (not pre-planned) use 'will'. Seeing someone struggling with heavy boxes and immediately offering help is a classic example. 'Am going to help' would mean you had already planned to help before this moment. 'Am helping' is Present Continuous for arrangements.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19"
          },
          {
            id: "vt-fut-will-04",
            stem: "Scientists predict that average global temperatures ___ rise by 2°C by 2100.",
            options: ["will", "are going to", "are"],
            answer: "will",
            explanation: "Scientific predictions and forecasts use 'will'.",
            fullExplanation: "Predictions and forecasts based on opinion, analysis, or models use 'will'. 'Are going to rise' would be used if there were clear, immediate evidence pointing to the rise. Scientific models → opinion/prediction → 'will'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19"
          },
          {
            id: "vt-fut-will-05",
            stem: "I promise I ___ send you the report by the end of the week.",
            options: ["will", "'m going to", "am sending"],
            answer: "will",
            explanation: "Promises use 'will'.",
            fullExplanation: "Promises are characteristically expressed with 'will'. 'I promise I will' is a fixed formula. 'Going to' indicates intention, not a promise. Present Continuous suggests a pre-arranged event, not a commitment.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19"
          },
          {
            id: "vt-fut-will-06",
            stem: "If you don't hurry, you ___ miss the last train.",
            options: ["will", "are going to", "are"],
            answer: "will",
            explanation: "Warnings in real conditional sentences (first conditional) use 'will' in the result clause.",
            fullExplanation: "First conditional sentences (if + present simple, will + base verb) use 'will' in the main clause. The warning is a prediction about a possible future consequence. 'Are going to miss' would suggest the missing is already inevitable from current evidence.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 19 & 25"
          },
          {
            id: "vt-fut-will-07",
            stem: "The new financial regulations ___ affect all companies operating in the EU.",
            options: ["will", "are going to", "are affecting"],
            answer: "will",
            explanation: "Future facts and certain future states use 'will'.",
            fullExplanation: "When a future event is certain because of a decision or law already in place, 'will' describes the inevitable outcome as a future fact. 'Are going to' could also be used, but 'will' is more formal and appropriate for official/factual statements.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19",
            alternateAnswers: ["are going to"]
          },
          {
            id: "vt-fut-will-08",
            stem: "A: The printer is broken. B: I ___ call the technician right away.",
            options: ["'ll call", "am going to call", "am calling"],
            answer: "'ll call",
            explanation: "'ll call' — A spontaneous decision triggered by new information uses 'will'.",
            fullExplanation: "Learning that the printer is broken is new information. The decision to call the technician is made at that moment → 'will'. 'Am going to call' would mean the call was already planned before hearing the news. 'Am calling' is a pre-arranged event.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19"
          },
          {
            id: "vt-fut-will-09",
            stem: "The company ___ probably announce the results of the merger next Tuesday.",
            options: ["will", "is going to", "is announcing"],
            answer: "will",
            explanation: "'Probably' with a future event signals a prediction — 'will' is correct.",
            fullExplanation: "Adverbs of probability (probably, possibly, perhaps, certainly, definitely) typically accompany 'will' for predictions. 'Is going to announce' would suggest the announcement is already planned and confirmed. 'Is announcing' is a fixed arrangement (also possible but less natural with 'probably').",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19"
          },
          {
            id: "vt-fut-will-10",
            stem: "I expect the new software update ___ fix most of the bugs reported last month.",
            options: ["will", "is going to", "is fixing"],
            answer: "will",
            explanation: "'I expect' introduces a prediction — 'will' is used.",
            fullExplanation: "After 'I expect', 'I think', 'I hope', 'I doubt' and similar phrases, 'will' is used for predictions. 'Is going to fix' would suggest there is already visible evidence or a confirmed plan. 'Is fixing' is Present Continuous for a current arrangement.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19"
          },
          {
            id: "vt-fut-will-11",
            stem: "The next train to Edinburgh ___ depart from Platform 7 in approximately ten minutes.",
            options: ["will", "is going to", "is departing"],
            answer: "will",
            explanation: "Timetabled announcements and official statements about the immediate future use 'will'.",
            fullExplanation: "Platform announcements typically use 'will' to state scheduled future events. 'Is going to depart' is more conversational. 'Is departing' (Present Continuous) is also used in timetables but 'will depart' is the standard announcement form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19",
            alternateAnswers: ["is departing"]
          },
          {
            id: "vt-fut-will-12",
            stem: "I'm sure you ___ enjoy the film — the critics have given it five stars.",
            options: ["will", "are going to", "are"],
            answer: "will",
            explanation: "'I'm sure' introduces a confident prediction — 'will' is required.",
            fullExplanation: "After expressions of certainty ('I'm sure', 'I'm certain', 'I'm confident'), 'will' is used for confident predictions. 'Are going to enjoy' would suggest visible evidence that they will enjoy it, not a confident opinion.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19"
          },
          {
            id: "vt-fut-will-13",
            stem: "___ you be at the conference in Vienna next March?",
            options: ["Will", "Are", "Do"],
            answer: "Will",
            explanation: "'Will you be…?' is a standard future question about presence at a future event.",
            fullExplanation: "'Will you be there?' is used to ask whether someone plans to be present at a future event. It is neutral and does not imply certainty either way. 'Are you going to be there?' is also correct but slightly more conversational. 'Do you be' is not grammatical.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19",
            alternateAnswers: ["Are"]
          },
          {
            id: "vt-fut-will-14",
            stem: "Don't worry — everything ___ work out fine in the end.",
            options: ["will", "is going to", "is working"],
            answer: "will",
            explanation: "Reassurances and optimistic predictions use 'will'.",
            fullExplanation: "Reassurances ('don't worry', 'it'll be fine') always use 'will'. This reflects a general optimistic belief about the future, not a plan or visible evidence. 'Is going to work out' would suggest the speaker can see specific evidence that things will improve.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19"
          },
          {
            id: "vt-fut-will-15",
            stem: "This medication ___ help reduce inflammation within 48 hours of the first dose.",
            options: ["will", "is going to", "is helping"],
            answer: "will",
            explanation: "Instructions and expected effects of medication use 'will'.",
            fullExplanation: "Medical instructions and factual statements about expected outcomes use 'will'. This is a factual statement about the drug's expected effect — not based on immediate visible evidence, but on pharmaceutical knowledge. 'Is going to help' is also acceptable but 'will' is more formal and factual.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 19",
            alternateAnswers: ["is going to"]
          }
        ]
      },
      {
        id: "vt-fut-going",
        title: "Future with \"going to\"",
        tasks: [
          {
            id: "vt-fut-going-01",
            stem: "Look at those black clouds — it ___ rain.",
            options: ["is going to", "will", "is"],
            answer: "is going to",
            explanation: "'is going to' — Immediate predictions from visible evidence use 'going to'.",
            fullExplanation: "'Going to' is used for predictions based on present evidence. The black clouds are the visible evidence. This is the key distinction from 'will' (opinion/prediction without evidence). 'Will rain' is used when making a prediction based on opinion or information, not direct observation.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20"
          },
          {
            id: "vt-fut-going-02",
            stem: "We ___ visit my parents in Minsk next summer — we've already bought the tickets.",
            options: ["are going to", "will", "are visiting"],
            answer: "are going to",
            explanation: "'are going to' — A pre-made plan or intention uses 'going to'.",
            fullExplanation: "'Going to' describes a plan or intention formed before the moment of speaking. Buying tickets confirms the plan was already made. 'Will' would suggest a spontaneous decision. Present Continuous 'are visiting' is also correct for a fixed arrangement but 'going to' is the primary answer for pre-formed plans.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20",
            alternateAnswers: ["are visiting"]
          },
          {
            id: "vt-fut-going-03",
            stem: "Careful — you ___ spill that coffee if you carry it that way!",
            options: ["are going to", "will", "are"],
            answer: "are going to",
            explanation: "'are going to' — A prediction from immediate visible evidence (the way the cup is held) uses 'going to'.",
            fullExplanation: "The speaker can see that the cup is dangerously tilted — this is direct, visual evidence of the likely spill. 'Going to' is the correct form for predictions based on present, visible evidence. 'Will spill' would be a general warning based on opinion.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20"
          },
          {
            id: "vt-fut-going-04",
            stem: "She's decided — she ___ apply for the scholarship at Oxford next year.",
            options: ["is going to", "will", "is applying"],
            answer: "is going to",
            explanation: "'is going to' — 'She's decided' confirms a pre-formed intention — 'going to' is required.",
            fullExplanation: "'She's decided' tells us the plan was made before this conversation. 'Going to' describes pre-formed intentions and plans. 'Will apply' would suggest she makes the decision spontaneously at this moment. Present Continuous 'is applying' also works for confirmed arrangements but 'going to' is the primary answer.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20",
            alternateAnswers: ["is applying"]
          },
          {
            id: "vt-fut-going-05",
            stem: "The patient's condition is critical — without intervention, he ___ die.",
            options: ["is going to", "will", "is dying"],
            answer: "is going to",
            explanation: "'is going to' — A near-certain prediction from clear medical evidence uses 'going to'.",
            fullExplanation: "The medical evidence (critical condition) makes the outcome almost inevitable. 'Going to' is used when there is clear, present evidence pointing to an almost certain future outcome. 'Will die' is a prediction based on opinion; 'going to' is based on observable evidence.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20"
          },
          {
            id: "vt-fut-going-06",
            stem: "I ___ quit my job and start my own business — I've made up my mind.",
            options: ["am going to", "will", "am quitting"],
            answer: "am going to",
            explanation: "'am going to' — 'I've made up my mind' signals a pre-formed intention — 'going to' is required.",
            fullExplanation: "A decision that was already made before this conversation is expressed with 'going to'. 'I will quit' would suggest the decision is made at this moment (spontaneous). 'Am quitting' is Present Continuous for a fixed arrangement — possible, but 'going to' better expresses the intention.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20"
          },
          {
            id: "vt-fut-going-07",
            stem: "The merger ___ create over 5,000 new jobs, according to a company press release.",
            options: ["is going to", "will", "is creating"],
            answer: "is going to",
            explanation: "'is going to' — A plan officially announced (press release) uses 'going to'.",
            fullExplanation: "An officially announced plan or intention uses 'going to'. A press release represents the company's stated intention. 'Will create' is also used for general predictions about the merger's effects. Both are possible, but 'going to' is more natural when referring to an official statement of intent.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20",
            alternateAnswers: ["will"]
          },
          {
            id: "vt-fut-going-08",
            stem: "Look — that tower of blocks ___ fall any second!",
            options: ["is going to", "will", "is falling"],
            answer: "is going to",
            explanation: "'is going to' — 'Look!' with visible physical evidence of imminent collapse uses 'going to'.",
            fullExplanation: "'Look!' signals that the speaker is pointing to something visible. The wobbling tower is visible evidence of an imminent event. 'Going to fall' is the standard form for predictions with present, visible evidence. 'Will fall' would be a general prediction without the immediacy of visual evidence.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20"
          },
          {
            id: "vt-fut-going-09",
            stem: "They ___ renovate the entire library over the summer — the council approved the funding.",
            options: ["are going to", "will", "are renovating"],
            answer: "are going to",
            explanation: "'are going to' — A confirmed plan with funding already approved uses 'going to'.",
            fullExplanation: "The funding approval confirms that the plan is already decided. 'Going to renovate' expresses a pre-formed, confirmed plan. 'Will renovate' would suggest a general prediction. Present Continuous 'are renovating' also works for a fixed schedule but 'going to' is the primary form for confirmed intentions.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20",
            alternateAnswers: ["are renovating"]
          },
          {
            id: "vt-fut-going-10",
            stem: "She has a fever of 39°C — she ___ feel terrible tomorrow if she doesn't rest.",
            options: ["is going to", "will", "is feeling"],
            answer: "is going to",
            explanation: "'is going to' — A prediction from present medical evidence uses 'going to'.",
            fullExplanation: "The fever is present, visible evidence that points to how she will feel tomorrow. 'Going to feel' is correct for predictions based on present evidence. 'Will feel' is also possible as a general prediction but 'going to' is more precise when the evidence is visible and present.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20",
            alternateAnswers: ["will"]
          },
          {
            id: "vt-fut-going-11",
            stem: "I've already booked the restaurant — we ___ celebrate your promotion on Friday.",
            options: ["are going to", "will", "are celebrating"],
            answer: "are going to",
            explanation: "'are going to' — A pre-arranged celebration with bookings already made uses 'going to'.",
            fullExplanation: "The restaurant booking confirms the plan was made in advance. 'Going to celebrate' expresses a pre-formed plan. Present Continuous 'are celebrating' is also perfectly correct (fixed arrangement), but 'going to' is the primary answer for pre-formed intentions.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20",
            alternateAnswers: ["are celebrating"]
          },
          {
            id: "vt-fut-going-12",
            stem: "The professor announced that the class ___ write a 3,000-word essay by Friday.",
            options: ["was going to", "would", "will"],
            answer: "was going to",
            explanation: "In reported speech, 'is going to' backshifts to 'was going to'.",
            fullExplanation: "In reported speech, 'is going to' shifts back to 'was going to'. The professor made this announcement in the past. 'Would write' is the reported speech form of 'will write' (not 'going to'). This task tests the distinction between backshifted 'will' and backshifted 'going to'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 20 & 48"
          },
          {
            id: "vt-fut-going-13",
            stem: "He's been saving for two years — he ___ buy a motorbike.",
            options: ["is going to", "will", "is buying"],
            answer: "is going to",
            explanation: "'is going to' — A long-held intention backed by clear preparation (saving money) uses 'going to'.",
            fullExplanation: "Saving for two years is clear, prior preparation that supports a definite plan → 'going to'. 'Will buy' would suggest a spontaneous decision. Present Continuous 'is buying' is also correct for an arranged purchase but 'going to' better expresses the long-held intention.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20"
          },
          {
            id: "vt-fut-going-14",
            stem: "The bridge is crumbling — it ___ collapse completely unless it is repaired urgently.",
            options: ["is going to", "will", "is collapsing"],
            answer: "is going to",
            explanation: "'is going to' — Structural evidence of imminent failure makes 'going to' the correct prediction form.",
            fullExplanation: "The crumbling (visible present evidence) points directly to the future collapse. 'Going to' is used for predictions with present, observable evidence. 'Will collapse' would be a general prediction or warning without the immediacy of visual evidence.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20"
          },
          {
            id: "vt-fut-going-15",
            stem: "___ you be at the presentation? I know you already have a ticket.",
            options: ["Are you going to", "Will you", "Are you"],
            answer: "Are you going to",
            explanation: "'Are you going to' — A question about a pre-arranged plan (ticket already bought) uses 'going to'.",
            fullExplanation: "The ticket is already bought — this is a pre-arranged event. 'Are you going to be there?' asks about a known plan. 'Will you be there?' is a neutral question about the future (appropriate when there is no known prior plan). 'Are you there?' is not a future question.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 20"
          }
        ]
      },
      {
        id: "vt-fut-c",
        title: "Future Continuous",
        tasks: [
          {
            id: "vt-fut-c-01",
            stem: "This time next Monday, I ___ on a beach in Crete.",
            options: ["will be lying", "will lie", "am lying"],
            answer: "will be lying",
            explanation: "'will be lying' — Future Continuous for an action in progress at a specific future moment.",
            fullExplanation: "Future Continuous (will be + -ing) describes an action that will be in progress at a specific future point in time. 'This time next Monday' specifies the future moment. 'Will lie' describes a completed action, not an ongoing one. Present Continuous refers to current arrangements, not a future moment-in-progress.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22"
          },
          {
            id: "vt-fut-c-02",
            stem: "Don't call me at 3 pm — I ___ a presentation to the board of directors.",
            options: ["will be giving", "will give", "am giving"],
            answer: "will be giving",
            explanation: "'will be giving' — Future Continuous for an activity in progress at a specific future time.",
            fullExplanation: "'Don't call me at 3 pm' specifies the exact future moment. Future Continuous describes what will be happening at that moment. 'Will give' (Future Simple) describes the presentation as a completed event, not an ongoing one. Present Continuous 'am giving' could also be used for a fixed appointment.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22",
            alternateAnswers: ["am giving"]
          },
          {
            id: "vt-fut-c-03",
            stem: "By the time you wake up tomorrow, I ___ already ___ for hours.",
            options: ["will / be working", "will / have been working", "am / working"],
            answer: "will / be working",
            explanation: "'will / be working' — Future Continuous for an action in progress at a specific future moment (when you wake up).",
            fullExplanation: "'By the time you wake up' sets a future reference point. Future Continuous (will be working) describes the action in progress at that moment. Note: 'will have been working' (Future Perfect Continuous) would emphasise duration up to that point — also grammatically valid, but Future Continuous is the primary answer here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22",
            alternateAnswers: ["will / have been working"]
          },
          {
            id: "vt-fut-c-04",
            stem: "She ___ in Tokyo this time next year — her transfer has been confirmed.",
            options: ["will be living", "will live", "lives"],
            answer: "will be living",
            explanation: "'will be living' — Future Continuous for an ongoing situation at a specific future time.",
            fullExplanation: "'This time next year' specifies the future moment. Future Continuous describes the ongoing situation (living) at that future point. 'Will live' is also possible but slightly more formal/static. 'Lives' (Present Simple) cannot refer to a future situation.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22",
            alternateAnswers: ["will live"]
          },
          {
            id: "vt-fut-c-05",
            stem: "I ___ pass the town hall on my way to work — shall I drop the parcel off?",
            options: ["will be passing", "will pass", "am passing"],
            answer: "will be passing",
            explanation: "'will be passing' — Future Continuous for an event that will happen as part of a planned route (not a deliberate decision).",
            fullExplanation: "Future Continuous is used when something will happen as part of a natural course of events — not as a deliberate plan. 'I will be passing' means the passing happens naturally as part of the journey. 'I will pass' (Future Simple) would suggest a deliberate decision to go past the town hall specifically.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22"
          },
          {
            id: "vt-fut-c-06",
            stem: "This time tomorrow, the delegates ___ the final terms of the agreement.",
            options: ["will be negotiating", "will negotiate", "are negotiating"],
            answer: "will be negotiating",
            explanation: "'will be negotiating' — Future Continuous for an ongoing process at a specific future moment.",
            fullExplanation: "'This time tomorrow' specifies the exact future moment. Future Continuous describes negotiations as an ongoing process at that moment. 'Will negotiate' describes the negotiation as a discrete future event. 'Are negotiating' is Present Continuous for a current arrangement.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22"
          },
          {
            id: "vt-fut-c-07",
            stem: "___ you ___ anything special next weekend? I'd like to arrange a dinner.",
            options: ["Will / be doing", "Do / do", "Are / doing"],
            answer: "Will / be doing",
            explanation: "'Will' — Future Continuous in a polite enquiry about someone's plans at a future time.",
            fullExplanation: "'Will you be doing anything?' is a common, polite way to enquire about future plans without implying the person must do something specific. It asks what will be in progress. 'Do you do anything?' is Present Simple (wrong tense). 'Are you doing anything?' is also correct and equally polite.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22",
            alternateAnswers: ["Are / doing"]
          },
          {
            id: "vt-fut-c-08",
            stem: "The engineers ___ the new bridge until late 2027.",
            options: ["will be building", "will build", "are building"],
            answer: "will be building",
            explanation: "'will be building' — Future Continuous for an ongoing project extending into the future.",
            fullExplanation: "Future Continuous describes an activity that will be in progress over a future period (until late 2027). 'Will build' describes the building as a completed future event. 'Are building' is Present Continuous, referring to a current arrangement or activity happening now.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22"
          },
          {
            id: "vt-fut-c-09",
            stem: "When you arrive at the airport, the driver ___ for you at the arrivals gate.",
            options: ["will be waiting", "will wait", "waits"],
            answer: "will be waiting",
            explanation: "'will be waiting' — Future Continuous for an action already in progress at the future moment of arrival.",
            fullExplanation: "The driver's waiting will already be in progress when you arrive. Future Continuous captures this 'in-progress at the moment of' meaning. 'Will wait' describes the waiting as a discrete future act. 'Waits' (Present Simple) cannot describe a future action.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22"
          },
          {
            id: "vt-fut-c-10",
            stem: "I hope you ___ well when I come to visit next month.",
            options: ["will be feeling", "will feel", "feel"],
            answer: "will be feeling",
            explanation: "'will be feeling' — Future Continuous for an ongoing state hoped to be in progress at a future time.",
            fullExplanation: "'Feeling well' describes an ongoing state at the future moment of the visit. Future Continuous is used for situations or states that will be in progress at a future reference point. 'Will feel well' is also grammatically correct but slightly less natural for an ongoing state.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22",
            alternateAnswers: ["will feel"]
          },
          {
            id: "vt-fut-c-11",
            stem: "At midnight tonight, the two countries ___ their new free trade treaty.",
            options: ["will be signing", "will sign", "are signing"],
            answer: "will be signing",
            explanation: "'will be signing' — Future Continuous for a ceremonial act in progress at a specific future moment.",
            fullExplanation: "'At midnight tonight' pins the action to a specific future moment. Future Continuous describes the signing as an event in progress at that exact time. 'Will sign' describes the signing as a discrete completed event. Present Continuous 'are signing' is also used for pre-arranged events.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22",
            alternateAnswers: ["are signing"]
          },
          {
            id: "vt-fut-c-12",
            stem: "She ___ her PhD thesis by the time the new semester starts.",
            options: ["will have finished", "will be finishing", "will finish"],
            answer: "will have finished",
            explanation: "'will have finished' — 'By the time' + Future Perfect for completion before a future deadline.",
            fullExplanation: "'By the time + future' signals Future Perfect (will have + past participle) for actions completed before a future deadline. 'Will be finishing' (Future Continuous) describes the action in progress at the moment, not its completion before a deadline. This task distinguishes Future Perfect from Future Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 22-23"
          },
          {
            id: "vt-fut-c-13",
            stem: "Don't worry — I ___ you — I go past your street every day anyway.",
            options: ["'ll be giving / a lift", "will give", "'ll give"],
            answer: "'ll be giving / a lift",
            explanation: "'ll be giving' — Future Continuous for something that will happen naturally as part of a routine.",
            fullExplanation: "Future Continuous is used when something will happen as part of a natural course of events or routine (I go past your street every day). 'I'll be giving you a lift' means it happens naturally as part of my route. 'I'll give you a lift' would sound like a deliberate, special favour.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22"
          },
          {
            id: "vt-fut-c-14",
            stem: "The prime minister ___ a state visit to Japan during the second week of May.",
            options: ["will be making", "will make", "makes"],
            answer: "will be making",
            explanation: "'will be making' — Future Continuous for an extended official activity spanning a future period.",
            fullExplanation: "A state visit is an extended, ongoing activity during a future period (second week of May). Future Continuous captures this ongoing nature. 'Will make' treats the visit as a single discrete event. 'Makes' (Present Simple) describes a timetabled event — also used, but Future Continuous is primary.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22",
            alternateAnswers: ["will make"]
          },
          {
            id: "vt-fut-c-15",
            stem: "I won't be in the office tomorrow — I ___ from home due to the conference.",
            options: ["will be working", "will work", "work"],
            answer: "will be working",
            explanation: "'will be working' — Future Continuous for an ongoing work situation during a future day.",
            fullExplanation: "Working from home will be an ongoing situation throughout tomorrow. Future Continuous describes this ongoing state during a future period. 'Will work' describes working as a discrete completed event. 'Work' (Present Simple) cannot refer to a future state.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 22"
          }
        ]
      },
      {
        id: "vt-fut-perf",
        title: "Future Perfect",
        tasks: [
          {
            id: "vt-fut-perf-01",
            stem: "By next Friday, she ___ the entire project report.",
            options: ["will have completed", "will complete", "is completing"],
            answer: "will have completed",
            explanation: "'will have completed' — 'By next Friday' is a future deadline — Future Perfect shows completion before it.",
            fullExplanation: "Future Perfect (will have + past participle) describes an action that will be completed before a specific future point. 'By' is the key preposition signalling Future Perfect. 'Will complete' describes the completion as a future event without the before-deadline emphasis. 'Is completing' is Present Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-02",
            stem: "By the time you read this letter, I ___ the country.",
            options: ["will have left", "will leave", "am leaving"],
            answer: "will have left",
            explanation: "'will have left' — 'By the time you read' establishes a future reference point — Future Perfect describes completion before it.",
            fullExplanation: "'By the time + someone does something' is a classic Future Perfect structure. The leaving will be completed before the reading happens. 'Will leave' describes the action as a future event without the completed-before relationship. Present Continuous refers to current arrangements.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-03",
            stem: "They ___ working together for exactly 20 years when they retire next spring.",
            options: ["will have been", "will be", "are"],
            answer: "will have been",
            explanation: "'will have been' — Future Perfect for the duration that will have accumulated by a future point.",
            fullExplanation: "Future Perfect (will have been working) emphasises the duration that will have passed by a future deadline. 'When they retire' is the future reference point. 'Will be working' (Future Continuous) would describe the activity in progress at the moment of retirement, not the completed duration.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-04",
            stem: "Scientists ___ a cure for the disease before the end of this decade, experts predict.",
            options: ["will have found", "will find", "are finding"],
            answer: "will have found",
            explanation: "'will have found' — Future Perfect for an anticipated completion before a future deadline (end of the decade).",
            fullExplanation: "'Before the end of this decade' sets a future deadline. Future Perfect emphasises that the finding will be completed by that time. 'Will find' describes the discovery as a future event without the before-deadline emphasis. 'Are finding' is Present Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-05",
            stem: "By the time the guests arrive, we ___ the dinner preparations.",
            options: ["will have finished", "will finish", "are finishing"],
            answer: "will have finished",
            explanation: "'will have finished' — 'By the time the guests arrive' is a future reference point — Future Perfect for completion before it.",
            fullExplanation: "Future Perfect shows that the finishing will be completed before the guests' arrival. 'Will finish' describes finishing as a future event without the completed-before relationship. 'Are finishing' is Present Continuous (current activity in progress).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-06",
            stem: "She ___ over 10,000 kilometres on her bicycle by the time she reaches her destination.",
            options: ["will have cycled", "will cycle", "is cycling"],
            answer: "will have cycled",
            explanation: "'will have cycled' — Future Perfect for the total accumulated before reaching a future point.",
            fullExplanation: "Future Perfect shows the accumulated total that will have been achieved by a future reference point (reaching the destination). 'Will cycle' describes the action as a future event. 'Is cycling' is Present Continuous for a current activity.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-07",
            stem: "This time next year, the renovation work on the cathedral ___ finally ___.",
            options: ["will / have been completed", "will / be completed", "has / been completed"],
            answer: "will / have been completed",
            explanation: "'will' — Future Perfect passive for a process completed before a future point in time.",
            fullExplanation: "Future Perfect passive: will have been + past participle. 'This time next year' is the future reference point. The work will be completed (passive, because the cathedral is the subject) before that point. 'Will be completed' is Future Simple passive. 'Has been completed' is Present Perfect passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-08",
            stem: "By the time he turns 30, he ___ in six different countries.",
            options: ["will have lived", "will live", "is going to live"],
            answer: "will have lived",
            explanation: "'will have lived' — 'By the time he turns 30' is a future reference point — Future Perfect for accumulated experience.",
            fullExplanation: "Future Perfect describes the accumulated experience that will exist by a future reference point (turning 30). 'Will have lived' counts the total countries by that age. 'Will live' describes living as a future event. 'Is going to live' describes a plan, not an accumulated total.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-09",
            stem: "___ you ___ the annual report before the board meeting on Thursday?",
            options: ["Will / have prepared", "Are / going to prepare", "Will / prepare"],
            answer: "Will / have prepared",
            explanation: "'Will' — Future Perfect in a question about completion before a future deadline.",
            fullExplanation: "'Will you have prepared…?' asks whether the action will be completed before a specified future time (the board meeting). Future Perfect is used in questions about expected completion before a future reference point. 'Will you prepare' asks whether you will do it (without the before-completion emphasis).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-10",
            stem: "Don't call the office at 4 pm — the meeting ___ by then.",
            options: ["will have finished", "will finish", "is finishing"],
            answer: "will have finished",
            explanation: "'will have finished' — 'By then' signals Future Perfect — the meeting ends before 4 pm.",
            fullExplanation: "'By then' (= by 4 pm) is a future reference point. Future Perfect shows the meeting will be over/completed before that time. 'Will finish' describes the ending as a future event. 'Is finishing' is Present Continuous for a current arrangement.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-11",
            stem: "By 2030, renewable energy sources ___ more than half of the world's electricity.",
            options: ["will have generated", "will generate", "are generating"],
            answer: "will have generated",
            explanation: "'will have generated' — Future Perfect for an achievement expected to be completed by a future year.",
            fullExplanation: "Future Perfect shows the accumulated generation that will have been achieved by 2030. '2030' is the future deadline. 'Will generate' describes the generating as a future action without the completed-by-deadline emphasis. 'Are generating' is Present Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-12",
            stem: "He ___ all his library books before the return deadline next Monday.",
            options: ["will have returned", "will return", "is returning"],
            answer: "will have returned",
            explanation: "'will have returned' — 'Before the return deadline next Monday' is a future deadline — Future Perfect is required.",
            fullExplanation: "Future Perfect describes the completion of returning books before the deadline. 'Will return' describes the returning as a simple future event. 'Is returning' is Present Continuous for an existing arrangement. The 'before' clause + deadline is a defining context for Future Perfect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-13",
            stem: "The new highway ___ by the time the winter season begins.",
            options: ["will have been opened", "will be opened", "is being opened"],
            answer: "will have been opened",
            explanation: "'will have been opened' — Future Perfect passive for completion before a future deadline.",
            fullExplanation: "Future Perfect passive (will have been + past participle) describes an action in the passive voice that will be completed before a future point (winter). 'Will be opened' is Future Simple passive. 'Is being opened' is Present Continuous passive for an action happening now.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-14",
            stem: "I'm not worried — by the time the problem becomes serious, we ___ a solution.",
            options: ["will have found", "will find", "are going to find"],
            answer: "will have found",
            explanation: "'will have found' — 'By the time [future event]' triggers Future Perfect for the earlier completion.",
            fullExplanation: "Future Perfect shows that finding the solution will be completed before the problem becomes serious. 'By the time' + future clause is the classic Future Perfect structure. 'Will find' describes finding as a future event without the completed-before relationship. 'Are going to find' expresses a plan.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          },
          {
            id: "vt-fut-perf-15",
            stem: "She ___ with the company for exactly thirty years when she retires in June.",
            options: ["will have been working", "will be working", "has been working"],
            answer: "will have been working",
            explanation: "'will have been working' — Future Perfect Continuous for accumulated duration before a future deadline.",
            fullExplanation: "Future Perfect Continuous (will have been + -ing) emphasises the duration that will have accumulated before the future reference point (retirement in June). 30 years of working will have passed by then. 'Will be working' (Future Continuous) describes working in progress at the retirement moment. 'Has been working' is Present Perfect Continuous.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 23"
          }
        ]
      },
      {
        id: "vt-pass-prs",
        title: "Passive \u2014 Present Simple",
        tasks: [
          {
            id: "vt-pass-prs-01",
            stem: "English ___ as an official language in more than 50 countries.",
            options: ["is spoken", "speaks", "is speaking"],
            answer: "is spoken",
            explanation: "'is spoken' — Present Simple passive: is/are + past participle. English is the receiver of the speaking action.",
            fullExplanation: "Passive voice: subject (English) receives the action (being spoken). Present Simple passive = is/are + past participle. 'Speaks' is active voice (English is the doer — but languages don't speak). 'Is speaking' is Present Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-02",
            stem: "The results of the survey ___ to all participants by email.",
            options: ["are sent", "send", "are sending"],
            answer: "are sent",
            explanation: "'are sent' — Plural subject + Present Simple passive: are + past participle.",
            fullExplanation: "The results (plural subject) receive the action (being sent). Present Simple passive with a plural subject uses 'are + past participle'. 'Send' is active voice. 'Are sending' is Present Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-03",
            stem: "Each application ___ by a panel of three independent reviewers.",
            options: ["is evaluated", "evaluates", "is being evaluated"],
            answer: "is evaluated",
            explanation: "'is evaluated' — Singular subject + present passive: is + past participle for a regular process.",
            fullExplanation: "Each application (singular) is the receiver of the action (being evaluated). This is a standard, repeated process → Present Simple passive. 'Evaluates' is active. 'Is being evaluated' is Present Continuous passive (implies evaluation is happening right now, not as a standard procedure).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-04",
            stem: "Milk ___ from cattle that have been raised without antibiotics on this farm.",
            options: ["is produced", "produces", "is producing"],
            answer: "is produced",
            explanation: "'is produced' — Present Simple passive for a regular production process.",
            fullExplanation: "Milk (singular subject) is the receiver of the production process (a regular, ongoing practice). Present Simple passive = is + past participle. 'Produces' is active. 'Is producing' is Present Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-05",
            stem: "The reports ___ directly to the board of directors every quarter.",
            options: ["are submitted", "submit", "submits"],
            answer: "are submitted",
            explanation: "'are submitted' — Plural subject (reports) + Present Simple passive: are + past participle.",
            fullExplanation: "Reports (plural) are the receivers of the action (being submitted). Regular, quarterly process → Present Simple passive. 'Submit' is active (subject would need to be the person submitting). 'Submits' is active, 3rd-person singular.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-06",
            stem: "New products ___ in a specialised laboratory before they reach the market.",
            options: ["are tested", "test", "are testing"],
            answer: "are tested",
            explanation: "'are tested' — Present Simple passive for a standard, mandatory pre-market process.",
            fullExplanation: "Products (plural) are the receivers of testing. The testing is a regular, standard process. Present Simple passive (are + past participle) is correct. 'Test' is active. 'Are testing' is Present Continuous active (implies testing is happening at this moment, not as a standard process).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-07",
            stem: "The museum ___ by more than two million people every year.",
            options: ["is visited", "visits", "is visiting"],
            answer: "is visited",
            explanation: "'is visited' — Singular subject + Present Simple passive for a regular, recurring situation.",
            fullExplanation: "The museum (singular) is visited — it receives the action of visiting. The annual frequency ('every year') confirms this is a regular situation. Present Simple passive = is + past participle. 'Visits' is active (subject would visit somewhere). 'Is visiting' is Present Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-08",
            stem: "The contract ___ in both English and French to ensure legal clarity.",
            options: ["is written", "writes", "is writing"],
            answer: "is written",
            explanation: "'is written' — Present Simple passive for a standard practice (the contract is always written this way).",
            fullExplanation: "The contract is a singular subject receiving the action (being written in two languages). This is a standard practice → Present Simple passive. 'Writes' is active (wrong subject). 'Is writing' is Present Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-09",
            stem: "___ the conference sessions ___ for those who cannot attend in person?",
            options: ["Are / recorded", "Do / record", "Is / recorded"],
            answer: "Are / recorded",
            explanation: "Present Simple passive question with plural subject (sessions): Are + subject + past participle?",
            fullExplanation: "Questions in Present Simple passive: Are/Is + subject + past participle? 'Sessions' is plural → 'Are'. 'Do you record' would be active. 'Is / recorded' uses the wrong auxiliary for a plural subject.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-10",
            stem: "All passengers ___ to switch off their electronic devices during take-off.",
            options: ["are reminded", "remind", "are reminding"],
            answer: "are reminded",
            explanation: "'are reminded' — Present Simple passive for a standard airline instruction directed at passengers.",
            fullExplanation: "Passengers (plural) are reminded — they receive the instruction. This is a standard, routine airline procedure → Present Simple passive (are + past participle). 'Remind' is active. 'Are reminding' is Present Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-11",
            stem: "The water in this region ___ with chlorine before distribution.",
            options: ["is treated", "treats", "is treating"],
            answer: "is treated",
            explanation: "'is treated' — Present Simple passive for a standard water treatment process.",
            fullExplanation: "The water (singular) is the receiver of the treatment. This is a regular, ongoing process → Present Simple passive. 'Treats' is active (who treats?). 'Is treating' is Present Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-12",
            stem: "Gold ___ in several rivers in this region, attracting many amateur prospectors.",
            options: ["is found", "finds", "is finding"],
            answer: "is found",
            explanation: "'is found' — Present Simple passive for a natural state of occurrence (gold occurring in rivers).",
            fullExplanation: "Gold (singular) is found — it is discovered/located (a state that exists). Present Simple passive describes this natural, factual occurrence. 'Finds' is active and requires a human subject. 'Is finding' is Present Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-13",
            stem: "Applications for the scholarship ___ online through the university portal.",
            options: ["are submitted", "submits", "are submitting"],
            answer: "are submitted",
            explanation: "'are submitted' — Plural subject + Present Simple passive for a standard administrative process.",
            fullExplanation: "Applications (plural) are submitted — received through the portal. This is a standard administrative process → Present Simple passive. 'Submits' is 3rd-person singular active. 'Are submitting' is Present Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-14",
            stem: "The building ___ not ___ for residential use — it is zoned for commercial purposes only.",
            options: ["is / approved", "does / approve", "has / been approved"],
            answer: "is / approved",
            explanation: "Present Simple passive negative: is not + past participle.",
            fullExplanation: "Present Simple passive negative = is/are + not + past participle. The building (singular) is the subject that does not receive approval for residential use. 'Does not approve' is active (who approves?). 'Has not been approved' is Present Perfect passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-prs-15",
            stem: "The ancient temple ___ to be over three thousand years old by archaeologists.",
            options: ["is believed", "believes", "is believing"],
            answer: "is believed",
            explanation: "Present Simple passive of reporting verbs: The temple is believed to be… (impersonal passive).",
            fullExplanation: "Reporting verbs (believe, think, say, claim, report) are often used in the passive to distance the claim from any specific source: 'The temple is believed to be…' = People/Experts believe the temple is… This impersonal passive construction is common in formal and academic English.",
            source: "Swan, M. Practical English Usage (4th ed.), §417"
          }
        ]
      },
      {
        id: "vt-pass-pst",
        title: "Passive \u2014 Past Simple",
        tasks: [
          {
            id: "vt-pass-pst-01",
            stem: "The Eiffel Tower ___ between 1887 and 1889.",
            options: ["was built", "built", "was building"],
            answer: "was built",
            explanation: "'was built' — Past Simple passive: was/were + past participle for a completed past action.",
            fullExplanation: "Past Simple passive = was/were + past participle. The Eiffel Tower is the receiver of the building action. The specific dates (1887-1889) confirm a completed past event. 'Built' is active past (subject would be the builders). 'Was building' is Past Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-02",
            stem: "All the laptops ___ from the office during the burglary.",
            options: ["were stolen", "stole", "were stealing"],
            answer: "were stolen",
            explanation: "'were stolen' — Plural subject + Past Simple passive: were + past participle.",
            fullExplanation: "Laptops (plural) are the receivers of the stealing. Past Simple passive with plural = were + past participle. 'Stole' is active past (subject = the thief). 'Were stealing' is Past Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-03",
            stem: "The winner of the competition ___ live on television by the host.",
            options: ["was announced", "announced", "has been announced"],
            answer: "was announced",
            explanation: "'was announced' — Past Simple passive for a completed past broadcast event.",
            fullExplanation: "The winner (singular) received the action of being announced. A single completed past event → Past Simple passive (was + past participle). 'Announced' is active. 'Has been announced' is Present Perfect passive (implies relevance to now).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-04",
            stem: "The ancient manuscripts ___ carefully in a humidity-controlled vault for centuries.",
            options: ["were preserved", "preserved", "were preserving"],
            answer: "were preserved",
            explanation: "'were preserved' — Past Simple passive for a long-completed historical practice.",
            fullExplanation: "The manuscripts (plural) were the receivers of preservation. A completed past practice → Past Simple passive (were + past participle). 'Preserved' is active. 'Were preserving' is Past Continuous active (implies the preserving was in progress when interrupted).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-05",
            stem: "___ the suspect ___ with sufficient evidence at the time of the trial?",
            options: ["Was / presented", "Did / present", "Has / been presented"],
            answer: "Was / presented",
            explanation: "Past Simple passive question: Was/Were + subject + past participle?",
            fullExplanation: "Questions in Past Simple passive: Was/Were + subject + past participle? The suspect (singular) is the receiver. 'Did someone present' would be active. 'Has been presented' is Present Perfect passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-06",
            stem: "The patient ___ three times over the course of six months.",
            options: ["was operated on", "operated on", "has been operated on"],
            answer: "was operated on",
            explanation: "Past Simple passive with a phrasal verb: was operated on.",
            fullExplanation: "With passive phrasal verbs, the preposition stays attached to the verb: 'was operated on' (not 'was operated'). The patient (singular) received the operation. 'Operated on' is active (who operated?). 'Has been operated on' is Present Perfect passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 31"
          },
          {
            id: "vt-pass-pst-07",
            stem: "The bridge ___ after the earthquake rendered it structurally unsafe.",
            options: ["was demolished", "demolished", "was demolishing"],
            answer: "was demolished",
            explanation: "'was demolished' — Past Simple passive for a completed structural action in response to a past event.",
            fullExplanation: "The bridge (singular) was demolished — it received the demolition. A completed past action → Past Simple passive. 'Demolished' is active (who demolished?). 'Was demolishing' is Past Continuous active (implies the demolition was in progress when interrupted).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-08",
            stem: "The new vaccine ___ not ___ in time to stop the first wave of the pandemic.",
            options: ["was / approved", "did / approve", "has / been approved"],
            answer: "was / approved",
            explanation: "Past Simple passive negative: was/were + not + past participle.",
            fullExplanation: "Past Simple passive negative = was/were + not + past participle. 'The vaccine was not approved' means the regulatory body did not approve it (passive: the vaccine is the receiver). 'Did not approve' is active. 'Has not been approved' is Present Perfect passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-09",
            stem: "The novel ___ into more than forty languages after winning the Nobel Prize.",
            options: ["was translated", "translated", "was translating"],
            answer: "was translated",
            explanation: "'was translated' — Past Simple passive for a completed translation process following a past event.",
            fullExplanation: "The novel (singular) was translated — it received the translation. A completed past action → Past Simple passive. 'Translated' is active (who translated?). 'Was translating' is Past Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-10",
            stem: "Several paintings ___ from the gallery during the disturbance.",
            options: ["were removed", "removed", "were removing"],
            answer: "were removed",
            explanation: "'were removed' — Plural subject + Past Simple passive for a completed past action.",
            fullExplanation: "Paintings (plural) were removed — they received the action. Past Simple passive with plural = were + past participle. 'Removed' is active past. 'Were removing' is Past Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-11",
            stem: "The company's headquarters ___ from Paris to Amsterdam in 2019.",
            options: ["were relocated", "relocated", "have been relocated"],
            answer: "were relocated",
            explanation: "'were relocated' — Past Simple passive for a completed corporate move in a specific past year.",
            fullExplanation: "The headquarters (plural here, used as a plural noun) received the relocation. '2019' is a specific past time → Past Simple passive. 'Relocated' is active (who relocated them?). 'Have been relocated' is Present Perfect passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-12",
            stem: "The speech ___ by millions of people around the world on radio and television.",
            options: ["was heard", "heard", "was hearing"],
            answer: "was heard",
            explanation: "'was heard' — Past Simple passive for a completed broadcast event reaching a mass audience.",
            fullExplanation: "The speech (singular) was heard — it received the hearing by the audience. A completed past event → Past Simple passive. 'Heard' is active past (the listeners heard). 'Was hearing' is Past Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-13",
            stem: "The scientists ___ with the Nobel Prize in Physics for their work on quantum computing.",
            options: ["were awarded", "awarded", "have been awarded"],
            answer: "were awarded",
            explanation: "'were awarded' — Past Simple passive: scientists received the award (passive with 'award' + indirect object).",
            fullExplanation: "The scientists (plural) received the award. Past Simple passive with plural = were + past participle. 'Awarded' is active (who awarded them?). 'Have been awarded' is Present Perfect passive. Note: 'award' takes an indirect object — 'were awarded [with] the prize'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-14",
            stem: "The treaty ___ by all twelve member states before midnight on December 31st.",
            options: ["was ratified", "ratified", "was ratifying"],
            answer: "was ratified",
            explanation: "'was ratified' — Past Simple passive for a completed official action by a specific deadline.",
            fullExplanation: "The treaty (singular) was ratified — it received the ratification. A completed past action before a deadline → Past Simple passive. 'Ratified' is active (who ratified?). 'Was ratifying' is Past Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-pst-15",
            stem: "The error in the report ___ by a junior accountant who had been working overnight.",
            options: ["was introduced", "introduced", "was introducing"],
            answer: "was introduced",
            explanation: "'was introduced' — Past Simple passive with a 'by' agent phrase for a completed past mistake.",
            fullExplanation: "The error (singular) was introduced — it received the action of being introduced. The agent (a junior accountant) appears in the 'by' phrase. Past Simple passive = was + past participle. 'Introduced' is active. 'Was introducing' is Past Continuous active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          }
        ]
      },
      {
        id: "vt-pass-perf",
        title: "Passive \u2014 Perfect",
        tasks: [
          {
            id: "vt-pass-perf-01",
            stem: "The new regulations ___ already ___ by the government.",
            options: ["have / been approved", "have / approved", "are / approved"],
            answer: "have / been approved",
            explanation: "Present Perfect passive: have/has + been + past participle.",
            fullExplanation: "Present Perfect passive = have/has + been + past participle. The regulations (plural) received the approval (a recently completed action with present relevance). 'Have approved' is active (who approved?). 'Are approved' is Present Simple passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-perf-02",
            stem: "The report ___ yet — we are still waiting for the final data.",
            options: ["hasn't been published", "hasn't published", "isn't published"],
            answer: "hasn't been published",
            explanation: "'hasn't been published' — Present Perfect passive negative: has/have + not + been + past participle.",
            fullExplanation: "Present Perfect passive negative = has/have + not + been + past participle. The report (singular) has not yet received the publishing action. 'Hasn't published' is active. 'Isn't published' is Present Simple passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-perf-03",
            stem: "Several attempts ___ to negotiate a ceasefire, but all have failed.",
            options: ["have been made", "have made", "were made"],
            answer: "have been made",
            explanation: "'have been made' — Present Perfect passive for completed attempts with continued relevance.",
            fullExplanation: "Present Perfect passive (have been + past participle) connects past attempts to the ongoing present situation (all have failed — still relevant). 'Have made' is active. 'Were made' is Past Simple passive (would disconnect the attempts from present relevance).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-perf-04",
            stem: "By the time the inspector arrived, all the evidence ___.",
            options: ["had been destroyed", "was destroyed", "has been destroyed"],
            answer: "had been destroyed",
            explanation: "'had been destroyed' — Past Perfect passive: had + been + past participle for completion before a past event.",
            fullExplanation: "Past Perfect passive = had + been + past participle. The destruction was completed before the inspector's arrival (a past event). 'Was destroyed' is Past Simple passive (no before-another-event emphasis). 'Has been destroyed' is Present Perfect passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 30 & 31"
          },
          {
            id: "vt-pass-perf-05",
            stem: "___ the new library ___ since the renovation work began?",
            options: ["Has / been opened", "Has / opened", "Was / opened"],
            answer: "Has / been opened",
            explanation: "Present Perfect passive question: Has/Have + subject + been + past participle?",
            fullExplanation: "Present Perfect passive questions: Has/Have + subject + been + past participle? 'Library' is singular → 'Has'. 'Has opened' is active (the library doesn't open itself — or treats 'open' as intransitive, which changes meaning). 'Was opened' is Past Simple passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-perf-06",
            stem: "The prisoner ___ three times before finally being released last year.",
            options: ["had been transferred", "has been transferred", "was transferred"],
            answer: "had been transferred",
            explanation: "'had been transferred' — Past Perfect passive for events completed before the final release (a past event).",
            fullExplanation: "All three transfers were completed before the release (the past reference point). Past Perfect passive = had + been + past participle. 'Has been transferred' is Present Perfect passive (connects to now). 'Was transferred' is Past Simple passive (lists the event without the before-release sequence).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 30 & 31"
          },
          {
            id: "vt-pass-perf-07",
            stem: "The letter ___ to the wrong address twice before it finally reached the recipient.",
            options: ["had been sent", "has been sent", "was sent"],
            answer: "had been sent",
            explanation: "'had been sent' — Past Perfect passive for the repeated errors completed before the final correct delivery.",
            fullExplanation: "Both incorrect deliveries happened and were completed before the final correct delivery (past event). Past Perfect passive = had + been + past participle. 'Has been sent' is Present Perfect passive. 'Was sent' is Past Simple passive (loses the before-the-final-delivery sequence).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 30 & 31"
          },
          {
            id: "vt-pass-perf-08",
            stem: "The missing artefacts ___ by an anonymous donor to the national museum.",
            options: ["have been returned", "have returned", "were returned"],
            answer: "have been returned",
            explanation: "'have been returned' — Present Perfect passive for a recent completed action with present relevance.",
            fullExplanation: "Present Perfect passive (have been + past participle) — the artefacts' return is recent and currently relevant (the museum now has them). 'Have returned' is active (the artefacts don't return themselves). 'Were returned' is Past Simple passive (implies a specific past time, now disconnected from the present).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-perf-09",
            stem: "How many times ___ the constitution ___ since independence?",
            options: ["has / been amended", "was / amended", "has / amended"],
            answer: "has / been amended",
            explanation: "'has' — Present Perfect passive question for counting changes in an unfinished period.",
            fullExplanation: "Present Perfect passive is used to count events within an unfinished period (since independence — to the present). 'Has / been amended' = Have/Has + been + past participle. 'Was / amended' is Past Simple passive (specific past time). 'Has / amended' is active.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-perf-10",
            stem: "The construction site ___ not ___ for the public — entry is strictly prohibited.",
            options: ["has / been opened", "was / opened", "is / opened"],
            answer: "has / been opened",
            explanation: "Present Perfect passive negative for a state that has not yet been changed.",
            fullExplanation: "Present Perfect passive negative (has/have + not + been + past participle) indicates that the opening has not happened up to now. 'Was not opened' is Past Simple passive (specific past time). 'Is not opened' is Present Simple passive (describes a current state, not a history).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-perf-11",
            stem: "She discovered that her personal data ___ without her consent.",
            options: ["had been shared", "was shared", "has been shared"],
            answer: "had been shared",
            explanation: "'had been shared' — Past Perfect passive in a discovery: the sharing happened before the discovery.",
            fullExplanation: "The data sharing (Past Perfect passive) was completed before she discovered it (Past Simple). Past Perfect passive = had + been + past participle. 'Was shared' is Past Simple passive (no before-the-discovery relationship). 'Has been shared' is Present Perfect passive (present relevance, not past sequence).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 30 & 31"
          },
          {
            id: "vt-pass-perf-12",
            stem: "The company's toxic waste ___ illegally into the river for years.",
            options: ["has been dumped", "was dumped", "is being dumped"],
            answer: "has been dumped",
            explanation: "'has been dumped' — Present Perfect passive for an ongoing illegal activity with present relevance.",
            fullExplanation: "Present Perfect passive (has been + past participle) describes an activity that has been going on for a period and is still relevant now. 'Was dumped' is Past Simple passive (completed single past event). 'Is being dumped' is Present Continuous passive (happening right now, not over a period).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-perf-13",
            stem: "By the time the auditors completed their review, the funds ___.",
            options: ["had been misappropriated", "were misappropriated", "have been misappropriated"],
            answer: "had been misappropriated",
            explanation: "'had been misappropriated' — Past Perfect passive for the earlier completed wrongdoing before the audit conclusion.",
            fullExplanation: "The misappropriation was complete before the audit concluded (past reference point). Past Perfect passive = had + been + past participle. 'Were misappropriated' is Past Simple passive (no before-the-audit sequence). 'Have been misappropriated' is Present Perfect passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 30 & 31"
          },
          {
            id: "vt-pass-perf-14",
            stem: "The new treatment ___ only recently ___ for use in clinical practice.",
            options: ["has / been approved", "was / approved", "had / been approved"],
            answer: "has / been approved",
            explanation: "'has' — Present Perfect passive with 'recently' for a just-completed official action.",
            fullExplanation: "'Recently' is a signal for Present Perfect (recent past with present relevance). Present Perfect passive = has/have + been + past participle. 'Was approved' is Past Simple passive (specific past time, disconnected from now). 'Had been approved' is Past Perfect passive (before another past event).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 30"
          },
          {
            id: "vt-pass-perf-15",
            stem: "The software ___ not ___ thoroughly before it was released to the public.",
            options: ["had / been tested", "was / tested", "has / been tested"],
            answer: "had / been tested",
            explanation: "'had' — Past Perfect passive negative for a failure that preceded the release.",
            fullExplanation: "The lack of testing was complete before the release (past event). Past Perfect passive negative = had + not + been + past participle. 'Was not tested' is Past Simple passive (lists the failure without the before-release sequence). 'Has not been tested' is Present Perfect passive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 30 & 31"
          }
        ]
      },
      {
        id: "vt-modal",
        title: "Modal Verbs",
        tasks: [
          {
            id: "vt-modal-01",
            stem: "You ___ wear a seatbelt at all times when the vehicle is in motion — it's the law.",
            options: ["must", "should", "might"],
            answer: "must",
            explanation: "'Must' expresses a legal or strong obligation.",
            fullExplanation: "'Must' is used for obligations that come from the speaker or from the law. Wearing a seatbelt is a legal requirement → 'must'. 'Should' expresses advice or recommendation (less strong than must). 'Might' expresses possibility, not obligation.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 32-33"
          },
          {
            id: "vt-modal-02",
            stem: "You ___ smoke in the hospital — it is strictly forbidden.",
            options: ["must not", "should not", "might not"],
            answer: "must not",
            explanation: "'Must not' expresses a prohibition (something is not allowed).",
            fullExplanation: "'Must not' = prohibition (it is forbidden to do this). 'Should not' = advice against something (it is not a good idea). The key distinction: 'must not' = the action is prohibited; 'don't have to' = the action is not necessary (but you can if you want).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 33"
          },
          {
            id: "vt-modal-03",
            stem: "He ___ play the violin when he was five years old — he was remarkably gifted.",
            options: ["could", "was able to", "can"],
            answer: "could",
            explanation: "'Could' expresses a past general ability — the ability existed over a period in the past.",
            fullExplanation: "'Could' describes a general ability that existed in the past (over a period of time). 'Was able to' describes a specific achievement in a particular situation ('He was able to play the concerto at the recital'). 'Can' is present tense. Both 'could' and 'was able to' can express general past ability, but 'could' is more common.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 36",
            alternateAnswers: ["was able to"]
          },
          {
            id: "vt-modal-04",
            stem: "This ___ be the right address — there's no number 47 on this street.",
            options: ["can't", "mustn't", "mightn't"],
            answer: "can't",
            explanation: "'Can't be' expresses logical impossibility — certainty that something is not the case.",
            fullExplanation: "'Can't be' expresses near-certain deduction that something is impossible or untrue (we are certain this is wrong). 'Must be' expresses near-certain deduction that something is true. 'Mustn't' expresses prohibition. 'Mightn't be' expresses a weak possibility that something is not the case.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 35"
          },
          {
            id: "vt-modal-05",
            stem: "She ___ be the new director — she looks far too young for that position.",
            options: ["can't", "mustn't", "mightn't"],
            answer: "can't",
            explanation: "'Can't be' expresses a logical deduction that something is impossible based on evidence.",
            fullExplanation: "'Can't be' = we are certain this is not the case (based on the evidence: she looks too young). This is the negative deduction form, contrasted with 'must be' (certain it is true) and 'might be' (possible). 'Mustn't' is a prohibition, not a deduction.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 35"
          },
          {
            id: "vt-modal-06",
            stem: "You ___ take an umbrella today — the forecast says it might rain.",
            options: ["should", "must", "can"],
            answer: "should",
            explanation: "'Should' gives advice or a recommendation — weaker than obligation.",
            fullExplanation: "'Should' gives advice or a recommendation based on what would be wise or beneficial. 'Must take' would mean it is obligatory. 'Can take' would mean you have the option or permission to take one. The context ('might rain') suggests advice, not obligation.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 34"
          },
          {
            id: "vt-modal-07",
            stem: "___ I use your phone for a moment? Mine has run out of battery.",
            options: ["Could", "Must", "Should"],
            answer: "Could",
            explanation: "'Could I…?' makes a polite request for permission.",
            fullExplanation: "'Could I…?' is a polite form of 'Can I…?' used to request permission. 'Must I' asks about obligation (is it required?). 'Should I' asks for advice. 'Could' is more formal and polite than 'Can' in requests.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 37",
            alternateAnswers: ["Can"]
          },
          {
            id: "vt-modal-08",
            stem: "The light in the laboratory is on — someone ___ be working late.",
            options: ["must", "should", "would"],
            answer: "must",
            explanation: "'Must be' expresses a near-certain logical deduction based on evidence.",
            fullExplanation: "'Must be' = we are almost certain this is true based on evidence (the light is on). This is the deduction/certainty form of 'must'. 'Should be working' would mean we expect someone to be working. 'Would be' expresses a conditional or habitual past.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 35"
          },
          {
            id: "vt-modal-09",
            stem: "I ___ have left my glasses at the restaurant — I can't find them anywhere.",
            options: ["may", "must", "should"],
            answer: "may",
            explanation: "'May have left' expresses possibility about a past action.",
            fullExplanation: "'May have + past participle' expresses a possibility about what happened in the past. The speaker is not certain — the glasses might be at the restaurant (50% possibility). 'Must have left' would express near-certainty. 'Should have left' would mean it was the right or expected thing to do.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 35-36",
            alternateAnswers: ["might"]
          },
          {
            id: "vt-modal-10",
            stem: "Students ___ not use their mobile phones during the examination — it is prohibited.",
            options: ["may", "must", "should"],
            answer: "may",
            explanation: "'May not' in formal contexts expresses a prohibition or that permission is denied.",
            fullExplanation: "In formal rules and regulations, 'may not' = permission is denied / it is not permitted. 'Must not' also expresses prohibition and is slightly stronger. 'Should not' is advice against. 'May not use' is the formal, regulation-style prohibition.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 37",
            alternateAnswers: ["must"]
          },
          {
            id: "vt-modal-11",
            stem: "If I had more time, I ___ visit the exhibition before it closes.",
            options: ["would", "will", "could"],
            answer: "would",
            explanation: "'Would' in the main clause of a second conditional expresses a hypothetical result.",
            fullExplanation: "Second conditional: if + past simple, would + base verb. This describes a hypothetical present/future situation (I don't have more time — it's a hypothetical). 'Will' is used in the first conditional (real possibility). 'Could visit' is also possible, meaning 'would be able to visit'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 40",
            alternateAnswers: ["could"]
          },
          {
            id: "vt-modal-12",
            stem: "She ___ have studied harder — she failed the exam by only two marks.",
            options: ["should", "must", "would"],
            answer: "should",
            explanation: "'Should have + past participle' expresses criticism or regret about a past action.",
            fullExplanation: "'Should have + past participle' expresses that something was the right thing to do but was not done — regret or criticism. 'Must have studied' would express certainty about what happened. 'Would have studied' would appear in the result clause of a third conditional.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 36"
          },
          {
            id: "vt-modal-13",
            stem: "You ___ have told me about the meeting earlier — I completely missed it.",
            options: ["could", "should", "would"],
            answer: "could",
            explanation: "'Could have told' expresses that the action was possible in the past but didn't happen.",
            fullExplanation: "'Could have + past participle' expresses that an action was possible in the past but was not done (often with a hint of criticism). 'Should have told' expresses the same idea more strongly (it was the right thing to do). Both are possible here, with 'could have' focusing on ability and 'should have' on obligation.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Units 35-36",
            alternateAnswers: ["should"]
          },
          {
            id: "vt-modal-14",
            stem: "The noise outside ___ be the neighbours — they often have parties on Saturdays.",
            options: ["might", "must", "should"],
            answer: "might",
            explanation: "'Might be' expresses a weak possibility or uncertain deduction.",
            fullExplanation: "'Might be' expresses a weak possibility — the speaker is guessing or uncertain (it could be the neighbours, but they're not sure). 'Must be' expresses near-certainty based on strong evidence. 'Should be' expresses what is expected.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 35",
            alternateAnswers: ["may", "could"]
          },
          {
            id: "vt-modal-15",
            stem: "When I was a student, I ___ spend hours in the library reading history books.",
            options: ["would", "used to", "could"],
            answer: "would",
            explanation: "'Would' expresses a habitual or repeated past action (not a state).",
            fullExplanation: "'Would' describes habitual or repeated past actions (things that happened regularly). It cannot describe past states. 'Used to' can describe both past habits AND past states ('I used to live here'). Both 'would' and 'used to' are correct here for a repeated past action.",
            source: "Swan, M. Practical English Usage (4th ed.), §609",
            alternateAnswers: ["used to"]
          }
        ]
      }
    ]
  },

  /* ─── VOCABULARY IN CONTEXT ─── */
  {
    id: "vocabulary",
    title: "Vocabulary in Context",
    preset: "vocabulary",
    subtopics: [
      {
        id: "vocab-pv-get",
        title: "Phrasal verbs: get",
        tasks: [
          {
            id: "vocab-pv-get-01",
            stem: "She needs to get ___ the flu before the concert next week.",
            options: ["over", "up", "through"],
            answer: "over",
            explanation: "'Get over' means to recover from an illness or difficulty.",
            fullExplanation: "Get over means to recover from something. 'Get up' means to rise from bed. 'Get through' means to finish or survive something, not to recover from illness. The sentence describes recovery from the flu.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 3"
          },
          {
            id: "vocab-pv-get-02",
            stem: "He usually gets ___ at six o'clock to go for a morning jog.",
            options: ["up", "off", "out"],
            answer: "up",
            explanation: "'Get up' means to rise from bed or stand up.",
            fullExplanation: "Get up means to rise from bed. 'Get off' means to leave a vehicle or stop touching something. 'Get out' means to leave a place. The context of morning routine and jogging clearly signals waking up.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 1"
          },
          {
            id: "vocab-pv-get-03",
            stem: "The two neighbours have never managed to get ___ with each other.",
            options: ["along", "over", "away"],
            answer: "along",
            explanation: "'Get along' means to have a friendly relationship with someone.",
            fullExplanation: "Get along (with) means to have a good relationship. 'Get over' means to recover. 'Get away' means to escape. The phrase 'with each other' is a strong signal for 'get along with'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 3"
          },
          {
            id: "vocab-pv-get-04",
            stem: "The thief managed to get ___ before the police arrived at the scene.",
            options: ["away", "along", "over"],
            answer: "away",
            explanation: "'Get away' means to escape or leave a place.",
            fullExplanation: "Get away means to escape from a situation or place. 'Get along' means to have a good relationship. 'Get over' means to recover. The thief clearly needed to escape.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-get-05",
            stem: "I tried calling the embassy, but I couldn't get ___.",
            options: ["through", "over", "up"],
            answer: "through",
            explanation: "'Get through' means to succeed in making contact by phone.",
            fullExplanation: "Get through means to make successful phone contact or to complete something. 'Get over' means to recover. 'Get up' means to rise. Calling and not succeeding signals failed phone connection.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 5"
          },
          {
            id: "vocab-pv-get-06",
            stem: "It took the hikers three hours to get ___ the steep mountain pass.",
            options: ["across", "up", "along"],
            answer: "across",
            explanation: "'Get across' means to cross or traverse from one side to the other.",
            fullExplanation: "Get across means to cross something successfully. 'Get up' could mean to climb, but with 'the pass' the meaning is about crossing terrain. 'Get along' means to have a good relationship. A mountain pass is crossed, not climbed up.",
            source: "Cambridge Dictionary Online, 'get across'"
          },
          {
            id: "vocab-pv-get-07",
            stem: "We need to get ___ to discussing the budget before the meeting ends.",
            options: ["around", "over", "off"],
            answer: "around",
            explanation: "'Get around to' means to finally find time to do something.",
            fullExplanation: "Get around to means to finally do something you've been delaying. 'Get over' means to recover. 'Get off' means to leave or dismount. The sense of needing to address something before time runs out signals 'get around to'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 7"
          },
          {
            id: "vocab-pv-get-08",
            stem: "How did the cat get ___ of the locked room without anyone noticing?",
            options: ["out", "off", "through"],
            answer: "out",
            explanation: "'Get out' means to leave or escape from an enclosed space.",
            fullExplanation: "Get out (of) means to leave or escape a place. 'Get off' means to dismount from a vehicle. 'Get through' means to complete or make phone contact. A locked room requires escaping or leaving.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-get-09",
            stem: "The teacher couldn't get the concept ___ to the younger students.",
            options: ["across", "through", "over"],
            answer: "across",
            explanation: "'Get across' means to communicate or make something understood.",
            fullExplanation: "Get something across means to communicate an idea successfully. 'Get through' can mean to reach someone emotionally, but 'get across' specifically means to make an idea understood. 'Get over' means to recover. The teacher is trying to explain a concept.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 5"
          },
          {
            id: "vocab-pv-get-10",
            stem: "You should get ___ the bus at the third stop near the museum.",
            options: ["off", "out", "away"],
            answer: "off",
            explanation: "'Get off' means to leave or dismount from a vehicle.",
            fullExplanation: "Get off means to leave a bus, train, or other public transport. 'Get out' is used for cars and taxis, not buses. 'Get away' means to escape. With buses and trains, 'get off' is the standard collocation.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 1"
          },
          {
            id: "vocab-pv-get-11",
            stem: "The news of the merger got ___ quickly despite the confidentiality agreement.",
            options: ["out", "off", "up"],
            answer: "out",
            explanation: "'Get out' means that secret information becomes known publicly.",
            fullExplanation: "When information 'gets out', it becomes publicly known. 'Get off' means to leave a vehicle or avoid punishment. 'Get up' means to rise. News leaking despite confidentiality is best expressed with 'get out'.",
            source: "Cambridge Dictionary Online, 'get out'"
          },
          {
            id: "vocab-pv-get-12",
            stem: "She gets ___ on a very small salary by cooking at home every day.",
            options: ["by", "along", "through"],
            answer: "by",
            explanation: "'Get by' means to manage to survive, especially financially.",
            fullExplanation: "Get by means to survive or manage with limited resources. 'Get along' means to have a good relationship. 'Get through' means to complete something. The mention of a small salary and cooking at home signals barely managing financially.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 7"
          },
          {
            id: "vocab-pv-get-13",
            stem: "The children were told to get ___ from the edge of the cliff.",
            options: ["back", "off", "along"],
            answer: "back",
            explanation: "'Get back' means to move away or return to a previous position.",
            fullExplanation: "Get back means to move away from something dangerous or to return. 'Get off' means to dismount. 'Get along' means to have a good relationship. Near a cliff edge, children need to move away, hence 'get back'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-get-14",
            stem: "The research team hopes to get ___ from the data by Friday.",
            options: ["through", "across", "by"],
            answer: "through",
            explanation: "'Get through' means to finish or complete processing something.",
            fullExplanation: "Get through means to finish dealing with something. 'Get across' means to communicate an idea. 'Get by' means to survive financially. The team needs to finish analysing the data, so 'get through' fits.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 5"
          },
          {
            id: "vocab-pv-get-15",
            stem: "It's hard to get ___ in the property market without a large deposit.",
            options: ["into", "over", "by"],
            answer: "into",
            explanation: "'Get into' means to become involved in or enter a field or activity.",
            fullExplanation: "Get into means to become involved in something or gain entry. 'Get over' means to recover. 'Get by' means to manage financially. Entering the property market requires 'getting into' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 7"
          }
        ]
      },
      {
        id: "vocab-pv-take",
        title: "Phrasal verbs: take",
        tasks: [
          {
            id: "vocab-pv-take-01",
            stem: "The plane will take ___ in approximately twenty minutes.",
            options: ["off", "up", "on"],
            answer: "off",
            explanation: "'Take off' means to leave the ground and begin flying.",
            fullExplanation: "Take off means a plane leaves the ground. 'Take up' means to start a hobby or occupy space. 'Take on' means to accept responsibility. Planes take off, not take up or take on.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 10"
          },
          {
            id: "vocab-pv-take-02",
            stem: "The new CEO plans to take ___ the company's international division.",
            options: ["over", "off", "up"],
            answer: "over",
            explanation: "'Take over' means to assume control or management of something.",
            fullExplanation: "Take over means to gain control of something. 'Take off' means to remove clothing or leave the ground. 'Take up' means to start an activity. A CEO assuming control of a division is 'taking over'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 10"
          },
          {
            id: "vocab-pv-take-03",
            stem: "She decided to take ___ painting as a hobby after retiring.",
            options: ["up", "on", "off"],
            answer: "up",
            explanation: "'Take up' means to begin a new activity or hobby.",
            fullExplanation: "Take up means to start doing something new, especially a hobby. 'Take on' means to accept work or responsibility. 'Take off' means to remove or depart. Starting a new hobby after retirement requires 'take up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 10"
          },
          {
            id: "vocab-pv-take-04",
            stem: "The company is taking ___ fifty new employees this quarter.",
            options: ["on", "up", "over"],
            answer: "on",
            explanation: "'Take on' means to hire or accept new staff or responsibilities.",
            fullExplanation: "Take on means to employ or accept responsibility. 'Take up' means to start a hobby. 'Take over' means to assume control. Hiring new employees is 'taking on' staff.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "vocab-pv-take-05",
            stem: "I wish I could take ___ what I said about her presentation.",
            options: ["back", "off", "up"],
            answer: "back",
            explanation: "'Take back' means to retract or withdraw something you said.",
            fullExplanation: "Take back means to retract a statement. 'Take off' means to remove or depart. 'Take up' means to start an activity. Wishing to undo words requires 'take back'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 12"
          },
          {
            id: "vocab-pv-take-06",
            stem: "The charity was set up to take ___ homeless people in the city centre.",
            options: ["in", "on", "up"],
            answer: "in",
            explanation: "'Take in' means to give shelter or accommodation to someone.",
            fullExplanation: "Take in means to provide shelter for someone. 'Take on' means to accept responsibility or hire. 'Take up' means to begin an activity. A charity sheltering homeless people 'takes them in'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 8"
          },
          {
            id: "vocab-pv-take-07",
            stem: "Please take ___ your shoes before entering the temple.",
            options: ["off", "out", "back"],
            answer: "off",
            explanation: "'Take off' means to remove an item of clothing or footwear.",
            fullExplanation: "Take off means to remove clothing or shoes. 'Take out' means to remove from a container or go on a date. 'Take back' means to retract. Removing shoes before entering a temple requires 'take off'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 10"
          },
          {
            id: "vocab-pv-take-08",
            stem: "He took ___ his wallet and paid for the entire dinner.",
            options: ["out", "off", "on"],
            answer: "out",
            explanation: "'Take out' means to remove something from a pocket, bag, or container.",
            fullExplanation: "Take out means to remove from inside something. 'Take off' means to remove clothing or depart. 'Take on' means to accept responsibility. Removing a wallet from a pocket is 'taking it out'.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "vocab-pv-take-09",
            stem: "The new software update takes ___ too much storage space on the device.",
            options: ["up", "on", "in"],
            answer: "up",
            explanation: "'Take up' means to occupy or use space or time.",
            fullExplanation: "Take up means to occupy space or time. 'Take on' means to accept responsibility. 'Take in' means to shelter or absorb. A software update occupying storage space 'takes up' space.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 10"
          },
          {
            id: "vocab-pv-take-10",
            stem: "The detective couldn't take ___ all the details of the witness statement.",
            options: ["in", "up", "back"],
            answer: "in",
            explanation: "'Take in' means to absorb or understand information fully.",
            fullExplanation: "Take in means to fully understand or absorb information. 'Take up' means to start an activity or occupy space. 'Take back' means to retract something said. A detective processing complex details 'takes them in'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 8"
          },
          {
            id: "vocab-pv-take-11",
            stem: "Her singing voice really takes ___ her mother's — they sound identical.",
            options: ["after", "on", "over"],
            answer: "after",
            explanation: "'Take after' means to resemble a parent or relative in appearance or character.",
            fullExplanation: "Take after means to look or behave like an older relative. 'Take on' means to accept responsibility. 'Take over' means to assume control. Resembling one's mother in singing voice is 'taking after' her.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 12"
          },
          {
            id: "vocab-pv-take-12",
            stem: "The rebels attempted to take ___ the government building at dawn.",
            options: ["over", "up", "out"],
            answer: "over",
            explanation: "'Take over' means to seize control of a place or organisation.",
            fullExplanation: "Take over means to seize control by force or authority. 'Take up' means to begin an activity. 'Take out' means to remove or destroy. Rebels seizing a building are 'taking it over'.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "vocab-pv-take-13",
            stem: "The editor asked the journalist to take ___ two paragraphs from the article.",
            options: ["out", "off", "back"],
            answer: "out",
            explanation: "'Take out' means to remove something from a larger whole.",
            fullExplanation: "Take out means to remove. 'Take off' means to remove clothing or depart. 'Take back' means to retract. Removing paragraphs from an article is 'taking them out'.",
            source: "Cambridge Dictionary Online, 'take out'"
          },
          {
            id: "vocab-pv-take-14",
            stem: "Business really took ___ after the company launched its online store.",
            options: ["off", "up", "on"],
            answer: "off",
            explanation: "'Take off' means to suddenly become successful or popular.",
            fullExplanation: "Take off means to suddenly become very successful. 'Take up' means to start an activity. 'Take on' means to accept responsibility. A business suddenly booming after a launch is 'taking off'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 10"
          },
          {
            id: "vocab-pv-take-15",
            stem: "Don't be taken ___ by his friendly manner — he's trying to sell you something.",
            options: ["in", "on", "up"],
            answer: "in",
            explanation: "'Taken in' means to be deceived or tricked by someone.",
            fullExplanation: "Be taken in means to be deceived. 'Taken on' means to be hired. 'Taken up' means to be started. The warning about someone's deceptive friendliness signals 'taken in' (deceived).",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 8"
          }
        ]
      },
      {
        id: "vocab-pv-put",
        title: "Phrasal verbs: put",
        tasks: [
          {
            id: "vocab-pv-put-01",
            stem: "They decided to put ___ the meeting until next Monday.",
            options: ["off", "up", "on"],
            answer: "off",
            explanation: "'Put off' means to postpone or delay something.",
            fullExplanation: "Put off means to postpone. 'Put up' means to erect or accommodate. 'Put on' means to wear or switch on. Delaying a meeting to a later date is 'putting it off'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 14"
          },
          {
            id: "vocab-pv-put-02",
            stem: "Could you put ___ the light? It's too bright in here.",
            options: ["out", "off", "away"],
            answer: "out",
            explanation: "'Put out' means to extinguish a light or fire.",
            fullExplanation: "Put out means to extinguish. 'Put off' means to postpone. 'Put away' means to store something. Turning off a bright light is 'putting it out'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "vocab-pv-put-03",
            stem: "Please put ___ your toys before dinner, children.",
            options: ["away", "off", "out"],
            answer: "away",
            explanation: "'Put away' means to tidy up by storing things in their proper place.",
            fullExplanation: "Put away means to store something in its proper place. 'Put off' means to postpone. 'Put out' means to extinguish. Tidying up toys before dinner requires 'putting them away'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 14"
          },
          {
            id: "vocab-pv-put-04",
            stem: "The scientist put ___ a bold new theory at the international conference.",
            options: ["forward", "off", "up"],
            answer: "forward",
            explanation: "'Put forward' means to propose or suggest an idea officially.",
            fullExplanation: "Put forward means to propose or present an idea. 'Put off' means to postpone. 'Put up' means to erect or accommodate. Presenting a theory at a conference is 'putting it forward'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 16"
          },
          {
            id: "vocab-pv-put-05",
            stem: "Can you put me ___ for the night? All the hotels are fully booked.",
            options: ["up", "off", "out"],
            answer: "up",
            explanation: "'Put up' means to provide someone with accommodation.",
            fullExplanation: "Put someone up means to let them stay in your home. 'Put off' means to postpone. 'Put out' means to extinguish. Needing accommodation when hotels are full signals 'put up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 14"
          },
          {
            id: "vocab-pv-put-06",
            stem: "She put ___ her coat and scarf before stepping into the cold wind.",
            options: ["on", "up", "away"],
            answer: "on",
            explanation: "'Put on' means to dress oneself in a piece of clothing.",
            fullExplanation: "Put on means to wear clothing. 'Put up' means to erect or accommodate. 'Put away' means to store. Dressing in a coat and scarf before going outside is 'putting them on'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "vocab-pv-put-07",
            stem: "The factory puts ___ over ten thousand units of product every month.",
            options: ["out", "up", "off"],
            answer: "out",
            explanation: "'Put out' means to produce or manufacture goods.",
            fullExplanation: "Put out means to produce or publish something. 'Put up' means to erect. 'Put off' means to postpone. A factory producing units is 'putting them out'.",
            source: "Cambridge Dictionary Online, 'put out'"
          },
          {
            id: "vocab-pv-put-08",
            stem: "We had to put ___ with noisy construction work for several months.",
            options: ["up", "off", "out"],
            answer: "up",
            explanation: "'Put up with' means to tolerate or endure something unpleasant.",
            fullExplanation: "Put up with means to tolerate. 'Put off' means to postpone. 'Put out' means to extinguish or produce. Enduring noisy construction requires 'putting up with' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 14"
          },
          {
            id: "vocab-pv-put-09",
            stem: "The government has put ___ new regulations to protect consumer data.",
            options: ["in", "off", "away"],
            answer: "in",
            explanation: "'Put in' means to introduce or implement something officially.",
            fullExplanation: "Put in means to introduce or submit formally. 'Put off' means to postpone. 'Put away' means to store. The government introducing new regulations is 'putting them in' place.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 12"
          },
          {
            id: "vocab-pv-put-10",
            stem: "Don't let his rude comments put you ___ applying for the promotion.",
            options: ["off", "out", "away"],
            answer: "off",
            explanation: "'Put off' means to discourage or deter someone from doing something.",
            fullExplanation: "Put someone off means to discourage them. 'Put out' means to extinguish or inconvenience. 'Put away' means to store. Rude comments discouraging someone signals 'put off'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 14"
          },
          {
            id: "vocab-pv-put-11",
            stem: "Firefighters worked through the night to put ___ the wildfire.",
            options: ["out", "off", "down"],
            answer: "out",
            explanation: "'Put out' means to extinguish a fire.",
            fullExplanation: "Put out means to extinguish a fire. 'Put off' means to postpone. 'Put down' means to place something on a surface or suppress. Firefighters extinguishing a wildfire are 'putting it out'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "vocab-pv-put-12",
            stem: "He put ___ some money every month towards his daughter's university fund.",
            options: ["aside", "off", "out"],
            answer: "aside",
            explanation: "'Put aside' means to save money or resources for future use.",
            fullExplanation: "Put aside means to save for later. 'Put off' means to postpone. 'Put out' means to extinguish. Saving money regularly for a future purpose is 'putting it aside'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 12"
          },
          {
            id: "vocab-pv-put-13",
            stem: "The army was called in to put ___ the rebellion in the northern province.",
            options: ["down", "off", "up"],
            answer: "down",
            explanation: "'Put down' means to suppress or end a rebellion by force.",
            fullExplanation: "Put down means to suppress by force. 'Put off' means to postpone. 'Put up' means to erect or accommodate. The army suppressing a rebellion is 'putting it down'.",
            source: "Cambridge Dictionary Online, 'put down'"
          },
          {
            id: "vocab-pv-put-14",
            stem: "The charity put ___ a fundraising gala that raised over two million dollars.",
            options: ["on", "out", "away"],
            answer: "on",
            explanation: "'Put on' means to organise or stage an event.",
            fullExplanation: "Put on means to organise an event or performance. 'Put out' means to extinguish or produce. 'Put away' means to store. Staging a fundraising gala is 'putting it on'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 14"
          },
          {
            id: "vocab-pv-put-15",
            stem: "I can't put my finger ___ what's wrong, but something feels different.",
            options: ["on", "off", "out"],
            answer: "on",
            explanation: "'Put one's finger on' means to identify or pinpoint something precisely.",
            fullExplanation: "Put one's finger on something means to identify exactly what it is. 'Put off' means to postpone. 'Put out' means to extinguish. Not being able to identify a feeling is 'not putting your finger on' it.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          }
        ]
      },
      {
        id: "vocab-pv-make",
        title: "Phrasal verbs: make",
        tasks: [
          {
            id: "vocab-pv-make-01",
            stem: "She made ___ an excuse to leave the party early.",
            options: ["up", "out", "off"],
            answer: "up",
            explanation: "'Make up' means to invent or fabricate a story or excuse.",
            fullExplanation: "Make up means to invent something fictional. 'Make out' means to see or understand with difficulty. 'Make off' means to leave quickly. Fabricating an excuse is 'making it up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-pv-make-02",
            stem: "I can barely make ___ the writing on this ancient stone tablet.",
            options: ["out", "up", "for"],
            answer: "out",
            explanation: "'Make out' means to see, read, or understand something with difficulty.",
            fullExplanation: "Make out means to perceive or decipher something unclear. 'Make up' means to invent or reconcile. 'Make for' means to move towards. Struggling to read faded writing is 'making it out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-pv-make-03",
            stem: "The burglars made ___ with jewellery worth thousands of pounds.",
            options: ["off", "up", "out"],
            answer: "off",
            explanation: "'Make off' means to leave hurriedly, especially after doing something wrong.",
            fullExplanation: "Make off (with) means to escape with stolen goods. 'Make up' means to invent. 'Make out' means to perceive. Burglars escaping with stolen jewellery are 'making off' with it.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "vocab-pv-make-04",
            stem: "They had a terrible argument but made ___ the following morning.",
            options: ["up", "off", "out"],
            answer: "up",
            explanation: "'Make up' means to reconcile after a disagreement.",
            fullExplanation: "Make up means to become friends again after a quarrel. 'Make off' means to leave quickly. 'Make out' means to perceive. Reconciling after an argument is 'making up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-pv-make-05",
            stem: "The heavy rainfall made ___ very dangerous driving conditions on the motorway.",
            options: ["for", "up", "out"],
            answer: "for",
            explanation: "'Make for' means to contribute to or result in a particular situation.",
            fullExplanation: "Make for means to help create a situation or result. 'Make up' means to invent or reconcile. 'Make out' means to perceive. Heavy rain creating dangerous conditions is 'making for' them.",
            source: "Cambridge Dictionary Online, 'make for'"
          },
          {
            id: "vocab-pv-make-06",
            stem: "We'll have to make ___ with what we've got — there's no budget left.",
            options: ["do", "up", "out"],
            answer: "do",
            explanation: "'Make do' means to manage with whatever is available despite limitations.",
            fullExplanation: "Make do means to cope with limited resources. 'Make up' means to invent or reconcile. 'Make out' means to perceive. Managing without additional budget is 'making do' with what's available.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "vocab-pv-make-07",
            stem: "The actress spent forty minutes in make-___ before the scene was filmed.",
            options: ["up", "out", "off"],
            answer: "up",
            explanation: "'Make-up' refers to cosmetics applied to the face.",
            fullExplanation: "Make-up is a noun meaning cosmetics. 'Make out' means to perceive. 'Make off' means to escape. An actress preparing cosmetically before filming uses 'make-up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-pv-make-08",
            stem: "He made ___ the cheque to the charity and posted it that afternoon.",
            options: ["out", "up", "for"],
            answer: "out",
            explanation: "'Make out' a cheque means to write the details on it.",
            fullExplanation: "Make out a cheque means to fill in and sign it. 'Make up' means to invent. 'Make for' means to move towards. Writing a cheque is 'making it out'.",
            source: "Cambridge Dictionary Online, 'make out'"
          },
          {
            id: "vocab-pv-make-09",
            stem: "I need to make ___ for the time I lost while recovering from surgery.",
            options: ["up", "off", "out"],
            answer: "up",
            explanation: "'Make up for' means to compensate for something lost or missed.",
            fullExplanation: "Make up for means to compensate. 'Make off' means to escape. 'Make out' means to perceive. Compensating for lost time is 'making up for' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-pv-make-10",
            stem: "What do you make ___ the new government policy on renewable energy?",
            options: ["of", "up", "out"],
            answer: "of",
            explanation: "'Make of' means to have an opinion or understanding about something.",
            fullExplanation: "Make of something means to think about or interpret it. 'Make up' means to invent. 'Make out' means to perceive. Asking someone's opinion about a policy is 'what do you make of' it.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "vocab-pv-make-11",
            stem: "She made ___ to the door before anyone could stop her from leaving.",
            options: ["for", "off", "out"],
            answer: "for",
            explanation: "'Make for' means to move towards a place quickly.",
            fullExplanation: "Make for means to head towards somewhere. 'Make off' means to escape. 'Make out' means to perceive. Moving quickly towards the door is 'making for' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-pv-make-12",
            stem: "The report was made ___ of three sections covering different market segments.",
            options: ["up", "out", "for"],
            answer: "up",
            explanation: "'Made up of' means composed of or consisting of parts.",
            fullExplanation: "Made up of means consisting of. 'Made out' means perceived. 'Made for' means suited to. A report consisting of three sections is 'made up of' them.",
            source: "Cambridge Dictionary Online, 'make up'"
          },
          {
            id: "vocab-pv-make-13",
            stem: "He couldn't make ___ whether the figure in the fog was a person or a tree.",
            options: ["out", "up", "do"],
            answer: "out",
            explanation: "'Make out' means to distinguish or identify something unclear.",
            fullExplanation: "Make out means to see or identify something with difficulty. 'Make up' means to invent. 'Make do' means to manage. Struggling to identify a shape in fog is 'making it out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-pv-make-14",
            stem: "Volunteers and students make ___ the majority of our workforce during summer.",
            options: ["up", "for", "out"],
            answer: "up",
            explanation: "'Make up' means to form or constitute a proportion of something.",
            fullExplanation: "Make up means to constitute or form. 'Make for' means to move towards. 'Make out' means to perceive. Volunteers constituting the majority of a workforce are 'making up' that majority.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "vocab-pv-make-15",
            stem: "The warm welcome from the host family really made ___ for the delayed flight.",
            options: ["up", "off", "out"],
            answer: "up",
            explanation: "'Made up for' means to compensate for a negative experience.",
            fullExplanation: "Made up for means compensated for something bad. 'Made off' means escaped. 'Made out' means perceived. A warm welcome compensating for a delay is 'making up for' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 20"
          }
        ]
      },
      {
        id: "vocab-pv-come",
        title: "Phrasal verbs: come",
        tasks: [
          {
            id: "vocab-pv-come-01",
            stem: "I came ___ an interesting article about Mars exploration while reading online.",
            options: ["across", "up", "round"],
            answer: "across",
            explanation: "'Come across' means to find something by chance.",
            fullExplanation: "Come across means to discover something unexpectedly. 'Come up' means to arise or be mentioned. 'Come round' means to visit or regain consciousness. Finding an article by chance is 'coming across' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 22"
          },
          {
            id: "vocab-pv-come-02",
            stem: "The engineering team came ___ with a brilliant solution to the power problem.",
            options: ["up", "across", "out"],
            answer: "up",
            explanation: "'Come up with' means to think of or produce an idea or solution.",
            fullExplanation: "Come up with means to invent or think of something. 'Come across' means to find by chance. 'Come out' means to be published or revealed. Producing a solution is 'coming up with' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 22"
          },
          {
            id: "vocab-pv-come-03",
            stem: "She fainted during the lecture but came ___ after a few minutes.",
            options: ["round", "up", "across"],
            answer: "round",
            explanation: "'Come round' means to regain consciousness after fainting.",
            fullExplanation: "Come round means to regain consciousness. 'Come up' means to arise. 'Come across' means to find by chance. Regaining consciousness after fainting is 'coming round'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-come-04",
            stem: "The singer's new album came ___ last Friday to critical acclaim.",
            options: ["out", "up", "round"],
            answer: "out",
            explanation: "'Come out' means to be released or published.",
            fullExplanation: "Come out means to be published or released to the public. 'Come up' means to arise. 'Come round' means to visit. An album being released is 'coming out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 22"
          },
          {
            id: "vocab-pv-come-05",
            stem: "Something urgent has come ___ and I won't be able to attend the dinner.",
            options: ["up", "out", "across"],
            answer: "up",
            explanation: "'Come up' means that something unexpected has arisen.",
            fullExplanation: "Come up means to occur unexpectedly. 'Come out' means to be released. 'Come across' means to find by chance. An unexpected event preventing attendance has 'come up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 22"
          },
          {
            id: "vocab-pv-come-06",
            stem: "Her true character came ___ when she was under extreme pressure.",
            options: ["out", "round", "up"],
            answer: "out",
            explanation: "'Come out' means to be revealed or become apparent.",
            fullExplanation: "Come out means to become visible or known. 'Come round' means to visit or recover. 'Come up' means to arise. Someone's character being revealed under pressure is 'coming out'.",
            source: "Cambridge Dictionary Online, 'come out'"
          },
          {
            id: "vocab-pv-come-07",
            stem: "The total bill came ___ to over five hundred dollars including tax.",
            options: ["to", "up", "out"],
            answer: "to",
            explanation: "'Come to' means to amount to or total a certain figure.",
            fullExplanation: "Come to means to reach a total amount. 'Come up' means to arise. 'Come out' means to be released. A bill reaching a total is 'coming to' that amount.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-come-08",
            stem: "Why don't you come ___ to our place for dinner on Saturday evening?",
            options: ["over", "up", "across"],
            answer: "over",
            explanation: "'Come over' means to visit someone at their home.",
            fullExplanation: "Come over means to visit someone's house. 'Come up' means to arise. 'Come across' means to find by chance. Inviting someone to visit for dinner is asking them to 'come over'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 22"
          },
          {
            id: "vocab-pv-come-09",
            stem: "The stain on the carpet won't come ___ no matter what cleaning product I use.",
            options: ["out", "up", "off"],
            answer: "out",
            explanation: "'Come out' means a stain can be removed or washed away.",
            fullExplanation: "Come out means to be removed (for stains). 'Come up' means to arise. 'Come off' means to become detached. A stain that won't wash away won't 'come out'.",
            source: "Cambridge Dictionary Online, 'come out'"
          },
          {
            id: "vocab-pv-come-10",
            stem: "The issue of climate funding came ___ during the summit discussions.",
            options: ["up", "out", "across"],
            answer: "up",
            explanation: "'Come up' means to be raised or mentioned in a conversation.",
            fullExplanation: "Come up means to be mentioned or discussed. 'Come out' means to be released. 'Come across' means to find by chance. A topic being raised in discussions is 'coming up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 22"
          },
          {
            id: "vocab-pv-come-11",
            stem: "She came ___ as very confident during the job interview.",
            options: ["across", "out", "round"],
            answer: "across",
            explanation: "'Come across as' means to give the impression of being a certain way.",
            fullExplanation: "Come across as means to seem or appear. 'Come out' means to be released. 'Come round' means to visit or recover. Giving an impression of confidence is 'coming across as' confident.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-come-12",
            stem: "The handle came ___ the drawer when I pulled it too hard.",
            options: ["off", "out", "up"],
            answer: "off",
            explanation: "'Come off' means to become detached or separated from something.",
            fullExplanation: "Come off means to become detached. 'Come out' means to be released or removed. 'Come up' means to arise. A handle breaking away from a drawer is 'coming off'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 24"
          },
          {
            id: "vocab-pv-come-13",
            stem: "The old family photographs came ___ in the attic during spring cleaning.",
            options: ["to light", "up", "round"],
            answer: "to light",
            explanation: "'Come to light' means to be discovered or become known.",
            fullExplanation: "Come to light means to be discovered. 'Come up' means to arise. 'Come round' means to visit. Old photographs being found during cleaning have 'come to light'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-come-14",
            stem: "Winter is coming ___ and we still haven't fixed the heating system.",
            options: ["on", "out", "round"],
            answer: "on",
            explanation: "'Come on' here means to approach or advance steadily.",
            fullExplanation: "Come on can mean to approach or make progress. 'Come out' means to be released. 'Come round' means to visit. A season advancing is 'coming on'.",
            source: "Cambridge Dictionary Online, 'come on'"
          },
          {
            id: "vocab-pv-come-15",
            stem: "He came ___ a fortune when his great-uncle passed away last spring.",
            options: ["into", "across", "up"],
            answer: "into",
            explanation: "'Come into' means to inherit money or property.",
            fullExplanation: "Come into means to inherit. 'Come across' means to find by chance. 'Come up' means to arise. Receiving a fortune after a relative's death is 'coming into' money.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 16"
          }
        ]
      },
      {
        id: "vocab-pv-go",
        title: "Phrasal verbs: go",
        tasks: [
          {
            id: "vocab-pv-go-01",
            stem: "The fire alarm went ___ in the middle of the chemistry exam.",
            options: ["off", "on", "out"],
            answer: "off",
            explanation: "'Go off' means an alarm sounds or is activated suddenly.",
            fullExplanation: "Go off means an alarm or device activates. 'Go on' means to continue. 'Go out' means to leave the house or be extinguished. A fire alarm sounding is 'going off'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 26"
          },
          {
            id: "vocab-pv-go-02",
            stem: "Please go ___ with your presentation — we're all listening.",
            options: ["on", "off", "through"],
            answer: "on",
            explanation: "'Go on' means to continue doing something.",
            fullExplanation: "Go on means to continue. 'Go off' means to activate or explode. 'Go through' means to experience or examine. Asking someone to continue their presentation is telling them to 'go on'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-go-03",
            stem: "The candle went ___ because of the strong draught from the window.",
            options: ["out", "off", "on"],
            answer: "out",
            explanation: "'Go out' means a fire or light is extinguished.",
            fullExplanation: "Go out means to be extinguished. 'Go off' means to activate. 'Go on' means to continue. A candle being blown out by a draught has 'gone out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 26"
          },
          {
            id: "vocab-pv-go-04",
            stem: "Let's go ___ the contract one more time before we sign it tomorrow.",
            options: ["over", "on", "out"],
            answer: "over",
            explanation: "'Go over' means to review or examine something carefully.",
            fullExplanation: "Go over means to review carefully. 'Go on' means to continue. 'Go out' means to leave or be extinguished. Reviewing a contract before signing is 'going over' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 28"
          },
          {
            id: "vocab-pv-go-05",
            stem: "The family went ___ a very difficult period after losing their home.",
            options: ["through", "on", "off"],
            answer: "through",
            explanation: "'Go through' means to experience a difficult situation.",
            fullExplanation: "Go through means to experience something difficult. 'Go on' means to continue. 'Go off' means to activate. A family experiencing hardship has 'gone through' a difficult period.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-go-06",
            stem: "I wish the headache would just go ___ so I can concentrate on my work.",
            options: ["away", "off", "on"],
            answer: "away",
            explanation: "'Go away' means to disappear or stop existing.",
            fullExplanation: "Go away means to disappear. 'Go off' means to activate. 'Go on' means to continue. Wanting a headache to disappear is wanting it to 'go away'.",
            source: "Cambridge Dictionary Online, 'go away'"
          },
          {
            id: "vocab-pv-go-07",
            stem: "The price of petrol has gone ___ sharply since the beginning of the year.",
            options: ["up", "off", "on"],
            answer: "up",
            explanation: "'Go up' means to increase in price or level.",
            fullExplanation: "Go up means to increase. 'Go off' means to activate. 'Go on' means to continue. Prices increasing sharply are 'going up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 26"
          },
          {
            id: "vocab-pv-go-08",
            stem: "The milk has gone ___ — it smells terrible and we should throw it away.",
            options: ["off", "out", "on"],
            answer: "off",
            explanation: "'Go off' means food has become rotten or spoiled.",
            fullExplanation: "Go off means food has spoiled. 'Go out' means to leave or be extinguished. 'Go on' means to continue. Milk that smells terrible has 'gone off'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 26"
          },
          {
            id: "vocab-pv-go-09",
            stem: "House prices in the area have been going ___ steadily for two years.",
            options: ["down", "off", "through"],
            answer: "down",
            explanation: "'Go down' means to decrease in price or level.",
            fullExplanation: "Go down means to decrease. 'Go off' means to activate or spoil. 'Go through' means to experience. Prices decreasing steadily are 'going down'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-go-10",
            stem: "This sauce would go really well ___ grilled chicken or roasted vegetables.",
            options: ["with", "on", "off"],
            answer: "with",
            explanation: "'Go with' means to match or complement something.",
            fullExplanation: "Go with means to match or suit. 'Go on' means to continue. 'Go off' means to activate or spoil. A sauce complementing chicken is one that 'goes with' it.",
            source: "Cambridge Dictionary Online, 'go with'"
          },
          {
            id: "vocab-pv-go-11",
            stem: "The power went ___ during the storm and didn't come back until morning.",
            options: ["out", "off", "on"],
            answer: "out",
            explanation: "'Go out' means electricity or power stops working.",
            fullExplanation: "Go out means power fails or is extinguished. 'Go off' means to activate. 'Go on' means to continue. Power failing during a storm is 'going out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 26"
          },
          {
            id: "vocab-pv-go-12",
            stem: "She wants to go ___ medicine once she finishes her biology degree.",
            options: ["into", "on", "through"],
            answer: "into",
            explanation: "'Go into' means to enter a particular profession or field.",
            fullExplanation: "Go into means to enter a profession. 'Go on' means to continue. 'Go through' means to experience. Entering the medical field is 'going into' medicine.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 20"
          },
          {
            id: "vocab-pv-go-13",
            stem: "The building work is going ___ more slowly than we originally planned.",
            options: ["on", "off", "out"],
            answer: "on",
            explanation: "'Go on' here means to be happening or continuing.",
            fullExplanation: "Go on means to happen or continue. 'Go off' means to activate. 'Go out' means to leave or be extinguished. Work that is progressing slowly is 'going on' more slowly.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-go-14",
            stem: "The bomb disposal team made the device safe before it could go ___.",
            options: ["off", "on", "away"],
            answer: "off",
            explanation: "'Go off' means to explode or detonate.",
            fullExplanation: "Go off means to explode. 'Go on' means to continue. 'Go away' means to disappear. A bomb that could explode would 'go off'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 26"
          },
          {
            id: "vocab-pv-go-15",
            stem: "We've gone ___ all the options and none of them seem affordable.",
            options: ["through", "on", "up"],
            answer: "through",
            explanation: "'Go through' means to examine or review a list of things.",
            fullExplanation: "Go through means to review or examine. 'Go on' means to continue. 'Go up' means to increase. Reviewing all available options is 'going through' them.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 28"
          }
        ]
      },
      {
        id: "vocab-pv-look",
        title: "Phrasal verbs: look",
        tasks: [
          {
            id: "vocab-pv-look-01",
            stem: "Could you look ___ the children while I go to the pharmacy?",
            options: ["after", "up", "into"],
            answer: "after",
            explanation: "'Look after' means to take care of someone or something.",
            fullExplanation: "Look after means to care for. 'Look up' means to search for information. 'Look into' means to investigate. Taking care of children is 'looking after' them.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 30"
          },
          {
            id: "vocab-pv-look-02",
            stem: "I'm really looking ___ to the summer holiday in Portugal.",
            options: ["forward", "up", "out"],
            answer: "forward",
            explanation: "'Look forward to' means to feel excited about something in the future.",
            fullExplanation: "Look forward to means to anticipate with pleasure. 'Look up' means to search for information. 'Look out' means to be careful. Being excited about an upcoming holiday is 'looking forward to' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 30"
          },
          {
            id: "vocab-pv-look-03",
            stem: "Look ___ — there's a car coming around the corner at high speed!",
            options: ["out", "up", "after"],
            answer: "out",
            explanation: "'Look out' means to be careful or watch for danger.",
            fullExplanation: "Look out is a warning to be careful. 'Look up' means to search for information. 'Look after' means to care for. Warning someone about an approaching car requires 'look out'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-look-04",
            stem: "If you don't know the word, look it ___ in the dictionary.",
            options: ["up", "out", "after"],
            answer: "up",
            explanation: "'Look up' means to search for information in a reference source.",
            fullExplanation: "Look up means to find information in a dictionary or database. 'Look out' means to be careful. 'Look after' means to care for. Searching for a word in a dictionary is 'looking it up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 30"
          },
          {
            id: "vocab-pv-look-05",
            stem: "The police are looking ___ the cause of the warehouse fire.",
            options: ["into", "up", "after"],
            answer: "into",
            explanation: "'Look into' means to investigate or examine a matter.",
            fullExplanation: "Look into means to investigate. 'Look up' means to search for information. 'Look after' means to care for. Police investigating a fire are 'looking into' its cause.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 30"
          },
          {
            id: "vocab-pv-look-06",
            stem: "She looked ___ on her childhood years with great fondness and nostalgia.",
            options: ["back", "up", "out"],
            answer: "back",
            explanation: "'Look back' means to think about or remember the past.",
            fullExplanation: "Look back means to remember or reflect on past events. 'Look up' means to search for information. 'Look out' means to be careful. Remembering childhood with nostalgia is 'looking back' on it.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-look-07",
            stem: "He looks ___ to his older sister because she's a successful scientist.",
            options: ["up", "out", "after"],
            answer: "up",
            explanation: "'Look up to' means to admire and respect someone.",
            fullExplanation: "Look up to means to admire. 'Look out' means to be careful. 'Look after' means to care for. Admiring an older sibling is 'looking up to' them.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 30"
          },
          {
            id: "vocab-pv-look-08",
            stem: "Business has been looking ___ since the company changed its marketing strategy.",
            options: ["up", "into", "out"],
            answer: "up",
            explanation: "'Look up' means to improve or show signs of getting better.",
            fullExplanation: "Look up means things are improving. 'Look into' means to investigate. 'Look out' means to be careful. Business improving after a strategy change is 'looking up'.",
            source: "Cambridge Dictionary Online, 'look up'"
          },
          {
            id: "vocab-pv-look-09",
            stem: "The manager was asked to look ___ the report before the board meeting.",
            options: ["over", "up", "into"],
            answer: "over",
            explanation: "'Look over' means to examine or check something quickly.",
            fullExplanation: "Look over means to review briefly. 'Look up' means to search for information. 'Look into' means to investigate deeply. Checking a report quickly before a meeting is 'looking it over'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 32"
          },
          {
            id: "vocab-pv-look-10",
            stem: "She felt that her colleagues looked ___ on her because she lacked a degree.",
            options: ["down", "up", "out"],
            answer: "down",
            explanation: "'Look down on' means to regard someone as inferior.",
            fullExplanation: "Look down on means to consider someone less important. 'Look up' means to search or admire. 'Look out' means to be careful. Colleagues regarding her as inferior are 'looking down on' her.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-look-11",
            stem: "Look ___ for pickpockets when you visit crowded tourist attractions.",
            options: ["out", "up", "after"],
            answer: "out",
            explanation: "'Look out for' means to watch carefully to avoid danger.",
            fullExplanation: "Look out for means to be aware of a potential threat. 'Look up' means to search. 'Look after' means to care for. Being alert to pickpockets is 'looking out for' them.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 30"
          },
          {
            id: "vocab-pv-look-12",
            stem: "I've been looking ___ my car keys all morning but I can't find them.",
            options: ["for", "up", "into"],
            answer: "for",
            explanation: "'Look for' means to try to find something that is lost.",
            fullExplanation: "Look for means to search for something missing. 'Look up' means to search in a reference. 'Look into' means to investigate. Trying to find lost keys is 'looking for' them.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-look-13",
            stem: "The view from the hotel balcony looked ___ over the entire harbour.",
            options: ["out", "up", "back"],
            answer: "out",
            explanation: "'Look out over' means to have a view facing something.",
            fullExplanation: "Look out over means to face or overlook a view. 'Look up' means to search or improve. 'Look back' means to remember. A balcony with a view of the harbour 'looks out over' it.",
            source: "Cambridge Dictionary Online, 'look out'"
          },
          {
            id: "vocab-pv-look-14",
            stem: "Will you look ___ my essay and tell me if there are any mistakes?",
            options: ["through", "up", "after"],
            answer: "through",
            explanation: "'Look through' means to read or examine something from beginning to end.",
            fullExplanation: "Look through means to read or examine something thoroughly. 'Look up' means to search. 'Look after' means to care for. Reading an entire essay for mistakes is 'looking through' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 32"
          },
          {
            id: "vocab-pv-look-15",
            stem: "Things are looking ___ for the team after they won three matches in a row.",
            options: ["good", "up", "out"],
            answer: "good",
            explanation: "'Looking good' means the situation appears positive and promising.",
            fullExplanation: "Looking good means the prospects are favourable. 'Looking up' also means improving but 'looking good' fits naturally here. 'Looking out' means being careful. Winning three matches makes things look good.",
            source: "Cambridge Dictionary Online, 'look good'"
          }
        ]
      },
      {
        id: "vocab-pv-turn",
        title: "Phrasal verbs: turn",
        tasks: [
          {
            id: "vocab-pv-turn-01",
            stem: "Over a hundred people turned ___ for the charity concert in the park.",
            options: ["up", "down", "off"],
            answer: "up",
            explanation: "'Turn up' means to arrive or appear, often unexpectedly.",
            fullExplanation: "Turn up means to appear or arrive. 'Turn down' means to reject. 'Turn off' means to switch something off. People arriving for a concert are 'turning up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 34"
          },
          {
            id: "vocab-pv-turn-02",
            stem: "She turned ___ the job offer because the salary was too low.",
            options: ["down", "up", "off"],
            answer: "down",
            explanation: "'Turn down' means to reject or refuse an offer or request.",
            fullExplanation: "Turn down means to refuse. 'Turn up' means to arrive. 'Turn off' means to switch off. Refusing a job offer due to low salary is 'turning it down'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-turn-03",
            stem: "It turned ___ that the missing painting had been in the attic all along.",
            options: ["out", "up", "off"],
            answer: "out",
            explanation: "'Turn out' means to happen in a particular way or be discovered.",
            fullExplanation: "Turn out means something is discovered or results in a certain way. 'Turn up' means to arrive. 'Turn off' means to switch off. Discovering the painting's location uses 'turned out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 34"
          },
          {
            id: "vocab-pv-turn-04",
            stem: "Please turn ___ the television — the neighbours have complained about the noise.",
            options: ["off", "up", "down"],
            answer: "off",
            explanation: "'Turn off' means to stop a device from operating.",
            fullExplanation: "Turn off means to switch something off. 'Turn up' means to increase volume. 'Turn down' means to decrease volume or refuse. Stopping the TV completely is 'turning it off'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-turn-05",
            stem: "The old warehouse was turned ___ a modern art gallery last year.",
            options: ["into", "out", "up"],
            answer: "into",
            explanation: "'Turn into' means to transform or change from one thing to another.",
            fullExplanation: "Turn into means to transform. 'Turn out' means to result. 'Turn up' means to arrive. Converting a warehouse to a gallery is 'turning it into' one.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 34"
          },
          {
            id: "vocab-pv-turn-06",
            stem: "Could you turn ___ the music? I can barely hear it from here.",
            options: ["up", "off", "into"],
            answer: "up",
            explanation: "'Turn up' means to increase the volume or intensity of something.",
            fullExplanation: "Turn up means to increase volume. 'Turn off' means to switch off. 'Turn into' means to transform. Wanting louder music requires 'turning it up'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-turn-07",
            stem: "The caterpillar will eventually turn ___ a beautiful butterfly.",
            options: ["into", "out", "up"],
            answer: "into",
            explanation: "'Turn into' means to undergo a transformation.",
            fullExplanation: "Turn into means to change form. 'Turn out' means to result. 'Turn up' means to appear. A caterpillar becoming a butterfly is 'turning into' one.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 34"
          },
          {
            id: "vocab-pv-turn-08",
            stem: "Hundreds of fans turned ___ to welcome the team at the airport.",
            options: ["out", "up", "down"],
            answer: "out",
            explanation: "'Turn out' means to come to an event or assemble in a group.",
            fullExplanation: "Turn out means to attend or assemble. 'Turn up' also means to arrive, but 'turn out' specifically means to gather for an event. 'Turn down' means to refuse. Fans assembling at the airport are 'turning out'.",
            source: "Cambridge Dictionary Online, 'turn out'"
          },
          {
            id: "vocab-pv-turn-09",
            stem: "Can you turn ___ the heating a little? The room is far too warm.",
            options: ["down", "off", "up"],
            answer: "down",
            explanation: "'Turn down' means to reduce the level or intensity of something.",
            fullExplanation: "Turn down means to reduce intensity. 'Turn off' means to switch off completely. 'Turn up' means to increase. Reducing heating because the room is too warm is 'turning it down'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 34"
          },
          {
            id: "vocab-pv-turn-10",
            stem: "The investigation turned ___ several important leads for the detective.",
            options: ["up", "out", "down"],
            answer: "up",
            explanation: "'Turn up' means to discover or reveal something unexpectedly.",
            fullExplanation: "Turn up means to be discovered. 'Turn out' means to result. 'Turn down' means to refuse. An investigation revealing new leads has 'turned up' those leads.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-turn-11",
            stem: "She turned ___ to be one of the most talented scientists of her generation.",
            options: ["out", "up", "into"],
            answer: "out",
            explanation: "'Turn out' means to prove to be or eventually become.",
            fullExplanation: "Turn out means to prove to be. 'Turn up' means to arrive. 'Turn into' means to transform. Proving to be talented is 'turning out' to be talented.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 34"
          },
          {
            id: "vocab-pv-turn-12",
            stem: "The company decided to turn ___ a new chapter after the leadership change.",
            options: ["over", "up", "off"],
            answer: "over",
            explanation: "'Turn over a new leaf/chapter' means to make a fresh start.",
            fullExplanation: "Turn over a new leaf or chapter means to start fresh. 'Turn up' means to arrive. 'Turn off' means to switch off. Making a fresh start after change is 'turning over' a new chapter.",
            source: "Cambridge Dictionary Online, 'turn over'"
          },
          {
            id: "vocab-pv-turn-13",
            stem: "The news report turned ___ to be completely inaccurate and misleading.",
            options: ["out", "down", "up"],
            answer: "out",
            explanation: "'Turn out' means to be discovered or found to be in a particular way.",
            fullExplanation: "Turn out means to prove to be. 'Turn down' means to refuse. 'Turn up' means to arrive. A report being discovered as inaccurate has 'turned out' to be inaccurate.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-turn-14",
            stem: "He turned ___ the invitation because he had already made other plans.",
            options: ["down", "off", "out"],
            answer: "down",
            explanation: "'Turn down' means to politely refuse an invitation or offer.",
            fullExplanation: "Turn down means to refuse. 'Turn off' means to switch off. 'Turn out' means to result or attend. Declining an invitation due to other plans is 'turning it down'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 34"
          },
          {
            id: "vocab-pv-turn-15",
            stem: "The road turns ___ sharply to the left just past the old stone bridge.",
            options: ["off", "up", "out"],
            answer: "off",
            explanation: "'Turn off' means a road branches away from the main route.",
            fullExplanation: "Turn off means to diverge from the main road. 'Turn up' means to arrive or appear. 'Turn out' means to result. A road branching to the left is 'turning off'.",
            source: "Cambridge Dictionary Online, 'turn off'"
          }
        ]
      },
      {
        id: "vocab-pv-run",
        title: "Phrasal verbs: run",
        tasks: [
          {
            id: "vocab-pv-run-01",
            stem: "We've run ___ of milk again — could you pick some up on the way home?",
            options: ["out", "into", "over"],
            answer: "out",
            explanation: "'Run out of' means to have no more of something left.",
            fullExplanation: "Run out of means to exhaust a supply. 'Run into' means to meet by chance. 'Run over' means to hit with a vehicle. Having no milk left is 'running out of' it.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 36"
          },
          {
            id: "vocab-pv-run-02",
            stem: "I ran ___ an old school friend at the supermarket yesterday afternoon.",
            options: ["into", "out", "over"],
            answer: "into",
            explanation: "'Run into' means to meet someone unexpectedly by chance.",
            fullExplanation: "Run into means to encounter by chance. 'Run out' means to exhaust supplies. 'Run over' means to hit with a vehicle. Meeting a friend unexpectedly is 'running into' them.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-run-03",
            stem: "The car ran ___ a stray dog but fortunately the dog survived.",
            options: ["over", "into", "out"],
            answer: "over",
            explanation: "'Run over' means to hit and drive across someone or something with a vehicle.",
            fullExplanation: "Run over means to drive over someone or something. 'Run into' means to meet by chance or collide. 'Run out' means to exhaust supplies. A car hitting a dog is 'running it over'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 36"
          },
          {
            id: "vocab-pv-run-04",
            stem: "The child tried to run ___ from the dentist's office in a panic.",
            options: ["away", "into", "out"],
            answer: "away",
            explanation: "'Run away' means to flee or escape from a place.",
            fullExplanation: "Run away means to escape. 'Run into' means to meet by chance. 'Run out' means to exhaust supplies. A scared child fleeing is 'running away'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-run-05",
            stem: "The meeting ran ___ by thirty minutes because of a heated debate.",
            options: ["over", "out", "into"],
            answer: "over",
            explanation: "'Run over' means to exceed the allotted time.",
            fullExplanation: "Run over means to go beyond a time limit. 'Run out' means to exhaust. 'Run into' means to encounter. A meeting exceeding its scheduled time has 'run over'.",
            source: "Cambridge Dictionary Online, 'run over'"
          },
          {
            id: "vocab-pv-run-06",
            stem: "She offered to run ___ the main points of the proposal for the new members.",
            options: ["through", "into", "out"],
            answer: "through",
            explanation: "'Run through' means to review or rehearse something quickly.",
            fullExplanation: "Run through means to review briefly. 'Run into' means to encounter. 'Run out' means to exhaust. Quickly reviewing key points is 'running through' them.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 36"
          },
          {
            id: "vocab-pv-run-07",
            stem: "The small business is being run ___ by a twenty-five-year-old entrepreneur.",
            options: ["by", "into", "over"],
            answer: "by",
            explanation: "'Run by' in passive voice indicates who manages or operates something.",
            fullExplanation: "Run by means managed or operated by someone. 'Run into' means to encounter. 'Run over' means to exceed time or drive over. A business managed by someone is 'run by' that person.",
            source: "Cambridge Dictionary Online, 'run by'"
          },
          {
            id: "vocab-pv-run-08",
            stem: "The construction project has run ___ several unexpected legal problems.",
            options: ["into", "out", "over"],
            answer: "into",
            explanation: "'Run into' means to encounter difficulties or problems.",
            fullExplanation: "Run into means to encounter problems. 'Run out' means to exhaust. 'Run over' means to exceed time. A project encountering legal problems has 'run into' them.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 36"
          },
          {
            id: "vocab-pv-run-09",
            stem: "Costs for the renovation have run ___ to over fifty thousand pounds.",
            options: ["up", "out", "into"],
            answer: "up",
            explanation: "'Run up' means to accumulate a large bill or debt.",
            fullExplanation: "Run up means costs have accumulated to a high amount. 'Run out' means to exhaust. 'Run into' means to encounter. Costs accumulating to a large sum are 'running up'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-run-10",
            stem: "My phone battery has almost run ___ — I need to find a charger quickly.",
            options: ["out", "over", "into"],
            answer: "out",
            explanation: "'Run out' means a supply or charge has been completely used up.",
            fullExplanation: "Run out means to be used up completely. 'Run over' means to exceed time. 'Run into' means to encounter. A battery nearly depleted has almost 'run out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 36"
          },
          {
            id: "vocab-pv-run-11",
            stem: "Could you run ___ that explanation one more time? I didn't quite follow.",
            options: ["through", "into", "away"],
            answer: "through",
            explanation: "'Run through' means to repeat or go over something again.",
            fullExplanation: "Run through means to review or repeat. 'Run into' means to encounter. 'Run away' means to flee. Asking someone to repeat an explanation is asking them to 'run through' it again.",
            source: "Cambridge Dictionary Online, 'run through'"
          },
          {
            id: "vocab-pv-run-12",
            stem: "The tap has been running ___ water all night because of a broken valve.",
            options: ["out", "over", "away"],
            answer: "out",
            explanation: "Water 'running out' of a tap means flowing out of it continuously.",
            fullExplanation: "Run out means to flow or drain from a source. 'Run over' means to overflow. 'Run away' means to escape. Water flowing continuously from a broken tap is 'running out'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-run-13",
            stem: "The total repair bill is expected to run ___ several thousand euros.",
            options: ["into", "out", "up"],
            answer: "into",
            explanation: "'Run into' means to reach an amount as high as a given figure.",
            fullExplanation: "Run into means to amount to or reach a total. 'Run out' means to exhaust. 'Run up' means to accumulate. A bill reaching several thousand euros 'runs into' that amount.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 28"
          },
          {
            id: "vocab-pv-run-14",
            stem: "Time is running ___ and we still have three items left on the agenda.",
            options: ["out", "over", "away"],
            answer: "out",
            explanation: "'Running out' means time is almost finished or used up.",
            fullExplanation: "Running out means almost no time is left. 'Running over' means exceeding time. 'Running away' means escaping. Time nearly finished is 'running out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 36"
          },
          {
            id: "vocab-pv-run-15",
            stem: "The local newspaper ran a story ___ the corruption scandal at city hall.",
            options: ["on", "into", "out"],
            answer: "on",
            explanation: "'Run a story on' means to publish a news article about a topic.",
            fullExplanation: "Run a story on means to publish an article about something. 'Run into' means to encounter. 'Run out' means to exhaust. A newspaper publishing an article about a scandal is 'running a story on' it.",
            source: "Cambridge Dictionary Online, 'run on'"
          }
        ]
      },
      {
        id: "vocab-pv-give",
        title: "Phrasal verbs: give",
        tasks: [
          {
            id: "vocab-pv-give-01",
            stem: "After months of struggling, she finally gave ___ trying to fix the old car.",
            options: ["up", "in", "away"],
            answer: "up",
            explanation: "'Give up' means to stop trying because it seems impossible.",
            fullExplanation: "Give up means to quit or abandon an effort. 'Give in' means to surrender or yield. 'Give away' means to donate. Stopping an effort after months of struggling is 'giving up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 38"
          },
          {
            id: "vocab-pv-give-02",
            stem: "The teacher gave ___ the exam papers at exactly nine o'clock.",
            options: ["out", "up", "in"],
            answer: "out",
            explanation: "'Give out' means to distribute or hand something to many people.",
            fullExplanation: "Give out means to distribute. 'Give up' means to quit. 'Give in' means to surrender. A teacher distributing exam papers is 'giving them out'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-give-03",
            stem: "He gave ___ all his old books to the local charity shop.",
            options: ["away", "up", "out"],
            answer: "away",
            explanation: "'Give away' means to donate or transfer something for free.",
            fullExplanation: "Give away means to give something without payment. 'Give up' means to quit. 'Give out' means to distribute. Donating books to charity is 'giving them away'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 38"
          },
          {
            id: "vocab-pv-give-04",
            stem: "The children kept begging for ice cream until their mother gave ___.",
            options: ["in", "up", "out"],
            answer: "in",
            explanation: "'Give in' means to yield or surrender to pressure or demands.",
            fullExplanation: "Give in means to finally agree after resisting. 'Give up' means to stop trying. 'Give out' means to distribute. A mother yielding to children's demands is 'giving in'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 38"
          },
          {
            id: "vocab-pv-give-05",
            stem: "Please give me ___ my pen — I need it for the next class.",
            options: ["back", "up", "out"],
            answer: "back",
            explanation: "'Give back' means to return something to its owner.",
            fullExplanation: "Give back means to return. 'Give up' means to quit. 'Give out' means to distribute. Asking for the return of a borrowed pen is asking to 'give it back'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-give-06",
            stem: "The old washing machine finally gave ___ after fifteen years of daily use.",
            options: ["out", "up", "in"],
            answer: "out",
            explanation: "'Give out' means to stop working or functioning completely.",
            fullExplanation: "Give out means to break down or fail. 'Give up' means to quit. 'Give in' means to surrender. A machine breaking after years of use has 'given out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 38"
          },
          {
            id: "vocab-pv-give-07",
            stem: "Don't give ___ the ending of the film — I haven't seen it yet!",
            options: ["away", "in", "out"],
            answer: "away",
            explanation: "'Give away' means to reveal a secret or surprise.",
            fullExplanation: "Give away means to reveal information that should be kept secret. 'Give in' means to surrender. 'Give out' means to distribute. Revealing a film's ending is 'giving it away'.",
            source: "Cambridge Dictionary Online, 'give away'"
          },
          {
            id: "vocab-pv-give-08",
            stem: "The roses in the garden give ___ a beautiful fragrance every evening.",
            options: ["off", "up", "out"],
            answer: "off",
            explanation: "'Give off' means to produce and release a smell, gas, heat, or light.",
            fullExplanation: "Give off means to emit or release. 'Give up' means to quit. 'Give out' means to distribute or fail. Roses releasing fragrance are 'giving off' a scent.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 30"
          },
          {
            id: "vocab-pv-give-09",
            stem: "After a tense six-hour standoff, the fugitive finally gave himself ___.",
            options: ["up", "in", "away"],
            answer: "up",
            explanation: "'Give oneself up' means to surrender to the authorities.",
            fullExplanation: "Give oneself up means to surrender voluntarily. 'Give in' means to yield. 'Give away' means to reveal or donate. A fugitive surrendering is 'giving himself up'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-give-10",
            stem: "The charity event gave ___ free meals to over five hundred homeless people.",
            options: ["out", "up", "away"],
            answer: "out",
            explanation: "'Give out' means to distribute items to a group of people.",
            fullExplanation: "Give out means to distribute or hand out. 'Give up' means to quit. 'Give away' also means to donate, but 'give out' specifically stresses distribution to many. Distributing meals is 'giving them out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 38"
          },
          {
            id: "vocab-pv-give-11",
            stem: "She refused to give ___ even when everyone told her the project would fail.",
            options: ["in", "up", "out"],
            answer: "in",
            explanation: "'Give in' means to accept defeat or stop resisting.",
            fullExplanation: "Give in means to stop resisting. 'Give up' means to abandon entirely. 'Give out' means to distribute. Refusing to accept defeat despite pressure is refusing to 'give in'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 38"
          },
          {
            id: "vocab-pv-give-12",
            stem: "The burning tyres gave ___ thick black smoke that could be seen for miles.",
            options: ["off", "out", "away"],
            answer: "off",
            explanation: "'Give off' means to produce or emit smoke, fumes, or gases.",
            fullExplanation: "Give off means to release or emit. 'Give out' means to distribute or break down. 'Give away' means to reveal or donate. Tyres producing smoke are 'giving off' smoke.",
            source: "Cambridge Dictionary Online, 'give off'"
          },
          {
            id: "vocab-pv-give-13",
            stem: "My legs gave ___ after the thirty-kilometre run and I collapsed on the ground.",
            options: ["out", "in", "up"],
            answer: "out",
            explanation: "'Give out' means a body part stops functioning from exhaustion.",
            fullExplanation: "Give out means to fail from overuse. 'Give in' means to surrender. 'Give up' means to quit. Legs failing from exhaustion are 'giving out'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 30"
          },
          {
            id: "vocab-pv-give-14",
            stem: "His accent gave him ___ as a foreigner even though his grammar was perfect.",
            options: ["away", "up", "out"],
            answer: "away",
            explanation: "'Give away' means to unintentionally reveal someone's true identity.",
            fullExplanation: "Give away means to accidentally reveal. 'Give up' means to quit. 'Give out' means to distribute. An accent revealing someone as a foreigner is 'giving him away'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-give-15",
            stem: "The management gave ___ to the union's demands after the two-week strike.",
            options: ["in", "up", "away"],
            answer: "in",
            explanation: "'Give in to' means to finally agree to demands after resistance.",
            fullExplanation: "Give in to means to yield to pressure or demands. 'Give up' means to quit. 'Give away' means to reveal or donate. Management agreeing to union demands after a strike is 'giving in'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 38"
          }
        ]
      },
      {
        id: "vocab-pv-bring",
        title: "Phrasal verbs: bring",
        tasks: [
          {
            id: "vocab-pv-bring-01",
            stem: "She was brought ___ by her grandparents in a small village near the coast.",
            options: ["up", "about", "back"],
            answer: "up",
            explanation: "'Bring up' means to raise and care for a child until adulthood.",
            fullExplanation: "Bring up means to raise a child. 'Bring about' means to cause. 'Bring back' means to return. Being raised by grandparents is being 'brought up' by them.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 40"
          },
          {
            id: "vocab-pv-bring-02",
            stem: "The new policy brought ___ significant changes in the healthcare system.",
            options: ["about", "up", "back"],
            answer: "about",
            explanation: "'Bring about' means to cause something to happen.",
            fullExplanation: "Bring about means to cause or produce. 'Bring up' means to raise or mention. 'Bring back' means to return. A policy causing changes has 'brought about' those changes.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-bring-03",
            stem: "The old photograph brought ___ happy memories of her university days.",
            options: ["back", "up", "about"],
            answer: "back",
            explanation: "'Bring back' means to cause someone to remember something from the past.",
            fullExplanation: "Bring back means to evoke memories. 'Bring up' means to raise or mention. 'Bring about' means to cause. A photograph evoking memories is 'bringing them back'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 40"
          },
          {
            id: "vocab-pv-bring-04",
            stem: "He didn't want to bring ___ the topic of money at the dinner table.",
            options: ["up", "about", "out"],
            answer: "up",
            explanation: "'Bring up' means to introduce a topic in conversation.",
            fullExplanation: "Bring up means to mention or raise a subject. 'Bring about' means to cause. 'Bring out' means to produce or publish. Not wanting to mention money is not wanting to 'bring it up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 40"
          },
          {
            id: "vocab-pv-bring-05",
            stem: "The publisher is bringing ___ a new edition of the classic novel this autumn.",
            options: ["out", "up", "back"],
            answer: "out",
            explanation: "'Bring out' means to publish or release a product.",
            fullExplanation: "Bring out means to publish or launch. 'Bring up' means to raise or mention. 'Bring back' means to return. A publisher releasing a new edition is 'bringing it out'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-bring-06",
            stem: "The heavy workload brought ___ a severe case of exhaustion and anxiety.",
            options: ["on", "up", "about"],
            answer: "on",
            explanation: "'Bring on' means to cause something unpleasant to happen.",
            fullExplanation: "Bring on means to cause or trigger something negative. 'Bring up' means to raise or mention. 'Bring about' also means to cause, but 'bring on' is specifically for negative consequences like illness. Workload causing exhaustion is 'bringing it on'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 32"
          },
          {
            id: "vocab-pv-bring-07",
            stem: "The government plans to bring ___ a new law banning single-use plastics.",
            options: ["in", "up", "out"],
            answer: "in",
            explanation: "'Bring in' means to introduce a new law, rule, or system.",
            fullExplanation: "Bring in means to introduce officially. 'Bring up' means to raise or mention. 'Bring out' means to publish. Introducing new legislation is 'bringing in' a new law.",
            source: "Cambridge Dictionary Online, 'bring in'"
          },
          {
            id: "vocab-pv-bring-08",
            stem: "Paramedics tried to bring the patient ___ after the cardiac arrest.",
            options: ["round", "up", "back"],
            answer: "round",
            explanation: "'Bring round' means to make someone regain consciousness.",
            fullExplanation: "Bring round means to restore consciousness. 'Bring up' means to raise or mention. 'Bring back' means to return. Paramedics restoring consciousness are 'bringing the patient round'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-bring-09",
            stem: "The tourism industry brings ___ millions of dollars in revenue for the island.",
            options: ["in", "up", "about"],
            answer: "in",
            explanation: "'Bring in' means to earn or generate revenue or income.",
            fullExplanation: "Bring in means to generate revenue. 'Bring up' means to raise or mention. 'Bring about' means to cause. Tourism generating revenue is 'bringing in' money.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Advanced), Unit 32"
          },
          {
            id: "vocab-pv-bring-10",
            stem: "The crisis brought the community ___ and people helped each other generously.",
            options: ["together", "up", "about"],
            answer: "together",
            explanation: "'Bring together' means to unite people or groups.",
            fullExplanation: "Bring together means to unite. 'Bring up' means to raise or mention. 'Bring about' means to cause. A crisis uniting a community is 'bringing them together'.",
            source: "Cambridge Dictionary Online, 'bring together'"
          },
          {
            id: "vocab-pv-bring-11",
            stem: "Competition from online retailers has brought ___ the price of electronics.",
            options: ["down", "up", "about"],
            answer: "down",
            explanation: "'Bring down' means to reduce or lower something such as a price.",
            fullExplanation: "Bring down means to reduce. 'Bring up' means to raise. 'Bring about' means to cause. Competition reducing prices is 'bringing them down'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 40"
          },
          {
            id: "vocab-pv-bring-12",
            stem: "The warm sunshine brings ___ the best in her garden every spring.",
            options: ["out", "up", "back"],
            answer: "out",
            explanation: "'Bring out' means to make a quality become noticeable or visible.",
            fullExplanation: "Bring out means to reveal or make apparent. 'Bring up' means to raise. 'Bring back' means to return. Sunshine making a garden look its best is 'bringing out' its beauty.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          },
          {
            id: "vocab-pv-bring-13",
            stem: "The coach brought ___ a substitute player in the second half of the match.",
            options: ["on", "up", "out"],
            answer: "on",
            explanation: "'Bring on' means to introduce a player onto the field during a game.",
            fullExplanation: "Bring on means to introduce a substitute. 'Bring up' means to raise. 'Bring out' means to publish. Introducing a substitute player is 'bringing them on'.",
            source: "Cambridge Dictionary Online, 'bring on'"
          },
          {
            id: "vocab-pv-bring-14",
            stem: "Please bring ___ any concerns during the staff meeting on Thursday.",
            options: ["up", "out", "about"],
            answer: "up",
            explanation: "'Bring up' means to raise a matter for discussion in a meeting.",
            fullExplanation: "Bring up means to mention or raise a topic. 'Bring out' means to publish. 'Bring about' means to cause. Raising concerns in a meeting is 'bringing them up'.",
            source: "McCarthy, M. & O'Dell, F. English Phrasal Verbs in Use (Intermediate), Unit 40"
          },
          {
            id: "vocab-pv-bring-15",
            stem: "The scandal eventually brought ___ the downfall of the entire administration.",
            options: ["about", "up", "out"],
            answer: "about",
            explanation: "'Bring about' means to cause a major event or change to occur.",
            fullExplanation: "Bring about means to cause something significant. 'Bring up' means to raise or mention. 'Bring out' means to publish. A scandal causing a government's downfall has 'brought it about'.",
            source: "Swan, M. Practical English Usage (4th ed.), §491"
          }
        ]
      },
      {
        id: "vocab-adj-noun",
        title: "Adjective-noun collocations",
        tasks: [
          {
            id: "vocab-adj-noun-01",
            stem: "The report contained a ___ amount of data on global warming trends.",
            options: ["vast", "wide", "broad"],
            answer: "vast",
            explanation: "'Vast amount' is the standard collocation for an extremely large quantity.",
            fullExplanation: "We say 'a vast amount' to describe an extremely large quantity. 'Wide' collocates with 'range' or 'variety', not 'amount'. 'Broad' collocates with 'spectrum' or 'range'. 'Vast amount' is a fixed collocation.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 5"
          },
          {
            id: "vocab-adj-noun-02",
            stem: "There is ___ evidence that regular exercise improves mental health.",
            options: ["strong", "heavy", "hard"],
            answer: "strong",
            explanation: "'Strong evidence' is the correct collocation meaning convincing proof.",
            fullExplanation: "We say 'strong evidence', not 'heavy evidence' or 'hard evidence'. 'Heavy' collocates with 'rain', 'traffic', etc. 'Hard' collocates with 'work' or 'time'. Evidence that is convincing is 'strong evidence'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 7"
          },
          {
            id: "vocab-adj-noun-03",
            stem: "The city experienced ___ rain throughout the entire weekend.",
            options: ["heavy", "strong", "thick"],
            answer: "heavy",
            explanation: "'Heavy rain' is the standard collocation for intense rainfall.",
            fullExplanation: "We say 'heavy rain', not 'strong rain' or 'thick rain'. 'Strong' collocates with 'wind' or 'evidence'. 'Thick' collocates with 'fog' or 'smoke'. Intense rainfall is always called 'heavy rain'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 3"
          },
          {
            id: "vocab-adj-noun-04",
            stem: "She fell into a ___ sleep after the twelve-hour flight from Tokyo.",
            options: ["deep", "heavy", "strong"],
            answer: "deep",
            explanation: "'Deep sleep' is the standard collocation for a very sound, restful sleep.",
            fullExplanation: "We say 'deep sleep' to describe a very profound sleep. 'Heavy' collocates with 'rain' and 'traffic'. 'Strong' collocates with 'evidence' and 'wind'. Sleep that is very sound is called 'deep sleep'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 9"
          },
          {
            id: "vocab-adj-noun-05",
            stem: "The parents had ___ expectations for their daughter's academic career.",
            options: ["high", "tall", "big"],
            answer: "high",
            explanation: "'High expectations' is the standard collocation for ambitious hopes.",
            fullExplanation: "We say 'high expectations', not 'tall expectations' or 'big expectations'. 'Tall' describes physical height of people and buildings. 'Big' is general size. Ambitious standards are 'high expectations'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 11"
          },
          {
            id: "vocab-adj-noun-06",
            stem: "The judge reached the ___ conclusion that the defendant was innocent.",
            options: ["firm", "hard", "strong"],
            answer: "firm",
            explanation: "'Firm conclusion' is the standard collocation meaning a decisive finding.",
            fullExplanation: "We say 'firm conclusion' for a definite, well-supported finding. 'Hard' collocates with 'work' or 'evidence'. 'Strong' collocates with 'evidence' or 'opinion'. A clear, decisive conclusion is 'firm'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 7"
          },
          {
            id: "vocab-adj-noun-07",
            stem: "There has been a ___ improvement in air quality since the new regulations.",
            options: ["marked", "big", "heavy"],
            answer: "marked",
            explanation: "'Marked improvement' is the standard collocation for a noticeable, significant change.",
            fullExplanation: "We say 'marked improvement' to describe a very noticeable change. 'Big' is too informal for formal writing. 'Heavy' collocates with 'rain' or 'traffic'. A clearly noticeable improvement is 'marked'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 13"
          },
          {
            id: "vocab-adj-noun-08",
            stem: "The candidate gave a ___ speech that impressed every member of the committee.",
            options: ["compelling", "strong", "hard"],
            answer: "compelling",
            explanation: "'Compelling speech' is the correct collocation for a persuasive and engaging talk.",
            fullExplanation: "We say 'compelling speech' meaning extremely persuasive and interesting. 'Strong' collocates with 'opinion' or 'evidence'. 'Hard' collocates with 'work'. A speech that deeply impresses is 'compelling'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 15"
          },
          {
            id: "vocab-adj-noun-09",
            stem: "The documentary explored the ___ impact of plastic pollution on ocean wildlife.",
            options: ["devastating", "heavy", "deep"],
            answer: "devastating",
            explanation: "'Devastating impact' is the standard collocation for an extremely harmful effect.",
            fullExplanation: "We say 'devastating impact' for extremely destructive effects. 'Heavy' collocates with 'rain' or 'traffic'. 'Deep' collocates with 'sleep' or 'concern'. An extremely harmful effect on wildlife is 'devastating'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 5"
          },
          {
            id: "vocab-adj-noun-10",
            stem: "The company faced ___ criticism for its handling of the data breach.",
            options: ["fierce", "deep", "vast"],
            answer: "fierce",
            explanation: "'Fierce criticism' is the standard collocation for strong, aggressive disapproval.",
            fullExplanation: "We say 'fierce criticism' for very strong disapproval. 'Deep' collocates with 'concern' or 'sleep'. 'Vast' collocates with 'amount' or 'majority'. Intense, aggressive criticism is 'fierce'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 7"
          },
          {
            id: "vocab-adj-noun-11",
            stem: "The team achieved a ___ victory in the championship final on Saturday.",
            options: ["decisive", "heavy", "deep"],
            answer: "decisive",
            explanation: "'Decisive victory' is the standard collocation for a clear, convincing win.",
            fullExplanation: "We say 'decisive victory' meaning a clear and conclusive win. 'Heavy' collocates with 'defeat'. 'Deep' collocates with 'sleep'. A convincing win in a final is a 'decisive victory'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 17"
          },
          {
            id: "vocab-adj-noun-12",
            stem: "There is ___ concern among parents about the effects of social media.",
            options: ["growing", "rising", "large"],
            answer: "growing",
            explanation: "'Growing concern' is the standard collocation for worry that is increasing.",
            fullExplanation: "We say 'growing concern' for anxiety that is increasing over time. 'Rising' typically collocates with 'prices' or 'temperatures'. 'Large' collocates with 'number'. Worry that increases is 'growing concern'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 5"
          },
          {
            id: "vocab-adj-noun-13",
            stem: "The research paper received ___ attention from the international scientific community.",
            options: ["widespread", "broad", "large"],
            answer: "widespread",
            explanation: "'Widespread attention' is the standard collocation for notice from many people or places.",
            fullExplanation: "We say 'widespread attention' for attention from many sources. 'Broad' collocates with 'range' or 'spectrum'. 'Large' collocates with 'number'. Attention from across the world is 'widespread'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 13"
          },
          {
            id: "vocab-adj-noun-14",
            stem: "The surgeon has a ___ reputation for performing complex cardiac procedures.",
            options: ["outstanding", "high", "big"],
            answer: "outstanding",
            explanation: "'Outstanding reputation' is the standard collocation for an exceptionally positive public image.",
            fullExplanation: "We say 'outstanding reputation' for an exceptional standing. 'High' collocates with 'expectations'. 'Big' is too informal. An exceptionally good professional reputation is 'outstanding'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 15"
          },
          {
            id: "vocab-adj-noun-15",
            stem: "She showed ___ courage by speaking out against the corruption in her department.",
            options: ["remarkable", "heavy", "deep"],
            answer: "remarkable",
            explanation: "'Remarkable courage' is the standard collocation for exceptionally impressive bravery.",
            fullExplanation: "We say 'remarkable courage' for extraordinary bravery. 'Heavy' collocates with 'rain' or 'traffic'. 'Deep' collocates with 'sleep' or 'concern'. Exceptional bravery is 'remarkable courage'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 9"
          }
        ]
      },
      {
        id: "vocab-verb-noun",
        title: "Verb-noun collocations",
        tasks: [
          {
            id: "vocab-verb-noun-01",
            stem: "The board will ___ a decision about the merger by next Friday.",
            options: ["make", "do", "take"],
            answer: "make",
            explanation: "'Make a decision' is the standard verb-noun collocation.",
            fullExplanation: "We say 'make a decision', not 'do a decision' or 'take a decision' (though 'take a decision' exists in British English, 'make' is the standard collocation). 'Do' collocates with 'research', 'homework', 'business'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-verb-noun-02",
            stem: "Students are encouraged to ___ research before writing their dissertations.",
            options: ["do", "make", "take"],
            answer: "do",
            explanation: "'Do research' is the standard verb-noun collocation for conducting studies.",
            fullExplanation: "We say 'do research', not 'make research'. 'Make' collocates with 'a decision', 'progress', 'a mistake'. 'Take' collocates with 'a risk', 'a break'. Conducting research is 'doing research'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-verb-noun-03",
            stem: "The entrepreneur decided to ___ a risk and invest in the start-up company.",
            options: ["take", "make", "do"],
            answer: "take",
            explanation: "'Take a risk' is the standard collocation for accepting potential danger.",
            fullExplanation: "We say 'take a risk', not 'make a risk' or 'do a risk'. 'Make' collocates with 'a decision'. 'Do' collocates with 'research'. Accepting a potential danger is 'taking a risk'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 22"
          },
          {
            id: "vocab-verb-noun-04",
            stem: "Please ___ attention to the safety instructions displayed on the screen.",
            options: ["pay", "give", "make"],
            answer: "pay",
            explanation: "'Pay attention' is the standard collocation meaning to concentrate or listen carefully.",
            fullExplanation: "We say 'pay attention', not 'give attention' or 'make attention'. 'Give' collocates with 'advice'. 'Make' collocates with 'a decision'. Concentrating on safety instructions requires 'paying attention'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 24"
          },
          {
            id: "vocab-verb-noun-05",
            stem: "The company has ___ significant progress in developing renewable energy solutions.",
            options: ["made", "done", "taken"],
            answer: "made",
            explanation: "'Made progress' uses the standard collocation 'make progress' in the present perfect.",
            fullExplanation: "We say 'make progress', not 'do progress' or 'take progress'. 'Do' collocates with 'research'. 'Take' collocates with 'a risk'. In the present perfect, 'has made progress' is correct.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-verb-noun-06",
            stem: "He needs to ___ an effort to improve his relationship with his colleagues.",
            options: ["make", "do", "put"],
            answer: "make",
            explanation: "'Make an effort' is the standard collocation for trying hard.",
            fullExplanation: "We say 'make an effort', not 'do an effort'. 'Do' collocates with 'homework'. 'Put' could be followed by 'in effort', but the standard expression is 'make an effort'. Trying hard is 'making an effort'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-verb-noun-07",
            stem: "Let's ___ a break and continue the meeting after lunch.",
            options: ["take", "make", "do"],
            answer: "take",
            explanation: "'Take a break' is the standard collocation for pausing an activity.",
            fullExplanation: "We say 'take a break', not 'make a break' or 'do a break'. 'Make' collocates with 'a decision'. 'Do' collocates with 'research'. Pausing for rest is 'taking a break'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 22"
          },
          {
            id: "vocab-verb-noun-08",
            stem: "The athlete ___ a world record in the 100-metre sprint yesterday.",
            options: ["set", "made", "put"],
            answer: "set",
            explanation: "'Set a record' is the standard collocation for establishing a new best.",
            fullExplanation: "We say 'set a record', not 'make a record' or 'put a record'. 'Make' collocates with 'a decision'. 'Put' collocates with 'pressure'. Establishing a new best is 'setting a record'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 26"
          },
          {
            id: "vocab-verb-noun-09",
            stem: "The professor ___ a lecture on artificial intelligence to over 200 students.",
            options: ["gave", "made", "said"],
            answer: "gave",
            explanation: "'Gave a lecture' uses the standard collocation 'give a lecture' in the past tense.",
            fullExplanation: "We say 'give a lecture', not 'make a lecture' or 'say a lecture'. 'Make' collocates with 'a speech'. 'Say' requires direct or reported speech. In the past tense, the professor 'gave' a lecture.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 24"
          },
          {
            id: "vocab-verb-noun-10",
            stem: "The airline was forced to ___ an apology after cancelling hundreds of flights.",
            options: ["issue", "make", "give"],
            answer: "issue",
            explanation: "'Issue an apology' is the formal collocation for an official public apology.",
            fullExplanation: "We say 'issue an apology' in formal contexts for an official statement. 'Make an apology' is also possible but less formal. 'Give an apology' is informal. A company's official public apology is 'issuing an apology'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 26"
          },
          {
            id: "vocab-verb-noun-11",
            stem: "The witness was asked to ___ a statement at the police station.",
            options: ["make", "do", "say"],
            answer: "make",
            explanation: "'Make a statement' is the standard collocation for providing an official account.",
            fullExplanation: "We say 'make a statement', not 'do a statement' or 'say a statement'. 'Do' collocates with 'research'. 'Say' requires direct speech. Providing an official account at a police station is 'making a statement'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 20"
          },
          {
            id: "vocab-verb-noun-12",
            stem: "The manager asked the team to ___ priority to the most urgent tasks.",
            options: ["give", "make", "take"],
            answer: "give",
            explanation: "'Give priority' is the standard collocation for treating something as most important.",
            fullExplanation: "We say 'give priority to', not 'make priority' or 'take priority'. 'Make' collocates with 'a decision'. 'Take' collocates with 'a risk'. Treating urgent tasks as most important is 'giving priority' to them.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 24"
          },
          {
            id: "vocab-verb-noun-13",
            stem: "The government plans to ___ measures to reduce carbon emissions by 2030.",
            options: ["take", "make", "do"],
            answer: "take",
            explanation: "'Take measures' is the standard collocation for implementing actions.",
            fullExplanation: "We say 'take measures', not 'make measures' or 'do measures'. 'Make' collocates with 'a decision'. 'Do' collocates with 'research'. Implementing actions is 'taking measures'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 22"
          },
          {
            id: "vocab-verb-noun-14",
            stem: "The hospital ___ a strict policy on visiting hours during the pandemic.",
            options: ["imposed", "made", "did"],
            answer: "imposed",
            explanation: "'Imposed a policy' uses the collocation 'impose a policy' in the past tense.",
            fullExplanation: "We say 'impose a policy' for authoritative enforcement. The hospital 'imposed' a strict policy. 'Made' could work with 'a rule' but 'imposed' is stronger and more formal. 'Did' does not collocate with 'policy'.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 28"
          },
          {
            id: "vocab-verb-noun-15",
            stem: "Scientists have ___ doubt on the accuracy of the original climate study.",
            options: ["cast", "made", "put"],
            answer: "cast",
            explanation: "'Cast doubt' is the standard collocation for questioning the reliability of something.",
            fullExplanation: "We say 'cast doubt on', not 'make doubt' or 'put doubt'. 'Made' collocates with 'a discovery'. 'Put' collocates with 'pressure'. Questioning a study's accuracy is 'casting doubt' on it.",
            source: "McCarthy, M. & O'Dell, F. English Collocations in Use (Intermediate), Unit 28"
          }
        ]
      },
      {
        id: "vocab-confusable",
        title: "Confusable words",
        tasks: [
          {
            id: "vocab-confusable-01",
            stem: "The new policy will ___ thousands of employees across the country.",
            options: ["affect", "effect", "infect"],
            answer: "affect",
            explanation: "'Affect' is the verb meaning to influence or have an impact on.",
            fullExplanation: "Affect (verb) means to influence. Effect (noun) means a result; as a verb it means to bring about change. 'Infect' means to contaminate with disease. A policy influencing employees 'affects' them.",
            source: "Swan, M. Practical English Usage (4th ed.), §17"
          },
          {
            id: "vocab-confusable-02",
            stem: "The volunteers helped to ___ money for the children's hospital.",
            options: ["raise", "rise", "arise"],
            answer: "raise",
            explanation: "'Raise' is a transitive verb meaning to collect or increase something.",
            fullExplanation: "Raise is transitive — it requires an object. Rise is intransitive — it has no object. 'Arise' means to come into being. Collecting money needs a transitive verb: 'raise money'.",
            source: "Swan, M. Practical English Usage (4th ed.), §487"
          },
          {
            id: "vocab-confusable-03",
            stem: "She asked her neighbour to ___ her some sugar for the cake recipe.",
            options: ["lend", "borrow", "loan"],
            answer: "lend",
            explanation: "'Lend' means to give something to someone temporarily.",
            fullExplanation: "Lend means to give temporarily (lend TO someone). Borrow means to receive temporarily (borrow FROM someone). 'Loan' is also possible but more formal. She's asking the neighbour to give her sugar, so 'lend' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §116"
          },
          {
            id: "vocab-confusable-04",
            stem: "Could you ___ me how to get to the nearest underground station?",
            options: ["tell", "say", "speak"],
            answer: "tell",
            explanation: "'Tell' is used with a personal object — 'tell me/him/her'.",
            fullExplanation: "Tell requires a personal object (tell someone something). Say does not take a personal object directly ('say to me'). 'Speak' means to talk. With 'me' as a direct object, 'tell' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §528"
          },
          {
            id: "vocab-confusable-05",
            stem: "Please ___ still while the photographer takes the group picture.",
            options: ["lie", "lay", "laid"],
            answer: "lie",
            explanation: "'Lie' means to be in or move into a flat position (no object).",
            fullExplanation: "Lie (intransitive) means to recline; it has no object. Lay (transitive) requires an object — you lay something down. 'Laid' is the past tense of 'lay'. 'Lie still' means to remain in a flat, motionless position.",
            source: "Swan, M. Practical English Usage (4th ed.), §298"
          },
          {
            id: "vocab-confusable-06",
            stem: "I need to ___ you that the deadline has been moved forward to Monday.",
            options: ["inform", "say", "explain"],
            answer: "inform",
            explanation: "'Inform' is followed by a person object: 'inform someone that...'",
            fullExplanation: "Inform takes a person as a direct object: 'inform you that'. 'Say' does not take a personal object directly. 'Explain' takes 'to' before a person. The pattern 'inform + person + that' is standard.",
            source: "Swan, M. Practical English Usage (4th ed.), §528"
          },
          {
            id: "vocab-confusable-07",
            stem: "The price of electricity has ___ by fifteen per cent since January.",
            options: ["risen", "raised", "arose"],
            answer: "risen",
            explanation: "'Risen' (past participle of 'rise') is intransitive — no object needed.",
            fullExplanation: "Rise is intransitive (no object): prices rise. Raise is transitive: you raise prices. 'Arose' is the past of 'arise'. The price went up on its own, so 'risen' (from 'rise') is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §487"
          },
          {
            id: "vocab-confusable-08",
            stem: "His rude behaviour showed a complete ___ of respect for the tradition.",
            options: ["lack", "absence", "miss"],
            answer: "lack",
            explanation: "'Lack of' is the standard expression meaning not having enough of something.",
            fullExplanation: "Lack of is the standard collocation for 'not having'. 'Absence of' is possible but more formal and typically used for physical absence. 'Miss' is a verb, not used in this pattern. A 'lack of respect' is standard.",
            source: "Swan, M. Practical English Usage (4th ed.), §295"
          },
          {
            id: "vocab-confusable-09",
            stem: "She tried to ___ him to change his mind about leaving the company.",
            options: ["persuade", "convince", "suggest"],
            answer: "persuade",
            explanation: "'Persuade' is followed by 'to + infinitive' meaning to get someone to act.",
            fullExplanation: "Persuade someone to do something means to successfully get them to act. 'Convince' is followed by 'that' or 'of'. 'Suggest' cannot take a person + infinitive. The pattern 'persuade + person + to do' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §409"
          },
          {
            id: "vocab-confusable-10",
            stem: "The explorers were able to ___ the ruins of an ancient temple in the jungle.",
            options: ["discover", "invent", "detect"],
            answer: "discover",
            explanation: "'Discover' means to find something that already exists but was unknown.",
            fullExplanation: "Discover means to find something existing but previously unknown. Invent means to create something new. 'Detect' means to notice something hidden. Finding ancient ruins is 'discovering' them.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 30"
          },
          {
            id: "vocab-confusable-11",
            stem: "I ___ seeing that film — it was one of the best I've ever watched.",
            options: ["remember", "remind", "recall"],
            answer: "remember",
            explanation: "'Remember' means to have a memory of a past experience.",
            fullExplanation: "Remember means to retain a memory. Remind means to cause someone else to remember. 'Recall' is also possible but more formal. Having a memory of seeing a film is 'remembering' it.",
            source: "Swan, M. Practical English Usage (4th ed.), §494"
          },
          {
            id: "vocab-confusable-12",
            stem: "The hotel room was too small to ___ all five members of the family.",
            options: ["accommodate", "hold", "fit"],
            answer: "accommodate",
            explanation: "'Accommodate' means to provide sufficient space or lodging for people.",
            fullExplanation: "Accommodate means to have enough space for people, especially in lodging. 'Hold' refers to container capacity. 'Fit' refers to size matching. A hotel room housing a family 'accommodates' them.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 32"
          },
          {
            id: "vocab-confusable-13",
            stem: "Can you ___ the difference between these two shades of green?",
            options: ["tell", "say", "speak"],
            answer: "tell",
            explanation: "'Tell the difference' is the fixed expression for distinguishing between things.",
            fullExplanation: "Tell the difference is a fixed expression meaning to distinguish. 'Say' does not collocate with 'difference' this way. 'Speak' means to talk. Distinguishing between two shades requires 'telling the difference'.",
            source: "Swan, M. Practical English Usage (4th ed.), §528"
          },
          {
            id: "vocab-confusable-14",
            stem: "The charity ___ free meals to families in need every weekend.",
            options: ["provides", "gives", "offers"],
            answer: "provides",
            explanation: "'Provides' is the formal verb for supplying services or goods regularly.",
            fullExplanation: "Provide means to supply or make available formally. 'Give' is less formal and implies a one-time gift. 'Offer' implies making something available without certainty of acceptance. Regular formal supply is 'providing'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 34"
          },
          {
            id: "vocab-confusable-15",
            stem: "We need to ___ how much paint is required before starting the renovation.",
            options: ["estimate", "guess", "calculate"],
            answer: "estimate",
            explanation: "'Estimate' means to form an approximate judgement of quantity or value.",
            fullExplanation: "Estimate means to make an informed approximation. 'Guess' implies no basis for the number. 'Calculate' means to compute exactly. Forming an approximate figure for paint needed is 'estimating'.",
            source: "Swan, M. Practical English Usage (4th ed.), §295"
          }
        ]
      },
      {
        id: "vocab-idioms",
        title: "Fixed expressions and idioms",
        tasks: [
          {
            id: "vocab-idioms-01",
            stem: "He's been feeling a bit under the ___ since catching a cold last week.",
            options: ["weather", "cloud", "storm"],
            answer: "weather",
            explanation: "'Under the weather' means feeling slightly ill or unwell.",
            fullExplanation: "Under the weather is a fixed idiom meaning feeling unwell. 'Under the cloud' is not standard. 'Under the storm' is not an idiom. Feeling ill after catching a cold is being 'under the weather'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 60"
          },
          {
            id: "vocab-idioms-02",
            stem: "Let's not beat around the ___ — we need to discuss the budget cuts now.",
            options: ["bush", "tree", "hedge"],
            answer: "bush",
            explanation: "'Beat around the bush' means to avoid talking about the main topic.",
            fullExplanation: "Beat around the bush is a fixed idiom meaning to avoid the main point. 'Tree' and 'hedge' are not part of this expression. The speaker wants directness, not 'beating around the bush'.",
            source: "Swan, M. Practical English Usage (4th ed.), §320"
          },
          {
            id: "vocab-idioms-03",
            stem: "Learning to play the violin was no piece of ___ for the young student.",
            options: ["cake", "pie", "bread"],
            answer: "cake",
            explanation: "'Piece of cake' means something is very easy to do.",
            fullExplanation: "A piece of cake is a fixed idiom meaning something very easy. 'Pie' and 'bread' are not part of this expression. Learning violin being difficult means it was 'no piece of cake'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 58"
          },
          {
            id: "vocab-idioms-04",
            stem: "She spilled the ___ about the surprise party and ruined the whole plan.",
            options: ["beans", "rice", "peas"],
            answer: "beans",
            explanation: "'Spill the beans' means to reveal a secret accidentally.",
            fullExplanation: "Spill the beans is a fixed idiom meaning to reveal a secret. 'Rice' and 'peas' are not part of this expression. Revealing the surprise party is 'spilling the beans'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 60"
          },
          {
            id: "vocab-idioms-05",
            stem: "The project is still up in the ___ and no final decision has been made.",
            options: ["air", "sky", "clouds"],
            answer: "air",
            explanation: "'Up in the air' means something is uncertain and undecided.",
            fullExplanation: "Up in the air is a fixed idiom meaning uncertain. 'Sky' and 'clouds' are not part of this expression. An undecided project is 'up in the air'.",
            source: "Swan, M. Practical English Usage (4th ed.), §320"
          },
          {
            id: "vocab-idioms-06",
            stem: "You're barking up the wrong ___ if you think I had anything to do with it.",
            options: ["tree", "bush", "pole"],
            answer: "tree",
            explanation: "'Barking up the wrong tree' means pursuing a mistaken course of action.",
            fullExplanation: "Barking up the wrong tree is a fixed idiom meaning to have the wrong idea. 'Bush' and 'pole' are not part of this expression. Accusing the wrong person is 'barking up the wrong tree'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 60"
          },
          {
            id: "vocab-idioms-07",
            stem: "The manager asked everyone to keep an ___ on the new intern during training.",
            options: ["eye", "ear", "hand"],
            answer: "eye",
            explanation: "'Keep an eye on' means to watch or monitor someone or something.",
            fullExplanation: "Keep an eye on is a fixed expression meaning to monitor. 'Ear' collocates with 'keep an ear out for'. 'Hand' is not used in this pattern. Watching the new intern is 'keeping an eye on' them.",
            source: "Swan, M. Practical English Usage (4th ed.), §320"
          },
          {
            id: "vocab-idioms-08",
            stem: "She passed the exam by the skin of her ___ with just one mark to spare.",
            options: ["teeth", "nose", "neck"],
            answer: "teeth",
            explanation: "'By the skin of one's teeth' means to barely succeed or narrowly escape.",
            fullExplanation: "By the skin of one's teeth is a fixed idiom meaning barely. 'Nose' and 'neck' are not used in this expression. Passing with one mark to spare is passing 'by the skin of her teeth'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 58"
          },
          {
            id: "vocab-idioms-09",
            stem: "He always sits on the ___ and refuses to take sides in any argument.",
            options: ["fence", "wall", "gate"],
            answer: "fence",
            explanation: "'Sit on the fence' means to avoid making a decision or choosing a side.",
            fullExplanation: "Sit on the fence is a fixed idiom meaning to remain neutral. 'Wall' and 'gate' are not part of this expression. Refusing to take sides is 'sitting on the fence'.",
            source: "Swan, M. Practical English Usage (4th ed.), §320"
          },
          {
            id: "vocab-idioms-10",
            stem: "That antique vase must have cost an arm and a ___ at the auction.",
            options: ["leg", "hand", "foot"],
            answer: "leg",
            explanation: "'Cost an arm and a leg' means to be extremely expensive.",
            fullExplanation: "Cost an arm and a leg is a fixed idiom meaning very expensive. 'Hand' and 'foot' are not part of this expression. An expensive antique at auction 'costs an arm and a leg'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 58"
          },
          {
            id: "vocab-idioms-11",
            stem: "It's no use crying over spilt ___ — we need to find a solution now.",
            options: ["milk", "water", "juice"],
            answer: "milk",
            explanation: "'Crying over spilt milk' means worrying about something that has already happened.",
            fullExplanation: "No use crying over spilt milk is a fixed idiom meaning don't regret what can't be changed. 'Water' and 'juice' are not part of this expression. Focusing on solutions rather than regret means not 'crying over spilt milk'.",
            source: "Swan, M. Practical English Usage (4th ed.), §320"
          },
          {
            id: "vocab-idioms-12",
            stem: "The new employee quickly learned the ___ of working in a busy newsroom.",
            options: ["ropes", "wires", "strings"],
            answer: "ropes",
            explanation: "'Learn the ropes' means to learn how a particular job or task is done.",
            fullExplanation: "Learn the ropes is a fixed idiom meaning to understand how something works. 'Wires' and 'strings' are not part of this expression. A new employee learning the job is 'learning the ropes'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 60"
          },
          {
            id: "vocab-idioms-13",
            stem: "After years of hard work, her business ideas are finally bearing ___.",
            options: ["fruit", "seeds", "flowers"],
            answer: "fruit",
            explanation: "'Bear fruit' means to produce positive results after a long effort.",
            fullExplanation: "Bear fruit is a fixed expression meaning to yield results. 'Seeds' and 'flowers' are not part of this expression. Business ideas producing results are 'bearing fruit'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 62"
          },
          {
            id: "vocab-idioms-14",
            stem: "I think we should call it a ___ and continue the discussion tomorrow.",
            options: ["day", "night", "break"],
            answer: "day",
            explanation: "'Call it a day' means to stop working or end an activity.",
            fullExplanation: "Call it a day is a fixed idiom meaning to stop for now. 'Night' and 'break' are not part of this expression. Deciding to end a discussion and continue later is 'calling it a day'.",
            source: "Swan, M. Practical English Usage (4th ed.), §320"
          },
          {
            id: "vocab-idioms-15",
            stem: "He turned a blind ___ to the minor rule violations in the office.",
            options: ["eye", "ear", "cheek"],
            answer: "eye",
            explanation: "'Turn a blind eye' means to deliberately ignore something wrong.",
            fullExplanation: "Turn a blind eye is a fixed idiom meaning to pretend not to notice. 'Ear' and 'cheek' are not part of this expression (though 'turn the other cheek' is a different idiom). Ignoring violations is 'turning a blind eye'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 60"
          }
        ]
      }
    ]
  },

  /* ─── MIXED GRAMMAR ─── */
  {
    id: "mixed-grammar",
    title: "Mixed Grammar",
    preset: "grammar",
    subtopics: [
      {
        id: "mg-cond-0",
        title: "Conditionals \u2014 Zero",
        tasks: [
          {
            id: "mg-cond-0-01",
            stem: "If you ___ water to 100°C, it boils.",
            options: ["heat", "heated", "will heat"],
            answer: "heat",
            explanation: "'heat' is correct because the zero conditional uses if + present simple for general truths.",
            fullExplanation: "The zero conditional describes things that are always true — scientific facts and general truths. Both clauses use the present simple: If + present simple, present simple. 'Heated' (past) and 'will heat' (future) are wrong because this is a universal fact, not a hypothetical or prediction.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-0-02",
            stem: "If iron ___ exposed to moisture, it rusts quickly.",
            options: ["is", "was", "will be"],
            answer: "is",
            explanation: "'is' fits the zero conditional — present simple in both clauses for scientific facts.",
            fullExplanation: "Zero conditionals describe permanent cause-and-effect relationships. The if-clause uses present simple ('is'), and the result clause also uses present simple ('rusts'). 'Was' would shift to a past context, and 'will be' would imply a first conditional about a specific future event.",
            source: "Swan, M. Practical English Usage (4th ed.), §261"
          },
          {
            id: "mg-cond-0-03",
            stem: "Plants die if they ___ enough sunlight.",
            options: ["don't get", "didn't get", "won't get"],
            answer: "don't get",
            explanation: "Zero conditional uses present simple; 'don't get' states a general biological truth.",
            fullExplanation: "This sentence expresses a general truth about plant biology. The zero conditional requires present simple in both clauses. 'Didn't get' is past simple and would imply a specific past event. 'Won't get' is future and would turn this into a first conditional prediction.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-0-04",
            stem: "If the temperature ___ below zero, roads become icy and dangerous.",
            options: ["drops", "dropped", "will drop"],
            answer: "drops",
            explanation: "'drops' — present simple in the if-clause is required for zero conditionals about general truths.",
            fullExplanation: "The zero conditional describes a predictable, recurring outcome. Both clauses use present simple. 'Dropped' (past simple) would suggest a second conditional (hypothetical), and 'will drop' would turn this into a first conditional (prediction about a specific future event).",
            source: "Hewings, M. Advanced Grammar in Use, Unit 20"
          },
          {
            id: "mg-cond-0-05",
            stem: "If you ___ salt to water, the boiling point increases slightly.",
            options: ["add", "added", "will add"],
            answer: "add",
            explanation: "The zero conditional uses present simple in both clauses; 'add' is correct here.",
            fullExplanation: "This is a scientific fact — adding salt raises water's boiling point. Zero conditionals use if + present simple, present simple. 'Added' would create a second conditional (hypothetical), while 'will add' would suggest a specific future situation.",
            source: "Swan, M. Practical English Usage (4th ed.), §261"
          },
          {
            id: "mg-cond-0-06",
            stem: "Bees sting you if you ___ their hive.",
            options: ["disturb", "disturbed", "will disturb"],
            answer: "disturb",
            explanation: "'disturb' is the present simple form needed in the zero conditional for a general fact about bees.",
            fullExplanation: "This sentence states a general truth about bee behaviour. Both clauses must use present simple in the zero conditional. 'Disturbed' (past) and 'will disturb' (future with will) do not fit the pattern for expressing general truths.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-0-07",
            stem: "If you ___ a glass, it shatters into many pieces.",
            options: ["drop", "dropped", "would drop"],
            answer: "drop",
            explanation: "Zero conditional requires 'drop' (present simple) to express a predictable outcome.",
            fullExplanation: "Dropping glass always produces the same result — this is a zero conditional. Both clauses use present simple. 'Dropped' or 'would drop' would shift the sentence toward hypothetical or past meaning, which is incorrect for a general truth.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 22"
          },
          {
            id: "mg-cond-0-08",
            stem: "If babies ___ hungry, they cry to attract attention.",
            options: ["are", "were", "will be"],
            answer: "are",
            explanation: "'are' — zero conditional uses present simple in both clauses for general truths about human behaviour.",
            fullExplanation: "This describes a universal behaviour of babies. The zero conditional requires present simple in both the if-clause and the main clause. 'Were' would introduce a second conditional (unreal/hypothetical), and 'will be' would suggest a specific future prediction.",
            source: "Swan, M. Practical English Usage (4th ed.), §261"
          },
          {
            id: "mg-cond-0-09",
            stem: "Metal ___ if you heat it to a high enough temperature.",
            options: ["melts", "melted", "would melt"],
            answer: "melts",
            explanation: "'melts' is correct — the result clause in a zero conditional also uses present simple.",
            fullExplanation: "Zero conditionals describe facts and laws: if + present simple, present simple. The result ('melts') must also be present simple. 'Melted' is past tense, and 'would melt' belongs to a second conditional (hypothetical present/future).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-0-10",
            stem: "If you ___ on the brake pedal, the car slows down.",
            options: ["press", "pressed", "will press"],
            answer: "press",
            explanation: "'press' — the zero conditional uses present simple to describe a cause-and-effect relationship.",
            fullExplanation: "This is a general truth about how cars work — pressing the brake causes the car to slow. Both clauses need present simple. 'Pressed' suggests a past event, and 'will press' turns it into a first conditional about a specific future moment.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 20"
          },
          {
            id: "mg-cond-0-11",
            stem: "If students ___ regularly, their grades usually improve.",
            options: ["study", "studied", "will study"],
            answer: "study",
            explanation: "'study' is present simple, fitting the zero conditional for general academic observations.",
            fullExplanation: "This is a general observation about academic performance. Zero conditionals express truths and tendencies using present simple in both clauses. 'Studied' would shift meaning toward a second conditional, and 'will study' creates a first conditional about a specific future scenario.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 22"
          },
          {
            id: "mg-cond-0-12",
            stem: "If the sun ___ directly on dark surfaces, they absorb more heat.",
            options: ["shines", "shone", "will shine"],
            answer: "shines",
            explanation: "'shines' — present simple is needed for the zero conditional describing a physical law.",
            fullExplanation: "Dark surfaces always absorb more heat in direct sunlight — this is a physical fact requiring a zero conditional. 'Shone' is past tense, and 'will shine' implies prediction about a single event. Both are incorrect for stating a general truth.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-0-13",
            stem: "Your computer restarts automatically if you ___ the power button for ten seconds.",
            options: ["hold", "held", "will hold"],
            answer: "hold",
            explanation: "Zero conditional: 'hold' (present simple) states what always happens with the power button.",
            fullExplanation: "This describes a predictable technological function — holding the button always triggers a restart. Zero conditionals use present simple in both clauses. 'Held' implies past or hypothetical, and 'will hold' turns the sentence into a first conditional prediction.",
            source: "Swan, M. Practical English Usage (4th ed.), §261"
          },
          {
            id: "mg-cond-0-14",
            stem: "If you ___ too much sugar, your health suffers in the long run.",
            options: ["consume", "consumed", "will consume"],
            answer: "consume",
            explanation: "'consume' — zero conditional present simple describes a general health fact.",
            fullExplanation: "This states a general truth about diet and health. The zero conditional uses present simple in both clauses. 'Consumed' would make it past tense or part of a second conditional, and 'will consume' would introduce a first conditional prediction.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 20"
          },
          {
            id: "mg-cond-0-15",
            stem: "Bread goes stale quickly if you ___ it in a sealed container.",
            options: ["don't keep", "didn't keep", "won't keep"],
            answer: "don't keep",
            explanation: "'don't keep' — the negative present simple is correct in the zero conditional for general truths.",
            fullExplanation: "This describes a general fact about food storage. The zero conditional requires present simple in both clauses, including the negative form 'don't keep'. 'Didn't keep' is past tense, and 'won't keep' would create a first conditional about a specific future situation.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          }
        ]
      },
      {
        id: "mg-cond-1",
        title: "Conditionals \u2014 First",
        tasks: [
          {
            id: "mg-cond-1-01",
            stem: "If it ___ tomorrow, we will cancel the outdoor concert.",
            options: ["rains", "rained", "will rain"],
            answer: "rains",
            explanation: "'rains' — in first conditionals, the if-clause uses present simple, not will.",
            fullExplanation: "First conditionals describe real and possible future situations. The structure is: if + present simple, will + base verb. 'Rained' (past) belongs to a second conditional (hypothetical). 'Will rain' is wrong because we don't use 'will' in the if-clause of first conditionals.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-1-02",
            stem: "You will miss the train if you ___ soon.",
            options: ["don't leave", "didn't leave", "wouldn't leave"],
            answer: "don't leave",
            explanation: "First conditional: 'don't leave' (present simple) in the if-clause warns about a real possibility.",
            fullExplanation: "The first conditional uses if + present simple, will + base verb for likely future events. The negative present simple 'don't leave' is needed. 'Didn't leave' belongs to the second conditional (unreal). 'Wouldn't leave' mixes conditional structures incorrectly.",
            source: "Swan, M. Practical English Usage (4th ed.), §260"
          },
          {
            id: "mg-cond-1-03",
            stem: "If she ___ the exam, her parents will be very proud.",
            options: ["passes", "passed", "would pass"],
            answer: "passes",
            explanation: "'passes' is the present simple form required in the if-clause of a first conditional.",
            fullExplanation: "This describes a real, possible future event. First conditionals use: if + present simple, will + base verb. 'Passed' would belong to a second conditional about an unreal or unlikely situation. 'Would pass' is incorrect for the if-clause.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-1-04",
            stem: "If the company ___ more staff, profits will increase next quarter.",
            options: ["hires", "hired", "will hire"],
            answer: "hires",
            explanation: "'hires' — first conditional uses present simple in the if-clause for a realistic business prediction.",
            fullExplanation: "First conditionals describe situations the speaker considers genuinely possible. The if-clause takes present simple ('hires'), and the result clause uses will + base verb. 'Hired' shifts to second conditional (hypothetical), and 'will hire' is not used in if-clauses.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 20"
          },
          {
            id: "mg-cond-1-05",
            stem: "We ___ to the beach if the weather clears up this afternoon.",
            options: ["will go", "would go", "went"],
            answer: "will go",
            explanation: "'will go' — the result clause of a first conditional uses will + base verb.",
            fullExplanation: "The first conditional result clause needs 'will + base verb'. Since the weather clearing up is a real possibility, 'will go' is correct. 'Would go' belongs to second conditionals (hypothetical), and 'went' is past simple, which doesn't match the future meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-1-06",
            stem: "If you ___ that button, the alarm will sound immediately.",
            options: ["press", "pressed", "would press"],
            answer: "press",
            explanation: "'press' — the if-clause in a first conditional uses present simple for a real warning.",
            fullExplanation: "This is a warning about a real consequence. First conditionals use: if + present simple, will + base verb. 'Pressed' would belong to a second conditional, implying the speaker thinks it unlikely. 'Would press' is grammatically incorrect in the if-clause.",
            source: "Swan, M. Practical English Usage (4th ed.), §260"
          },
          {
            id: "mg-cond-1-07",
            stem: "They will lose the match if the goalkeeper ___ injured before the final.",
            options: ["gets", "got", "would get"],
            answer: "gets",
            explanation: "'gets' — present simple in the if-clause of a first conditional expresses a real risk.",
            fullExplanation: "This describes a realistic possibility in an upcoming match. First conditionals require present simple in the if-clause. 'Got' implies a second conditional (unlikely scenario), and 'would get' is not used in if-clauses.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-1-08",
            stem: "If the museum ___ free on Sundays, more families will visit.",
            options: ["is", "was", "were"],
            answer: "is",
            explanation: "'is' — present simple in the if-clause for a first conditional about a realistic policy.",
            fullExplanation: "This describes a real and possible future situation. The first conditional if-clause uses present simple ('is'). 'Was' or 'were' would shift the sentence to a second conditional, implying the speaker thinks it unlikely or hypothetical.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 20"
          },
          {
            id: "mg-cond-1-09",
            stem: "If the internet ___ down during the meeting, we will reschedule.",
            options: ["goes", "went", "would go"],
            answer: "goes",
            explanation: "'goes' — the first conditional if-clause takes present simple for a plausible disruption.",
            fullExplanation: "Internet outages are a real possibility, making this a first conditional. The if-clause needs present simple ('goes'), and the result clause uses 'will + base verb'. 'Went' belongs to the second conditional, and 'would go' is not used in if-clauses.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-1-10",
            stem: "If you ___ enough water during the hike, you will feel much better.",
            options: ["drink", "drank", "will drink"],
            answer: "drink",
            explanation: "'drink' — present simple in the if-clause of a first conditional gives practical advice.",
            fullExplanation: "This is practical advice about a likely future situation. First conditional: if + present simple, will + base verb. 'Drank' belongs to the second conditional (hypothetical). 'Will drink' cannot appear in the if-clause of a first conditional.",
            source: "Swan, M. Practical English Usage (4th ed.), §260"
          },
          {
            id: "mg-cond-1-11",
            stem: "Your plants will thrive if you ___ them regularly and give them sunlight.",
            options: ["water", "watered", "would water"],
            answer: "water",
            explanation: "'water' — the if-clause of a first conditional uses present simple for a likely outcome.",
            fullExplanation: "This describes a predictable outcome based on a real action. First conditional: if + present simple, will + base verb. 'Watered' shifts to a second conditional (hypothetical), and 'would water' is grammatically incorrect in an if-clause.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-1-12",
            stem: "If the pilot ___ turbulence ahead, the seatbelt sign will come on.",
            options: ["detects", "detected", "will detect"],
            answer: "detects",
            explanation: "'detects' — present simple in the if-clause for a realistic in-flight scenario.",
            fullExplanation: "This is a realistic, possible future event. First conditionals require present simple in the if-clause and 'will' in the main clause. 'Detected' is past tense and would shift to second conditional meaning. 'Will detect' breaks the rule of no 'will' in if-clauses.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 22"
          },
          {
            id: "mg-cond-1-13",
            stem: "If the restaurant ___ a vegan menu, I will eat there tonight.",
            options: ["has", "had", "would have"],
            answer: "has",
            explanation: "'has' — first conditional uses present simple in the if-clause for a real possibility.",
            fullExplanation: "The speaker considers it genuinely possible that the restaurant has a vegan menu. First conditional: if + present simple, will + base verb. 'Had' belongs to the second conditional (unlikely/hypothetical). 'Would have' is incorrect in the if-clause.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 20"
          },
          {
            id: "mg-cond-1-14",
            stem: "If the package ___ by Friday, I will file a complaint with the carrier.",
            options: ["doesn't arrive", "didn't arrive", "wouldn't arrive"],
            answer: "doesn't arrive",
            explanation: "'doesn't arrive' — negative present simple in the if-clause of a first conditional for a real concern.",
            fullExplanation: "The speaker genuinely expects the package might not arrive, making this a first conditional. The if-clause needs present simple (negative: 'doesn't arrive'). 'Didn't arrive' shifts to second conditional, and 'wouldn't arrive' is not used in if-clauses.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-1-15",
            stem: "If the CEO ___ at the conference, the press will cover the event extensively.",
            options: ["speaks", "spoke", "will speak"],
            answer: "speaks",
            explanation: "'speaks' — present simple in the if-clause for a first conditional about a likely event.",
            fullExplanation: "The CEO speaking at the conference is a real possibility. First conditional: if + present simple, will + base verb. 'Spoke' would make this a second conditional (hypothetical). 'Will speak' is not permitted in the if-clause of a first conditional.",
            source: "Swan, M. Practical English Usage (4th ed.), §260"
          }
        ]
      },
      {
        id: "mg-cond-2",
        title: "Conditionals \u2014 Second",
        tasks: [
          {
            id: "mg-cond-2-01",
            stem: "If I ___ more time, I would travel around the world.",
            options: ["had", "have", "will have"],
            answer: "had",
            explanation: "'had' — the second conditional uses if + past simple for hypothetical present/future situations.",
            fullExplanation: "The second conditional describes unreal or unlikely present/future situations: if + past simple, would + base verb. 'Have' (present) would create a zero/first conditional. 'Will have' is not used in the if-clause of any conditional.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-2-02",
            stem: "If she ___ the CEO, she would change the company's remote-work policy.",
            options: ["were", "is", "will be"],
            answer: "were",
            explanation: "'were' — in second conditionals, 'were' is used for all persons in formal English.",
            fullExplanation: "The second conditional uses if + past simple, would + base verb. For the verb 'be', 'were' is used for all persons (I/he/she/it/we/they) in formal English. 'Is' belongs to the zero or first conditional. 'Will be' is not used in if-clauses.",
            source: "Swan, M. Practical English Usage (4th ed.), §259"
          },
          {
            id: "mg-cond-2-03",
            stem: "I ___ a new car if I won the lottery tomorrow.",
            options: ["would buy", "will buy", "bought"],
            answer: "would buy",
            explanation: "'would buy' — the result clause of a second conditional uses would + base verb.",
            fullExplanation: "The second conditional result clause requires 'would + base verb'. Since winning the lottery is hypothetical, 'would buy' is correct. 'Will buy' belongs to first conditionals (real possibilities). 'Bought' is past simple, which doesn't fit the result clause.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-2-04",
            stem: "If the government ___ more in renewable energy, pollution would decrease.",
            options: ["invested", "invests", "will invest"],
            answer: "invested",
            explanation: "'invested' — the second conditional if-clause uses past simple for a hypothetical scenario.",
            fullExplanation: "This describes an unlikely or hypothetical government action. Second conditional: if + past simple, would + base verb. 'Invests' (present) would create a first conditional about a real possibility. 'Will invest' is not used in if-clauses.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 21"
          },
          {
            id: "mg-cond-2-05",
            stem: "If I ___ you, I would accept the job offer without hesitation.",
            options: ["were", "am", "was"],
            answer: "were",
            explanation: "'were' is used in second conditionals with all subjects for hypothetical advice.",
            fullExplanation: "The phrase 'If I were you' is a fixed expression in the second conditional for giving advice. 'Were' is preferred over 'was' in formal English for unreal conditions. 'Am' belongs to first conditionals and zero conditionals.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-2-06",
            stem: "If we ___ closer to the office, we wouldn't spend so much on petrol.",
            options: ["lived", "live", "will live"],
            answer: "lived",
            explanation: "'lived' — past simple in the if-clause for a hypothetical situation about current residence.",
            fullExplanation: "The speaker doesn't live close to the office, so this is hypothetical. Second conditional: if + past simple, would + base verb. 'Live' (present) would make it a first conditional. 'Will live' is not used in if-clauses.",
            source: "Swan, M. Practical English Usage (4th ed.), §259"
          },
          {
            id: "mg-cond-2-07",
            stem: "She would donate to charity more often if she ___ a higher salary.",
            options: ["earned", "earns", "will earn"],
            answer: "earned",
            explanation: "'earned' — past simple in the if-clause of a second conditional for an unreal present condition.",
            fullExplanation: "The speaker implies she doesn't earn a high salary, making this hypothetical. Second conditional: if + past simple, would + base verb. 'Earns' would create a first conditional, and 'will earn' is never used in if-clauses.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-2-08",
            stem: "If humans ___ fly, we wouldn't need aeroplanes at all.",
            options: ["could", "can", "will"],
            answer: "could",
            explanation: "'could' — the second conditional uses past modals like 'could' for hypothetical abilities.",
            fullExplanation: "This describes an impossible hypothetical scenario. The second conditional can use 'could' (past of 'can') in the if-clause for unreal abilities. 'Can' would suggest a real possibility (first conditional), and 'will' is not used in if-clauses.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 21"
          },
          {
            id: "mg-cond-2-09",
            stem: "If the city ___ a better public transport system, fewer people would drive.",
            options: ["had", "has", "will have"],
            answer: "had",
            explanation: "'had' — second conditional uses past simple in the if-clause for a hypothetical improvement.",
            fullExplanation: "The city doesn't currently have a great transport system, making this hypothetical. Second conditional: if + past simple, would + base verb. 'Has' creates a first conditional (realistic). 'Will have' is incorrect in if-clauses.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-2-10",
            stem: "If I ___ a famous scientist, I would work on curing rare diseases.",
            options: ["were", "am", "will be"],
            answer: "were",
            explanation: "'were' — in the second conditional, 'were' is used for all persons to express unreal identity.",
            fullExplanation: "Being a famous scientist is hypothetical for the speaker. Second conditionals use 'were' for all persons with the verb 'be'. 'Am' belongs to real situations (first/zero conditional). 'Will be' cannot appear in if-clauses.",
            source: "Swan, M. Practical English Usage (4th ed.), §259"
          },
          {
            id: "mg-cond-2-11",
            stem: "If they ___ the environmental risks, they wouldn't approve the project.",
            options: ["understood", "understand", "will understand"],
            answer: "understood",
            explanation: "'understood' — past simple in the if-clause for a second conditional about a hypothetical awareness.",
            fullExplanation: "The speaker implies 'they' don't fully understand the risks. Second conditional: if + past simple, would + base verb. 'Understand' (present) would form a first conditional. 'Will understand' is not used in if-clauses.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 22"
          },
          {
            id: "mg-cond-2-12",
            stem: "He ___ his own business if he weren't afraid of taking financial risks.",
            options: ["would start", "will start", "starts"],
            answer: "would start",
            explanation: "'would start' — the result clause of a second conditional uses would + base verb.",
            fullExplanation: "The person is afraid of financial risks (current reality), so starting a business is hypothetical. The result clause needs 'would + base verb'. 'Will start' is for first conditionals, and 'starts' is present simple, which doesn't match the hypothetical meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-2-13",
            stem: "If this laptop ___ a better screen, I would buy it right now.",
            options: ["had", "has", "will have"],
            answer: "had",
            explanation: "'had' — second conditional requires past simple to describe an unreal feature.",
            fullExplanation: "The laptop doesn't have a better screen, so this is hypothetical. Second conditional: if + past simple, would + base verb. 'Has' makes it a first conditional (real possibility). 'Will have' is incorrect in if-clauses.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 21"
          },
          {
            id: "mg-cond-2-14",
            stem: "If our office ___ in the city centre, commuting would be much easier.",
            options: ["were", "is", "will be"],
            answer: "were",
            explanation: "'were' — the second conditional uses 'were' for hypothetical locations.",
            fullExplanation: "The office is not in the city centre, so this is unreal. Second conditional uses 'were' (not 'was' in formal English) for all persons with 'be'. 'Is' would create a first conditional, and 'will be' is not used in if-clauses.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "mg-cond-2-15",
            stem: "If the internet ___ tomorrow, modern civilisation would struggle enormously.",
            options: ["disappeared", "disappears", "will disappear"],
            answer: "disappeared",
            explanation: "'disappeared' — past simple in the if-clause for a highly hypothetical second conditional scenario.",
            fullExplanation: "The internet disappearing is a highly unlikely hypothetical. Second conditional: if + past simple, would + base verb. 'Disappears' (present) would create a first conditional suggesting it's likely. 'Will disappear' is not used in if-clauses.",
            source: "Swan, M. Practical English Usage (4th ed.), §259"
          }
        ]
      },
      {
        id: "mg-cond-3",
        title: "Conditionals \u2014 Third",
        tasks: [
          {
            id: "mg-cond-3-01",
            stem: "If they ___ the warning signs, the accident would not have happened.",
            options: ["had noticed", "noticed", "would notice"],
            answer: "had noticed",
            explanation: "'had noticed' — the third conditional uses if + past perfect for unreal past situations.",
            fullExplanation: "Third conditionals describe hypothetical past situations and their imagined results: if + past perfect, would have + past participle. 'Noticed' is past simple (second conditional). 'Would notice' is wrong because the if-clause needs past perfect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 26"
          },
          {
            id: "mg-cond-3-02",
            stem: "She would have passed the exam if she ___ harder during the semester.",
            options: ["had studied", "studied", "would study"],
            answer: "had studied",
            explanation: "'had studied' — past perfect in the if-clause for a third conditional about an unreal past effort.",
            fullExplanation: "The third conditional imagines a different past: if + past perfect, would have + past participle. She didn't study hard, so she didn't pass. 'Studied' is past simple, appropriate for second conditionals. 'Would study' is incorrect in the if-clause.",
            source: "Swan, M. Practical English Usage (4th ed.), §258"
          },
          {
            id: "mg-cond-3-03",
            stem: "If the pilot ___ the storm earlier, the flight would have been diverted.",
            options: ["had detected", "detected", "would detect"],
            answer: "had detected",
            explanation: "'had detected' — past perfect is required in the if-clause of a third conditional.",
            fullExplanation: "The pilot didn't detect the storm earlier, so this is a hypothetical past scenario. Third conditional: if + past perfect, would have + past participle. 'Detected' (past simple) fits a second conditional. 'Would detect' cannot appear in if-clauses.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 26"
          },
          {
            id: "mg-cond-3-04",
            stem: "If we ___ earlier, we would have caught the last bus home.",
            options: ["had left", "left", "would leave"],
            answer: "had left",
            explanation: "'had left' — the third conditional if-clause uses past perfect for an unreal past departure.",
            fullExplanation: "We didn't leave early, so we missed the bus. Third conditional: if + past perfect, would have + past participle. 'Left' is past simple, used in second conditionals. 'Would leave' is not valid in the if-clause.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 22"
          },
          {
            id: "mg-cond-3-05",
            stem: "They ___ the championship if their star player hadn't been injured.",
            options: ["would have won", "will win", "would win"],
            answer: "would have won",
            explanation: "'would have won' — the result clause of a third conditional uses would have + past participle.",
            fullExplanation: "The star player was injured, so they didn't win — this is an unreal past. Third conditional result clause: would have + past participle. 'Will win' is for first conditionals. 'Would win' belongs to second conditionals (hypothetical present/future).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 26"
          },
          {
            id: "mg-cond-3-06",
            stem: "If the bridge ___ properly, it would not have collapsed during the earthquake.",
            options: ["had been built", "was built", "is built"],
            answer: "had been built",
            explanation: "'had been built' — passive past perfect in the if-clause of a third conditional.",
            fullExplanation: "The bridge was not built properly, leading to its collapse. Third conditional passive: if + had been + past participle, would have + past participle. 'Was built' is past simple passive (second conditional). 'Is built' is present passive (zero/first conditional).",
            source: "Swan, M. Practical English Usage (4th ed.), §258"
          },
          {
            id: "mg-cond-3-07",
            stem: "If he ___ the map, he wouldn't have taken the wrong turn.",
            options: ["had checked", "checked", "would check"],
            answer: "had checked",
            explanation: "'had checked' — third conditional uses past perfect in the if-clause for an unreal past action.",
            fullExplanation: "He didn't check the map, so he got lost. Third conditional: if + past perfect, would have + past participle. 'Checked' is past simple (second conditional). 'Would check' cannot be used in the if-clause.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 26"
          },
          {
            id: "mg-cond-3-08",
            stem: "If the doctor ___ the symptoms correctly, the patient would have recovered sooner.",
            options: ["had diagnosed", "diagnosed", "would diagnose"],
            answer: "had diagnosed",
            explanation: "'had diagnosed' — past perfect in the if-clause for a third conditional about a missed medical opportunity.",
            fullExplanation: "The doctor didn't diagnose correctly, delaying recovery. Third conditional: if + past perfect, would have + past participle. 'Diagnosed' is past simple, fitting a second conditional. 'Would diagnose' is incorrect in the if-clause.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 22"
          },
          {
            id: "mg-cond-3-09",
            stem: "We would have enjoyed the trip more if the weather ___ better.",
            options: ["had been", "was", "were"],
            answer: "had been",
            explanation: "'had been' — third conditional requires past perfect in the if-clause for unreal past weather.",
            fullExplanation: "The weather was bad during the trip. Third conditional: if + past perfect, would have + past participle. 'Was' and 'were' belong to second conditionals (hypothetical present/future).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 26"
          },
          {
            id: "mg-cond-3-10",
            stem: "If the company ___ in training, they wouldn't have lost so many skilled employees.",
            options: ["had invested", "invested", "would invest"],
            answer: "had invested",
            explanation: "'had invested' — the third conditional if-clause uses past perfect for an unreal past decision.",
            fullExplanation: "The company didn't invest in training, and employees left. Third conditional: if + past perfect, would have + past participle. 'Invested' is past simple (second conditional). 'Would invest' cannot go in the if-clause.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 22"
          },
          {
            id: "mg-cond-3-11",
            stem: "If the alarm ___ on time, the fire would have been contained more quickly.",
            options: ["had gone off", "went off", "goes off"],
            answer: "had gone off",
            explanation: "'had gone off' — past perfect is needed in the if-clause for this third conditional about a past emergency.",
            fullExplanation: "The alarm didn't go off on time, allowing the fire to spread. Third conditional: if + past perfect, would have + past participle. 'Went off' is past simple (second conditional). 'Goes off' is present simple (zero/first conditional).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 26"
          },
          {
            id: "mg-cond-3-12",
            stem: "She ___ the scholarship if she had submitted her application before the deadline.",
            options: ["would have received", "will receive", "received"],
            answer: "would have received",
            explanation: "'would have received' — the result clause of a third conditional uses would have + past participle.",
            fullExplanation: "She missed the deadline, so she didn't get the scholarship. Third conditional result: would have + past participle. 'Will receive' is for first conditionals. 'Received' is past simple, which doesn't express the unreal past meaning.",
            source: "Swan, M. Practical English Usage (4th ed.), §258"
          },
          {
            id: "mg-cond-3-13",
            stem: "If the explorers ___ enough supplies, the expedition would have succeeded.",
            options: ["had brought", "brought", "would bring"],
            answer: "had brought",
            explanation: "'had brought' — past perfect in the if-clause for a third conditional about a failed expedition.",
            fullExplanation: "The explorers didn't bring enough supplies, causing the expedition to fail. Third conditional: if + past perfect, would have + past participle. 'Brought' (past simple) fits second conditionals. 'Would bring' cannot appear in if-clauses.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 22"
          },
          {
            id: "mg-cond-3-14",
            stem: "If I ___ about the traffic jam, I would have taken a different route.",
            options: ["had known", "knew", "would know"],
            answer: "had known",
            explanation: "'had known' — past perfect in the if-clause describes unreal past knowledge in the third conditional.",
            fullExplanation: "The speaker didn't know about the traffic jam. Third conditional: if + past perfect, would have + past participle. 'Knew' (past simple) belongs to second conditionals. 'Would know' is not valid in the if-clause.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 26"
          },
          {
            id: "mg-cond-3-15",
            stem: "The team ___ the deadline if they had started the project two weeks earlier.",
            options: ["would have met", "will meet", "would meet"],
            answer: "would have met",
            explanation: "'would have met' — the third conditional result clause uses would have + past participle.",
            fullExplanation: "They didn't start early, so they missed the deadline. Third conditional result: would have + past participle. 'Will meet' belongs to first conditionals. 'Would meet' is for second conditionals (hypothetical present/future).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 26"
          }
        ]
      },
      {
        id: "mg-rep-speech",
        title: "Reported Speech",
        tasks: [
          {
            id: "mg-rep-speech-01",
            stem: "She said she ___ the film the previous week.",
            options: ["had seen", "has seen", "saw"],
            answer: "had seen",
            explanation: "'had seen' — in reported speech, past simple shifts back to past perfect.",
            fullExplanation: "When reporting past statements, tenses shift back one step. 'Saw' (past simple) becomes 'had seen' (past perfect) in reported speech. 'Has seen' (present perfect) would not shift correctly from a past context. 'Saw' would be the original direct speech form, not the reported form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 47"
          },
          {
            id: "mg-rep-speech-02",
            stem: "He told me he ___ working on the project since Monday.",
            options: ["had been", "has been", "was"],
            answer: "had been",
            explanation: "'had been' — present perfect continuous shifts to past perfect continuous in reported speech.",
            fullExplanation: "The original statement was 'I have been working...' In reported speech, present perfect continuous becomes past perfect continuous: 'had been working'. 'Has been' is the original form. 'Was' loses the continuous progressive meaning of the original.",
            source: "Swan, M. Practical English Usage (4th ed.), §481"
          },
          {
            id: "mg-rep-speech-03",
            stem: "The manager asked us ___ we had finished the quarterly report.",
            options: ["whether", "that", "what"],
            answer: "whether",
            explanation: "'whether' introduces a reported yes/no question.",
            fullExplanation: "When reporting yes/no questions, we use 'whether' or 'if' (not 'that' or 'what'). The original question was 'Have you finished the quarterly report?' 'That' introduces reported statements. 'What' introduces reported wh-questions.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 48"
          },
          {
            id: "mg-rep-speech-04",
            stem: "She said she ___ call me as soon as the results were ready.",
            options: ["would", "will", "can"],
            answer: "would",
            explanation: "'would' — 'will' shifts to 'would' in reported speech.",
            fullExplanation: "In reported speech, 'will' becomes 'would'. The original statement was 'I will call you...' which becomes 'she would call...' 'Will' would remain only if the reporting verb is present tense. 'Can' would be a different modal entirely.",
            source: "Swan, M. Practical English Usage (4th ed.), §481"
          },
          {
            id: "mg-rep-speech-05",
            stem: "The teacher told the students ___ their textbooks to page forty-five.",
            options: ["to open", "open", "that open"],
            answer: "to open",
            explanation: "'to open' — reported commands use told + object + to-infinitive.",
            fullExplanation: "Reported commands use: tell/ask + object + to-infinitive. The original command was 'Open your textbooks...' which becomes 'told the students to open...' 'Open' is the direct imperative form. 'That open' is grammatically incorrect for reporting commands.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 47"
          },
          {
            id: "mg-rep-speech-06",
            stem: "He asked me where I ___ during the summer holidays the previous year.",
            options: ["had travelled", "have travelled", "will travel"],
            answer: "had travelled",
            explanation: "'had travelled' — past simple shifts to past perfect in reported speech questions.",
            fullExplanation: "The original question was 'Where did you travel...?' In reported speech, past simple becomes past perfect: 'had travelled'. 'Have travelled' doesn't match the backshift. 'Will travel' refers to the future and doesn't fit the past context.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 28"
          },
          {
            id: "mg-rep-speech-07",
            stem: "She mentioned that she ___ never been to South America before.",
            options: ["had", "has", "did"],
            answer: "had",
            explanation: "'had' — present perfect shifts to past perfect in reported speech: 'had never been'.",
            fullExplanation: "The original statement was 'I have never been to South America.' Present perfect shifts to past perfect in reported speech: 'had never been'. 'Has' is the original form, not the reported one. 'Did' would change the structure incorrectly.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 47"
          },
          {
            id: "mg-rep-speech-08",
            stem: "The doctor advised her ___ smoking for the sake of her health.",
            options: ["to stop", "stop", "stopping"],
            answer: "to stop",
            explanation: "'to stop' — reported advice uses advised + object + to-infinitive.",
            fullExplanation: "Reported advice follows: advise + object + to-infinitive. The doctor's original words might have been 'You should stop smoking.' 'Stop' is the bare imperative. 'Stopping' (gerund) doesn't fit the 'advise + to-infinitive' pattern.",
            source: "Swan, M. Practical English Usage (4th ed.), §481"
          },
          {
            id: "mg-rep-speech-09",
            stem: "They said they ___ living in Tokyo at that time.",
            options: ["were", "are", "had been"],
            answer: "were",
            explanation: "'were' — present continuous shifts to past continuous ('were living') in reported speech.",
            fullExplanation: "The original statement was 'We are living in Tokyo at this time.' Present continuous shifts to past continuous in reported speech. 'Are' is the original form. 'Had been' (past perfect continuous) would be an over-backshift.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 47"
          },
          {
            id: "mg-rep-speech-10",
            stem: "She asked me ___ I could help her move to the new apartment.",
            options: ["if", "that", "what"],
            answer: "if",
            explanation: "'if' introduces a reported yes/no question, equivalent to 'whether'.",
            fullExplanation: "Reported yes/no questions use 'if' or 'whether'. The original question was 'Can you help me move?' 'That' introduces reported statements, not questions. 'What' introduces reported wh-questions.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 28"
          },
          {
            id: "mg-rep-speech-11",
            stem: "The guide warned the tourists ___ touch the ancient murals in the cave.",
            options: ["not to", "to not", "don't"],
            answer: "not to",
            explanation: "'not to' — reported negative commands use told/warned + object + not to + infinitive.",
            fullExplanation: "Negative reported commands follow: warn/tell + object + not to + infinitive. The original was 'Don't touch the murals!' 'To not' is a split infinitive that is non-standard in this structure. 'Don't' is the original imperative form, not the reported form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 47"
          },
          {
            id: "mg-rep-speech-12",
            stem: "He said that the meeting ___ place the following Tuesday.",
            options: ["would take", "will take", "takes"],
            answer: "would take",
            explanation: "'would take' — 'will' shifts to 'would' in reported speech for future reference.",
            fullExplanation: "The original was 'The meeting will take place next Tuesday.' In reported speech, 'will' becomes 'would' and 'next' becomes 'the following'. 'Will take' is the original form. 'Takes' (present simple) doesn't match the backshift.",
            source: "Swan, M. Practical English Usage (4th ed.), §481"
          },
          {
            id: "mg-rep-speech-13",
            stem: "She wanted to know how much the flight to Barcelona ___.",
            options: ["cost", "costs", "does cost"],
            answer: "cost",
            explanation: "'cost' — in reported speech, the present simple 'costs' shifts to past simple 'cost'.",
            fullExplanation: "The original question was 'How much does the flight cost?' In reported speech, present simple shifts to past simple. Since 'cost' has the same past and present form, 'cost' is correct. 'Costs' is the original form. 'Does cost' includes the auxiliary from direct questions.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 48"
          },
          {
            id: "mg-rep-speech-14",
            stem: "The receptionist informed us that breakfast ___ served between seven and ten.",
            options: ["was", "is", "has been"],
            answer: "was",
            explanation: "'was' — present simple shifts to past simple in reported speech.",
            fullExplanation: "The original statement was 'Breakfast is served between seven and ten.' In reported speech, 'is' shifts to 'was'. 'Is' is the original direct form. 'Has been' (present perfect) introduces an unnecessary tense shift that doesn't match the pattern.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 28"
          },
          {
            id: "mg-rep-speech-15",
            stem: "He explained that he ___ the company because he wanted a new challenge.",
            options: ["was leaving", "is leaving", "leaves"],
            answer: "was leaving",
            explanation: "'was leaving' — present continuous shifts to past continuous in reported speech.",
            fullExplanation: "The original statement was 'I am leaving the company because I want a new challenge.' Present continuous becomes past continuous in reported speech. 'Is leaving' is the original form. 'Leaves' (present simple) doesn't match the progressive meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 47"
          }
        ]
      },
      {
        id: "mg-rel-def",
        title: "Relative Clauses \u2014 Defining",
        tasks: [
          {
            id: "mg-rel-def-01",
            stem: "The museum ___ we visited last summer has been renovated.",
            options: ["which", "who", "whose"],
            answer: "which",
            explanation: "'which' — refers to things in a defining relative clause.",
            fullExplanation: "In defining relative clauses, 'which' (or 'that') refers to things. 'Who' refers to people only. 'Whose' shows possession. The museum is a thing, so 'which' is the correct pronoun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 92"
          },
          {
            id: "mg-rel-def-02",
            stem: "The scientist ___ discovered penicillin won the Nobel Prize in 1945.",
            options: ["who", "which", "where"],
            answer: "who",
            explanation: "'who' — refers to people in a defining relative clause.",
            fullExplanation: "Defining relative clauses identify which person we are talking about. 'Who' refers to people, 'which' refers to things, and 'where' refers to places. A scientist is a person, so 'who' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "mg-rel-def-03",
            stem: "The hotel ___ we stayed during the conference was surprisingly affordable.",
            options: ["where", "which", "who"],
            answer: "where",
            explanation: "'where' — refers to places in a defining relative clause.",
            fullExplanation: "Defining relative clauses with 'where' identify a specific place. 'Which' could replace 'where' only if followed by a preposition ('in which'). 'Who' refers exclusively to people. Since the hotel is a place, 'where' is natural here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 92"
          },
          {
            id: "mg-rel-def-04",
            stem: "The students ___ passed the final exam will receive certificates next week.",
            options: ["who", "which", "where"],
            answer: "who",
            explanation: "'who' — defines which students by referring to people.",
            fullExplanation: "This defining clause specifies which students — those who passed. 'Who' is used for people. 'Which' is for things. 'Where' is for places. Since students are people, 'who' is the only correct option.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 60"
          },
          {
            id: "mg-rel-def-05",
            stem: "Do you remember the year ___ the Berlin Wall fell?",
            options: ["when", "which", "who"],
            answer: "when",
            explanation: "'when' — refers to a time in a defining relative clause.",
            fullExplanation: "'When' is used in defining relative clauses to refer to a specific time (year, day, moment). 'Which' would need a preposition ('in which'). 'Who' is for people only. Since 'the year' is a time reference, 'when' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "mg-rel-def-06",
            stem: "The book ___ she recommended has become a bestseller worldwide.",
            options: ["that", "who", "where"],
            answer: "that",
            explanation: "'that' — can replace 'which' in defining relative clauses for things.",
            fullExplanation: "In defining relative clauses, 'that' can refer to both people and things. Here it replaces 'which' for a thing (the book). 'Who' is for people only. 'Where' is for places only.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 92"
          },
          {
            id: "mg-rel-def-07",
            stem: "The architect ___ building won the design award studied in Barcelona.",
            options: ["whose", "who", "which"],
            answer: "whose",
            explanation: "'whose' — shows possession in a defining relative clause.",
            fullExplanation: "'Whose' indicates possession: the architect's building won. 'Who' refers to the person directly but doesn't show possession. 'Which' refers to things. Only 'whose' creates the correct possessive relationship.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "mg-rel-def-08",
            stem: "The software ___ the company developed last year has attracted millions of users.",
            options: ["that", "who", "whose"],
            answer: "that",
            explanation: "'that' — refers to things in a defining relative clause.",
            fullExplanation: "'That' (or 'which') is used in defining clauses to refer to things. Software is a thing. 'Who' is for people only. 'Whose' shows possession and doesn't fit the structure of this sentence.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 92"
          },
          {
            id: "mg-rel-def-09",
            stem: "The café ___ they serve traditional pastries is just around the corner.",
            options: ["where", "which", "whose"],
            answer: "where",
            explanation: "'where' — indicates a place in a defining relative clause.",
            fullExplanation: "'Where' is used in defining relative clauses to describe a location. The café is a place where something happens. 'Which' would need restructuring ('at which'). 'Whose' shows possession and doesn't fit here.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 60"
          },
          {
            id: "mg-rel-def-10",
            stem: "The surgeon ___ performed the operation has thirty years of experience.",
            options: ["who", "which", "when"],
            answer: "who",
            explanation: "'who' — refers to a person in a defining relative clause.",
            fullExplanation: "Defining clauses identify which person we mean. 'Who' refers to people (the surgeon). 'Which' is for things. 'When' is for times. Since the surgeon is a person, 'who' is the correct pronoun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 92"
          },
          {
            id: "mg-rel-def-11",
            stem: "The app ___ I downloaded last night keeps crashing on my phone.",
            options: ["that", "who", "whose"],
            answer: "that",
            explanation: "'that' — used in defining relative clauses to refer to things like an app.",
            fullExplanation: "'That' (or 'which') can refer to things in defining relative clauses. An app is a thing. 'Who' is for people. 'Whose' indicates possession. The sentence identifies which specific app, making 'that' correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "mg-rel-def-12",
            stem: "The teacher ___ daughter won the science fair also teaches biology.",
            options: ["whose", "who", "that"],
            answer: "whose",
            explanation: "'whose' — expresses possession in a defining relative clause.",
            fullExplanation: "'Whose' links the teacher to the daughter (the teacher's daughter). 'Who' refers to the person directly without showing possession. 'That' also doesn't convey possession. Only 'whose' creates the possessive relationship.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 92"
          },
          {
            id: "mg-rel-def-13",
            stem: "The era ___ dinosaurs roamed the Earth fascinates many young children.",
            options: ["when", "where", "who"],
            answer: "when",
            explanation: "'when' — refers to a period of time in a defining relative clause.",
            fullExplanation: "'When' is used to refer to a time period in defining relative clauses. 'Where' refers to places. 'Who' refers to people. Since 'the era' is a time reference, 'when' is the correct relative adverb.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 60"
          },
          {
            id: "mg-rel-def-14",
            stem: "The charity ___ aims to reduce homelessness has received a large government grant.",
            options: ["whose", "who", "where"],
            answer: "whose",
            explanation: "'whose' — shows that the aims belong to the charity.",
            fullExplanation: "'Whose' can refer to things as well as people to show possession. Here, 'whose aims' means 'the charity's aims'. 'Who' is for people. 'Where' is for places. 'Whose' is the only option that shows this possessive relationship.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "mg-rel-def-15",
            stem: "The bridge ___ connects the two islands was built over a hundred years ago.",
            options: ["that", "whose", "where"],
            answer: "that",
            explanation: "'that' — refers to things in a defining relative clause, identifying the specific bridge.",
            fullExplanation: "'That' (or 'which') is used in defining clauses for things. The bridge is a thing. 'Whose' shows possession and doesn't fit. 'Where' refers to places. 'That' correctly identifies which bridge the speaker means.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 92"
          }
        ]
      },
      {
        id: "mg-rel-nondef",
        title: "Relative Clauses \u2014 Non-defining",
        tasks: [
          {
            id: "mg-rel-nondef-01",
            stem: "My grandfather, ___ is ninety-two years old, still goes jogging every morning.",
            options: ["who", "that", "which"],
            answer: "who",
            explanation: "'who' — non-defining relative clauses use 'who' for people, never 'that'.",
            fullExplanation: "Non-defining relative clauses add extra information and are set off by commas. 'Who' is used for people. 'That' is never used in non-defining clauses. 'Which' is for things, not people.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          },
          {
            id: "mg-rel-nondef-02",
            stem: "The Eiffel Tower, ___ was built in 1889, attracts millions of visitors each year.",
            options: ["which", "that", "who"],
            answer: "which",
            explanation: "'which' — non-defining relative clauses use 'which' for things, never 'that'.",
            fullExplanation: "Non-defining clauses with commas provide extra information about the noun. 'Which' refers to things. 'That' cannot be used in non-defining clauses. 'Who' is for people, not landmarks.",
            source: "Swan, M. Practical English Usage (4th ed.), §498"
          },
          {
            id: "mg-rel-nondef-03",
            stem: "Professor Chen, ___ I studied with at university, has published a groundbreaking paper.",
            options: ["who", "that", "which"],
            answer: "who",
            explanation: "'who' is the correct pronoun for people in non-defining relative clauses.",
            fullExplanation: "Non-defining clauses add optional extra information and require commas. 'Who' is used for people (Professor Chen). 'That' is never allowed in non-defining clauses. 'Which' is used for things, not people.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          },
          {
            id: "mg-rel-nondef-04",
            stem: "The painting, ___ was donated by a local collector, is now the museum's centrepiece.",
            options: ["which", "that", "whose"],
            answer: "which",
            explanation: "'which' — non-defining clauses about things use 'which', never 'that'.",
            fullExplanation: "This non-defining clause provides extra information about the painting. 'Which' is correct for things. 'That' is never used in non-defining clauses (a key rule). 'Whose' shows possession and doesn't fit the sentence structure.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 62"
          },
          {
            id: "mg-rel-nondef-05",
            stem: "My sister, ___ lives in Tokyo, is coming to visit us next month.",
            options: ["who", "that", "where"],
            answer: "who",
            explanation: "'who' — refers to people in non-defining relative clauses.",
            fullExplanation: "Non-defining clauses use 'who' for people and are enclosed by commas. 'That' is never used in non-defining clauses. 'Where' refers to places, not people. Since 'my sister' is a person, 'who' is the correct choice.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          },
          {
            id: "mg-rel-nondef-06",
            stem: "The Amazon rainforest, ___ covers over five million square kilometres, is the largest tropical forest.",
            options: ["which", "that", "who"],
            answer: "which",
            explanation: "'which' — used for things in non-defining relative clauses; 'that' is never allowed.",
            fullExplanation: "The Amazon rainforest is a thing, so 'which' is used in this non-defining clause. 'That' is grammatically incorrect in non-defining clauses. 'Who' is reserved for people.",
            source: "Swan, M. Practical English Usage (4th ed.), §498"
          },
          {
            id: "mg-rel-nondef-07",
            stem: "Dr Patel, ___ research focuses on cancer treatment, has received international recognition.",
            options: ["whose", "who", "which"],
            answer: "whose",
            explanation: "'whose' — shows possession in a non-defining relative clause (Dr Patel's research).",
            fullExplanation: "'Whose' expresses possession: Dr Patel's research. 'Who' refers to the person but doesn't show possession. 'Which' is for things. The possessive relationship between the doctor and the research requires 'whose'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          },
          {
            id: "mg-rel-nondef-08",
            stem: "The conference, ___ took place in Geneva last month, addressed global warming solutions.",
            options: ["which", "that", "who"],
            answer: "which",
            explanation: "'which' — non-defining relative clauses about events use 'which', not 'that'.",
            fullExplanation: "The conference is a thing/event, so 'which' is the correct pronoun. Non-defining clauses (with commas) never use 'that'. 'Who' is for people only.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 62"
          },
          {
            id: "mg-rel-nondef-09",
            stem: "Maria, ___ I have known since childhood, just got promoted to director.",
            options: ["who", "that", "which"],
            answer: "who",
            explanation: "'who' — refers to people in non-defining clauses; 'that' is not allowed here.",
            fullExplanation: "Non-defining clauses about people use 'who' and are set off by commas. 'That' cannot appear in non-defining clauses. 'Which' is for things, not people.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          },
          {
            id: "mg-rel-nondef-10",
            stem: "The new policy, ___ was introduced last quarter, has already improved employee retention.",
            options: ["which", "that", "whose"],
            answer: "which",
            explanation: "'which' — refers to things in non-defining clauses; 'that' is never used.",
            fullExplanation: "Non-defining clauses add extra information and use commas. 'Which' is for things (the policy). 'That' is never allowed in non-defining clauses. 'Whose' shows possession and doesn't fit this structure.",
            source: "Swan, M. Practical English Usage (4th ed.), §498"
          },
          {
            id: "mg-rel-nondef-11",
            stem: "Albert Einstein, ___ theory of relativity changed physics, was born in Germany.",
            options: ["whose", "who", "that"],
            answer: "whose",
            explanation: "'whose' — shows possession (Einstein's theory) in a non-defining clause.",
            fullExplanation: "'Whose' links Einstein to his theory (Einstein's theory of relativity). 'Who' doesn't express possession. 'That' is never used in non-defining clauses.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          },
          {
            id: "mg-rel-nondef-12",
            stem: "The River Thames, ___ flows through London, is over 340 kilometres long.",
            options: ["which", "that", "who"],
            answer: "which",
            explanation: "'which' — non-defining clauses about things use 'which', and 'that' is forbidden.",
            fullExplanation: "The River Thames is a thing, so 'which' is the correct pronoun in this non-defining clause. 'That' is not allowed in non-defining clauses. 'Who' is for people only.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 62"
          },
          {
            id: "mg-rel-nondef-13",
            stem: "Our CEO, ___ has led the company for twenty years, announced her retirement today.",
            options: ["who", "that", "which"],
            answer: "who",
            explanation: "'who' — the CEO is a person; non-defining clauses about people use 'who'.",
            fullExplanation: "Non-defining clauses about people use 'who', set off by commas. 'That' cannot be used in non-defining clauses. 'Which' refers to things, not people.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          },
          {
            id: "mg-rel-nondef-14",
            stem: "The scholarship, ___ covers tuition and accommodation, is awarded to only ten students.",
            options: ["which", "that", "whose"],
            answer: "which",
            explanation: "'which' — refers to things in non-defining relative clauses; 'that' is excluded.",
            fullExplanation: "Non-defining clauses about things use 'which' with commas. 'That' is never allowed in non-defining clauses. 'Whose' shows possession and doesn't match this sentence structure.",
            source: "Swan, M. Practical English Usage (4th ed.), §498"
          },
          {
            id: "mg-rel-nondef-15",
            stem: "The chef, ___ restaurant has three Michelin stars, trained in Paris.",
            options: ["whose", "who", "which"],
            answer: "whose",
            explanation: "'whose' — shows possession (the chef's restaurant) in a non-defining relative clause.",
            fullExplanation: "'Whose' indicates possession: the chef's restaurant. 'Who' refers to the person without expressing possession. 'Which' is for things, not people. Only 'whose' correctly links the chef to the restaurant.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          }
        ]
      },
      {
        id: "mg-ger-inf",
        title: "Gerund vs Infinitive",
        tasks: [
          {
            id: "mg-ger-inf-01",
            stem: "I don't mind ___ late if it helps the team meet the deadline.",
            options: ["working", "to work", "work"],
            answer: "working",
            explanation: "'working' — the verb 'mind' is always followed by a gerund (-ing form).",
            fullExplanation: "Certain verbs like 'mind', 'enjoy', 'avoid', and 'suggest' are followed by the gerund (-ing form). 'To work' (infinitive) is not grammatically correct after 'mind'. 'Work' (bare infinitive) also does not follow 'mind'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "mg-ger-inf-02",
            stem: "She decided ___ for the management position at the new branch.",
            options: ["to apply", "applying", "apply"],
            answer: "to apply",
            explanation: "'to apply' — the verb 'decide' is followed by the to-infinitive.",
            fullExplanation: "'Decide' is always followed by the to-infinitive. Verbs like 'decide', 'hope', 'want', 'plan', and 'promise' take the infinitive. 'Applying' (gerund) is incorrect after 'decide'. 'Apply' (bare infinitive) is also wrong.",
            source: "Swan, M. Practical English Usage (4th ed.), §296"
          },
          {
            id: "mg-ger-inf-03",
            stem: "He avoided ___ eye contact during the entire job interview.",
            options: ["making", "to make", "make"],
            answer: "making",
            explanation: "'making' — 'avoid' is always followed by a gerund.",
            fullExplanation: "'Avoid' requires the gerund (-ing form). It's one of the verbs that never takes the to-infinitive. 'To make' and 'make' are both incorrect after 'avoid'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "mg-ger-inf-04",
            stem: "They agreed ___ the terms of the new trade agreement at the summit.",
            options: ["to accept", "accepting", "accept"],
            answer: "to accept",
            explanation: "'to accept' — the verb 'agree' is followed by the to-infinitive.",
            fullExplanation: "'Agree' takes the to-infinitive, like 'decide', 'promise', and 'offer'. 'Accepting' (gerund) is not used after 'agree'. 'Accept' (bare infinitive) is also grammatically incorrect here.",
            source: "Swan, M. Practical English Usage (4th ed.), §296"
          },
          {
            id: "mg-ger-inf-05",
            stem: "I can't imagine ___ in a country where it never stops raining.",
            options: ["living", "to live", "live"],
            answer: "living",
            explanation: "'living' — 'imagine' is always followed by the gerund.",
            fullExplanation: "'Imagine' requires the gerund (-ing form). Other verbs in this category include 'enjoy', 'suggest', 'consider', and 'miss'. 'To live' and 'live' are not grammatically correct after 'imagine'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "mg-ger-inf-06",
            stem: "The company offered ___ all travel expenses for the overseas training.",
            options: ["to cover", "covering", "cover"],
            answer: "to cover",
            explanation: "'to cover' — the verb 'offer' is followed by the to-infinitive.",
            fullExplanation: "'Offer' takes the to-infinitive, like 'agree', 'promise', and 'refuse'. 'Covering' (gerund) is incorrect after 'offer'. 'Cover' (bare infinitive) is also wrong.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 26"
          },
          {
            id: "mg-ger-inf-07",
            stem: "She suggested ___ the old warehouse into a community art centre.",
            options: ["converting", "to convert", "convert"],
            answer: "converting",
            explanation: "'converting' — 'suggest' is always followed by a gerund.",
            fullExplanation: "'Suggest' requires the gerund form. Other verbs that take the gerund include 'recommend', 'consider', and 'avoid'. 'To convert' and 'convert' are not used after 'suggest'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "mg-ger-inf-08",
            stem: "He refused ___ the confidential documents without proper authorisation.",
            options: ["to release", "releasing", "release"],
            answer: "to release",
            explanation: "'to release' — the verb 'refuse' takes the to-infinitive.",
            fullExplanation: "'Refuse' is followed by the to-infinitive. Verbs expressing willingness or unwillingness (agree, refuse, offer, promise) take the infinitive. 'Releasing' and 'release' are incorrect after 'refuse'.",
            source: "Swan, M. Practical English Usage (4th ed.), §296"
          },
          {
            id: "mg-ger-inf-09",
            stem: "We are looking forward to ___ you at the annual conference next month.",
            options: ["seeing", "see", "to see"],
            answer: "seeing",
            explanation: "'seeing' — 'looking forward to' ends with a preposition, so a gerund follows.",
            fullExplanation: "In 'look forward to', the word 'to' is a preposition (not part of an infinitive), so it must be followed by a gerund. 'See' and 'to see' are incorrect because prepositions are always followed by -ing forms.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 55"
          },
          {
            id: "mg-ger-inf-10",
            stem: "The children enjoy ___ stories about ancient civilisations before bedtime.",
            options: ["reading", "to read", "read"],
            answer: "reading",
            explanation: "'reading' — 'enjoy' is always followed by the gerund.",
            fullExplanation: "'Enjoy' requires the gerund (-ing form). It never takes the to-infinitive. 'To read' and 'read' are grammatically incorrect after 'enjoy'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "mg-ger-inf-11",
            stem: "He pretended ___ asleep when his parents checked on him.",
            options: ["to be", "being", "be"],
            answer: "to be",
            explanation: "'to be' — 'pretend' is followed by the to-infinitive.",
            fullExplanation: "'Pretend' takes the to-infinitive, like 'decide', 'hope', and 'seem'. 'Being' (gerund) is incorrect after 'pretend'. 'Be' (bare infinitive) is also wrong.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 26"
          },
          {
            id: "mg-ger-inf-12",
            stem: "She keeps ___ the same mistake despite our repeated warnings.",
            options: ["making", "to make", "make"],
            answer: "making",
            explanation: "'making' — 'keep' in the sense of 'continue' is followed by a gerund.",
            fullExplanation: "'Keep' meaning 'continue doing something' requires the gerund. 'To make' and 'make' are incorrect after 'keep'. Other verbs that take gerunds include 'avoid', 'finish', and 'mind'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "mg-ger-inf-13",
            stem: "The manager promised ___ the salaries before the end of the fiscal year.",
            options: ["to review", "reviewing", "review"],
            answer: "to review",
            explanation: "'to review' — the verb 'promise' takes the to-infinitive.",
            fullExplanation: "'Promise' is followed by the to-infinitive, like 'agree', 'decide', and 'offer'. 'Reviewing' (gerund) is incorrect after 'promise'. 'Review' (bare infinitive) is also wrong.",
            source: "Swan, M. Practical English Usage (4th ed.), §296"
          },
          {
            id: "mg-ger-inf-14",
            stem: "I'm not used to ___ up so early every morning for this new job.",
            options: ["getting", "get", "to get"],
            answer: "getting",
            explanation: "'getting' — 'used to' (meaning accustomed to) is followed by a gerund because 'to' is a preposition.",
            fullExplanation: "In 'be used to', the word 'to' is a preposition, so it's followed by the gerund. This is different from 'used to + infinitive' (past habit). 'Get' and 'to get' are incorrect after 'be used to'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 55"
          },
          {
            id: "mg-ger-inf-15",
            stem: "She can't help ___ whenever she watches that comedy show on television.",
            options: ["laughing", "to laugh", "laugh"],
            answer: "laughing",
            explanation: "'laughing' — 'can't help' is always followed by a gerund, meaning 'can't stop yourself from'.",
            fullExplanation: "'Can't help' + gerund means 'can't stop doing something involuntarily.' It always takes the gerund form. 'To laugh' and 'laugh' are incorrect after 'can't help' in standard English.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 26"
          }
        ]
      },
      {
        id: "mg-quant",
        title: "Quantifiers",
        tasks: [
          {
            id: "mg-quant-01",
            stem: "There isn't ___ time left before the deadline, so we need to hurry.",
            options: ["much", "many", "few"],
            answer: "much",
            explanation: "'much' is used with uncountable nouns like 'time' in negative sentences.",
            fullExplanation: "'Much' is used with uncountable nouns in negative sentences and questions. 'Time' is uncountable. 'Many' is for countable nouns. 'Few' is also for countable nouns. Only 'much' correctly modifies 'time'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 86"
          },
          {
            id: "mg-quant-02",
            stem: "How ___ students have signed up for the advanced chemistry course?",
            options: ["many", "much", "a lot"],
            answer: "many",
            explanation: "'many' is used with countable plural nouns like 'students' in questions.",
            fullExplanation: "'Many' is used with countable plural nouns in questions and negative sentences. 'Students' is countable. 'Much' is for uncountable nouns. 'A lot' would need 'a lot of' before the noun.",
            source: "Swan, M. Practical English Usage (4th ed.), §353"
          },
          {
            id: "mg-quant-03",
            stem: "There are ___ good restaurants in this neighbourhood — we're spoilt for choice.",
            options: ["a lot of", "much", "a little"],
            answer: "a lot of",
            explanation: "'a lot of' works with both countable and uncountable nouns in affirmative sentences.",
            fullExplanation: "'A lot of' is used in affirmative sentences with both countable and uncountable nouns. 'Much' is typically used in negatives and questions, not affirmatives. 'A little' is for uncountable nouns. 'Restaurants' is countable plural.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 86"
          },
          {
            id: "mg-quant-04",
            stem: "Very ___ people attended the lecture because of the heavy snowstorm.",
            options: ["few", "little", "much"],
            answer: "few",
            explanation: "'few' is used with countable nouns to mean 'not many'; people is countable.",
            fullExplanation: "'Few' modifies countable plural nouns and implies 'not many' (a negative sense). 'Little' is for uncountable nouns. 'Much' is also for uncountable nouns. Since 'people' is countable, 'few' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §211"
          },
          {
            id: "mg-quant-05",
            stem: "We have ___ milk left — could you buy some on your way home?",
            options: ["a little", "a few", "many"],
            answer: "a little",
            explanation: "'a little' is used with uncountable nouns like 'milk' to mean 'some, but not much'.",
            fullExplanation: "'A little' modifies uncountable nouns and means 'some, but not a lot'. 'Milk' is uncountable. 'A few' is for countable nouns. 'Many' is also for countable nouns. 'A little' is the only option for uncountable 'milk'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 86"
          },
          {
            id: "mg-quant-06",
            stem: "There were ___ complaints about the new parking policy than expected.",
            options: ["fewer", "less", "little"],
            answer: "fewer",
            explanation: "'fewer' is the correct comparative for countable nouns like 'complaints'.",
            fullExplanation: "'Fewer' is the comparative form for countable nouns ('fewer complaints'). 'Less' is for uncountable nouns ('less traffic'). 'Little' is a base form, not a comparative. Since 'complaints' is countable, 'fewer' is correct.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 72"
          },
          {
            id: "mg-quant-07",
            stem: "We need to use ___ paper in the office to reduce our environmental impact.",
            options: ["less", "fewer", "few"],
            answer: "less",
            explanation: "'less' is the comparative form for uncountable nouns like 'paper'.",
            fullExplanation: "'Less' is used with uncountable nouns in comparative structures. 'Paper' (as a material) is uncountable. 'Fewer' is for countable nouns. 'Few' is not a comparative form. 'Less' is the only correct choice.",
            source: "Swan, M. Practical English Usage (4th ed.), §211"
          },
          {
            id: "mg-quant-08",
            stem: "She earns a lot of money, but she has ___ free time to enjoy it.",
            options: ["little", "few", "fewer"],
            answer: "little",
            explanation: "'little' is used with uncountable nouns like 'time' to mean 'almost none'.",
            fullExplanation: "'Little' (without 'a') modifies uncountable nouns and implies 'almost none' — a negative meaning. 'Few' is for countable nouns. 'Fewer' is a comparative form. Since 'free time' is uncountable, 'little' is correct.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 86"
          },
          {
            id: "mg-quant-09",
            stem: "Could I have ___ more minutes to finish writing this paragraph?",
            options: ["a few", "a little", "much"],
            answer: "a few",
            explanation: "'a few' is used with countable nouns like 'minutes' to mean 'some'.",
            fullExplanation: "'A few' modifies countable plural nouns and means 'some'. 'Minutes' is countable. 'A little' is for uncountable nouns. 'Much' is for uncountable nouns in negatives/questions. 'A few' is the only correct choice.",
            source: "Swan, M. Practical English Usage (4th ed.), §211"
          },
          {
            id: "mg-quant-10",
            stem: "There is too ___ noise in this open-plan office; I can't concentrate.",
            options: ["much", "many", "few"],
            answer: "much",
            explanation: "'much' is used with uncountable nouns like 'noise'; 'too much' means an excessive amount.",
            fullExplanation: "'Much' modifies uncountable nouns. 'Noise' is uncountable. 'Many' and 'few' are for countable nouns only. 'Too much noise' correctly expresses an excessive amount.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 86"
          },
          {
            id: "mg-quant-11",
            stem: "___ of the information in the report was inaccurate and had to be corrected.",
            options: ["Much", "Many", "A few"],
            answer: "Much",
            explanation: "'Much' modifies uncountable nouns; 'information' is uncountable.",
            fullExplanation: "'Much' is used with uncountable nouns. 'Information' is always uncountable in English. 'Many' and 'A few' are for countable nouns. 'Much of the information' is grammatically correct.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 72"
          },
          {
            id: "mg-quant-12",
            stem: "I have ___ friends who speak Japanese, so I'll ask one of them for advice.",
            options: ["a few", "a little", "less"],
            answer: "a few",
            explanation: "'a few' means 'some' with countable nouns like 'friends'.",
            fullExplanation: "'A few' means 'some, enough' with countable plural nouns. 'Friends' is countable. 'A little' is for uncountable nouns. 'Less' is a comparative for uncountable nouns. The positive tone ('I'll ask one') confirms 'a few' (not 'few').",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 86"
          },
          {
            id: "mg-quant-13",
            stem: "The project requires ___ resources than we initially estimated.",
            options: ["fewer", "less", "little"],
            answer: "fewer",
            explanation: "'fewer' — the comparative form for countable nouns like 'resources'.",
            fullExplanation: "'Fewer' is the correct comparative for countable plural nouns. 'Resources' is countable. 'Less' is for uncountable nouns. 'Little' is not comparative. 'Fewer resources' is grammatically correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §211"
          },
          {
            id: "mg-quant-14",
            stem: "Add ___ salt to the sauce — just a tiny pinch will be enough.",
            options: ["a little", "a few", "many"],
            answer: "a little",
            explanation: "'a little' means 'a small amount' with uncountable nouns like 'salt'.",
            fullExplanation: "'A little' modifies uncountable nouns and means 'a small amount'. 'Salt' is uncountable. 'A few' is for countable nouns. 'Many' is also for countable nouns. The context ('tiny pinch') confirms a small quantity.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 86"
          },
          {
            id: "mg-quant-15",
            stem: "There were too ___ errors in the first draft, so the editor sent it back.",
            options: ["many", "much", "little"],
            answer: "many",
            explanation: "'many' is used with countable nouns like 'errors'; 'too many' means an excessive number.",
            fullExplanation: "'Many' modifies countable plural nouns. 'Errors' is countable. 'Much' is for uncountable nouns. 'Little' is also for uncountable nouns. 'Too many errors' expresses an excessive number.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 72"
          }
        ]
      },
      {
        id: "mg-comp",
        title: "Comparative and Superlative",
        tasks: [
          {
            id: "mg-comp-01",
            stem: "This route is ___ than the motorway, but it has nicer scenery.",
            options: ["longer", "more long", "longest"],
            answer: "longer",
            explanation: "'longer' — one-syllable adjectives form comparatives with -er, not 'more'.",
            fullExplanation: "One-syllable adjectives like 'long' add -er for comparatives: 'longer'. 'More long' is incorrect because 'more' is used with adjectives of two or more syllables. 'Longest' is the superlative, not the comparative.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "mg-comp-02",
            stem: "Learning Mandarin is ___ than learning Spanish for most English speakers.",
            options: ["more difficult", "difficulter", "most difficult"],
            answer: "more difficult",
            explanation: "'more difficult' — multi-syllable adjectives use 'more' for comparatives.",
            fullExplanation: "Adjectives with three or more syllables use 'more' for comparatives. 'Difficulter' is not a word. 'Most difficult' is the superlative form. 'More difficult' correctly compares two languages.",
            source: "Swan, M. Practical English Usage (4th ed.), §138"
          },
          {
            id: "mg-comp-03",
            stem: "Mount Everest is the ___ mountain in the world.",
            options: ["highest", "higher", "more high"],
            answer: "highest",
            explanation: "'highest' — the superlative of one-syllable 'high' is formed with -est.",
            fullExplanation: "One-syllable adjectives form superlatives with -est: 'highest'. 'Higher' is comparative, not superlative. 'More high' is incorrect — one-syllable adjectives don't use 'more'. The definite article 'the' signals a superlative.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 105"
          },
          {
            id: "mg-comp-04",
            stem: "This is the ___ book I have ever read — I couldn't put it down.",
            options: ["best", "better", "most good"],
            answer: "best",
            explanation: "'best' — the superlative of 'good' is irregular: good → better → best.",
            fullExplanation: "'Good' has an irregular superlative: 'best'. 'Better' is the comparative. 'Most good' does not exist — 'good' uses irregular forms. 'The best... ever' is a common superlative structure.",
            source: "Swan, M. Practical English Usage (4th ed.), §138"
          },
          {
            id: "mg-comp-05",
            stem: "The situation is getting ___ and ___ every day.",
            options: ["worse and worse", "worst and worst", "more bad and more bad"],
            answer: "worse and worse",
            explanation: "'worse and worse' — double comparatives show progressive change; 'bad' → 'worse' (irregular).",
            fullExplanation: "Double comparatives (comparative + and + comparative) express increasing intensity. 'Bad' has an irregular comparative: 'worse'. 'Worst' is superlative, not comparative. 'More bad' doesn't exist.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "mg-comp-06",
            stem: "She is the ___ experienced member of the entire research team.",
            options: ["most", "more", "very"],
            answer: "most",
            explanation: "'most' — the superlative of multi-syllable adjectives uses 'most' before the adjective.",
            fullExplanation: "Multi-syllable adjectives like 'experienced' form superlatives with 'most'. 'More' is comparative. 'Very' is an intensifier, not a superlative marker. 'The most experienced' is correct.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 70"
          },
          {
            id: "mg-comp-07",
            stem: "The ___ you practise, the ___ you will become at playing the piano.",
            options: ["more / better", "most / best", "much / good"],
            answer: "more / better",
            explanation: "The double comparative 'the more... the better' shows parallel increase.",
            fullExplanation: "'The + comparative, the + comparative' expresses parallel change. 'More' is the comparative of 'much' and 'better' is the irregular comparative of 'good'. 'Most/best' are superlatives. 'Much/good' are base forms.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "mg-comp-08",
            stem: "Today's exam was ___ than last week's, so most students scored higher.",
            options: ["easier", "more easy", "easiest"],
            answer: "easier",
            explanation: "'easier' — two-syllable adjectives ending in -y change to -ier for comparatives.",
            fullExplanation: "Adjectives ending in -y (easy, happy, busy) form comparatives by changing -y to -ier. 'More easy' is incorrect. 'Easiest' is the superlative. 'Easier' correctly compares two exams.",
            source: "Swan, M. Practical English Usage (4th ed.), §138"
          },
          {
            id: "mg-comp-09",
            stem: "This is by far the ___ restaurant in the entire city for seafood.",
            options: ["finest", "finer", "more fine"],
            answer: "finest",
            explanation: "'finest' — one-syllable 'fine' forms its superlative with -est.",
            fullExplanation: "One-syllable adjectives add -est for superlatives. 'Fine' becomes 'finest'. 'Finer' is comparative. 'More fine' is incorrect for a one-syllable adjective. 'By far the finest' emphasises the superlative.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 105"
          },
          {
            id: "mg-comp-10",
            stem: "Public transport in Tokyo is much ___ than in many other capital cities.",
            options: ["more efficient", "efficienter", "most efficient"],
            answer: "more efficient",
            explanation: "'more efficient' — multi-syllable adjectives like 'efficient' use 'more' for comparatives.",
            fullExplanation: "'Efficient' has three syllables, so it uses 'more' for comparatives. 'Efficienter' is not a valid word. 'Most efficient' is the superlative, not the comparative. 'Much more efficient' adds emphasis.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 70"
          },
          {
            id: "mg-comp-11",
            stem: "Of all the planets in our solar system, Jupiter is the ___.",
            options: ["largest", "larger", "more large"],
            answer: "largest",
            explanation: "'largest' — one-syllable 'large' forms its superlative with -est; 'of all' signals a superlative.",
            fullExplanation: "'Of all' signals a superlative comparison. One-syllable adjectives add -est: 'largest'. 'Larger' is comparative. 'More large' is incorrect for a one-syllable adjective.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 105"
          },
          {
            id: "mg-comp-12",
            stem: "His handwriting is ___ than mine; I can barely read what he writes.",
            options: ["worse", "worst", "more bad"],
            answer: "worse",
            explanation: "'worse' — the irregular comparative of 'bad' is 'worse', not 'more bad'.",
            fullExplanation: "'Bad' has an irregular comparative: 'worse'. 'Worst' is the superlative. 'More bad' is not a valid English form. 'Worse than' correctly compares two things.",
            source: "Swan, M. Practical English Usage (4th ed.), §138"
          },
          {
            id: "mg-comp-13",
            stem: "The ___ the hotel is to the beach, the more expensive the rooms tend to be.",
            options: ["closer", "closest", "more close"],
            answer: "closer",
            explanation: "'closer' — 'the closer... the more' is a double comparative showing parallel change.",
            fullExplanation: "'The + comparative, the + comparative' structure expresses proportional change. 'Close' is one syllable, so it takes -er: 'closer'. 'Closest' is superlative. 'More close' is incorrect for a one-syllable adjective.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "mg-comp-14",
            stem: "She is slightly ___ than her twin brother, though the difference is barely noticeable.",
            options: ["taller", "tallest", "more tall"],
            answer: "taller",
            explanation: "'taller' — one-syllable adjectives form comparatives with -er.",
            fullExplanation: "One-syllable adjectives like 'tall' add -er for comparatives. 'Tallest' is superlative. 'More tall' is incorrect — 'more' is only used with longer adjectives. 'Slightly taller' correctly modifies the comparison.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 70"
          },
          {
            id: "mg-comp-15",
            stem: "That was the ___ interesting documentary I have watched all year.",
            options: ["most", "more", "much"],
            answer: "most",
            explanation: "'most' — the superlative of multi-syllable 'interesting' uses 'most'.",
            fullExplanation: "Multi-syllable adjectives like 'interesting' form superlatives with 'most'. 'More' is comparative. 'Much' is an intensifier, not a superlative marker. 'The most interesting... all year' is a superlative structure.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 105"
          }
        ]
      },
      {
        id: "mg-adj-order",
        title: "Adjective Order",
        tasks: [
          {
            id: "mg-adj-order-01",
            stem: "She bought a ___ Italian leather handbag at the market.",
            options: ["beautiful", "leather beautiful", "Italian beautiful"],
            answer: "beautiful",
            explanation: "'beautiful' — opinion adjectives come before origin and material adjectives.",
            fullExplanation: "The standard adjective order in English is: opinion → size → age → shape → colour → origin → material → purpose. 'Beautiful' (opinion) must precede 'Italian' (origin) and 'leather' (material). Placing them in any other order sounds unnatural.",
            source: "Swan, M. Practical English Usage (4th ed.), §12"
          },
          {
            id: "mg-adj-order-02",
            stem: "They live in a ___ old stone cottage in the countryside.",
            options: ["lovely", "stone lovely", "old lovely"],
            answer: "lovely",
            explanation: "'lovely' — opinion comes first in adjective order, before age and material.",
            fullExplanation: "The correct order is: opinion (lovely) → age (old) → material (stone). 'Stone lovely' and 'old lovely' violate standard adjective order. Opinion adjectives always come before descriptive ones.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 10"
          },
          {
            id: "mg-adj-order-03",
            stem: "He was wearing a ___ blue cotton shirt to the garden party.",
            options: ["smart", "cotton smart", "blue smart"],
            answer: "smart",
            explanation: "'smart' — opinion adjectives precede colour and material in English adjective order.",
            fullExplanation: "Adjective order: opinion (smart) → colour (blue) → material (cotton). Opinion always comes first. 'Cotton smart' and 'blue smart' place material or colour before opinion, which is incorrect.",
            source: "Swan, M. Practical English Usage (4th ed.), §12"
          },
          {
            id: "mg-adj-order-04",
            stem: "The museum displayed a ___ ancient Greek vase behind protective glass.",
            options: ["magnificent", "Greek magnificent", "ancient magnificent"],
            answer: "magnificent",
            explanation: "'magnificent' — opinion adjectives precede age and origin in adjective order.",
            fullExplanation: "Standard order: opinion (magnificent) → age (ancient) → origin (Greek). Opinion always comes first. Placing 'Greek' or 'ancient' before the opinion adjective sounds unnatural in English.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 97"
          },
          {
            id: "mg-adj-order-05",
            stem: "We sat around a ___ round wooden table during the workshop.",
            options: ["large", "wooden large", "round large"],
            answer: "large",
            explanation: "'large' — size adjectives come before shape and material.",
            fullExplanation: "Adjective order: size (large) → shape (round) → material (wooden). Size precedes shape and material. 'Wooden large' and 'round large' violate this order.",
            source: "Swan, M. Practical English Usage (4th ed.), §12"
          },
          {
            id: "mg-adj-order-06",
            stem: "She received a ___ silver necklace as a birthday present from her grandmother.",
            options: ["delicate little", "little delicate", "silver delicate"],
            answer: "delicate little",
            explanation: "'delicate little' follows standard adjective order: opinion before size.",
            fullExplanation: "Adjective order: opinion (delicate) → size (little) → material (silver). 'Little delicate' reverses size and opinion. 'Silver delicate' places material before opinion. The correct order puts opinion first.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 10"
          },
          {
            id: "mg-adj-order-07",
            stem: "The architect designed a ___ modern glass building for the city centre.",
            options: ["stunning", "glass stunning", "modern stunning"],
            answer: "stunning",
            explanation: "'stunning' — opinion comes first, before age and material adjectives.",
            fullExplanation: "Standard order: opinion (stunning) → age/style (modern) → material (glass). 'Glass stunning' and 'modern stunning' incorrectly place descriptive adjectives before the opinion adjective.",
            source: "Swan, M. Practical English Usage (4th ed.), §12"
          },
          {
            id: "mg-adj-order-08",
            stem: "He drives an ___ red sports car that turns heads everywhere.",
            options: ["expensive", "red expensive", "sports expensive"],
            answer: "expensive",
            explanation: "'expensive' — opinion/value adjectives come before colour and purpose adjectives.",
            fullExplanation: "Adjective order: opinion (expensive) → colour (red) → purpose (sports). Opinion must come first. 'Red expensive' and 'sports expensive' break the natural English order.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 97"
          },
          {
            id: "mg-adj-order-09",
            stem: "The chef prepared a ___ French onion soup for the dinner guests.",
            options: ["delicious traditional", "traditional delicious", "French delicious"],
            answer: "delicious traditional",
            explanation: "'delicious traditional' is correct: opinion before style, both before origin.",
            fullExplanation: "Adjective order: opinion (delicious) → style/age (traditional) → origin (French). 'Traditional delicious' reverses opinion and style. 'French delicious' places origin before opinion. The correct sequence starts with opinion.",
            source: "Swan, M. Practical English Usage (4th ed.), §12"
          },
          {
            id: "mg-adj-order-10",
            stem: "She carried a ___ black plastic suitcase through the busy airport terminal.",
            options: ["huge", "plastic huge", "black huge"],
            answer: "huge",
            explanation: "'huge' — size adjectives come before colour and material in adjective order.",
            fullExplanation: "Adjective order: size (huge) → colour (black) → material (plastic). Size comes before colour and material. 'Plastic huge' and 'black huge' violate this standard order.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 10"
          },
          {
            id: "mg-adj-order-11",
            stem: "They adopted a ___ young tabby cat from the local animal shelter.",
            options: ["friendly", "tabby friendly", "young friendly"],
            answer: "friendly",
            explanation: "'friendly' — opinion adjectives come before age and type adjectives.",
            fullExplanation: "Adjective order: opinion (friendly) → age (young) → type (tabby). Opinion must come first. 'Tabby friendly' and 'young friendly' place descriptive adjectives before opinion, which is incorrect.",
            source: "Swan, M. Practical English Usage (4th ed.), §12"
          },
          {
            id: "mg-adj-order-12",
            stem: "The antique shop had a ___ Victorian mahogany writing desk for sale.",
            options: ["gorgeous", "mahogany gorgeous", "Victorian gorgeous"],
            answer: "gorgeous",
            explanation: "'gorgeous' — opinion precedes age and material in standard adjective order.",
            fullExplanation: "Standard order: opinion (gorgeous) → age/era (Victorian) → material (mahogany) → purpose (writing). Opinion adjectives always lead. 'Mahogany gorgeous' and 'Victorian gorgeous' are unnatural.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 97"
          },
          {
            id: "mg-adj-order-13",
            stem: "He bought a pair of ___ brown leather walking boots for the hike.",
            options: ["sturdy", "leather sturdy", "brown sturdy"],
            answer: "sturdy",
            explanation: "'sturdy' — opinion/quality adjectives come before colour, material, and purpose.",
            fullExplanation: "Adjective order: opinion (sturdy) → colour (brown) → material (leather) → purpose (walking). Opinion adjectives precede all physical descriptors. The other options violate standard English adjective order.",
            source: "Swan, M. Practical English Usage (4th ed.), §12"
          },
          {
            id: "mg-adj-order-14",
            stem: "We stayed in a ___ old Japanese wooden inn during our trip to Kyoto.",
            options: ["charming", "Japanese charming", "wooden charming"],
            answer: "charming",
            explanation: "'charming' — opinion adjectives precede age, origin, and material.",
            fullExplanation: "Standard order: opinion (charming) → age (old) → origin (Japanese) → material (wooden). Opinion comes first. 'Japanese charming' and 'wooden charming' break the natural English adjective sequence.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 10"
          },
          {
            id: "mg-adj-order-15",
            stem: "She wore an ___ long silk dress to the charity gala event.",
            options: ["elegant", "silk elegant", "long elegant"],
            answer: "elegant",
            explanation: "'elegant' — opinion adjectives come before size/length and material.",
            fullExplanation: "Adjective order: opinion (elegant) → size/length (long) → material (silk). Opinion must come first. 'Silk elegant' and 'long elegant' place physical descriptors before the opinion adjective, violating standard order.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 97"
          }
        ]
      },
      {
        id: "mg-tag",
        title: "Tag Questions",
        tasks: [
          {
            id: "mg-tag-01",
            stem: "She doesn't like spicy food, ___?",
            options: ["does she", "doesn't she", "did she"],
            answer: "does she",
            explanation: "'does she' — a negative statement takes a positive tag question.",
            fullExplanation: "Tag questions mirror the auxiliary verb but switch polarity. The statement is negative ('doesn't'), so the tag must be positive ('does she'). 'Doesn't she' would create a double negative. 'Did she' uses the wrong tense.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 51"
          },
          {
            id: "mg-tag-02",
            stem: "You have been to Paris before, ___?",
            options: ["haven't you", "have you", "don't you"],
            answer: "haven't you",
            explanation: "'haven't you' — a positive statement with 'have' takes a negative tag with 'haven't'.",
            fullExplanation: "The statement is positive ('have been'), so the tag must be negative ('haven't you'). 'Have you' would incorrectly repeat the positive. 'Don't you' uses the wrong auxiliary — the statement uses 'have', not 'do'.",
            source: "Swan, M. Practical English Usage (4th ed.), §487"
          },
          {
            id: "mg-tag-03",
            stem: "The train leaves at six o'clock, ___?",
            options: ["doesn't it", "does it", "isn't it"],
            answer: "doesn't it",
            explanation: "'doesn't it' — present simple positive takes a negative tag with 'doesn't'.",
            fullExplanation: "The statement is positive present simple ('leaves'), so the tag uses the negative form of the auxiliary 'do': 'doesn't it'. 'Does it' would be a positive tag for a positive statement, which is incorrect. 'Isn't it' uses the wrong auxiliary.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 51"
          },
          {
            id: "mg-tag-04",
            stem: "They won't be joining us for dinner tonight, ___?",
            options: ["will they", "won't they", "don't they"],
            answer: "will they",
            explanation: "'will they' — a negative statement with 'won't' takes a positive tag 'will they'.",
            fullExplanation: "The statement is negative ('won't be joining'), so the tag must be positive ('will they'). 'Won't they' creates a double negative. 'Don't they' uses the wrong auxiliary — the statement uses 'will', not 'do'.",
            source: "Swan, M. Practical English Usage (4th ed.), §487"
          },
          {
            id: "mg-tag-05",
            stem: "He can swim very well, ___?",
            options: ["can't he", "can he", "couldn't he"],
            answer: "can't he",
            explanation: "'can't he' — a positive statement with 'can' takes a negative tag.",
            fullExplanation: "The statement is positive ('can swim'), so the tag must be negative ('can't he'). 'Can he' is positive, which doesn't contrast correctly. 'Couldn't he' uses the past tense of 'can', which doesn't match the present tense.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 51"
          },
          {
            id: "mg-tag-06",
            stem: "She has already finished the assignment, ___?",
            options: ["hasn't she", "has she", "didn't she"],
            answer: "hasn't she",
            explanation: "'hasn't she' — a positive statement with 'has' takes a negative tag.",
            fullExplanation: "The statement is positive ('has finished'), so the tag is negative ('hasn't she'). 'Has she' would be a positive tag. 'Didn't she' uses the wrong auxiliary and tense — the statement uses present perfect 'has', not past simple 'did'.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 34"
          },
          {
            id: "mg-tag-07",
            stem: "We should book the tickets in advance, ___?",
            options: ["shouldn't we", "should we", "don't we"],
            answer: "shouldn't we",
            explanation: "'shouldn't we' — a positive statement with 'should' takes a negative tag.",
            fullExplanation: "The statement is positive ('should book'), so the tag must be negative ('shouldn't we'). 'Should we' is positive. 'Don't we' uses the wrong auxiliary — the statement uses 'should', not 'do'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 51"
          },
          {
            id: "mg-tag-08",
            stem: "There are plenty of seats available, ___?",
            options: ["aren't there", "are there", "isn't there"],
            answer: "aren't there",
            explanation: "'aren't there' — a positive statement with 'there are' takes the negative tag 'aren't there'.",
            fullExplanation: "When 'there' is the subject, tags use 'there' as the pronoun. The statement is positive ('there are'), so the tag is negative ('aren't there'). 'Are there' is positive. 'Isn't there' uses singular, but 'are' is plural.",
            source: "Swan, M. Practical English Usage (4th ed.), §487"
          },
          {
            id: "mg-tag-09",
            stem: "You wouldn't mind helping me with this, ___?",
            options: ["would you", "wouldn't you", "do you"],
            answer: "would you",
            explanation: "'would you' — a negative statement with 'wouldn't' takes a positive tag.",
            fullExplanation: "The statement is negative ('wouldn't mind'), so the tag must be positive ('would you'). 'Wouldn't you' creates a double negative. 'Do you' uses the wrong auxiliary — the statement uses 'would', not 'do'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 51"
          },
          {
            id: "mg-tag-10",
            stem: "The children are playing in the garden, ___?",
            options: ["aren't they", "are they", "don't they"],
            answer: "aren't they",
            explanation: "'aren't they' — a positive statement with 'are' takes a negative tag.",
            fullExplanation: "The statement is positive present continuous ('are playing'), so the tag is negative ('aren't they'). 'Are they' is positive. 'Don't they' uses the wrong auxiliary — the statement uses 'are', not 'do'.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 34"
          },
          {
            id: "mg-tag-11",
            stem: "I am on the guest list, ___?",
            options: ["aren't I", "am I not", "amn't I"],
            answer: "aren't I",
            explanation: "'aren't I' — this is the standard tag question form for 'I am' in modern English.",
            fullExplanation: "The tag for 'I am' is 'aren't I' in standard modern English. 'Am I not' is grammatically correct but overly formal and rarely used as a tag. 'Amn't I' is dialectal and not standard. 'Aren't I' is the accepted form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 51"
          },
          {
            id: "mg-tag-12",
            stem: "He had never been abroad before that trip, ___?",
            options: ["had he", "hadn't he", "did he"],
            answer: "had he",
            explanation: "'had he' — 'never' makes the statement negative, so the tag is positive.",
            fullExplanation: "The word 'never' makes the statement negative. Negative statements take positive tags. The auxiliary is 'had', so the tag is 'had he'. 'Hadn't he' would create a double negative. 'Did he' uses the wrong auxiliary.",
            source: "Swan, M. Practical English Usage (4th ed.), §487"
          },
          {
            id: "mg-tag-13",
            stem: "Nobody called while I was away, ___?",
            options: ["did they", "didn't they", "did nobody"],
            answer: "did they",
            explanation: "'did they' — 'nobody' makes the statement negative, so the tag is positive with 'they'.",
            fullExplanation: "'Nobody' makes the statement negative. The tag must be positive. For indefinite pronouns like 'nobody/somebody', the tag pronoun is 'they'. 'Didn't they' would create a double negative. 'Did nobody' is not a valid tag form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 51"
          },
          {
            id: "mg-tag-14",
            stem: "Let's take a break and grab some coffee, ___?",
            options: ["shall we", "will we", "do we"],
            answer: "shall we",
            explanation: "'shall we' — 'Let's' takes the tag 'shall we' as a fixed expression.",
            fullExplanation: "The tag for 'Let's...' is always 'shall we'. This is a fixed pattern in English. 'Will we' and 'do we' are not standard tags for 'Let's' suggestions.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 34"
          },
          {
            id: "mg-tag-15",
            stem: "The film was absolutely brilliant, ___?",
            options: ["wasn't it", "was it", "isn't it"],
            answer: "wasn't it",
            explanation: "'wasn't it' — a positive past simple statement with 'was' takes a negative tag.",
            fullExplanation: "The statement is positive past simple ('was'), so the tag must be negative ('wasn't it'). 'Was it' is positive. 'Isn't it' uses the present tense, but the statement is past tense.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 51"
          }
        ]
      },
      {
        id: "mg-inversion",
        title: "Inversion",
        tasks: [
          {
            id: "mg-inversion-01",
            stem: "___ had the plane taken off when the pilot noticed a warning light.",
            options: ["Hardly", "Not only", "Although"],
            answer: "Hardly",
            explanation: "'Hardly' triggers inversion with past perfect: Hardly had + subject + past participle.",
            fullExplanation: "Negative adverbials like 'Hardly', 'Scarcely', and 'No sooner' trigger subject-auxiliary inversion. 'Hardly had the plane taken off when...' means 'almost immediately after'. 'Not only' requires a different structure (Not only... but also). 'Although' does not trigger inversion.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 80"
          },
          {
            id: "mg-inversion-02",
            stem: "Never ___ I seen such a breathtaking sunset over the ocean.",
            options: ["have", "had", "did"],
            answer: "have",
            explanation: "'have' — 'Never' triggers inversion: Never + have + I + past participle (present perfect).",
            fullExplanation: "'Never have I seen' uses present perfect inversion to express that this has not happened before now. 'Had' would create past perfect (appropriate for past narratives). 'Did' would require the base form ('Never did I see'). Present perfect fits the ongoing life experience.",
            source: "Swan, M. Practical English Usage (4th ed.), §302"
          },
          {
            id: "mg-inversion-03",
            stem: "Not only ___ she speak five languages, but she also plays three instruments.",
            options: ["does", "did", "is"],
            answer: "does",
            explanation: "'does' — 'Not only' triggers inversion: Not only + does + subject + base verb.",
            fullExplanation: "'Not only' triggers subject-auxiliary inversion. Present simple requires 'does': 'Not only does she speak'. 'Did' would shift to past tense. 'Is' doesn't work with the base verb 'speak'. The structure is: Not only + auxiliary + subject + verb.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 80"
          },
          {
            id: "mg-inversion-04",
            stem: "Seldom ___ the professor cancel a lecture during the entire academic year.",
            options: ["did", "does", "has"],
            answer: "did",
            explanation: "'did' — 'Seldom' with past simple triggers inversion: Seldom + did + subject + base verb.",
            fullExplanation: "'Seldom' triggers inversion like other negative adverbials. Past simple: 'Seldom did the professor cancel'. 'Does' would be present tense. 'Has' would create present perfect. The past time reference ('during the entire academic year') makes 'did' correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §302"
          },
          {
            id: "mg-inversion-05",
            stem: "No sooner ___ we arrived at the campsite than it started to pour with rain.",
            options: ["had", "have", "did"],
            answer: "had",
            explanation: "'had' — 'No sooner' triggers inversion with past perfect: No sooner had + subject + past participle.",
            fullExplanation: "'No sooner... than' uses past perfect inversion: 'No sooner had we arrived than...' This means 'immediately after'. 'Have' would be present perfect. 'Did' would require 'No sooner did we arrive', which is non-standard with 'no sooner... than'.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 80"
          },
          {
            id: "mg-inversion-06",
            stem: "Under no circumstances ___ employees share their passwords with others.",
            options: ["should", "will", "do"],
            answer: "should",
            explanation: "'should' — 'Under no circumstances' triggers inversion with a modal verb for strong prohibition.",
            fullExplanation: "'Under no circumstances' is a negative adverbial that triggers inversion. 'Should' expresses obligation/prohibition: 'Under no circumstances should employees...' 'Will' implies prediction rather than prohibition. 'Do' is weaker and less natural in this formal context.",
            source: "Swan, M. Practical English Usage (4th ed.), §302"
          },
          {
            id: "mg-inversion-07",
            stem: "Not until the results were published ___ the scientists realise their error.",
            options: ["did", "do", "have"],
            answer: "did",
            explanation: "'did' — 'Not until' triggers inversion in the main clause: Not until... did + subject + base verb.",
            fullExplanation: "'Not until' triggers inversion in the main clause. Past simple: 'Not until... did the scientists realise'. 'Do' would be present tense. 'Have' would create present perfect. The past context requires 'did'.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 80"
          },
          {
            id: "mg-inversion-08",
            stem: "Rarely ___ a debut novel receive such widespread critical acclaim.",
            options: ["does", "did", "has"],
            answer: "does",
            explanation: "'does' — 'Rarely' triggers present simple inversion: Rarely + does + subject + base verb.",
            fullExplanation: "'Rarely' is a negative adverbial triggering inversion. Present simple uses 'does': 'Rarely does a debut novel receive...' 'Did' shifts to past. 'Has' creates present perfect. The general statement suits present simple.",
            source: "Swan, M. Practical English Usage (4th ed.), §302"
          },
          {
            id: "mg-inversion-09",
            stem: "Only after finishing the report ___ he realise that a key section was missing.",
            options: ["did", "does", "had"],
            answer: "did",
            explanation: "'did' — 'Only after' triggers inversion in the main clause with past simple.",
            fullExplanation: "'Only after' triggers subject-auxiliary inversion in the main clause. Past simple: 'Only after finishing... did he realise'. 'Does' is present tense. 'Had' would create past perfect. The narrative past context makes 'did' correct.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 80"
          },
          {
            id: "mg-inversion-10",
            stem: "At no point ___ the spokesperson admit that the company had made an error.",
            options: ["did", "does", "was"],
            answer: "did",
            explanation: "'did' — 'At no point' triggers past simple inversion: At no point + did + subject + base verb.",
            fullExplanation: "'At no point' is a negative adverbial triggering inversion. Past simple: 'At no point did the spokesperson admit'. 'Does' is present tense. 'Was' requires a different structure. The past narrative requires 'did'.",
            source: "Swan, M. Practical English Usage (4th ed.), §302"
          },
          {
            id: "mg-inversion-11",
            stem: "Little ___ she know that the interview would change her career forever.",
            options: ["did", "does", "has"],
            answer: "did",
            explanation: "'did' — 'Little' triggers inversion: Little + did + subject + base verb in past narratives.",
            fullExplanation: "'Little did she know' is a common inverted structure meaning 'she didn't know'. 'Does' is present tense. 'Has' creates present perfect. Past narrative context requires 'did'.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 80"
          },
          {
            id: "mg-inversion-12",
            stem: "In no way ___ this result suggest that the experiment was a failure.",
            options: ["does", "did", "is"],
            answer: "does",
            explanation: "'does' — 'In no way' triggers present simple inversion: In no way + does + subject + base verb.",
            fullExplanation: "'In no way' triggers inversion. Present simple: 'In no way does this result suggest'. 'Did' shifts to past. 'Is' doesn't fit with the main verb 'suggest'. The present tense discussion makes 'does' correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §302"
          },
          {
            id: "mg-inversion-13",
            stem: "Only when the lights went out ___ the audience fall completely silent.",
            options: ["did", "does", "had"],
            answer: "did",
            explanation: "'did' — 'Only when' triggers inversion in the main clause with past simple.",
            fullExplanation: "'Only when' triggers subject-auxiliary inversion in the main clause. Past simple: 'Only when... did the audience fall silent'. 'Does' is present tense. 'Had' creates past perfect. The past narrative makes 'did' correct.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 80"
          },
          {
            id: "mg-inversion-14",
            stem: "Scarcely ___ the ceremony begun when a thunderstorm interrupted the proceedings.",
            options: ["had", "has", "did"],
            answer: "had",
            explanation: "'had' — 'Scarcely' triggers past perfect inversion: Scarcely had + subject + past participle.",
            fullExplanation: "'Scarcely' works like 'Hardly' and 'No sooner' — it triggers past perfect inversion. 'Scarcely had the ceremony begun when...' 'Has' is present perfect. 'Did' would require 'Scarcely did... begin', which is non-standard with 'scarcely... when'.",
            source: "Swan, M. Practical English Usage (4th ed.), §302"
          },
          {
            id: "mg-inversion-15",
            stem: "Nowhere in the world ___ you find a more diverse ecosystem than the coral reef.",
            options: ["will", "do", "are"],
            answer: "will",
            explanation: "'will' — 'Nowhere' triggers inversion with a modal: Nowhere + will + subject + base verb.",
            fullExplanation: "'Nowhere' is a negative adverbial that triggers inversion. 'Will' expresses a general truth about possibility: 'Nowhere will you find...' 'Do' is less natural in this context. 'Are' doesn't fit with the base verb 'find'. 'Will' best conveys the emphatic meaning.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 80"
          }
        ]
      },
      {
        id: "mg-connectives",
        title: "Connectives / Discourse Markers",
        tasks: [
          {
            id: "mg-connectives-01",
            stem: "The hotel was expensive. ___, the service was excellent and worth every penny.",
            options: ["However", "Despite", "Although"],
            answer: "However",
            explanation: "'However' introduces a contrasting independent clause, often preceded by a full stop or semicolon.",
            fullExplanation: "'However' is used to introduce a contrast between two independent sentences. 'Despite' requires a noun or gerund ('despite the cost'). 'Although' introduces a subordinate clause, not a new sentence. 'However' correctly connects two contrasting ideas.",
            source: "Swan, M. Practical English Usage (4th ed.), §157"
          },
          {
            id: "mg-connectives-02",
            stem: "___ the heavy rain, the outdoor festival went ahead as planned.",
            options: ["Despite", "However", "Therefore"],
            answer: "Despite",
            explanation: "'Despite' is a preposition followed by a noun phrase, meaning 'in spite of'.",
            fullExplanation: "'Despite' is followed by a noun phrase ('the heavy rain'). 'However' cannot directly precede a noun phrase — it connects clauses. 'Therefore' shows cause/result, not contrast. Only 'Despite' fits before a noun phrase.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 112"
          },
          {
            id: "mg-connectives-03",
            stem: "___ she was exhausted, she stayed up to finish writing the report.",
            options: ["Although", "Despite", "However"],
            answer: "Although",
            explanation: "'Although' introduces a subordinate clause with a subject and verb.",
            fullExplanation: "'Although' introduces a concessive clause with subject + verb ('she was exhausted'). 'Despite' requires a noun or gerund, not a clause. 'However' connects independent sentences, not subordinate clauses. 'Although' is the correct conjunction here.",
            source: "Swan, M. Practical English Usage (4th ed.), §71"
          },
          {
            id: "mg-connectives-04",
            stem: "The study found a clear link between sleep and productivity; ___, the researchers recommended later school start times.",
            options: ["therefore", "although", "despite"],
            answer: "therefore",
            explanation: "'therefore' introduces a logical conclusion or result from the previous statement.",
            fullExplanation: "'Therefore' signals a conclusion or result. It connects two independent clauses logically. 'Although' introduces contrast, not result. 'Despite' requires a noun phrase. 'Therefore' is the only option that shows cause and effect.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 46"
          },
          {
            id: "mg-connectives-05",
            stem: "The new software is user-friendly. ___, it offers advanced features for professionals.",
            options: ["Moreover", "Although", "Despite"],
            answer: "Moreover",
            explanation: "'Moreover' adds information to strengthen a point — it means 'in addition'.",
            fullExplanation: "'Moreover' adds supporting information to the previous statement. It means 'in addition' or 'furthermore'. 'Although' introduces contrast. 'Despite' requires a noun phrase. 'Moreover' correctly adds a complementary idea.",
            source: "Swan, M. Practical English Usage (4th ed.), §157"
          },
          {
            id: "mg-connectives-06",
            stem: "He didn't get the promotion. ___, he remained motivated and kept working hard.",
            options: ["Nevertheless", "Therefore", "Moreover"],
            answer: "Nevertheless",
            explanation: "'Nevertheless' means 'despite that' and introduces an unexpected continuation.",
            fullExplanation: "'Nevertheless' shows contrast — something unexpected happened despite the previous situation. 'Therefore' shows result, not contrast. 'Moreover' adds information. 'Nevertheless' correctly signals that his motivation was surprising given the setback.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 46"
          },
          {
            id: "mg-connectives-07",
            stem: "The temperature dropped below zero; ___, all outdoor activities were cancelled.",
            options: ["consequently", "although", "moreover"],
            answer: "consequently",
            explanation: "'consequently' shows that the cancellation was a direct result of the temperature drop.",
            fullExplanation: "'Consequently' signals a result or consequence. The cancellation directly followed the temperature drop. 'Although' shows contrast. 'Moreover' adds information. 'Consequently' is the logical choice for cause-and-effect.",
            source: "Swan, M. Practical English Usage (4th ed.), §157"
          },
          {
            id: "mg-connectives-08",
            stem: "___ being the youngest candidate, she won the election by a wide margin.",
            options: ["Despite", "Although", "However"],
            answer: "Despite",
            explanation: "'Despite' + gerund/noun phrase introduces a contrast: 'Despite being the youngest...'",
            fullExplanation: "'Despite' is followed by a gerund ('being') or a noun phrase. 'Although' needs a full clause with a subject ('Although she was'). 'However' connects independent clauses. 'Despite being' is the correct structure.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 112"
          },
          {
            id: "mg-connectives-09",
            stem: "The company cut costs significantly. ___, profits continued to decline.",
            options: ["Nonetheless", "Therefore", "Furthermore"],
            answer: "Nonetheless",
            explanation: "'Nonetheless' means 'in spite of that' — profits declined despite cost cuts, which is unexpected.",
            fullExplanation: "'Nonetheless' (like 'nevertheless') introduces an unexpected outcome despite the previous action. 'Therefore' shows expected result. 'Furthermore' adds information. 'Nonetheless' correctly signals the surprising continuation of declining profits.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 46"
          },
          {
            id: "mg-connectives-10",
            stem: "The vaccine is safe and effective. ___, it is now available free of charge to all citizens.",
            options: ["Furthermore", "However", "Although"],
            answer: "Furthermore",
            explanation: "'Furthermore' adds an additional supporting point about the vaccine.",
            fullExplanation: "'Furthermore' means 'in addition' and adds another positive detail. 'However' introduces contrast. 'Although' introduces a subordinate clause. 'Furthermore' correctly builds on the previous positive statement.",
            source: "Swan, M. Practical English Usage (4th ed.), §157"
          },
          {
            id: "mg-connectives-11",
            stem: "The roads were icy and visibility was poor; ___, the driver decided to continue the journey.",
            options: ["nevertheless", "therefore", "moreover"],
            answer: "nevertheless",
            explanation: "'nevertheless' means 'despite that' — the driver continued despite dangerous conditions.",
            fullExplanation: "'Nevertheless' shows contrast between the dangerous conditions and the decision to continue. 'Therefore' would mean the driver stopped because of the conditions. 'Moreover' adds information. 'Nevertheless' captures the unexpected decision.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 46"
          },
          {
            id: "mg-connectives-12",
            stem: "___ the project was over budget, the final product exceeded all quality expectations.",
            options: ["Although", "Despite", "Therefore"],
            answer: "Although",
            explanation: "'Although' introduces a concessive subordinate clause with a subject and verb.",
            fullExplanation: "'Although' connects a subordinate clause ('the project was over budget') with a main clause. 'Despite' would need a noun phrase ('Despite the project being over budget'). 'Therefore' shows result, not contrast.",
            source: "Swan, M. Practical English Usage (4th ed.), §71"
          },
          {
            id: "mg-connectives-13",
            stem: "Demand for electric vehicles is growing rapidly; ___, manufacturers are increasing production capacity.",
            options: ["accordingly", "although", "despite"],
            answer: "accordingly",
            explanation: "'accordingly' shows that increased production is a logical response to growing demand.",
            fullExplanation: "'Accordingly' means 'as a result' or 'in response to'. Manufacturers increased production because of growing demand. 'Although' shows contrast. 'Despite' requires a noun phrase. 'Accordingly' correctly shows the logical response.",
            source: "Swan, M. Practical English Usage (4th ed.), §157"
          },
          {
            id: "mg-connectives-14",
            stem: "The evidence strongly supports the hypothesis. ___, further research is needed to confirm it.",
            options: ["Nonetheless", "Therefore", "Moreover"],
            answer: "Nonetheless",
            explanation: "'Nonetheless' introduces an unexpected caveat — more research is needed despite strong evidence.",
            fullExplanation: "'Nonetheless' signals contrast: despite strong evidence, more research is still needed. 'Therefore' would mean research is needed because of the strong evidence, which is illogical. 'Moreover' adds a parallel point. 'Nonetheless' captures the surprising qualification.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 46"
          },
          {
            id: "mg-connectives-15",
            stem: "She speaks French fluently; ___, she has a deep understanding of French literature and culture.",
            options: ["in addition", "however", "despite"],
            answer: "in addition",
            explanation: "'in addition' adds a complementary point about her knowledge of French culture.",
            fullExplanation: "'In addition' means 'furthermore' — it adds a related supporting detail. 'However' introduces contrast. 'Despite' requires a noun phrase. 'In addition' correctly builds on her language skills with cultural knowledge.",
            source: "Swan, M. Practical English Usage (4th ed.), §157"
          }
        ]
      }
    ]
  },

  /* ─── PREPOSITIONS & PARTICLES ─── */
  {
    id: "prepositions",
    title: "Prepositions & Particles",
    preset: "prepositions",
    subtopics: [
      {
        id: "prep-time",
        title: "Prepositions of time",
        tasks: [
          {
            id: "prep-time-01",
            stem: "The museum opens ___ nine o'clock every morning.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At' is used with specific clock times.",
            fullExplanation: "We use 'at' for exact times of day (at 9 o'clock, at noon, at midnight). 'In' is for longer periods (months, years). 'On' is for days and dates.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-02",
            stem: "The company was founded ___ 1987 by two college students.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "'In' is used with years such as 1987.",
            fullExplanation: "We use 'in' with years (in 1987), months (in March), and longer periods (in the 20th century). 'On' is for specific days/dates, and 'at' is for precise times.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-03",
            stem: "The lecture is scheduled ___ Friday afternoon.",
            options: ["on", "at", "in"],
            answer: "on",
            explanation: "'On' is used with specific days like Friday.",
            fullExplanation: "We use 'on' for days of the week (on Friday) and dates (on 5th May). 'At' is reserved for precise times. 'In' is for months, years, and parts of the day without a specific day.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-04",
            stem: "Most birds migrate south ___ winter to escape the cold.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "'In' is used with seasons such as winter.",
            fullExplanation: "We use 'in' with seasons (in winter, in summer). 'On' would require a specific day, and 'at' is for precise times or certain fixed expressions (at Christmas).",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-time-05",
            stem: "The astronauts will return to Earth ___ the end of June.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At' is used in the fixed expression 'at the end of'.",
            fullExplanation: "The phrase 'at the end of' is a fixed time expression. 'In the end' means 'finally' and has a different meaning. 'On' does not collocate with 'the end of' for time.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-06",
            stem: "She always visits her grandmother ___ Christmas Day.",
            options: ["on", "at", "in"],
            answer: "on",
            explanation: "'On' is used with specific holiday days like Christmas Day.",
            fullExplanation: "When we refer to a specific day — including named holiday days — we use 'on' (on Christmas Day, on New Year's Eve). 'At' is used with the holiday period in general (at Christmas). 'In' is incorrect here.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-time-07",
            stem: "The train to Glasgow departs ___ noon sharp.",
            options: ["at", "on", "in"],
            answer: "at",
            explanation: "'At' is used with noon, midnight, and specific times.",
            fullExplanation: "We use 'at' for precise points in time: at noon, at midnight, at 6 pm. 'On' is for days/dates. 'In' is for longer periods.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-08",
            stem: "Technology changed dramatically ___ the 21st century.",
            options: ["in", "at", "on"],
            answer: "in",
            explanation: "'In' is used with centuries and long periods of time.",
            fullExplanation: "We use 'in' with centuries (in the 21st century), decades (in the 1990s), and other extended periods. 'At' and 'on' do not collocate with centuries.",
            source: "Yule, G. Oxford Practice Grammar, Unit 99"
          },
          {
            id: "prep-time-09",
            stem: "Our team meeting starts ___ a quarter past ten.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At' is used with precise clock times like a quarter past ten.",
            fullExplanation: "Clock times always take 'at': at a quarter past ten, at half past three. 'In' is for months, years, seasons. 'On' is for days and dates.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-10",
            stem: "The cherry trees in Kyoto blossom ___ spring every year.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "'In' is used with seasons such as spring.",
            fullExplanation: "Seasons take 'in': in spring, in autumn. 'On' requires a specific day. 'At' is for fixed time points or certain holiday expressions.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-time-11",
            stem: "The deadline for applications falls ___ the 15th of September.",
            options: ["on", "at", "in"],
            answer: "on",
            explanation: "'On' is used with specific dates like the 15th of September.",
            fullExplanation: "Specific dates require 'on': on the 15th of September, on March 3rd. 'At' is for times. 'In' is for months or years without a specific date.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-12",
            stem: "Many restaurants close ___ midnight in this town.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At' is used with midnight.",
            fullExplanation: "We say 'at midnight' and 'at noon' — both are specific points in time. 'In' and 'on' are incorrect with midnight.",
            source: "Yule, G. Oxford Practice Grammar, Unit 99"
          },
          {
            id: "prep-time-13",
            stem: "The new highway is expected to open ___ early 2026.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "'In' is used with years and periods like early 2026.",
            fullExplanation: "We use 'in' when referring to a year or a general part of a year (in early 2026, in late March). 'On' would require a specific date. 'At' is for precise times.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-time-14",
            stem: "The children play outside ___ the afternoon when the weather is nice.",
            options: ["in", "on", "at"],
            answer: "in",
            explanation: "'In' is used with parts of the day: in the afternoon.",
            fullExplanation: "We use 'in' with parts of the day: in the morning, in the afternoon, in the evening. Exception: 'at night'. 'On' needs a specific day. 'At' is for times and the exception 'at night'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-15",
            stem: "We always have a big family dinner ___ New Year's Eve.",
            options: ["on", "in", "at"],
            answer: "on",
            explanation: "'On' is used with specific named days like New Year's Eve.",
            fullExplanation: "Named days — including holidays that specify 'Day' or 'Eve' — take 'on': on New Year's Eve, on Christmas Day. 'At' is used with the general holiday period (at New Year). 'In' is incorrect here.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-time-16",
            stem: "The concert begins ___ half past seven this evening.",
            options: null,
            answer: "at",
            explanation: "'At' is used with precise clock times.",
            fullExplanation: "We always use 'at' with specific times of day (at half past seven, at 3 pm). No other preposition works here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-17",
            stem: "The Renaissance began ___ Italy during the 14th century.",
            options: null,
            answer: "in",
            explanation: "'In' is used with centuries and historical periods.",
            fullExplanation: "We use 'in' for centuries (in the 14th century) and longer time periods. This sentence also uses 'in' for the place (Italy), but the blank refers to the place preposition here — however the time preposition 'during' is already given, so 'in' fills the place gap for Italy.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-18",
            stem: "Electricity consumption tends to peak ___ the evening hours.",
            options: null,
            answer: "during",
            explanation: "'During' is used to indicate throughout a period like the evening hours.",
            fullExplanation: "We use 'during' to indicate something happens throughout a named period (during the evening hours, during the summer). 'In' is also possible here.",
            source: "Swan, M. Practical English Usage (4th ed.), §162",
            alternateAnswers: ["in"]
          },
          {
            id: "prep-time-19",
            stem: "She has been working at the hospital ___ 2015.",
            options: null,
            answer: "since",
            explanation: "'Since' is used with a specific starting point in time, here 2015.",
            fullExplanation: "We use 'since' with a specific point in time to show when something started (since 2015, since Monday). 'From' is possible in some contexts but usually needs an end point.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119",
            alternateAnswers: ["from"]
          },
          {
            id: "prep-time-20",
            stem: "The exam results will be published ___ two weeks.",
            options: null,
            answer: "in",
            explanation: "'In' means 'after a period of time from now' — in two weeks.",
            fullExplanation: "We use 'in' to express a future point: in two weeks = two weeks from now. 'Within' is also valid, meaning before two weeks elapse. 'After' changes the meaning slightly.",
            source: "Yule, G. Oxford Practice Grammar, Unit 99",
            alternateAnswers: ["within"]
          },
          {
            id: "prep-time-21",
            stem: "The old cathedral was built ___ the Middle Ages.",
            options: null,
            answer: "during",
            explanation: "'During' indicates a period within which the event happened — during the Middle Ages.",
            fullExplanation: "We use 'during' + a named period to indicate when something happened. 'In' is also commonly used with historical periods.",
            source: "Swan, M. Practical English Usage (4th ed.), §162",
            alternateAnswers: ["in"]
          },
          {
            id: "prep-time-22",
            stem: "He promised to finish the report ___ Friday at the latest.",
            options: null,
            answer: "by",
            explanation: "'By' means no later than — by Friday.",
            fullExplanation: "We use 'by' to mean 'no later than a deadline'. 'Before' is also acceptable, meaning at some point prior to Friday. 'On' would mean exactly on Friday, which is a slightly different meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119",
            alternateAnswers: ["before", "on"]
          },
          {
            id: "prep-time-23",
            stem: "The factory operates around the clock ___ Monday to Saturday.",
            options: null,
            answer: "from",
            explanation: "'From' is used with time ranges — from Monday to Saturday.",
            fullExplanation: "We use 'from … to' to express a range of time. No other preposition fits this pattern naturally.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-time-24",
            stem: "We don't usually get much rain ___ August in this region.",
            options: null,
            answer: "in",
            explanation: "'In' is used with months such as August.",
            fullExplanation: "Months always take 'in': in August, in December. 'During' is also acceptable to emphasise the period throughout.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119",
            alternateAnswers: ["during"]
          },
          {
            id: "prep-time-25",
            stem: "The pharmacist said to take the medicine three times a day ___ meals.",
            options: null,
            answer: "after",
            explanation: "'After' indicates the medicine should be taken following meals.",
            fullExplanation: "We use 'after' to indicate sequence: after meals means once you have finished eating. 'Before' and 'with' are also possible depending on medical instruction, but 'after meals' is the standard phrase.",
            source: "Yule, G. Oxford Practice Grammar, Unit 99",
            alternateAnswers: ["before", "with", "between"]
          },
          {
            id: "prep-time-26",
            stem: "The temperature can drop below zero ___ night in the desert.",
            options: null,
            answer: "at",
            explanation: "'At' is the correct preposition in the fixed expression 'at night'.",
            fullExplanation: "'At night' is a fixed expression — we do not say 'in night' or 'on night'. This is an exception to the pattern of using 'in' with parts of the day.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-27",
            stem: "They have lived in this village ___ more than forty years.",
            options: null,
            answer: "for",
            explanation: "'For' is used with a duration of time — for more than forty years.",
            fullExplanation: "We use 'for' + a period of time to say how long something lasts (for forty years, for two hours). 'Since' requires a starting point, not a duration.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119"
          },
          {
            id: "prep-time-28",
            stem: "The bakery is open every day ___ Sunday.",
            options: null,
            answer: "except",
            explanation: "'Except' excludes Sunday from the days the bakery is open.",
            fullExplanation: "We use 'except' to indicate an exclusion — every day except Sunday. 'But' can also serve this function informally. 'Apart from' works too.",
            source: "Swan, M. Practical English Usage (4th ed.), §449",
            alternateAnswers: ["but", "besides"]
          },
          {
            id: "prep-time-29",
            stem: "Please submit your assignment ___ the end of the week.",
            options: null,
            answer: "by",
            explanation: "'By' means no later than — by the end of the week.",
            fullExplanation: "'By the end of the week' means before or at the end of the week (deadline). 'Before' is also acceptable, emphasising completion prior to that point. 'At' would mean exactly at that moment.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 119",
            alternateAnswers: ["before", "at"]
          },
          {
            id: "prep-time-30",
            stem: "The bridge was completed ___ just under three years.",
            options: null,
            answer: "in",
            explanation: "'In' expresses the time taken to complete something — in just under three years.",
            fullExplanation: "We use 'in' to say how long it took to do something: completed in three years. 'Within' is also possible, implying it was done before the three-year mark.",
            source: "Yule, G. Oxford Practice Grammar, Unit 99",
            alternateAnswers: ["within"]
          }
        ]
      },
      {
        id: "prep-place",
        title: "Prepositions of place/movement",
        tasks: [
          {
            id: "prep-place-01",
            stem: "She waited for her friend ___ the bus stop for twenty minutes.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At' is used for specific points or locations like a bus stop.",
            fullExplanation: "We use 'at' for specific points/locations (at the bus stop, at the door). 'In' suggests inside an enclosed space. 'On' suggests a surface.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121"
          },
          {
            id: "prep-place-02",
            stem: "The children are playing ___ the garden right now.",
            options: ["in", "at", "on"],
            answer: "in",
            explanation: "'In' is used for enclosed or bounded areas like a garden.",
            fullExplanation: "We use 'in' for enclosed spaces and areas (in the garden, in the room). 'At' would suggest a general location point. 'On' implies a surface.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121"
          },
          {
            id: "prep-place-03",
            stem: "Please leave the documents ___ my desk before you go.",
            options: ["on", "in", "at"],
            answer: "on",
            explanation: "'On' is used for surfaces like a desk.",
            fullExplanation: "We use 'on' for surfaces (on the desk, on the table, on the floor). 'In' would mean inside the desk (a drawer). 'At' indicates a general location, not a surface.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121"
          },
          {
            id: "prep-place-04",
            stem: "The hikers walked ___ the forest for several hours.",
            options: ["through", "across", "along"],
            answer: "through",
            explanation: "'Through' indicates movement within and from one side to the other of a three-dimensional space like a forest.",
            fullExplanation: "'Through' is used for movement in a three-dimensional space (through the forest, through the tunnel). 'Across' is for flat surfaces. 'Along' means following the length of something.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-place-05",
            stem: "The cat jumped ___ the open window and landed on the sofa.",
            options: ["through", "across", "along"],
            answer: "through",
            explanation: "'Through' is used for movement via an opening like a window.",
            fullExplanation: "We use 'through' for passing via an opening or gap (through the window, through the door). 'Across' implies movement over a surface. 'Along' means following a path.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 125"
          },
          {
            id: "prep-place-06",
            stem: "The tourists walked ___ the bridge to take photographs of the river.",
            options: ["across", "through", "into"],
            answer: "across",
            explanation: "'Across' is used for movement from one side to the other of a flat surface like a bridge.",
            fullExplanation: "'Across' indicates movement from one side to the other of a surface (across the bridge, across the road). 'Through' is for enclosed spaces. 'Into' means entering.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-place-07",
            stem: "He drove ___ the small town without stopping.",
            options: ["through", "into", "from"],
            answer: "through",
            explanation: "'Through' indicates passing from one end to the other of the town.",
            fullExplanation: "'Through' means entering one side and exiting the other (through the town). 'Into' means entering but not necessarily exiting. 'From' indicates origin.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 125"
          },
          {
            id: "prep-place-08",
            stem: "The jogger ran ___ the river path every morning before work.",
            options: ["along", "through", "across"],
            answer: "along",
            explanation: "'Along' means following the length of something like a river path.",
            fullExplanation: "'Along' indicates movement following the length of a line or path (along the river, along the corridor). 'Through' implies being inside something. 'Across' means from one side to the other.",
            source: "Yule, G. Oxford Practice Grammar, Unit 100"
          },
          {
            id: "prep-place-09",
            stem: "She stepped ___ the taxi and gave the driver the address.",
            options: ["into", "in", "on"],
            answer: "into",
            explanation: "'Into' indicates movement from outside to inside, as when entering a taxi.",
            fullExplanation: "'Into' shows directional movement — entering a space (into the taxi, into the building). 'In' indicates a static position (already inside). 'On' is for surfaces.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 125"
          },
          {
            id: "prep-place-10",
            stem: "The ball rolled ___ the hill and into the neighbour's yard.",
            options: ["down", "across", "through"],
            answer: "down",
            explanation: "'Down' indicates movement from a higher to a lower position on the hill.",
            fullExplanation: "'Down' shows downward movement along a slope (down the hill). 'Across' means from side to side. 'Through' implies passing through an enclosed space.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-place-11",
            stem: "We sailed ___ the island but didn't stop there.",
            options: ["past", "into", "along"],
            answer: "past",
            explanation: "'Past' means going by without stopping, as in sailing past the island.",
            fullExplanation: "'Past' indicates movement going by something without stopping (past the island, past the school). 'Into' means entering. 'Along' means following the length of.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 125"
          },
          {
            id: "prep-place-12",
            stem: "The smoke rose ___ the chimney and disappeared into the sky.",
            options: ["out of", "from", "off"],
            answer: "out of",
            explanation: "'Out of' indicates movement from inside to outside the chimney.",
            fullExplanation: "'Out of' shows movement from inside an enclosed space to the outside (out of the chimney, out of the box). 'From' indicates origin generally. 'Off' means leaving a surface.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-place-13",
            stem: "The paintings are displayed ___ the walls of the main gallery.",
            options: ["on", "in", "at"],
            answer: "on",
            explanation: "'On' is used for items attached to a surface like a wall.",
            fullExplanation: "We use 'on' for things on a surface, including walls (on the wall, on the ceiling). 'In' would mean inside the wall. 'At' is too vague for this context.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121"
          },
          {
            id: "prep-place-14",
            stem: "The climbers slowly made their way ___ the steep mountain trail.",
            options: ["up", "across", "past"],
            answer: "up",
            explanation: "'Up' indicates movement from lower to higher along the mountain trail.",
            fullExplanation: "'Up' indicates ascending movement (up the trail, up the stairs). 'Across' means from one side to the other. 'Past' means going by without stopping.",
            source: "Yule, G. Oxford Practice Grammar, Unit 100"
          },
          {
            id: "prep-place-15",
            stem: "The new supermarket is located ___ the corner of Elm Street and Oak Avenue.",
            options: ["at", "in", "on"],
            answer: "at",
            explanation: "'At' is used for specific points such as the corner of two streets.",
            fullExplanation: "We use 'at' for specific points or intersections (at the corner, at the crossroads). 'On' can mean along a street (on Elm Street) but not at an intersection. 'In' is for enclosed areas.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121"
          },
          {
            id: "prep-place-16",
            stem: "There is a beautiful fountain ___ the middle of the town square.",
            options: null,
            answer: "in",
            explanation: "'In' is used for positions within an area — in the middle of.",
            fullExplanation: "'In the middle of' is a fixed expression for location within a space. No other preposition is standard here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121"
          },
          {
            id: "prep-place-17",
            stem: "The spy slipped quietly ___ the room before anyone noticed.",
            options: null,
            answer: "out of",
            explanation: "'Out of' indicates leaving an enclosed space — out of the room.",
            fullExplanation: "'Out of' shows movement from inside to outside (out of the room). 'From' is also possible in some contexts but is less specific about the enclosed space.",
            source: "Swan, M. Practical English Usage (4th ed.), §449",
            alternateAnswers: ["from"]
          },
          {
            id: "prep-place-18",
            stem: "We could see a small village ___ the distance from the hilltop.",
            options: null,
            answer: "in",
            explanation: "'In' is used in the fixed expression 'in the distance'.",
            fullExplanation: "'In the distance' is a fixed phrase meaning far away but visible. No other preposition is standard here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121"
          },
          {
            id: "prep-place-19",
            stem: "The dog jumped ___ the sofa to greet its owner.",
            options: null,
            answer: "off",
            explanation: "'Off' indicates movement away from a surface — off the sofa.",
            fullExplanation: "'Off' means leaving a surface (off the sofa, off the table). 'From' is less precise but possible.",
            source: "Swan, M. Practical English Usage (4th ed.), §449",
            alternateAnswers: ["from"]
          },
          {
            id: "prep-place-20",
            stem: "They swam ___ the lake to reach the island on the other side.",
            options: null,
            answer: "across",
            explanation: "'Across' indicates movement from one side to the other — across the lake.",
            fullExplanation: "'Across' is used for crossing a surface or area (across the lake). 'Over' is also possible when swimming is implied. 'Through' would imply being submerged.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 125",
            alternateAnswers: ["over"]
          },
          {
            id: "prep-place-21",
            stem: "The cat was hiding ___ the bed where nobody could reach it.",
            options: null,
            answer: "under",
            explanation: "'Under' indicates a position below something — under the bed.",
            fullExplanation: "'Under' means below and often covered or concealed (under the bed). 'Beneath' is a more formal synonym.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121",
            alternateAnswers: ["beneath", "underneath"]
          },
          {
            id: "prep-place-22",
            stem: "The plane flew ___ the Atlantic Ocean on its way to New York.",
            options: null,
            answer: "over",
            explanation: "'Over' indicates movement above and across — over the Atlantic Ocean.",
            fullExplanation: "'Over' means above and from one side to the other (over the ocean). 'Across' is also possible for large areas.",
            source: "Swan, M. Practical English Usage (4th ed.), §449",
            alternateAnswers: ["across"]
          },
          {
            id: "prep-place-23",
            stem: "She placed the letter carefully ___ the envelope and sealed it.",
            options: null,
            answer: "in",
            explanation: "'In' indicates placement inside an enclosed space — in the envelope.",
            fullExplanation: "We use 'in' for putting something inside a container or enclosed space (in the envelope, in the box). 'Into' is also valid as it emphasises the motion of placing.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121",
            alternateAnswers: ["into", "inside"]
          },
          {
            id: "prep-place-24",
            stem: "The pharmacy is just ___ the street from the hospital.",
            options: null,
            answer: "across",
            explanation: "'Across' is used in the expression 'across the street from' meaning on the opposite side.",
            fullExplanation: "'Across the street from' means on the other side. 'Over' can also be used informally. 'Down' would mean further along the same side.",
            source: "Yule, G. Oxford Practice Grammar, Unit 100",
            alternateAnswers: ["down", "over"]
          },
          {
            id: "prep-place-25",
            stem: "The vines grow ___ the wall of the old stone cottage.",
            options: null,
            answer: "up",
            explanation: "'Up' indicates upward growth along the wall.",
            fullExplanation: "'Up' indicates vertical movement along a surface (up the wall). 'Along' is also possible if the growth is horizontal. 'On' indicates static position.",
            source: "Swan, M. Practical English Usage (4th ed.), §449",
            alternateAnswers: ["along", "on", "over"]
          },
          {
            id: "prep-place-26",
            stem: "He walked ___ the building twice before finding the entrance.",
            options: null,
            answer: "around",
            explanation: "'Around' indicates movement circling the building.",
            fullExplanation: "'Around' means circling or going along the outside of something (around the building). 'Round' is a common variant.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 125",
            alternateAnswers: ["round"]
          },
          {
            id: "prep-place-27",
            stem: "The train passes ___ several tunnels on the way to the coast.",
            options: null,
            answer: "through",
            explanation: "'Through' indicates movement from one end to the other inside the tunnels.",
            fullExplanation: "'Through' is used for movement within an enclosed passage (through tunnels, through a corridor). No other preposition captures this movement accurately.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 125"
          },
          {
            id: "prep-place-28",
            stem: "The little girl hid ___ her mother during the thunderstorm.",
            options: null,
            answer: "behind",
            explanation: "'Behind' indicates a position at the back of someone — behind her mother.",
            fullExplanation: "'Behind' means at the back of, using something or someone as cover (behind her mother). This is a natural position for seeking shelter.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 121"
          },
          {
            id: "prep-place-29",
            stem: "The helicopter hovered ___ the accident site for several minutes.",
            options: null,
            answer: "over",
            explanation: "'Over' indicates a position directly above the accident site.",
            fullExplanation: "'Over' means above, often implying coverage of the area below (over the site). 'Above' is also correct, with a slightly more formal register.",
            source: "Swan, M. Practical English Usage (4th ed.), §449",
            alternateAnswers: ["above"]
          },
          {
            id: "prep-place-30",
            stem: "We walked ___ the park and enjoyed the autumn leaves.",
            options: null,
            answer: "through",
            explanation: "'Through' indicates movement within and across the park.",
            fullExplanation: "'Through' means entering one side and moving toward the other (through the park). 'Across' is also valid if the park is relatively open. 'Around' implies circling the perimeter.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 125",
            alternateAnswers: ["across", "around"]
          }
        ]
      },
      {
        id: "prep-adj",
        title: "Prepositions after adjectives",
        tasks: [
          {
            id: "prep-adj-01",
            stem: "Many children are afraid ___ the dark.",
            options: ["of", "from", "about"],
            answer: "of",
            explanation: "'Afraid of' is the fixed adjective-preposition combination.",
            fullExplanation: "'Afraid of' is a fixed collocation (afraid of the dark, afraid of spiders). 'From' and 'about' do not collocate with 'afraid'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-02",
            stem: "She is very interested ___ marine biology and coral reefs.",
            options: ["in", "on", "about"],
            answer: "in",
            explanation: "'Interested in' is the fixed adjective-preposition combination.",
            fullExplanation: "'Interested in' is a fixed collocation. 'Interested on' is grammatically incorrect. 'Interested about' is non-standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-03",
            stem: "He has always been good ___ solving complex mathematical problems.",
            options: ["at", "in", "with"],
            answer: "at",
            explanation: "'Good at' is used for skills and abilities.",
            fullExplanation: "'Good at' is the standard collocation for describing skill or ability (good at maths, good at cooking). 'Good in' and 'good with' have different meanings in specific contexts.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-adj-04",
            stem: "The manager is responsible ___ training all new employees.",
            options: ["for", "of", "to"],
            answer: "for",
            explanation: "'Responsible for' is the correct adjective-preposition combination.",
            fullExplanation: "'Responsible for' means having the duty to deal with something. 'Responsible to' means accountable to a person. 'Responsible of' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-05",
            stem: "Her parents are very proud ___ her academic achievements.",
            options: ["of", "about", "for"],
            answer: "of",
            explanation: "'Proud of' is the fixed adjective-preposition combination.",
            fullExplanation: "'Proud of' is the standard collocation (proud of someone, proud of something). 'Proud about' is non-standard. 'Proud for' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-06",
            stem: "The village is famous ___ its handmade pottery and ceramics.",
            options: ["for", "of", "about"],
            answer: "for",
            explanation: "'Famous for' is the correct adjective-preposition combination.",
            fullExplanation: "'Famous for' is the standard collocation meaning well known because of something. 'Famous of' and 'famous about' are incorrect.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-adj-07",
            stem: "I'm not keen ___ horror films, but I enjoy thrillers.",
            options: ["on", "of", "for"],
            answer: "on",
            explanation: "'Keen on' means enthusiastic about something.",
            fullExplanation: "'Keen on' is a fixed collocation meaning enthusiastic about or fond of (keen on sport, keen on music). 'Keen of' and 'keen for' are not standard in this meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-08",
            stem: "The students were bored ___ the long lecture on statistics.",
            options: ["with", "of", "from"],
            answer: "with",
            explanation: "'Bored with' is the standard adjective-preposition combination.",
            fullExplanation: "'Bored with' and 'bored of' are both used, but 'bored with' is the traditional standard form. 'Bored from' is incorrect.",
            source: "Yule, G. Oxford Practice Grammar, Unit 104"
          },
          {
            id: "prep-adj-09",
            stem: "The police are aware ___ the increase in cybercrime cases.",
            options: ["of", "about", "with"],
            answer: "of",
            explanation: "'Aware of' is the fixed adjective-preposition combination.",
            fullExplanation: "'Aware of' is the standard collocation (aware of the problem, aware of the risks). 'Aware about' is non-standard. 'Aware with' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-10",
            stem: "Fresh fruit is essential ___ a balanced and healthy diet.",
            options: ["for", "to", "of"],
            answer: "for",
            explanation: "'Essential for' is used when describing necessity for a purpose.",
            fullExplanation: "'Essential for' means necessary for a purpose (essential for health, essential for growth). 'Essential to' is also used with a slightly different nuance.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-adj-11",
            stem: "The documentary is similar ___ the one we watched last month.",
            options: ["to", "with", "as"],
            answer: "to",
            explanation: "'Similar to' is the correct adjective-preposition combination.",
            fullExplanation: "'Similar to' is the standard collocation (similar to something). 'Similar with' is non-standard. 'Similar as' is incorrect — the correct parallel structure uses 'the same as'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-12",
            stem: "This brand of coffee is very popular ___ students in the UK.",
            options: ["with", "to", "for"],
            answer: "with",
            explanation: "'Popular with' indicates a group that likes something.",
            fullExplanation: "'Popular with' is the standard collocation when mentioning the group (popular with students, popular with tourists). 'Popular among' is also correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-adj-13",
            stem: "She was disappointed ___ her exam results this semester.",
            options: ["with", "of", "for"],
            answer: "with",
            explanation: "'Disappointed with' is used when expressing dissatisfaction with a result.",
            fullExplanation: "'Disappointed with' is the standard collocation for results or outcomes. 'Disappointed in' is used for people. 'Disappointed of' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-14",
            stem: "Regular exercise is beneficial ___ both physical and mental health.",
            options: ["for", "to", "of"],
            answer: "for",
            explanation: "'Beneficial for' describes something helpful for a purpose.",
            fullExplanation: "'Beneficial for' and 'beneficial to' are both correct. 'Beneficial of' is incorrect. 'For' is more common in everyday usage.",
            source: "Yule, G. Oxford Practice Grammar, Unit 104"
          },
          {
            id: "prep-adj-15",
            stem: "The teacher was angry ___ the students for cheating on the test.",
            options: ["with", "at", "to"],
            answer: "with",
            explanation: "'Angry with' is used when directing anger at a person.",
            fullExplanation: "'Angry with' is standard when the object is a person (angry with someone). 'Angry at' is used in American English and for situations. 'Angry to' is not used with a person.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-16",
            stem: "The explorers were amazed ___ the sheer size of the ancient ruins.",
            options: null,
            answer: "by",
            explanation: "'Amazed by' expresses wonder caused by something impressive.",
            fullExplanation: "'Amazed by' and 'amazed at' are both correct when expressing astonishment caused by something.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130",
            alternateAnswers: ["at"]
          },
          {
            id: "prep-adj-17",
            stem: "He is completely dependent ___ his parents for financial support.",
            options: null,
            answer: "on",
            explanation: "'Dependent on' is the fixed adjective-preposition combination.",
            fullExplanation: "'Dependent on' is a fixed collocation meaning relying on someone or something. 'Upon' is a formal variant.",
            source: "Swan, M. Practical English Usage (4th ed.), §449",
            alternateAnswers: ["upon"]
          },
          {
            id: "prep-adj-18",
            stem: "The whole town was shocked ___ the sudden closure of the factory.",
            options: null,
            answer: "by",
            explanation: "'Shocked by' indicates the cause of the shock — by the closure.",
            fullExplanation: "'Shocked by' is the standard collocation when identifying the cause. 'Shocked at' is also used.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130",
            alternateAnswers: ["at"]
          },
          {
            id: "prep-adj-19",
            stem: "Are you satisfied ___ the quality of the new software update?",
            options: null,
            answer: "with",
            explanation: "'Satisfied with' is the fixed adjective-preposition combination.",
            fullExplanation: "'Satisfied with' is a fixed collocation (satisfied with the service, satisfied with the result). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-20",
            stem: "This documentary is different ___ anything I have seen before.",
            options: null,
            answer: "from",
            explanation: "'Different from' is the standard adjective-preposition combination.",
            fullExplanation: "'Different from' is standard in British and American English. 'Different to' is common in British English. 'Different than' is used in American English.",
            source: "Swan, M. Practical English Usage (4th ed.), §155",
            alternateAnswers: ["to", "than"]
          },
          {
            id: "prep-adj-21",
            stem: "The hikers were tired ___ walking in the rain all day.",
            options: null,
            answer: "of",
            explanation: "'Tired of' means weary of or fed up with an activity.",
            fullExplanation: "'Tired of' means fed up with something (tired of walking, tired of waiting). 'Tired from' means physically exhausted because of something — both are valid here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130",
            alternateAnswers: ["from"]
          },
          {
            id: "prep-adj-22",
            stem: "The new intern is very enthusiastic ___ learning new skills.",
            options: null,
            answer: "about",
            explanation: "'Enthusiastic about' is the fixed adjective-preposition combination.",
            fullExplanation: "'Enthusiastic about' is the standard collocation (enthusiastic about a project, enthusiastic about learning). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-23",
            stem: "She feels guilty ___ not visiting her elderly neighbour more often.",
            options: null,
            answer: "about",
            explanation: "'Guilty about' expresses regret over an action or inaction.",
            fullExplanation: "'Guilty about' is the standard collocation for feeling remorse. 'Guilty of' has a legal meaning (found guilty of a crime) and is different in context.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-adj-24",
            stem: "The scientists are confident ___ finding a solution within a year.",
            options: null,
            answer: "of",
            explanation: "'Confident of' expresses certainty about an outcome.",
            fullExplanation: "'Confident of' means sure about something happening (confident of success). 'Confident about' and 'confident in' are also used.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130",
            alternateAnswers: ["about", "in"]
          },
          {
            id: "prep-adj-25",
            stem: "The old bridge is no longer safe ___ heavy vehicles to cross.",
            options: null,
            answer: "for",
            explanation: "'Safe for' describes suitability for a particular group or purpose.",
            fullExplanation: "'Safe for' is the standard collocation when indicating who or what something is safe for (safe for children, safe for consumption). No other preposition is standard.",
            source: "Yule, G. Oxford Practice Grammar, Unit 104"
          },
          {
            id: "prep-adj-26",
            stem: "He was jealous ___ his colleague's promotion to senior manager.",
            options: null,
            answer: "of",
            explanation: "'Jealous of' is the fixed adjective-preposition combination.",
            fullExplanation: "'Jealous of' is the standard collocation (jealous of someone's success). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-27",
            stem: "This exercise is suitable ___ beginners who have little experience.",
            options: null,
            answer: "for",
            explanation: "'Suitable for' is the standard adjective-preposition combination.",
            fullExplanation: "'Suitable for' means appropriate for a particular purpose or group (suitable for beginners). No other preposition is standard.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-adj-28",
            stem: "The residents are worried ___ the proposed construction of a new motorway.",
            options: null,
            answer: "about",
            explanation: "'Worried about' is the fixed adjective-preposition combination.",
            fullExplanation: "'Worried about' is the standard collocation (worried about the future, worried about health). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-29",
            stem: "The young artist is capable ___ producing stunning realistic portraits.",
            options: null,
            answer: "of",
            explanation: "'Capable of' is the fixed adjective-preposition combination.",
            fullExplanation: "'Capable of' is a fixed collocation meaning having the ability to do something (capable of great things). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 130"
          },
          {
            id: "prep-adj-30",
            stem: "The fans were excited ___ the announcement of the world tour.",
            options: null,
            answer: "about",
            explanation: "'Excited about' expresses enthusiasm regarding something.",
            fullExplanation: "'Excited about' is the standard collocation (excited about a trip, excited about the news). 'Excited by' is also valid when something causes the excitement.",
            source: "Yule, G. Oxford Practice Grammar, Unit 104",
            alternateAnswers: ["by"]
          }
        ]
      },
      {
        id: "prep-verb",
        title: "Prepositions after verbs",
        tasks: [
          {
            id: "prep-verb-01",
            stem: "The outcome of the project depends ___ the amount of funding received.",
            options: ["on", "in", "from"],
            answer: "on",
            explanation: "'Depend on' is the fixed verb-preposition combination.",
            fullExplanation: "'Depend on' is a fixed collocation meaning to be determined by something. 'Depend in' and 'depend from' are incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-02",
            stem: "I completely agree ___ your suggestion to postpone the meeting.",
            options: ["with", "to", "on"],
            answer: "with",
            explanation: "'Agree with' is used when you share someone's opinion or approve of a suggestion.",
            fullExplanation: "'Agree with' means to share the same opinion (agree with someone). 'Agree to' means to accept a proposal. 'Agree on' means to reach a decision together.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-03",
            stem: "The committee consists ___ twelve members from different departments.",
            options: ["of", "in", "with"],
            answer: "of",
            explanation: "'Consist of' means to be made up of something.",
            fullExplanation: "'Consist of' is a fixed collocation meaning to be composed of (consists of twelve members). 'Consist in' means 'to have as a main feature' — a different meaning. 'Consist with' is incorrect.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-verb-04",
            stem: "Poor diet and lack of exercise can result ___ serious health problems.",
            options: ["in", "to", "from"],
            answer: "in",
            explanation: "'Result in' means to cause or lead to an outcome.",
            fullExplanation: "'Result in' means to cause (result in health problems). 'Result from' means to be caused by — the opposite direction. 'Result to' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-05",
            stem: "He apologised ___ arriving late to the important client presentation.",
            options: ["for", "about", "of"],
            answer: "for",
            explanation: "'Apologise for' is the standard verb-preposition combination.",
            fullExplanation: "'Apologise for' is the fixed collocation (apologise for being late, apologise for the mistake). 'Apologise about' is non-standard. 'Apologise of' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-06",
            stem: "The researchers are concentrating ___ developing a new vaccine.",
            options: ["on", "in", "at"],
            answer: "on",
            explanation: "'Concentrate on' means to focus attention on something.",
            fullExplanation: "'Concentrate on' is a fixed collocation meaning to direct attention toward (concentrate on the task). 'Concentrate in' and 'concentrate at' are incorrect.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-verb-07",
            stem: "She applied ___ a scholarship to study environmental science abroad.",
            options: ["for", "to", "at"],
            answer: "for",
            explanation: "'Apply for' means to make a formal request for something like a scholarship.",
            fullExplanation: "'Apply for' means to request something formally (apply for a job, apply for a visa). 'Apply to' means to submit an application to an institution. 'Apply at' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-08",
            stem: "The detective insisted ___ interviewing all the witnesses personally.",
            options: ["on", "in", "for"],
            answer: "on",
            explanation: "'Insist on' means to demand firmly that something is done.",
            fullExplanation: "'Insist on' is the fixed collocation (insist on doing something). 'Insist in' is incorrect. 'Insist for' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-09",
            stem: "Don't forget to pay ___ the groceries before leaving the shop.",
            options: ["for", "of", "on"],
            answer: "for",
            explanation: "'Pay for' means to give money in exchange for goods or services.",
            fullExplanation: "'Pay for' means to hand over money for something purchased (pay for the groceries). 'Pay of' is incorrect. 'Pay on' is not used in this context.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-verb-10",
            stem: "The witness refused to comment ___ the details of the investigation.",
            options: ["on", "for", "with"],
            answer: "on",
            explanation: "'Comment on' means to express an opinion about something.",
            fullExplanation: "'Comment on' is the fixed collocation (comment on a situation, comment on the news). 'Comment for' and 'comment with' are incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-11",
            stem: "The company invested heavily ___ renewable energy technologies.",
            options: ["in", "on", "for"],
            answer: "in",
            explanation: "'Invest in' is the standard verb-preposition combination.",
            fullExplanation: "'Invest in' means to put money into something (invest in technology, invest in property). 'Invest on' and 'invest for' are incorrect.",
            source: "Yule, G. Oxford Practice Grammar, Unit 104"
          },
          {
            id: "prep-verb-12",
            stem: "She complained ___ the noise from the construction site next door.",
            options: ["about", "for", "on"],
            answer: "about",
            explanation: "'Complain about' means to express dissatisfaction about something.",
            fullExplanation: "'Complain about' is the standard collocation (complain about the food, complain about the service). 'Complain of' is used for symptoms. 'Complain for' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-13",
            stem: "The charity provides food and shelter ___ homeless people in the city.",
            options: ["for", "to", "with"],
            answer: "for",
            explanation: "'Provide for' means to supply what is needed for someone.",
            fullExplanation: "'Provide for' means to make available for someone's needs. 'Provide to' and 'provide with' have different structures: you 'provide someone with something' or 'provide something to someone'.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-verb-14",
            stem: "The union members voted ___ the proposed changes to their contracts.",
            options: ["against", "for", "with"],
            answer: "against",
            explanation: "'Vote against' means to express opposition through a vote.",
            fullExplanation: "'Vote against' means to oppose in a vote. 'Vote for' means to support. Both are valid verb-preposition combinations but have opposite meanings.",
            source: "Yule, G. Oxford Practice Grammar, Unit 104"
          },
          {
            id: "prep-verb-15",
            stem: "The success of the mission relied ___ careful planning and teamwork.",
            options: ["on", "in", "for"],
            answer: "on",
            explanation: "'Rely on' means to depend on something or someone.",
            fullExplanation: "'Rely on' is a fixed collocation meaning to depend on or trust (rely on teamwork, rely on experience). 'Rely in' and 'rely for' are incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-16",
            stem: "The detectives are looking ___ the circumstances surrounding the theft.",
            options: null,
            answer: "into",
            explanation: "'into' — 'look into' means to investigate or examine something in detail.",
            fullExplanation: "'Look into' means to investigate or examine something carefully. The detectives are investigating the circumstances. 'Look into' is the correct phrasal verb for formal investigation. 'Look at' means simply to direct your eyes at something. 'Look for' means to search for something.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-17",
            stem: "The athlete has been suffering ___ a knee injury for several months.",
            options: null,
            answer: "from",
            explanation: "'Suffer from' is the fixed verb-preposition combination for illness or injury.",
            fullExplanation: "'Suffer from' is the standard collocation for diseases, injuries, or conditions (suffer from a cold, suffer from anxiety). 'Suffer with' is also used informally.",
            source: "Swan, M. Practical English Usage (4th ed.), §449",
            alternateAnswers: ["with"]
          },
          {
            id: "prep-verb-18",
            stem: "The lecturer referred ___ several recent studies during her talk.",
            options: null,
            answer: "to",
            explanation: "'Refer to' means to mention or cite something.",
            fullExplanation: "'Refer to' is a fixed collocation meaning to mention or direct attention to (refer to the data, refer to a source). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-19",
            stem: "The government is spending billions ___ improving the railway network.",
            options: null,
            answer: "on",
            explanation: "'Spend on' is used for allocating money to a purpose.",
            fullExplanation: "'Spend on' is the standard collocation for directing funds (spend money on something). No other preposition is standard.",
            source: "Yule, G. Oxford Practice Grammar, Unit 104"
          },
          {
            id: "prep-verb-20",
            stem: "The neighbours objected ___ the plan to build a car park nearby.",
            options: null,
            answer: "to",
            explanation: "'Object to' means to express disapproval of something.",
            fullExplanation: "'Object to' is the fixed collocation (object to a proposal, object to a decision). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-21",
            stem: "Can you deal ___ this customer complaint while I make a phone call?",
            options: null,
            answer: "with",
            explanation: "'Deal with' means to handle or manage something.",
            fullExplanation: "'Deal with' is a fixed collocation meaning to handle or take care of (deal with a problem, deal with customers). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-22",
            stem: "The teacher accused the student ___ copying answers from the internet.",
            options: null,
            answer: "of",
            explanation: "'Accuse of' is the fixed verb-preposition combination.",
            fullExplanation: "'Accuse someone of' is a fixed collocation (accuse of cheating, accuse of lying). No other preposition is standard.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-verb-23",
            stem: "Many tourists dream ___ visiting the northern lights in Iceland.",
            options: null,
            answer: "of",
            explanation: "'Dream of' means to imagine or wish for something — dream of visiting.",
            fullExplanation: "'Dream of' means to have a wish or aspiration (dream of travelling, dream of success). 'Dream about' is also standard and interchangeable here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133",
            alternateAnswers: ["about"]
          },
          {
            id: "prep-verb-24",
            stem: "The receptionist smiled ___ the guests as they entered the hotel lobby.",
            options: null,
            answer: "at",
            explanation: "'Smile at' is the standard verb-preposition combination.",
            fullExplanation: "'Smile at' is the fixed collocation (smile at someone). No other preposition is standard.",
            source: "Yule, G. Oxford Practice Grammar, Unit 104"
          },
          {
            id: "prep-verb-25",
            stem: "The CEO blamed the poor results ___ unfavourable market conditions.",
            options: null,
            answer: "on",
            explanation: "'Blame on' is used to attribute fault to a cause — blamed the results on conditions.",
            fullExplanation: "'Blame something on someone/something' is a standard structure. You can also say 'blame someone for something', reversing the order.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-26",
            stem: "She succeeded ___ passing all her final exams on the first attempt.",
            options: null,
            answer: "in",
            explanation: "'Succeed in' is the fixed verb-preposition combination.",
            fullExplanation: "'Succeed in' means to accomplish something (succeed in passing, succeed in business). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          },
          {
            id: "prep-verb-27",
            stem: "The charity is appealing ___ the public for donations after the earthquake.",
            options: null,
            answer: "to",
            explanation: "'Appeal to' means to make a request directed at a group — appeal to the public.",
            fullExplanation: "'Appeal to' means to make an earnest request to someone (appeal to the public, appeal to the court). 'Appeal for' is used with the thing requested.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "prep-verb-28",
            stem: "The recipe calls ___ fresh herbs and locally sourced vegetables.",
            options: null,
            answer: "for",
            explanation: "'Call for' means to require or demand something — calls for fresh herbs.",
            fullExplanation: "'Call for' means to require or demand (the recipe calls for, the situation calls for). No other preposition fits this meaning.",
            source: "Yule, G. Oxford Practice Grammar, Unit 104"
          },
          {
            id: "prep-verb-29",
            stem: "The committee finally agreed ___ a date for the annual conference.",
            options: null,
            answer: "on",
            explanation: "'Agree on' means to reach a joint decision about something — agreed on a date.",
            fullExplanation: "'Agree on' means to come to a mutual decision (agree on a plan, agree on terms). 'Agree with' means to share an opinion. 'Agree to' means to accept a proposal.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133",
            alternateAnswers: ["upon"]
          },
          {
            id: "prep-verb-30",
            stem: "The company specialises ___ designing software for the healthcare sector.",
            options: null,
            answer: "in",
            explanation: "'Specialise in' is the fixed verb-preposition combination.",
            fullExplanation: "'Specialise in' means to focus expertise on a particular area (specialise in design, specialise in medicine). No other preposition is standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 133"
          }
        ]
      },
      {
        id: "prep-particles",
        title: "Phrasal verb particles",
        tasks: [
          {
            id: "prep-particles-01",
            stem: "The plane took ___ from Heathrow Airport right on schedule.",
            options: ["off", "up", "out"],
            answer: "off",
            explanation: "'Take off' means to leave the ground, as an aircraft does.",
            fullExplanation: "'Take off' is a phrasal verb meaning to become airborne. 'Take up' means to start a hobby or activity. 'Take out' means to remove.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-02",
            stem: "He turned ___ the invitation to the gala because he had a prior commitment.",
            options: ["down", "off", "out"],
            answer: "down",
            explanation: "'down' — 'turn down' means to refuse or reject an offer or invitation.",
            fullExplanation: "'Turn down' means to refuse, reject, or decline something (an offer, invitation, request). 'He turned down the invitation' means he refused to attend. 'Turn off' means to switch off or stop. 'Turn up' means to arrive or appear. 'Turn over' means to flip something.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "prep-particles-03",
            stem: "The factory had to shut ___ temporarily due to a gas leak.",
            options: ["down", "off", "up"],
            answer: "down",
            explanation: "'Shut down' means to stop operations completely.",
            fullExplanation: "'Shut down' means to cease operations (shut down a factory, shut down a computer). 'Shut off' means to stop a supply (water, gas). 'Shut up' is informal for 'be quiet'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-04",
            stem: "Scientists are trying to find ___ why the bee population is declining.",
            options: ["out", "up", "off"],
            answer: "out",
            explanation: "'Find out' means to discover or learn new information.",
            fullExplanation: "'Find out' means to discover information (find out the truth, find out why). 'Find up' doesn't exist. 'Find off' is incorrect.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "prep-particles-05",
            stem: "Please carry ___ with the experiment while I check the equipment.",
            options: ["on", "out", "off"],
            answer: "on",
            explanation: "'Carry on' means to continue doing something.",
            fullExplanation: "'Carry on' means to continue (carry on working, carry on with the task). 'Carry out' means to perform or execute. 'Carry off' means to succeed despite difficulty.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-06",
            stem: "The meeting was put ___ until next Thursday because of the storm.",
            options: ["off", "on", "up"],
            answer: "off",
            explanation: "'Put off' means to postpone something to a later time.",
            fullExplanation: "'Put off' means to postpone (put off the meeting, put off a decision). 'Put on' means to wear or to organise an event. 'Put up' means to erect or to accommodate.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "prep-particles-07",
            stem: "He grew ___ in a small fishing village on the coast of Scotland.",
            options: ["up", "out", "off"],
            answer: "up",
            explanation: "'Grow up' means to develop from a child into an adult.",
            fullExplanation: "'Grow up' means to mature (grew up in a village). 'Grow out' is not standard without 'of'. 'Grow off' is incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-08",
            stem: "The company had to lay ___ fifty workers due to falling demand.",
            options: ["off", "down", "out"],
            answer: "off",
            explanation: "'Lay off' means to dismiss employees, often due to economic reasons.",
            fullExplanation: "'Lay off' means to make workers redundant. 'Lay down' means to put something on a surface or to establish rules. 'Lay out' means to arrange or display.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "prep-particles-09",
            stem: "My car broke ___ on the motorway during rush hour yesterday.",
            options: ["down", "up", "off"],
            answer: "down",
            explanation: "'Break down' means to stop functioning, as a vehicle or machine does.",
            fullExplanation: "'Break down' means to stop working (the car broke down). 'Break up' means to end a relationship or disperse. 'Break off' means to snap apart or to stop suddenly.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-10",
            stem: "We need to come ___ with a creative solution to this problem.",
            options: ["up", "out", "down"],
            answer: "up",
            explanation: "'Come up with' means to think of or produce an idea or plan.",
            fullExplanation: "'Come up with' means to devise or invent (come up with a plan). 'Come out' means to be released or revealed. 'Come down' means to decrease.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "prep-particles-11",
            stem: "The firefighters managed to put ___ the blaze before it spread.",
            options: ["out", "off", "down"],
            answer: "out",
            explanation: "'Put out' means to extinguish a fire.",
            fullExplanation: "'Put out' means to extinguish (put out a fire, put out a cigarette). 'Put off' means to postpone. 'Put down' means to place on a surface or to suppress.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-12",
            stem: "She has given ___ eating sugar as part of her new diet.",
            options: ["up", "out", "away"],
            answer: "up",
            explanation: "'Give up' means to stop doing something permanently.",
            fullExplanation: "'Give up' means to stop or quit (give up smoking, give up chocolate). 'Give out' means to distribute or to become exhausted. 'Give away' means to donate or reveal.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "prep-particles-13",
            stem: "Please look ___ these figures and let me know if anything is wrong.",
            options: ["over", "up", "out"],
            answer: "over",
            explanation: "'Look over' means to examine or review something carefully.",
            fullExplanation: "'Look over' means to check or review (look over the report). 'Look up' means to search for information. 'Look out' means to be careful.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-14",
            stem: "The thief ran ___ with the tourist's handbag in broad daylight.",
            options: ["off", "up", "down"],
            answer: "off",
            explanation: "'Run off' means to flee or escape quickly with something.",
            fullExplanation: "'Run off' means to escape (ran off with the bag). 'Run up' means to accumulate (debts). 'Run down' means to criticise or to gradually lose power.",
            source: "Yule, G. Oxford Practice Grammar, Unit 106"
          },
          {
            id: "prep-particles-15",
            stem: "The volunteers set ___ early in the morning to reach the summit.",
            options: ["off", "up", "down"],
            answer: "off",
            explanation: "'Set off' means to begin a journey.",
            fullExplanation: "'Set off' means to start a journey (set off early). 'Set up' means to establish or arrange. 'Set down' means to write or to land.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "prep-particles-16",
            stem: "The surgeon carried ___ a complex operation that lasted eight hours.",
            options: null,
            answer: "out",
            explanation: "'Carry out' means to perform or complete a task — carried out an operation.",
            fullExplanation: "'Carry out' means to execute or perform (carry out a task, carry out research). No other particle fits this meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-17",
            stem: "We need to cut ___ on expenses if we want to save for the trip.",
            options: null,
            answer: "down",
            explanation: "'Cut down on' means to reduce the amount of something — cut down on expenses.",
            fullExplanation: "'Cut down on' means to reduce (cut down on spending, cut down on sugar). 'Cut back on' is a synonym.",
            source: "Swan, M. Practical English Usage (4th ed.), §580",
            alternateAnswers: ["back"]
          },
          {
            id: "prep-particles-18",
            stem: "He finally got ___ his fear of public speaking after years of practice.",
            options: null,
            answer: "over",
            explanation: "'Get over' means to recover from or overcome something — got over his fear.",
            fullExplanation: "'Get over' means to recover from or overcome (get over an illness, get over a fear). No other particle fits.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-19",
            stem: "The teacher told the class to hand ___ their essays by five o'clock.",
            options: null,
            answer: "in",
            explanation: "'Hand in' means to submit work — hand in their essays.",
            fullExplanation: "'Hand in' means to submit (hand in homework, hand in a report). 'Hand over' means to give something to someone in authority.",
            source: "Swan, M. Practical English Usage (4th ed.), §580",
            alternateAnswers: ["over"]
          },
          {
            id: "prep-particles-20",
            stem: "Sales picked ___ dramatically after the company launched its new advert.",
            options: null,
            answer: "up",
            explanation: "'Pick up' means to increase or improve — sales picked up.",
            fullExplanation: "'Pick up' can mean to increase (business picked up, sales picked up). No other particle fits this meaning in this context.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-21",
            stem: "I ran ___ an old school friend at the supermarket yesterday.",
            options: null,
            answer: "into",
            explanation: "'Run into' means to meet someone unexpectedly — ran into a friend.",
            fullExplanation: "'Run into' means to encounter by chance (ran into an old friend). 'Run across' is a less common synonym.",
            source: "Yule, G. Oxford Practice Grammar, Unit 106",
            alternateAnswers: ["across"]
          },
          {
            id: "prep-particles-22",
            stem: "The neighbours fell ___ over the boundary fence between their gardens.",
            options: null,
            answer: "out",
            explanation: "'Fall out' means to have an argument or quarrel — fell out over the fence.",
            fullExplanation: "'Fall out' means to have a disagreement (fell out with friends, fell out over money). No other particle fits.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-23",
            stem: "Could you please turn ___ the music? I'm trying to concentrate.",
            options: null,
            answer: "down",
            explanation: "'Turn down' means to reduce the volume — turn down the music.",
            fullExplanation: "'Turn down' means to lower the volume or intensity. 'Turn off' means to switch off completely — both are valid depending on intent.",
            source: "Swan, M. Practical English Usage (4th ed.), §580",
            alternateAnswers: ["off"]
          },
          {
            id: "prep-particles-24",
            stem: "The whole building blew ___ when the gas ignited unexpectedly.",
            options: null,
            answer: "up",
            explanation: "'Blow up' means to explode — the building blew up.",
            fullExplanation: "'Blow up' means to explode or be destroyed by an explosion. No other particle fits this meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-25",
            stem: "She brought ___ three children on her own while working full time.",
            options: null,
            answer: "up",
            explanation: "'Bring up' means to raise children — brought up three children.",
            fullExplanation: "'Bring up' means to raise or rear children (brought up in London). No other particle fits this meaning.",
            source: "Swan, M. Practical English Usage (4th ed.), §580"
          },
          {
            id: "prep-particles-26",
            stem: "The company is going ___ a very difficult period at the moment.",
            options: null,
            answer: "through",
            explanation: "'Go through' means to experience something difficult — going through a difficult period.",
            fullExplanation: "'Go through' means to experience or endure (go through a tough time, go through changes). No other particle fits this meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-27",
            stem: "I need to look ___ my notes before the biology exam tomorrow.",
            options: null,
            answer: "over",
            explanation: "'Look over' means to review or examine something — look over notes.",
            fullExplanation: "'Look over' means to review or check (look over notes, look over a document). 'Look through' is also valid here, meaning to examine item by item.",
            source: "Swan, M. Practical English Usage (4th ed.), §580",
            alternateAnswers: ["through"]
          },
          {
            id: "prep-particles-28",
            stem: "The alarm went ___ at six in the morning and woke the whole house.",
            options: null,
            answer: "off",
            explanation: "'Go off' means to sound suddenly, as an alarm does — the alarm went off.",
            fullExplanation: "'Go off' means to sound or be activated (the alarm went off). No other particle fits this meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          },
          {
            id: "prep-particles-29",
            stem: "After the scandal, the minister had to step ___ from his position.",
            options: null,
            answer: "down",
            explanation: "'Step down' means to resign from a role — step down from his position.",
            fullExplanation: "'Step down' means to resign or leave a position of authority (step down as chairman). 'Step aside' is a synonym.",
            source: "Yule, G. Oxford Practice Grammar, Unit 106",
            alternateAnswers: ["aside"]
          },
          {
            id: "prep-particles-30",
            stem: "The engine broke ___ and the passengers had to wait for a replacement bus.",
            options: null,
            answer: "down",
            explanation: "'Break down' means to stop functioning — the engine broke down.",
            fullExplanation: "'Break down' means to stop working due to a mechanical fault (the engine broke down, the car broke down). No other particle fits.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 136"
          }
        ]
      }
    ]
  },

  /* ─── ARTICLES & DETERMINERS ─── */
  {
    id: "articles",
    title: "Articles & Determiners",
    preset: "grammar",
    subtopics: [
      {
        id: "art-indef",
        title: "Indefinite article a/an",
        tasks: [
          {
            id: "art-indef-01",
            stem: "She works as ___ architect for a large construction firm.",
            options: ["an", "the", "—"],
            answer: "an",
            explanation: "'An' is used before a vowel sound for job titles with 'as'.",
            fullExplanation: "When stating someone's profession with 'as', we use the indefinite article. 'Architect' begins with a vowel sound, so 'an' is correct. 'The' would imply a specific, already-known architect. Zero article is not used with singular countable nouns denoting professions.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 70"
          },
          {
            id: "art-indef-02",
            stem: "What ___ beautiful sunset we saw from the hilltop yesterday!",
            options: ["a", "an", "the"],
            answer: "a",
            explanation: "'A' is used in exclamations with 'What + a/an + adjective + singular noun'.",
            fullExplanation: "In exclamatory sentences beginning with 'What', we use the indefinite article before an adjective + singular countable noun. 'Beautiful' starts with a consonant sound, so 'a' is correct. 'The' does not fit the exclamation pattern.",
            source: "Swan, M. Practical English Usage (4th ed.), §63"
          },
          {
            id: "art-indef-03",
            stem: "He bought ___ umbrella because it was starting to rain.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'An' is required because 'umbrella' starts with a vowel sound.",
            fullExplanation: "The indefinite article is used for first mention of a singular countable noun. Since 'umbrella' begins with a vowel sound /ʌ/, we use 'an'. 'A' is used before consonant sounds. 'The' would imply the listener already knows which umbrella.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 66"
          },
          {
            id: "art-indef-04",
            stem: "My brother is ___ honest person who always tells the truth.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'An' is used before 'honest' because the 'h' is silent, giving a vowel sound.",
            fullExplanation: "When the initial 'h' is silent, the word starts with a vowel sound. 'Honest' begins with /ɒ/, so 'an' is the correct article. 'A' is used before consonant sounds. 'The' would imply a specific already-identified person.",
            source: "Swan, M. Practical English Usage (4th ed.), §63"
          },
          {
            id: "art-indef-05",
            stem: "She is ___ European student studying marine biology in Australia.",
            options: ["a", "an", "the"],
            answer: "a",
            explanation: "'A' is correct because 'European' begins with a consonant sound /j/.",
            fullExplanation: "Despite starting with the letter 'E', 'European' begins with the consonant sound /j/ (like 'you'). Therefore 'a' is the correct article, not 'an'. The indefinite article is used for first mention of a singular countable noun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 66"
          },
          {
            id: "art-indef-06",
            stem: "Could you pass me ___ piece of paper from that stack?",
            options: ["a", "the", "—"],
            answer: "a",
            explanation: "'A' introduces any single unspecified piece of paper.",
            fullExplanation: "We use 'a' when referring to any one unspecified item from a group. 'A piece of paper' means any one piece, not a particular one. 'The' would imply a specific piece already identified. Zero article is not used with singular countable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 66"
          },
          {
            id: "art-indef-07",
            stem: "He had ___ terrible headache and could not concentrate on his work.",
            options: ["a", "the", "an"],
            answer: "a",
            explanation: "'A' is used with singular countable nouns like 'headache' on first mention.",
            fullExplanation: "Physical sensations like headaches, colds, and fevers are introduced with the indefinite article. 'A terrible headache' is first mention. 'The' would imply a previously discussed headache. 'An' is only used before vowel sounds.",
            source: "Swan, M. Practical English Usage (4th ed.), §63"
          },
          {
            id: "art-indef-08",
            stem: "My neighbour has ___ dog that barks loudly every night.",
            options: ["a", "the", "—"],
            answer: "a",
            explanation: "'A' introduces a dog not previously mentioned in the conversation.",
            fullExplanation: "The indefinite article 'a' is used for first mention of a singular countable noun. The listener does not yet know which dog is being referred to. 'The' would be used for second mention. Zero article cannot precede a singular countable noun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 66"
          },
          {
            id: "art-indef-09",
            stem: "She wants to become ___ pilot when she finishes university.",
            options: ["a", "the", "an"],
            answer: "a",
            explanation: "'A' is the correct article for job titles with singular countable nouns.",
            fullExplanation: "Professions and job titles use the indefinite article when stating what someone is or wants to be. 'Pilot' begins with a consonant sound, so 'a' is correct. 'The' would imply one specific pilot. 'An' is only used before vowel sounds.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 70"
          },
          {
            id: "art-indef-10",
            stem: "We need ___ volunteer to help organise the charity event next month.",
            options: ["a", "the", "—"],
            answer: "a",
            explanation: "'A' is used when referring to any one unspecified volunteer.",
            fullExplanation: "The indefinite article introduces a non-specific singular countable noun. Any volunteer will do — we are not referring to a particular person. 'The' would imply a specific volunteer already identified. Zero article is not used with singular countable nouns.",
            source: "Swan, M. Practical English Usage (4th ed.), §63"
          },
          {
            id: "art-indef-11",
            stem: "It takes ___ hour to drive from here to the airport.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'An' is used because 'hour' begins with a silent 'h' and a vowel sound.",
            fullExplanation: "The word 'hour' starts with a silent 'h', so its initial sound is the vowel /aʊ/. Therefore 'an' is required. 'A' would only be correct before a consonant sound. 'The' would imply a specific hour, which does not fit this context.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 66"
          },
          {
            id: "art-indef-12",
            stem: "What ___ unusual idea she proposed at the morning meeting!",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'An' is used in exclamations before adjectives starting with a vowel sound.",
            fullExplanation: "In 'What + a/an + adjective + noun' exclamations, we choose the article based on the sound of the adjective. 'Unusual' starts with a vowel sound /ʌ/, so 'an' is correct. 'A' is used before consonant sounds. 'The' does not fit exclamation syntax.",
            source: "Swan, M. Practical English Usage (4th ed.), §63"
          },
          {
            id: "art-indef-13",
            stem: "He is ___ university professor who specialises in ancient history.",
            options: ["a", "an", "the"],
            answer: "a",
            explanation: "'A' is correct because 'university' starts with the consonant sound /j/.",
            fullExplanation: "Although 'university' begins with the letter 'u', its pronunciation starts with /juː/, a consonant sound. Therefore 'a' is the correct article. 'An' would be wrong because it precedes vowel sounds. The indefinite article is used for job titles.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 66"
          },
          {
            id: "art-indef-14",
            stem: "There is ___ cat sleeping on the bench in the park.",
            options: ["a", "the", "—"],
            answer: "a",
            explanation: "'A' introduces a previously unmentioned singular countable noun.",
            fullExplanation: "When a noun is mentioned for the first time and is not specific to the listener, the indefinite article is used. 'A cat' tells us about any one cat. 'The' would mean both speaker and listener know which cat. Zero article cannot be used with a singular countable noun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 66"
          },
          {
            id: "art-indef-15",
            stem: "She ate ___ apple and a sandwich during her lunch break.",
            options: ["an", "a", "the"],
            answer: "an",
            explanation: "'An' precedes 'apple' because it begins with a vowel sound.",
            fullExplanation: "The indefinite article 'an' is used before nouns starting with a vowel sound. 'Apple' begins with /æ/, so 'an' is correct. 'A' is only correct before consonant sounds. 'The' is not appropriate for a non-specific first mention.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 66"
          }
        ]
      },
      {
        id: "art-def",
        title: "Definite article the",
        tasks: [
          {
            id: "art-def-01",
            stem: "We visited ___ Alps during our holiday in Switzerland.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' is required before mountain ranges like the Alps.",
            fullExplanation: "Mountain ranges, groups of islands, and chains always take the definite article. We say 'the Alps', 'the Andes', 'the Rockies'. 'A' is for singular first mentions. Zero article is used for individual mountains, not ranges.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 73"
          },
          {
            id: "art-def-02",
            stem: "___ Amazon is the longest river in South America.",
            options: ["The", "A", "An"],
            answer: "The",
            explanation: "'The' is required before rivers like the Amazon.",
            fullExplanation: "Rivers always take the definite article: the Amazon, the Thames, the Nile. 'A' or 'An' would suggest it is one of many Amazons, which is incorrect. River names are unique referents requiring 'the'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 73"
          },
          {
            id: "art-def-03",
            stem: "She said it was ___ best film she had ever seen.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' is always used with superlative adjectives like 'best'.",
            fullExplanation: "Superlative forms require the definite article: the best, the fastest, the most interesting. 'A' cannot be used with superlatives. Zero article before a superlative is grammatically incorrect in standard English.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 68"
          },
          {
            id: "art-def-04",
            stem: "I bought a book and a magazine; ___ book was about marine biology.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' is used for second mention when the noun has already been introduced.",
            fullExplanation: "On first mention, we use 'a/an'. On second mention, the noun is now known to the listener, so 'the' is correct. 'A' would imply a different, new book. Zero article is not possible with a singular countable noun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 67"
          },
          {
            id: "art-def-05",
            stem: "Could you please close ___ window? It is getting quite cold.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' refers to a specific window known to both speaker and listener.",
            fullExplanation: "When both speaker and listener know which item is being referred to (shared context), the definite article is used. 'A' would imply any window, but the context makes it clear which one. Zero article is not used with singular countable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 67"
          },
          {
            id: "art-def-06",
            stem: "___ Pacific Ocean is the largest body of water on Earth.",
            options: ["The", "A", "—"],
            answer: "The",
            explanation: "'The' is always used before oceans like the Pacific Ocean.",
            fullExplanation: "Oceans, seas, and large bodies of water always take the definite article: the Pacific, the Atlantic, the Mediterranean. They are unique referents. 'A' implies there are multiple Pacific Oceans, which is wrong.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 73"
          },
          {
            id: "art-def-07",
            stem: "He is ___ tallest player on the basketball team this season.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' must precede superlative adjectives like 'tallest'.",
            fullExplanation: "Superlatives always require 'the' because they identify a unique item in a group. 'A tallest' is grammatically impossible. Zero article before a superlative is also incorrect in standard English.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 68"
          },
          {
            id: "art-def-08",
            stem: "They sailed across ___ Mediterranean Sea last summer.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' is required before seas like the Mediterranean Sea.",
            fullExplanation: "Seas take the definite article: the Mediterranean, the Red Sea, the Black Sea. These are unique geographical features. 'A' implies there is more than one, which is incorrect. Zero article is not used with sea names.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 73"
          },
          {
            id: "art-def-09",
            stem: "She plays ___ piano beautifully and performs at local concerts.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' is used with musical instruments when talking about playing them.",
            fullExplanation: "In British English, we say 'play the piano', 'play the guitar', etc. The definite article is used with musical instruments in this context. 'A piano' would mean she plays one specific physical piano. Zero article is not standard here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 72"
          },
          {
            id: "art-def-10",
            stem: "___ Sahara Desert covers a vast area of northern Africa.",
            options: ["The", "A", "—"],
            answer: "The",
            explanation: "'The' is used before deserts like the Sahara.",
            fullExplanation: "Deserts take the definite article: the Sahara, the Gobi, the Kalahari. They are unique geographical features. 'A' would imply multiple Saharas. Zero article is not used with desert names.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 73"
          },
          {
            id: "art-def-11",
            stem: "Please turn off ___ lights before you leave the office tonight.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' refers to specific lights known from the shared context.",
            fullExplanation: "When both parties know which lights are being discussed (the ones in the office), the definite article is used. 'A' is singular and doesn't fit 'lights'. Zero article would make 'lights' a general concept, not the specific ones in the office.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 67"
          },
          {
            id: "art-def-12",
            stem: "___ United Kingdom consists of England, Scotland, Wales, and Northern Ireland.",
            options: ["The", "A", "—"],
            answer: "The",
            explanation: "'The' is required before country names that include 'Kingdom', 'States', or 'Republic'.",
            fullExplanation: "Country names with common nouns like 'Kingdom', 'States', or 'Republic' take the definite article: the United Kingdom, the United States. Simple country names like 'France' do not. 'A' would be grammatically wrong here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 73"
          },
          {
            id: "art-def-13",
            stem: "That was ___ most exciting match I have watched all year.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' always accompanies superlative forms like 'most exciting'.",
            fullExplanation: "Superlative adjectives require the definite article: the most exciting, the least expensive, the best. 'A' cannot precede a superlative. Zero article before a superlative is grammatically incorrect.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 68"
          },
          {
            id: "art-def-14",
            stem: "We took a boat trip along ___ River Thames on a sunny afternoon.",
            options: ["the", "a", "—"],
            answer: "the",
            explanation: "'The' is required before river names like the River Thames.",
            fullExplanation: "Rivers always take the definite article: the Thames, the Seine, the Danube. Whether we say 'the River Thames' or 'the Thames', 'the' is required. 'A' would imply there are many River Thames. Zero article is not used.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 73"
          },
          {
            id: "art-def-15",
            stem: "___ sun was setting behind the mountains as we arrived at camp.",
            options: ["The", "A", "—"],
            answer: "The",
            explanation: "'The' is used for unique referents like the sun, the moon, and the sky.",
            fullExplanation: "Unique objects that everyone knows — the sun, the moon, the earth, the sky — always take the definite article. There is only one sun, so it is always 'the sun'. 'A' would imply more than one sun exists.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 67"
          }
        ]
      },
      {
        id: "art-zero",
        title: "Zero article",
        tasks: [
          {
            id: "art-zero-01",
            stem: "I usually have ___ breakfast at seven in the morning.",
            options: ["—", "a", "the"],
            answer: "—",
            explanation: "Zero article is used with meal names in general statements.",
            fullExplanation: "Meals (breakfast, lunch, dinner) do not take an article when used in a general sense. We say 'have breakfast', not 'have a breakfast' or 'have the breakfast'. An article is only added when the meal is specified or modified in a particular way.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-02",
            stem: "___ water is essential for all living organisms on the planet.",
            options: ["—", "The", "A"],
            answer: "—",
            explanation: "Zero article is used with uncountable nouns in general statements.",
            fullExplanation: "When speaking generally about an uncountable noun, no article is needed. 'Water' here means water in general, not a specific body of water. 'The water' would refer to specific water. 'A' cannot be used with uncountable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-03",
            stem: "She speaks ___ Japanese fluently after living in Tokyo for years.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used before language names.",
            fullExplanation: "Languages do not take an article: we say 'speak Japanese', 'learn French', 'study Arabic'. 'The Japanese' would refer to the Japanese people, not the language. 'A' cannot be used with language names.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-04",
            stem: "He studied ___ physics at university before becoming an engineer.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with academic subjects and fields of study.",
            fullExplanation: "Academic subjects and disciplines do not take an article: physics, history, mathematics. 'The physics' would only be correct in specific contexts like 'the physics of black holes'. 'A' cannot be used with uncountable abstract nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-05",
            stem: "___ children learn languages more easily than adults do.",
            options: ["—", "The", "A"],
            answer: "—",
            explanation: "Zero article is used with plural nouns for general statements.",
            fullExplanation: "When making generalisations about a whole group, plural nouns take no article. 'Children' here means children in general. 'The children' would refer to specific children. 'A' cannot be used with plural nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-06",
            stem: "My sister went to ___ bed early because she had a fever.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with 'bed' when referring to the activity of sleeping.",
            fullExplanation: "Certain nouns like 'bed', 'school', 'work', 'church' take no article when we refer to their primary purpose. 'Go to bed' means to sleep. 'The bed' would refer to the physical furniture. 'A bed' implies any bed as an object.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-07",
            stem: "They travelled to ___ France for a two-week holiday last August.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used before most country names.",
            fullExplanation: "Most country names do not take an article: France, Japan, Brazil. Exceptions include names with 'Kingdom', 'States', or 'Republic'. 'The France' is incorrect. 'A' is never used before country names.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 73"
          },
          {
            id: "art-zero-08",
            stem: "___ love is the most important thing in life, many people believe.",
            options: ["—", "The", "A"],
            answer: "—",
            explanation: "Zero article is used with abstract uncountable nouns in general statements.",
            fullExplanation: "Abstract nouns like 'love', 'happiness', 'freedom' take no article when used in a general sense. 'The love' would refer to a specific love. 'A love' is rare and literary. General abstract concepts need no article.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-09",
            stem: "He usually has ___ lunch with his colleagues in the canteen.",
            options: ["—", "a", "the"],
            answer: "—",
            explanation: "Zero article is used with meal names when referring to the routine.",
            fullExplanation: "Meals take no article when we talk about the regular activity: have lunch, eat dinner. Adding 'a' would imply a specific or special lunch. 'The lunch' would point to a particular lunch event. The routine uses zero article.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-10",
            stem: "She went to ___ church every Sunday when she was a child.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with 'church' when referring to the activity of worship.",
            fullExplanation: "When we talk about the primary purpose of places like 'church', 'school', 'hospital', or 'prison', no article is used. 'Go to church' means to attend a service. 'The church' refers to the building itself.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-11",
            stem: "___ gold is a precious metal used in jewellery and electronics.",
            options: ["—", "The", "A"],
            answer: "—",
            explanation: "Zero article is used with uncountable material nouns in general statements.",
            fullExplanation: "When speaking about a material or substance in general, no article is needed. 'Gold' here means the metal in general. 'The gold' would refer to specific gold. 'A' cannot be used with uncountable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-12",
            stem: "He plays ___ football for the local club every Saturday.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with sports and games.",
            fullExplanation: "Sports and games take no article: play football, play chess, play tennis. 'The football' would refer to a specific ball. 'A' would also refer to a ball, not the sport. Zero article is the standard for naming sports.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-13",
            stem: "They had ___ dinner together and then went for a walk.",
            options: ["—", "a", "the"],
            answer: "—",
            explanation: "Zero article is used with 'dinner' in its general mealtime sense.",
            fullExplanation: "Meal names do not require an article when used in a general way. 'Have dinner' is standard. 'A dinner' would suggest a formal or special dinner event. 'The dinner' would refer to a specific previously mentioned dinner.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-14",
            stem: "She is studying ___ medicine and hopes to become a surgeon.",
            options: ["—", "the", "a"],
            answer: "—",
            explanation: "Zero article is used with academic subjects like medicine.",
            fullExplanation: "Fields of study and academic disciplines take no article: study medicine, learn history, teach biology. 'The medicine' would mean a specific medication, not the field. 'A' cannot be used with uncountable abstract nouns for study fields.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 71"
          },
          {
            id: "art-zero-15",
            stem: "___ Mount Everest is the highest peak in the world.",
            options: ["—", "The", "A"],
            answer: "—",
            explanation: "Zero article is used before individual mountain names.",
            fullExplanation: "Individual mountains take no article: Mount Everest, Mount Fuji, Mount Kilimanjaro. Mountain ranges take 'the' (the Alps, the Andes), but single peaks do not. 'The Mount Everest' is incorrect. 'A' is never used with proper nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 73"
          }
        ]
      },
      {
        id: "art-some-any",
        title: "some / any",
        tasks: [
          {
            id: "art-some-any-01",
            stem: "Would you like ___ coffee? I just made a fresh pot.",
            options: ["some", "any", "a"],
            answer: "some",
            explanation: "'Some' is used in offers and requests, even in question form.",
            fullExplanation: "When offering something or making a polite request, we use 'some' instead of 'any', even though the sentence is a question. 'Any' is for general questions and negatives. 'A coffee' is possible but less natural when offering from a pot.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-02",
            stem: "There are ___ good restaurants near the harbour you should try.",
            options: ["some", "any", "the"],
            answer: "some",
            explanation: "'Some' is used in affirmative sentences with plural countable nouns.",
            fullExplanation: "In affirmative statements, 'some' indicates an indefinite number. 'Any' is typically used in questions and negatives. 'The' would imply specific restaurants already known to the listener.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-03",
            stem: "I do not have ___ experience in graphic design or illustration.",
            options: ["any", "some", "the"],
            answer: "any",
            explanation: "'Any' is used in negative sentences with uncountable nouns.",
            fullExplanation: "In negative sentences, 'any' replaces 'some'. 'I don't have any experience' is standard. 'Some' is for affirmative contexts. 'The' would imply specific experience, changing the meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-04",
            stem: "Can I have ___ water, please? I am very thirsty.",
            options: ["some", "any", "the"],
            answer: "some",
            explanation: "'Some' is used in polite requests, even in question form.",
            fullExplanation: "Requests and offers use 'some' rather than 'any'. 'Can I have some water?' is a polite request expecting a positive response. 'Any' would be more neutral or uncertain. 'The water' implies specific water.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-05",
            stem: "She did not make ___ mistakes in her final examination paper.",
            options: ["any", "some", "the"],
            answer: "any",
            explanation: "'Any' accompanies negative verbs with plural countable nouns.",
            fullExplanation: "After 'not' or other negatives, we use 'any' instead of 'some'. 'Didn't make any mistakes' is the standard negative pattern. 'Some' would be contradictory in a negative statement. 'The' would refer to specific mistakes.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-06",
            stem: "Have you seen ___ good films at the cinema recently?",
            options: ["any", "some", "the"],
            answer: "any",
            explanation: "'Any' is used in general questions with plural nouns.",
            fullExplanation: "In ordinary yes/no questions, 'any' is the default choice. 'Have you seen any…?' is a genuine question without expectation of a particular answer. 'Some' would be used if we expected a positive answer. 'The' would ask about specific films.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-07",
            stem: "He put ___ sugar in his tea and stirred it slowly.",
            options: ["some", "any", "the"],
            answer: "some",
            explanation: "'Some' is used in affirmative sentences with uncountable nouns.",
            fullExplanation: "In affirmative statements, 'some' is the standard determiner for uncountable nouns. 'Any' would be used in negatives or questions. 'The sugar' would imply a specific sugar already mentioned.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-08",
            stem: "Is there ___ milk left in the fridge, or do we need more?",
            options: ["any", "some", "the"],
            answer: "any",
            explanation: "'Any' is used in yes/no questions with uncountable nouns.",
            fullExplanation: "General questions use 'any' with uncountable nouns. 'Is there any milk?' is a genuine question. 'Some' would be used in offers or when expecting a positive response. 'The' would refer to specific milk.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-09",
            stem: "Would you like ___ biscuits with your afternoon tea?",
            options: ["some", "any", "the"],
            answer: "some",
            explanation: "'Some' is used when offering something, even in question form.",
            fullExplanation: "Offers and invitations use 'some' because the speaker expects or hopes for a positive answer. 'Would you like some…?' is a polite offer. 'Any' would sound less welcoming. 'The' implies specific biscuits.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-10",
            stem: "I need ___ advice on choosing the right university course.",
            options: ["some", "any", "the"],
            answer: "some",
            explanation: "'Some' is used in affirmative statements with uncountable nouns like 'advice'.",
            fullExplanation: "'Advice' is uncountable and here appears in an affirmative statement, so 'some' is the correct determiner. 'Any' would be used in a question or negative. 'The' would imply specific advice already discussed.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-11",
            stem: "We do not have ___ time to waste on unimportant details.",
            options: ["any", "some", "the"],
            answer: "any",
            explanation: "'Any' is required after the negative 'do not have'.",
            fullExplanation: "Negative sentences use 'any' with both countable and uncountable nouns. 'Don't have any time' is the standard pattern. 'Some' would contradict the negative. 'The' changes the meaning to specific time.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-12",
            stem: "There were ___ interesting articles in the science magazine this month.",
            options: ["some", "any", "the"],
            answer: "some",
            explanation: "'Some' indicates an indefinite number in an affirmative sentence.",
            fullExplanation: "In positive statements, 'some' introduces an unspecified quantity of countable nouns. 'Any' is for questions and negatives. 'The' would mean specific articles already known to the listener.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-13",
            stem: "He never shows ___ interest in current political affairs.",
            options: ["any", "some", "the"],
            answer: "any",
            explanation: "'Any' is used with negative adverbs like 'never'.",
            fullExplanation: "Words like 'never', 'hardly', 'rarely' create a negative context, so 'any' is used instead of 'some'. 'Never shows any interest' is the correct pattern. 'Some' contradicts the negative meaning of 'never'.",
            source: "Swan, M. Practical English Usage (4th ed.), §547"
          },
          {
            id: "art-some-any-14",
            stem: "She bought ___ flowers to decorate the living room for the party.",
            options: ["some", "any", "the"],
            answer: "some",
            explanation: "'Some' is used in affirmative sentences with plural countable nouns.",
            fullExplanation: "'Some flowers' means an unspecified quantity in an affirmative statement. 'Any' would require a negative or question context. 'The flowers' would imply specific flowers already mentioned.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 84"
          },
          {
            id: "art-some-any-15",
            stem: "I hardly have ___ energy left after running the full marathon.",
            options: ["any", "some", "the"],
            answer: "any",
            explanation: "'Any' is used with 'hardly' because it creates a near-negative meaning.",
            fullExplanation: "'Hardly' is a semi-negative word, so it pairs with 'any' rather than 'some'. 'Hardly any energy' means almost no energy. 'Some' would contradict the near-negative sense. 'The' would change the meaning entirely.",
            source: "Swan, M. Practical English Usage (4th ed.), §547"
          }
        ]
      },
      {
        id: "art-every-each",
        title: "every / each",
        tasks: [
          {
            id: "art-every-each-01",
            stem: "___ student in the class received a certificate at the ceremony.",
            options: ["Every", "Each", "All"],
            answer: "Every",
            explanation: "'Every' emphasises the group as a whole — all students without exception.",
            fullExplanation: "'Every' stresses totality and treats the group as a whole. 'Each' focuses on individuals one by one. Both are grammatically possible, but 'every' is more natural when emphasising completeness. 'All' would require 'all students' (plural), not 'all student'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 82"
          },
          {
            id: "art-every-each-02",
            stem: "___ room in the hotel has its own private balcony overlooking the sea.",
            options: ["Each", "Every", "All"],
            answer: "Each",
            explanation: "'Each' highlights individual rooms considered one at a time.",
            fullExplanation: "'Each' is used when we think of the members of a group individually, one by one. 'Every' emphasises the whole group. Here, the focus is on the individual room and its feature. 'All' needs a plural noun.",
            source: "Swan, M. Practical English Usage (4th ed.), §166"
          },
          {
            id: "art-every-each-03",
            stem: "She checks her email ___ morning before leaving for work.",
            options: ["every", "each", "all"],
            answer: "every",
            explanation: "'Every' is used with time expressions to mean 'each and all'.",
            fullExplanation: "'Every morning' is a common time expression meaning 'all mornings without exception'. 'Each morning' is possible but less common for habitual actions. 'All morning' would mean 'the entire morning', a different meaning.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 82"
          },
          {
            id: "art-every-each-04",
            stem: "The teacher gave ___ child a different task to complete.",
            options: ["each", "every", "all"],
            answer: "each",
            explanation: "'Each' stresses that individual children received individual tasks.",
            fullExplanation: "'Each child' emphasises that every single child was given something different. The focus is on individuality. 'Every' would stress universality rather than individuality. 'All' would need the plural 'children'.",
            source: "Swan, M. Practical English Usage (4th ed.), §166"
          },
          {
            id: "art-every-each-05",
            stem: "There is a fire exit on ___ side of the building for safety.",
            options: ["each", "every", "both"],
            answer: "each",
            explanation: "'Each' is correct when referring to individual sides of the building.",
            fullExplanation: "'Each side' treats the sides one by one. 'Every side' is possible but less precise when the number of sides is limited and specific. 'Both' would only work for exactly two sides, not a building with multiple sides.",
            source: "Swan, M. Practical English Usage (4th ed.), §166"
          },
          {
            id: "art-every-each-06",
            stem: "He visits his grandmother ___ weekend without fail.",
            options: ["every", "each", "all"],
            answer: "every",
            explanation: "'Every' is the natural choice for regular, repeated time expressions.",
            fullExplanation: "'Every weekend' is a fixed expression for habitual actions. 'Each weekend' would emphasise individual weekends. 'All weekend' means 'the entire weekend', which changes the meaning entirely.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 82"
          },
          {
            id: "art-every-each-07",
            stem: "The inspector examined ___ passport carefully before allowing entry.",
            options: ["each", "every", "all"],
            answer: "each",
            explanation: "'Each' emphasises individual inspection of passports one by one.",
            fullExplanation: "'Each passport' suggests the inspector looked at them individually, one at a time. This is the focus of the sentence. 'Every' would stress universality. 'All' would require the plural 'passports'.",
            source: "Swan, M. Practical English Usage (4th ed.), §166"
          },
          {
            id: "art-every-each-08",
            stem: "___ effort was made to find the missing climbers on the mountain.",
            options: ["Every", "Each", "All"],
            answer: "Every",
            explanation: "'Every' is used in the set phrase 'every effort' meaning 'all possible effort'.",
            fullExplanation: "'Every effort' is a common collocation meaning all possible effort was made. 'Each effort' would imply listing individual efforts separately. 'All' would need 'all efforts' or a different construction.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 82"
          },
          {
            id: "art-every-each-09",
            stem: "They placed a candle on ___ table in the restaurant for the event.",
            options: ["each", "every", "all"],
            answer: "each",
            explanation: "'Each' focuses on individual tables receiving a candle one at a time.",
            fullExplanation: "'Each table' emphasises that every single table was treated individually. The image is of placing candles one table at a time. 'Every' stresses completeness. 'All' would require 'all tables'.",
            source: "Swan, M. Practical English Usage (4th ed.), §166"
          },
          {
            id: "art-every-each-10",
            stem: "Not ___ student passed the exam; several failed the final section.",
            options: ["every", "each", "all"],
            answer: "every",
            explanation: "'Every' is used with 'not' to mean 'not all' in partial negation.",
            fullExplanation: "'Not every' means 'not all' — it indicates partial negation. 'Not each' is unusual and awkward. 'Not all' would need 'students' (plural). 'Not every student' is the standard way to express this.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 82"
          },
          {
            id: "art-every-each-11",
            stem: "The doctor sees a patient ___ fifteen minutes throughout the day.",
            options: ["every", "each", "all"],
            answer: "every",
            explanation: "'Every' is used with time intervals: every fifteen minutes, every hour.",
            fullExplanation: "'Every + time period' is the standard expression for regular intervals. 'Every fifteen minutes' means at fifteen-minute intervals. 'Each fifteen minutes' is not standard English. 'All fifteen minutes' does not make sense.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 82"
          },
          {
            id: "art-every-each-12",
            stem: "___ of the four applicants was asked a different set of questions.",
            options: ["Each", "Every", "All"],
            answer: "Each",
            explanation: "'Each' is used with 'of' to refer to individual members of a specific group.",
            fullExplanation: "'Each of' is followed by a determiner and plural noun or pronoun: 'each of the four applicants'. 'Every of' is not grammatically correct — 'every' cannot be followed by 'of'. 'All of' would need a plural verb.",
            source: "Swan, M. Practical English Usage (4th ed.), §166"
          },
          {
            id: "art-every-each-13",
            stem: "She waters the plants in her garden ___ other day.",
            options: ["every", "each", "all"],
            answer: "every",
            explanation: "'Every' is part of the fixed expression 'every other day' meaning alternate days.",
            fullExplanation: "'Every other day' is a set phrase meaning on alternate days. 'Each other day' is not standard. 'All other day' is grammatically incorrect. This is a fixed expression that requires 'every'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 82"
          },
          {
            id: "art-every-each-14",
            stem: "The judges scored ___ performance on a scale of one to ten.",
            options: ["each", "every", "all"],
            answer: "each",
            explanation: "'Each' stresses that performances were scored individually and separately.",
            fullExplanation: "'Each performance' emphasises individual scoring — one performance at a time. 'Every' would emphasise that no performance was missed. 'All' would require 'all performances' with a plural noun.",
            source: "Swan, M. Practical English Usage (4th ed.), §166"
          },
          {
            id: "art-every-each-15",
            stem: "___ citizen has the right to vote in a democratic election.",
            options: ["Every", "Each", "All"],
            answer: "Every",
            explanation: "'Every' emphasises that the right applies to all citizens as a whole group.",
            fullExplanation: "'Every citizen' stresses universality — no citizen is excluded. 'Each' would focus on individuals, which is less natural for stating universal rights. 'All' would need 'all citizens'. 'Every' is strongest for universal statements.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 82"
          }
        ]
      },
      {
        id: "art-all-both",
        title: "all / both / either / neither",
        tasks: [
          {
            id: "art-all-both-01",
            stem: "___ of my parents are retired and live in the countryside.",
            options: ["Both", "All", "Either"],
            answer: "Both",
            explanation: "'Both' is used when referring to two people — here, two parents.",
            fullExplanation: "'Both' refers to two items or people together. 'All' is for three or more. Since most people have two parents, 'both' is correct. 'Either' means one or the other, not both together.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-02",
            stem: "___ the students in the school participated in the annual sports day.",
            options: ["All", "Both", "Neither"],
            answer: "All",
            explanation: "'All' is used for three or more items — here, the entire student body.",
            fullExplanation: "'All' refers to every member of a group of three or more. 'Both' is only for two. 'Neither' is negative and means 'not one and not the other' of two items. A school has many students, so 'all' is correct.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 80"
          },
          {
            id: "art-all-both-03",
            stem: "___ answer is acceptable; you can choose whichever you prefer.",
            options: ["Either", "Neither", "Both"],
            answer: "Either",
            explanation: "'Either' means one or the other of two options is acceptable.",
            fullExplanation: "'Either' indicates that both options are valid choices — pick one. 'Neither' would mean none of them is acceptable. 'Both' would mean choosing both simultaneously, which contradicts 'whichever you prefer' (one choice).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-04",
            stem: "___ of the two proposals was approved by the committee.",
            options: ["Neither", "Either", "Both"],
            answer: "Neither",
            explanation: "'Neither' means not one and not the other — both proposals were rejected.",
            fullExplanation: "'Neither' is the negative form for two items, meaning zero out of two. 'Either' is affirmative, meaning one or the other. 'Both' means the two together were approved, which contradicts the singular verb 'was'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-05",
            stem: "She visited ___ museums in the city and enjoyed them equally.",
            options: ["both", "all", "either"],
            answer: "both",
            explanation: "'Both' refers to two museums visited together.",
            fullExplanation: "'Both' is for exactly two items. The phrase 'enjoyed them equally' suggests a comparison between two. 'All' would imply three or more museums. 'Either' means one or the other, not both visited.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-06",
            stem: "___ roads lead to the village, so take whichever is more scenic.",
            options: ["Both", "All", "Neither"],
            answer: "Both",
            explanation: "'Both' is used for two roads, supported by the binary choice 'whichever'.",
            fullExplanation: "'Both roads' implies there are exactly two. 'Whichever' supports a choice between two. 'All roads' would mean three or more. 'Neither' would mean no road leads there, contradicting the rest of the sentence.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-07",
            stem: "___ the information in the report was verified by the research team.",
            options: ["All", "Both", "Either"],
            answer: "All",
            explanation: "'All' is used with uncountable nouns to mean 'the entirety of'.",
            fullExplanation: "'All the information' means every piece of information. 'Information' is uncountable, so 'both' (which requires two countable items) is incorrect. 'Either' is for a choice between two options.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 80"
          },
          {
            id: "art-all-both-08",
            stem: "I offered him tea or coffee, but he wanted ___ of them.",
            options: ["neither", "either", "both"],
            answer: "neither",
            explanation: "'Neither' means he did not want one and did not want the other.",
            fullExplanation: "'Neither' expresses a negative choice between two options — he rejected both. 'Either' would mean he was willing to take one. 'Both' would mean he wanted tea and coffee, but 'but' signals a contrast.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-09",
            stem: "___ teams played well, and the match ended in a draw.",
            options: ["Both", "All", "Neither"],
            answer: "Both",
            explanation: "'Both' refers to the two teams in a match.",
            fullExplanation: "A match has two teams, so 'both' is correct. 'All' is for three or more. 'Neither' would mean no team played well, contradicting 'played well'. 'Both' emphasises that the two teams equally performed well.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-10",
            stem: "There are five flavours, and ___ of them taste delicious.",
            options: ["all", "both", "either"],
            answer: "all",
            explanation: "'All' is correct for five items — more than two.",
            fullExplanation: "'All of them' is correct when there are three or more items. 'Both' would only work for two. 'Either' only works for two options. Five flavours require 'all'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 80"
          },
          {
            id: "art-all-both-11",
            stem: "You can park on ___ side of the street; there are no restrictions.",
            options: ["either", "neither", "both"],
            answer: "either",
            explanation: "'Either' means one side or the other — both options are available.",
            fullExplanation: "'Either side' means you may choose one or the other. A street has two sides, and both are available. 'Neither' would mean parking is not allowed. 'Both sides' is possible but 'either' better fits 'you can' with a singular noun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-12",
            stem: "___ candidate had enough votes to win the election outright.",
            options: ["Neither", "Either", "Both"],
            answer: "Neither",
            explanation: "'Neither' means not one and not the other of the two candidates.",
            fullExplanation: "'Neither' negates both options — no candidate won. 'Either' would mean one of them had enough votes. 'Both' would mean two candidates won, which contradicts the meaning of winning 'outright'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-13",
            stem: "She wore rings on ___ hands, one silver and one gold.",
            options: ["both", "all", "either"],
            answer: "both",
            explanation: "'Both' refers to her two hands.",
            fullExplanation: "People have two hands, so 'both' is the correct determiner. 'All' is for three or more. 'Either' would mean only one hand, but the sentence specifies one silver and one gold ring, indicating two hands.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          },
          {
            id: "art-all-both-14",
            stem: "___ the passengers on the flight were given a complimentary meal.",
            options: ["All", "Both", "Neither"],
            answer: "All",
            explanation: "'All' is used because a flight typically carries many passengers.",
            fullExplanation: "'All the passengers' means every single one. A commercial flight has many passengers, so 'all' (three or more) is correct. 'Both' would only apply to two. 'Neither' is negative and doesn't fit.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 80"
          },
          {
            id: "art-all-both-15",
            stem: "I tried ___ keys, but ___ of them opened the old basement door.",
            options: ["both / neither", "all / either", "either / both"],
            answer: "both / neither",
            explanation: "'Both' refers to two keys tried; 'neither' means none of the two worked.",
            fullExplanation: "'Both' establishes that two keys were tried. 'Neither' negates both — not one and not the other opened the door. 'All / either' would require three or more keys for 'all'. This is a classic both/neither pairing for two items.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 81"
          }
        ]
      },
      {
        id: "art-another-other",
        title: "another / other / the other",
        tasks: [
          {
            id: "art-another-other-01",
            stem: "This shirt does not fit. Could I try ___ one, please?",
            options: ["another", "the other", "other"],
            answer: "another",
            explanation: "'Another' means one more or a different one from an open set.",
            fullExplanation: "'Another' refers to an additional or different item when the set is not limited to two. 'The other' would imply there is only one remaining option. 'Other' alone cannot precede 'one' without an article.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          },
          {
            id: "art-another-other-02",
            stem: "I have two cats; one is black and ___ is ginger.",
            options: ["the other", "another", "other"],
            answer: "the other",
            explanation: "'The other' refers to the second of exactly two items.",
            fullExplanation: "When there are only two items, 'the other' refers to the remaining one. 'Another' implies a third option, which doesn't exist here. 'Other' alone is not grammatical before 'is' without a determiner.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          },
          {
            id: "art-another-other-03",
            stem: "Some guests arrived early; ___ guests came much later in the evening.",
            options: ["other", "another", "the other"],
            answer: "other",
            explanation: "'Other' is used before plural nouns to mean additional or different ones.",
            fullExplanation: "'Other guests' means different guests from those mentioned first. 'Another' is for singular nouns. 'The other guests' would imply all remaining guests, but the sentence does not suggest a closed, known group.",
            source: "Swan, M. Practical English Usage (4th ed.), §389"
          },
          {
            id: "art-another-other-04",
            stem: "Could I have ___ cup of tea, please? This one was lovely.",
            options: ["another", "the other", "other"],
            answer: "another",
            explanation: "'Another' means one more of the same kind.",
            fullExplanation: "'Another cup' means an additional cup — one more. 'The other cup' would mean a specific second cup that already exists. 'Other' alone cannot precede a singular countable noun without an article.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          },
          {
            id: "art-another-other-05",
            stem: "There are three routes; we tried one, and ___ two were closed.",
            options: ["the other", "another", "other"],
            answer: "the other",
            explanation: "'The other' refers to the remaining items in a closed, known group.",
            fullExplanation: "When the total group is defined (three routes), 'the other two' refers to the specific remaining two. 'Another two' would mean two additional ones beyond the three. 'Other' without 'the' doesn't specify the remaining group.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          },
          {
            id: "art-another-other-06",
            stem: "He finished his homework in ___ ten minutes despite its difficulty.",
            options: ["another", "the other", "other"],
            answer: "another",
            explanation: "'Another' + number means an additional amount of time.",
            fullExplanation: "'Another ten minutes' means ten more minutes. This is a common pattern: 'another' + number + noun = an additional quantity. 'The other ten minutes' would refer to specific remaining minutes. 'Other' alone is not used this way.",
            source: "Swan, M. Practical English Usage (4th ed.), §389"
          },
          {
            id: "art-another-other-07",
            stem: "One twin loves sports, while ___ prefers reading and painting.",
            options: ["the other", "another", "other"],
            answer: "the other",
            explanation: "'The other' refers to the second of two twins.",
            fullExplanation: "With twins (a pair of two), 'the other' is the correct way to refer to the remaining one. 'Another' would imply a third twin. 'Other' needs a determiner when used as a pronoun referring to a specific individual.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          },
          {
            id: "art-another-other-08",
            stem: "Do you have any ___ questions about the new company policy?",
            options: ["other", "another", "the other"],
            answer: "other",
            explanation: "'Other' modifies plural nouns to mean 'additional' or 'different'.",
            fullExplanation: "'Any other questions' means any additional or further questions. 'Another' is singular and doesn't fit with the plural 'questions'. 'The other questions' would imply specific remaining questions.",
            source: "Swan, M. Practical English Usage (4th ed.), §389"
          },
          {
            id: "art-another-other-09",
            stem: "We need ___ volunteer; three people are not enough for this project.",
            options: ["another", "the other", "other"],
            answer: "another",
            explanation: "'Another' means one more additional person is needed.",
            fullExplanation: "'Another volunteer' means one more volunteer beyond those already present. 'The other' would refer to a specific remaining volunteer. 'Other' cannot precede a singular countable noun without an article.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          },
          {
            id: "art-another-other-10",
            stem: "Some students chose biology; ___ students chose chemistry instead.",
            options: ["the other", "another", "other"],
            answer: "the other",
            explanation: "'The other' refers to the remaining students in a defined group.",
            fullExplanation: "When a class is divided into two groups, 'the other students' means all the remaining ones. 'Another' is singular. 'Other students' (without 'the') would imply a vague, open group rather than the defined remainder.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          },
          {
            id: "art-another-other-11",
            stem: "That is ___ matter entirely and should be discussed separately.",
            options: ["another", "the other", "other"],
            answer: "another",
            explanation: "'Another' means a different, separate matter.",
            fullExplanation: "'Another matter' means a completely different issue. 'The other matter' would refer to a specific second matter already mentioned. 'Other' alone cannot precede a singular countable noun without an article.",
            source: "Swan, M. Practical English Usage (4th ed.), §389"
          },
          {
            id: "art-another-other-12",
            stem: "She held the phone in one hand and a coffee cup in ___.",
            options: ["the other", "another", "other"],
            answer: "the other",
            explanation: "'The other' refers to the remaining hand — one of exactly two.",
            fullExplanation: "People have two hands. 'The other' is the natural choice to refer to the second hand. 'Another' would imply a third hand. 'Other' without a determiner is ungrammatical as a pronoun in this context.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          },
          {
            id: "art-another-other-13",
            stem: "There are many ___ reasons we should invest in renewable energy.",
            options: ["other", "another", "the other"],
            answer: "other",
            explanation: "'Other' is used before plural nouns to indicate additional reasons.",
            fullExplanation: "'Many other reasons' means many additional reasons beyond those already mentioned. 'Another' is singular. 'The other' would imply specific, known remaining reasons rather than an open-ended addition.",
            source: "Swan, M. Practical English Usage (4th ed.), §389"
          },
          {
            id: "art-another-other-14",
            stem: "Let us meet ___ day; I am too busy this afternoon.",
            options: ["another", "the other", "other"],
            answer: "another",
            explanation: "'Another' means a different, unspecified day.",
            fullExplanation: "'Another day' is a common expression meaning some other unspecified day. 'The other day' would mean 'recently' or 'a few days ago', which doesn't fit future plans. 'Other' alone cannot modify a singular noun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          },
          {
            id: "art-another-other-15",
            stem: "One shoe was under the bed, but I could not find ___.",
            options: ["the other", "another", "other"],
            answer: "the other",
            explanation: "'The other' refers to the second shoe in a pair of two.",
            fullExplanation: "Shoes come in pairs, so when one is found, 'the other' refers to the remaining one. 'Another' would imply a third shoe. 'Other' without a determiner is ungrammatical as a pronoun in this position.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 76"
          }
        ]
      },
      {
        id: "art-much-many",
        title: "much / many / a lot of",
        tasks: [
          {
            id: "art-much-many-01",
            stem: "How ___ money did you spend on your holiday in Italy?",
            options: ["much", "many", "a lot of"],
            answer: "much",
            explanation: "'Much' is used with uncountable nouns like 'money' in questions.",
            fullExplanation: "'Money' is uncountable, so 'much' is the correct quantifier. 'Many' is for countable nouns. 'A lot of' is possible but 'how much' is the standard question form for uncountable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-02",
            stem: "There are ___ beautiful parks in this city worth visiting.",
            options: ["many", "much", "a lot"],
            answer: "many",
            explanation: "'Many' is used with plural countable nouns like 'parks'.",
            fullExplanation: "'Parks' is a plural countable noun, so 'many' is correct. 'Much' can only be used with uncountable nouns. 'A lot' needs 'of' before a noun: 'a lot of parks'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-03",
            stem: "She does not have ___ experience working with databases.",
            options: ["much", "many", "a lot"],
            answer: "much",
            explanation: "'Much' is used with the uncountable noun 'experience' in negatives.",
            fullExplanation: "'Experience' (in the general sense) is uncountable, so 'much' is correct. 'Many' requires a countable plural noun. 'A lot' needs 'of' to precede a noun. 'Much' is common in negative sentences.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-04",
            stem: "How ___ languages does your colleague speak fluently?",
            options: ["many", "much", "a lot of"],
            answer: "many",
            explanation: "'Many' is used with countable plural nouns like 'languages' in questions.",
            fullExplanation: "'Languages' is a countable plural noun, so 'how many' is the correct question form. 'How much' is for uncountable nouns. 'How a lot of' is not a valid question structure.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-05",
            stem: "They spent ___ time preparing the presentation for the conference.",
            options: ["a lot of", "many", "much"],
            answer: "a lot of",
            explanation: "'A lot of' is natural with uncountable nouns in affirmative sentences.",
            fullExplanation: "'Time' is uncountable. While 'much' is grammatically correct, it sounds overly formal in affirmative sentences. 'A lot of' is the natural choice. 'Many' cannot be used with uncountable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-06",
            stem: "There were not ___ people at the concert because of the rain.",
            options: ["many", "much", "a lot"],
            answer: "many",
            explanation: "'Many' is used with plural countable nouns in negative sentences.",
            fullExplanation: "'People' is a plural countable noun, so 'many' is the correct quantifier. 'Much' is for uncountable nouns. 'A lot' needs 'of' to precede a noun. 'Not many' is the standard negative form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-07",
            stem: "He earned ___ money from his freelance photography last year.",
            options: ["a lot of", "many", "much"],
            answer: "a lot of",
            explanation: "'A lot of' is preferred with uncountable nouns in affirmative sentences.",
            fullExplanation: "'Money' is uncountable and the sentence is affirmative, so 'a lot of' is the most natural choice. 'Much' sounds formal and awkward in affirmative statements. 'Many' cannot be used with uncountable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-08",
            stem: "Does the recipe require ___ butter, or just a small amount?",
            options: ["much", "many", "a lot"],
            answer: "much",
            explanation: "'Much' is used with the uncountable noun 'butter' in questions.",
            fullExplanation: "'Butter' is uncountable, so 'much' is the correct quantifier. 'Many' is only for countable nouns. 'A lot' needs 'of' to precede a noun. Questions naturally use 'much' with uncountable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-09",
            stem: "We do not have ___ options left; we need to decide quickly.",
            options: ["many", "much", "a lot"],
            answer: "many",
            explanation: "'Many' is used with plural countable nouns like 'options' in negatives.",
            fullExplanation: "'Options' is a plural countable noun in a negative sentence, so 'many' is correct. 'Much' is for uncountable nouns. 'A lot' requires 'of' before a noun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-10",
            stem: "___ research has been conducted on the effects of climate change.",
            options: ["A lot of", "Many", "Much"],
            answer: "A lot of",
            explanation: "'A lot of' is natural with the uncountable noun 'research' in affirmative sentences.",
            fullExplanation: "'Research' is uncountable, and the sentence is affirmative. 'A lot of' is the most natural and common choice. 'Much research' is possible in formal writing. 'Many' cannot modify uncountable nouns.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 67"
          },
          {
            id: "art-much-many-11",
            stem: "How ___ cups of coffee do you drink in a typical day?",
            options: ["many", "much", "a lot of"],
            answer: "many",
            explanation: "'Many' is correct because 'cups' is a countable plural noun.",
            fullExplanation: "'Cups' is countable, so 'how many' is the correct question form. Even though 'coffee' is uncountable, the countable unit 'cups of' determines the quantifier. 'How much' would be used for 'how much coffee'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-12",
            stem: "There is too ___ noise in here for me to concentrate properly.",
            options: ["much", "many", "a lot"],
            answer: "much",
            explanation: "'Much' follows 'too' with the uncountable noun 'noise'.",
            fullExplanation: "'Noise' is uncountable, so 'too much' is the correct combination. 'Too many' is for countable nouns. 'Too a lot' is not grammatical. 'Too much' expresses excess with uncountable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-13",
            stem: "She has ___ friends who share her interest in astronomy.",
            options: ["a lot of", "much", "many"],
            answer: "a lot of",
            explanation: "'A lot of' is natural with plural countable nouns in affirmative sentences.",
            fullExplanation: "'Friends' is countable and the sentence is affirmative. 'A lot of' is the most natural and common choice. 'Many' is possible but sounds somewhat formal. 'Much' cannot be used with countable nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-14",
            stem: "We did not receive ___ feedback on the new product launch.",
            options: ["much", "many", "a lot"],
            answer: "much",
            explanation: "'Much' is used with the uncountable noun 'feedback' in negatives.",
            fullExplanation: "'Feedback' is uncountable, and the sentence is negative. 'Much' is the natural quantifier. 'Many' requires a countable noun. 'A lot' needs 'of' before a noun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-much-many-15",
            stem: "Too ___ cooks spoil the broth, as the old saying goes.",
            options: ["many", "much", "a lot of"],
            answer: "many",
            explanation: "'Many' follows 'too' with the countable plural noun 'cooks'.",
            fullExplanation: "'Cooks' is a countable plural noun, so 'too many' is correct. 'Too much' is for uncountable nouns. This is the well-known proverb 'Too many cooks spoil the broth'. 'A lot of' does not follow 'too'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          }
        ]
      },
      {
        id: "art-few-little",
        title: "few / little / fewer / less",
        tasks: [
          {
            id: "art-few-little-01",
            stem: "There is ___ hope left, but we should still try our best.",
            options: ["little", "few", "less"],
            answer: "little",
            explanation: "'Little' is used with the uncountable noun 'hope' to indicate a small amount.",
            fullExplanation: "'Hope' is uncountable, so 'little' (not 'few') is correct. 'Little' without 'a' has a negative nuance — almost none. 'Few' is for countable nouns. 'Less' is comparative and needs a comparison.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-few-little-02",
            stem: "Very ___ students signed up for the advanced calculus course.",
            options: ["few", "little", "less"],
            answer: "few",
            explanation: "'Few' is used with the countable plural noun 'students' to mean not many.",
            fullExplanation: "'Students' is a countable noun, so 'few' is correct. 'Few' has a negative nuance — not enough. 'Little' is for uncountable nouns. 'Less' is comparative and doesn't fit here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-few-little-03",
            stem: "There is ___ traffic on this road compared to the motorway.",
            options: ["less", "fewer", "little"],
            answer: "less",
            explanation: "'Less' is the comparative form for the uncountable noun 'traffic'.",
            fullExplanation: "'Traffic' is uncountable, so the comparative form 'less' is correct. 'Fewer' is the comparative for countable nouns. 'Little' is not comparative and wouldn't fit with 'compared to'.",
            source: "Swan, M. Practical English Usage (4th ed.), §311"
          },
          {
            id: "art-few-little-04",
            stem: "There were ___ complaints this year than last year about noise.",
            options: ["fewer", "less", "little"],
            answer: "fewer",
            explanation: "'Fewer' is the comparative form for the countable plural noun 'complaints'.",
            fullExplanation: "'Complaints' is a countable noun, so 'fewer' is the correct comparative form. 'Less' should be used with uncountable nouns. 'Little' is not comparative. Standard English requires 'fewer' with countable nouns.",
            source: "Swan, M. Practical English Usage (4th ed.), §311"
          },
          {
            id: "art-few-little-05",
            stem: "A ___ people volunteered, which was just enough to run the event.",
            options: ["few", "little", "fewer"],
            answer: "few",
            explanation: "'A few' (positive nuance) means some — enough to be useful.",
            fullExplanation: "'A few' with the article 'a' has a positive nuance: some, enough. 'People' is countable, so 'few' is correct. 'Little' is for uncountable nouns. 'Fewer' is comparative and doesn't fit here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-few-little-06",
            stem: "We have a ___ time before the train departs; let us grab a snack.",
            options: ["little", "few", "less"],
            answer: "little",
            explanation: "'A little' means a small but sufficient amount of the uncountable noun 'time'.",
            fullExplanation: "'Time' is uncountable, so 'little' is the correct quantifier. 'A little' has a positive nuance — enough. 'Few' is for countable nouns. 'Less' is comparative and doesn't fit this structure.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-few-little-07",
            stem: "She showed ___ interest in the proposal and quickly changed the subject.",
            options: ["little", "few", "less"],
            answer: "little",
            explanation: "'Little' (without 'a') means almost no — very small amount of uncountable 'interest'.",
            fullExplanation: "'Interest' is uncountable, so 'little' is correct. Without 'a', 'little' has a negative nuance — almost none. 'Few' is for countable nouns. 'Less' is comparative and needs a comparison point.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-few-little-08",
            stem: "The city should have ___ cars in the centre and more bicycle lanes.",
            options: ["fewer", "less", "little"],
            answer: "fewer",
            explanation: "'Fewer' is the correct comparative for the countable noun 'cars'.",
            fullExplanation: "'Cars' is a countable noun, so the comparative form 'fewer' is correct. 'Less' is for uncountable nouns. 'Little' is not comparative. Standard English requires 'fewer' with countable nouns.",
            source: "Swan, M. Practical English Usage (4th ed.), §311"
          },
          {
            id: "art-few-little-09",
            stem: "Quite a ___ tourists visit this village during the summer months.",
            options: ["few", "little", "fewer"],
            answer: "few",
            explanation: "'Quite a few' is an idiomatic expression meaning a surprisingly large number.",
            fullExplanation: "'Quite a few' means more than expected — a considerable number. 'Tourists' is countable, so 'few' is correct. 'Quite a little' is not standard. 'Fewer' is comparative and doesn't fit this expression.",
            source: "Swan, M. Practical English Usage (4th ed.), §209"
          },
          {
            id: "art-few-little-10",
            stem: "There is ___ evidence to support that theory in recent studies.",
            options: ["little", "few", "fewer"],
            answer: "little",
            explanation: "'Little' is used with the uncountable noun 'evidence' to mean almost none.",
            fullExplanation: "'Evidence' is uncountable, so 'little' is correct. 'Little' without 'a' has a negative nuance. 'Few' is for countable nouns. 'Fewer' is comparative and doesn't fit here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-few-little-11",
            stem: "You should eat ___ sugar if you want to improve your health.",
            options: ["less", "fewer", "little"],
            answer: "less",
            explanation: "'Less' is the correct comparative for the uncountable noun 'sugar'.",
            fullExplanation: "'Sugar' is uncountable, so the comparative form 'less' is correct. 'Fewer' is for countable nouns. 'Little' is not comparative. 'Eat less sugar' is the standard health advice phrasing.",
            source: "Swan, M. Practical English Usage (4th ed.), §311"
          },
          {
            id: "art-few-little-12",
            stem: "A ___ patience goes a long way when learning a new skill.",
            options: ["little", "few", "less"],
            answer: "little",
            explanation: "'A little' means a small but positive amount of uncountable 'patience'.",
            fullExplanation: "'Patience' is uncountable, so 'little' is correct. 'A little patience' is a common expression with positive nuance. 'Few' is for countable nouns. 'Less' is comparative.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-few-little-13",
            stem: "___ people realise how much effort goes into organising this festival.",
            options: ["Few", "Little", "Less"],
            answer: "Few",
            explanation: "'Few' (without 'a') means not many — negative nuance with countable 'people'.",
            fullExplanation: "'People' is countable, so 'few' is correct. 'Few' without 'a' has a negative nuance: not many people realise. 'Little' is for uncountable nouns. 'Less' is comparative and doesn't fit.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          },
          {
            id: "art-few-little-14",
            stem: "There will be ___ rain next week according to the weather forecast.",
            options: ["less", "fewer", "little"],
            answer: "less",
            explanation: "'Less' is the comparative for the uncountable noun 'rain'.",
            fullExplanation: "'Rain' is uncountable, so the comparative 'less' is correct. The sentence implies a comparison with the current week. 'Fewer' is for countable nouns. 'Little' is not comparative.",
            source: "Swan, M. Practical English Usage (4th ed.), §311"
          },
          {
            id: "art-few-little-15",
            stem: "I have ___ books on that topic; you can borrow one if you like.",
            options: ["a few", "a little", "fewer"],
            answer: "a few",
            explanation: "'A few' means some (positive nuance) with the countable noun 'books'.",
            fullExplanation: "'Books' is a countable noun. 'A few' has a positive nuance: I have some books — enough to share. 'A little' is for uncountable nouns. 'Fewer' is comparative and doesn't fit this non-comparative context.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 83"
          }
        ]
      }
    ]
  },

  /* ─── ERROR IDENTIFICATION ─── */
  {
    id: "error-id",
    title: "Error Identification",
    preset: "grammar",
    subtopics: [
      {
        id: "err-sva",
        title: "Subject-verb agreement",
        tasks: [
          {
            id: "err-sva-01",
            stem: "(A) The group of students (B) were waiting (C) outside the hall (D) for the results.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'were waiting' should be 'was waiting' because the subject is 'group' (singular).",
            fullExplanation: "'The group' is the head noun of the subject, and it is singular. The prepositional phrase 'of students' does not change subject-verb agreement. The verb should be 'was waiting' (singular) not 'were waiting' (plural). This is a common subject-verb agreement error with collective nouns.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "err-sva-02",
            stem: "(A) Each of the contestants (B) have been given (C) a set of instructions (D) before the round.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'have been given' should be 'has been given' because 'each' is singular.",
            fullExplanation: "'Each' is a singular pronoun and always takes a singular verb, regardless of the plural noun that follows in the 'of' phrase. 'Has been given' is the correct form. The other segments are grammatically correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §155"
          },
          {
            id: "err-sva-03",
            stem: "(A) There is (B) several reasons (C) why the project (D) was delayed last month.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'There is' should be 'There are' because 'reasons' is plural.",
            fullExplanation: "In existential 'there' constructions, the verb must agree with the real subject that follows it. 'Reasons' is plural, so the verb should be 'are' not 'is'. This is a common error in both speech and writing.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 38"
          },
          {
            id: "err-sva-04",
            stem: "(A) Neither the teacher (B) nor the students (C) was able (D) to solve the equation.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'was able' should be 'were able' because the nearest subject 'students' is plural.",
            fullExplanation: "With 'neither...nor', the verb agrees with the subject nearest to it. Since 'the students' is plural and is closer to the verb, the correct form is 'were able'. This is the proximity rule for correlative conjunctions.",
            source: "Azar, B.S. Understanding and Using English Grammar (5th ed.), Chapter 12"
          },
          {
            id: "err-sva-05",
            stem: "(A) The news about (B) the earthquakes (C) were broadcast (D) on every channel last night.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'were broadcast' should be 'was broadcast' because 'news' is uncountable and singular.",
            fullExplanation: "'News' is always singular in English despite ending in -s. The correct form is 'was broadcast'. The prepositional phrase 'about the earthquakes' does not affect the agreement. Other words that behave similarly include 'mathematics' and 'politics'.",
            source: "Swan, M. Practical English Usage (4th ed.), §393"
          },
          {
            id: "err-sva-06",
            stem: "(A) Every student and teacher (B) in the building (C) are required to attend (D) the fire drill.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'are required' should be 'is required' because 'every' makes the subject singular.",
            fullExplanation: "When 'every' precedes a compound subject joined by 'and', the subject is treated as singular. The correct form is 'is required'. 'Every' emphasises each individual separately, making the compound subject grammatically singular.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 28"
          },
          {
            id: "err-sva-07",
            stem: "(A) The quality (B) of these photographs (C) are impressive (D) for such a small camera.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'are impressive' should be 'is impressive' because the subject is 'quality' (singular).",
            fullExplanation: "The head noun of the subject is 'quality', which is singular. The prepositional phrase 'of these photographs' is a modifier and does not affect subject-verb agreement. The verb must be 'is impressive' to agree with the singular head noun.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "err-sva-08",
            stem: "(A) A number of applicants (B) has already submitted (C) their résumés (D) to the hiring manager.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'has already submitted' should be 'have already submitted' because 'a number of' takes a plural verb.",
            fullExplanation: "'A number of' is an expression meaning 'many' and takes a plural verb. In contrast, 'the number of' is singular. Here, 'have already submitted' is the correct form. This is a common point of confusion in English grammar.",
            source: "Azar, B.S. Understanding and Using English Grammar (5th ed.), Chapter 12"
          },
          {
            id: "err-sva-09",
            stem: "(A) The committee (B) have reached (C) a unanimous decision (D) on the budget proposal.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'have reached' should be 'has reached' because 'committee' is acting as one body (unanimous).",
            fullExplanation: "When a collective noun acts as a single unit, it takes a singular verb. The word 'unanimous' confirms the committee is acting as one body, so 'has reached' is correct. In British English, plural verbs with collective nouns are more accepted, but the context here favours singular.",
            source: "Swan, M. Practical English Usage (4th ed.), §524"
          },
          {
            id: "err-sva-10",
            stem: "(A) Mathematics (B) are her (C) favourite subject (D) at university.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'are' should be 'is' because 'mathematics' is singular despite ending in -s.",
            fullExplanation: "Academic disciplines ending in -s, such as 'mathematics', 'physics', 'economics', and 'linguistics', are grammatically singular. The correct verb is 'is'. This is a frequently tested point in grammar assessments.",
            source: "Swan, M. Practical English Usage (4th ed.), §393"
          },
          {
            id: "err-sva-11",
            stem: "(A) One of the windows (B) in the old mansion (C) have been broken (D) since last winter.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'have been broken' should be 'has been broken' because 'one' is singular.",
            fullExplanation: "'One of' is always followed by a plural noun, but the subject is 'one', which is singular. The verb must agree with 'one', not 'windows'. The correct form is 'has been broken'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 7"
          },
          {
            id: "err-sva-12",
            stem: "(A) The cost (B) of living and housing (C) continue to rise (D) in major cities.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'continue to rise' should be 'continues to rise' because the subject is 'cost' (singular).",
            fullExplanation: "The head noun is 'cost' (singular). The phrase 'of living and housing' is a prepositional modifier that does not create a compound subject. The verb should be 'continues' to agree with the singular subject.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 28"
          },
          {
            id: "err-sva-13",
            stem: "(A) Fifty kilometres (B) are (C) a long distance (D) to run without stopping.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'are' should be 'is' because distances as a single measurement take a singular verb.",
            fullExplanation: "When a measurement of distance, time, or money refers to a single amount, it is treated as singular. 'Fifty kilometres' refers to one distance, so the verb should be 'is'. This rule also applies to expressions like 'three hours is enough'.",
            source: "Azar, B.S. Understanding and Using English Grammar (5th ed.), Chapter 12"
          },
          {
            id: "err-sva-14",
            stem: "(A) Not only the players (B) but also the coach (C) were disappointed (D) by the loss.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'were disappointed' should be 'was disappointed' because the nearest subject 'coach' is singular.",
            fullExplanation: "With 'not only...but also', the verb agrees with the subject nearest to it (proximity rule). 'The coach' is singular, so the verb should be 'was disappointed'. This is the same rule that applies to 'neither...nor' constructions.",
            source: "Azar, B.S. Understanding and Using English Grammar (5th ed.), Chapter 12"
          },
          {
            id: "err-sva-15",
            stem: "(A) The scissors on the table (B) belongs to (C) the craft teacher (D) in Room 204.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'belongs to' should be 'belong to' because 'scissors' is always plural.",
            fullExplanation: "'Scissors' is one of several English nouns that are always plural (like 'trousers', 'glasses', 'pliers'). The correct verb form is 'belong to'. Even when referring to a single pair, the noun takes a plural verb.",
            source: "Swan, M. Practical English Usage (4th ed.), §430"
          }
        ]
      },
      {
        id: "err-tense",
        title: "Wrong tense form",
        tasks: [
          {
            id: "err-tense-01",
            stem: "(A) By the time we arrived, (B) the concert (C) already started (D) without us.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'already started' should be 'had already started' (past perfect for earlier action).",
            fullExplanation: "When two past events are described, the earlier one requires the past perfect ('had started'). 'By the time we arrived' establishes the later time point. Simple past 'started' fails to show which event happened first.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 15"
          },
          {
            id: "err-tense-02",
            stem: "(A) She has been living (B) in Tokyo (C) since she graduated (D) two years ago.",
            options: ["D", "A", "B", "C"],
            answer: "D",
            explanation: "'D' is incorrect — 'two years ago' conflicts with 'since'; it should be 'in 2022' or remove 'ago'.",
            fullExplanation: "'Since' is used with present perfect or present perfect continuous to mark the starting point. 'Ago' is used with past simple, not with 'since'. The sentence should either say 'since she graduated in 2022' or be restructured with 'for two years'.",
            source: "Swan, M. Practical English Usage (4th ed.), §520"
          },
          {
            id: "err-tense-03",
            stem: "(A) I am knowing (B) the answer (C) to this question (D) since yesterday.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'am knowing' should be 'have known' because 'know' is a stative verb and 'since' requires the present perfect.",
            fullExplanation: "'Know' is a stative verb that is not normally used in continuous forms. Additionally, 'since yesterday' requires the present perfect tense. The correct form is 'I have known'. Stative verbs describe states, not actions.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 4"
          },
          {
            id: "err-tense-04",
            stem: "(A) When I will arrive (B) at the airport, (C) I will call you (D) immediately.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'When I will arrive' should be 'When I arrive'; time clauses with 'when' use the present simple.",
            fullExplanation: "In English, time clauses introduced by 'when', 'before', 'after', 'as soon as', etc. use the present simple, not the future tense, even when referring to future events. The main clause keeps the future form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 25"
          },
          {
            id: "err-tense-05",
            stem: "(A) The explorers (B) have discovered (C) the ancient ruins (D) in 1922.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'have discovered' should be 'discovered' because 'in 1922' specifies a finished past time.",
            fullExplanation: "The present perfect cannot be used with a specific past time expression like 'in 1922'. A definite past time requires the past simple: 'discovered'. The present perfect is used when the time is unspecified or connects to the present.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 13"
          },
          {
            id: "err-tense-06",
            stem: "(A) By next July, (B) she will complete (C) her doctoral thesis (D) at the university.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'will complete' should be 'will have completed' because 'by next July' requires the future perfect.",
            fullExplanation: "'By + future time' signals that an action will be finished before that point. This requires the future perfect: 'will have completed'. The simple future 'will complete' does not convey the sense of completion before a deadline.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 24"
          },
          {
            id: "err-tense-07",
            stem: "(A) The researchers worked (B) on this project (C) for three years so far (D) without a break.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'worked' should be 'have been working' because 'so far' indicates an action continuing to the present.",
            fullExplanation: "'So far' signals that the action started in the past and continues to the present, requiring the present perfect continuous ('have been working'). Simple past 'worked' would imply the action is finished, contradicting 'so far'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10"
          },
          {
            id: "err-tense-08",
            stem: "(A) If I knew (B) about the meeting, (C) I would attended (D) it yesterday.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'would attended' should be 'would have attended' (third conditional for past unreal).",
            fullExplanation: "This is a third conditional sentence about an unreal past situation. The correct structure is 'If I had known... I would have attended'. 'Would attended' is not a valid verb form — 'would' must be followed by the base form or 'have + past participle'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 40"
          },
          {
            id: "err-tense-09",
            stem: "(A) She told me (B) that she is going (C) to the conference (D) the following week.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'is going' should be 'was going' because reported speech requires backshifting.",
            fullExplanation: "In reported speech with a past reporting verb ('told'), the tense of the reported clause shifts back. 'Is going' (present continuous) becomes 'was going' (past continuous). 'The following week' already signals reported speech.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 47"
          },
          {
            id: "err-tense-10",
            stem: "(A) We are living here (B) since 2015 (C) and we love (D) the neighbourhood.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'are living' should be 'have been living' because 'since 2015' requires the present perfect continuous.",
            fullExplanation: "'Since' marks a starting point in the past and requires a present perfect form to connect it to the present. The present continuous 'are living' does not work with 'since'. The correct form is 'have been living' (present perfect continuous).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 10"
          },
          {
            id: "err-tense-11",
            stem: "(A) The children played (B) in the garden (C) when it suddenly began (D) to rain.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'played' should be 'were playing' because the ongoing action interrupted by another needs past continuous.",
            fullExplanation: "When a longer background action is interrupted by a sudden event, the longer action uses the past continuous ('were playing') and the interruption uses the past simple ('began'). Two past simple verbs would imply sequential actions.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 6"
          },
          {
            id: "err-tense-12",
            stem: "(A) He didn't finished (B) his homework (C) before the teacher (D) collected the papers.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'didn't finished' should be 'didn't finish' because 'didn't' is followed by the base form.",
            fullExplanation: "After the auxiliary 'did/didn't', the main verb must be in the base form, not the past participle. 'Didn't finished' is a double marking of past tense. The correct form is 'didn't finish'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 5"
          },
          {
            id: "err-tense-13",
            stem: "(A) By the end (B) of this semester, (C) we will be studying (D) biology for two years.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'will be studying' should be 'will have been studying' (future perfect continuous for duration up to a future point).",
            fullExplanation: "'By the end of this semester' with 'for two years' requires the future perfect continuous to express the duration of an activity up to a future point. 'Will be studying' (future continuous) describes an action in progress, not accumulated duration.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 9"
          },
          {
            id: "err-tense-14",
            stem: "(A) I wish (B) I can speak (C) Japanese fluently (D) like my colleague.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'I can speak' should be 'I could speak' because 'wish' for present unreal situations requires the past tense.",
            fullExplanation: "'Wish' + past tense expresses a desire for something that is not currently true. 'Can' should become 'could' to match the unreal/subjunctive pattern. 'I wish I could speak' is the correct form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 41"
          },
          {
            id: "err-tense-15",
            stem: "(A) The package arrived (B) this morning, but (C) I haven't opened (D) it already.",
            options: ["D", "A", "B", "C"],
            answer: "D",
            explanation: "'D' is incorrect — 'already' should be 'yet' because negative present perfect sentences use 'yet', not 'already'.",
            fullExplanation: "In negative sentences with the present perfect, 'yet' is used instead of 'already'. 'Already' is used in affirmative statements. The correct sentence is 'I haven't opened it yet'. 'Already' in a negative clause is non-standard.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 12"
          }
        ]
      },
      {
        id: "err-article",
        title: "Wrong or missing article",
        tasks: [
          {
            id: "err-article-01",
            stem: "(A) She plays (B) the piano (C) beautifully and dreams of performing (D) at the Carnegie Hall.",
            options: ["D", "A", "B", "C"],
            answer: "D",
            explanation: "'D' is incorrect — 'the Carnegie Hall' should be 'Carnegie Hall' because proper nouns for buildings often drop the article.",
            fullExplanation: "Many proper nouns, especially venue names like 'Carnegie Hall', 'Buckingham Palace', and 'Windsor Castle', do not take a definite article. Adding 'the' is incorrect in these cases. However, some venues do use 'the' (e.g., 'the Royal Albert Hall').",
            source: "Swan, M. Practical English Usage (4th ed.), §68"
          },
          {
            id: "err-article-02",
            stem: "(A) He wants to become (B) a engineer (C) after finishing (D) his degree programme.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'a engineer' should be 'an engineer' because 'engineer' starts with a vowel sound.",
            fullExplanation: "The indefinite article 'an' is used before words beginning with a vowel sound. 'Engineer' begins with /ɛ/, a vowel sound, so 'an' is required. The choice between 'a' and 'an' depends on pronunciation, not spelling.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 70"
          },
          {
            id: "err-article-03",
            stem: "(A) The water is (B) essential for life, (C) and yet many regions (D) still lack clean supplies.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'The water' should be 'Water' because general, uncountable nouns do not take the definite article.",
            fullExplanation: "When referring to something in general (water as a concept), no article is needed. 'The water' would refer to specific water already identified. General statements about uncountable nouns use the zero article.",
            source: "Swan, M. Practical English Usage (4th ed.), §68"
          },
          {
            id: "err-article-04",
            stem: "(A) During our trip, (B) we visited (C) the Mount Everest base camp (D) at sunrise.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'the Mount Everest' should be 'Mount Everest' because mountain names with 'Mount' do not take 'the'.",
            fullExplanation: "Mountain names that include 'Mount' or 'Mt.' do not take the definite article. We say 'Mount Everest', not 'the Mount Everest'. However, mountain ranges do take 'the' (e.g., 'the Alps', 'the Himalayas').",
            source: "Swan, M. Practical English Usage (4th ed.), §68"
          },
          {
            id: "err-article-05",
            stem: "(A) She gave me (B) an useful piece (C) of advice (D) about job interviews.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'an useful' should be 'a useful' because 'useful' begins with a consonant sound /juː/.",
            fullExplanation: "Although 'useful' starts with the letter 'u', it is pronounced with /juː/, which is a consonant sound. Therefore, the correct article is 'a', not 'an'. The article choice depends on the sound, not the letter.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 70"
          },
          {
            id: "err-article-06",
            stem: "(A) She is (B) best student (C) in her class (D) this semester.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'best student' should be 'the best student' because superlatives require the definite article.",
            fullExplanation: "Superlative adjectives require the definite article 'the' before them. 'The best student' is the correct form. Omitting 'the' before a superlative is a grammatical error in standard English.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 90"
          },
          {
            id: "err-article-07",
            stem: "(A) The honesty (B) is always (C) the best policy (D) in professional relationships.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'The honesty' should be 'Honesty' because abstract nouns used generally take the zero article.",
            fullExplanation: "Abstract nouns like 'honesty', 'love', 'freedom', and 'happiness' do not take the definite article when used in a general sense. 'The honesty' would refer to a specific instance of honesty. The proverb is 'Honesty is the best policy'.",
            source: "Swan, M. Practical English Usage (4th ed.), §68"
          },
          {
            id: "err-article-08",
            stem: "(A) He was admitted (B) to the hospital (C) after breaking (D) a leg during a match.",
            options: ["D", "A", "B", "C"],
            answer: "D",
            explanation: "'D' is incorrect — 'a leg' should be 'his leg' because body parts use possessive determiners, not articles.",
            fullExplanation: "In English, when referring to someone's own body part, a possessive determiner (my, his, her) is used instead of an indefinite article. 'He broke his leg' is the natural English phrasing, not 'he broke a leg'.",
            source: "Swan, M. Practical English Usage (4th ed.), §433"
          },
          {
            id: "err-article-09",
            stem: "(A) We had (B) a lunch (C) at a lovely restaurant (D) near the river.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'a lunch' should be 'lunch' because meal names generally take the zero article.",
            fullExplanation: "Meal names (breakfast, lunch, dinner) normally do not take an article when used in a general way: 'We had lunch'. An article is used only with an adjective modifier like 'a wonderful lunch'. Without a modifier, the zero article is standard.",
            source: "Swan, M. Practical English Usage (4th ed.), §68"
          },
          {
            id: "err-article-10",
            stem: "(A) The professor mentioned (B) that the Sun is (C) a star (D) in a Milky Way galaxy.",
            options: ["D", "A", "B", "C"],
            answer: "D",
            explanation: "'D' is incorrect — 'a Milky Way galaxy' should be 'the Milky Way galaxy' because unique proper nouns take 'the'.",
            fullExplanation: "'The Milky Way' is a unique proper noun and requires the definite article 'the'. There is only one Milky Way, so the indefinite article 'a' is incorrect. Similarly, 'the Sun', 'the Earth', and 'the Moon' use 'the'.",
            source: "Swan, M. Practical English Usage (4th ed.), §68"
          },
          {
            id: "err-article-11",
            stem: "(A) An elephant is (B) largest land animal (C) currently living (D) on Earth.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'largest' should be 'the largest' because superlatives require the definite article.",
            fullExplanation: "Superlative adjectives must be preceded by the definite article 'the'. 'The largest land animal' is correct. Omitting the article before a superlative is a grammatical error.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 90"
          },
          {
            id: "err-article-12",
            stem: "(A) She went to (B) the bed early (C) because she had (D) an early flight the next morning.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'the bed' should be 'bed' because 'go to bed' is a fixed expression with the zero article.",
            fullExplanation: "Certain fixed expressions use the zero article: 'go to bed', 'go to school', 'go to work', 'go to church'. Adding 'the' changes the meaning to refer to the physical object/place rather than its function. 'Go to the bed' is not idiomatic.",
            source: "Swan, M. Practical English Usage (4th ed.), §68"
          },
          {
            id: "err-article-13",
            stem: "(A) Life on (B) the Mars (C) remains a fascinating subject (D) for scientists worldwide.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'the Mars' should be 'Mars' because planet names do not take the definite article.",
            fullExplanation: "Planet names (Mars, Venus, Jupiter) do not take the definite article, unlike 'the Earth', 'the Moon', or 'the Sun'. 'The Mars' is incorrect; it should simply be 'Mars'.",
            source: "Swan, M. Practical English Usage (4th ed.), §68"
          },
          {
            id: "err-article-14",
            stem: "(A) He plays (B) football every weekend (C) at a local park (D) near the river.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'a local park' should be 'the local park' when referring to a specific known park.",
            fullExplanation: "When the speaker and listener both know which park is being referred to (established by 'near the river'), the definite article 'the' is more appropriate. The indefinite 'a' implies the park has not been identified. Context calls for 'the local park'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 72"
          },
          {
            id: "err-article-15",
            stem: "(A) The children love (B) playing in (C) a snow (D) during the winter holidays.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'a snow' should be 'the snow' or just 'snow' because 'snow' is uncountable.",
            fullExplanation: "'Snow' is an uncountable noun and cannot take the indefinite article 'a'. The correct options are 'the snow' (specific snow in their area) or 'snow' (general). Using 'a' with an uncountable noun is a grammatical error.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 69"
          }
        ]
      },
      {
        id: "err-prep",
        title: "Wrong preposition",
        tasks: [
          {
            id: "err-prep-01",
            stem: "(A) She has been married (B) with a doctor (C) for over (D) twenty years.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'married with' should be 'married to'; the correct preposition after 'married' is 'to'.",
            fullExplanation: "The correct collocation is 'married to someone', not 'married with'. This is a very common error, especially for learners whose first language uses a preposition meaning 'with' in this context.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-02",
            stem: "(A) The students arrived (B) to the classroom (C) ten minutes late (D) for the exam.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'arrived to' should be 'arrived at'; the preposition after 'arrive' is 'at' (or 'in' for cities/countries).",
            fullExplanation: "'Arrive' takes the preposition 'at' for specific places and 'in' for cities, countries, or large areas. 'Arrive to' is not standard English. This is one of the most common preposition errors.",
            source: "Swan, M. Practical English Usage (4th ed.), §82"
          },
          {
            id: "err-prep-03",
            stem: "(A) He insisted (B) to pay (C) for everyone's dinner (D) at the restaurant.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'insisted to pay' should be 'insisted on paying'; 'insist' takes 'on' + gerund.",
            fullExplanation: "'Insist' is followed by 'on' + gerund (insist on doing) or 'that' + clause. 'Insist to do' is not grammatical in English. The correct form is 'insisted on paying'.",
            source: "Swan, M. Practical English Usage (4th ed.), §279"
          },
          {
            id: "err-prep-04",
            stem: "(A) We congratulated her (B) for winning (C) the science competition (D) at her school.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'congratulated for' should be 'congratulated on'; the preposition after 'congratulate' is 'on'.",
            fullExplanation: "The correct collocation is 'congratulate someone on something'. While 'for' might seem logical, it is not the standard preposition used with 'congratulate' in English.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-05",
            stem: "(A) This research is different (B) than anything (C) published in the field (D) last decade.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'different than' should be 'different from' in standard British English.",
            fullExplanation: "In standard British English, 'different from' is the accepted form. 'Different than' is common in American English but considered non-standard in formal contexts. 'Different to' is also used in British English. 'Different from' is the safest choice.",
            source: "Swan, M. Practical English Usage (4th ed.), §154"
          },
          {
            id: "err-prep-06",
            stem: "(A) The manager (B) apologised the client (C) for the delay (D) in processing the order.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'apologised the client' should be 'apologised to the client'; 'apologise' requires 'to' before a person.",
            fullExplanation: "'Apologise' is an intransitive verb that requires the preposition 'to' before the person: 'apologise to someone for something'. Omitting 'to' is a grammatical error.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-07",
            stem: "(A) She is very good (B) in mathematics (C) and always scores (D) the highest marks.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'good in' should be 'good at'; the correct preposition after 'good' (meaning skilled) is 'at'.",
            fullExplanation: "When 'good' means skilled or proficient, the correct preposition is 'at': 'good at mathematics'. 'Good in' is a common error influenced by other languages. 'Good for' has a different meaning (beneficial).",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-08",
            stem: "(A) The town centre consists (B) from a market square, (C) a church, and (D) several small shops.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'consists from' should be 'consists of'; the fixed phrase is 'consist of'.",
            fullExplanation: "'Consist of' is a fixed phrasal verb meaning 'to be made up of'. 'Consist from' does not exist in English. There is no alternative preposition — 'of' is the only correct choice.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-09",
            stem: "(A) They blamed the delay (B) to the heavy rain (C) that flooded (D) the main roads.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'blamed to' should be 'blamed on'; the correct phrase is 'blame something on something'.",
            fullExplanation: "'Blame' can be used in two patterns: 'blame someone for something' or 'blame something on someone/something'. 'Blame to' is not a correct English collocation.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-10",
            stem: "(A) He prevented the children (B) to enter (C) the restricted area (D) behind the building.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'prevented to enter' should be 'prevented from entering'; 'prevent' takes 'from' + gerund.",
            fullExplanation: "'Prevent someone from doing something' is the correct pattern. 'Prevent someone to do something' is a common error. The preposition 'from' and the gerund form are both required.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-11",
            stem: "(A) The report focused (B) in the impact (C) of climate change (D) on coastal communities.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'focused in' should be 'focused on'; the correct preposition after 'focus' is 'on'.",
            fullExplanation: "The standard collocation is 'focus on something', not 'focus in'. This applies to both the verb and the noun form: 'the focus on' or 'focus on doing something'.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-12",
            stem: "(A) She suffers (B) from severe allergies (C) and is allergic (D) of dust and pollen.",
            options: ["D", "A", "B", "C"],
            answer: "D",
            explanation: "'D' is incorrect — 'allergic of' should be 'allergic to'; the correct preposition after 'allergic' is 'to'.",
            fullExplanation: "The adjective 'allergic' takes the preposition 'to': 'allergic to something'. 'Allergic of' is not standard English. Note that 'suffers from' in (B) is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-13",
            stem: "(A) The children were excited (B) for the trip (C) to the natural history museum (D) next Saturday.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'excited for' should be 'excited about'; the standard preposition after 'excited' is 'about'.",
            fullExplanation: "In standard English, the adjective 'excited' takes the preposition 'about': 'excited about something'. While 'excited for' is increasingly common in informal American English, 'about' is the standard choice.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-14",
            stem: "(A) He depends (B) of his parents (C) for financial support (D) during his studies.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'depends of' should be 'depends on'; the correct preposition after 'depend' is 'on'.",
            fullExplanation: "'Depend on' is the correct collocation in English. 'Depend of' does not exist. This is a frequent error for speakers of Romance languages, where the equivalent verb uses a preposition meaning 'of'.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-prep-15",
            stem: "(A) The ambassador met (B) with the prime minister (C) to discuss (D) trade agreements between the nations.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'met with' should be 'met' (no preposition); in British English, 'meet' is transitive.",
            fullExplanation: "In British English, 'meet' is a transitive verb and does not need a preposition: 'met the prime minister'. 'Met with' is acceptable in American English but considered non-standard in British English for a planned meeting with a person.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          }
        ]
      },
      {
        id: "err-ger-inf",
        title: "Gerund vs infinitive error",
        tasks: [
          {
            id: "err-ger-inf-01",
            stem: "(A) She enjoys (B) to swim (C) in the ocean (D) every summer morning.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to swim' should be 'swimming' because 'enjoy' is followed by a gerund.",
            fullExplanation: "'Enjoy' is one of several verbs that are always followed by the gerund (-ing form), never the infinitive. Other verbs in this category include 'finish', 'avoid', 'suggest', and 'mind'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "err-ger-inf-02",
            stem: "(A) The doctor advised (B) him giving up (C) smoking (D) for the sake of his health.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'advised him giving up' should be 'advised him to give up'; 'advise + object' takes an infinitive.",
            fullExplanation: "'Advise' follows two patterns: 'advise doing something' (no object) or 'advise someone to do something' (with object). When a personal object is present, the infinitive must follow, not the gerund.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 54"
          },
          {
            id: "err-ger-inf-03",
            stem: "(A) He avoided (B) to answer (C) the journalist's questions (D) about the scandal.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to answer' should be 'answering' because 'avoid' is always followed by a gerund.",
            fullExplanation: "'Avoid' is always followed by the gerund: 'avoid doing something'. 'Avoid to do' is not grammatical in English. This is a fixed pattern that must be memorised.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "err-ger-inf-04",
            stem: "(A) We look forward (B) to receive (C) your reply (D) at your earliest convenience.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to receive' should be 'to receiving' because 'look forward to' takes a gerund.",
            fullExplanation: "In the phrase 'look forward to', the word 'to' is a preposition, not part of an infinitive. Prepositions are followed by the gerund. The correct form is 'look forward to receiving'. This is one of the most common gerund/infinitive errors.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 61"
          },
          {
            id: "err-ger-inf-05",
            stem: "(A) The company decided (B) opening (C) a new branch (D) in the city centre.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'decided opening' should be 'decided to open' because 'decide' takes an infinitive.",
            fullExplanation: "'Decide' is followed by the infinitive: 'decide to do something'. The gerund is not used after 'decide'. Other verbs that take the infinitive include 'agree', 'promise', 'refuse', and 'hope'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 54"
          },
          {
            id: "err-ger-inf-06",
            stem: "(A) She admitted (B) to steal (C) the documents (D) from the office safe.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to steal' should be 'stealing' or 'to stealing'; 'admit' takes a gerund.",
            fullExplanation: "'Admit' is followed by the gerund: 'admit doing something'. The infinitive 'to steal' is incorrect after 'admit'. The correct form is 'admitted stealing'. 'Admit to doing something' is also acceptable.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "err-ger-inf-07",
            stem: "(A) I can't imagine (B) to live (C) in a city (D) without any green spaces.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to live' should be 'living' because 'imagine' is followed by a gerund.",
            fullExplanation: "'Imagine' always takes the gerund: 'imagine doing something'. The infinitive form is not used after 'imagine'. The correct form is 'can't imagine living in a city'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "err-ger-inf-08",
            stem: "(A) They suggested (B) to postpone (C) the meeting (D) until next Friday.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to postpone' should be 'postponing' because 'suggest' takes a gerund.",
            fullExplanation: "'Suggest' takes the gerund or a 'that' clause, never the infinitive. 'Suggest to postpone' is a common error. The correct forms are 'suggested postponing' or 'suggested that we postpone'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "err-ger-inf-09",
            stem: "(A) He is used (B) to work (C) long hours (D) at the hospital.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to work' should be 'to working' because 'be used to' takes a gerund.",
            fullExplanation: "'Be used to' means 'be accustomed to' and is followed by a gerund or noun. The 'to' is a preposition, not part of an infinitive. 'Used to work' (without 'be') is a different structure meaning past habit. 'Is used to working' is correct here.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 61"
          },
          {
            id: "err-ger-inf-10",
            stem: "(A) She practiced (B) to play (C) the violin (D) for three hours every day.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to play' should be 'playing' because 'practise' is followed by a gerund.",
            fullExplanation: "'Practise' (British English) or 'practice' (American English) is followed by the gerund: 'practise playing'. The infinitive is not used after this verb.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "err-ger-inf-11",
            stem: "(A) The teacher encouraged (B) the students studying (C) harder (D) for the final exam.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'students studying' should be 'students to study' because 'encourage + object' takes an infinitive.",
            fullExplanation: "'Encourage' with an object is followed by the infinitive: 'encourage someone to do something'. 'Encourage someone doing' is incorrect. The correct form is 'encouraged the students to study harder'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 54"
          },
          {
            id: "err-ger-inf-12",
            stem: "(A) We considered (B) to move (C) to the countryside (D) after retiring from our jobs.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to move' should be 'moving' because 'consider' takes a gerund.",
            fullExplanation: "'Consider' is followed by the gerund: 'consider doing something'. 'Consider to do' is a common error. The correct form is 'considered moving to the countryside'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "err-ger-inf-13",
            stem: "(A) He risked (B) to lose (C) his entire investment (D) in the volatile market.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'to lose' should be 'losing' because 'risk' is always followed by a gerund.",
            fullExplanation: "'Risk' is always followed by the gerund: 'risk doing something'. 'Risk to do' is not grammatical. The correct form is 'risked losing his entire investment'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 53"
          },
          {
            id: "err-ger-inf-14",
            stem: "(A) I would like (B) travelling (C) around South America (D) during the summer holidays.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'would like travelling' should be 'would like to travel' because 'would like' takes an infinitive.",
            fullExplanation: "'Would like' is followed by the infinitive: 'would like to do something'. 'Like' alone can take either a gerund or infinitive with slightly different meanings, but 'would like' always takes the infinitive.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 54"
          },
          {
            id: "err-ger-inf-15",
            stem: "(A) The regulations prohibit (B) visitors to feed (C) the animals (D) in the wildlife reserve.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'visitors to feed' should be 'visitors from feeding'; 'prohibit' takes 'from' + gerund.",
            fullExplanation: "'Prohibit' follows the pattern 'prohibit someone from doing something'. 'Prohibit someone to do something' is incorrect. The correct form is 'prohibit visitors from feeding the animals'.",
            source: "Swan, M. Practical English Usage (4th ed.), §279"
          }
        ]
      },
      {
        id: "err-adj-adv",
        title: "Adjective vs adverb confusion",
        tasks: [
          {
            id: "err-adj-adv-01",
            stem: "(A) She performed (B) remarkable well (C) in the piano competition (D) last Saturday.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'remarkable well' should be 'remarkably well'; an adverb is needed to modify another adverb.",
            fullExplanation: "An adverb (remarkably) is needed to modify another adverb (well). 'Remarkable' is an adjective and cannot modify 'well'. Adverbs of degree like 'remarkably', 'incredibly', and 'extremely' modify other adverbs or adjectives.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 100"
          },
          {
            id: "err-adj-adv-02",
            stem: "(A) The soup tastes (B) deliciously (C) after being simmered (D) for several hours.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'deliciously' should be 'delicious'; linking verbs like 'taste' take adjectives, not adverbs.",
            fullExplanation: "Linking verbs (taste, smell, feel, look, sound) describe a state and are followed by adjectives, not adverbs. 'The soup tastes delicious' is correct. The adjective describes the soup, not the action of tasting.",
            source: "Swan, M. Practical English Usage (4th ed.), §13"
          },
          {
            id: "err-adj-adv-03",
            stem: "(A) He drove (B) too fastly (C) on the motorway (D) and received a speeding ticket.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'fastly' should be 'fast'; 'fast' is both an adjective and an adverb.",
            fullExplanation: "'Fast' is an irregular adverb — it does not add '-ly'. The correct form is 'drove too fast'. 'Fastly' does not exist in standard English. Other similar words include 'hard' (not 'hardly', which means 'barely').",
            source: "Swan, M. Practical English Usage (4th ed.), §13"
          },
          {
            id: "err-adj-adv-04",
            stem: "(A) The project is going (B) good (C) and should be completed (D) by the end of the month.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'good' should be 'well'; an adverb is needed to modify the verb 'going'.",
            fullExplanation: "'Good' is an adjective and cannot modify a verb. The adverb 'well' is needed: 'going well'. This is one of the most common adjective/adverb errors in English, particularly in informal speech.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 100"
          },
          {
            id: "err-adj-adv-05",
            stem: "(A) The flowers smell (B) sweetly (C) in the morning air (D) after a night of rain.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'sweetly' should be 'sweet'; the linking verb 'smell' takes an adjective.",
            fullExplanation: "When 'smell' is a linking verb (describing a quality), it takes an adjective: 'smell sweet'. The adverb 'sweetly' would only be correct if 'smell' were used as an action verb (e.g., 'She sweetly smelled the roses' — but this is unusual).",
            source: "Swan, M. Practical English Usage (4th ed.), §13"
          },
          {
            id: "err-adj-adv-06",
            stem: "(A) She spoke (B) very confident (C) during her presentation (D) to the board of directors.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'confident' should be 'confidently'; an adverb is needed to modify the verb 'spoke'.",
            fullExplanation: "The verb 'spoke' requires an adverb to describe how she spoke. 'Confident' is an adjective that describes a noun. The correct form is 'spoke very confidently'. Adverbs of manner typically end in '-ly'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 100"
          },
          {
            id: "err-adj-adv-07",
            stem: "(A) The injured player (B) walked slowly (C) off the field (D) and looked painfully.",
            options: ["D", "A", "B", "C"],
            answer: "D",
            explanation: "'D' is incorrect — 'looked painfully' should be 'looked painful'; linking verbs take adjectives.",
            fullExplanation: "When 'look' is a linking verb meaning 'appear/seem', it takes an adjective, not an adverb. 'Looked painful' describes the player's appearance. 'Looked painfully' would incorrectly modify the act of looking.",
            source: "Swan, M. Practical English Usage (4th ed.), §13"
          },
          {
            id: "err-adj-adv-08",
            stem: "(A) The team worked (B) real hard (C) to meet the deadline (D) for the client.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'real hard' should be 'really hard'; the adverb 'really' is needed to modify the adverb 'hard'.",
            fullExplanation: "'Real' is an adjective and cannot modify the adverb 'hard'. The adverb 'really' is needed. While 'real' is used as an adverb in informal American English, it is not standard in formal writing.",
            source: "Swan, M. Practical English Usage (4th ed.), §13"
          },
          {
            id: "err-adj-adv-09",
            stem: "(A) He felt (B) badly (C) about forgetting (D) his friend's birthday.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'badly' should be 'bad'; the linking verb 'felt' (emotion) takes an adjective.",
            fullExplanation: "When 'feel' describes an emotional state, it is a linking verb and takes an adjective: 'felt bad'. 'Felt badly' would literally mean his sense of touch was impaired. This is a frequently confused usage.",
            source: "Swan, M. Practical English Usage (4th ed.), §13"
          },
          {
            id: "err-adj-adv-10",
            stem: "(A) The new employee (B) completed the task (C) efficient (D) within the given timeframe.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'efficient' should be 'efficiently'; an adverb is needed to modify the verb 'completed'.",
            fullExplanation: "The verb 'completed' needs an adverb to describe how the task was completed. 'Efficient' is an adjective that describes nouns. The correct form is 'completed the task efficiently'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 100"
          },
          {
            id: "err-adj-adv-11",
            stem: "(A) The music sounded (B) beautifully (C) as it echoed (D) through the empty cathedral.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'beautifully' should be 'beautiful'; the linking verb 'sounded' takes an adjective.",
            fullExplanation: "'Sound' as a linking verb takes an adjective to describe the noun. 'The music sounded beautiful' describes the quality of the music. 'Sounded beautifully' would incorrectly modify the verb as if describing the manner of producing sound.",
            source: "Swan, M. Practical English Usage (4th ed.), §13"
          },
          {
            id: "err-adj-adv-12",
            stem: "(A) She finished the marathon (B) surprising quickly (C) despite having trained (D) for only two months.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'surprising quickly' should be 'surprisingly quickly'; an adverb is needed to modify another adverb.",
            fullExplanation: "'Surprising' is an adjective and cannot modify the adverb 'quickly'. The adverb form 'surprisingly' is needed to modify another adverb. This follows the rule that adverbs, not adjectives, modify other adverbs.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 100"
          },
          {
            id: "err-adj-adv-13",
            stem: "(A) The professor explained (B) the concept (C) clear enough (D) for everyone to understand.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'clear enough' should be 'clearly enough'; an adverb is needed to modify the verb 'explained'.",
            fullExplanation: "The verb 'explained' requires an adverb modifier. 'Clear' is an adjective. The correct form is 'explained the concept clearly enough'. The adverb 'clearly' modifies how the professor explained.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 100"
          },
          {
            id: "err-adj-adv-14",
            stem: "(A) The bread (B) that she baked (C) smelled wonderfully (D) throughout the entire house.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'smelled wonderfully' should be 'smelled wonderful'; linking verbs take adjectives.",
            fullExplanation: "When 'smell' is used as a linking verb (describing a quality of the subject), it takes an adjective. 'The bread smelled wonderful' describes the bread's aroma. The adverb 'wonderfully' would incorrectly modify the act of smelling.",
            source: "Swan, M. Practical English Usage (4th ed.), §13"
          },
          {
            id: "err-adj-adv-15",
            stem: "(A) He answered (B) the interview questions (C) very calm (D) and impressed the panel.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'calm' should be 'calmly'; an adverb is needed to modify the verb 'answered'.",
            fullExplanation: "'Answered' is an action verb that requires an adverb to describe the manner. 'Calm' is an adjective. The correct form is 'answered the interview questions very calmly'. The adverb 'calmly' describes how he answered.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 100"
          }
        ]
      },
      {
        id: "err-comp",
        title: "Comparative/superlative errors",
        tasks: [
          {
            id: "err-comp-01",
            stem: "(A) This novel is (B) more better (C) than the one (D) I read last month.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'more better' is a double comparative; it should be simply 'better'.",
            fullExplanation: "'Better' is already the comparative form of 'good'. Adding 'more' creates a double comparative, which is grammatically incorrect. The correct form is 'better than'. This rule applies to all irregular comparatives: 'worse', 'farther/further', 'less'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-02",
            stem: "(A) She is (B) the most smartest (C) student (D) in our entire graduating class.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'the most smartest' is a double superlative; it should be 'the smartest'.",
            fullExplanation: "Short adjectives (one syllable, some two-syllable) form superlatives with '-est', not 'most'. 'The most smartest' is a double superlative and is always incorrect. The correct form is 'the smartest'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-03",
            stem: "(A) The weather today is (B) worser (C) than yesterday (D) according to the forecast.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'worser' should be 'worse'; 'worse' is already the comparative form of 'bad'.",
            fullExplanation: "'Bad' has an irregular comparative form: 'worse'. Adding '-er' to 'worse' creates the non-standard form 'worser'. While Shakespeare used 'worser', it is not acceptable in modern standard English.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-04",
            stem: "(A) Of the three candidates, (B) Maria is (C) more qualified (D) for the management position.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'more qualified' should be 'the most qualified' because three or more items require the superlative.",
            fullExplanation: "When comparing three or more items, the superlative form is required. 'More qualified' is comparative (for two items). With three candidates, the correct form is 'the most qualified'. The phrase 'of the three' clearly signals the superlative.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 105"
          },
          {
            id: "err-comp-05",
            stem: "(A) She is (B) more happier (C) now than she was (D) at her previous job.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'more happier' should be 'happier'; it is a double comparative.",
            fullExplanation: "'Happy' forms its comparative with '-ier': 'happier'. Adding 'more' creates a double comparative, which is always incorrect. Two-syllable adjectives ending in '-y' form comparatives with '-ier', not 'more + -ier'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-06",
            stem: "(A) Learning Chinese is (B) much more difficult (C) as learning (D) a European language.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'more difficult as' should be 'more difficult than'; comparatives use 'than', not 'as'.",
            fullExplanation: "Comparative adjectives are followed by 'than', not 'as'. 'As...as' is used for equality (e.g., 'as difficult as'). When using 'more difficult', the correct conjunction is 'than'. Mixing these structures is a common error.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-07",
            stem: "(A) The new smartphone (B) is more thinner (C) than the previous model (D) released last year.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'more thinner' should be 'thinner'; short adjectives use '-er', not 'more + -er'.",
            fullExplanation: "'Thin' is a short adjective that forms its comparative with '-er': 'thinner'. Using 'more' with '-er' creates a double comparative. The correct form is simply 'thinner than'. 'More' is used with longer adjectives (two or more syllables).",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-08",
            stem: "(A) She is (B) the older (C) of the four siblings (D) in her family.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'the older' should be 'the oldest' because four siblings require the superlative form.",
            fullExplanation: "With three or more items, the superlative is required. 'The older' is comparative and is correct only for two items. With four siblings, the correct form is 'the oldest'. The superlative indicates the highest degree among all members of a group.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 105"
          },
          {
            id: "err-comp-09",
            stem: "(A) This bridge is (B) the longer (C) suspension bridge (D) in the entire country.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'the longer' should be 'the longest' because 'in the entire country' implies the superlative.",
            fullExplanation: "The phrase 'in the entire country' indicates a comparison among all bridges in the country, which requires the superlative. 'The longer' is comparative and only works for two items. 'The longest suspension bridge' is correct.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 105"
          },
          {
            id: "err-comp-10",
            stem: "(A) Public transport (B) is more cheaper (C) than driving a car (D) in most European cities.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'more cheaper' should be 'cheaper'; the comparative form of 'cheap' is 'cheaper', not 'more cheaper'.",
            fullExplanation: "'Cheap' is a short adjective that forms its comparative with '-er': 'cheaper'. 'More cheaper' is a double comparative and is always incorrect. Short adjectives (one syllable) use '-er' for comparatives and '-est' for superlatives.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-11",
            stem: "(A) He runs (B) more faster (C) than anyone else (D) on the athletics team.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'more faster' should be 'faster'; 'faster' is already comparative.",
            fullExplanation: "'Fast' forms its comparative with '-er': 'faster'. Adding 'more' creates a double comparative, which is grammatically incorrect. The same rule applies to 'slower', 'harder', 'longer', etc.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-12",
            stem: "(A) Of all the planets, (B) Jupiter is (C) larger (D) in our solar system.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'larger' should be 'the largest' because 'of all the planets' requires the superlative.",
            fullExplanation: "'Of all' clearly signals a comparison among many items, which requires the superlative form. 'Larger' is comparative (for two). The correct form is 'Jupiter is the largest in our solar system'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 105"
          },
          {
            id: "err-comp-13",
            stem: "(A) My handwriting is (B) worst (C) than my sister's (D) by quite a wide margin.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'worst' should be 'worse'; the comparative of 'bad' is 'worse', not 'worst'.",
            fullExplanation: "'Worst' is the superlative form of 'bad', used when comparing three or more. For comparing two things (my handwriting vs. my sister's), the comparative 'worse' is needed. 'Worse than' is the correct comparative construction.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-14",
            stem: "(A) This restaurant serves (B) the most freshest (C) seafood (D) in the harbour district.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'the most freshest' is a double superlative; it should be 'the freshest'.",
            fullExplanation: "'Fresh' is a short adjective that forms its superlative with '-est': 'the freshest'. 'The most freshest' is a double superlative and is always incorrect. This is the same error as 'the most biggest' or 'the most smartest'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          },
          {
            id: "err-comp-15",
            stem: "(A) Today's lecture was (B) far more interesting (C) as the one (D) we attended on Monday.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'more interesting as' should be 'more interesting than'; comparatives require 'than'.",
            fullExplanation: "Comparative constructions use 'than', not 'as'. 'As...as' is for equal comparisons (e.g., 'as interesting as'). When a comparative form like 'more interesting' is used, 'than' must follow. 'Far' is a valid intensifier for comparatives.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 104"
          }
        ]
      },
      {
        id: "err-pronoun",
        title: "Pronoun errors",
        tasks: [
          {
            id: "err-pronoun-01",
            stem: "(A) Each student must bring (B) their own laptop (C) to the lab (D) for the exam.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'their' should be 'his or her' (formal) because 'each student' is grammatically singular.",
            fullExplanation: "In formal grammar, 'each' is singular and requires a singular pronoun: 'his or her own laptop'. While 'their' is increasingly accepted as a gender-neutral singular pronoun, traditional grammar rules mark it as an agreement error with singular antecedents.",
            source: "Azar, B.S. Understanding and Using English Grammar (5th ed.), Chapter 12"
          },
          {
            id: "err-pronoun-02",
            stem: "(A) The manager (B) gave the report (C) to my colleague and I (D) before the meeting started.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'my colleague and I' should be 'my colleague and me'; after a preposition, use the object pronoun.",
            fullExplanation: "After a preposition like 'to', the object pronoun 'me' is required, not the subject pronoun 'I'. A simple test is to remove the other person: 'gave the report to I' is clearly wrong. 'To me' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §428"
          },
          {
            id: "err-pronoun-03",
            stem: "(A) The cat cleaned (B) himself thoroughly (C) after coming inside (D) from the garden.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'himself' should be 'itself' because 'cat' (when gender is unspecified) takes the neuter pronoun.",
            fullExplanation: "Animals of unspecified gender are referred to with 'it/itself' in standard English. 'Himself' implies a male person. The correct form is 'The cat cleaned itself'. However, pet owners sometimes use 'he/himself' or 'she/herself'.",
            source: "Swan, M. Practical English Usage (4th ed.), §428"
          },
          {
            id: "err-pronoun-04",
            stem: "(A) The woman (B) which lives next door (C) is a retired professor (D) of marine biology.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'which' should be 'who' because the relative pronoun refers to a person.",
            fullExplanation: "'Which' is used for things and animals, not people. When the antecedent is a person, the correct relative pronoun is 'who' (subject) or 'whom' (object). 'The woman who lives next door' is correct.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 92"
          },
          {
            id: "err-pronoun-05",
            stem: "(A) My brother and me (B) went hiking (C) in the national park (D) last weekend.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'My brother and me' should be 'My brother and I'; subject pronouns are needed before the verb.",
            fullExplanation: "The subject of a sentence requires the subject pronoun 'I', not the object pronoun 'me'. Test by removing the other person: 'Me went hiking' is clearly wrong; 'I went hiking' is correct. Therefore, 'My brother and I' is right.",
            source: "Swan, M. Practical English Usage (4th ed.), §428"
          },
          {
            id: "err-pronoun-06",
            stem: "(A) The company announced (B) that them would be (C) restructuring operations (D) in the coming year.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'them' should be 'they'; a subject pronoun is needed as the subject of the clause.",
            fullExplanation: "'Them' is an object pronoun and cannot serve as the subject of a clause. The subject pronoun 'they' is required: 'they would be restructuring'. This is a basic pronoun case error.",
            source: "Swan, M. Practical English Usage (4th ed.), §428"
          },
          {
            id: "err-pronoun-07",
            stem: "(A) The teacher asked the students (B) to seat themself (C) before the lesson (D) could begin.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'themself' should be 'themselves' because 'students' is plural.",
            fullExplanation: "The reflexive pronoun for a plural antecedent is 'themselves', not 'themself'. 'Themself' is sometimes used as a singular gender-neutral pronoun, but with a clearly plural antecedent like 'students', 'themselves' is the only correct form.",
            source: "Swan, M. Practical English Usage (4th ed.), §493"
          },
          {
            id: "err-pronoun-08",
            stem: "(A) This is the scientist (B) whom discovered (C) the new species (D) in the Amazon rainforest.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'whom discovered' should be 'who discovered'; 'who' is the subject form for relative clauses.",
            fullExplanation: "'Who' is used as the subject of a relative clause, while 'whom' is used as the object. Here, the pronoun is the subject of 'discovered', so 'who' is correct. A test: 'he discovered' (not 'him discovered').",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          },
          {
            id: "err-pronoun-09",
            stem: "(A) Neither of the twins (B) remembered to bring (C) their passports (D) to the airport.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'their passports' should be 'his or her passport' because 'neither' is grammatically singular.",
            fullExplanation: "In formal grammar, 'neither' is singular and should be matched with 'his or her passport' (singular). The use of 'their' with singular indefinite pronouns is common in speech but is considered incorrect in formal grammar tests.",
            source: "Azar, B.S. Understanding and Using English Grammar (5th ed.), Chapter 12"
          },
          {
            id: "err-pronoun-10",
            stem: "(A) The dog wagged (B) it's tail (C) excitedly when (D) the owner returned home.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'it's' should be 'its'; the possessive form has no apostrophe.",
            fullExplanation: "'It's' is the contraction of 'it is' or 'it has'. The possessive pronoun is 'its' (no apostrophe). This is one of the most common errors in English writing. 'Its tail' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §302"
          },
          {
            id: "err-pronoun-11",
            stem: "(A) The tourists enjoyed (B) theirselves (C) at the cultural festival (D) in the old town.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'theirselves' should be 'themselves'; 'theirselves' is non-standard English.",
            fullExplanation: "'Theirselves' is a non-standard form sometimes used in dialects but is not accepted in standard English. The correct reflexive pronoun for third-person plural is 'themselves'. Similarly, 'hisself' should be 'himself'.",
            source: "Azar, B.S. Understanding and Using English Grammar (5th ed.), Chapter 12"
          },
          {
            id: "err-pronoun-12",
            stem: "(A) The book (B) who was recommended (C) by the teacher (D) is available in the library.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'who' should be 'that' or 'which' because the relative pronoun refers to a thing.",
            fullExplanation: "'Who' is used for people, not things. For objects like 'the book', the correct relative pronouns are 'which' or 'that'. 'The book that was recommended' or 'the book which was recommended' are both correct.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 92"
          },
          {
            id: "err-pronoun-13",
            stem: "(A) Us students (B) organised a charity event (C) to raise funds (D) for the local hospital.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'Us students' should be 'We students'; a subject pronoun is needed before the verb.",
            fullExplanation: "'Us' is an object pronoun and cannot be the subject of a sentence. The correct form is 'We students organised...'. Test by removing 'students': 'Us organised' is clearly wrong; 'We organised' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §428"
          },
          {
            id: "err-pronoun-14",
            stem: "(A) The director, (B) that won several awards, (C) is releasing a new film (D) this autumn.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'that' should be 'who' because non-defining relative clauses cannot use 'that'.",
            fullExplanation: "In non-defining (non-restrictive) relative clauses set off by commas, 'that' cannot be used. The correct relative pronoun for a person in a non-defining clause is 'who': 'The director, who won several awards'. 'That' is only for defining clauses.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 93"
          },
          {
            id: "err-pronoun-15",
            stem: "(A) Between you and I, (B) the company's profits (C) have declined sharply (D) this quarter.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'Between you and I' should be 'Between you and me'; prepositions take object pronouns.",
            fullExplanation: "'Between' is a preposition and requires object pronouns. 'Between you and me' is correct. 'Between you and I' is a hypercorrection — speakers mistakenly use 'I' thinking it sounds more formal, but it is grammatically incorrect.",
            source: "Swan, M. Practical English Usage (4th ed.), §428"
          }
        ]
      },
      {
        id: "err-redundant",
        title: "Redundant words",
        tasks: [
          {
            id: "err-redundant-01",
            stem: "(A) She returned back (B) to the office (C) after her lunch break (D) at the café.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'returned back' is redundant; 'returned' already means 'went back'.",
            fullExplanation: "'Return' means 'go back' or 'come back', so 'back' is redundant. The correct form is simply 'She returned to the office'. This is a common tautological error in both speech and writing.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-02",
            stem: "(A) The reason (B) why he resigned (C) is because he found (D) a better position.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'reason...is because' is redundant; use 'reason...is that' instead.",
            fullExplanation: "'The reason is because' is a common redundancy. 'Because' means 'for the reason that', so 'the reason is because' effectively says 'the reason is for the reason that'. The correct form is 'The reason is that he found' or simply 'He resigned because'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-03",
            stem: "(A) We must cooperate (B) together to complete (C) this research project (D) by the deadline.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'cooperate together' is redundant; 'cooperate' already implies working together.",
            fullExplanation: "The prefix 'co-' in 'cooperate' already means 'together'. Adding 'together' is a tautology. The correct form is simply 'cooperate to complete'. Similar redundancies include 'collaborate together' and 'combine together'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-04",
            stem: "(A) The project (B) is completely finished (C) and all the final reports (D) have been submitted.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'completely finished' is redundant; 'finished' already implies completion.",
            fullExplanation: "'Finished' means completed; adding 'completely' is redundant because something is either finished or not — there is no partial state of being finished. The correct form is 'The project is finished'. However, this usage is widely accepted informally.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-05",
            stem: "(A) He repeated (B) the instructions again (C) for the students (D) who arrived late.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'repeated again' is redundant; 'repeated' already means 'said again'.",
            fullExplanation: "'Repeat' means 'to do or say again', so 'again' is redundant. The correct form is 'repeated the instructions' or 'said the instructions again'. Using both 'repeated' and 'again' is a tautology.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-06",
            stem: "(A) The new innovation (B) in solar panel technology (C) could reduce energy costs (D) by thirty per cent.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'new innovation' is redundant; an innovation is by definition new.",
            fullExplanation: "An 'innovation' is something new by definition. Adding 'new' is redundant. The correct form is 'The innovation in solar panel technology'. Similar redundancies include 'new invention' and 'old antique'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-07",
            stem: "(A) She advanced forward (B) through the crowded market (C) to reach (D) the main stage.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'advanced forward' is redundant; 'advance' already means to move forward.",
            fullExplanation: "'Advance' means 'move forward', so 'forward' is redundant. The correct form is 'She advanced through the crowded market'. Similar redundancies include 'retreat back' and 'ascend up'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-08",
            stem: "(A) We need to plan ahead (B) for the annual conference (C) that takes place (D) every September.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'plan ahead' is redundant; planning inherently involves thinking about the future.",
            fullExplanation: "'Plan' already means 'to prepare for the future', so 'ahead' is redundant. The correct form is 'We need to plan for the annual conference'. However, 'plan ahead' is very common in everyday English and is widely accepted.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-09",
            stem: "(A) The two teams (B) joined together (C) to form (D) a single research unit.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'joined together' is redundant; 'join' already means to come together.",
            fullExplanation: "'Join' means 'to come together' or 'to connect', making 'together' redundant. The correct form is 'The two teams joined to form'. Similar redundancies include 'merge together' and 'connect together'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-10",
            stem: "(A) The biography describes (B) the true facts (C) about the explorer's (D) dangerous voyages.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'true facts' is redundant; facts are by definition true.",
            fullExplanation: "A 'fact' is something that is true, so 'true facts' is a tautology. The correct form is 'the facts about'. If something is not true, it is not a fact. Similar redundancies include 'honest truth' and 'real reality'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-11",
            stem: "(A) The free gift (B) was included (C) with every purchase (D) over fifty pounds.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'free gift' is redundant; a gift is by definition free.",
            fullExplanation: "A 'gift' is something given without payment, so 'free' is redundant. The correct form is 'The gift was included'. Although 'free gift' is extremely common in marketing, it is a recognised tautology.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-12",
            stem: "(A) She first began (B) her career (C) in journalism (D) over twenty years ago.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'first began' is redundant; 'began' already implies the first time.",
            fullExplanation: "'Began' means 'started for the first time' in this context, so 'first' is redundant. The correct form is 'She began her career'. Adding 'first' does not provide additional information.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-13",
            stem: "(A) The consensus of opinion (B) among the experts (C) is that the economy (D) will improve next year.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'consensus of opinion' is redundant; 'consensus' already means agreement of opinion.",
            fullExplanation: "'Consensus' means 'general agreement', which inherently refers to opinion. 'Of opinion' is redundant. The correct form is 'The consensus among the experts'. 'General consensus' is another common redundancy.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          },
          {
            id: "err-redundant-14",
            stem: "(A) He entered into (B) the building (C) through the main entrance (D) on the ground floor.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'entered into the building' is redundant; 'entered the building' is sufficient.",
            fullExplanation: "'Enter' is a transitive verb that does not need a preposition when followed by a physical place. 'Entered into' is used for agreements or contracts ('entered into a contract'), but for physical spaces, 'entered the building' is correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §449"
          },
          {
            id: "err-redundant-15",
            stem: "(A) The storm completely destroyed (B) the wooden bridge (C) and totally annihilated (D) the nearby barn.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'totally annihilated' is redundant; 'annihilate' already means to destroy completely.",
            fullExplanation: "'Annihilate' means 'to destroy utterly and completely'. Adding 'totally' is redundant because the word already implies total destruction. The correct form is simply 'annihilated the nearby barn'.",
            source: "Swan, M. Practical English Usage (4th ed.), §495"
          }
        ]
      },
      {
        id: "err-word-order",
        title: "Word order errors",
        tasks: [
          {
            id: "err-word-order-01",
            stem: "(A) She always has (B) been supportive (C) of her colleagues' ideas (D) during team meetings.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'always has' should be 'has always'; adverbs of frequency go after the auxiliary verb.",
            fullExplanation: "Adverbs of frequency (always, never, often) are placed after the first auxiliary verb and before the main verb. 'Has always been' is correct, not 'always has been'. The adverb comes between the auxiliary and the past participle.",
            source: "Swan, M. Practical English Usage (4th ed.), §22"
          },
          {
            id: "err-word-order-02",
            stem: "(A) I wonder (B) where is the nearest (C) post office (D) in this area.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'where is the nearest' should be 'where the nearest...is'; indirect questions use statement word order.",
            fullExplanation: "In indirect (embedded) questions, the word order is the same as a statement, not a direct question. 'I wonder where the nearest post office is' is correct. Inverting the subject and verb as in a direct question is an error.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 49"
          },
          {
            id: "err-word-order-03",
            stem: "(A) She only not (B) sings well (C) but also plays (D) the guitar brilliantly.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'only not' should be 'not only'; the fixed expression is 'not only...but also'.",
            fullExplanation: "'Not only...but also' is a fixed correlative conjunction. The word order 'only not' is incorrect; it must be 'not only'. When fronted, it also triggers subject-verb inversion, but the primary error here is the reversed word order.",
            source: "Swan, M. Practical English Usage (4th ed.), §22"
          },
          {
            id: "err-word-order-04",
            stem: "(A) He told me (B) that never he had (C) visited such (D) a beautiful city before.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'never he had' should be 'he had never'; the adverb goes after the auxiliary, not before the subject.",
            fullExplanation: "In a 'that' clause (not starting with a negative), normal word order is used: subject + auxiliary + adverb. 'He had never visited' is correct. Inversion after 'never' occurs only when 'never' is fronted for emphasis in a main clause.",
            source: "Swan, M. Practical English Usage (4th ed.), §22"
          },
          {
            id: "err-word-order-05",
            stem: "(A) Can you tell me (B) how much does this (C) painting cost (D) at the gallery?",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'how much does this' should be 'how much this'; indirect questions don't invert subject and verb.",
            fullExplanation: "After 'Can you tell me', an indirect question follows with statement word order. 'How much this painting costs' is correct. The auxiliary 'does' is not used in indirect questions — the verb takes its normal form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 49"
          },
          {
            id: "err-word-order-06",
            stem: "(A) She gave to her mother (B) a beautiful bouquet (C) of fresh flowers (D) on her birthday.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'gave to her mother a beautiful bouquet' should be 'gave her mother a beautiful bouquet' or 'gave a beautiful bouquet to her mother'.",
            fullExplanation: "With verbs like 'give', you can use two patterns: 'give someone something' or 'give something to someone'. Placing 'to someone' between the verb and the direct object is incorrect. Either 'gave her mother a bouquet' or 'gave a bouquet to her mother'.",
            source: "Swan, M. Practical English Usage (4th ed.), §617"
          },
          {
            id: "err-word-order-07",
            stem: "(A) Do you know (B) what time is it (C) in New York (D) right now?",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'what time is it' should be 'what time it is'; indirect questions use statement order.",
            fullExplanation: "In indirect questions after 'Do you know', statement word order is required. 'What time it is' is correct. 'What time is it?' is a direct question form and cannot follow 'Do you know'.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 49"
          },
          {
            id: "err-word-order-08",
            stem: "(A) She enough quickly (B) finished the report (C) to catch (D) the last train home.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'enough quickly' should be 'quickly enough'; 'enough' follows adverbs and adjectives.",
            fullExplanation: "'Enough' is placed after adverbs and adjectives, not before them. 'Quickly enough' is correct. Before nouns, 'enough' comes first: 'enough time'. This is a common word-order error for English learners.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 101"
          },
          {
            id: "err-word-order-09",
            stem: "(A) He usually doesn't (B) eat breakfast (C) before going (D) to the office.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'usually doesn't' should be 'doesn't usually'; frequency adverbs go after the auxiliary 'doesn't'.",
            fullExplanation: "In negative sentences, adverbs of frequency typically come after the negative auxiliary: 'doesn't usually eat'. Placing the adverb before 'doesn't' sounds unnatural and is considered a word-order error in standard English.",
            source: "Swan, M. Practical English Usage (4th ed.), §22"
          },
          {
            id: "err-word-order-10",
            stem: "(A) She showed me (B) a large wooden lovely (C) music box (D) from her grandmother.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'large wooden lovely' should be 'lovely large wooden'; adjective order is opinion-size-material.",
            fullExplanation: "English requires adjectives to follow a specific order: opinion (lovely), size (large), material (wooden). 'A lovely large wooden music box' follows the correct sequence. Placing 'lovely' after 'wooden' breaks the standard adjective order.",
            source: "Swan, M. Practical English Usage (4th ed.), §12"
          },
          {
            id: "err-word-order-11",
            stem: "(A) I'd like to know (B) where did he go (C) after leaving (D) the office yesterday.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'where did he go' should be 'where he went'; indirect questions use statement order.",
            fullExplanation: "After 'I'd like to know', the indirect question must use statement word order without the auxiliary 'did'. 'Where he went' is correct. In indirect questions, the auxiliary 'do/did/does' is dropped and the verb takes its regular form.",
            source: "Murphy, R. English Grammar in Use (4th ed.), Unit 49"
          },
          {
            id: "err-word-order-12",
            stem: "(A) She speaks (B) fluently enough (C) French to work (D) as an interpreter in Paris.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'fluently enough French' has wrong word order; it should be 'French fluently enough' or 'speaks French fluently enough'.",
            fullExplanation: "The object ('French') should come directly after the verb 'speaks', not after the adverb. The correct order is 'speaks French fluently enough to work'. In English, the object normally follows the verb before any adverbial modifiers.",
            source: "Swan, M. Practical English Usage (4th ed.), §22"
          },
          {
            id: "err-word-order-13",
            stem: "(A) Not only she was (B) talented, but she was also (C) incredibly hardworking (D) throughout her career.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'Not only she was' should be 'Not only was she'; fronted negative expressions require inversion.",
            fullExplanation: "When 'not only' begins a clause, subject-verb inversion is required: 'Not only was she talented'. This is the same rule that applies to 'never', 'rarely', 'hardly', and 'seldom' in fronted position.",
            source: "Hewings, M. Advanced Grammar in Use, Unit 100"
          },
          {
            id: "err-word-order-14",
            stem: "(A) He old enough is (B) to make (C) his own decisions (D) about his education.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'He old enough is' should be 'He is old enough'; the verb 'is' precedes the adjective.",
            fullExplanation: "In English, the standard word order for a statement is subject + verb + complement. 'He is old enough' is correct. Placing the adjective between the subject and verb is not standard English word order.",
            source: "Swan, M. Practical English Usage (4th ed.), §509"
          },
          {
            id: "err-word-order-15",
            stem: "(A) Please explain me (B) how this machine (C) works (D) before I start using it.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'explain me' should be 'explain to me'; 'explain' requires the preposition 'to' before indirect objects.",
            fullExplanation: "'Explain' cannot take a direct personal object without 'to'. The correct pattern is 'explain something to someone' or 'explain to someone how'. 'Explain me' is a common error influenced by other languages where the equivalent verb takes a direct object.",
            source: "Swan, M. Practical English Usage (4th ed.), §617"
          }
        ]
      },
      {
        id: "err-double-neg",
        title: "Double negatives",
        tasks: [
          {
            id: "err-double-neg-01",
            stem: "(A) I didn't see (B) nothing unusual (C) during my walk (D) through the park.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'nothing' should be 'anything'; 'didn't' + 'nothing' creates a non-standard double negative.",
            fullExplanation: "In standard English, only one negative element is used per clause. 'Didn't see nothing' is a double negative. The correct form is 'didn't see anything' or 'saw nothing'. Two negatives can cancel each other out logically.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-02",
            stem: "(A) She can't find (B) her keys (C) nowhere (D) in the house.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'nowhere' should be 'anywhere'; 'can't' + 'nowhere' is a double negative.",
            fullExplanation: "The negative auxiliary 'can't' means one negative is already present. Using 'nowhere' creates a double negative. In standard English, the correct form is 'can't find her keys anywhere' or 'can find her keys nowhere'.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-03",
            stem: "(A) He doesn't never (B) arrive on time (C) for the morning (D) staff meetings.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'doesn't never' should be 'doesn't ever' or 'never'; two negatives are non-standard.",
            fullExplanation: "'Doesn't' and 'never' are both negative words. Using them together creates a double negative that is non-standard. The correct forms are 'doesn't ever arrive' or 'never arrives'. In formal English, one negative per clause is the rule.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-04",
            stem: "(A) The witness claimed (B) she hadn't told (C) nobody about (D) the incident.",
            options: ["C", "A", "B", "D"],
            answer: "C",
            explanation: "'C' is incorrect — 'nobody' should be 'anybody'; 'hadn't' + 'nobody' is a double negative.",
            fullExplanation: "'Hadn't' is already negative, so 'nobody' (also negative) creates a double negative. Standard English requires 'hadn't told anybody' or 'had told nobody'. Both forms are correct individually.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-05",
            stem: "(A) We couldn't barely (B) hear the speaker (C) from the back (D) of the auditorium.",
            options: ["A", "B", "C", "D"],
            answer: "A",
            explanation: "'A' is incorrect — 'couldn't barely' should be 'could barely' or 'couldn't'; 'barely' is already semi-negative.",
            fullExplanation: "'Barely' has a negative meaning ('almost not'). Combining it with 'couldn't' creates a double negative. The correct form is 'could barely hear' or 'couldn't hear'. Words like 'barely', 'hardly', and 'scarcely' are considered negative.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-06",
            stem: "(A) There isn't (B) no reason (C) to cancel the outdoor event (D) this weekend.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'no reason' should be 'any reason'; 'isn't' + 'no' is a double negative.",
            fullExplanation: "'Isn't' is already negative, so 'no' creates a double negative. Standard English requires 'isn't any reason' or 'is no reason'. Both single-negative forms express the same meaning correctly.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-07",
            stem: "(A) She won't tell (B) no one (C) about the surprise party (D) planned for next Friday.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'no one' should be 'anyone'; 'won't' + 'no one' is a double negative.",
            fullExplanation: "'Won't' is a negative contraction, and 'no one' is also negative. The correct form is 'won't tell anyone' or 'will tell no one'. Keeping two negatives is non-standard and can cause confusion about meaning.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-08",
            stem: "(A) The students didn't (B) have no textbooks (C) for the first week (D) of the new semester.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'no textbooks' should be 'any textbooks'; 'didn't have' + 'no' is a double negative.",
            fullExplanation: "'Didn't have' is already negative. Adding 'no' before 'textbooks' creates a double negative. The standard forms are 'didn't have any textbooks' or 'had no textbooks'.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-09",
            stem: "(A) I haven't received (B) no response (C) from the customer service team (D) since last week.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'no response' should be 'any response'; 'haven't' + 'no' is a double negative.",
            fullExplanation: "'Haven't' is already negative, so 'no' creates a double negative. The correct form is 'haven't received any response' or 'have received no response'. Each form uses exactly one negative element.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-10",
            stem: "(A) He doesn't want (B) nothing (C) for his birthday (D) except a quiet dinner at home.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'nothing' should be 'anything'; 'doesn't' + 'nothing' is a double negative.",
            fullExplanation: "'Doesn't' and 'nothing' are both negative. Standard English requires only one negative per clause: 'doesn't want anything' or 'wants nothing'. The double negative 'doesn't want nothing' is non-standard.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-11",
            stem: "(A) They couldn't (B) hardly believe (C) the results (D) of the scientific experiment.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'couldn't hardly' should be 'could hardly'; 'hardly' already carries a negative meaning.",
            fullExplanation: "'Hardly' means 'almost not' and is treated as a negative word. Combining it with 'couldn't' creates a double negative. The correct form is 'could hardly believe'. 'Hardly', 'scarcely', and 'barely' are all semi-negative.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-12",
            stem: "(A) She didn't go (B) nowhere near (C) the restricted area (D) at the construction site.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'nowhere' should be 'anywhere'; 'didn't' + 'nowhere' is a double negative.",
            fullExplanation: "'Didn't' is already negative, so 'nowhere' (also negative) creates a double negative. The standard form is 'didn't go anywhere near'. Alternatively, 'went nowhere near' uses a single negative correctly.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-13",
            stem: "(A) We don't need (B) no additional (C) volunteers for (D) the community clean-up event.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'no additional' should be 'any additional'; 'don't' + 'no' is a double negative.",
            fullExplanation: "'Don't' is negative, so 'no' is a second negative. Standard English requires 'don't need any additional volunteers' or 'need no additional volunteers'. Both single-negative forms are grammatically correct.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-14",
            stem: "(A) He hasn't said (B) nothing (C) about the incident (D) to the police investigators.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'nothing' should be 'anything'; 'hasn't' + 'nothing' is a double negative.",
            fullExplanation: "'Hasn't' is already a negative form. Using 'nothing' creates a double negative. Standard English requires 'hasn't said anything' or 'has said nothing'. Both are correct when used individually.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          },
          {
            id: "err-double-neg-15",
            stem: "(A) The hikers couldn't (B) scarcely see (C) the trail markers (D) in the thick fog.",
            options: ["B", "A", "C", "D"],
            answer: "B",
            explanation: "'B' is incorrect — 'couldn't scarcely' should be 'could scarcely'; 'scarcely' is semi-negative.",
            fullExplanation: "'Scarcely' means 'almost not' and functions as a negative word. Combining it with 'couldn't' produces a double negative. The correct form is 'could scarcely see'. Like 'barely' and 'hardly', 'scarcely' should not be paired with another negative.",
            source: "Swan, M. Practical English Usage (4th ed.), §375"
          }
        ]
      }
    ]
  },

  /* ─── WORD FORMATION ─── */
  {
    id: "word-formation",
    title: "Word Formation",
    preset: "grammar",
    subtopics: [
      {
        id: "wf-noun-ness",
        title: "Noun suffix: -ness",
        tasks: [
          {
            id: "wf-noun-ness-01",
            stem: "Her ___ made her a favourite among the staff.",
            options: null,
            answer: "kindness",
            explanation: "'kindness' — from 'kind' + '-ness', the quality of being kind.",
            fullExplanation: "kind → kindness. The suffix '-ness' converts adjectives to abstract nouns.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "kind"
          },
          {
            id: "wf-noun-ness-02",
            stem: "The ___ of the cave made it impossible to see without a torch.",
            options: null,
            answer: "darkness",
            explanation: "'darkness' — from 'dark' + '-ness', the state of being dark.",
            fullExplanation: "dark → darkness. No spelling changes when base ends in a consonant.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "dark"
          },
          {
            id: "wf-noun-ness-03",
            stem: "True ___ comes from within, not from material possessions.",
            options: null,
            answer: "happiness",
            explanation: "'happiness' — from 'happy' + '-ness'; 'y' changes to 'i'.",
            fullExplanation: "happy → happiness. Adjectives ending in 'y' change to 'i' before '-ness'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "happy"
          },
          {
            id: "wf-noun-ness-04",
            stem: "There was an overwhelming ___ in his voice when he spoke of the loss.",
            options: null,
            answer: "sadness",
            explanation: "'sadness' — from 'sad' + '-ness', the quality of being sad.",
            fullExplanation: "sad → sadness. Regular formation with no spelling changes.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "sad"
          },
          {
            id: "wf-noun-ness-05",
            stem: "The ___ of the winter landscape after the snowfall was breathtaking.",
            options: null,
            answer: "stillness",
            explanation: "'stillness' — from 'still' + '-ness', the quality of being motionless.",
            fullExplanation: "still → stillness. No changes needed.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "still"
          },
          {
            id: "wf-noun-ness-06",
            stem: "The doctor was concerned about the ___ of the patient's joints.",
            options: null,
            answer: "stiffness",
            explanation: "'stiffness' — from 'stiff' + '-ness', the state of being stiff.",
            fullExplanation: "stiff → stiffness. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "stiff"
          },
          {
            id: "wf-noun-ness-07",
            stem: "His ___ to admit his mistake surprised everyone at the meeting.",
            options: null,
            answer: "willingness",
            explanation: "'willingness' — from 'willing' + '-ness', readiness to act.",
            fullExplanation: "willing → willingness. Adjectives ending '-ing' take '-ness' directly.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "willing"
          },
          {
            id: "wf-noun-ness-08",
            stem: "The ___ of the new mattress helped improve her sleep considerably.",
            options: null,
            answer: "firmness",
            explanation: "'firmness' — from 'firm' + '-ness', the quality of being firm.",
            fullExplanation: "firm → firmness. Regular pattern.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "firm"
          },
          {
            id: "wf-noun-ness-09",
            stem: "Growing public ___ of the issue led to new government regulations.",
            options: null,
            answer: "awareness",
            explanation: "'awareness' — from 'aware' + '-ness', knowing about something.",
            fullExplanation: "aware → awareness. The silent 'e' is retained before '-ness'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "aware"
          },
          {
            id: "wf-noun-ness-10",
            stem: "Athletes must show ___ and resilience during long-distance races.",
            options: null,
            answer: "toughness",
            explanation: "'toughness' — from 'tough' + '-ness', physical and mental strength.",
            fullExplanation: "tough → toughness. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "tough"
          },
          {
            id: "wf-noun-ness-11",
            stem: "The judge praised the ___ of the witness during cross-examination.",
            options: null,
            answer: "boldness",
            explanation: "'boldness' — from 'bold' + '-ness', courage and confidence.",
            fullExplanation: "bold → boldness. No spelling changes needed.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "bold"
          },
          {
            id: "wf-noun-ness-12",
            stem: "The ___ of the instructions caused confusion among the students.",
            options: null,
            answer: "vagueness",
            explanation: "'vagueness' — from 'vague' + '-ness', being unclear.",
            fullExplanation: "vague → vagueness. Silent 'e' retained before '-ness'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "vague"
          },
          {
            id: "wf-noun-ness-13",
            stem: "Her ___ about the camping trip was contagious and energised everyone.",
            options: null,
            answer: "eagerness",
            explanation: "'eagerness' — from 'eager' + '-ness', enthusiasm or keen interest.",
            fullExplanation: "eager → eagerness. No letters changed.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "eager"
          },
          {
            id: "wf-noun-ness-14",
            stem: "The ___ of the coastal air was a welcome change from the smog.",
            options: null,
            answer: "freshness",
            explanation: "'freshness' — from 'fresh' + '-ness', the quality of being fresh.",
            fullExplanation: "fresh → freshness. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "fresh"
          },
          {
            id: "wf-noun-ness-15",
            stem: "The ___ of the remote village made it a perfect holiday retreat.",
            options: null,
            answer: "quietness",
            explanation: "'quietness' — from 'quiet' + '-ness', the state of being quiet.",
            fullExplanation: "quiet → quietness. Regular pattern.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "quiet"
          }
        ]
      },
      {
        id: "wf-noun-tion",
        title: "Noun suffix: -tion/-sion",
        tasks: [
          {
            id: "wf-noun-tion-01",
            stem: "A good ___ is the foundation of a successful career.",
            options: null,
            answer: "education",
            explanation: "'education' — from 'educate' + '-tion'; 'e' is dropped.",
            fullExplanation: "educate → education. Verbs ending in '-ate' drop 'e' and add '-tion'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "educate"
          },
          {
            id: "wf-noun-tion-02",
            stem: "The final ___ rests with the board of directors.",
            options: null,
            answer: "decision",
            explanation: "'decision' — from 'decide' + '-sion'; '-de' changes to '-sion'.",
            fullExplanation: "decide → decision. Verbs ending in '-de' often form nouns with '-sion'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "decide"
          },
          {
            id: "wf-noun-tion-03",
            stem: "The country celebrated its ___ from colonial rule with a holiday.",
            options: null,
            answer: "liberation",
            explanation: "'liberation' — from 'liberate' + '-tion', the act of setting free.",
            fullExplanation: "liberate → liberation. Standard '-ate' → '-ation' pattern.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "liberate"
          },
          {
            id: "wf-noun-tion-04",
            stem: "The ___ of the old warehouse into apartments took two years.",
            options: null,
            answer: "conversion",
            explanation: "'conversion' — from 'convert' + '-sion', the process of changing.",
            fullExplanation: "convert → conversion. Verbs ending in '-rt' take '-sion'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "convert"
          },
          {
            id: "wf-noun-tion-05",
            stem: "Regular physical ___ is essential for maintaining good health.",
            options: null,
            answer: "examination",
            explanation: "'examination' — from 'examine' + '-ation', a detailed inspection.",
            fullExplanation: "examine → examination. The 'e' is dropped before '-ation'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "examine"
          },
          {
            id: "wf-noun-tion-06",
            stem: "Air ___ is one of the most serious problems facing modern cities.",
            options: null,
            answer: "pollution",
            explanation: "'pollution' — from 'pollute' + '-tion', contamination of the environment.",
            fullExplanation: "pollute → pollution. The 'e' is dropped before '-tion'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "pollute"
          },
          {
            id: "wf-noun-tion-07",
            stem: "The ___ of the new vaccine required years of clinical trials.",
            options: null,
            answer: "production",
            explanation: "'production' — from 'produce' + '-tion', the process of making.",
            fullExplanation: "produce → production. The '-uce' changes to '-uction'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "produce"
          },
          {
            id: "wf-noun-tion-08",
            stem: "Her ___ to the violin began at the age of five.",
            options: null,
            answer: "devotion",
            explanation: "'devotion' — from 'devote' + '-tion', deep dedication.",
            fullExplanation: "devote → devotion. The 'e' is dropped before '-tion'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "devote"
          },
          {
            id: "wf-noun-tion-09",
            stem: "The ___ of the puzzle required patience and logical thinking.",
            options: null,
            answer: "solution",
            explanation: "'solution' — from 'solve' + '-tion'; '-ve' becomes '-ution'.",
            fullExplanation: "solve → solution. Irregular pattern with stem change.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "solve"
          },
          {
            id: "wf-noun-tion-10",
            stem: "The manager demanded an ___ for the missing funds.",
            options: null,
            answer: "explanation",
            explanation: "'explanation' — from 'explain' + '-ation', making something clear.",
            fullExplanation: "explain → explanation. Note the vowel change.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "explain"
          },
          {
            id: "wf-noun-tion-11",
            stem: "The ___ of foreign investment has boosted the local economy.",
            options: null,
            answer: "attraction",
            explanation: "'attraction' — from 'attract' + '-tion', the power of drawing interest.",
            fullExplanation: "attract → attraction. Verbs ending in '-ct' add '-tion'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "attract"
          },
          {
            id: "wf-noun-tion-12",
            stem: "The orchestra's ___ of the symphony received a standing ovation.",
            options: null,
            answer: "interpretation",
            explanation: "'interpretation' — from 'interpret' + '-ation', a way of understanding.",
            fullExplanation: "interpret → interpretation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "interpret"
          },
          {
            id: "wf-noun-tion-13",
            stem: "The ___ of the suspect lasted over six hours at the station.",
            options: null,
            answer: "interrogation",
            explanation: "'interrogation' — from 'interrogate' + '-tion', systematic questioning.",
            fullExplanation: "interrogate → interrogation. Standard '-ate' → '-ation'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "interrogate"
          },
          {
            id: "wf-noun-tion-14",
            stem: "The ___ of the refugees across the border happened overnight.",
            options: null,
            answer: "expulsion",
            explanation: "'expulsion' — from 'expel' + '-sion', the act of forcing out.",
            fullExplanation: "expel → expulsion. Verbs ending in '-el' change to '-ulsion'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "expel"
          },
          {
            id: "wf-noun-tion-15",
            stem: "The ___ of the two chemicals produced a surprising result.",
            options: null,
            answer: "combination",
            explanation: "'combination' — from 'combine' + '-ation', joining things together.",
            fullExplanation: "combine → combination.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "combine"
          }
        ]
      },
      {
        id: "wf-noun-ity",
        title: "Noun suffix: -ity/-ty",
        tasks: [
          {
            id: "wf-noun-ity-01",
            stem: "Physical ___ is important for people of all ages.",
            options: null,
            answer: "activity",
            explanation: "'activity' — from 'active' + '-ity'; 'e' is dropped.",
            fullExplanation: "active → activity. Adjectives ending '-ive' drop 'e' and add '-ity'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "active"
          },
          {
            id: "wf-noun-ity-02",
            stem: "Wearing a seatbelt is essential for the ___ of all passengers.",
            options: null,
            answer: "safety",
            explanation: "'safety' — from 'safe' + '-ty', being protected from danger.",
            fullExplanation: "safe → safety. The 'e' is dropped and '-ty' is added.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "safe"
          },
          {
            id: "wf-noun-ity-03",
            stem: "The ___ of the task meant even beginners could complete it.",
            options: null,
            answer: "simplicity",
            explanation: "'simplicity' — from 'simple' + '-ity', ease of understanding.",
            fullExplanation: "simple → simplicity.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "simple"
          },
          {
            id: "wf-noun-ity-04",
            stem: "Cultural ___ enriches a society and promotes mutual understanding.",
            options: null,
            answer: "diversity",
            explanation: "'diversity' — from 'diverse' + '-ity', the state of being varied.",
            fullExplanation: "diverse → diversity.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "diverse"
          },
          {
            id: "wf-noun-ity-05",
            stem: "The ___ of the situation became clear after the investigation.",
            options: null,
            answer: "severity",
            explanation: "'severity' — from 'severe' + '-ity', being very serious.",
            fullExplanation: "severe → severity.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "severe"
          },
          {
            id: "wf-noun-ity-06",
            stem: "The university valued her ___ and awarded her an extra grant.",
            options: null,
            answer: "generosity",
            explanation: "'generosity' — from 'generous' + '-ity'; '-ous' becomes '-osity'.",
            fullExplanation: "generous → generosity.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "generous"
          },
          {
            id: "wf-noun-ity-07",
            stem: "The ___ of the new smartphone has made it a global best-seller.",
            options: null,
            answer: "popularity",
            explanation: "'popularity' — from 'popular' + '-ity', being widely liked.",
            fullExplanation: "popular → popularity.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "popular"
          },
          {
            id: "wf-noun-ity-08",
            stem: "Scientists questioned the ___ of the experimental results.",
            options: null,
            answer: "validity",
            explanation: "'validity' — from 'valid' + '-ity', being logically sound.",
            fullExplanation: "valid → validity.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "valid"
          },
          {
            id: "wf-noun-ity-09",
            stem: "His natural ___ made him an excellent detective on the force.",
            options: null,
            answer: "curiosity",
            explanation: "'curiosity' — from 'curious' + '-ity'; '-ous' becomes '-osity'.",
            fullExplanation: "curious → curiosity.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "curious"
          },
          {
            id: "wf-noun-ity-10",
            stem: "The ___ of getting struck by lightning is actually very low.",
            options: null,
            answer: "probability",
            explanation: "'probability' — from 'probable' + '-ity'; '-able' becomes '-ability'.",
            fullExplanation: "probable → probability.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "probable"
          },
          {
            id: "wf-noun-ity-11",
            stem: "Power outages are common due to the ___ of the electrical grid.",
            options: null,
            answer: "fragility",
            explanation: "'fragility' — from 'fragile' + '-ity', being easily broken.",
            fullExplanation: "fragile → fragility.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "fragile"
          },
          {
            id: "wf-noun-ity-12",
            stem: "The artist was known for her remarkable ___ and bold techniques.",
            options: null,
            answer: "originality",
            explanation: "'originality' — from 'original' + '-ity', being new and inventive.",
            fullExplanation: "original → originality.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "original"
          },
          {
            id: "wf-noun-ity-13",
            stem: "Political ___ is essential for economic growth in developing nations.",
            options: null,
            answer: "stability",
            explanation: "'stability' — from 'stable' + '-ity'; 'e' is dropped.",
            fullExplanation: "stable → stability.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "stable"
          },
          {
            id: "wf-noun-ity-14",
            stem: "The ___ of the mayor's announcement caught the media off guard.",
            options: null,
            answer: "absurdity",
            explanation: "'absurdity' — from 'absurd' + '-ity', being ridiculous.",
            fullExplanation: "absurd → absurdity.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "absurd"
          },
          {
            id: "wf-noun-ity-15",
            stem: "Voters demanded greater ___ from their elected officials.",
            options: null,
            answer: "accountability",
            explanation: "'accountability' — from 'accountable' + '-ity'; '-able' becomes '-ability'.",
            fullExplanation: "accountable → accountability.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "accountable"
          }
        ]
      },
      {
        id: "wf-noun-ment",
        title: "Noun suffix: -ment",
        tasks: [
          {
            id: "wf-noun-ment-01",
            stem: "The ___ of new technology has transformed the manufacturing industry.",
            options: null,
            answer: "development",
            explanation: "'development' — from 'develop' + '-ment', the process of growing.",
            fullExplanation: "develop → development. No spelling changes.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "develop"
          },
          {
            id: "wf-noun-ment-02",
            stem: "Winning the scholarship was her greatest ___ at university.",
            options: null,
            answer: "achievement",
            explanation: "'achievement' — from 'achieve' + '-ment', something accomplished.",
            fullExplanation: "achieve → achievement. The 'e' is retained before '-ment'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "achieve"
          },
          {
            id: "wf-noun-ment-03",
            stem: "The government issued an official ___ regarding the new trade policy.",
            options: null,
            answer: "statement",
            explanation: "'statement' — from 'state' + '-ment', a formal declaration.",
            fullExplanation: "state → statement.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "state"
          },
          {
            id: "wf-noun-ment-04",
            stem: "Effective time ___ is a skill every professional should master.",
            options: null,
            answer: "management",
            explanation: "'management' — from 'manage' + '-ment', the process of controlling.",
            fullExplanation: "manage → management.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "manage"
          },
          {
            id: "wf-noun-ment-05",
            stem: "The ___ of volunteers was crucial to the charity event's success.",
            options: null,
            answer: "involvement",
            explanation: "'involvement' — from 'involve' + '-ment', participating in something.",
            fullExplanation: "involve → involvement.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "involve"
          },
          {
            id: "wf-noun-ment-06",
            stem: "Repeated rejections led to a feeling of ___ among job seekers.",
            options: null,
            answer: "discouragement",
            explanation: "'discouragement' — from 'discourage' + '-ment', losing confidence.",
            fullExplanation: "discourage → discouragement.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "discourage"
          },
          {
            id: "wf-noun-ment-07",
            stem: "The ___ of patients to wards follows a strict hospital protocol.",
            options: null,
            answer: "assignment",
            explanation: "'assignment' — from 'assign' + '-ment', the allocation of tasks.",
            fullExplanation: "assign → assignment.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "assign"
          },
          {
            id: "wf-noun-ment-08",
            stem: "The ___ between the parties was reached after lengthy negotiations.",
            options: null,
            answer: "agreement",
            explanation: "'agreement' — from 'agree' + '-ment', a mutual understanding.",
            fullExplanation: "agree → agreement.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "agree"
          },
          {
            id: "wf-noun-ment-09",
            stem: "The circus ___ thrilled audiences with acrobatic feats and magic.",
            options: null,
            answer: "entertainment",
            explanation: "'entertainment' — from 'entertain' + '-ment', meaning amusement.",
            fullExplanation: "entertain → entertainment.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "entertain"
          },
          {
            id: "wf-noun-ment-10",
            stem: "The ___ of his identity took weeks of forensic analysis.",
            options: null,
            answer: "establishment",
            explanation: "'establishment' — from 'establish' + '-ment', setting up or confirming.",
            fullExplanation: "establish → establishment.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "establish"
          },
          {
            id: "wf-noun-ment-11",
            stem: "Accurate ___ of ingredients is essential in professional baking.",
            options: null,
            answer: "measurement",
            explanation: "'measurement' — from 'measure' + '-ment', determining quantity.",
            fullExplanation: "measure → measurement.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "measure"
          },
          {
            id: "wf-noun-ment-12",
            stem: "A deep sense of ___ washed over her when the project was done.",
            options: null,
            answer: "contentment",
            explanation: "'contentment' — from 'content' + '-ment', peaceful satisfaction.",
            fullExplanation: "content → contentment.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "content"
          },
          {
            id: "wf-noun-ment-13",
            stem: "The new employee adapted quickly to the work ___.",
            options: null,
            answer: "environment",
            explanation: "'environment' — from 'environ' + '-ment', surrounding conditions.",
            fullExplanation: "environ → environment.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "environ"
          },
          {
            id: "wf-noun-ment-14",
            stem: "The police launched a major ___ of officers to control the protest.",
            options: null,
            answer: "deployment",
            explanation: "'deployment' — from 'deploy' + '-ment', strategic positioning.",
            fullExplanation: "deploy → deployment.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "deploy"
          },
          {
            id: "wf-noun-ment-15",
            stem: "The company announced the ___ of a new chief executive officer.",
            options: null,
            answer: "appointment",
            explanation: "'appointment' — from 'appoint' + '-ment', assigning to a position.",
            fullExplanation: "appoint → appointment.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "appoint"
          }
        ]
      },
      {
        id: "wf-noun-ance",
        title: "Noun suffix: -ance/-ence",
        tasks: [
          {
            id: "wf-noun-ance-01",
            stem: "The dancer's ___ on stage captivated the entire audience.",
            options: null,
            answer: "performance",
            explanation: "'performance' — from 'perform' + '-ance', the act of performing.",
            fullExplanation: "perform → performance.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "perform"
          },
          {
            id: "wf-noun-ance-02",
            stem: "The ___ of life on other planets remains a topic of debate.",
            options: null,
            answer: "existence",
            explanation: "'existence' — from 'exist' + '-ence', the state of being real.",
            fullExplanation: "exist → existence.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "exist"
          },
          {
            id: "wf-noun-ance-03",
            stem: "Her ___ on public transport means she never learned to drive.",
            options: null,
            answer: "reliance",
            explanation: "'reliance' — from 'rely' + '-ance'; 'y' changes to 'i'.",
            fullExplanation: "rely → reliance.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "rely"
          },
          {
            id: "wf-noun-ance-04",
            stem: "Regular ___ at meetings is mandatory for all committee members.",
            options: null,
            answer: "attendance",
            explanation: "'attendance' — from 'attend' + '-ance', the act of being present.",
            fullExplanation: "attend → attendance.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "attend"
          },
          {
            id: "wf-noun-ance-05",
            stem: "The ___ between the twins was so striking people confused them.",
            options: null,
            answer: "resemblance",
            explanation: "'resemblance' — from 'resemble' + '-ance'; 'e' is dropped.",
            fullExplanation: "resemble → resemblance.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "resemble"
          },
          {
            id: "wf-noun-ance-06",
            stem: "His lack of ___ made it difficult to wait for the results.",
            options: null,
            answer: "patience",
            explanation: "'patience' — from 'patient'; '-ent' changes to '-ence'.",
            fullExplanation: "patient → patience.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "patient"
          },
          {
            id: "wf-noun-ance-07",
            stem: "The ___ of the new employee impressed the management team.",
            options: null,
            answer: "competence",
            explanation: "'competence' — from 'competent'; '-ent' changes to '-ence'.",
            fullExplanation: "competent → competence.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "competent"
          },
          {
            id: "wf-noun-ance-08",
            stem: "The ___ between the rich and the poor continues to widen.",
            options: null,
            answer: "difference",
            explanation: "'difference' — from 'differ' + '-ence', being unlike.",
            fullExplanation: "differ → difference.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "differ"
          },
          {
            id: "wf-noun-ance-09",
            stem: "The child showed great ___ to authority figures at school.",
            options: null,
            answer: "defiance",
            explanation: "'defiance' — from 'defy' + '-ance'; 'y' changes to 'i'.",
            fullExplanation: "defy → defiance.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "defy"
          },
          {
            id: "wf-noun-ance-10",
            stem: "The building's ___ was so grand that tourists stopped to admire it.",
            options: null,
            answer: "appearance",
            explanation: "'appearance' — from 'appear' + '-ance', the way something looks.",
            fullExplanation: "appear → appearance.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "appear"
          },
          {
            id: "wf-noun-ance-11",
            stem: "His ___ on a strict daily routine helped him stay productive.",
            options: null,
            answer: "insistence",
            explanation: "'insistence' — from 'insist' + '-ence', firmly demanding something.",
            fullExplanation: "insist → insistence.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "insist"
          },
          {
            id: "wf-noun-ance-12",
            stem: "The ___ of ancient monuments should be a national priority.",
            options: null,
            answer: "preservation",
            explanation: "'preservation' — from 'preserve' + '-ation', keeping intact.",
            fullExplanation: "preserve → preservation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "preserve"
          },
          {
            id: "wf-noun-ance-13",
            stem: "International ___ is vital for tackling climate change effectively.",
            options: null,
            answer: "cooperation",
            explanation: "'cooperation' — from 'cooperate' + '-tion', working together.",
            fullExplanation: "cooperate → cooperation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["co-operation"],
            hint: "cooperate"
          },
          {
            id: "wf-noun-ance-14",
            stem: "Her ___ of the local customs and traditions was impressive.",
            options: null,
            answer: "observance",
            explanation: "'observance' — from 'observe' + '-ance'; 'e' is dropped.",
            fullExplanation: "observe → observance.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "observe"
          },
          {
            id: "wf-noun-ance-15",
            stem: "The ___ of the manager was clear from how the team respected her.",
            options: null,
            answer: "dominance",
            explanation: "'dominance' — from 'dominant'; '-ant' changes to '-ance'.",
            fullExplanation: "dominant → dominance.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "dominant"
          }
        ]
      },
      {
        id: "wf-noun-er",
        title: "Noun suffix: -er/-or",
        tasks: [
          {
            id: "wf-noun-er-01",
            stem: "The ___ explained the new grammar rules clearly to the class.",
            options: null,
            answer: "teacher",
            explanation: "'teacher' — from 'teach' + '-er', a person who teaches.",
            fullExplanation: "teach → teacher. The suffix '-er' forms agent nouns.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "teach"
          },
          {
            id: "wf-noun-er-02",
            stem: "The ___ won an award for his outstanding portrayal of the villain.",
            options: null,
            answer: "actor",
            explanation: "'actor' — from 'act' + '-or', a person who acts.",
            fullExplanation: "act → actor. Latin-origin verbs often prefer '-or'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "act"
          },
          {
            id: "wf-noun-er-03",
            stem: "The ___ used advanced software to design the new bridge.",
            options: null,
            answer: "engineer",
            explanation: "'engineer' — from 'engine' + '-eer', one who works with engines.",
            fullExplanation: "engine → engineer. The suffix '-eer' implies professional expertise.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "engine"
          },
          {
            id: "wf-noun-er-04",
            stem: "The ___ guided tourists through the ancient ruins with enthusiasm.",
            options: null,
            answer: "explorer",
            explanation: "'explorer' — from 'explore' + '-er'; 'e' is dropped.",
            fullExplanation: "explore → explorer.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "explore"
          },
          {
            id: "wf-noun-er-05",
            stem: "The company hired a private ___ to look into the fraud case.",
            options: null,
            answer: "investigator",
            explanation: "'investigator' — from 'investigate' + '-or'; 'e' dropped.",
            fullExplanation: "investigate → investigator.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "investigate"
          },
          {
            id: "wf-noun-er-06",
            stem: "The generous ___ contributed millions to build the hospital.",
            options: null,
            answer: "donor",
            explanation: "'donor' — from 'donate' + '-or'; '-ate' replaced by '-or'.",
            fullExplanation: "donate → donor.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "donate"
          },
          {
            id: "wf-noun-er-07",
            stem: "The mountain ___ reached the summit after a twelve-hour ascent.",
            options: null,
            answer: "climber",
            explanation: "'climber' — from 'climb' + '-er', a person who climbs.",
            fullExplanation: "climb → climber.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "climb"
          },
          {
            id: "wf-noun-er-08",
            stem: "As the sole ___ of the shipwreck, she told a remarkable story.",
            options: null,
            answer: "survivor",
            explanation: "'survivor' — from 'survive' + '-or'; 'e' is dropped.",
            fullExplanation: "survive → survivor.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "survive"
          },
          {
            id: "wf-noun-er-09",
            stem: "The ___ delivered an inspiring speech about innovation at the event.",
            options: null,
            answer: "speaker",
            explanation: "'speaker' — from 'speak' + '-er', a person who speaks.",
            fullExplanation: "speak → speaker.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "speak"
          },
          {
            id: "wf-noun-er-10",
            stem: "The ___ promised to reduce taxes and improve public services.",
            options: null,
            answer: "governor",
            explanation: "'governor' — from 'govern' + '-or', a person who governs.",
            fullExplanation: "govern → governor.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "govern"
          },
          {
            id: "wf-noun-er-11",
            stem: "The ___ demonstrated excellent leadership during the rescue mission.",
            options: null,
            answer: "commander",
            explanation: "'commander' — from 'command' + '-er', a person in charge.",
            fullExplanation: "command → commander.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "command"
          },
          {
            id: "wf-noun-er-12",
            stem: "The fashion ___ created stunning outfits for the spring collection.",
            options: null,
            answer: "designer",
            explanation: "'designer' — from 'design' + '-er', a person who designs.",
            fullExplanation: "design → designer.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "design"
          },
          {
            id: "wf-noun-er-13",
            stem: "The ___ installed new copper pipes throughout the entire building.",
            options: null,
            answer: "plumber",
            explanation: "'plumber' — from 'plumb' + '-er', a person who fits pipes.",
            fullExplanation: "plumb → plumber.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "plumb"
          },
          {
            id: "wf-noun-er-14",
            stem: "The ___ took careful notes during the three-hour council meeting.",
            options: null,
            answer: "observer",
            explanation: "'observer' — from 'observe' + '-er'; 'e' is dropped.",
            fullExplanation: "observe → observer.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "observe"
          },
          {
            id: "wf-noun-er-15",
            stem: "The ___ carefully examined the engine before clearing the aircraft.",
            options: null,
            answer: "inspector",
            explanation: "'inspector' — from 'inspect' + '-or', a person who inspects.",
            fullExplanation: "inspect → inspector.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "inspect"
          }
        ]
      },
      {
        id: "wf-noun-ist",
        title: "Noun suffix: -ist",
        tasks: [
          {
            id: "wf-noun-ist-01",
            stem: "The ___ published a groundbreaking paper on quantum mechanics.",
            options: null,
            answer: "scientist",
            explanation: "'scientist' — from 'science' + '-ist', a specialist in science.",
            fullExplanation: "science → scientist.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "science"
          },
          {
            id: "wf-noun-ist-02",
            stem: "The ___ filed a report from the war zone despite the danger.",
            options: null,
            answer: "journalist",
            explanation: "'journalist' — from 'journal' + '-ist', a media professional.",
            fullExplanation: "journal → journalist.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "journal"
          },
          {
            id: "wf-noun-ist-03",
            stem: "The ___ played a beautiful sonata at the charity concert.",
            options: null,
            answer: "pianist",
            explanation: "'pianist' — from 'piano' + '-ist', a piano player.",
            fullExplanation: "piano → pianist.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "piano"
          },
          {
            id: "wf-noun-ist-04",
            stem: "The ___ prescribed a new medication for the patient's condition.",
            options: null,
            answer: "specialist",
            explanation: "'specialist' — from 'special' + '-ist', an expert.",
            fullExplanation: "special → specialist.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "special"
          },
          {
            id: "wf-noun-ist-05",
            stem: "The ___ created a stunning portrait using only charcoal pencils.",
            options: null,
            answer: "artist",
            explanation: "'artist' — from 'art' + '-ist', a person who creates art.",
            fullExplanation: "art → artist.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "art"
          },
          {
            id: "wf-noun-ist-06",
            stem: "The ___ argued for stricter regulations at the climate summit.",
            options: null,
            answer: "environmentalist",
            explanation: "'environmentalist' — from 'environmental' + '-ist', an advocate.",
            fullExplanation: "environmental → environmentalist.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "environmental"
          },
          {
            id: "wf-noun-ist-07",
            stem: "The ___ recommended a diet rich in fibre and protein.",
            options: null,
            answer: "nutritionist",
            explanation: "'nutritionist' — from 'nutrition' + '-ist', a diet expert.",
            fullExplanation: "nutrition → nutritionist.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "nutrition"
          },
          {
            id: "wf-noun-ist-08",
            stem: "The renowned ___ delivered a lecture on the global financial crisis.",
            options: null,
            answer: "economist",
            explanation: "'economist' — from 'economy' + '-ist'; 'y' is dropped.",
            fullExplanation: "economy → economist.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "economy"
          },
          {
            id: "wf-noun-ist-09",
            stem: "The ___ helped the couple resolve their communication problems.",
            options: null,
            answer: "therapist",
            explanation: "'therapist' — from 'therapy' + '-ist'; 'y' is dropped.",
            fullExplanation: "therapy → therapist.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "therapy"
          },
          {
            id: "wf-noun-ist-10",
            stem: "The ___ toured several countries to promote her latest book.",
            options: null,
            answer: "novelist",
            explanation: "'novelist' — from 'novel' + '-ist', a writer of novels.",
            fullExplanation: "novel → novelist.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "novel"
          },
          {
            id: "wf-noun-ist-11",
            stem: "The ___ examined pottery fragments at the ancient dig site.",
            options: null,
            answer: "archaeologist",
            explanation: "'archaeologist' — from 'archaeology' + '-ist'; 'y' dropped.",
            fullExplanation: "archaeology → archaeologist.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["archeologist"],
            hint: "archaeology"
          },
          {
            id: "wf-noun-ist-12",
            stem: "The ___ prepared the medication according to the prescription.",
            options: null,
            answer: "pharmacist",
            explanation: "'pharmacist' — from 'pharmacy' + '-ist'; 'y' is dropped.",
            fullExplanation: "pharmacy → pharmacist.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "pharmacy"
          },
          {
            id: "wf-noun-ist-13",
            stem: "The ___ analysed the chemical composition of the mineral samples.",
            options: null,
            answer: "chemist",
            explanation: "'chemist' — from 'chemistry'; '-ry' is removed.",
            fullExplanation: "chemistry → chemist.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "chemistry"
          },
          {
            id: "wf-noun-ist-14",
            stem: "The ___ studied brain activity in patients with sleep disorders.",
            options: null,
            answer: "neurologist",
            explanation: "'neurologist' — from 'neurology' + '-ist'; 'y' is dropped.",
            fullExplanation: "neurology → neurologist.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "neurology"
          },
          {
            id: "wf-noun-ist-15",
            stem: "The ___ captured breathtaking images of wildlife in the rainforest.",
            options: null,
            answer: "photographer",
            explanation: "'photographer' — from 'photography'; 'y' dropped, '-er' added.",
            fullExplanation: "photography → photographer. Uses '-er' rather than '-ist'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "photography"
          }
        ]
      },
      {
        id: "wf-noun-ship",
        title: "Noun suffix: -ship",
        tasks: [
          {
            id: "wf-noun-ship-01",
            stem: "Their ___ has lasted for over twenty years through thick and thin.",
            options: null,
            answer: "friendship",
            explanation: "'friendship' — from 'friend' + '-ship', the state of being friends.",
            fullExplanation: "friend → friendship.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "friend"
          },
          {
            id: "wf-noun-ship-02",
            stem: "Effective ___ requires both vision and the ability to inspire.",
            options: null,
            answer: "leadership",
            explanation: "'leadership' — from 'leader' + '-ship', the quality of leading.",
            fullExplanation: "leader → leadership.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "leader"
          },
          {
            id: "wf-noun-ship-03",
            stem: "She won a ___ to study marine biology at a top university.",
            options: null,
            answer: "scholarship",
            explanation: "'scholarship' — from 'scholar' + '-ship', a grant for study.",
            fullExplanation: "scholar → scholarship.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "scholar"
          },
          {
            id: "wf-noun-ship-04",
            stem: "The ___ between the two nations was strengthened by the deal.",
            options: null,
            answer: "partnership",
            explanation: "'partnership' — from 'partner' + '-ship', a cooperative bond.",
            fullExplanation: "partner → partnership.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "partner"
          },
          {
            id: "wf-noun-ship-05",
            stem: "Club ___ has risen significantly since the new facilities opened.",
            options: null,
            answer: "membership",
            explanation: "'membership' — from 'member' + '-ship', belonging to a group.",
            fullExplanation: "member → membership.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "member"
          },
          {
            id: "wf-noun-ship-06",
            stem: "His ___ of the craft was evident in every carved detail.",
            options: null,
            answer: "workmanship",
            explanation: "'workmanship' — from 'workman' + '-ship', the skill of making.",
            fullExplanation: "workman → workmanship.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "workman"
          },
          {
            id: "wf-noun-ship-07",
            stem: "The ___ of the property was transferred after signing the contract.",
            options: null,
            answer: "ownership",
            explanation: "'ownership' — from 'owner' + '-ship', possessing something.",
            fullExplanation: "owner → ownership.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "owner"
          },
          {
            id: "wf-noun-ship-08",
            stem: "Good ___ involves respecting laws and contributing to society.",
            options: null,
            answer: "citizenship",
            explanation: "'citizenship' — from 'citizen' + '-ship', the status of a citizen.",
            fullExplanation: "citizen → citizenship.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "citizen"
          },
          {
            id: "wf-noun-ship-09",
            stem: "The athletes displayed outstanding ___ by congratulating their rivals.",
            options: null,
            answer: "sportsmanship",
            explanation: "'sportsmanship' — from 'sportsman' + '-ship', fair play.",
            fullExplanation: "sportsman → sportsmanship.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "sportsman"
          },
          {
            id: "wf-noun-ship-10",
            stem: "The ___ between mentor and apprentice requires mutual respect.",
            options: null,
            answer: "relationship",
            explanation: "'relationship' — from 'relation' + '-ship', a connection.",
            fullExplanation: "relation → relationship.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "relation"
          },
          {
            id: "wf-noun-ship-11",
            stem: "She endured many ___ before finally achieving success in business.",
            options: null,
            answer: "hardships",
            explanation: "'hardships' — from 'hard' + '-ship', severe suffering.",
            fullExplanation: "hard → hardship. Plural: hardships.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["hardship"],
            hint: "hard"
          },
          {
            id: "wf-noun-ship-12",
            stem: "The professor held the ___ of Medieval History at the university.",
            options: null,
            answer: "professorship",
            explanation: "'professorship' — from 'professor' + '-ship', an academic post.",
            fullExplanation: "professor → professorship.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "professor"
          },
          {
            id: "wf-noun-ship-13",
            stem: "Good ___ and community spirit were valued by all the residents.",
            options: null,
            answer: "fellowship",
            explanation: "'fellowship' — from 'fellow' + '-ship', companionship.",
            fullExplanation: "fellow → fellowship.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "fellow"
          },
          {
            id: "wf-noun-ship-14",
            stem: "The ___ of the apprentice lasted three years with the craftsman.",
            options: null,
            answer: "apprenticeship",
            explanation: "'apprenticeship' — from 'apprentice' + '-ship', a training period.",
            fullExplanation: "apprentice → apprenticeship.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "apprentice"
          },
          {
            id: "wf-noun-ship-15",
            stem: "The captain's ___ skills guided the vessel safely through the storm.",
            options: null,
            answer: "seamanship",
            explanation: "'seamanship' — from 'seaman' + '-ship', the skill of sailing.",
            fullExplanation: "seaman → seamanship.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "seaman"
          }
        ]
      },
      {
        id: "wf-noun-hood",
        title: "Noun suffix: -hood",
        tasks: [
          {
            id: "wf-noun-hood-01",
            stem: "Many people have fond memories of their ___ in the countryside.",
            options: null,
            answer: "childhood",
            explanation: "'childhood' — from 'child' + '-hood', the period of being a child.",
            fullExplanation: "child → childhood.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "child"
          },
          {
            id: "wf-noun-hood-02",
            stem: "The ___ organised a street party to celebrate the anniversary.",
            options: null,
            answer: "neighbourhood",
            explanation: "'neighbourhood' — from 'neighbour' + '-hood', the local area.",
            fullExplanation: "neighbour → neighbourhood.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["neighborhood"],
            hint: "neighbour"
          },
          {
            id: "wf-noun-hood-03",
            stem: "The challenges of ___ include sleepless nights and constant worry.",
            options: null,
            answer: "parenthood",
            explanation: "'parenthood' — from 'parent' + '-hood', being a parent.",
            fullExplanation: "parent → parenthood.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "parent"
          },
          {
            id: "wf-noun-hood-04",
            stem: "A spirit of ___ united the soldiers during the long campaign.",
            options: null,
            answer: "brotherhood",
            explanation: "'brotherhood' — from 'brother' + '-hood', a close bond.",
            fullExplanation: "brother → brotherhood.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "brother"
          },
          {
            id: "wf-noun-hood-05",
            stem: "The transition from ___ to adulthood can be a difficult period.",
            options: null,
            answer: "boyhood",
            explanation: "'boyhood' — from 'boy' + '-hood', the time of being a boy.",
            fullExplanation: "boy → boyhood.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "boy"
          },
          {
            id: "wf-noun-hood-06",
            stem: "She reflected on her ___ and the ambitions she once held.",
            options: null,
            answer: "womanhood",
            explanation: "'womanhood' — from 'woman' + '-hood', being a woman.",
            fullExplanation: "woman → womanhood.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "woman"
          },
          {
            id: "wf-noun-hood-07",
            stem: "The concept of ___ was central to medieval ideals of honour.",
            options: null,
            answer: "knighthood",
            explanation: "'knighthood' — from 'knight' + '-hood', the rank of a knight.",
            fullExplanation: "knight → knighthood.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "knight"
          },
          {
            id: "wf-noun-hood-08",
            stem: "A strong sense of ___ united the women in the suffrage movement.",
            options: null,
            answer: "sisterhood",
            explanation: "'sisterhood' — from 'sister' + '-hood', solidarity among women.",
            fullExplanation: "sister → sisterhood.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "sister"
          },
          {
            id: "wf-noun-hood-09",
            stem: "Achieving ___ is a significant milestone in a young person's life.",
            options: null,
            answer: "adulthood",
            explanation: "'adulthood' — from 'adult' + '-hood', being an adult.",
            fullExplanation: "adult → adulthood.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "adult"
          },
          {
            id: "wf-noun-hood-10",
            stem: "Many young men were drawn to the ___ at the seminary.",
            options: null,
            answer: "priesthood",
            explanation: "'priesthood' — from 'priest' + '-hood', the office of a priest.",
            fullExplanation: "priest → priesthood.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "priest"
          },
          {
            id: "wf-noun-hood-11",
            stem: "The region's ___ was recognised after decades of struggle.",
            options: null,
            answer: "statehood",
            explanation: "'statehood' — from 'state' + '-hood', being a state.",
            fullExplanation: "state → statehood.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "state"
          },
          {
            id: "wf-noun-hood-12",
            stem: "There is a strong ___ that the election will be held in spring.",
            options: null,
            answer: "likelihood",
            explanation: "'likelihood' — from 'likely' + '-hood', the chance of something.",
            fullExplanation: "likely → likelihood.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "likely"
          },
          {
            id: "wf-noun-hood-13",
            stem: "She cherished her ___ days spent exploring forests near home.",
            options: null,
            answer: "girlhood",
            explanation: "'girlhood' — from 'girl' + '-hood', the time of being a girl.",
            fullExplanation: "girl → girlhood.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "girl"
          },
          {
            id: "wf-noun-hood-14",
            stem: "His ___ was spent in a small village on the coast of Ireland.",
            options: null,
            answer: "manhood",
            explanation: "'manhood' — from 'man' + '-hood', being an adult man.",
            fullExplanation: "man → manhood.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "man"
          },
          {
            id: "wf-noun-hood-15",
            stem: "The ___ of their people was a source of great pride.",
            options: null,
            answer: "nationhood",
            explanation: "'nationhood' — from 'nation' + '-hood', being a nation.",
            fullExplanation: "nation → nationhood.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "nation"
          }
        ]
      },
      {
        id: "wf-noun-dom",
        title: "Noun suffix: -dom",
        tasks: [
          {
            id: "wf-noun-dom-01",
            stem: "The fight for ___ has been a central theme throughout human history.",
            options: null,
            answer: "freedom",
            explanation: "'freedom' — from 'free' + '-dom', the state of being free.",
            fullExplanation: "free → freedom. The suffix '-dom' forms abstract nouns describing a state or domain.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "free"
          },
          {
            id: "wf-noun-dom-02",
            stem: "The ___ of the long meeting made several attendees fall asleep.",
            options: null,
            answer: "boredom",
            explanation: "'boredom' — from 'bore' + '-dom', the state of being bored.",
            fullExplanation: "bore → boredom. The suffix '-dom' describes an emotional state.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "bore"
          },
          {
            id: "wf-noun-dom-03",
            stem: "The ancient ___ was known for its advanced irrigation and architecture.",
            options: null,
            answer: "kingdom",
            explanation: "'kingdom' — from 'king' + '-dom', a realm ruled by a monarch.",
            fullExplanation: "king → kingdom. The suffix '-dom' can mean a territory or realm.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "king"
          },
          {
            id: "wf-noun-dom-04",
            stem: "With age and experience comes the ___ to make better decisions.",
            options: null,
            answer: "wisdom",
            explanation: "'wisdom' — from 'wise' + '-dom'; the 'e' is dropped.",
            fullExplanation: "wise → wisdom. The suffix '-dom' describes a quality.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "wise"
          },
          {
            id: "wf-noun-dom-05",
            stem: "The young actor's rise to ___ happened almost overnight.",
            options: null,
            answer: "stardom",
            explanation: "'stardom' — from 'star' + '-dom', the state of being famous.",
            fullExplanation: "star → stardom. Describes celebrity status.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "star"
          },
          {
            id: "wf-noun-dom-06",
            stem: "The duke ruled over a large ___ in the south of England.",
            options: null,
            answer: "dukedom",
            explanation: "'dukedom' — from 'duke' + '-dom', the territory of a duke.",
            fullExplanation: "duke → dukedom. The suffix can indicate rank or territory.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "duke"
          },
          {
            id: "wf-noun-dom-07",
            stem: "The earl inherited a vast ___ stretching across three counties.",
            options: null,
            answer: "earldom",
            explanation: "'earldom' — from 'earl' + '-dom', the rank or territory of an earl.",
            fullExplanation: "earl → earldom.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "earl"
          },
          {
            id: "wf-noun-dom-08",
            stem: "The ___ of bureaucracy made the approval process painfully slow.",
            options: null,
            answer: "officialdom",
            explanation: "'officialdom' — from 'official' + '-dom', the world of officials.",
            fullExplanation: "official → officialdom. A collective or abstract use of '-dom'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "official"
          },
          {
            id: "wf-noun-dom-09",
            stem: "The abolition of ___ was one of the great achievements of the century.",
            options: null,
            answer: "serfdom",
            explanation: "'serfdom' — from 'serf' + '-dom', the condition of servitude.",
            fullExplanation: "serf → serfdom. Describes a social condition.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "serf"
          },
          {
            id: "wf-noun-dom-10",
            stem: "The ___ of online gaming has grown into a massive global community.",
            options: null,
            answer: "fandom",
            explanation: "'fandom' — from 'fan' + '-dom', the community of enthusiastic fans.",
            fullExplanation: "fan → fandom. Modern productive use of '-dom'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "fan"
          },
          {
            id: "wf-noun-dom-11",
            stem: "The local warlord carved out a personal ___ in the mountain region.",
            options: null,
            answer: "fiefdom",
            explanation: "'fiefdom' — from 'fief' + '-dom', a feudal estate or personal domain.",
            fullExplanation: "fief → fiefdom.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "fief"
          },
          {
            id: "wf-noun-dom-12",
            stem: "Throughout the Middle Ages, ___ was a powerful force in politics.",
            options: null,
            answer: "Christendom",
            explanation: "'Christendom' — from 'Christian' + '-dom', the Christian world.",
            fullExplanation: "Christian → Christendom. Describes a collective religious domain.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "Christian"
          },
          {
            id: "wf-noun-dom-13",
            stem: "The film industry is sometimes colloquially referred to as ___.",
            options: null,
            answer: "filmdom",
            explanation: "'filmdom' — from 'film' + '-dom', the world of cinema.",
            fullExplanation: "film → filmdom. Informal but well-attested compound.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "film"
          },
          {
            id: "wf-noun-dom-14",
            stem: "The philosopher warned against the ___ of conforming to popular opinion.",
            options: null,
            answer: "thraldom",
            explanation: "'thraldom' — from 'thrall' + '-dom', the state of being enslaved.",
            fullExplanation: "thrall → thraldom. Also spelt 'thralldom'. Means bondage.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["thralldom"],
            hint: "thrall"
          },
          {
            id: "wf-noun-dom-15",
            stem: "He yearned for ___ from the strict rules imposed by his employer.",
            options: null,
            answer: "freedom",
            explanation: "'freedom' — from 'free' + '-dom', liberation from restrictions.",
            fullExplanation: "free → freedom. Describes a state of liberty.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "free"
          }
        ]
      },
      {
        id: "wf-adj-ful",
        title: "Adjective suffix: -ful",
        tasks: [
          {
            id: "wf-adj-ful-01",
            stem: "You should be ___ when crossing busy intersections in the city.",
            options: null,
            answer: "careful",
            explanation: "'careful' — from 'care' + '-ful', showing attention to avoid danger.",
            fullExplanation: "care → careful. The suffix '-ful' means 'full of' or 'having the quality of'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "care"
          },
          {
            id: "wf-adj-ful-02",
            stem: "Solar panels are extremely ___ for reducing electricity bills.",
            options: null,
            answer: "useful",
            explanation: "'useful' — from 'use' + '-ful', having practical value.",
            fullExplanation: "use → useful. The 'e' is dropped before '-ful'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "use"
          },
          {
            id: "wf-adj-ful-03",
            stem: "The volunteers were ___ for the generous donations they received.",
            options: null,
            answer: "grateful",
            explanation: "'grateful' — from 'grate' + '-ful', feeling thankful.",
            fullExplanation: "grate → grateful. Expressing thanks or appreciation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "grate"
          },
          {
            id: "wf-adj-ful-04",
            stem: "The sunset over the ocean was absolutely ___.",
            options: null,
            answer: "beautiful",
            explanation: "'beautiful' — from 'beauty' + '-ful'; 'y' changes to 'i'.",
            fullExplanation: "beauty → beautiful. The 'y' changes to 'i' before '-ful'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "beauty"
          },
          {
            id: "wf-adj-ful-05",
            stem: "She gave a ___ speech that moved the entire audience to tears.",
            options: null,
            answer: "powerful",
            explanation: "'powerful' — from 'power' + '-ful', having great strength or influence.",
            fullExplanation: "power → powerful. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "power"
          },
          {
            id: "wf-adj-ful-06",
            stem: "The child was ___ for the new toy she found under the tree.",
            options: null,
            answer: "thankful",
            explanation: "'thankful' — from 'thank' + '-ful', feeling pleased and relieved.",
            fullExplanation: "thank → thankful. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "thank"
          },
          {
            id: "wf-adj-ful-07",
            stem: "The report contained several ___ insights about consumer behaviour.",
            options: null,
            answer: "meaningful",
            explanation: "'meaningful' — from 'meaning' + '-ful', having significance.",
            fullExplanation: "meaning → meaningful. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "meaning"
          },
          {
            id: "wf-adj-ful-08",
            stem: "The garden was ___ in spring with roses and lavender in full bloom.",
            options: null,
            answer: "colourful",
            explanation: "'colourful' — from 'colour' + '-ful', having many colours.",
            fullExplanation: "colour → colourful.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["colorful"],
            hint: "colour"
          },
          {
            id: "wf-adj-ful-09",
            stem: "A ___ diet includes a variety of fruits, vegetables, and proteins.",
            options: null,
            answer: "healthful",
            explanation: "'healthful' — from 'health' + '-ful', promoting good health.",
            fullExplanation: "health → healthful. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "health"
          },
          {
            id: "wf-adj-ful-10",
            stem: "The negotiator remained ___ despite the increasingly tense atmosphere.",
            options: null,
            answer: "peaceful",
            explanation: "'peaceful' — from 'peace' + '-ful', free from disturbance.",
            fullExplanation: "peace → peaceful. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "peace"
          },
          {
            id: "wf-adj-ful-11",
            stem: "She felt ___ about the outcome of the job interview.",
            options: null,
            answer: "hopeful",
            explanation: "'hopeful' — from 'hope' + '-ful', feeling optimistic.",
            fullExplanation: "hope → hopeful. The 'e' is dropped before '-ful'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "hope"
          },
          {
            id: "wf-adj-ful-12",
            stem: "The detective found a ___ clue hidden beneath the floorboards.",
            options: null,
            answer: "helpful",
            explanation: "'helpful' — from 'help' + '-ful', giving useful assistance.",
            fullExplanation: "help → helpful. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "help"
          },
          {
            id: "wf-adj-ful-13",
            stem: "The museum was ___ of ancient artefacts from the Roman Empire.",
            options: null,
            answer: "plentiful",
            explanation: "'plentiful' — from 'plenty' + '-ful'; 'y' changes to 'i'.",
            fullExplanation: "plenty → plentiful. The 'y' changes to 'i' before '-ful'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "plenty"
          },
          {
            id: "wf-adj-ful-14",
            stem: "His ___ nature meant he could never keep a secret for long.",
            options: null,
            answer: "boastful",
            explanation: "'boastful' — from 'boast' + '-ful', tending to brag.",
            fullExplanation: "boast → boastful. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "boast"
          },
          {
            id: "wf-adj-ful-15",
            stem: "The abandoned house had a ___ atmosphere on that foggy evening.",
            options: null,
            answer: "fearful",
            explanation: "'fearful' — from 'fear' + '-ful', causing or feeling fear.",
            fullExplanation: "fear → fearful. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "fear"
          }
        ]
      },
      {
        id: "wf-adj-less",
        title: "Adjective suffix: -less",
        tasks: [
          {
            id: "wf-adj-less-01",
            stem: "It was ___ to argue with him once he had made up his mind.",
            options: null,
            answer: "useless",
            explanation: "'useless' — from 'use' + '-less', having no practical value.",
            fullExplanation: "use → useless. The suffix '-less' means 'without' or 'lacking'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "use"
          },
          {
            id: "wf-adj-less-02",
            stem: "The refugees felt ___ as they waited for news at the border.",
            options: null,
            answer: "hopeless",
            explanation: "'hopeless' — from 'hope' + '-less', without hope.",
            fullExplanation: "hope → hopeless. The 'e' is dropped before '-less'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "hope"
          },
          {
            id: "wf-adj-less-03",
            stem: "A ___ driver caused the accident on the motorway last night.",
            options: null,
            answer: "careless",
            explanation: "'careless' — from 'care' + '-less', not giving attention.",
            fullExplanation: "care → careless. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "care"
          },
          {
            id: "wf-adj-less-04",
            stem: "The desert seemed ___ under the scorching midday sun.",
            options: null,
            answer: "lifeless",
            explanation: "'lifeless' — from 'life' + '-less', without signs of life.",
            fullExplanation: "life → lifeless. The 'e' is dropped before '-less'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "life"
          },
          {
            id: "wf-adj-less-05",
            stem: "She made a ___ remark that offended several colleagues at the dinner.",
            options: null,
            answer: "tactless",
            explanation: "'tactless' — from 'tact' + '-less', lacking sensitivity.",
            fullExplanation: "tact → tactless. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "tact"
          },
          {
            id: "wf-adj-less-06",
            stem: "The hikers were left ___ when their guide disappeared in the fog.",
            options: null,
            answer: "helpless",
            explanation: "'helpless' — from 'help' + '-less', unable to act independently.",
            fullExplanation: "help → helpless. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "help"
          },
          {
            id: "wf-adj-less-07",
            stem: "The comedian told one ___ joke after another to an unamused audience.",
            options: null,
            answer: "pointless",
            explanation: "'pointless' — from 'point' + '-less', having no purpose.",
            fullExplanation: "point → pointless. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "point"
          },
          {
            id: "wf-adj-less-08",
            stem: "The ___ puppy followed the children around the park all afternoon.",
            options: null,
            answer: "harmless",
            explanation: "'harmless' — from 'harm' + '-less', unlikely to cause injury.",
            fullExplanation: "harm → harmless. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "harm"
          },
          {
            id: "wf-adj-less-09",
            stem: "His ___ disregard for safety regulations put everyone at risk.",
            options: null,
            answer: "reckless",
            explanation: "'reckless' — from 'reck' + '-less', acting without thinking of danger.",
            fullExplanation: "reck → reckless. 'Reck' (to care) is now archaic.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "reck"
          },
          {
            id: "wf-adj-less-10",
            stem: "The company made a ___ transition to the new software system.",
            options: null,
            answer: "seamless",
            explanation: "'seamless' — from 'seam' + '-less', smooth and without interruption.",
            fullExplanation: "seam → seamless. Literally 'without seams'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "seam"
          },
          {
            id: "wf-adj-less-11",
            stem: "The ___ night sky stretched above the desert campsite.",
            options: null,
            answer: "cloudless",
            explanation: "'cloudless' — from 'cloud' + '-less', without any clouds.",
            fullExplanation: "cloud → cloudless. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "cloud"
          },
          {
            id: "wf-adj-less-12",
            stem: "The politician seemed ___ about the impact of her policies.",
            options: null,
            answer: "thoughtless",
            explanation: "'thoughtless' — from 'thought' + '-less', lacking consideration.",
            fullExplanation: "thought → thoughtless. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "thought"
          },
          {
            id: "wf-adj-less-13",
            stem: "The baby slept in a ___ position, completely undisturbed by noise.",
            options: null,
            answer: "motionless",
            explanation: "'motionless' — from 'motion' + '-less', not moving at all.",
            fullExplanation: "motion → motionless. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "motion"
          },
          {
            id: "wf-adj-less-14",
            stem: "The ___ warrior fought bravely despite being heavily outnumbered.",
            options: null,
            answer: "fearless",
            explanation: "'fearless' — from 'fear' + '-less', without fear.",
            fullExplanation: "fear → fearless. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "fear"
          },
          {
            id: "wf-adj-less-15",
            stem: "A ___ supply of fresh water is essential for any space mission.",
            options: null,
            answer: "endless",
            explanation: "'endless' — from 'end' + '-less', having no end or limit.",
            fullExplanation: "end → endless. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "end"
          }
        ]
      },
      {
        id: "wf-adj-ive",
        title: "Adjective suffix: -ive",
        tasks: [
          {
            id: "wf-adj-ive-01",
            stem: "The students were encouraged to be ___ in solving problems.",
            options: null,
            answer: "creative",
            explanation: "'creative' — from 'create' + '-ive', having the ability to create.",
            fullExplanation: "create → creative. The 'e' is dropped before '-ive'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "create"
          },
          {
            id: "wf-adj-ive-02",
            stem: "She takes an ___ role in all community projects in her area.",
            options: null,
            answer: "active",
            explanation: "'active' — from 'act' + '-ive', engaged in action.",
            fullExplanation: "act → active. The suffix '-ive' forms adjectives meaning 'tending to'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "act"
          },
          {
            id: "wf-adj-ive-03",
            stem: "The company adopted an ___ marketing strategy to reach new customers.",
            options: null,
            answer: "aggressive",
            explanation: "'aggressive' — from 'aggress' + '-ive', forceful and determined.",
            fullExplanation: "aggress → aggressive. The suffix adds the meaning 'tending to'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "aggress"
          },
          {
            id: "wf-adj-ive-04",
            stem: "The new law was ___ in reducing traffic accidents across the country.",
            options: null,
            answer: "effective",
            explanation: "'effective' — from 'effect' + '-ive', producing the desired result.",
            fullExplanation: "effect → effective. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "effect"
          },
          {
            id: "wf-adj-ive-05",
            stem: "The committee members were ___ towards the proposed budget cuts.",
            options: null,
            answer: "responsive",
            explanation: "'responsive' — from 'respond' + '-ive'; 'd' changes to '-sive'.",
            fullExplanation: "respond → responsive. The 'd' is replaced by '-sive'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "respond"
          },
          {
            id: "wf-adj-ive-06",
            stem: "The manager's ___ approach to deadlines put pressure on the team.",
            options: null,
            answer: "restrictive",
            explanation: "'restrictive' — from 'restrict' + '-ive', imposing limitations.",
            fullExplanation: "restrict → restrictive. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "restrict"
          },
          {
            id: "wf-adj-ive-07",
            stem: "The detective had a keen ___ eye that noticed every small detail.",
            options: null,
            answer: "perceptive",
            explanation: "'perceptive' — from 'percept' + '-ive', having keen insight.",
            fullExplanation: "percept → perceptive. Describes sharpness of observation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "percept"
          },
          {
            id: "wf-adj-ive-08",
            stem: "He was ___ about sharing personal information on social media.",
            options: null,
            answer: "protective",
            explanation: "'protective' — from 'protect' + '-ive', aiming to shield from harm.",
            fullExplanation: "protect → protective. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "protect"
          },
          {
            id: "wf-adj-ive-09",
            stem: "The school encourages ___ learning through group discussions and debates.",
            options: null,
            answer: "interactive",
            explanation: "'interactive' — from 'interact' + '-ive', involving mutual action.",
            fullExplanation: "interact → interactive. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "interact"
          },
          {
            id: "wf-adj-ive-10",
            stem: "The athlete was ___ in defending her title at the championships.",
            options: null,
            answer: "competitive",
            explanation: "'competitive' — from 'compete' + '-ive'; 'e' dropped, '-itive' added.",
            fullExplanation: "compete → competitive. The 'e' is dropped.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "compete"
          },
          {
            id: "wf-adj-ive-11",
            stem: "The documentary provided an ___ account of life during the civil war.",
            options: null,
            answer: "informative",
            explanation: "'informative' — from 'inform' + '-ative', providing useful information.",
            fullExplanation: "inform → informative. The variant '-ative' is used.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "inform"
          },
          {
            id: "wf-adj-ive-12",
            stem: "The architect presented an ___ design for the new public library.",
            options: null,
            answer: "innovative",
            explanation: "'innovative' — from 'innovate' + '-ive'; 'e' dropped.",
            fullExplanation: "innovate → innovative. Standard '-ate' → '-ative' pattern.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "innovate"
          },
          {
            id: "wf-adj-ive-13",
            stem: "The substance proved to be highly ___ and caused severe skin burns.",
            options: null,
            answer: "corrosive",
            explanation: "'corrosive' — from 'corrode' + '-ive'; '-de' becomes '-sive'.",
            fullExplanation: "corrode → corrosive. The ending changes to '-sive'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "corrode"
          },
          {
            id: "wf-adj-ive-14",
            stem: "Pandas are ___ animals that prefer to live alone in bamboo forests.",
            options: null,
            answer: "elusive",
            explanation: "'elusive' — from 'elude' + '-ive'; '-de' becomes '-sive'.",
            fullExplanation: "elude → elusive. The ending changes to '-sive'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "elude"
          },
          {
            id: "wf-adj-ive-15",
            stem: "The surgeon's ___ intervention saved the patient's life just in time.",
            options: null,
            answer: "decisive",
            explanation: "'decisive' — from 'decide' + '-ive'; '-de' becomes '-sive'.",
            fullExplanation: "decide → decisive.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "decide"
          }
        ]
      },
      {
        id: "wf-adj-al",
        title: "Adjective suffix: -al/-ial",
        tasks: [
          {
            id: "wf-adj-al-01",
            stem: "The ___ anthem was played before the football match began.",
            options: null,
            answer: "national",
            explanation: "'national' — from 'nation' + '-al', relating to a nation.",
            fullExplanation: "nation → national. The suffix '-al' forms adjectives meaning 'relating to'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "nation"
          },
          {
            id: "wf-adj-al-02",
            stem: "The ___ report revealed several irregularities in the company's accounts.",
            options: null,
            answer: "financial",
            explanation: "'financial' — from 'finance' + '-ial'; 'e' dropped, '-ial' added.",
            fullExplanation: "finance → financial. The variant '-ial' is used after certain stems.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "finance"
          },
          {
            id: "wf-adj-al-03",
            stem: "The ___ ceremony was attended by heads of state from around the world.",
            options: null,
            answer: "presidential",
            explanation: "'presidential' — from 'president' + '-ial', relating to a president.",
            fullExplanation: "president → presidential. The suffix '-ial' is used.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "president"
          },
          {
            id: "wf-adj-al-04",
            stem: "The experiment yielded no ___ evidence to support the hypothesis.",
            options: null,
            answer: "additional",
            explanation: "'additional' — from 'addition' + '-al', extra or supplementary.",
            fullExplanation: "addition → additional. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "addition"
          },
          {
            id: "wf-adj-al-05",
            stem: "The ___ landscape of the region attracts thousands of tourists yearly.",
            options: null,
            answer: "natural",
            explanation: "'natural' — from 'nature' + '-al'; 'e' dropped.",
            fullExplanation: "nature → natural. The 'e' is dropped before '-al'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "nature"
          },
          {
            id: "wf-adj-al-06",
            stem: "The charity provides ___ support to families affected by the disaster.",
            options: null,
            answer: "emotional",
            explanation: "'emotional' — from 'emotion' + '-al', relating to emotions.",
            fullExplanation: "emotion → emotional. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "emotion"
          },
          {
            id: "wf-adj-al-07",
            stem: "The government announced a new ___ policy to boost exports.",
            options: null,
            answer: "industrial",
            explanation: "'industrial' — from 'industry' + '-ial'; 'y' dropped.",
            fullExplanation: "industry → industrial. The 'y' is dropped before '-ial'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "industry"
          },
          {
            id: "wf-adj-al-08",
            stem: "The police officer found the witness's account to be entirely ___.",
            options: null,
            answer: "factual",
            explanation: "'factual' — from 'fact' + '-ual', based on facts.",
            fullExplanation: "fact → factual. The variant '-ual' is used.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "fact"
          },
          {
            id: "wf-adj-al-09",
            stem: "The ___ impact of social media on teenagers is widely debated.",
            options: null,
            answer: "psychological",
            explanation: "'psychological' — from 'psychology' + '-ical'; 'y' dropped.",
            fullExplanation: "psychology → psychological. The 'y' is dropped.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "psychology"
          },
          {
            id: "wf-adj-al-10",
            stem: "The ___ system in the country has undergone major reforms recently.",
            options: null,
            answer: "educational",
            explanation: "'educational' — from 'education' + '-al', relating to education.",
            fullExplanation: "education → educational. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "education"
          },
          {
            id: "wf-adj-al-11",
            stem: "The new bridge was an impressive ___ achievement for the engineers.",
            options: null,
            answer: "structural",
            explanation: "'structural' — from 'structure' + '-al'; 'e' dropped.",
            fullExplanation: "structure → structural.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "structure"
          },
          {
            id: "wf-adj-al-12",
            stem: "The botanist discovered a ___ plant species in the remote valley.",
            options: null,
            answer: "tropical",
            explanation: "'tropical' — from 'tropic' + '-al', relating to the tropics.",
            fullExplanation: "tropic → tropical. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "tropic"
          },
          {
            id: "wf-adj-al-13",
            stem: "The ___ advice from her lawyer helped her avoid a costly lawsuit.",
            options: null,
            answer: "professional",
            explanation: "'professional' — from 'profession' + '-al', relating to a profession.",
            fullExplanation: "profession → professional. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "profession"
          },
          {
            id: "wf-adj-al-14",
            stem: "The festival celebrates the ___ heritage of the indigenous communities.",
            options: null,
            answer: "cultural",
            explanation: "'cultural' — from 'culture' + '-al'; 'e' dropped.",
            fullExplanation: "culture → cultural.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "culture"
          },
          {
            id: "wf-adj-al-15",
            stem: "The researchers found a ___ link between diet and heart disease.",
            options: null,
            answer: "statistical",
            explanation: "'statistical' — from 'statistic' + '-al', based on statistics.",
            fullExplanation: "statistic → statistical. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "statistic"
          }
        ]
      },
      {
        id: "wf-adj-ous",
        title: "Adjective suffix: -ous/-ious",
        tasks: [
          {
            id: "wf-adj-ous-01",
            stem: "The singer became ___ after her debut album topped the charts.",
            options: null,
            answer: "famous",
            explanation: "'famous' — from 'fame' + '-ous'; 'e' dropped.",
            fullExplanation: "fame → famous. The suffix '-ous' means 'full of' or 'characterised by'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "fame"
          },
          {
            id: "wf-adj-ous-02",
            stem: "The detective novel was full of ___ twists and unexpected turns.",
            options: null,
            answer: "mysterious",
            explanation: "'mysterious' — from 'mystery' + '-ious'; 'y' changes to 'i'.",
            fullExplanation: "mystery → mysterious. The 'y' changes to 'i' before '-ous'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "mystery"
          },
          {
            id: "wf-adj-ous-03",
            stem: "Smoking in enclosed spaces is ___ to everyone present.",
            options: null,
            answer: "dangerous",
            explanation: "'dangerous' — from 'danger' + '-ous', involving risk of harm.",
            fullExplanation: "danger → dangerous. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "danger"
          },
          {
            id: "wf-adj-ous-04",
            stem: "The ___ behaviour of the chimpanzees fascinated the researchers.",
            options: null,
            answer: "curious",
            explanation: "'curious' — from 'cure/curiosity' base, showing eager interest.",
            fullExplanation: "The Latin root 'curi-' takes '-ous'. curious. Means eager to learn.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "cure"
          },
          {
            id: "wf-adj-ous-05",
            stem: "The comedian was known for his ___ sense of humour.",
            options: null,
            answer: "humorous",
            explanation: "'humorous' — from 'humour' + '-ous', causing laughter.",
            fullExplanation: "humour → humorous. The 'u' before '-ous' is dropped in some spellings.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["humourous"],
            hint: "humour"
          },
          {
            id: "wf-adj-ous-06",
            stem: "The volcanic eruption was a ___ event for the island's inhabitants.",
            options: null,
            answer: "disastrous",
            explanation: "'disastrous' — from 'disaster' + '-ous'; 'er' changes to 'rous'.",
            fullExplanation: "disaster → disastrous. The ending changes slightly.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "disaster"
          },
          {
            id: "wf-adj-ous-07",
            stem: "The expedition across the Antarctic was extremely ___.",
            options: null,
            answer: "adventurous",
            explanation: "'adventurous' — from 'adventure' + '-ous'; 'e' dropped.",
            fullExplanation: "adventure → adventurous.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "adventure"
          },
          {
            id: "wf-adj-ous-08",
            stem: "The chemical compound proved to be highly ___ to aquatic life.",
            options: null,
            answer: "poisonous",
            explanation: "'poisonous' — from 'poison' + '-ous', capable of causing harm.",
            fullExplanation: "poison → poisonous. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "poison"
          },
          {
            id: "wf-adj-ous-09",
            stem: "Her ___ donation to the hospital helped fund new medical equipment.",
            options: null,
            answer: "generous",
            explanation: "'generous' — from the Latin root 'gener-' + '-ous', willing to give.",
            fullExplanation: "The suffix '-ous' is added to the stem. generous means giving freely.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "gener"
          },
          {
            id: "wf-adj-ous-10",
            stem: "The new skyscraper is the most ___ building in the entire city.",
            options: null,
            answer: "glamorous",
            explanation: "'glamorous' — from 'glamour' + '-ous'; 'u' sometimes dropped.",
            fullExplanation: "glamour → glamorous.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["glamourous"],
            hint: "glamour"
          },
          {
            id: "wf-adj-ous-11",
            stem: "The ___ snake was kept in a secure enclosure at the reptile park.",
            options: null,
            answer: "venomous",
            explanation: "'venomous' — from 'venom' + '-ous', producing venom.",
            fullExplanation: "venom → venomous. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "venom"
          },
          {
            id: "wf-adj-ous-12",
            stem: "The manager was ___ about maintaining high quality standards.",
            options: null,
            answer: "rigorous",
            explanation: "'rigorous' — from 'rigour' + '-ous', extremely thorough.",
            fullExplanation: "rigour → rigorous.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "rigour"
          },
          {
            id: "wf-adj-ous-13",
            stem: "The ___ display of fireworks lit up the night sky spectacularly.",
            options: null,
            answer: "marvellous",
            explanation: "'marvellous' — from 'marvel' + '-ous', causing wonder.",
            fullExplanation: "marvel → marvellous.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["marvelous"],
            hint: "marvel"
          },
          {
            id: "wf-adj-ous-14",
            stem: "The forest was home to ___ species of birds and butterflies.",
            options: null,
            answer: "numerous",
            explanation: "'numerous' — from 'number' + '-ous'; stem changes to 'numer-'.",
            fullExplanation: "number → numerous. The stem shifts to the Latin form.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "number"
          },
          {
            id: "wf-adj-ous-15",
            stem: "The students were ___ about the upcoming field trip to the volcano.",
            options: null,
            answer: "anxious",
            explanation: "'anxious' — from 'anxiety' base + '-ous', feeling worried or eager.",
            fullExplanation: "The root 'anxi-' takes '-ous'. anxious. Means feeling uneasy.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "anxiety"
          }
        ]
      },
      {
        id: "wf-adj-able",
        title: "Adjective suffix: -able/-ible",
        tasks: [
          {
            id: "wf-adj-able-01",
            stem: "The handwriting on the ancient manuscript was barely ___.",
            options: null,
            answer: "readable",
            explanation: "'readable' — from 'read' + '-able', able to be read.",
            fullExplanation: "read → readable. The suffix '-able' means 'capable of being'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "read"
          },
          {
            id: "wf-adj-able-02",
            stem: "Her argument was perfectly ___ and convinced the entire jury.",
            options: null,
            answer: "sensible",
            explanation: "'sensible' — from 'sense' + '-ible', showing good judgement.",
            fullExplanation: "sense → sensible. The variant '-ible' is used with Latin roots.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "sense"
          },
          {
            id: "wf-adj-able-03",
            stem: "The deadline is ___ if we work overtime for the next two weeks.",
            options: null,
            answer: "achievable",
            explanation: "'achievable' — from 'achieve' + '-able', possible to accomplish.",
            fullExplanation: "achieve → achievable. The 'e' is retained before '-able'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "achieve"
          },
          {
            id: "wf-adj-able-04",
            stem: "The terms of the contract are ___ to both parties involved.",
            options: null,
            answer: "acceptable",
            explanation: "'acceptable' — from 'accept' + '-able', satisfactory or adequate.",
            fullExplanation: "accept → acceptable. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "accept"
          },
          {
            id: "wf-adj-able-05",
            stem: "The old bridge is no longer ___ for heavy vehicles to cross.",
            options: null,
            answer: "suitable",
            explanation: "'suitable' — from 'suit' + '-able', appropriate for a purpose.",
            fullExplanation: "suit → suitable. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "suit"
          },
          {
            id: "wf-adj-able-06",
            stem: "The damage to the building after the earthquake was clearly ___.",
            options: null,
            answer: "visible",
            explanation: "'visible' — from 'vis' (see) + '-ible', able to be seen.",
            fullExplanation: "The Latin root 'vis-' takes '-ible'. visible means able to be seen.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "vision"
          },
          {
            id: "wf-adj-able-07",
            stem: "The museum's collection is ___ to the public free of charge.",
            options: null,
            answer: "accessible",
            explanation: "'accessible' — from 'access' + '-ible', easy to reach or enter.",
            fullExplanation: "access → accessible. Uses '-ible' variant.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "access"
          },
          {
            id: "wf-adj-able-08",
            stem: "This fabric is machine ___ and does not shrink in hot water.",
            options: null,
            answer: "washable",
            explanation: "'washable' — from 'wash' + '-able', able to be washed.",
            fullExplanation: "wash → washable. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "wash"
          },
          {
            id: "wf-adj-able-09",
            stem: "A ___ income allows families to meet their basic needs comfortably.",
            options: null,
            answer: "reasonable",
            explanation: "'reasonable' — from 'reason' + '-able', fair and sensible.",
            fullExplanation: "reason → reasonable. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "reason"
          },
          {
            id: "wf-adj-able-10",
            stem: "The witness gave a ___ account that matched the physical evidence.",
            options: null,
            answer: "believable",
            explanation: "'believable' — from 'believe' + '-able'; 'e' dropped.",
            fullExplanation: "believe → believable. The 'e' is dropped before '-able'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "believe"
          },
          {
            id: "wf-adj-able-11",
            stem: "Wind and solar power are ___ sources of energy for the future.",
            options: null,
            answer: "renewable",
            explanation: "'renewable' — from 'renew' + '-able', able to be renewed.",
            fullExplanation: "renew → renewable. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "renew"
          },
          {
            id: "wf-adj-able-12",
            stem: "The professor's lectures were always ___ and easy to follow.",
            options: null,
            answer: "understandable",
            explanation: "'understandable' — from 'understand' + '-able', easy to comprehend.",
            fullExplanation: "understand → understandable. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "understand"
          },
          {
            id: "wf-adj-able-13",
            stem: "It is ___ to make mistakes when you are learning a new skill.",
            options: null,
            answer: "inevitable",
            explanation: "'inevitable' — from Latin 'evitare' + 'in-' + '-able', unavoidable.",
            fullExplanation: "The prefix 'in-' (not) + 'evitable' (avoidable) = inevitable.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "evitable"
          },
          {
            id: "wf-adj-able-14",
            stem: "Fresh vegetables are ___ at the local market every Saturday morning.",
            options: null,
            answer: "available",
            explanation: "'available' — from 'avail' + '-able', obtainable or at hand.",
            fullExplanation: "avail → available. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "avail"
          },
          {
            id: "wf-adj-able-15",
            stem: "The software is fully ___ with all major operating systems.",
            options: null,
            answer: "compatible",
            explanation: "'compatible' — from 'compat' (Latin root) + '-ible', able to work together.",
            fullExplanation: "The Latin root takes '-ible'. compatible means able to coexist.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "compat"
          }
        ]
      },
      {
        id: "wf-adj-ish",
        title: "Adjective suffix: -ish",
        tasks: [
          {
            id: "wf-adj-ish-01",
            stem: "His ___ behaviour during the meeting annoyed the senior managers.",
            options: null,
            answer: "childish",
            explanation: "'childish' — from 'child' + '-ish', behaving like a child.",
            fullExplanation: "child → childish. The suffix '-ish' means 'having the quality of' or 'somewhat'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "child"
          },
          {
            id: "wf-adj-ish-02",
            stem: "She was accused of being ___ for not sharing the prize money.",
            options: null,
            answer: "selfish",
            explanation: "'selfish' — from 'self' + '-ish', concerned only with oneself.",
            fullExplanation: "self → selfish. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "self"
          },
          {
            id: "wf-adj-ish-03",
            stem: "The comedian's ___ jokes appealed to the younger audience members.",
            options: null,
            answer: "clownish",
            explanation: "'clownish' — from 'clown' + '-ish', resembling a clown.",
            fullExplanation: "clown → clownish. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "clown"
          },
          {
            id: "wf-adj-ish-04",
            stem: "His ___ attitude towards newcomers made them feel unwelcome.",
            options: null,
            answer: "snobbish",
            explanation: "'snobbish' — from 'snob' + '-ish', behaving like a snob.",
            fullExplanation: "snob → snobbish. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "snob"
          },
          {
            id: "wf-adj-ish-05",
            stem: "The water in the mountain stream was pleasantly ___.",
            options: null,
            answer: "coolish",
            explanation: "'coolish' — from 'cool' + '-ish', somewhat cool.",
            fullExplanation: "cool → coolish. The suffix '-ish' can mean 'somewhat' or 'rather'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "cool"
          },
          {
            id: "wf-adj-ish-06",
            stem: "She painted the bedroom walls a ___ shade of pale rose.",
            options: null,
            answer: "pinkish",
            explanation: "'pinkish' — from 'pink' + '-ish', somewhat pink in colour.",
            fullExplanation: "pink → pinkish. Regular formation with colour words.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "pink"
          },
          {
            id: "wf-adj-ish-07",
            stem: "The stew had a slightly ___ taste that needed more seasoning.",
            options: null,
            answer: "saltish",
            explanation: "'saltish' — from 'salt' + '-ish', somewhat salty.",
            fullExplanation: "salt → saltish. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["salty"],
            hint: "salt"
          },
          {
            id: "wf-adj-ish-08",
            stem: "The ___ prince refused to consider the concerns of ordinary citizens.",
            options: null,
            answer: "oafish",
            explanation: "'oafish' — from 'oaf' + '-ish', behaving in a stupid, clumsy way.",
            fullExplanation: "oaf → oafish. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "oaf"
          },
          {
            id: "wf-adj-ish-09",
            stem: "The antique shop had a musty, ___ smell about it.",
            options: null,
            answer: "oldish",
            explanation: "'oldish' — from 'old' + '-ish', somewhat old.",
            fullExplanation: "old → oldish. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "old"
          },
          {
            id: "wf-adj-ish-10",
            stem: "His ___ remarks about her cooking upset her greatly.",
            options: null,
            answer: "boorish",
            explanation: "'boorish' — from 'boor' + '-ish', rude and lacking manners.",
            fullExplanation: "boor → boorish. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "boor"
          },
          {
            id: "wf-adj-ish-11",
            stem: "The ___ trick he played on his sister got him into serious trouble.",
            options: null,
            answer: "fiendish",
            explanation: "'fiendish' — from 'fiend' + '-ish', extremely cruel or unpleasant.",
            fullExplanation: "fiend → fiendish. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "fiend"
          },
          {
            id: "wf-adj-ish-12",
            stem: "She arrived at the party looking rather ___ in her ill-fitting dress.",
            options: null,
            answer: "frumpish",
            explanation: "'frumpish' — from 'frump' + '-ish', dowdy or unfashionable.",
            fullExplanation: "frump → frumpish. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "frump"
          },
          {
            id: "wf-adj-ish-13",
            stem: "The ___ glow of the sunset gave the sky a warm amber hue.",
            options: null,
            answer: "yellowish",
            explanation: "'yellowish' — from 'yellow' + '-ish', somewhat yellow.",
            fullExplanation: "yellow → yellowish. Regular formation with colour words.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "yellow"
          },
          {
            id: "wf-adj-ish-14",
            stem: "His ___ refusal to compromise stalled the negotiations for days.",
            options: null,
            answer: "mulish",
            explanation: "'mulish' — from 'mule' + '-ish', stubborn like a mule.",
            fullExplanation: "mule → mulish. The 'e' is dropped before '-ish'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "mule"
          },
          {
            id: "wf-adj-ish-15",
            stem: "The weather forecast predicts a ___ day with temperatures around fifteen degrees.",
            options: null,
            answer: "warmish",
            explanation: "'warmish' — from 'warm' + '-ish', somewhat warm.",
            fullExplanation: "warm → warmish. Regular formation.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "warm"
          }
        ]
      },
      {
        id: "wf-adj-ic",
        title: "Adjective suffix: -ic",
        tasks: [
          {
            id: "wf-adj-ic-01",
            stem: "The physicist explained the ___ structure of hydrogen in detail.",
            options: null,
            answer: "atomic",
            explanation: "'atomic' — from 'atom' + '-ic', relating to atoms.",
            fullExplanation: "atom → atomic. The suffix '-ic' means 'relating to' or 'having the nature of'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "atom"
          },
          {
            id: "wf-adj-ic-02",
            stem: "The play was a ___ retelling of a Greek myth set in modern times.",
            options: null,
            answer: "dramatic",
            explanation: "'dramatic' — from 'drama' + '-tic'; 'a' changes to '-atic'.",
            fullExplanation: "drama → dramatic. The ending adjusts to '-atic'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "drama"
          },
          {
            id: "wf-adj-ic-03",
            stem: "The doctor diagnosed the patient with a ___ lung infection.",
            options: null,
            answer: "chronic",
            explanation: "'chronic' — from Greek 'chronos' (time) + '-ic', persisting over time.",
            fullExplanation: "The root 'chron-' takes '-ic'. chronic means long-lasting.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "chron"
          },
          {
            id: "wf-adj-ic-04",
            stem: "The region is prone to ___ earthquakes that cause major destruction.",
            options: null,
            answer: "seismic",
            explanation: "'seismic' — from Greek 'seismos' (earthquake) + '-ic', relating to earthquakes.",
            fullExplanation: "The root 'seism-' takes '-ic'. seismic relates to earth tremors.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "seism"
          },
          {
            id: "wf-adj-ic-05",
            stem: "The ___ beauty of the mountain range left the hikers speechless.",
            options: null,
            answer: "majestic",
            explanation: "'majestic' — from 'majesty' + '-ic'; 'y' dropped.",
            fullExplanation: "majesty → majestic. The 'y' is dropped before '-ic'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "majesty"
          },
          {
            id: "wf-adj-ic-06",
            stem: "The country's ___ output doubled after the new trade agreement was signed.",
            options: null,
            answer: "economic",
            explanation: "'economic' — from 'economy' + '-ic'; 'y' dropped.",
            fullExplanation: "economy → economic. The 'y' is dropped before '-ic'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "economy"
          },
          {
            id: "wf-adj-ic-07",
            stem: "His ___ approach to problem-solving impressed the interview panel.",
            options: null,
            answer: "systematic",
            explanation: "'systematic' — from 'system' + '-atic', methodical and organised.",
            fullExplanation: "system → systematic. The suffix '-atic' is a variant of '-ic'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "system"
          },
          {
            id: "wf-adj-ic-08",
            stem: "The orchestra gave a ___ performance of Beethoven's Fifth Symphony.",
            options: null,
            answer: "heroic",
            explanation: "'heroic' — from 'hero' + '-ic', showing great bravery.",
            fullExplanation: "hero → heroic. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "hero"
          },
          {
            id: "wf-adj-ic-09",
            stem: "The artist's ___ use of colour created a sense of energy and movement.",
            options: null,
            answer: "energetic",
            explanation: "'energetic' — from 'energy' + '-etic'; 'y' dropped.",
            fullExplanation: "energy → energetic. The 'y' is dropped.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "energy"
          },
          {
            id: "wf-adj-ic-10",
            stem: "The museum houses a ___ collection of artefacts from ancient Greece.",
            options: null,
            answer: "historic",
            explanation: "'historic' — from 'history' + '-ic'; 'y' dropped.",
            fullExplanation: "history → historic. The 'y' is dropped before '-ic'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "history"
          },
          {
            id: "wf-adj-ic-11",
            stem: "The new building was designed to be as ___ as possible to minimise costs.",
            options: null,
            answer: "generic",
            explanation: "'generic' — from 'genus/gener-' + '-ic', general and unspecific.",
            fullExplanation: "The Latin root 'gener-' takes '-ic'. generic means not specific.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "gener"
          },
          {
            id: "wf-adj-ic-12",
            stem: "Recycling is an important part of being more ___ in our daily lives.",
            options: null,
            answer: "ecologic",
            explanation: "'ecologic' — from 'ecology' + '-ic'; 'y' dropped. 'Ecological' is more common.",
            fullExplanation: "ecology → ecologic / ecological. The 'y' is dropped.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            alternateAnswers: ["ecological"],
            hint: "ecology"
          },
          {
            id: "wf-adj-ic-13",
            stem: "The ___ reaction between the chemicals produced a bright flash of light.",
            options: null,
            answer: "catalytic",
            explanation: "'catalytic' — from 'catalyst' + '-ic'; '-st' changes to '-tic'.",
            fullExplanation: "catalyst → catalytic. The ending adjusts.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "catalyst"
          },
          {
            id: "wf-adj-ic-14",
            stem: "She has an ___ imagination that produces the most unusual stories.",
            options: null,
            answer: "fantastic",
            explanation: "'fantastic' — from 'fantasy' + '-tic'; 'y' changes to '-tic'.",
            fullExplanation: "fantasy → fantastic.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "fantasy"
          },
          {
            id: "wf-adj-ic-15",
            stem: "The ___ properties of the mineral made it ideal for industrial use.",
            options: null,
            answer: "metallic",
            explanation: "'metallic' — from 'metal' + '-lic', resembling or containing metal.",
            fullExplanation: "metal → metallic. The variant '-lic' is used.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "metal"
          }
        ]
      },
      {
        id: "wf-adj-ent",
        title: "Adjective suffix: -ent/-ant",
        tasks: [
          {
            id: "wf-adj-ent-01",
            stem: "His opinion on the matter was ___ from that of his colleagues.",
            options: null,
            answer: "different",
            explanation: "'different' — from 'differ' + '-ent', not the same.",
            fullExplanation: "differ → different. The suffix '-ent' forms adjectives from verbs.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "differ"
          },
          {
            id: "wf-adj-ent-02",
            stem: "She was ___ on her parents for financial support during university.",
            options: null,
            answer: "reliant",
            explanation: "'reliant' — from 'rely' + '-ant'; 'y' changes to 'i'.",
            fullExplanation: "rely → reliant. The 'y' changes to 'i' before '-ant'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "rely"
          },
          {
            id: "wf-adj-ent-03",
            stem: "The evidence presented in court was highly ___ to the case.",
            options: null,
            answer: "relevant",
            explanation: "'relevant' — from the Latin root 'relev-' + '-ant', closely connected.",
            fullExplanation: "The root 'relev-' takes '-ant'. relevant means applicable.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "relev"
          },
          {
            id: "wf-adj-ent-04",
            stem: "The scientist made an ___ discovery while working on another project.",
            options: null,
            answer: "important",
            explanation: "'important' — from 'import' + '-ant', of great significance.",
            fullExplanation: "import → important. The suffix '-ant' forms adjectives.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "import"
          },
          {
            id: "wf-adj-ent-05",
            stem: "The new software is fully ___ with the previous version.",
            options: null,
            answer: "consistent",
            explanation: "'consistent' — from 'consist' + '-ent', acting in the same way.",
            fullExplanation: "consist → consistent. Regular formation.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "consist"
          },
          {
            id: "wf-adj-ent-06",
            stem: "She is ___ in three languages: English, Mandarin, and Arabic.",
            options: null,
            answer: "fluent",
            explanation: "'fluent' — from Latin 'flu-' (flow) + '-ent', able to speak smoothly.",
            fullExplanation: "The root 'flu-' takes '-ent'. fluent means flowing and effortless.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "flu"
          },
          {
            id: "wf-adj-ent-07",
            stem: "The company was ___ in its approach to environmental sustainability.",
            options: null,
            answer: "persistent",
            explanation: "'persistent' — from 'persist' + '-ent', continuing firmly.",
            fullExplanation: "persist → persistent. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "persist"
          },
          {
            id: "wf-adj-ent-08",
            stem: "The child was ___ of the dangers of playing near the railway tracks.",
            options: null,
            answer: "ignorant",
            explanation: "'ignorant' — from 'ignore' + '-ant'; 'e' dropped.",
            fullExplanation: "ignore → ignorant. The 'e' is dropped before '-ant'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "ignore"
          },
          {
            id: "wf-adj-ent-09",
            stem: "Her ___ performance in the exam earned her a place at medical school.",
            options: null,
            answer: "excellent",
            explanation: "'excellent' — from 'excel' + '-lent', extremely good.",
            fullExplanation: "excel → excellent. The suffix creates a superlative quality.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "excel"
          },
          {
            id: "wf-adj-ent-10",
            stem: "The two events were not ___ — they happened purely by coincidence.",
            options: null,
            answer: "dependent",
            explanation: "'dependent' — from 'depend' + '-ent', relying on something.",
            fullExplanation: "depend → dependent. Regular formation.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "depend"
          },
          {
            id: "wf-adj-ent-11",
            stem: "The new employee proved to be remarkably ___ at solving complex problems.",
            options: null,
            answer: "competent",
            explanation: "'competent' — from 'compete' + '-ent'; 'e' dropped.",
            fullExplanation: "compete → competent. Having sufficient skill.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "compete"
          },
          {
            id: "wf-adj-ent-12",
            stem: "The smell from the bakery was ___ even from across the street.",
            options: null,
            answer: "apparent",
            explanation: "'apparent' — from 'appear' + '-ent'; form changes to 'appar-'.",
            fullExplanation: "appear → apparent. The stem changes in the derived form.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "appear"
          },
          {
            id: "wf-adj-ent-13",
            stem: "The politician made a ___ effort to appear trustworthy during the debate.",
            options: null,
            answer: "significant",
            explanation: "'significant' — from 'signify' + '-cant'; 'y' changes.",
            fullExplanation: "signify → significant. The ending changes from '-fy' to '-ficant'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "signify"
          },
          {
            id: "wf-adj-ent-14",
            stem: "Regular exercise is ___ for maintaining both physical and mental health.",
            options: null,
            answer: "sufficient",
            explanation: "'sufficient' — from 'suffice' + '-ient'; '-ce' becomes '-cient'.",
            fullExplanation: "suffice → sufficient.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "suffice"
          },
          {
            id: "wf-adj-ent-15",
            stem: "The student's progress was ___ after she changed her study methods.",
            options: null,
            answer: "evident",
            explanation: "'evident' — from Latin 'evid-' + '-ent', clearly seen or understood.",
            fullExplanation: "The root 'evid-' takes '-ent'. evident means obvious.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "evid"
          }
        ]
      },
      {
        id: "wf-verb-ize",
        title: "Verb suffix: -ize/-ise",
        tasks: [
          {
            id: "wf-verb-ize-01",
            stem: "The government plans to ___ the healthcare system over the next decade.",
            options: null,
            answer: "modernize",
            explanation: "'modernize' — from 'modern' + '-ize', to make modern.",
            fullExplanation: "modern → modernize. The suffix '-ize' means 'to make' or 'to become'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["modernise"],
            hint: "modern"
          },
          {
            id: "wf-verb-ize-02",
            stem: "The company decided to ___ all its operations under one management structure.",
            options: null,
            answer: "centralize",
            explanation: "'centralize' — from 'central' + '-ize', to bring to a central point.",
            fullExplanation: "central → centralize.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["centralise"],
            hint: "central"
          },
          {
            id: "wf-verb-ize-03",
            stem: "The new software will ___ many of the repetitive tasks in the office.",
            options: null,
            answer: "computerize",
            explanation: "'computerize' — from 'computer' + '-ize', to equip with computers.",
            fullExplanation: "computer → computerize.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            alternateAnswers: ["computerise"],
            hint: "computer"
          },
          {
            id: "wf-verb-ize-04",
            stem: "The teacher tried to ___ the complex theory for her younger students.",
            options: null,
            answer: "popularize",
            explanation: "'popularize' — from 'popular' + '-ize', to make widely known.",
            fullExplanation: "popular → popularize.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["popularise"],
            hint: "popular"
          },
          {
            id: "wf-verb-ize-05",
            stem: "Scientists can now ___ individual atoms using advanced microscopes.",
            options: null,
            answer: "visualize",
            explanation: "'visualize' — from 'visual' + '-ize', to form a mental image of.",
            fullExplanation: "visual → visualize.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["visualise"],
            hint: "visual"
          },
          {
            id: "wf-verb-ize-06",
            stem: "The council voted to ___ the sale of fireworks within city limits.",
            options: null,
            answer: "legalize",
            explanation: "'legalize' — from 'legal' + '-ize', to make lawful.",
            fullExplanation: "legal → legalize.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            alternateAnswers: ["legalise"],
            hint: "legal"
          },
          {
            id: "wf-verb-ize-07",
            stem: "The charity aims to ___ volunteers from local communities across the region.",
            options: null,
            answer: "mobilize",
            explanation: "'mobilize' — from 'mobile' + '-ize'; 'e' dropped.",
            fullExplanation: "mobile → mobilize.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["mobilise"],
            hint: "mobile"
          },
          {
            id: "wf-verb-ize-08",
            stem: "The manager asked the team to ___ the key findings of the report.",
            options: null,
            answer: "summarize",
            explanation: "'summarize' — from 'summary' + '-ize'; 'y' changed to 'i'.",
            fullExplanation: "summary → summarize.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["summarise"],
            hint: "summary"
          },
          {
            id: "wf-verb-ize-09",
            stem: "The architect wanted to ___ the use of space in the small apartment.",
            options: null,
            answer: "maximize",
            explanation: "'maximize' — from 'maximum' + '-ize'; '-um' dropped.",
            fullExplanation: "maximum → maximize.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            alternateAnswers: ["maximise"],
            hint: "maximum"
          },
          {
            id: "wf-verb-ize-10",
            stem: "The factory plans to ___ its production line with new robots.",
            options: null,
            answer: "mechanize",
            explanation: "'mechanize' — from 'mechanic' + '-ize'; 'ic' sometimes dropped.",
            fullExplanation: "mechanic → mechanize.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["mechanise"],
            hint: "mechanic"
          },
          {
            id: "wf-verb-ize-11",
            stem: "The editor asked the journalist to ___ the article before publication.",
            options: null,
            answer: "finalize",
            explanation: "'finalize' — from 'final' + '-ize', to complete or put in final form.",
            fullExplanation: "final → finalize.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["finalise"],
            hint: "final"
          },
          {
            id: "wf-verb-ize-12",
            stem: "The rebels attempted to ___ the government through a military coup.",
            options: null,
            answer: "destabilize",
            explanation: "'destabilize' — from 'de-' + 'stable' + '-ize', to undermine stability.",
            fullExplanation: "stable → destabilize (with prefix 'de-').",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            alternateAnswers: ["destabilise"],
            hint: "stable"
          },
          {
            id: "wf-verb-ize-13",
            stem: "The company plans to ___ its brand by expanding into Asian markets.",
            options: null,
            answer: "globalize",
            explanation: "'globalize' — from 'global' + '-ize', to make worldwide in scope.",
            fullExplanation: "global → globalize.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["globalise"],
            hint: "global"
          },
          {
            id: "wf-verb-ize-14",
            stem: "Local authorities plan to ___ the historic district to attract tourists.",
            options: null,
            answer: "revitalize",
            explanation: "'revitalize' — from 're-' + 'vital' + '-ize', to give new life.",
            fullExplanation: "vital → revitalize (with prefix 're-').",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["revitalise"],
            hint: "vital"
          },
          {
            id: "wf-verb-ize-15",
            stem: "The surgeon used a laser to ___ the bacteria on the surgical instruments.",
            options: null,
            answer: "sterilize",
            explanation: "'sterilize' — from 'sterile' + '-ize'; 'e' dropped.",
            fullExplanation: "sterile → sterilize.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            alternateAnswers: ["sterilise"],
            hint: "sterile"
          }
        ]
      },
      {
        id: "wf-verb-ify",
        title: "Verb suffix: -ify",
        tasks: [
          {
            id: "wf-verb-ify-01",
            stem: "The teacher tried to ___ the explanation for the younger pupils.",
            options: null,
            answer: "simplify",
            explanation: "'simplify' — from 'simple' + '-ify'; 'e' dropped.",
            fullExplanation: "simple → simplify. The suffix '-ify' means 'to make' or 'to cause to become'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "simple"
          },
          {
            id: "wf-verb-ify-02",
            stem: "The librarian helped ___ the books according to their subject area.",
            options: null,
            answer: "classify",
            explanation: "'classify' — from 'class' + '-ify', to arrange in categories.",
            fullExplanation: "class → classify.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "class"
          },
          {
            id: "wf-verb-ify-03",
            stem: "The government decided to ___ security checks at all major airports.",
            options: null,
            answer: "intensify",
            explanation: "'intensify' — from 'intense' + '-ify'; 'e' dropped.",
            fullExplanation: "intense → intensify. To make more intense.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "intense"
          },
          {
            id: "wf-verb-ify-04",
            stem: "The engineer was asked to ___ which components had caused the failure.",
            options: null,
            answer: "identify",
            explanation: "'identify' — from 'identity' + '-fy'; 'ity' changes to '-ify'.",
            fullExplanation: "identity → identify.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "identity"
          },
          {
            id: "wf-verb-ify-05",
            stem: "The committee voted to ___ the proposed changes to the constitution.",
            options: null,
            answer: "ratify",
            explanation: "'ratify' — from Latin 'ratus' (fixed) + '-ify', to formally approve.",
            fullExplanation: "The root 'rat-' takes '-ify'. ratify means to give formal consent.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "rat"
          },
          {
            id: "wf-verb-ify-06",
            stem: "The scientist needed to ___ his hypothesis with experimental evidence.",
            options: null,
            answer: "verify",
            explanation: "'verify' — from Latin 'verus' (true) + '-ify', to confirm as true.",
            fullExplanation: "The root 'ver-' takes '-ify'. verify means to check accuracy.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "ver"
          },
          {
            id: "wf-verb-ify-07",
            stem: "Drought conditions could ___ the food crisis in the affected regions.",
            options: null,
            answer: "magnify",
            explanation: "'magnify' — from Latin 'magnus' (great) + '-ify', to make greater.",
            fullExplanation: "The root 'magn-' takes '-ify'. magnify means to enlarge or intensify.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "magn"
          },
          {
            id: "wf-verb-ify-08",
            stem: "The chemist managed to ___ the water by removing all contaminants.",
            options: null,
            answer: "purify",
            explanation: "'purify' — from 'pure' + '-ify'; 'e' dropped.",
            fullExplanation: "pure → purify. The suffix means 'to make pure'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "pure"
          },
          {
            id: "wf-verb-ify-09",
            stem: "The report will ___ the minister's claims about falling crime rates.",
            options: null,
            answer: "falsify",
            explanation: "'falsify' — from 'false' + '-ify'; 'e' dropped.",
            fullExplanation: "false → falsify. To prove something is untrue.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "false"
          },
          {
            id: "wf-verb-ify-10",
            stem: "The charity aims to ___ the benefits of regular exercise among older adults.",
            options: null,
            answer: "exemplify",
            explanation: "'exemplify' — from 'example' + '-ify', to serve as a typical instance.",
            fullExplanation: "example → exemplify. The stem changes to 'exempl-'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "example"
          },
          {
            id: "wf-verb-ify-11",
            stem: "The local council plans to ___ the town centre with new parks and cafes.",
            options: null,
            answer: "beautify",
            explanation: "'beautify' — from 'beauty' + '-ify'; 'y' changes to 'i'.",
            fullExplanation: "beauty → beautify.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "beauty"
          },
          {
            id: "wf-verb-ify-12",
            stem: "The new regulations will ___ the approval process for building permits.",
            options: null,
            answer: "codify",
            explanation: "'codify' — from 'code' + '-ify'; 'e' dropped.",
            fullExplanation: "code → codify. To arrange into a systematic code.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "code"
          },
          {
            id: "wf-verb-ify-13",
            stem: "The new evidence could ___ the initial findings of the study.",
            options: null,
            answer: "modify",
            explanation: "'modify' — from Latin 'modus' (measure) + '-ify', to change or alter.",
            fullExplanation: "The root 'mod-' takes '-ify'. modify means to make partial changes.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "mode"
          },
          {
            id: "wf-verb-ify-14",
            stem: "The heat caused the liquid to ___ and turn into a thick paste.",
            options: null,
            answer: "solidify",
            explanation: "'solidify' — from 'solid' + '-ify', to make or become solid.",
            fullExplanation: "solid → solidify.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "solid"
          },
          {
            id: "wf-verb-ify-15",
            stem: "The pharmacist was asked to ___ the correct dosage for the patient.",
            options: null,
            answer: "specify",
            explanation: "'specify' — from 'specific' + '-fy'; '-ic' changes to '-ify'.",
            fullExplanation: "specific → specify. To state clearly.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "specific"
          }
        ]
      },
      {
        id: "wf-verb-en",
        title: "Verb suffix: -en",
        tasks: [
          {
            id: "wf-verb-en-01",
            stem: "The council plans to ___ the road to ease traffic congestion.",
            options: null,
            answer: "widen",
            explanation: "'widen' — from 'wide' + '-en'; 'e' dropped.",
            fullExplanation: "wide → widen. The suffix '-en' means 'to make' or 'to become'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "wide"
          },
          {
            id: "wf-verb-en-02",
            stem: "The storm clouds began to ___ the sky over the harbour.",
            options: null,
            answer: "darken",
            explanation: "'darken' — from 'dark' + '-en', to make or become dark.",
            fullExplanation: "dark → darken.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "dark"
          },
          {
            id: "wf-verb-en-03",
            stem: "Adding yeast will ___ the bread dough as it rises in the bowl.",
            options: null,
            answer: "soften",
            explanation: "'soften' — from 'soft' + '-en', to make or become soft.",
            fullExplanation: "soft → soften.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "soft"
          },
          {
            id: "wf-verb-en-04",
            stem: "The new regulations will ___ penalties for illegal dumping of waste.",
            options: null,
            answer: "tighten",
            explanation: "'tighten' — from 'tight' + '-en', to make tighter or stricter.",
            fullExplanation: "tight → tighten.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "tight"
          },
          {
            id: "wf-verb-en-05",
            stem: "The gym instructor showed them exercises to ___ their core muscles.",
            options: null,
            answer: "strengthen",
            explanation: "'strengthen' — from 'strength' + '-en', to make stronger.",
            fullExplanation: "strength → strengthen.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "strength"
          },
          {
            id: "wf-verb-en-06",
            stem: "The news of the accident served to ___ their resolve to improve safety.",
            options: null,
            answer: "harden",
            explanation: "'harden' — from 'hard' + '-en', to make or become hard.",
            fullExplanation: "hard → harden.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "hard"
          },
          {
            id: "wf-verb-en-07",
            stem: "The tailor needed to ___ the trousers by two centimetres at the waist.",
            options: null,
            answer: "shorten",
            explanation: "'shorten' — from 'short' + '-en', to make shorter.",
            fullExplanation: "short → shorten.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "short"
          },
          {
            id: "wf-verb-en-08",
            stem: "The cold weather caused the wet clay to ___ into a solid mass.",
            options: null,
            answer: "stiffen",
            explanation: "'stiffen' — from 'stiff' + '-en', to make or become stiff.",
            fullExplanation: "stiff → stiffen.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "stiff"
          },
          {
            id: "wf-verb-en-09",
            stem: "The composer decided to ___ the tempo in the final movement.",
            options: null,
            answer: "quicken",
            explanation: "'quicken' — from 'quick' + '-en', to make or become faster.",
            fullExplanation: "quick → quicken.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "quick"
          },
          {
            id: "wf-verb-en-10",
            stem: "The carpenter used a plane to ___ the surface of the wooden table.",
            options: null,
            answer: "flatten",
            explanation: "'flatten' — from 'flat' + '-en', to make flat or smooth.",
            fullExplanation: "flat → flatten.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "flat"
          },
          {
            id: "wf-verb-en-11",
            stem: "The chef recommended using lemon juice to ___ the flavour of the sauce.",
            options: null,
            answer: "heighten",
            explanation: "'heighten' — from 'height' + '-en', to intensify or increase.",
            fullExplanation: "height → heighten.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "height"
          },
          {
            id: "wf-verb-en-12",
            stem: "The economic downturn caused living standards to ___ across the country.",
            options: null,
            answer: "worsen",
            explanation: "'worsen' — from 'worse' + '-en'; 'e' dropped.",
            fullExplanation: "worse → worsen. To become worse.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "worse"
          },
          {
            id: "wf-verb-en-13",
            stem: "The rising sun began to ___ the eastern horizon with golden light.",
            options: null,
            answer: "brighten",
            explanation: "'brighten' — from 'bright' + '-en', to make or become brighter.",
            fullExplanation: "bright → brighten.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "bright"
          },
          {
            id: "wf-verb-en-14",
            stem: "The company used marketing to ___ awareness of its new product range.",
            options: null,
            answer: "broaden",
            explanation: "'broaden' — from 'broad' + '-en', to make or become wider.",
            fullExplanation: "broad → broaden.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "broad"
          },
          {
            id: "wf-verb-en-15",
            stem: "She whispered to avoid alarming anyone and tried to ___ her voice further.",
            options: null,
            answer: "quieten",
            explanation: "'quieten' — from 'quiet' + '-en', to make or become quieter.",
            fullExplanation: "quiet → quieten.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "quiet"
          }
        ]
      },
      {
        id: "wf-adv-ly",
        title: "Adverb suffix: -ly",
        tasks: [
          {
            id: "wf-adv-ly-01",
            stem: "She ___ completed the marathon despite the heavy rain and strong winds.",
            options: null,
            answer: "successfully",
            explanation: "'successfully' — from 'successful' + '-ly', in a successful manner.",
            fullExplanation: "successful → successfully. The suffix '-ly' converts adjectives to adverbs.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "successful"
          },
          {
            id: "wf-adv-ly-02",
            stem: "He ___ reviewed the contract before signing it that afternoon.",
            options: null,
            answer: "carefully",
            explanation: "'carefully' — from 'careful' + '-ly', with great attention to detail.",
            fullExplanation: "careful → carefully. Adjectives ending '-ful' add '-ly' directly.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "careful"
          },
          {
            id: "wf-adv-ly-03",
            stem: "The surgeon ___ performed the delicate operation on the patient's spine.",
            options: null,
            answer: "skilfully",
            explanation: "'skilfully' — from 'skilful' + '-ly', in a skilled manner.",
            fullExplanation: "skilful → skilfully.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            alternateAnswers: ["skillfully"],
            hint: "skilful"
          },
          {
            id: "wf-adv-ly-04",
            stem: "The children played ___ in the garden throughout the sunny afternoon.",
            options: null,
            answer: "happily",
            explanation: "'happily' — from 'happy' + '-ly'; 'y' changes to 'i'.",
            fullExplanation: "happy → happily. Adjectives ending 'y' change to 'i' before '-ly'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "happy"
          },
          {
            id: "wf-adv-ly-05",
            stem: "The cat moved ___ through the tall grass, stalking its prey.",
            options: null,
            answer: "silently",
            explanation: "'silently' — from 'silent' + '-ly', without making any sound.",
            fullExplanation: "silent → silently.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "silent"
          },
          {
            id: "wf-adv-ly-06",
            stem: "She ___ accepted the award on behalf of the entire research team.",
            options: null,
            answer: "graciously",
            explanation: "'graciously' — from 'gracious' + '-ly', in a kind and polite way.",
            fullExplanation: "gracious → graciously.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "gracious"
          },
          {
            id: "wf-adv-ly-07",
            stem: "The train arrived ___ at the station, right on schedule.",
            options: null,
            answer: "punctually",
            explanation: "'punctually' — from 'punctual' + '-ly', exactly on time.",
            fullExplanation: "punctual → punctually.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "punctual"
          },
          {
            id: "wf-adv-ly-08",
            stem: "He spoke ___ about his experiences during the humanitarian mission.",
            options: null,
            answer: "passionately",
            explanation: "'passionately' — from 'passionate' + '-ly'; 'e' retained.",
            fullExplanation: "passionate → passionately.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "passionate"
          },
          {
            id: "wf-adv-ly-09",
            stem: "The student answered each question ___ and with great confidence.",
            options: null,
            answer: "correctly",
            explanation: "'correctly' — from 'correct' + '-ly', in the right way.",
            fullExplanation: "correct → correctly.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "correct"
          },
          {
            id: "wf-adv-ly-10",
            stem: "The company ___ denied any involvement in the environmental scandal.",
            options: null,
            answer: "firmly",
            explanation: "'firmly' — from 'firm' + '-ly', in a strong and resolute manner.",
            fullExplanation: "firm → firmly.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "firm"
          },
          {
            id: "wf-adv-ly-11",
            stem: "The detective ___ examined every piece of evidence at the crime scene.",
            options: null,
            answer: "thoroughly",
            explanation: "'thoroughly' — from 'thorough' + '-ly', in a complete and careful way.",
            fullExplanation: "thorough → thoroughly.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "thorough"
          },
          {
            id: "wf-adv-ly-12",
            stem: "She ___ turned down the job offer because the salary was too low.",
            options: null,
            answer: "politely",
            explanation: "'politely' — from 'polite' + '-ly', in a courteous manner.",
            fullExplanation: "polite → politely. The 'e' is retained before '-ly'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "polite"
          },
          {
            id: "wf-adv-ly-13",
            stem: "The new policy was ___ implemented across all departments last month.",
            options: null,
            answer: "gradually",
            explanation: "'gradually' — from 'gradual' + '-ly', step by step.",
            fullExplanation: "gradual → gradually.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "gradual"
          },
          {
            id: "wf-adv-ly-14",
            stem: "The witness described the events ___ and without any hesitation.",
            options: null,
            answer: "accurately",
            explanation: "'accurately' — from 'accurate' + '-ly', in a precise manner.",
            fullExplanation: "accurate → accurately.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "accurate"
          },
          {
            id: "wf-adv-ly-15",
            stem: "The audience listened ___ as the speaker described her journey.",
            options: null,
            answer: "attentively",
            explanation: "'attentively' — from 'attentive' + '-ly', with close attention.",
            fullExplanation: "attentive → attentively.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "attentive"
          }
        ]
      },
      {
        id: "wf-pre-neg",
        title: "Negative prefixes",
        tasks: [
          {
            id: "wf-pre-neg-01",
            stem: "It is ___ to drive without wearing a seatbelt in most countries.",
            options: null,
            answer: "illegal",
            explanation: "'illegal' — prefix 'il-' + 'legal', meaning not legal.",
            fullExplanation: "The prefix 'il-' is used before words beginning with 'l'. legal → illegal.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "legal"
          },
          {
            id: "wf-pre-neg-02",
            stem: "The young child was ___ to sit still for more than five minutes.",
            options: null,
            answer: "unable",
            explanation: "'unable' — prefix 'un-' + 'able', meaning not able.",
            fullExplanation: "The prefix 'un-' is the most common negative prefix. able → unable.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "able"
          },
          {
            id: "wf-pre-neg-03",
            stem: "His handwriting was so messy that the note was almost ___.",
            options: null,
            answer: "illegible",
            explanation: "'illegible' — prefix 'il-' + 'legible', meaning not readable.",
            fullExplanation: "legible → illegible. 'Il-' before 'l'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "legible"
          },
          {
            id: "wf-pre-neg-04",
            stem: "The company was accused of ___ advertising its products to consumers.",
            options: null,
            answer: "dishonestly",
            explanation: "'dishonestly' — prefix 'dis-' + 'honestly', meaning in a dishonest way.",
            fullExplanation: "honest → dishonest → dishonestly. The prefix 'dis-' reverses meaning.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            alternateAnswers: ["dishonest"],
            hint: "honest"
          },
          {
            id: "wf-pre-neg-05",
            stem: "The patient showed clear signs of ___ with the treatment plan.",
            options: null,
            answer: "dissatisfaction",
            explanation: "'dissatisfaction' — prefix 'dis-' + 'satisfaction', meaning lack of satisfaction.",
            fullExplanation: "satisfaction → dissatisfaction. 'Dis-' indicates the opposite.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "satisfaction"
          },
          {
            id: "wf-pre-neg-06",
            stem: "It would be ___ to assume that everyone agrees with the decision.",
            options: null,
            answer: "incorrect",
            explanation: "'incorrect' — prefix 'in-' + 'correct', meaning not correct.",
            fullExplanation: "correct → incorrect. The prefix 'in-' means 'not'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "correct"
          },
          {
            id: "wf-pre-neg-07",
            stem: "The report contained several ___ statements about the company's finances.",
            options: null,
            answer: "inaccurate",
            explanation: "'inaccurate' — prefix 'in-' + 'accurate', meaning not precise.",
            fullExplanation: "accurate → inaccurate.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "accurate"
          },
          {
            id: "wf-pre-neg-08",
            stem: "Swimming in the reservoir is ___ due to dangerous underwater currents.",
            options: null,
            answer: "impermissible",
            explanation: "'impermissible' — prefix 'im-' + 'permissible', meaning not allowed.",
            fullExplanation: "permissible → impermissible. 'Im-' before 'p'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "permissible"
          },
          {
            id: "wf-pre-neg-09",
            stem: "The manager was ___ with the quality of work submitted by the team.",
            options: null,
            answer: "dissatisfied",
            explanation: "'dissatisfied' — prefix 'dis-' + 'satisfied', meaning not pleased.",
            fullExplanation: "satisfied → dissatisfied.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "satisfied"
          },
          {
            id: "wf-pre-neg-10",
            stem: "Texting while driving is both ___ and extremely dangerous.",
            options: null,
            answer: "irresponsible",
            explanation: "'irresponsible' — prefix 'ir-' + 'responsible', meaning lacking responsibility.",
            fullExplanation: "responsible → irresponsible. 'Ir-' before 'r'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "responsible"
          },
          {
            id: "wf-pre-neg-11",
            stem: "The instructions were ___ and left the customers confused.",
            options: null,
            answer: "unclear",
            explanation: "'unclear' — prefix 'un-' + 'clear', meaning not easy to understand.",
            fullExplanation: "clear → unclear.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "clear"
          },
          {
            id: "wf-pre-neg-12",
            stem: "The politician's promises were widely seen as ___ by the voters.",
            options: null,
            answer: "insincere",
            explanation: "'insincere' — prefix 'in-' + 'sincere', meaning not genuine.",
            fullExplanation: "sincere → insincere.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "sincere"
          },
          {
            id: "wf-pre-neg-13",
            stem: "The witness was accused of deliberately ___ the police during the inquiry.",
            options: null,
            answer: "misleading",
            explanation: "'misleading' — prefix 'mis-' + 'leading', meaning giving a wrong impression.",
            fullExplanation: "lead → misleading. 'Mis-' means 'wrongly' or 'badly'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "leading"
          },
          {
            id: "wf-pre-neg-14",
            stem: "A ___ organisation was set up to distribute aid to the flood victims.",
            options: null,
            answer: "non-profit",
            explanation: "'non-profit' — prefix 'non-' + 'profit', meaning not for financial gain.",
            fullExplanation: "profit → non-profit. 'Non-' means 'not'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            alternateAnswers: ["nonprofit"],
            hint: "profit"
          },
          {
            id: "wf-pre-neg-15",
            stem: "It is ___ to get a refund without the original receipt.",
            options: null,
            answer: "impossible",
            explanation: "'impossible' — prefix 'im-' + 'possible', meaning not possible.",
            fullExplanation: "possible → impossible. 'Im-' is used before 'p' and 'm'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "possible"
          }
        ]
      },
      {
        id: "wf-pre-int",
        title: "Intensifying/directional prefixes",
        tasks: [
          {
            id: "wf-pre-int-01",
            stem: "The company decided to ___ its entire product line after poor sales.",
            options: null,
            answer: "redesign",
            explanation: "'redesign' — prefix 're-' + 'design', meaning to design again.",
            fullExplanation: "The prefix 're-' means 'again'. design → redesign.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "design"
          },
          {
            id: "wf-pre-int-02",
            stem: "The teacher felt the students had ___ the importance of the exam.",
            options: null,
            answer: "underestimated",
            explanation: "'underestimated' — prefix 'under-' + 'estimated', meaning judged too low.",
            fullExplanation: "The prefix 'under-' means 'too little'. estimate → underestimate.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "estimate"
          },
          {
            id: "wf-pre-int-03",
            stem: "The restaurant tends to ___ its customers, leading to long wait times.",
            options: null,
            answer: "overbook",
            explanation: "'overbook' — prefix 'over-' + 'book', meaning to book too many.",
            fullExplanation: "The prefix 'over-' means 'too much'. book → overbook.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "book"
          },
          {
            id: "wf-pre-int-04",
            stem: "The factory plans to ___ its production process with new technology.",
            options: null,
            answer: "restructure",
            explanation: "'restructure' — prefix 're-' + 'structure', meaning to organise again.",
            fullExplanation: "structure → restructure. 'Re-' means 'again'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "structure"
          },
          {
            id: "wf-pre-int-05",
            stem: "The critics argued that the media had ___ the severity of the crisis.",
            options: null,
            answer: "overstated",
            explanation: "'overstated' — prefix 'over-' + 'stated', meaning exaggerated.",
            fullExplanation: "state → overstate. 'Over-' means 'too much'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "state"
          },
          {
            id: "wf-pre-int-06",
            stem: "The charity worker felt ___ and unsupported by the local government.",
            options: null,
            answer: "undervalued",
            explanation: "'undervalued' — prefix 'under-' + 'valued', meaning not valued enough.",
            fullExplanation: "value → undervalue. 'Under-' means 'not enough'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "value"
          },
          {
            id: "wf-pre-int-07",
            stem: "The athlete managed to ___ her personal best by three seconds.",
            options: null,
            answer: "outperform",
            explanation: "'outperform' — prefix 'out-' + 'perform', meaning to do better than.",
            fullExplanation: "The prefix 'out-' means 'surpassing'. perform → outperform.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "perform"
          },
          {
            id: "wf-pre-int-08",
            stem: "The city council decided to ___ the old railway station as a museum.",
            options: null,
            answer: "repurpose",
            explanation: "'repurpose' — prefix 're-' + 'purpose', meaning to use for a new purpose.",
            fullExplanation: "purpose → repurpose.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "purpose"
          },
          {
            id: "wf-pre-int-09",
            stem: "The employees were clearly ___ and struggled to meet their targets.",
            options: null,
            answer: "overworked",
            explanation: "'overworked' — prefix 'over-' + 'worked', meaning worked too hard.",
            fullExplanation: "work → overwork. 'Over-' means excessive.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "work"
          },
          {
            id: "wf-pre-int-10",
            stem: "Fresh troops were brought in to ___ the exhausted soldiers at the front.",
            options: null,
            answer: "reinforce",
            explanation: "'reinforce' — prefix 're-' + 'inforce/enforce', meaning to strengthen again.",
            fullExplanation: "The prefix 're-' means 'again'. force → reinforce.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "force"
          },
          {
            id: "wf-pre-int-11",
            stem: "The small boat was ___ by the large fishing vessel within minutes.",
            options: null,
            answer: "outpaced",
            explanation: "'outpaced' — prefix 'out-' + 'paced', meaning went faster than.",
            fullExplanation: "pace → outpace. 'Out-' means 'surpassing'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "pace"
          },
          {
            id: "wf-pre-int-12",
            stem: "The government was criticised for having ___ the new healthcare workers.",
            options: null,
            answer: "underpaid",
            explanation: "'underpaid' — prefix 'under-' + 'paid', meaning paid too little.",
            fullExplanation: "pay → underpay. 'Under-' means 'not enough'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "pay"
          },
          {
            id: "wf-pre-int-13",
            stem: "The editor asked the journalist to ___ the article for factual errors.",
            options: null,
            answer: "recheck",
            explanation: "'recheck' — prefix 're-' + 'check', meaning to check again.",
            fullExplanation: "check → recheck. 'Re-' means 'again'.",
            source: "McCarthy, M. & O'Dell, F. English Vocabulary in Use (Upper-Intermediate), Unit 45",
            hint: "check"
          },
          {
            id: "wf-pre-int-14",
            stem: "The young runner managed to ___ all her rivals in the final sprint.",
            options: null,
            answer: "outsprint",
            explanation: "'outsprint' — prefix 'out-' + 'sprint', meaning to sprint faster than.",
            fullExplanation: "sprint → outsprint. 'Out-' means 'surpassing'.",
            source: "Swan, M. Practical English Usage (4th ed.), §624",
            hint: "sprint"
          },
          {
            id: "wf-pre-int-15",
            stem: "The company was forced to ___ many of its products due to safety concerns.",
            options: null,
            answer: "recall",
            explanation: "'recall' — prefix 're-' + 'call', meaning to call back.",
            fullExplanation: "call → recall. 'Re-' means 'back' or 'again'.",
            source: "Parrott, M. Grammar for English Language Teachers, Chapter 27",
            hint: "call"
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

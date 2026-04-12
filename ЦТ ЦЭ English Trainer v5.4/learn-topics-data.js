/* ═══════════════════════════════════════════════════════════════════════════
   LEARN TOPICS DATA  —  learn-topics-data.js
   Topic 1 ONLY: Verb Tenses & Voice
   19 subtopics · 285 tasks
   NOTE: options[0] = correct answer — shuffled at runtime.
   alternateAnswers[] present where multiple answers are valid.
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

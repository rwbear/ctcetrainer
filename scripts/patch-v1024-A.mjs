#!/usr/bin/env node
// v10.24 patch — Category A: 30 wf-* quote task rewrites (tasks 25–30 in
// wf-noun, wf-adj, wf-adv, wf-neg, wf-mixed). Each task gets:
//   • a (CAPS_BASE) marker added to the stem
//   • the surrounding sentence rewritten so the answer fits grammatically
//   • hint set to the lowercase base (≠ answer)
//   • a properly authored explanation + fullExplanation that names the WF rule
import fs from "node:fs";
import path from "node:path";

const FILE = path.resolve(process.cwd(), "learn-data/ctce-tasks.js");
let src = fs.readFileSync(FILE, "utf8");
let changes = 0;

function replaceTask(taskId, newBody) {
  // newBody is the FULL replacement (the lines between { and }, exclusive).
  // We search for the existing task block by id and replace it.
  const idMarker = `id: "${taskId}",`;
  const idx = src.indexOf(idMarker);
  if (idx === -1) { console.error(`FAIL ${taskId}: not found`); process.exit(1); }
  // The block opens on the previous `{` (look back a few chars)
  let openBrace = src.lastIndexOf("{", idx);
  // Find the matching close `}` — naive scan, ok because tasks are flat objects
  let depth = 0, end = -1;
  for (let i = openBrace; i < src.length; i++) {
    const ch = src[i];
    if (ch === "{") depth++;
    else if (ch === "}") { depth--; if (depth === 0) { end = i; break; } }
    else if (ch === "\"") { // skip strings to avoid braces inside them
      i++;
      while (i < src.length && src[i] !== "\"") {
        if (src[i] === "\\") i++;
        i++;
      }
    }
  }
  if (end === -1) { console.error(`FAIL ${taskId}: brace match`); process.exit(1); }
  const before = src.slice(0, openBrace);
  const after  = src.slice(end + 1);
  const block = `{\n${newBody.trimEnd()}\n      }`;
  src = before + block + after;
  changes++;
  console.log(`  OK   [${taskId}]`);
}

// Helper for building task body lines (8-space indent).
const T = (...lines) => lines.map(l => "        " + l).join("\n");

// ─────────────────────────────────────────────────────────
// wf-noun 25–30 — derive a NOUN from a verb/adjective base.
// ─────────────────────────────────────────────────────────
console.log("\n=== Category A: wf-noun 25–30 ===");

replaceTask("wf-noun-25", T(
  `id: "wf-noun-25",`,
  `stem: "Football is not just a game. For many fans it represents a (PASSIONATE) attachment to their club — a true ___ that defines their lives.",`,
  `options: ["passion", "passionate", "passionately"],`,
  `answer: "passion",`,
  `explanation: "The noun 'passion' is the root of the adjective 'passionate' — it is the form needed after the article 'a'.",`,
  `fullExplanation: "The adjective 'passionate' is built from the noun 'passion' by adding the suffix -ate. The slot here calls for a noun head ('a true ___'), which is the base 'passion'. 'Passionate' is an adjective and cannot follow the article 'a' as a head noun. 'Passionately' is an adverb and cannot serve as a noun.",`,
  `source: "Adapted, attributed to Lionel Messi",`,
  `hint: "passionate",`,
  `flavor: "quotes",`,
  `author: "Lionel Messi"`,
));

replaceTask("wf-noun-26", T(
  `id: "wf-noun-26",`,
  `stem: "___ (EDUCATE) is the most powerful weapon we can use to change the world.",`,
  `options: ["education", "educate", "educational"],`,
  `answer: "education",`,
  `explanation: "The suffix -tion turns the verb 'educate' into the noun 'education'.",`,
  `fullExplanation: "Adding -tion to 'educat-' (with the silent -e dropped) gives the noun 'education', meaning the process of acquiring knowledge. 'Educate' is a verb and cannot stand as the subject of this sentence in this form. 'Educational' is an adjective, not a subject noun.",`,
  `source: "Adapted, attributed to Nelson Mandela",`,
  `hint: "educate",`,
  `flavor: "quotes",`,
  `author: "Nelson Mandela"`,
));

replaceTask("wf-noun-27", T(
  `id: "wf-noun-27",`,
  `stem: "You can only reach your full ___ (DEVELOP) by beating on your craft for hours and hours.",`,
  `options: ["development", "develop", "developing"],`,
  `answer: "development",`,
  `explanation: "The suffix -ment turns the verb 'develop' into the noun 'development'.",`,
  `fullExplanation: "Adding -ment to 'develop' forms the noun 'development', meaning growth or progress. The slot 'your full ___' requires a noun head. 'Develop' is a verb and cannot fill a noun slot. 'Developing' is a present participle / gerund and would change the meaning to an ongoing action.",`,
  `source: "Adapted, attributed to Anthony Joshua",`,
  `hint: "develop",`,
  `flavor: "quotes",`,
  `author: "Anthony Joshua"`,
));

replaceTask("wf-noun-28", T(
  `id: "wf-noun-28",`,
  `stem: "Emma Watson insists on the right to (DECIDE) for herself: she does not want anyone else's ___ about who she is.",`,
  `options: ["decision", "deciding", "decide"],`,
  `answer: "decision",`,
  `explanation: "The suffix -sion turns the verb 'decide' into the noun 'decision'.",`,
  `fullExplanation: "Adding -sion to 'deci-' (with the verbal -de removed) gives the noun 'decision', meaning a choice or judgment. The slot 'anyone else's ___' requires a noun head. 'Deciding' is a gerund/participle and changes the meaning to an ongoing action. 'Decide' is a verb and cannot fill a noun slot after a possessive.",`,
  `source: "Adapted, attributed to Emma Watson",`,
  `hint: "decide",`,
  `flavor: "quotes",`,
  `author: "Emma Watson"`,
));

replaceTask("wf-noun-29", T(
  `id: "wf-noun-29",`,
  `stem: "___ (SUCCEED) is no accident. It is hard work, perseverance, learning, studying and sacrifice.",`,
  `options: ["success", "successful", "successfully"],`,
  `answer: "success",`,
  `explanation: "The verb 'succeed' yields the noun 'success' (an irregular Latin-root derivation).",`,
  `fullExplanation: "'Success' is the noun form derived from the verb 'succeed' through an irregular vowel change shared by their Latin root. The slot is the subject of the sentence and must be a noun. 'Successful' is an adjective and cannot be the subject. 'Successfully' is an adverb and cannot be the subject.",`,
  `source: "Adapted, attributed to Pele",`,
  `hint: "succeed",`,
  `flavor: "quotes",`,
  `author: "Pele"`,
));

replaceTask("wf-noun-30", T(
  `id: "wf-noun-30",`,
  `stem: "Thomas Edison reached his greatest ___ (SUCCEED) only after refusing to treat any of his 10,000 failed attempts as final.",`,
  `options: ["success", "successful", "successfully"],`,
  `answer: "success",`,
  `explanation: "The verb 'succeed' yields the noun 'success' (an irregular Latin-root derivation).",`,
  `fullExplanation: "'Success' is the noun form derived from the verb 'succeed'. After the determiner 'his greatest', a noun head is required. 'Successful' is an adjective and cannot fill that slot. 'Successfully' is an adverb and also cannot serve as a noun head.",`,
  `source: "Adapted, attributed to Thomas Edison",`,
  `hint: "succeed",`,
  `flavor: "quotes",`,
  `author: "Thomas Edison"`,
));

// ─────────────────────────────────────────────────────────
// wf-adj 25–30 — derive an ADJECTIVE from a noun/verb base.
// ─────────────────────────────────────────────────────────
console.log("\n=== Category A: wf-adj 25–30 ===");

replaceTask("wf-adj-25", T(
  `id: "wf-adj-25",`,
  `stem: "For a ___ (SUCCESS) technology, reality must take precedence over public relations, for nature cannot be fooled.",`,
  `options: ["successful", "success", "successfully"],`,
  `answer: "successful",`,
  `explanation: "The suffix -ful turns the noun 'success' into the adjective 'successful'.",`,
  `fullExplanation: "Adding -ful to 'success' forms the adjective 'successful', meaning achieving the desired aim. The slot 'a ___ technology' calls for a prenominal adjective. 'Success' is a noun and cannot directly modify another noun in this position. 'Successfully' is an adverb and cannot modify a noun.",`,
  `source: "Adapted, attributed to Richard Feynman",`,
  `hint: "success",`,
  `flavor: "quotes",`,
  `author: "Richard Feynman"`,
));

replaceTask("wf-adj-26", T(
  `id: "wf-adj-26",`,
  `stem: "The screen is a magic medium — cinema remains ___ (HOPE) of reaching audiences in ways no other art form can match.",`,
  `options: ["hopeful", "hope", "hopefully"],`,
  `answer: "hopeful",`,
  `explanation: "The suffix -ful turns the noun/verb 'hope' into the adjective 'hopeful'.",`,
  `fullExplanation: "Adding -ful to 'hope' forms the adjective 'hopeful', meaning feeling or expressing optimism. The verb 'remains' takes a predicative adjective complement here. 'Hope' is a noun or verb and cannot complete 'remains ___ of'. 'Hopefully' is an adverb and cannot serve as a predicative adjective.",`,
  `source: "Adapted, attributed to Stanley Kubrick",`,
  `hint: "hope",`,
  `flavor: "quotes",`,
  `author: "Stanley Kubrick"`,
));

replaceTask("wf-adj-27", T(
  `id: "wf-adj-27",`,
  `stem: "Socrates taught that asking ___ (WONDER) questions is the true beginning of wisdom.",`,
  `options: ["wonderful", "wonder", "wonderfully"],`,
  `answer: "wonderful",`,
  `explanation: "The suffix -ful turns the noun/verb 'wonder' into the adjective 'wonderful'.",`,
  `fullExplanation: "Adding -ful to 'wonder' forms the adjective 'wonderful', meaning inspiring delight or admiration. The slot 'asking ___ questions' calls for a prenominal adjective. 'Wonder' is a noun or verb and cannot directly modify 'questions' in this slot. 'Wonderfully' is an adverb and cannot modify a noun.",`,
  `source: "Adapted, attributed to Socrates",`,
  `hint: "wonder",`,
  `flavor: "quotes",`,
  `author: "Socrates"`,
));

replaceTask("wf-adj-28", T(
  `id: "wf-adj-28",`,
  `stem: "Martin Scorsese liked to remind young directors that the most personal is the most ___ (CREATE).",`,
  `options: ["creative", "creation", "creatively"],`,
  `answer: "creative",`,
  `explanation: "The suffix -ive turns the verb 'create' into the adjective 'creative'.",`,
  `fullExplanation: "Adding -ive to 'creat-' (with the silent -e dropped) forms the adjective 'creative', meaning producing original ideas. The slot 'the most ___' calls for a predicative adjective. 'Creation' is a noun and cannot serve as a predicative adjective. 'Creatively' is an adverb and cannot serve as a predicative adjective either.",`,
  `source: "Adapted, attributed to Martin Scorsese",`,
  `hint: "create",`,
  `flavor: "quotes",`,
  `author: "Martin Scorsese"`,
));

replaceTask("wf-adj-29", T(
  `id: "wf-adj-29",`,
  `stem: "All ___ (CREATE) people want to do the unexpected.",`,
  `options: ["creative", "creation", "creatively"],`,
  `answer: "creative",`,
  `explanation: "The suffix -ive turns the verb 'create' into the adjective 'creative'.",`,
  `fullExplanation: "Adding -ive to 'creat-' (with the silent -e dropped) forms the adjective 'creative', meaning producing original ideas. The slot 'All ___ people' calls for a prenominal adjective. 'Creation' is a noun and cannot directly modify 'people' in this position. 'Creatively' is an adverb and cannot modify a noun.",`,
  `source: "Adapted, attributed to Hedy Lamarr",`,
  `hint: "create",`,
  `flavor: "quotes",`,
  `author: "Hedy Lamarr"`,
));

replaceTask("wf-adj-30", T(
  `id: "wf-adj-30",`,
  `stem: "Beyonce has always maintained that being ___ (POWER) is not something that is given to you — you have to take it.",`,
  `options: ["powerful", "power", "powerfully"],`,
  `answer: "powerful",`,
  `explanation: "The suffix -ful turns the noun 'power' into the adjective 'powerful'.",`,
  `fullExplanation: "Adding -ful to 'power' forms the adjective 'powerful', meaning having great strength or influence. The slot 'being ___' calls for a predicative adjective complement of 'being'. 'Power' is a noun and would change the meaning entirely. 'Powerfully' is an adverb and cannot serve as a predicative adjective.",`,
  `source: "Adapted, attributed to Beyonce",`,
  `hint: "power",`,
  `flavor: "quotes",`,
  `author: "Beyonce"`,
));

// ─────────────────────────────────────────────────────────
// wf-adv 25–30 — derive an ADVERB from an adjective base.
// ─────────────────────────────────────────────────────────
console.log("\n=== Category A: wf-adv 25–30 ===");

replaceTask("wf-adv-25", T(
  `id: "wf-adv-25",`,
  `stem: "Warren Buffett put it ___ (SIMPLE): if you're going to be thinking anyway, you might as well think big.",`,
  `options: ["simply", "simple", "simplicity"],`,
  `answer: "simply",`,
  `explanation: "The suffix -ly turns the adjective 'simple' into the adverb 'simply'.",`,
  `fullExplanation: "Adding -ly to 'simpl-' (with the silent -e dropped) forms the adverb 'simply', meaning in a plain or straightforward way. It modifies the verb 'put' here. 'Simple' is an adjective and cannot modify a verb. 'Simplicity' is a noun and cannot modify a verb either.",`,
  `source: "Adapted, attributed to Warren Buffett",`,
  `hint: "simple",`,
  `flavor: "quotes",`,
  `author: "Warren Buffett"`,
));

replaceTask("wf-adv-26", T(
  `id: "wf-adv-26",`,
  `stem: "Three passions, ___ (SIMPLE) but overwhelmingly strong, have governed my life: the longing for love, the search for knowledge, and unbearable pity for the suffering of mankind.",`,
  `options: ["simply", "simple", "simplicity"],`,
  `answer: "simply",`,
  `explanation: "The suffix -ly turns the adjective 'simple' into the adverb 'simply'.",`,
  `fullExplanation: "Adding -ly to 'simpl-' (with the silent -e dropped) forms the adverb 'simply', meaning plainly or in a basic way. Here it pairs with the adverb 'overwhelmingly' as a parallel modifier of the adjective 'strong'. 'Simple' is an adjective and would not match the parallel structure with 'overwhelmingly'. 'Simplicity' is a noun and cannot modify an adjective.",`,
  `source: "Adapted, attributed to Bertrand Russell",`,
  `hint: "simple",`,
  `flavor: "quotes",`,
  `author: "Bertrand Russell"`,
));

replaceTask("wf-adv-27", T(
  `id: "wf-adv-27",`,
  `stem: "We have ___ (CLEAR) arranged things so that almost no one understands science and technology — that is a prescription for disaster.",`,
  `options: ["clearly", "clear", "clearness"],`,
  `answer: "clearly",`,
  `explanation: "The suffix -ly turns the adjective 'clear' into the adverb 'clearly'.",`,
  `fullExplanation: "Adding -ly to 'clear' forms the adverb 'clearly', meaning in an obvious or evident manner. It modifies the verb 'arranged' here. 'Clear' is an adjective and cannot modify a verb. 'Clearness' is a noun and cannot modify a verb either.",`,
  `source: "Adapted, attributed to Carl Sagan",`,
  `hint: "clear",`,
  `flavor: "quotes",`,
  `author: "Carl Sagan"`,
));

replaceTask("wf-adv-28", T(
  `id: "wf-adv-28",`,
  `stem: "Kendrick Lamar described his connection to the continent ___ (SIMPLE): 'It just felt like a place where I belonged.'",`,
  `options: ["simply", "simple", "simplicity"],`,
  `answer: "simply",`,
  `explanation: "The suffix -ly turns the adjective 'simple' into the adverb 'simply'.",`,
  `fullExplanation: "Adding -ly to 'simpl-' (with the silent -e dropped) forms the adverb 'simply', meaning plainly or without complication. It modifies the verb 'described' here. 'Simple' is an adjective and cannot modify a verb. 'Simplicity' is a noun and cannot modify a verb either.",`,
  `source: "Adapted, attributed to Kendrick Lamar",`,
  `hint: "simple",`,
  `flavor: "quotes",`,
  `author: "Kendrick Lamar"`,
));

replaceTask("wf-adv-29", T(
  `id: "wf-adv-29",`,
  `stem: "The biggest risk is not taking any risk. In a world that's changing really ___ (QUICK), the only strategy guaranteed to fail is not taking risks.",`,
  `options: ["quickly", "quick", "quickness"],`,
  `answer: "quickly",`,
  `explanation: "The suffix -ly turns the adjective 'quick' into the adverb 'quickly'.",`,
  `fullExplanation: "Adding -ly to 'quick' forms the adverb 'quickly', meaning at a fast pace. It modifies the verb form 'is changing' here. 'Quick' is an adjective and cannot modify a verb form. 'Quickness' is a noun and cannot modify a verb either.",`,
  `source: "Adapted, attributed to Mark Zuckerberg",`,
  `hint: "quick",`,
  `flavor: "quotes",`,
  `author: "Mark Zuckerberg"`,
));

replaceTask("wf-adv-30", T(
  `id: "wf-adv-30",`,
  `stem: "Anyone can get angry — anger comes ___ (EASY) to most people; but to feel it towards the right person, at the right time, and in the right way is not for everyone.",`,
  `options: ["easily", "easy", "ease"],`,
  `answer: "easily",`,
  `explanation: "The suffix -ly turns the adjective 'easy' into the adverb 'easily'.",`,
  `fullExplanation: "Adding -ly to 'eas-' (with -y becoming -i-) forms the adverb 'easily', meaning without difficulty. It modifies the verb 'comes' here. 'Easy' is an adjective and cannot modify a verb. 'Ease' is a noun or verb and cannot modify a verb either.",`,
  `source: "Adapted, attributed to Aristotle",`,
  `hint: "easy",`,
  `flavor: "quotes",`,
  `author: "Aristotle"`,
));

// ─────────────────────────────────────────────────────────
// wf-neg 25–30 — apply a NEGATIVE PREFIX to the base.
// ─────────────────────────────────────────────────────────
console.log("\n=== Category A: wf-neg 25–30 ===");

replaceTask("wf-neg-25", T(
  `id: "wf-neg-25",`,
  `stem: "It would be ___ (FAIR) to ignore Bo Burnham's contribution to modern comedy.",`,
  `options: ["unfair", "infair", "disfair"],`,
  `answer: "unfair",`,
  `explanation: "The prefix un- negates the adjective 'fair' to form 'unfair'.",`,
  `fullExplanation: "Un- is the standard negative prefix for the adjective 'fair': unfair means not just or not deserved. 'Infair' is not a standard English word; un- is the correct prefix here. 'Disfair' also does not exist as a word in English.",`,
  `source: "Adapted, attributed to Bo Burnham",`,
  `hint: "fair",`,
  `flavor: "quotes",`,
  `author: "Bo Burnham"`,
));

replaceTask("wf-neg-26", T(
  `id: "wf-neg-26",`,
  `stem: "At first the audience felt ___ (ABLE) to follow Robin Williams's rapid stream of improvisation.",`,
  `options: ["unable", "inable", "disable"],`,
  `answer: "unable",`,
  `explanation: "The prefix un- negates the adjective 'able' to form 'unable'.",`,
  `fullExplanation: "Un- is the standard negative prefix for 'able': unable means not having the skill or means to do something. 'Inable' is not a standard English word; un- is the correct prefix here. 'Disable' is a verb meaning to make incapable, with a different meaning and grammatical role.",`,
  `source: "Adapted, attributed to Robin Williams",`,
  `hint: "able",`,
  `flavor: "quotes",`,
  `author: "Robin Williams"`,
));

replaceTask("wf-neg-27", T(
  `id: "wf-neg-27",`,
  `stem: "To ___ (AGREE) entirely with Naomi Osaka on this point is rare among commentators — most find her reasoning persuasive.",`,
  `options: ["disagree", "unagree", "inagree"],`,
  `answer: "disagree",`,
  `explanation: "The prefix dis- negates the verb 'agree' to form 'disagree'.",`,
  `fullExplanation: "Dis- is the standard negative prefix for the verb 'agree': disagree means to hold a different opinion. 'Unagree' is not a standard English verb; dis- is the established prefix here. 'Inagree' also does not exist as a word in English.",`,
  `source: "Adapted, attributed to Naomi Osaka",`,
  `hint: "agree",`,
  `flavor: "quotes",`,
  `author: "Naomi Osaka"`,
));

replaceTask("wf-neg-28", T(
  `id: "wf-neg-28",`,
  `stem: "Many fans were ___ (HAPPY) with the slow pace of change and demanded immediate action.",`,
  `options: ["unhappy", "inhappy", "dishappy"],`,
  `answer: "unhappy",`,
  `explanation: "The prefix un- negates the adjective 'happy' to form 'unhappy'.",`,
  `fullExplanation: "Un- is the standard negative prefix for 'happy': unhappy means not content or not pleased. 'Inhappy' is not a standard English word; un- is the correct prefix here. 'Dishappy' also does not exist in English.",`,
  `source: "Adapted, attributed to Timothee Chalamet",`,
  `hint: "happy",`,
  `flavor: "quotes",`,
  `author: "Timothee Chalamet"`,
));

replaceTask("wf-neg-29", T(
  `id: "wf-neg-29",`,
  `stem: "Some critics found Alan Watts's ideas ___ (POSSIBLE) to accept at first, though many later changed their view.",`,
  `options: ["impossible", "unpossible", "dispossible"],`,
  `answer: "impossible",`,
  `explanation: "The prefix im- negates the adjective 'possible' (im- being the form of in- used before /p/).",`,
  `fullExplanation: "Im- (a variant of in-) is used before adjectives beginning with p: impossible means not able to happen or be done. 'Unpossible' is non-standard; im- is the required prefix for this adjective. 'Dispossible' is not a real English word.",`,
  `source: "Adapted, attributed to Alan Watts",`,
  `hint: "possible",`,
  `flavor: "quotes",`,
  `author: "Alan Watts"`,
));

replaceTask("wf-neg-30", T(
  `id: "wf-neg-30",`,
  `stem: "What once seemed ___ (USUAL) became conventional thanks to Jeff Bezos's willingness to embrace risk.",`,
  `options: ["unusual", "inusual", "disusual"],`,
  `answer: "unusual",`,
  `explanation: "The prefix un- negates the adjective 'usual' to form 'unusual'.",`,
  `fullExplanation: "Un- is the standard negative prefix for 'usual': unusual means not common or not expected. 'Inusual' is not standard English; un- is the correct prefix here. 'Disusual' also does not exist as a word in English.",`,
  `source: "Adapted, attributed to Jeff Bezos",`,
  `hint: "usual",`,
  `flavor: "quotes",`,
  `author: "Jeff Bezos"`,
));

// ─────────────────────────────────────────────────────────
// wf-mixed 25–30 — mixed transformations (mostly verb → noun).
// ─────────────────────────────────────────────────────────
console.log("\n=== Category A: wf-mixed 25–30 ===");

replaceTask("wf-mixed-25", T(
  `id: "wf-mixed-25",`,
  `stem: "Ada Lovelace knew that the quality of a machine's ___ (PERFORM) depends entirely on the quality of the instructions it is given.",`,
  `options: ["performance", "perform", "performing"],`,
  `answer: "performance",`,
  `explanation: "The suffix -ance turns the verb 'perform' into the noun 'performance'.",`,
  `fullExplanation: "Adding -ance to 'perform' forms the noun 'performance', meaning the act of performing or how something works. The slot 'a machine's ___' requires a noun head. 'Perform' is a verb and cannot fill that slot. 'Performing' is a gerund/participle and would change the meaning to an ongoing action.",`,
  `source: "Adapted, attributed to Ada Lovelace",`,
  `hint: "perform",`,
  `flavor: "quotes",`,
  `author: "Ada Lovelace"`,
));

replaceTask("wf-mixed-26", T(
  `id: "wf-mixed-26",`,
  `stem: "Rafael Nadal always tries to give himself the right conditions for an outstanding ___ (PERFORM); careful preparation is the key.",`,
  `options: ["performance", "perform", "performing"],`,
  `answer: "performance",`,
  `explanation: "The suffix -ance turns the verb 'perform' into the noun 'performance'.",`,
  `fullExplanation: "Adding -ance to 'perform' forms the noun 'performance', meaning an act of carrying out something — typically an athletic or artistic feat. The slot 'an outstanding ___' requires a noun head. 'Perform' is a verb and cannot fill that slot. 'Performing' is a gerund/participle and would shift the meaning to an ongoing process rather than a result.",`,
  `source: "Adapted, attributed to Rafael Nadal",`,
  `hint: "perform",`,
  `flavor: "quotes",`,
  `author: "Rafael Nadal"`,
));

replaceTask("wf-mixed-27", T(
  `id: "wf-mixed-27",`,
  `stem: "Michael Jordan set goals that were reasonable and manageable — ones where genuine ___ (ACHIEVE) was possible if he worked hard enough.",`,
  `options: ["achievement", "achieve", "achieving"],`,
  `answer: "achievement",`,
  `explanation: "The suffix -ment turns the verb 'achieve' into the noun 'achievement'.",`,
  `fullExplanation: "Adding -ment to 'achieve' forms the noun 'achievement', meaning a thing accomplished through effort. The slot 'genuine ___' requires a noun head. 'Achieve' is a verb and cannot fill that slot. 'Achieving' is a gerund/participle and would change the meaning to an ongoing process rather than a concrete outcome.",`,
  `source: "Adapted, attributed to Michael Jordan",`,
  `hint: "achieve",`,
  `flavor: "quotes",`,
  `author: "Michael Jordan"`,
));

replaceTask("wf-mixed-28", T(
  `id: "wf-mixed-28",`,
  `stem: "The ___ (CREATE) of a new standard, as Bill Gates noted, takes something genuinely new that captures people's imagination.",`,
  `options: ["creation", "creative", "create"],`,
  `answer: "creation",`,
  `explanation: "The suffix -tion turns the verb 'create' into the noun 'creation'.",`,
  `fullExplanation: "Adding -tion to 'creat-' (with the silent -e dropped) forms the noun 'creation', meaning the act of bringing something into being. The slot after 'The' requires a noun head. 'Creative' is an adjective and cannot serve as a noun head here. 'Create' is a verb and cannot follow 'The' as a noun.",`,
  `source: "Adapted, attributed to Bill Gates",`,
  `hint: "create",`,
  `flavor: "quotes",`,
  `author: "Bill Gates"`,
));

replaceTask("wf-mixed-29", T(
  `id: "wf-mixed-29",`,
  `stem: "Cliches and stock phrases offer ___ (PROTECT) against reality, but Hannah Arendt warned that this comfort always carries a moral cost.",`,
  `options: ["protection", "protect", "protective"],`,
  `answer: "protection",`,
  `explanation: "The suffix -tion turns the verb 'protect' into the noun 'protection'.",`,
  `fullExplanation: "Adding -tion to 'protect' forms the noun 'protection', meaning the act of keeping something safe. The slot is the direct object of 'offer' and requires a noun. 'Protect' is a verb and cannot serve as the direct object of 'offer'. 'Protective' is an adjective and cannot serve as the direct object either.",`,
  `source: "Adapted, attributed to Hannah Arendt",`,
  `hint: "protect",`,
  `flavor: "quotes",`,
  `author: "Hannah Arendt"`,
));

replaceTask("wf-mixed-30", T(
  `id: "wf-mixed-30",`,
  `stem: "LeBron James dismissed those who predicted ___ (FAIL) for him: he chose to live and play on his own terms.",`,
  `options: ["failure", "failing", "failed"],`,
  `answer: "failure",`,
  `explanation: "The suffix -ure turns the verb 'fail' into the noun 'failure'.",`,
  `fullExplanation: "Adding -ure to 'fail' forms the noun 'failure', meaning lack of success. The slot is the direct object of 'predicted' and requires a noun head. 'Failing' is a gerund/participle and shifts the meaning to a specific shortcoming or an ongoing process. 'Failed' is a past tense verb / past participle and cannot serve as a noun object.",`,
  `source: "Adapted, attributed to LeBron James",`,
  `hint: "fail",`,
  `flavor: "quotes",`,
  `author: "LeBron James"`,
));

fs.writeFileSync(FILE, src, "utf8");
console.log(`\n— Category A applied: ${changes} tasks rewritten —`);

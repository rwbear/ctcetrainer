/* ═══════════════════════════════════════════════════════════════════════
 * v10 Canonical Topic & Subtopic Taxonomy
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Single source of truth for how Learn topics are organised in v10.
 * - 25 canonical topics
 * - ~75 canonical subtopics
 * - Maps every level-specific subtopic ID (CT/CE 58 + B1 26 + B2 30 + C1 20 = 134)
 *   to exactly one canonical subtopic.
 *
 * Stats and scholar achievements continue to track LEVEL-SPECIFIC IDs
 * (vt-prs-s, b1-prs-s, …). The canonical layer is purely a presentation /
 * navigation construct so the user sees one merged accordion when they
 * select multiple levels.
 *
 * Schema:
 *
 *   LEARN_TOPICS_CONFIG = {
 *     levels:      [ { id, name, displayShort } ]
 *     flavors:     [ { id, name } ]
 *     topics:      [ {                                  // canonical topic
 *       id:        canonicalTopicId
 *       name:      display name
 *       subtopics: [ {                                  // canonical subtopic
 *         id:      canonicalSubtopicId  ("cs-…")
 *         name:    display name
 *         levels:  { ctce: levelSubtopicId|null, b1: …, b2: …, c1: … }
 *       } ]
 *     } ]
 *   }
 *
 * The reverse-lookup map LEARN_LEVEL_TO_CANONICAL is computed below for fast
 * "given a levelSubtopicId, what canonical subtopic / topic does it belong to?"
 * ═══════════════════════════════════════════════════════════════════════ */

(function(){
  'use strict';

  var CONFIG = {
    levels: [
      { id: 'ctce', name: 'CT/CE',  displayShort: 'CT/CE' },
      { id: 'b1',   name: 'B1',     displayShort: 'B1'    },
      { id: 'b2',   name: 'B2',     displayShort: 'B2'    },
      { id: 'c1',   name: 'C1',     displayShort: 'C1'    }
    ],

    /* v10.3: Social Situations first; it is the pre-selected flavor for new
       users (see _LP4_DEFAULT_FLAVORS in index.html). */
    flavors: [
      { id: 'social',        name: 'Social Situations'    },
      { id: 'personalities', name: 'Famous Personalities' },
      { id: 'history',       name: 'Historical Facts'     },
      { id: 'science',       name: 'Science & Discovery'  },
      { id: 'quotes',        name: 'Quotes'                }
    ],

    topics: [
      // ── 1. Verb Tenses ─────────────────────────────────────────────────
      { id: 'verb-tenses', name: 'Verb Tenses', subtopics: [
        { id: 'cs-prs-s',         name: 'Present Simple',             levels: { ctce: 'vt-prs-s',   b1: 'b1-prs-s',     b2: null,                 c1: null } },
        { id: 'cs-prs-c',         name: 'Present Continuous',         levels: { ctce: 'vt-prs-c',   b1: 'b1-prs-c',     b2: null,                 c1: null } },
        { id: 'cs-pst-s',         name: 'Past Simple',                levels: { ctce: 'vt-pst-s',   b1: 'b1-pst-s',     b2: null,                 c1: null } },
        { id: 'cs-pst-c',         name: 'Past Continuous',            levels: { ctce: 'vt-pst-c',   b1: 'b1-pst-c',     b2: null,                 c1: null } },
        { id: 'cs-pp-s',          name: 'Present Perfect Simple',     levels: { ctce: 'vt-pp-s',    b1: 'b1-pp-s',      b2: null,                 c1: null } },
        { id: 'cs-pp-c',          name: 'Present Perfect Continuous', levels: { ctce: 'vt-pp-c',    b1: null,           b2: 'b2-pp-cont',         c1: null } },
        { id: 'cs-pst-perf-s',    name: 'Past Perfect Simple',        levels: { ctce: 'vt-pastperf',b1: null,           b2: 'b2-pst-perf-s',      c1: null } },
        { id: 'cs-pst-perf-c',    name: 'Past Perfect Continuous',    levels: { ctce: null,         b1: null,           b2: 'b2-pst-perf-c',      c1: null } },
        { id: 'cs-fut-will',      name: 'Future with will',           levels: { ctce: 'vt-fut-will',b1: 'b1-fut-will',  b2: null,                 c1: null } },
        { id: 'cs-fut-going',     name: 'Future with going to',       levels: { ctce: 'vt-fut-going',b1:'b1-fut-going', b2: null,                 c1: null } },
        { id: 'cs-fut-perf',      name: 'Future Perfect',             levels: { ctce: null,         b1: null,           b2: 'b2-fut-perf',        c1: null } },
        { id: 'cs-fut-cont',      name: 'Future Continuous',          levels: { ctce: null,         b1: null,           b2: 'b2-fut-cont',        c1: null } },
        { id: 'cs-narrative-mix', name: 'Narrative tenses (mixed)',   levels: { ctce: null,         b1: null,           b2: 'b2-mix-narrative',   c1: null } }
      ]},

      // ── 2. Passive ─────────────────────────────────────────────────────
      { id: 'passive', name: 'Passive', subtopics: [
        { id: 'cs-pass-prs',       name: 'Passive — present',                 levels: { ctce: 'vt-pass-prs', b1: null,            b2: null,                  c1: null                 } },
        { id: 'cs-pass-pst',       name: 'Passive — past',                    levels: { ctce: 'vt-pass-pst', b1: null,            b2: null,                  c1: null                 } },
        { id: 'cs-pass-mix',       name: 'Passive — mixed tenses',            levels: { ctce: 'vt-pass-mix', b1: 'b1-pass-basic', b2: null,                  c1: null                 } },
        { id: 'cs-pass-mod',       name: 'Passive with modals',               levels: { ctce: null,          b1: null,            b2: 'b2-pass-mod',         c1: null                 } },
        { id: 'cs-pass-perf',      name: 'Perfect passive',                   levels: { ctce: null,          b1: null,            b2: 'b2-pass-perf',        c1: null                 } },
        { id: 'cs-pass-reporting', name: 'Reporting-verb passive',            levels: { ctce: null,          b1: null,            b2: 'b2-pass-reporting',   c1: null                 } },
        { id: 'cs-pass-have-done', name: 'Causative passive (have sth done)', levels: { ctce: null,          b1: null,            b2: null,                  c1: 'c1-pass-have-done'  } },
        { id: 'cs-pass-rep-verb',  name: 'Advanced reporting passive',        levels: { ctce: null,          b1: null,            b2: null,                  c1: 'c1-pass-rep-verb'   } }
      ]},

      // ── 3. Modals ──────────────────────────────────────────────────────
      { id: 'modals', name: 'Modals', subtopics: [
        { id: 'cs-mod-can',        name: 'can / could',                  levels: { ctce: null,          b1: 'b1-mod-can',    b2: null,            c1: null                  } },
        { id: 'cs-mod-must',       name: 'must / have to',               levels: { ctce: null,          b1: 'b1-mod-must',   b2: null,            c1: null                  } },
        { id: 'cs-mod-should',     name: 'should / ought to',            levels: { ctce: null,          b1: 'b1-mod-should', b2: null,            c1: null                  } },
        { id: 'cs-mod-obl',        name: 'Modals — obligation',          levels: { ctce: 'mg-mod-obl',  b1: null,            b2: null,            c1: null                  } },
        { id: 'cs-mod-pos',        name: 'Modals — possibility / deduction', levels: { ctce: 'mg-mod-pos',  b1: null,        b2: 'b2-mod-deduct', c1: null                  } },
        { id: 'cs-mod-past',       name: 'Modals — past forms',          levels: { ctce: null,          b1: null,            b2: 'b2-mod-past',   c1: null                  } },
        { id: 'cs-mod-perfect',    name: 'Modal perfect',                levels: { ctce: null,          b1: null,            b2: 'b2-mod-perfect',c1: null                  } },
        { id: 'cs-mod-shades',     name: 'Modals — nuance & shades',     levels: { ctce: null,          b1: null,            b2: null,            c1: 'c1-mod-shades'      } },
        { id: 'cs-mod-historical', name: 'Historical / archaic modals',  levels: { ctce: null,          b1: null,            b2: null,            c1: 'c1-mod-historical'  } }
      ]},

      // ── 4. Conditionals ────────────────────────────────────────────────
      { id: 'conditionals', name: 'Conditionals', subtopics: [
        { id: 'cs-cond-0',          name: 'Zero conditional',          levels: { ctce: 'mg-cond-0', b1: 'b1-cond-0', b2: null,            c1: null                    } },
        { id: 'cs-cond-1',          name: 'First conditional',         levels: { ctce: 'mg-cond-1', b1: 'b1-cond-1', b2: null,            c1: null                    } },
        { id: 'cs-cond-2',          name: 'Second conditional',        levels: { ctce: 'mg-cond-2', b1: null,        b2: 'b2-cond-2',     c1: null                    } },
        { id: 'cs-cond-3',          name: 'Third conditional',         levels: { ctce: 'mg-cond-3', b1: null,        b2: 'b2-cond-3',     c1: null                    } },
        { id: 'cs-cond-mixed',      name: 'Mixed conditionals',        levels: { ctce: null,        b1: null,        b2: 'b2-cond-mixed', c1: null                    } },
        { id: 'cs-cond-implied',    name: 'Implied conditionals',      levels: { ctce: null,        b1: null,        b2: null,            c1: 'c1-cond-implied'      } },
        { id: 'cs-cond-without-if', name: 'Conditionals without if',   levels: { ctce: null,        b1: null,        b2: null,            c1: 'c1-cond-without-if'   } }
      ]},

      // ── 5. Gerund / Infinitive ─────────────────────────────────────────
      { id: 'gerund-infinitive', name: 'Gerund / Infinitive', subtopics: [
        { id: 'cs-ger-basic',       name: 'Gerund — basic',            levels: { ctce: null,        b1: 'b1-ger-basic', b2: null,                c1: null } },
        { id: 'cs-inf-basic',       name: 'Infinitive — basic',        levels: { ctce: null,        b1: 'b1-inf-basic', b2: null,                c1: null } },
        { id: 'cs-ger-inf-choice',  name: 'Gerund vs infinitive',      levels: { ctce: 'mg-ger-inf',b1: null,           b2: null,                c1: null } },
        { id: 'cs-ger-inf-meaning', name: 'Verbs that change meaning', levels: { ctce: null,        b1: null,           b2: 'b2-ger-inf-meaning',c1: null } }
      ]},

      // ── 6. Subordinate Clauses ─────────────────────────────────────────
      { id: 'subordinate-clauses', name: 'Subordinate Clauses', subtopics: [
        { id: 'cs-sub-general', name: 'Subordinate clauses — general',  levels: { ctce: 'mg-sub-gen', b1: 'b1-sub-gen',   b2: 'b2-sub-gen',     c1: 'c1-sub-gen'  } },
        { id: 'cs-rel-basic',   name: 'Relative clauses — basic',       levels: { ctce: 'mg-rel',     b1: 'b1-rel-basic', b2: null,             c1: null          } },
        { id: 'cs-rel-def',     name: 'Defining relative clauses',      levels: { ctce: null,         b1: null,           b2: 'b2-rel-def',     c1: null          } },
        { id: 'cs-rel-nondef',  name: 'Non-defining relative clauses',  levels: { ctce: null,         b1: null,           b2: 'b2-rel-nondef',  c1: null          } },
        { id: 'cs-rel-adv',     name: 'Relative clauses — advanced',    levels: { ctce: null,         b1: null,           b2: null,             c1: 'c1-rel-adv'  } }
      ]},

      // ── 7. Comparatives & Superlatives ─────────────────────────────────
      { id: 'comparatives', name: 'Comparatives & Superlatives', subtopics: [
        { id: 'cs-comp', name: 'Comparatives', levels: { ctce: 'mg-comp', b1: 'b1-comp-basic', b2: null, c1: null } },
        { id: 'cs-sup',  name: 'Superlatives', levels: { ctce: 'mg-sup',  b1: 'b1-sup-basic',  b2: null, c1: null } }
      ]},

      // ── 8. Quantifiers ─────────────────────────────────────────────────
      { id: 'quantifiers', name: 'Quantifiers', subtopics: [
        { id: 'cs-quant-some-any',  name: 'some / any',           levels: { ctce: null,         b1: 'b1-quant-some-any',  b2: null, c1: null } },
        { id: 'cs-quant-much-many', name: 'much / many',          levels: { ctce: null,         b1: 'b1-quant-much-many', b2: null, c1: null } },
        { id: 'cs-quant-mixed',     name: 'Quantifiers — mixed',  levels: { ctce: 'mg-quant',   b1: null,                 b2: null, c1: null } },
        { id: 'cs-quant-expr',      name: 'Quantifier expressions', levels: { ctce: 'owg-quant',b1: null,                 b2: null, c1: null } }
      ]},

      // ── 9. Articles ────────────────────────────────────────────────────
      { id: 'articles', name: 'Articles', subtopics: [
        { id: 'cs-art-indef',    name: 'Indefinite a/an',                levels: { ctce: 'art-indef',  b1: 'b1-art-indef', b2: null,                 c1: null } },
        { id: 'cs-art-def',      name: 'Definite the',                   levels: { ctce: 'art-def',    b1: 'b1-art-def',   b2: null,                 c1: null } },
        { id: 'cs-art-zero',     name: 'Zero article',                   levels: { ctce: 'art-zero',   b1: null,           b2: null,                 c1: null } },
        { id: 'cs-art-mixed',    name: 'Two-blank article choice',       levels: { ctce: 'art-mixed',  b1: null,           b2: null,                 c1: null } },
        { id: 'cs-art-abstract', name: 'Articles with abstract nouns',   levels: { ctce: null,         b1: null,           b2: 'b2-art-abstract',    c1: null } },
        { id: 'cs-art-unique',   name: 'Articles with unique referents', levels: { ctce: null,         b1: null,           b2: 'b2-art-unique',      c1: null } }
      ]},

      // ── 10. Prepositions & Particles ───────────────────────────────────
      { id: 'prepositions', name: 'Prepositions & Particles', subtopics: [
        { id: 'cs-prep-time',  name: 'Time prepositions',          levels: { ctce: 'prep-time',  b1: 'b1-prep-time',         b2: null, c1: null } },
        { id: 'cs-prep-place', name: 'Place prepositions',         levels: { ctce: 'prep-place', b1: 'b1-prep-place',        b2: null, c1: null } },
        { id: 'cs-prep-dir',   name: 'Direction prepositions',     levels: { ctce: 'prep-dir',   b1: null,                   b2: null, c1: null } },
        { id: 'cs-prep-verb',  name: 'Verb + preposition',         levels: { ctce: 'prep-verb',  b1: 'b1-prep-verb-basic',   b2: null, c1: null } },
        { id: 'cs-prep-adj',   name: 'Adjective + preposition',    levels: { ctce: 'prep-adj',   b1: null,                   b2: null, c1: null } }
      ]},

      // ── 11. Word Formation ─────────────────────────────────────────────
      { id: 'word-formation', name: 'Word Formation', subtopics: [
        { id: 'cs-wf-noun',   name: 'Noun suffixes',            levels: { ctce: 'wf-noun',  b1: null, b2: null,                  c1: null } },
        { id: 'cs-wf-adj',    name: 'Adjective suffixes',       levels: { ctce: 'wf-adj',   b1: null, b2: null,                  c1: null } },
        { id: 'cs-wf-adv',    name: 'Adverb -ly',               levels: { ctce: 'wf-adv',   b1: null, b2: null,                  c1: null } },
        { id: 'cs-wf-neg',    name: 'Negative prefixes',        levels: { ctce: 'wf-neg',   b1: null, b2: 'b2-wf-prefix',        c1: null } },
        { id: 'cs-wf-mixed',  name: 'Mixed word formation',     levels: { ctce: 'wf-mixed', b1: null, b2: 'b2-wf-suffix-adv',    c1: null } }
      ]},

      // ── 12. Extra Word Removal (CT/CE only) ───────────────────────────
      { id: 'extra-word', name: 'Extra Word Removal', subtopics: [
        { id: 'cs-err-aux',  name: 'Redundant auxiliaries',  levels: { ctce: 'err-aux',  b1: null, b2: null, c1: null } },
        { id: 'cs-err-prep', name: 'Redundant prepositions', levels: { ctce: 'err-prep', b1: null, b2: null, c1: null } },
        { id: 'cs-err-art',  name: 'Redundant articles',     levels: { ctce: 'err-art',  b1: null, b2: null, c1: null } },
        { id: 'cs-err-pron', name: 'Redundant pronouns',     levels: { ctce: 'err-pron', b1: null, b2: null, c1: null } },
        { id: 'cs-err-int',  name: 'Redundant intensifiers', levels: { ctce: 'err-int',  b1: null, b2: null, c1: null } }
      ]},

      // ── 13. One-Word Gap (CT/CE only) ─────────────────────────────────
      { id: 'one-word-gap', name: 'One-Word Gap', subtopics: [
        { id: 'cs-owg-fixed', name: 'Fixed phrases & collocations', levels: { ctce: 'owg-fixed', b1: null, b2: null, c1: null } },
        { id: 'cs-owg-conn',  name: 'Discourse connectors',         levels: { ctce: 'owg-conn',  b1: null, b2: null, c1: null } }
      ]},

      // ── 14. Word for Two Sentences (CT/CE only) ───────────────────────
      { id: 'word-two-sentences', name: 'Word for Two Sentences', subtopics: [
        { id: 'cs-w2s-poly',     name: 'Polysemous words',        levels: { ctce: 'w2s-poly',     b1: null, b2: null, c1: null } },
        { id: 'cs-w2s-particle', name: 'Particle-noun homonyms',  levels: { ctce: 'w2s-particle', b1: null, b2: null, c1: null } }
      ]},

      // ── 15. Error Identification (CT/CE only) ─────────────────────────
      { id: 'error-identification', name: 'Error Identification', subtopics: [
        { id: 'cs-ei-verb',  name: 'Wrong verb form',         levels: { ctce: 'ei-verb', b1: null, b2: null, c1: null } },
        { id: 'cs-ei-prep',  name: 'Wrong preposition',       levels: { ctce: 'ei-prep', b1: null, b2: null, c1: null } },
        { id: 'cs-ei-extra', name: 'Redundant word',          levels: { ctce: 'ei-extra',b1: null, b2: null, c1: null } },
        { id: 'cs-ei-art',   name: 'Wrong article',           levels: { ctce: 'ei-art',  b1: null, b2: null, c1: null } },
        { id: 'cs-ei-sva',   name: 'Subject-verb agreement',  levels: { ctce: 'ei-sva',  b1: null, b2: null, c1: null } }
      ]},

      // ── 16. Vocabulary in Context ─────────────────────────────────────
      { id: 'vocab-context', name: 'Vocabulary in Context', subtopics: [
        { id: 'cs-voc-syn',  name: 'Synonym selection',     levels: { ctce: 'voc-syn',  b1: null, b2: null, c1: null                    } },
        { id: 'cs-voc-coll', name: 'Collocation selection', levels: { ctce: 'voc-coll', b1: null, b2: null, c1: 'c1-collocation-adv'    } },
        { id: 'cs-voc-reg',  name: 'Register selection',    levels: { ctce: 'voc-reg',  b1: null, b2: null, c1: 'c1-register-formal'    } }
      ]},

      // ── 17. Dialogue Skills (CT/CE only) ──────────────────────────────
      { id: 'dialogue-skills', name: 'Dialogue Skills', subtopics: [
        { id: 'cs-dia-agree', name: 'Agreement / disagreement', levels: { ctce: 'dia-agree', b1: null, b2: null, c1: null } },
        { id: 'cs-dia-sugg',  name: 'Suggestions',              levels: { ctce: 'dia-sugg',  b1: null, b2: null, c1: null } },
        { id: 'cs-dia-infer', name: 'Speaker intent inference', levels: { ctce: 'dia-infer', b1: null, b2: null, c1: null } }
      ]},

      // ── 18. Question Forms (B1 only) ──────────────────────────────────
      { id: 'question-forms', name: 'Question Forms', subtopics: [
        { id: 'cs-qtags',  name: 'Question tags',  levels: { ctce: null, b1: 'b1-qtags',  b2: null, c1: null } },
        { id: 'cs-qwords', name: 'Question words', levels: { ctce: null, b1: 'b1-qwords', b2: null, c1: null } }
      ]},

      // ── 19. Reported Speech (B2 only) ─────────────────────────────────
      { id: 'reported-speech', name: 'Reported Speech', subtopics: [
        { id: 'cs-rep-stmt', name: 'Reported statements', levels: { ctce: null, b1: null, b2: 'b2-rep-stmt', c1: null } },
        { id: 'cs-rep-ques', name: 'Reported questions',  levels: { ctce: null, b1: null, b2: 'b2-rep-ques', c1: null } },
        { id: 'cs-rep-cmd',  name: 'Reported commands',   levels: { ctce: null, b1: null, b2: 'b2-rep-cmd',  c1: null } }
      ]},

      // ── 20. Phrasal Verbs (B2 only) ───────────────────────────────────
      { id: 'phrasal-verbs', name: 'Phrasal Verbs', subtopics: [
        { id: 'cs-pv-sep',   name: 'Separable phrasal verbs',   levels: { ctce: null, b1: null, b2: 'b2-pv-sep',   c1: null } },
        { id: 'cs-pv-insep', name: 'Inseparable phrasal verbs', levels: { ctce: null, b1: null, b2: 'b2-pv-insep', c1: null } },
        { id: 'cs-pv-3word', name: 'Three-word phrasal verbs',  levels: { ctce: null, b1: null, b2: 'b2-pv-3word', c1: null } }
      ]},

      // ── 21. Inversion & Cleft ─────────────────────────────────────────
      { id: 'inversion-cleft', name: 'Inversion & Cleft', subtopics: [
        { id: 'cs-inv-neg',   name: 'Negative inversion',    levels: { ctce: null, b1: null, b2: 'b2-inv-basic', c1: 'c1-inv-neg'    } },
        { id: 'cs-inv-cond',  name: 'Conditional inversion', levels: { ctce: null, b1: null, b2: null,           c1: 'c1-inv-cond'   } },
        { id: 'cs-cleft-it',  name: 'It-cleft',              levels: { ctce: null, b1: null, b2: null,           c1: 'c1-cleft-it'   } },
        { id: 'cs-cleft-what',name: 'What-cleft',            levels: { ctce: null, b1: null, b2: null,           c1: 'c1-cleft-what' } }
      ]},

      // ── 22. Subjunctive & Unreal (C1 only) ────────────────────────────
      { id: 'subjunctive-unreal', name: 'Subjunctive & Unreal', subtopics: [
        { id: 'cs-subj-basic', name: 'Subjunctive — basic', levels: { ctce: null, b1: null, b2: null, c1: 'c1-subj-basic' } },
        { id: 'cs-subj-wish',  name: 'Wish & if only',      levels: { ctce: null, b1: null, b2: null, c1: 'c1-subj-wish'  } }
      ]},

      // ── 23. Participle Clauses ────────────────────────────────────────
      { id: 'participle-clauses', name: 'Participle Clauses', subtopics: [
        { id: 'cs-part-clause-pres', name: 'Present participle clauses', levels: { ctce: null, b1: null, b2: 'b2-part-clause-basic', c1: 'c1-part-clause-pres' } },
        { id: 'cs-part-clause-perf', name: 'Perfect participle clauses', levels: { ctce: null, b1: null, b2: null,                   c1: 'c1-part-clause-perf' } }
      ]},

      // ── 24. Discourse & Cohesion (C1 only) ────────────────────────────
      { id: 'discourse-cohesion', name: 'Discourse & Cohesion', subtopics: [
        { id: 'cs-disc-markers', name: 'Discourse markers', levels: { ctce: null, b1: null, b2: null, c1: 'c1-disc-markers' } },
        { id: 'cs-ellipsis',     name: 'Ellipsis',          levels: { ctce: null, b1: null, b2: null, c1: 'c1-ellipsis'     } },
        { id: 'cs-substitution', name: 'Substitution',      levels: { ctce: null, b1: null, b2: null, c1: 'c1-substitution' } }
      ]},

      // ── 25. Nominalization (C1 only) ──────────────────────────────────
      { id: 'nominalization', name: 'Nominalization', subtopics: [
        { id: 'cs-nominal', name: 'Nominalization', levels: { ctce: null, b1: null, b2: null, c1: 'c1-nominal' } }
      ]}
    ]
  };

  // ── Build reverse lookup maps ─────────────────────────────────────────
  // levelSubtopicId  →  { canonicalTopicId, canonicalSubtopicId, level, displayName }
  var LEVEL_TO_CANONICAL = Object.create(null);
  // canonicalSubtopicId → { topic, subtopic }
  var CANONICAL_TO_TOPIC = Object.create(null);

  CONFIG.topics.forEach(function(topic){
    topic.subtopics.forEach(function(sub){
      CANONICAL_TO_TOPIC[sub.id] = { topic: topic, subtopic: sub };
      Object.keys(sub.levels).forEach(function(levelId){
        var lvlSubId = sub.levels[levelId];
        if (lvlSubId){
          if (LEVEL_TO_CANONICAL[lvlSubId]){
            console.warn('[v10 taxonomy] duplicate levelSubtopicId', lvlSubId,
              '— already mapped to', LEVEL_TO_CANONICAL[lvlSubId].canonicalSubtopicId,
              'tried to remap to', sub.id);
          }
          LEVEL_TO_CANONICAL[lvlSubId] = {
            canonicalTopicId:    topic.id,
            canonicalSubtopicId: sub.id,
            level:               levelId,
            displayName:         sub.name
          };
        }
      });
    });
  });

  // Counts for the foundation OK log
  var CANONICAL_SUB_COUNT = 0;
  var BY_LEVEL_COUNT = { ctce: 0, b1: 0, b2: 0, c1: 0 };
  CONFIG.topics.forEach(function(t){
    CANONICAL_SUB_COUNT += t.subtopics.length;
    t.subtopics.forEach(function(s){
      Object.keys(s.levels).forEach(function(lv){
        if (s.levels[lv]) BY_LEVEL_COUNT[lv]++;
      });
    });
  });

  // ── Helper functions ──────────────────────────────────────────────────

  /**
   * Given an array of active levelIds, return the list of canonical topics
   * that have at least one canonical subtopic with a non-null mapping for
   * one of the active levels.
   * Each returned topic includes the filtered subtopics that should be
   * visible (still ordered as in the master list).
   */
  function topicsForLevels(activeLevels){
    var levelSet = {};
    activeLevels.forEach(function(l){ levelSet[l] = true; });
    var out = [];
    CONFIG.topics.forEach(function(topic){
      var visibleSubs = topic.subtopics.filter(function(sub){
        return Object.keys(sub.levels).some(function(lv){
          return levelSet[lv] && sub.levels[lv];
        });
      });
      if (visibleSubs.length){
        out.push({
          id:        topic.id,
          name:      topic.name,
          subtopics: visibleSubs
        });
      }
    });
    return out;
  }

  /**
   * Return the active level chips for a canonical subtopic, given currently
   * active level IDs.  E.g. ['CT/CE','B1'] for "Past Simple" with all four
   * levels selected (but only CT/CE and B1 contribute to that subtopic).
   */
  function activeLevelChips(canonicalSubId, activeLevels){
    var sub = CANONICAL_TO_TOPIC[canonicalSubId];
    if (!sub) return [];
    var chips = [];
    var displayShortById = {};
    CONFIG.levels.forEach(function(l){ displayShortById[l.id] = l.displayShort; });
    activeLevels.forEach(function(lv){
      if (sub.subtopic.levels[lv]) chips.push(displayShortById[lv]);
    });
    return chips;
  }

  /**
   * Return all level-specific subtopic IDs that contribute to a given
   * canonical subtopic across the active levels.  Used by the session
   * shuffler to assemble the task pool.
   */
  function levelSubtopicIdsFor(canonicalSubId, activeLevels){
    var sub = CANONICAL_TO_TOPIC[canonicalSubId];
    if (!sub) return [];
    var ids = [];
    activeLevels.forEach(function(lv){
      var id = sub.subtopic.levels[lv];
      if (id) ids.push(id);
    });
    return ids;
  }

  // ── Expose ────────────────────────────────────────────────────────────
  // v8: Mode-support map (which subtopics allow MCQ / Type-in)
  // Default: both modes. Override below. Keys are level-specific subtopic IDs.
  var SUBTOPIC_MODES = {
    // Extra-word removal: MCQ would give the answer away among 4 options.
    'err-aux':  ['typein'],
    'err-prep': ['typein'],
    'err-art':  ['typein'],
    'err-pron': ['typein'],
    'err-int':  ['typein']
  };
  function modesForSubtopic(levelSubId){
    return SUBTOPIC_MODES[levelSubId] || ['mcq','typein'];
  }

  window.LEARN_SUBTOPIC_MODES = SUBTOPIC_MODES;
  window.learnModesForSubtopic = modesForSubtopic;
  window.LEARN_TOPICS_CONFIG = CONFIG;
  window.LEARN_LEVEL_TO_CANONICAL = LEVEL_TO_CANONICAL;
  window.LEARN_CANONICAL_TO_TOPIC = CANONICAL_TO_TOPIC;
  window.LEARN_TAXONOMY_HELPERS = {
    topicsForLevels:     topicsForLevels,
    activeLevelChips:    activeLevelChips,
    levelSubtopicIdsFor: levelSubtopicIdsFor
  };
  window.LEARN_TAXONOMY_COUNTS = {
    canonicalTopics:    CONFIG.topics.length,
    canonicalSubtopics: CANONICAL_SUB_COUNT,
    byLevel:            BY_LEVEL_COUNT,
    totalLevelSubtopics: BY_LEVEL_COUNT.ctce + BY_LEVEL_COUNT.b1 + BY_LEVEL_COUNT.b2 + BY_LEVEL_COUNT.c1
  };
})();

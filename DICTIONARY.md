# Accepted vocabulary

The acceptance list combines the original 828 hand-selected words with every four-letter ASCII alphabetic entry in the ENABLE word list, deduplicated and uppercased. TYEE remains a special destination outside that list. Total: 3,903 words.

Source: https://github.com/dolph/dictionary/blob/master/enable1.txt
Downloaded October 20, 2026 from https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt

ENABLE is the Enhanced North American Benchmark Lexicon, a public-domain word-game list. This app ships its four-letter subset locally; gameplay needs no external dictionary requests. The list includes inflected and uncommon words and is not a set of definitions or an exhaustive list of English words.

Starting words remain curated separately from accepted guesses. The original 51-entry daily schedule is frozen in `dailyStarts` so expanding vocabulary does not change the starting word assigned to a date. Shortest paths are recalculated against the expanded vocabulary.

Revisiting a word is legal if exactly one letter changes from the current word. It adds one move like any other accepted guess. Submitting the current word unchanged still fails the one-letter-change rule.

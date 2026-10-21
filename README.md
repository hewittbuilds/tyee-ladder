# TYEE Word Ladder

A dependency-free, local-first HTML/CSS/JavaScript game for Tyee High School. Open `index.html` directly to play, or run `npm start` and visit http://127.0.0.1:4173. Run `npm test` with Node.js 18 or later. Deploy the contents of this folder to any static host (including GitHub Pages); no build is needed.

## Product decisions

- Transform a four-letter starting word into TYEE, one changed position per move. TYEE is the special destination, outside the vocabulary list.
- Daily puzzles use the Pacific calendar date, including daylight saving. A stable date index selects from the original daily-start catalog (initially 4–5 moves; expanded vocabulary may shorten solutions). The finite catalog repeats; keep its ordering stable to avoid changing existing dates.
- Practice has unlimited rounds from a finite catalog; starts can repeat across rounds.
- Invalid guesses cost no moves. Repeated words are allowed and each adds a move; undo removes a move. Reset starts the current puzzle again. Both remain available after winning.
- Progress for each daily date and the latest practice puzzle is saved locally. No accounts, analytics, external fonts, services, or network calls. Storage failure falls back to in-memory play.
- Shortest move count and an optional BFS solution appear after success. Sharing copies a spoiler-free result.
- Charcoal dark surfaces, school-red actions, and warm gold accents follow the requested Tyee red/gold/black identity. Soft off-white text reduces glare. The header uses the supplied Tyee shield logo (assets/tyee-logo.png). Palette values are an interpretation, not official brand specifications.

## Dictionary and puzzle review

`dictionary.js` combines all four-letter alphabetic entries from ENABLE with the original classroom vocabulary. Inflections are accepted when listed. See DICTIONARY.md for provenance. THEE and TYKE are intentional, explained bridge words. The broader acceptance list includes uncommon words; puzzle starts remain curated. Add words and starting candidates there; run tests after changes. Vocabulary suitability and perceived difficulty still need student/teacher playtesting.

`engine.js` performs breadth-first search outward from TYEE to prove connectivity and calculate shortest paths. `app.js` handles events, rendering and local storage; `style.css` handles appearance. Tests check every candidate start, valid shortest solutions, input rules, restoration and Pacific reset boundaries. Actual district Chromebook and assistive-technology acceptance testing remains a classroom task.

## Classroom investigations

1. Change CSS colors, spacing and tiles without altering gameplay.
2. Follow a submission from the HTML form to JavaScript validation; add a word to the dictionary and inspect new connections.
3. Trace the BFS queue from TYEE and explain why its first visit finds the shortest path.



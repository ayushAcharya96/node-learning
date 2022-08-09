const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Ayush.');

fs.appendFileSync('notes.txt', 'And I am awesome');
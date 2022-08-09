# js-strong-password
Strong Random Password Generator
 	- Include Lowercase Letters
	- Include UpperCase Letters 
	- Include Numbers
	- Include Symbols 
	- Exclude Similar Characters (i, l, 1, L, o, 0, O)
	- Exclude Ambigous Charcaters ( { } [ ] ( ) / \ ' " ` ~ , ; : . < > )
	- don't begin with a number or symbol
 
 Functions input: 
 strongPassword(length, [type array], [options array])
 length - betwen 8 - 128
 type - letters, bigLetters, numbers, symbols
 options - exclude-similar, exclude-ambigous, first-letter

 example:
 generate(8, ["symbols", "letters", "bigLetters", "numbers"],["exclude-ambigous","first-letter"]);

 Function output: String

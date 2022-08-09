/*
 * Strong Random Password generator
 * Functions: 
 * 	- Include Lowercase Letters
 *	- Include UpperCase Letters 
 *	- Include Numbers
 *	- Include Symbols 
 *	- Exclude Similar Characters (i, l, 1, L, o, 0, O)
 *	- Exclude Ambigous Charcaters ( { } [ ] ( ) / \ ' " ` ~ , ; : . < > )
 *	---don't begin with a number or symbol
 *	---don't use the same character more than once  - in version 2
 *	---don't use sequential characters, e.g. abc, 789 - in version 2
 
 function be like: 
 strongPassword(length, [type array], options)
 length - betwen 8 - 128
 type - letters, bigLetters, numbers, symbols
 options - exclude-similar, exclude-ambigous, first-letter
 
*/

// shuffle Text
const shuffleText = (someText => {
	const textArray = someText.split("");
	for(let i= textArray.length-1; i >= 0; i-- ){
		const j = Math.floor(Math.random() * (i+1));
		[ textArray[i], textArray[j] ] = [ textArray[j], textArray[i] ];
	}
	return textArray.join("");
});

//generate password
const generate = ( (maxSize, type, options) => {
	var finalStr = "";
	var allChars = "";
	
	// Test if size is more then or grather then 
	maxSize = maxSize <= 8 ? 8 : maxSize;
	maxSize = maxSize >= 128 ? 128 : maxSize;
	
	// Set charcaters
	let numbers = shuffleText('1230456789');
	let letters = options.includes('exclude-similar') ? shuffleText('abcdefghjlmnpqrstuvwxyz') : shuffleText('abcdefghijklmnopqrstuvwxyz') ;
	let symbols =  options.includes('exclude-ambigous') ? shuffleText('!@#$%^&*_+=-?') : shuffleText('!@#$%^&*()_+=-{[}]:;<,>./\?');
	
	// decide types of characters
	allChars += type.includes("letters") ? shuffleText(letters) : "";
	allChars += type.includes("bigLetters") ? shuffleText(letters.toUpperCase()) : "";
	allChars += type.includes("numbers") ? shuffleText(numbers) : "";
	allChars += type.includes("symbols") ? shuffleText(symbols) : "";
	
	// Insert chars in password
	for(let i=1; i<=maxSize; i++){
		finalStr += shuffleText(allChars).charAt(Math.floor(Math.random() * allChars.length));
	}
	
	// Shuffle password
	finalStr = shuffleText(finalStr);
	
	// put a letter in front of password
	if(options.includes("first-letter")){
		var firstLet = shuffleText( letters + letters.toUpperCase() ).charAt(1);
		finalStr = finalStr.replace(finalStr.charAt(0), firstLet);
	}
	
	return finalStr;
});

//generate(8, ["symbols", "letters", "bigLetters", "numbers"],["exclude-ambigous"]);

for(let i=1; i<=8; i++){
	var pass = generate(8, ["symbols", "letters", "bigLetters", "numbers"],["exclude-ambigous","first-letter"]);
	console.log(pass.length);
}




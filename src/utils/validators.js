export const mustBeTwoWords = (value) => {
	let words = value.split(" ").filter((w) => w.length > 0);
	return words.length === 2;
};

export const phoneCheck = (value) => {
	const result = value.match(
		/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g
	);
	// Throws error for null
	return result ? result : false;
};
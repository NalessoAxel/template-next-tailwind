/**
 * A function that wraps the given function in a debounce behavior.
 *
 * @param {function} fn - The function to be debounced.
 * @param {number} ms - The number of milliseconds to debounce the function.
 * @return {function} - A debounced version of the input function.
 */
export default function debounce(fn, ms = 300) {
	
	let timeout;
	
	return (...args) => {
		clearTimeout(timeout); 
		timeout = setTimeout(() => fn(...args), ms); 
	};
}
module.exports = function reverse (n) {
	n = String(n);
	if (n[0] === '-') n = n.slice(1);
	if (n[-1] === '0') n = n.slice(0, -1);
	return Number(n.split('').reverse().join(''));
}
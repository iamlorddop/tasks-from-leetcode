const twoSum = require('./index');

test('Nums [2, 7, 11, 15] with target 9 equal to be [0, 1]', () => {
	expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test('Nums [3, 2, 4] with target 6 equal to be [1, 2]', () => {
	expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test('Nums [3, 3] with target 6 equal to be [0, 1]', () => {
	expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});

test('Nums [1] with target 2 equal to be "No two sum solution"', () => {
	expect(() => {
		twoSum([1], 2)
	}).toThrow();
});
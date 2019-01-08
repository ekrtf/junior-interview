'use strict';

const assert = require('assert');

/*
Identify cross-over indices for two equal-length lists of prices.

Parameters:
	pricesOne, pricesTwo: lists of prices (ordered by time)

Returns:
	list of crossover points

Each item in the returned list is a list [timeIndex, higherIndex], where:
	- timeIndex is the crossover time index (when it happens)
	- higherIndex indicates which price becomes higher at timeIndex: either 1 for first list or 2 for second list

There are no crossovers before both price lists have values that are not null.
You can start making comparisons from the point at which both have number values.
*/

function crossOvers(pricesOne, pricesTwo) {
	// TODO
}


// test case A
const p1a = [1, 2, 4, 5];
const p2a = [0, 2.5, 5, 3];
assert.deepEqual(crossOvers(p1a, p2a), [[1, 2], [3, 1]]);

// test case B
const p1b = [null, 2.5, 3.5, 4.5, 4.5, 3.5, 2.5, 1.5, 3.5, 3.5];
const p2b = [null, null, 3.0, 4.0, 4.333333333333333, 4.0, 3.0, 2.0, 3.0, 2.6666666666666665];
assert.deepEqual(crossOvers(p1b, p2b), [[5, 2], [8, 1]]);

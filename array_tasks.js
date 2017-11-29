var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = [];
		arr1.forEach(function(item){ newArray.push(item); });
		arr2.forEach(function(item){ newArray.push(item); });
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		// slice into two subarrays and push the item onto the first, then concatenate
		beforeArray = arr.slice(0, index);
		afterArray = arr.slice(index, arr.length);
		beforeArray.push(itemToAdd);
		return beforeArray.concat(afterArray);
	},

	square: function (arr) {
		return arr.map(item => item ** 2);
	},

	sum: function (arr) {
		return arr.reduce(function(a, b){
			// a is the accumulator, b is current item in array
			return a + b;
			// 0 is initial value
		}, 0);
	},

	findDuplicates: function (arr) {
		var newArray = [];

		for (var i = 0; i < arr.length; i++){
			var currentItem = arr[i];
			var duplicate = arr.lastIndexOf(currentItem) != i ? true : false;
			if (duplicate && !newArray.includes(currentItem)){
				newArray.push(currentItem);
			}
		}
		return newArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(item => item !== valueToRemove);
	},

	findIndexesOf: function (arr, itemToFind) {
		var newArray = [];
		for (var i = 0; i < arr.length; i++){
			if (arr[i] === itemToFind){ newArray.push(i); }
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var even = arr.filter(item => item % 2 === 0);
		return this.sum(this.square(even));
	}

}

module.exports = arrayTasks

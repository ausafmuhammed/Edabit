function mirror(arr) {
    let res = arr.slice(0,arr.length-1).reverse();
	return  arr.concat(res);
}
console.log(mirror([0, 2, 4, 6]));
console.log(mirror([1, 2, 3, 4, 5]));
console.log(mirror([3, 5, 6, 7, 8]));
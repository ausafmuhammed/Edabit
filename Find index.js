function findIndex(arr, str) {
	for (let i = 0; i < arr.length; i++){
        if(arr[i] == str){
            return arr.indexOf(str);
        }
    }
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
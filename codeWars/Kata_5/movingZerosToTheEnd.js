function moveZeros(arr) {
    const allZeros = arr.filter(zero => zero === 0);
    const cutZeros = arr.filter(zero => zero !== 0 || typeof(zero) === 'boolean');
    return cutZeros.concat(allZeros);
}

const result = moveZeros([1, {}, 0, false, 2,0,1,0,1, [] , null, 0,3,+0,1, 'a']); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
console.log(result);

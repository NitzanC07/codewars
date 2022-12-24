const canConstruct = function(ransomNote, magazine) {
    const arrMagazine = magazine.split('');
    const arrRansomNote = ransomNote.split('');
    for(let i = 0; i < arrRansomNote.length; i++) {
        const countRansomNote = arrRansomNote.filter(x => x === arrRansomNote[i]).length
        const countMagazine = arrMagazine.filter(x => x === arrRansomNote[i]).length
        if (countMagazine < countRansomNote) {
            return false;
        }
    }
    return true;    
};

console.log(canConstruct("baa", "abcb"));

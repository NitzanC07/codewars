/** 
 * 
 * Emotional Sort ( ︶︿︶)
 * You'll have a function called "sortEmotions" that will return an array of emotions sorted. 
 * It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:
 * 
 * :D -> Super Happy
 * :) -> Happy
 * :| -> Normal
 * :( -> Sad
 * T_T -> Super Sad
 * 
 * Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]
 * And the second parameter is called "order", if this parameter is true then the order of the 
 * emotions will be descending (from Super Happy to Super Sad) if it's false then it will be
 * ascending (from Super Sad to Super Happy)
 * 
 * Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]
 * Super Happy -> Happy -> Normal -> Sad -> Super Sad
 * If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]
 * Super Sad -> Sad -> Normal -> Happy -> Super Happy
 * 
 * Example:
 * arr = [':D', ':|', ':)', ':(', ':D']
 * sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
 * sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
 */


function sortEmotions(arr, order){
    const emotionsOrder = [":D", ":)", ":|", ":(", "T_T" ]
    let sortEmotions = [];

    if (order) {
        for (let i = 0; i < emotionsOrder.length; i++) {
            sortEmotions = [...sortEmotions, arr.filter(emo => emo === emotionsOrder[i])];
        }
    } else {
        for (let i = emotionsOrder.length-1; i >= 0 ; i--) {
            sortEmotions = [...sortEmotions, arr.filter(emo => emo === emotionsOrder[i])];
        }
    }

    return sortEmotions.flat();
}

const result = sortEmotions([':D', ':|', ':)', ':(', ':D'], false);
console.log(result);

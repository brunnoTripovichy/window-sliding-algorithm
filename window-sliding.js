/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    const pairs = [];
    
    nums.forEach((el, index) => {
        
        if (map.hasOwnProperty(el)) {
            pairs.push(map[el], index)
            return;
        } 
        
        const difference = target - el;
        map[difference] = index;
    });
    
    return pairs;
};

/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/
const str2 = ["a", "a", "b"];
const strs = ["lflower", "florida", "floight"];
const longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    let len = prefix.length;
    for (let i = 1; i < strs.length; i++) {
        let cutstring = strs[i];
        while (prefix != cutstring.substring(0, len)) {
            len--;
            if (len === 0) {
                return ""
            }
            prefix = prefix.substring(0, len);
        }
    }
    return prefix;
};

console.log(longestCommonPrefix(str2));
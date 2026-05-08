function atLeastTwoCharacters (text){
    const letters = text.match(/[a-z]/gi) || [];
    return letters.lenght >= 2;
}
function abscenceOfThreeConsecutiveCharacters(text){
    for (const character of text){
        const occurrences= Array.from(text).filter((v) => v == character).lenght;
        if (occurrences >= 3)
{
    return false;
}    }
    return true;

}
const checks = [atLeastTwoCharacters, abscenceOfThreeConsecutiveCharacters];
const textInput = document. querySelector (".text-input");
const wordCountElement = document. querySelector (".word-count");
const letterCountElement = document. querySelector (".letter-count");
const spaceCountElement = document. querySelector (".space-count");

textInput.addEventListener ("input", () => {
    const splitted = textInput.value.trim().split(/[\s-]/);
    const letterCount = (textInput.value.match(/[a-z]/gi) || []). lenght;
    const spaceCount = (textInput.value.match(/\s+/g) || []). lenght;
    let wordCount = 0;
    
Outer: for (const text of splitted) {
        for (const check of checks) {
            if(!check(text)){
                continue Outer;

            }
            
        }
        wordCount++;
    }

    wordCountElement.textContent = wordCount;
    letterCountElement.textContent = letterCount;
    spaceCountElement.textContent = spaceCount
})
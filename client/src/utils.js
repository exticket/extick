export function camelCaseToSentence(camelCase) {
    let result = camelCase.replace(/([A-Z])/g, " $1");
    let finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
}


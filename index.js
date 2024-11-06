const JSONbig = require('json-bigint')({ storeAsString: true });
const BigNumber = require('bignumber.js');

function parseJson(jsonString) {
    try {
        return JSONbig.parse(jsonString);
    } catch (error) {
        console.error("Failed to parse JSON:", error);
        throw error;
    }
}

const jsonString = `
    {
        "largeInteger": 123456789012345678901234567890,
        "largeFloat": 1.23456789012345678901234567890,
        "list": [1, 2, "three"],
        "nestedObject": {"key": "value"}
    }
`;

try {
    const result = parseJson(jsonString);

    // Convert large integer from string to BigInt
    const largeInteger = BigInt(result.largeInteger);

    // Convert large float from string to BigNumber
    const largeFloat = new BigNumber(result.largeFloat);

    console.log('Parsed Result:', result);
    console.log('Large Integer as BigInt:', largeInteger);
    console.log('Large Float as BigNumber:', largeFloat.toFixed(30)); // Displaying full precision
} catch (error) {
    console.error("Error parsing JSON:", error);
}

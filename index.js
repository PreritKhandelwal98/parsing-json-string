const JSONbig = require('json-bigint')({ storeAsString: true });
const BigNumber = require('bignumber.js');

function isValidJson(jsonString) {
    try {
        JSONbig.parse(jsonString);
        return true;
    } catch (error) {
        return false;
    }
}

function parseJson(jsonString) {
    if (!isValidJson(jsonString)) {
        console.error("Invalid JSON string provided.");
        throw new Error("Invalid JSON format");
    }

    try {
        return JSONbig.parse(jsonString);
    } catch (error) {
        console.error("Failed to parse JSON:", error);
        throw error;
    }
}

// Example usage with correct key names
const jsonString = `{
    "transactionId": "abc123def456",
    "timestamp": "2024-11-06T10:30:00Z",
    "sender": "wallet12345",
    "receiver": "wallet67890",
    "amount": 123456789012345678901234567890.123456789012345678901234567890,
    "transactionFee": 0.00000001234567890123456789,
    "status": "completed",
    "details": {
        "network": "Bitcoin",
        "confirmationCount": 10
    }
}`;

try {
    const result = parseJson(jsonString);

    // Convert amount (large float) from string to BigNumber
    const amount = new BigNumber(result.amount);

    // Convert transaction fee from string to BigNumber
    const transactionFee = new BigNumber(result.transactionFee);

    console.log('Parsed Result:', result);
    console.log('Amount as BigNumber:', amount.toFixed(30)); // Displaying full precision
    console.log('Transaction Fee as BigNumber:', transactionFee.toFixed(30)); // Displaying full precision
} catch (error) {
    console.error("Error parsing JSON:", error.message);
}

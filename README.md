# JSON Parsing with BigInt and BigNumber

This project demonstrates how to parse a JSON string containing large integers and floating-point numbers with arbitrary precision. It uses the `json-bigint` library to handle large numbers and the `bignumber.js` library to maintain high-precision arithmetic for large floating-point numbers.

## Features

- **Handles large integers and floating-point numbers** with arbitrary precision.
- **Parses JSON strings safely**, ensuring that large numbers are stored and processed accurately.
- **Converts large numbers** into `BigInt` for integer precision and `BigNumber` for floating-point precision.
- **Error handling** for invalid JSON input.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from the [official Node.js website](https://nodejs.org/).

## Installation

1. Clone this repository or download the files to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running the following command:

```bash
npm install
```

```

This will install the following libraries:

- `json-bigint`: A library to handle large JSON numbers without losing precision.
- `bignumber.js`: A library to handle arbitrary precision floating-point arithmetic.

```

## Usage

1. Open `index.js` or the file where the code resides.
2. The script reads a JSON string (you can modify the `jsonString` variable to test with your own JSON).
3. It parses the JSON string, converts large numbers (`amount`, `transactionFee`) into `BigNumber` instances, and displays the parsed values.

### Example JSON:

Here is an example of a real-world cryptocurrency transaction JSON:

```json
{
  "transactionId": "abc123def456",
  "timestamp": "2024-11-06T10:30:00Z",
  "sender": "wallet12345",
  "receiver": "wallet67890",
  "amount": 123456789012345678901234567890.12345678901234567890123456789,
  "transactionFee": 0.00000001234567890123456789,
  "status": "completed",
  "details": {
    "network": "Bitcoin",
    "confirmationCount": 10
  }
}
```

### Output:

When you run the script, the output will be something like:

```plaintext
Parsed Result: [Object: null prototype] {
  transactionId: 'abc123def456',
  timestamp: '2024-11-06T10:30:00Z',
  sender: 'wallet12345',
  receiver: 'wallet67890',
  amount: '123456789012345678901234567890.123456789012345678901234567890',
  transactionFee: '0.00000001234567890123456789',
  status: 'completed',
  details: [Object: null prototype] { network: 'Bitcoin', confirmationCount: 10 }
}
Amount as BigNumber: 123456789012345678901234567890.123456789012345678901235
Transaction Fee as BigNumber: 0.000000012345678901234567890
```

## Code Overview

### 1. **`isValidJson(jsonString)`**

This function checks whether the provided string is a valid JSON. It uses `json-bigint` to attempt parsing and returns `true` if successful, `false` otherwise.

### 2. **`parseJson(jsonString)`**

This function first checks if the provided string is valid JSON using `isValidJson`. If valid, it proceeds to parse the JSON string using `json-bigint`. It also handles errors and throws a specific error message if the JSON is invalid.

### 3. **Parsing Large Numbers**

After parsing the JSON, the script converts:

- `amount`: A large floating-point number representing the transaction amount.
- `transactionFee`: A small floating-point number representing the fee.

Both values are converted to `BigNumber` for precise calculations and displayed with full precision.

## Error Handling

- **Invalid JSON**: If the JSON string is not properly formatted, an error message will be displayed: `Invalid JSON string provided`.
- **Missing or Invalid Fields**: If the expected fields (e.g., `amount` or `transactionFee`) are not present, the code will throw an error when attempting to parse or convert those values.

## Contributing

Feel free to open issues or pull requests for any enhancements or bug fixes you might find. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

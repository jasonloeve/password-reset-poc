# Password Reset POC

This is a proof of concept (POC) for a basic password reset screen implemented using TypeScript and React. The POC aims to demonstrate the functionality of validating a password string based on specific requirements and enabling the password reset only when the new password is valid.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Implementation Details](#implementation-details)
- [Limitations](#limitations)
- [License](#license)

## Requirements

The requirements for the password reset functionality are as follows:

- The user can enter a string to be validated as a password.
- The password must meet the following constraints:
   - At least 8 characters in length.
   - Includes at least one number and two special characters.
   - Alternatively, the password can be greater than 15 characters with no restrictions.
- The password reset should only be enabled if the new password is valid.
- Unit tests should be provided to ensure the functionality of the password validation.

## Installation

1. Clone the repository:

    ```shell
    git clone git@github.com:jasonloeve/password-reset-poc.git

2. Navigate to the project directory:

    ```shell
    cd password-reset-poc

3. Install dependencies:

    ```shell
    npm install

4. Start the application:

    ```shell
    npm start

Open your browser and visit http://localhost:3000 to see the application running.

## Running Tests

To run the unit tests for the password validation functionality, use the following command:

1. Ensure that the project dependencies are installed by following the [Installation](#installation) instructions.

2. Open a terminal or command prompt and navigate to the project directory.

3. Run the following command to execute the unit tests:

   ```shell
   npm test

The test runner will execute the tests and display the results, indicating whether each test has passed or failed.

## Implementation Details

The password reset POC is implemented using TypeScript and React. The main components and functionalities of the POC include:

- Input field for entering the new password.
- Validation of the password based on the specified constraints.
- Display of error messages for invalid passwords.
- Unit tests to ensure the correctness of the password validation logic.
- Display of success message for valid passwords on submit event.

## Limitations

- This POC focuses solely on the password reset functionality and does not include additional screens, user authentication, SCSS / styling build tools. (*If you would like me to set this up please make contact with me.)
- The build pipelines and deployment processes are not included in this POC.
- The POC makes use of very basic styling class names which may cause issues in production applications.
- The POC does not incorporate any backend or database interactions.
- This application hasn't been peer reviewed and may contain bugs.

## License

This project is licensed under the MIT License.

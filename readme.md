
# medgenium e2e test project

This project uses Playwright to automate the testing of the Medgenium application. The tests include authentication and patient management functionalities.

## Project Structure

```
│
├── playwright/
│   └── .auth/
│       ├── admin.json
│       └── doctor.json
│
├── tests/
│   ├── auth.setup.ts
│   └── patient.spec.ts
│
└── playwright.config.ts
```

## File Descriptions

- **playwright/.auth/admin.json**: Contains authentication cookies and local storage data for the admin user.
- **playwright/.auth/doctor.json**: Contains authentication cookies and local storage data for the doctor user.
- **tests/auth.setup.ts**: Contains setup scripts for authenticating as admin and doctor.
- **tests/patient.spec.ts**: Contains the test script for adding a patient as an admin.
- **playwright.config.ts**: Configuration file for Playwright.

## Setup Instructions

### Install Dependencies:
```bash
npm install
```

## Authentication Setup

The `auth.setup.ts` file contains two setup scripts:

- **Authenticate as Admin**:
    - Navigates to the login page.
    - Fills in the admin email and password.
    - Saves the authentication state to `playwright/.auth/admin.json`.

- **Authenticate as Doctor**:
    - Navigates to the login page.
    - Fills in the doctor email and password.
    - Saves the authentication state to `playwright/.auth/doctor.json`.

## Test Description

### Patient Management

- **patient.spec.ts**:
    - Uses the admin authentication state from `playwright/.auth/admin.json`.
    - Tests the functionality of adding a patient as an admin.

## Configuration

The `playwright.config.ts` file includes:
- Base URL for the application.
- Test directory.
- Parallel test execution settings.
- Retry settings.
- Project configurations for different browsers.

## Running Tests

To run the tests, execute the following command:
```bash
npx playwright test
```

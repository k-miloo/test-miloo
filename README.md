# katya- test-task

TASK 1: Based on requirements create 3 manual test cases
Test case 1: Successful registration (happy path)
Verify registration form with valid credentials
1. Navigate to https://auth-home-task.vercel.app/
2. Click on "Go to Registration" button
3. Enter a valid username in "Username:" field (e.g., "Name")
4. Enter a valid email in "Email:" field (e.g., "example@example.com")
5. Enter a valid password in "Password:" field (e.g., "Tokyo098123")
6. Enter the same value in "Confirm Password:" field
7. Click "Register" button and submit the form.
8. Verify that the user is redirected to the home page.
9. Verify that a success message is displayed.

Test case 2: Username, email, and password validations
Verify validation messages for invalid username, email, and password inputs
1. Navigate to https://auth-home-task.vercel.app/
2. Click on "Go to Registration" button
3. Enter an invalid username in "Username:" field (e.g., "1")
4. Enter an invalid email in "Email:" field (e.g., "email")
5. Enter an invalid password in "Password:" field (e.g., "pass")
6. Click "Register" button
7. Verify that the correct validation error messages are displayed for each input field

Test case 3: Confirm password validation
Verify non-matching confirm password error message
1. Navigate to https://auth-home-task.vercel.app/
2. Click on "Go to Registration" button
3. Enter a valid username in "Username:" field (e.g., "Name")
4. Enter a valid email in "Email:" field (e.g., "example@example.com")
5. Enter a valid password in "Password:" field (e.g., "Tokyo098123")
6. Enter a non-matching confirm password "Confirm Password:" field (e.g., "ToKyo098123")
7. Click "Register" button
8. Verify the error message 

TASK 2: Report at least 1 Bug You have found during the testing
1. Validation Feedback: Highlight the fields with errors: the fields with errors are not highlighted, only error messages are shown. 
2. Different error format for email field (pop-up)

TASK 4: Add points to improve form's UI/UX
1. The required fields are not marked as required, this might be misleading for the user (suggestions 1. Add "All fields are required" note, or 2. Mark each required field with an asterisk)
2. Error messages for empty inputs are the same as for invalid inputs (e.g. might be "Field can not be empty")

TASK 5:Anything You would improve/specify more in the existing requirements
1. Unclear requirement for Username input. Username input doesn't allow spaces, but the requirement doesn't mention whether it is allowed or not. 
The requirement needs to be updated. If the space is allowed the validation should be fixed. 
2. Unclear requirement for password input. Password allows special characters, but the requirement doesn't mention whether it is allowed or not. 
The requirement needs to be updated. If the special characters are not allowed the validation should be fixed. 
3. Unclear requirements for validation feedback: the requirement doesn't contain the expected messages.
5. No requirements for "Register" button state: should it be disabled until all the required fields are filled in? 
4. No requirements for unique users validation (e.g. "User with this email is already registered")
5. No requirements for language support (e.g. Latvian or Cyrillic are not supported in the Name field)

TASK 6: What else can be tested?
1. Load and performance 
2. Error handling 
3. Accessibility (e.g. keyboard navigation)

# Welcome to the Grow Progress Frontend Engineer Skills Assessment

Please complete the challenges below to the best of your ability. If you don’t
have time to finish a challenge, do your best to explain what you would do with
more time. Partial credit may be awarded for each answer that you do not get
correct or did not finish.

Some of the instructions below will direct you to exactly where you should write
code. In these cases, simply add a comment that indicates which section
and challenge you are answering. For the other instructions, as long as you
clearly indicate which challenge you are answering, you may submit your answers
however you see fit.

You are expected to use external resources. For any challenge that you use
external resources, please list the resources you used.

You have 1.5 hours to complete the test. At the end of 1.5 hours, send your
responses in an email to jdiamond@growprogress.ai with the subject
“GP Junior Engineering Test - [LASTNAME]”. Please send back all of the files,
excluding the `node_modules` folder. You may send back the files as an
email attachment or you may provide a link to where the files can be retrieved.
The timestamp on the email will serve as the indication of when you stopped
working.

Best of luck!

## Getting Started

### The Node Server

This repo comes with a basic node express server. The code for the server was
written with node v14.15.3 and requires node to test. This test does not ask
any node specific questions. The server is provided only as a helpful
development tool.

#### Installation

```bash
> npm install
```

#### Running the Server

```bash
> node server.js
listening on port: 8080!
```

## The Test

Grow Progress maintains a data visualization platform that allows users to drill
into the data and generate actionable intel. A user just emailed to let us know
that they are having a difficult time figuring out how to use the tool.

For the purposes of this test, if you write any JavaScript code, please write it
in `assets/onboarding.js`. If you write any CSS, please write code in
`assets/custom-style.css`. If you do use either of these files, please be sure
to import these assets in `index.html` under
`<!-- IMPORT YOUR DEPENDENCIES HERE -->`.

### 1. The Welcome Modal

**(50 points)** The product team wants to add a simple welcome modal to the main
page that will welcome the user to the platform and solicit their feedback.
The webpage in this project loads
[Bootstrap 4.4](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
and a slim version of [JQuery](https://api.jquery.com/) from a CDN. You are
tasked with the following:

a. Modify `index.html` to include a Bootstrap styled modal where it says “ADD
BOOTSTRAP MODAL HERE”. Here's the requirements for the modal:

- In the modal header, lets include the title “Welcome to the Grow Progress Platform”.
- In the modal body, we'll need the following:
    - a paragraph that says "This dashboard provides amazing insight into your
    target audience. Use this dashboard to get an idea as to what matters most
    to these critical voters. If you have any feedback or questions, please fill
    out the form below to send questions or comments to our support team."
    - a form: with the following inputs
        - user's first name (required)
        - user's last name (required)
        - user's email: text input (required)
        - message: textarea (required)
- In the modal footer, lets include the following:
    - A submit button. This should be a bootstrap styled primary button and
    when clicked, the form input data should be validated so that none of the
    inputs are empty. Once validated, a post request with the form data above
    should be submitted  to "/api/user-feedback" without reloading the page.
    - A close button. This should be a bootstrap styled secondary button that
    when clicked should close the modal.
- Whenever the submit button is clicked, or the modal is closed, the data in
the feedback form should reset to blank.

b. In `index.html`, find the help button. This is the button with a question
mark that sits above the Favorite Ice Cream section. When the user clicks the help
button the modal you configured in the previous step should show. If the user
clicks the close button configured in the previous step, or clicks anywhere
outside of the modal, the modal should close.

### 2. User Onboarding

**(30 points)** After discussions with our users, the product team has also decided to install
a JavaScript package called
[Driver.js](https://kamranahmed.info/driver.js/) to overlay onboarding hints
onto the existing UI. Please complete the following:

a. Modify `index.html` to include
[Driver.js](https://github.com/kamranahmedse/driver.js)
where it says `<!-- IMPORT YOUR DEPENDENCIES HERE -->`. You are welcome to
include it using the CDN.

b. In the modal configured in the previous challenge, please do the following:

- Add a sentence to the opening paragraph that says "If you need help navigating
this dashboard, please click the 'Take the Tour' button below."
- Add a button to the modal footer with the text "Take the Tour". When the user clicks
the “Take the Tour” button, the modal should close and the Driver.js package
should start walking the user through the steps below with popovers that include
titles and descriptions (you may make up your own titles and descriptions).
    - Focus the user on sidebar
    - Focus the user on Favorite Ice Cream container
    - Focus the user on Favorite Letter in the Alphabet container
    - Focus the user on Words of Wisdom container

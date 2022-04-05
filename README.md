## In-email Survey Counter

### Context

The **in-email-survey-counter** repo is part of the in-email-survey-project. It hosts the code of the webpage that collects clicks from survey respondents.

Survey respondents receive emails via Amazon SES containing HTML formatted survey questions. The answering options are displayed as buttons. Each button links to the website that is to be built collaboratively here in the **In-email Survey Counter** repository. The urls underlying each button do not only open the web page, they also transfer various attributes via the url to identify:
- the question that was asked (in the form of a *question code*),
- the selected answering option (in the form of a number), and
- the unique id of the respondent (in the form of a hashed email address ensuring anonymity)
- unique id of the survey itself

### Function of the webpage

The page registers the hits and sends the attributes received via the urls to a database.

### Mode of collaboration

You cannot push directly to the `main` branch. Please push to the branch of the issue you are working on and create a pull request if you want to merge your changes into `main`.

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Rename the `.env.example` file to `.env`
    - replace the values of each variable with the required values
4. Run `npm start` to start the server

Here are a few resources to explore:
- [node-postgres documentation](https://node-postgres.com/features/connecting)
- [Creating a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [Example Node-databse Project](https://blog.logrocket.com/nodejs-expressjs-postgresql-crud-rest-api-example/#connectingtoapostgresdatabase)
This was a fun project :)

I started on the front-end since it seemed like the larger part of the project and also where all the bugs were, and then I ended up at around the 2hr mark, so I left quite a bit undone.

# TODO:

## Front end:

- Implement routing
- Support data paging and searching for api calls, add paging to the display of the table component
- Test out caching in the client-api/data layer, alter to 5 minutes and/or make sure the defaults are reasonable once it is working
- Add some automated testing for (at least the advocate-filtering method, I'm sure there are others)
- Better error handling for data fetches
  - show a notification to the end-user
- Retry api calls that fail by wrapping the api-calling functions with a generic retry-on-exception function
- Debounce the search input so we don't bring down our poor api :'(
- Bring in Storybook.  It's a great component testing framework that can help developers keep their code modular and clean

## Backend

- Implement MVC pattern for endpoints
- Support paging and searching on backend
- Move .env file to .env.local (or similar) and save .env for stagin/production secrets
- Simplify database for local development by making it all spin up with one command
  - After that remove seeder api endpoint
  - After that remove seeder libraries (if not needed any more)

## Deployment / General

- Implement a CI/CD pipeline that runs automated tests, lints, builds, deploys.  I'm a fan of github actions but there are lots of good options
- Consider running tests with git hooks using Husky before allowing commits (some teams like doing this and some don't, so it'd probably need a meeting/discussion first)
- Convert README.md to a description of the code

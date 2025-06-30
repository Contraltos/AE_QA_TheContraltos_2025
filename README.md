# AE_QA_TheContraltos_2025

Automated testing for the AE project using Playwright and modern JavaScript (TypeScript support is planned). The repository contains automated tests implemented with the Page Object Model pattern, integrated into CI/CD via GitHub Actions.

## Technologies Used:

- **Languages:** JavaScript (ES2022+), with plans to migrate to TypeScript
- **Testing Framework:** [Playwright](https://playwright.dev/)
- **CI/CD:** GitHub Actions
- **Dependency Management:** npm

## Getting Started -->

### Clone and Install:

1. **Clone the repository**
   ```bash
   git clone https://github.com/Contraltos/AE_QA_TheContraltos_2025.git
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

### Running Tests:

- **Run tests in UI mode:**
  ```bash
  npx playwright test --ui
  ```

---

## Git Workflow

- **Add changes to the staging area:**
  ```bash
  git add .
  ```
- **Commit changes:**
  ```bash
  git commit -m "Your commit message"
  ```
- **Push changes to the remote repository:**
  ```bash
  git push origin <branch-name>
  ```
- **Create a Pull Request:**
  - Use the GitHub web interface to create a Pull Request from your branch to the main branch.

---

## Project Structure

- `POM/` — main directory containing automated tests (Page Object Model).
- `PageObjects/` — contains page object classes and methods for interacting with page elements.
- `Ficstures/` — fixtures and helper classes (created after refactoring).
- `tests/` — obsolete directory, will be removed in the future.

---

## Best Practices

- Use modern JavaScript.
- Write each test in a separate file directly in `POM/`.
- End every test with `expect`.
- Use Page Object Model: keep all page logic in `PageObjects/` as classes.
- Use async/await with Playwright.
- Use `Ficstures/` for fixtures and setup.
- No code duplication—reuse methods and classes.
- Tests must be atomic and independent.
- Commit messages: clear and informative.
- Make all changes in your own branch, then create a Pull Request. Delete the branch after merge.
- Each Pull Request (PR) must have at least two reviewers.
- Link PRs to the board card.
- CI/CD (GitHub Actions): tests run on every push.
- Keep dependencies up to date.

---

## Important Project Rules

1. **Do not change the following files without discussion:**
   - `.gitignore`
   - `package-lock.json`
   - `package.json`
   - `playwright.config.js`

2. **Each Pull Request must include at least two reviewers for approval.**

3. **On the project board:**
   - Link the Pull Request to its corresponding card.
   - Create cards only using the provided board template.
   - When creating an issue:
     - Specify the code language.
     - Specify the owner (assignee).
     - Attach the Pull Request to the card.
     - Specify the type of the issue.
     - Move the card to the appropriate status column.

---

## Contributing

All project members have admin rights and can make changes directly to the repository.  
It is recommended to notify the team about changes in the chat or by creating a Pull Request for discussion.  
For major changes, please discuss the task with the team in advance.

## Contacts

- **Team Lead:** TG - @SVYSLV



# Full Stack Open – Part 12: Containers

## Repository structure

| Path | Contents |
|---|---|
| [`answers/`](answers/) | Exercise answers (12.1–12.12) |
| [`todo-app/`](todo-app/) | Todo app: dev and production containers, nginx reverse proxy (12.13–12.20) |
| [`todo-tests/`](todo-tests/) | Playwright E2E tests, run by GitHub Actions (12.21) |
| [`phonebook-app/`](phonebook-app/) | Own full stack app containerized: dev and production (for exercise 12.22–12.23) |

## Running

From `todo-app/` or `phonebook-app/`:

- Development: `docker compose -f docker-compose.dev.yml up --build`
- Production: `docker compose up --build`

The app is served at http://localhost:8080.

## Phonebook app
This was originally part11 cicd
Restructured into `frontend/` and `backend/` from the earlier full stack app:
https://github.com/hub2jo/part11-phonebook-cicd
It's self-contained in the same submission Repo now -> https://github.com/hub2jo/part12-fs-containers/phonebook-app
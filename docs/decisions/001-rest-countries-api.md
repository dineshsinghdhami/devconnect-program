# Decision Record 001: Use REST Countries v5 API

## Decision

Use the REST Countries v5 API as the main data source for Atlas Country Explorer.

## Alternatives Considered

### REST Countries v3.1

This was considered first because it is commonly used for country projects.

However, during development it was not suitable for the current project setup.

### Public GitHub country datasets

A public country dataset from GitHub was also considered.

It was easy to access, but some important fields such as population were incomplete or not useful enough for this project.

### Hardcoded country data

Another option was to store country data directly inside the project.

This would make the project independent from an API, but the information could become outdated and would not satisfy the goal of using a real external data source.

## Why REST Countries v5 Was Chosen

REST Countries v5 provides the main information needed by the application, including:

- Country name
- Capital
- Region
- Subregion
- Population
- Area
- Languages
- Currency
- Flag
- Country codes

Using one API also keeps the data-loading logic simpler.

## Downside / Cost

The application depends on an external service.

If the API is unavailable, rate limited, or changes its response structure, the application may not load country information correctly.

The API also requires an API key, which adds configuration work.

Because the current frontend uses Vite, the API key is not fully secret in a browser build. Origin restrictions are therefore important.

## Awkward Part of the Decision

During development, changing from older or incomplete data sources to REST Countries v5 required updating the application's data-reading logic because the response structure was different.

This added extra work, but it resulted in a more suitable data source for the final project.
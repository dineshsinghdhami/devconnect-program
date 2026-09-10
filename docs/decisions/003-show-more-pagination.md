# Decision Record 003: Use a Show More Button

## Decision

Display a limited number of country cards initially and allow users to load more using a `Show more countries` button.

## Alternatives Considered

### Show all countries immediately

The application could display every country as soon as the API request finishes.

This would be simple, but the page would become very long and harder to scan.

### Traditional pagination

Another option was numbered pagination such as:

Previous 1 2 3 4 Next

This would work well for large datasets but would add more state and navigation logic.

### Infinite scrolling

Countries could automatically load as the user scrolls.

This can feel smooth, but users may lose track of their position and reaching the footer can become difficult.

## Why Show More Was Chosen

The `Show more countries` approach is simple and easy to understand.

The first page stays shorter while users still have control over when more country cards appear.

The application currently starts by showing 18 countries.

Each click adds another group of countries.

## Downside / Cost

Users must click an extra button to see the complete list.

It is also less useful than numbered pagination when someone wants to jump directly to a particular page.

## Awkward Part of the Decision

Search and region filtering can reduce the number of available results.

Because of this, the visible count needs to reset when the search query or region changes.

Without resetting it, a user who previously loaded many countries could see too many filtered results immediately.
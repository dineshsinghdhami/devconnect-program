# Decision Record 002: Show Country Details in a Modal

## Decision

Display detailed country information in a popup modal when the user selects a country.

## Alternatives Considered

### Expand the country card

One option was to expand each country card and show all information inside it.

This would make each card much larger and could make the country grid difficult to scan.

### Show a detail section below the grid

Another option was to display the selected country in a large section below the country list.

This was simpler to implement, but users might need to scroll a long distance to find the selected country details.

### Use a separate country details page

A separate route could also be created for every country.

This would provide more space for information but would make the project more complex and require additional routing.

## Why the Modal Was Chosen

The modal keeps the main country grid simple while still allowing users to view more information.

Users can inspect a country and then quickly return to browsing without changing pages.

The modal shows information such as:

- Capital
- Region
- Subregion
- Population
- Area
- Languages
- Currency

## Downside / Cost

A modal requires extra accessibility work.

The application needs to manage keyboard focus and provide clear ways to close the popup.

## Accessibility Considerations

The modal currently includes:

- `role="dialog"`
- `aria-modal="true"`
- A clearly labelled close button
- Escape key support
- Focus moves to the close button when opened
- Focus returns to the original country button when closed
- Clicking the backdrop closes the popup

## Awkward Part of the Decision

The visual part of the modal was easy compared with managing focus correctly.

Returning focus to the original `View country` button required storing the previously focused element before opening the modal.
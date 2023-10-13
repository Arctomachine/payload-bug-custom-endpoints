# Bug: `limit:0` is not working in custom endpoints

## Reproduction

1. Start dev server
2. Log in, go to collection `items` and create at least 11 items (should be 2+ pages by default)
3. Make request to `/api/items/get-all`

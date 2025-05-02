## Priciples of redux:

1. Single Source of truth: You have only one 'store' in whole application but it can have multiple slices.

2. State should be read only: When yopu want to update the state then one have to dispatch an action, That will tell what exactly going to change.(TLDR: Should not update directly)

3. Changes are made by pure reducer functions: A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.


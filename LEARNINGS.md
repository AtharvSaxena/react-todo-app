Day 1

Learned:

- React state updates
- List items rendering
- Flex boxes

Challenge:
Tasks were not rendering.

Solution:
Used `map` function in which i used arrow function with `task` and `index` as parameters. The `task` value is passed rendering text and `index` is used as key to the `li` tag.

Day 2 (Skipped)

Day 3 (Skipped)

Day 4

Learned:

- object destructuring
- Multiple lists rendering
- Conditional tags rendering
- Filter & Map function
- Glassmorphism effect
- Conditional CSS styling

Challenge:
Marking specific list items as complete. Tried assinging a new variable for completed items but did not work. All items were turning complete/incomplete.

Solution:
Changed data structure for the list items, converted it from simple `strings` into `objects`. Assigned 3 keys to the `object` - `id`, `text`, `complete` flag. Used the id value to indentify the specific list item then changed the `complete` flag for it to be `true`. Later created new list for completed items and shifted all the items with `completed` flag `true` into the new list.

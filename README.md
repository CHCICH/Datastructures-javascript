# Node Class

## Description
The `Node` class represents a node in a linked list.

## Constructor
- **Parameters:**
  - `head`: The value to be stored in the node.
- **Properties:**
  - `head`: Stores the value of the node.
  - `next`: Points to the next node in the linked list. Initially set to `null`.

# LinkedList Class

## Description
The `LinkedList` class represents a linked list data structure.

## Constructor
- **Parameters:**
  - `head`: Optional. Initializes the linked list with the given value as the head node.
- **Properties:**
  - `head`: Points to the head node of the linked list.
  - `next`: Points to the next node in the linked list.

## Methods

1. **createFromArray(arr)**
   - **Description:** Creates a linked list from an array.
   - **Parameters:**
     - `arr`: The array to create the linked list from.
   - **Returns:** Void.

2. **size()**
   - **Description:** Returns the size of the linked list.
   - **Returns:** The number of nodes in the linked list.

3. **transformToAnArray()**
   - **Description:** Transforms the linked list into an array.
   - **Returns:** An array containing the values of the linked list.

4. **insert(value)**
   - **Description:** Inserts a value at the end of the linked list.
   - **Parameters:**
     - `value`: The value to be inserted.
   - **Returns:** Void.

5. **insertAt(value, index)**
   - **Description:** Inserts a value at a specific index in the linked list.
   - **Parameters:**
     - `value`: The value to be inserted.
     - `index`: The index at which the value will be inserted.
   - **Returns:** Void.

6. **reverse()**
   - **Description:** Reverses the linked list.
   - **Returns:** Void.

7. **print(options)**
   - **Description:** Prints the linked list.
   - **Parameters:**
     - `options`: Optional. If set to `'schema'`, prints the schema format of the linked list.
   - **Returns:** Void.

8. **transformToAString()**
   - **Description:** Transforms the linked list into a string format.
   - **Returns:** A string representation of the linked list.

9. **indexvalue(valueTargeted)**
   - **Description:** Finds the index(es) of a specific value in the linked list.
   - **Parameters:**
     - `valueTargeted`: The value to find indices for.
   - **Returns:** An array containing the indices where the value is found.

10. **sort()**
    - **Description:** Sorts the linked list in ascending order.
    - **Returns:** Void.

This documentation provides an overview of the functionality and usage of the `Node` and `LinkedList` classes in JavaScript.

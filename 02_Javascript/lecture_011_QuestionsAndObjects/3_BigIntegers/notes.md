## Definition
The BigInt data type was introduced to handle integer values that exceed 
(2^63 − 1 )or limits of the Number data type.

- Traditional Number type in JavaScript has limitations due to its 64-bit representation, and BigInt addresses this limitation by allowing the representation of arbitrarily large integers with precision.
- BigInt literals are suffixed with 'n' to distinguish them from regular Number literals.
- BigInt is stored in heap data type.
- BigInt ensures that precision is not lost even with very large numbers.
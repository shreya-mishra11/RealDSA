### How will you heapify in O(n)

1. 🚀 Most nodes are at the bottom
2. 🚀 And bottom nodes do almost zero work
3. ⭐ This makes the total cost O(n)


### Conclusion

Building a heap is O(n) because we use bottom-up heapify. In this process, most nodes are near the leaves and require almost no heapify work, while only a few nodes near the top require O(log n) work. When you sum the cost for every level, the total work becomes ≤ 2n, which simplifies to O(n). Therefore, build-heap is linear, not O(n log n).
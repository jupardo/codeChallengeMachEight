# Code challenge

I implemented to different approaches of the problem using Hash and using binary search. the complexity of both is overall O(NLogN), but binary search performs better for larger inputs. If you want to measure performance of both solutions try running: ```yarn benchmark```

### Running the test suites

Just run ```yarn && yarn test``` to test the code.

### Running the code with your own inputs

```yarn runHash [numberSeparatedByComma] [sum]``` to run hash-based solution

```yarn runBinary [numberSeparatedByComma] [sum]``` to run binary search based solution

Examples:
```yarn runHash 1,9,5,0,20,-4,12,16,7,-12,24 12```
```yarn runBinary 1,9,5,0,20,-4,12,16,7,-12,24 12```
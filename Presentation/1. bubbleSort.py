# Version 1 of bubble sort that takes O(n^2)
def bubbleSortV1(arr):
    n = len(arr)
    iterationNum = 0
 
    # Traverse through all array elements, each time filling arr[n-1-i] with correct number
    for i in range(n):
        iterationNum += 1
        # Lst i elements are already in place
        for j in range(n-1-i):
            iterationNum += 1
            # traverse the array from 0 to n-i-1, swap if the element found is greater than the next element
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j] #swap iwth comma assignment
    return arr, iterationNum

#Version 2 of bubble sort that takes O(n^2) in worst case, O(n) in best case
def bubbleSortV2(arr):
    n = len(arr) 
    iterationNum = 0
   
    # Traverse through all array elements, each time filling arr[n-1-i] with correct number
    for i in range(n): 
        swapped = False
        iterationNum += 1
  
        # Last i elements are already in place 
        for j in range(0, n-i-1): 
            iterationNum += 1
            # traverse the array from 0 to n-i-1. Swap if the element found is greater than the next element 
            if arr[j] > arr[j+1] : 
                arr[j], arr[j+1] = arr[j+1], arr[j] 
                swapped = True
  
        # IF no two elements were swapped by inner loop, then break 
        if swapped == False: 
            break
    return arr, iterationNum

#Driver code
arrSorted1, iteration1 = bubbleSortV1([42,75,34,1,0,34,3,8,60,60])
print("Sorted array is:", arrSorted1, "with ", iteration1, " iterations")

arrSorted2, iteration2 = bubbleSortV2([42,75,34,1,0,34,3,8,60,60])
print("Sorted array is:", arrSorted2, "with ", iteration2, " iterations")

#Compare best case
arrSorted1, iteration1 = bubbleSortV1([1,2,3,4,5,6,7,8,9,10])
print("Best Case v1 sorted array is:", arrSorted1, "with ", iteration1, " iterations")

arrSorted2, iteration2 = bubbleSortV2([1,2,3,4,5,6,7,8,9,10])
print("Best Case v2 sorted array is:", arrSorted2, "with ", iteration2, " iterations")

#Compre worst case
arrSorted1, iteration1 = bubbleSortV1([10,9,8,7,6,5,4,3,2,1])
print("Worst Case v1 sorted array is:", arrSorted1, "with ", iteration1, " iterations")

arrSorted2, iteration2 = bubbleSortV2([10,9,8,7,6,5,4,3,2,1])
print("Worse Case v2 sorted array is:", arrSorted2, "with ", iteration2, " iterations")


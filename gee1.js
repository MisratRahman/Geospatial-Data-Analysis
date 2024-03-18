// {

//     "name":"Your_name",
  
//     "hobby":"reading",
  
//     "numList":[2,3,4,5,6,7,9]
  
//   }
  
//   Convert above key-value pair into a GEE Dictionary object. Get the numList from the dictionary. Apply reducer to the list and print the sum of the numList. Upload the GEE code link in your github repo. Submit your repo link.
  
  
  
var practice= ee.Dictionary({

    "Name":"Misrat",
  
    "Hobby":"reading",
  
    "numList":[2,3,4,5,6,7,9]
  
  })
  print(practice.keys())
  print(practice.get("numList"))
  var numList=[2,3,4,5,6,7,9]
  var Numlist= ee.List(numList)
  var sum = Numlist.reduce(ee.Reducer.sum())
  print("Sum of Numlist:", sum)
// Application of server site in GEE(dictionary, reducer, get) Here is the code link for file gee1.js [gee1](https://code.earthengine.google.com/e4245c53df08de5d29f47abfb04b52f8)

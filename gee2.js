// [4,5,7,8,,9] 

// Convert the list into a GEE List object. Apply the map method and multiply the value of each element of the list by 4. Finally print the multiplied list. Upload the GEE code link in your github repo. Submit your repo link. 
var A= ee.List([4,5,7,8,9])
var B= A.map(function(num){
  var num= ee.Number(num);
  return num.multiply(4)
})
print(B)
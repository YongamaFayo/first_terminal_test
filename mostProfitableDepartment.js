module.exports = function (profDep) {


  var profDeps = []
  var total = 0
  for (var i = 0; i < profDep.length; i++) {
    total += profDep[i].price
  }


  var departmentMap = {}
  for (var x = 0; x < profDep.length; x++) {
    var sales = profDep[x].sales;
    var department = profDep[x].department;
    if (departmentMap[department] === undefined) {
      departmentMap[department] = sales;
    } else {
      departmentMap[department] += sales
    }
  }

  console.log(departmentMap)
  var depWinner = '';
  var salesWinner = 0;
  for (sales in departmentMap) {
    if (departmentMap[sales] > salesWinner) {
      salesWinner = departmentMap[sales];
      depWinner = sales;
    }
  }

  console.log(depWinner)
  return depWinner
};

  
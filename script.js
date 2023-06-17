let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((employee) => {
        if (employee.profession === "developer") {
          console.log(employee);
        }
      });
  }
  PrintDeveloperbyMap();

  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((employee) => {
        if (employee.profession === "developer") {
          console.log(employee);
        }
      });
  }
  PrintDeveloperbyForEach();

  
  function addData() {
    //Write your code here, just console.log
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  addData();
  
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter((employee) => employee.profession !== "admin");
    console.log(arr);
  }
  removeAdmin();

  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray = [
        { id: 4, name: "alice", age: "22", profession: "developer" },
        { id: 5, name: "bob", age: "25", profession: "admin" },
        { id: 6, name: "emma", age: "21", profession: "developer" },
      ];
      arr = arr.concat(newArray);
      console.log(arr);
  }
  concatenateArray();

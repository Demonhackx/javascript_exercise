/////////////////////////////////////////////////
//                 TASK                        //
/////////////////////////////////////////////////

//  Given one or more objects, create a reusable function where you add the 'surname' label after 'name' //

// In object1 add surname: 'Rossi  after 'name'
// In object2 add surname: 'Verdi' after 'name'
// In object3 add surname: 'Giallo' after 'name'

/////////////////////////////////////////////////
//                 SOLUTION                    //
/////////////////////////////////////////////////

function addSurnameAfterName(obj, surnameValue) {

    //add function here

  }
  
  let object1 = {
    "_id": {
      "$oid": "liakg798fsd78968aF"
    },
    "name": "manuel",
    "age": 24,
    "email": "manuel@test.com",
    "hobbies": [
      "auto",
      "moto"
    ],
    "address": {
      "street": "via xxxx",
      "_id": {
        "$oid": "650d650dc0e10cbc10ad69fa"
      }
    },
    "createdAT": {
      "$date": "2023-09-22T09:57:33.665Z"
    },
    "updatedAT": {
      "$date": "2023-09-22T09:57:33.665Z"
    },
    "__v": 0,
  };
  
  let object2 = {
    "_id": {
      "$oid": "liakgfsd78968aF"
    },
    "name": "val",
    "age": 20,
    "email": "val@test.com",
    "hobbies": [
      "auto",
      "moto"
    ],
    "address": {
      "street": "via yyyyy",
      "_id": {
        "$oid": "650d650dc0e10cbc10ad69ha"
      }
    },
    "createdAT": {
      "$date": "2023-09-22T09:57:33.665P"
    },
    "updatedAT": {
      "$date": "2023-09-22T09:57:33.665P"
    },
    "__v": 0,
  };

  let object3 = {
    "_id": {
      "$oid": "liakgfsd78968aF"
    },
    "name": "ben",
    "age": 20,
    "email": "ben@test.com",
    "hobbies": [
      "auto",
      "moto"
    ],
    "address": {
      "street": "via zzzzz",
      "_id": {
        "$oid": "650d650dc0e10cbc10ad69ha"
      }
    },
    "createdAT": {
      "$date": "2023-09-22T09:57:33.665P"
    },
    "updatedAT": {
      "$date": "2023-09-22T09:57:33.665P"
    },
    "__v": 0,
  };

//look response before function
  console.log(object1);
  console.log(object2);
  console.log(object3);

// add and call here your functions and good luck ;)
  
//look response after function
  console.log(object1);
  console.log(object2);
  console.log(object3);
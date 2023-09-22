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
    if (obj.hasOwnProperty('name')) {
      let newObj = {};
      for (let key in obj) {
        newObj[key] = obj[key];
        if (key === 'name') {
          newObj['surname'] = surnameValue;
        }
      }
      return newObj;
    } else {
      return obj;
    }
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

  console.log(object1); // WHERE IS SURNAME?
  console.log(object2); // WHERE IS SURNAME?
  console.log(object3); // WHERE IS SURNAME?

  object1 = addSurnameAfterName(object1, "Rossi");
  object2 = addSurnameAfterName(object2, "Verdi");
  object3 = addSurnameAfterName(object3, "Giallo");
  
  console.log(object1); // surname: 'Rossi'
  console.log(object2); // surname: 'Verdi'
  console.log(object3); // surname: 'Giallo'
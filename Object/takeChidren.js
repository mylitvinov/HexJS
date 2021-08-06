const users = [
    { 'name': 'Stan', 'children': ['John', 'Mary'] },
    { 'name': 'Donald', 'children': ['James'] },
    { 'name': 'Lily', 'children': [] },
  ];

  const takeChildren = (arr) => {
    const arrChild = [];
    for (const row of arr) {
        const arrChildRow = row['children'];
        for(const child of arrChildRow) { 
            arrChild.push(child)
       }
    }
     return arrChild;
}


//    const takeChildren = (arr) => {
//        const arrChild = [];
//        for (const row of arr) {
//             arrChild.push(row['children'])
//         }
//         return arrChild.flat();
//    }

   console.log(takeChildren(users));
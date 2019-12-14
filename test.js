const  obj=[
  {group: 'blog', name: 'Anonystick.com',id: "60", value: '4'},
  {group: 'news', name: 'drsku.com',id: "58", value: '5'},
  {group: 'blog', name: 'kenhxachtay.com',id: "37", value: '6'},
  ]
  function groupByKey(keyGroup, array) {
    const result = []
    return array.reduce((acc, cur)=>{
		  console.log(1, acc, cur);
      if(acc.length < 1){
        result.push([cur])
      }else{
        const indexGroup = acc.findIndex(item => {
					console.log(2, item, cur);
          return item[0][keyGroup] === cur[keyGroup]
        })
        if(indexGroup < 0){
          result.push([cur])
         
        }else{
          result[indexGroup]= [...result[indexGroup], cur]
        }
      }
      return result
    },[])
  }
  function arrayToObject(array){
		console.log(3, array);
    return array.reduce((acc,cur, index) => {
      return {...acc, [index]: cur}
    },{})
  }

  console.log("Result", arrayToObject(groupByKey("group", obj)))

  function linearsearch(key,str){
       for(let i = 0;i<str.length; i++){
           if( str[i]==key){
             return true;

           }
       }
       return false;

  }
     function removeduplicate(str){
          let res="";
        for( let i = 0; i<str.length; i++){
             if(!linearsearch(str[i],res)){
                 res = res+str[i];
             }
        }
        return res;
     }
      let str = "aabbccdd"
 console.log( removeduplicate(str));
 
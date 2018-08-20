function my_max(array) {
    console.log(Math.max(...arr));
}
     let arr = [52, 64, 43];
     my_max(arr);


     function vowel_count(str1)
     {
       var vowel_list = 'aeiouyAEIOUY';
       var vcount = 0;
       
       for(var x = 0; x < str1.length ; x++)
       {
         if (vowel_list.indexOf(str1[x]) !== -1)
         {
           vcount += 1;
         }
       
       }
       return vcount;
     }
     console.log(vowel_count("The quick brown fox sucks and hit my balls"));



     function reverse(str){
        console.log(str.split( '' ).reverse( ).join( '' ))
        }
      
          let string = "Hello";
          reverse(string);
     
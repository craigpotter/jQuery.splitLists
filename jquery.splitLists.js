(function ( $ ) {
 
    $.fn.splitLists = function() {
        return this.each(function() {
        
          var postsArr = new Array();
          var postsList = this;
          //console.log(postsList)

          //Create array of all posts in lists
          $(postsList).find('li').each(function(){
              postsArr.push($(this).html());
          });
          
          //Split the array at this point. The original array is altered.
          var firstList = postsArr.splice(0, Math.round(postsArr.length / 2)),
              secondList = postsArr,
              ListHTML = '';
          //Generate HTML for first list
                     
          var listHTML = createHTML(firstList);
          $(postsList).html(listHTML);
 
          //Generate HTML for second list
          secondListString = createHTML(secondList);

          var getClasses = $(postsList).attr('class');

          //Create new list after original one    
          $(postsList).after('<ul class="posts '+getClasses+'"></ul>').next().html(secondListString);   
         
          
                     
          
        });
        
    };
 function createHTML(list){
   //console.log(list)
   ListHTML = '';
   for (var i = 0; i < list.length; i++) {
      ListHTML += '<li>' + list[i] + '</li>'
   };
   return ListHTML;
 }
}( jQuery ));
$(document).ready(function(){
  $('.posts').splitLists();
  
}
)

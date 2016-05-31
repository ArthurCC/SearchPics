myApp.filter('nsfw', function() {
  return function(list) {
      if(!list){return};
      var result = [];
      for(i = 0; i < list.length; i++) {
          if(list[i].data.url.indexOf("i.imgur") > -1 && list[i].data.url.indexOf("gif") == -1  && list[i].data.thumbnail != 'nsfw'){
              result.push(list[i]);
          }
      }
      stack = result.length;
      return result;
    }
});

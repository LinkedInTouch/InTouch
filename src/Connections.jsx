import React from 'react';
$(function() {
 
    $(".item").draggable({

      // At the start of dragging
      start : function (event , ui){
        var target = document.getElementById(this.id);
        target.style.zIndex=100;
      },

      // At the end of dragging
      stop : function (event , ui){
          // console.log(event , ui);

          var nowPosition = new Object();
          var newPosition = new Array();

          // Get the current position
          for (var i = 1; i < 6; i++) {
              var positionData = getPosition(i);
              nowPosition = {'name':'item'+i,'position':positionData};

               newPosition.push(nowPosition);
          }

          // Sort
          newPosition.sort(function(a,b){
                  if( a['position'] > b['position'] ) return -1;
                  if( a['position'] < b['position'] ) return 1;
                  return 0;
          });

          // Put in Order
          var number = 0;
          for (var i = newPosition.length; i--; ) {
              console.log(newPosition[i].name);

              var tmpItem = document.getElementById(newPosition[i].name);
              tmpItem.style.order = number;
              tmpItem.style.left = 0;
              tmpItem.style.top = 0;

              number ++;
          }

        // 最後にz-indexを元に戻す
        var target = document.getElementById(this.id);
        target.style.zIndex=0;
      }

    });

    // position取得の関数
    function getPosition(item){
      var tmpItem = document.getElementById('item'+item);
      // console.dir(tmpItem);
      return tmpItem.offsetLeft;
    }
});





export default function Connections() {
    return (
        <body>
        <p> This is the Connections page. </p>
        
        <div id='group'> 
        <h1> Group</h1>

        </div>
        <div id='connections'> 
        <h1> Connections </h1>
        <div class="container">
  <div id="item1" class="item content1">content1</div>
  <div id="item2" class="item content2">content2</div>
  <div id="item3" class="item content3">content3</div>
  <div id="item4" class="item content4">content4</div>
  <div id="item5" class="item content5">content5</div>
</div>


        </div>
        </body>
    )
}


var thumbnail = '-thumbnail';

for (let i = 1; i <= 4; i++) {

    var html =

    "<div class = 'product-thumbnail'>" +

     "<img class= 'product-thumbnail_image' loading ='lazy' src='images/image-product-" + i + thumbnail + ".jpg'>" +
     
     "</div>";

    document.write(html);

}

var photos= ["img/img-1.jpg","img/img-2.jpg","img/img-3.jpg","img/img-4.jpg"];
var image= document.getElementById('img');
var inum=0;
function next(){
  inum++;
  if (inum>(photos.length-1)) {
    inum=0;
  };
  image.src=photos[inum];
};
function previous() {
  inum--;
  if (inum<0) {
    inum=photos.length-1;
  };
  image.src=photos[inum];
};
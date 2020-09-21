var btn_1 = document.getElementById('btn1');
var image_1 = document.getElementById('image1');

btn_1.addEventListener('click', () => {
  if(image_1.style.display != 'block') {
    image_1.style.display = 'block';
    return;
  }
 image_1.style.display = 'none';
});

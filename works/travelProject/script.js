if (document.images) {
  var s1 = new Image(); s1.src = "seattle1.jpg";
  var s2 = new Image(); s2.src = "seattle2.jpg";
  var s3 = new Image(); s3.src = "seattle3.jpg";
  var s4 = new Image(); s4.src = "seattle4.jpg";

  var c1 = new Image(); c1.src = "chicago1.jpg";
  var c2 = new Image(); c2.src = "chicago2.jpg";
  var c3 = new Image(); c3.src = "chicago3.jpg";
  var c4 = new Image(); c4.src = "chicago4.jpg";

  var ny1 = new Image(); ny1.src = "ny1.jpg";
  var ny2 = new Image(); ny2.src = "ny2.jpg";
  var ny3 = new Image(); ny3.src = "ny3.jpg";
  var ny4 = new Image(); ny4.src = "ny4.jpg";

  var sf1 = new Image(); sf1.src = "sf1.jpg";
  var sf2 = new Image(); sf2.src = "sf2.jpg";
  var sf3 = new Image(); sf3.src = "sf3.jpg";
  var sf4 = new Image(); sf4.src = "sf4.jpg";
}

function changePictures() {
  var selected = document.getElementById('form').menu.value;
  if (selected == 'Seattle'){
    document.getElementById('tnList').innerHTML="<img name='img1' src='seattle1.jpg' onMouseOver='document.bigImg.src=img1.src'><img name='img2' src='seattle2.jpg' onMouseOver='document.bigImg.src=img2.src'><img name='img3' src='seattle3.jpg' onMouseOver='document.bigImg.src=img3.src'><img name='img4' src='seattle4.jpg' onMouseOver='document.bigImg.src=img4.src'>";
    document.getElementById('fullsize').innerHTML="<img name='bigImg' src='seattle1.jpg'>";
  }
  else if (selected == 'Chicago') {
    document.getElementById('tnList').innerHTML="<img name='img1' src='chicago1.jpg' onMouseOver='document.bigImg.src=img1.src'><img name='img2' src='chicago2.jpg' onMouseOver='document.bigImg.src=img2.src'><img name='img3' src='chicago3.jpg' onMouseOver='document.bigImg.src=img3.src'><img name='img4' src='chicago4.jpg' onMouseOver='document.bigImg.src=img4.src'>";
    document.getElementById('fullsize').innerHTML="<img name='bigImg' src='chicago1.jpg'>";
  }
  else if (selected == 'New York') {
    document.getElementById('tnList').innerHTML="<img name='img1' src='ny1.jpg' onMouseOver='document.bigImg.src=img1.src'><img name='img2' src='ny2.jpg' onMouseOver='document.bigImg.src=img2.src'><img name='img3' src='ny3.jpg' onMouseOver='document.bigImg.src=img3.src'><img name='img4' src='ny4.jpg' onMouseOver='document.bigImg.src=img4.src'>";
    document.getElementById('fullsize').innerHTML="<img name='bigImg' src='ny1.jpg'>";
  }
  else if (selected == 'San Francisco') {
    document.getElementById('tnList').innerHTML="<img name='img1' src='sf1.jpg' onMouseOver='document.bigImg.src=img1.src'><img name='img2' src='sf2.jpg' onMouseOver='document.bigImg.src=img2.src'><img name='img3' src='sf3.jpg' onMouseOver='document.bigImg.src=img3.src'><img name='img4' src='sf4.jpg' onMouseOver='document.bigImg.src=img4.src'>";
    document.getElementById('fullsize').innerHTML="<img name='bigImg' src='sf1.jpg'>";
  }
}

var track = 0;
function unv(){
  track = !track;
  var str = '<h1><img src="../../static/railways/Images/Newspapers/AdHindi.jpeg" class="img-responsive"></h1>'+
  '<p><img src="../../static/railways/Images/Newspapers/AdEnglish.jpeg" class="img-responsive"></p>'+
  '<p><img src="../../static/railways/Images/Newspapers/Photo2.jpeg"  class="img-responsive"></p>'+
  '<p><img src="../../static/railways/Images/Newspapers/Photo3.jpeg"  class="img-responsive"></p>'+
  '<p><img src="../../static/railways/Images/Newspapers/Photo1.jpeg"  class="img-responsive"></p>'+
  '<p><img src="../../static/railways/Images/Newspapers/Photo4.jpeg"  class="img-responsive"></p>'+
  '<p><img src="../../static/railways/Images/Newspapers/Photo5.jpeg"  class="img-responsive"></p>'+
  '<p><img src="../../static/railways/Images/Newspapers/Photo8.jpeg"  class="img-responsive"></p>'+
  '<p><img src="../../static/railways/Images/Newspapers/Photo9.jpeg"  class="img-responsive"></p>'+
  '<p><img src="../../static/railways/Images/Newspapers/Photo07.jpeg"  class="img-responsive"></p>';

  if(track){
    document.getElementById('insideit').innerHTML = str;
  } else {
    document.getElementById('insideit').innerHTML = '';
  }
}

function showitem(name){
  if(track) {
    unv();
  }
  document.getElementById('toshow').innerHTML = '<img src="../../static/railways/Images/Newspapers/' + name + '" class="img-responsive" id="temp">';
}

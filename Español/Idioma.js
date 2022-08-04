var SelectChange = document.getElementById('IdiomaSelect');

SelectChange.addEventListener("change",function(){
  console.log(SelectChange.value);
  if(SelectChange.value == "English"){
     window.location.href = '../index.html';
  }
})
function palnorte(){
  let size = document.getElementById("size").innerHTML;
  size = parseInt(size);

  if (size < 5){
      document.getElementById("aviso").style.display = "block";
      document.getElementById("referencia").style.display = "none";
      document.getElementById("loading").style.display = "none";

  }else{
      size = 19
      let line1 = 0;
      let line2 = 0;
      let lineSize = 0;

      for (let i = 0; i < 2; i++){
          line1 += document.getElementById("i"+i).clientWidth;
          line2 = document.getElementById("i"+1).clientWidth;

          lineSize = line1 + line2;
          console.log(lineSize);
          lineSize += 45;
          console.log(lineSize);
          document.getElementById("top"+i).innerHTML += document.getElementById("i"+i).innerHTML;
    
          if(lineSize < 413){
              document.getElementById("top"+i).innerHTML +=  " ı"
          }
      }
      altura_anterior = 102;
      altura_atual = 102;
    
      let text = document.getElementById("tapete");
      
      for (let i = 2; i < size; i++){

          let aux = document.getElementById("i"+i).innerHTML;
          text.innerHTML += aux;
          if (i != size - 1){
              text.innerHTML +="ı";
          }
      }
      if (text.clientHeight> 392){
          text.style.fontSize = "15px";
      }

      document.getElementById("referencia").style.display = "none";
      document.getElementById("loading").style.display = "none";
  }
}


document.getElementById("download").addEventListener("click", function() {
  
      let window_width = window.innerWidth;
      if (window_width >= 1024){
          html2canvas(document.getElementById("saveF"),{scale: 2, logging: true, letterRendering: 1, allowTaint: true, useCORS: true, height: 792}).then(function(canvas) {
              saveAs(canvas.toDataURL(), 'file-name.png');
          });
      } else{
          html2canvas(document.getElementById("saveF"),{scale: 2, logging: true, letterRendering: 1, allowTaint: true, useCORS: true, backgroundColor: 'black', height: 1000}).then(function(canvas) {
              saveAs(canvas.toDataURL(), 'file-name.png');
          });
      }
});


function saveAs(uri, filename) {

  var link = document.createElement('a');

  if (typeof link.download === 'string') {

      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      //simulate click
      link.click();

      // remove the link when done
      document.body.removeChild(link);

  } else {

      window.open(uri);

  }
}

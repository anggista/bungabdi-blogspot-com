/*
Name Plug-in : Loading Staggered Stair
Penulis : Abdi Syahputra Harahap
Web : https://bungabdi.blogspot.com
*/

animasist();
function lst(TagID, sizefont, color, time) {
document.getElementById(TagID).innerHTML = `<div id="lb1">
<div class="loading">Loading</div>
</div>
`;
var loading = document.querySelector(".loading");
var letters = loading.textContent.split("");
loading.textContent = "";
letters.forEach(function (letter, i) {
    var span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = (i /time) + "s";
    loading.append(span);
});

 var style = document.createElement('style');
  style.innerHTML =
 ` 
@import url(https://fonts.googleapis.com/css?family=Lato);
#lb1 {
  text-align: center;
  margin-top: 5%;
}

.loading {
  display: flex;
  color: white;
  font-size: `+sizefont+`px;
  font-family: Lato, sans-serif;
  text-transform: uppercase;
}
.loading span {
  padding: 0 10px;
  line-height: 50px;
  background: `+color+`;
  animation: bulge 2s infinite;
}

@keyframes bulge {
  50% {
    box-shadow: 0 20px 0 #eee;
    transform: translateY(-35px);
  }
}
`;
  document.head.appendChild(style);
}

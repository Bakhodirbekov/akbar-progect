// Cargamos css para el widget 2
var fileref = document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute(
  "href",
  "https://cdn1.weddingwire.com/build/css/reviews.min.css"
);
document.getElementsByTagName("head")[0].appendChild(fileref);

// Mostramos sello de recomendado
function wpShowRated(idEmpresa) {
  var nOpiniones = false;
  url = "https://www.weddingwire.com/wp-rated.php?id=" + idEmpresa;
  xmlhttpa = creaXML();
  /*peticion sincrona (se espera una respuesta antes de continuar ejecutando)*/
  xmlhttpa.open("GET", url, false);
  xmlhttpa.setRequestHeader("Accept", "message/x-jl-formresult");
  xmlhttpa.send(null);
  if (xmlhttpa.readyState == 4) {
    if (isNumber(xmlhttpa.responseText)) {
      nOpiniones = xmlhttpa.responseText;
    }
  }

  // Dependiendo del número de opiniones mostramos el sello recomendado
  if (nOpiniones >= 10) {
    // Recomendado oro
    document.getElementById("wp-rated-top-img").src =
      "https://cdn1.weddingwire.com/img/badges/badge-gold-top-en_US.jpg";
    document.getElementById("wp-rated-bt-img").src =
      "https://cdn1.weddingwire.com/img/badges/badge-gold-bt-en_US.jpg";
  } else if (nOpiniones >= 5) {
    // Recomendado plata
    document.getElementById("wp-rated-top-img").src =
      "https://cdn1.weddingwire.com/img/badges/badge-silver-top-en_US.jpg";
    document.getElementById("wp-rated-bt-img").src =
      "https://cdn1.weddingwire.com/img/badges/badge-silver-bt-en_US.jpg";
  }
}

// Mostramos sello WW
function wpShowRatedWW(idEmpresa) {
  wpShowRatedGlobal(idEmpresa);
}

function wpShowRatedGlobal(idEmpresa) {
  var urlImg = null;
  url = "https://www.weddingwire.com/wp-rated.php?t=img&id=" + idEmpresa;
  xmlhttpa = creaXML();
  /*peticion sincrona (se espera una respuesta antes de continuar ejecutando)*/
  xmlhttpa.open("GET", url, false);
  xmlhttpa.setRequestHeader("Accept", "message/x-jl-formresult");
  xmlhttpa.send(null);
  if (xmlhttpa.readyState == 4) {
    if (xmlhttpa.responseText.trim().length) {
      data = JSON.parse(xmlhttpa.responseText);
      var badge = document.getElementById("wp-rated-img");
      var reviews = document.getElementById("wp-rated-reviews");

      // Badge
      badge.style.display = "inline-block";
      badge.style.backgroundImage = "url(" + data.url_badge + ")";
      badge.style.width = "140px";
      badge.style.height = "140px";
      badge.style.backgroundSize = "contain";
      badge.style.backgroundRepeat = "no-repeat";
      badge.style.position = "relative";
      badge.style.margin = "0 auto";

      // Reviews
      reviews.style.position = "absolute";
      reviews.style.left = "50%";
      reviews.style.transform = "translateX(-50%)";
      reviews.style.textAlign = "center";
      reviews.style.bottom = "10px";
      reviews.style.fontFamily = "Helvetica, Arial, sans-serif";
      reviews.style.fontSize = "12px";
      reviews.style.fontWeight = "600";
      reviews.style.whiteSpace = "nowrap";
      reviews.style.textTransform = "uppercase";

      reviews.innerHTML = data.reviews;

      reviews.style.bottom = "72px";
      reviews.style.fontSize = "28px";
      reviews.style.fontWeight = "600";
      reviews.style.color = "#FFFFFF";
      reviews.style.textTransform = "none";
      reviews.style.lineHeight = "initial";
    }
  }
}

function wpShowRatedWAv3(idEmpresa, year) {
  wpShowRatedWAv2(idEmpresa, year);
}

// Mostramos sello wedding awards
function wpShowRatedWAv2(idEmpresa, year) {
  var urlImg = null;
  url =
    "https://www.weddingwire.com/wp-weddingawards.php?t=img&id=" +
    idEmpresa +
    "&y=" +
    year;
  xmlhttpa = creaXML();
  /*peticion sincrona (se espera una respuesta antes de continuar ejecutando)*/
  xmlhttpa.open("GET", url, false);
  xmlhttpa.setRequestHeader("Accept", "message/x-jl-formresult");
  xmlhttpa.send(null);
  if (xmlhttpa.readyState == 4) {
    if (xmlhttpa.responseText.trim().length) {
      urlImg = xmlhttpa.responseText;
      if (document.getElementById("wp-ratedWA-img-" + year) !== null) {
        document.getElementById("wp-ratedWA-img-" + year).src = urlImg;
      } else if (document.getElementById("wp-ratedWA-img") !== null) {
        document.getElementById("wp-ratedWA-img").src = urlImg;
      } else {
        var ids = document.querySelectorAll("[id='wp-rated-img']");

        if (ids.length > 1) {
          var alt = ids[0].alt;
          if (alt.indexOf("Wedding Awards 2014") > -1) {
            ids[0].src = urlImg;
          } else {
            ids[1].src = urlImg;
          }
        } else {
          document.getElementById("wp-rated-img").src = urlImg;
        }
      }
    }
  }
}

// Mostramos sello de recomendado
function wpShowRatedv2(idEmpresa) {
  var container = document.getElementById("wp-rated");
  var link = container.childNodes[1];
  document.getElementById("wp-rated-img").remove();
  link.setAttribute("id", "wp-rated-img");
  link.innerHTML = "<span id='wp-rated-reviews'></span>";

  wpShowRatedGlobal(idEmpresa);
}

//-------------------------------------------------------------------------------------------
// AJAX
//-------------------------------------------------------------------------------------------
function creaXML() {
  var xmlhttp = false;
  /*@cc_on @*/
  /*@if (@_jscript_version >= 5)
	  try {
	  xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
	 } catch (e) {
	  try {
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  } catch (E) {
	   xmlhttp=false;
	  }
	 }
	@else
	 xmlhttp=false
	 @end @*/

  if (!xmlhttp && typeof XMLHttpRequest != "undefined") {
    try {
      xmlhttp = new XMLHttpRequest();
    } catch (e) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && window.createRequest) {
    try {
      xmlhttp = window.createRequest();
    } catch (e) {
      xmlhttp = false;
    }
  }
  return xmlhttp;
}

//-------------------------------------------------------------------------------------------
// FUNCIONES AUXILIARES
//-------------------------------------------------------------------------------------------

//Comprobamos si numérico
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "");
};

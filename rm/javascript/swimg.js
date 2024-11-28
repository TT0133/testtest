function swImg(iName,str) {
	document.images[iName].src = str;
 }
/*ƒTƒ“ƒvƒ‹
<html>
 <head>
  <script Language="JavaScript"><!-- function swImg(iName,str) { document.images[iName].src = str; } // --></script>
 </head>
 <body>
 <a href="#" onMouseover="swImg('myIMG','image2.gif')" onMouseout="swImg('myIMG','image1.gif')"> <img src="image1.gif" name="myIMG" border="0">
 </a>
 </body>
 </html> */

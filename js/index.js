var description=[];
description.push("TRAORE BASSIRO");
description.push("Etudiant à UPMC");
var page_link=[];


$("#sidebar").append("<h1>"+description[0]+"</h1>");
$("#sidebar").append("<h2>"+description[1]+"</h2>");


$("#sidebar").append('<ul id="nav"><li class="current"><a href="#">Home</a><span>/</span></li></ul>');
'<li class="current"><a href="#">Home</a><span>/</span></li><li><a href="#">LCQB</a><span>/</span></li><li><a href="http://www.upmc.fr/">UPMC</a><span>/</span></li><li><a href="contact.html">Contact Me</a><span>/</span></li></ul>'

$("#sidebar").append('<div id="bio"><img class="author-img" src="images/photo.png" alt=""><h3>About Me</h3><p>I am assistant professor at University Pierre et Marie Curie <a href="http://www.upmc.fr">(UPMC)</a> in computer science department. I worked as a  postdoctoral researcher at Laboratory of Computational and Quantitative Biology <a href="http://www.lcqb.upmc.fr">(LBQC)</a> and at <a href="http://www.pee.ufrj.br/">COPPE/PEE</a> - Engineering Graduate Program, Federal University of Rio de Janeiro <a href="http://www.ufrj.br/">(UFRJ)</a>.</p></div>');
$("#sidebar").append('<div class="sidebar-line"></div>');
$("#sidebar").append('<div id="freelance-services"><h3>Research Interests</h3><p>My main research area is Bioinformatic. It is an interdisciplinary field which applies algorithms and statistical methods to the interpretation, classification and understanding of biological datasets. In particular, I am interested in applying and developing new machine learning methods to address the following problems:</p><ul class="a"><li> Remote homology detection, </li><li> Domain Recognition, </li><li> Clustering protein sequences, </li><li> Protein-ptotein interaction,</li><li> Personalised medicine. </li></ul><p></p></div><div class="sidebar-line"></div>');
$("#sidebar").append('<div id="testimonials"></div>');

$("#content").append("<h1>Teaching</h1>");
$("#content").append('<div class="content-line"></div>');
$("#content").append('<div class="article"><h3 class="article-title"><a href="#">Under graduation (Licence)</a></h3><br><table class="w4"> <tbody><tr><td> L1 </td><td> 1I001</td><td>Eléments de programmation 1</td></tr><tr><td rowspan="3"> L2 </td><td><a class="a1" href="teaching/java.html">2I002 </a></td><td> Eléments de programmation par objets avec Java </td></tr><tr><td>2IOI1 </td><td> Orientation et Insertion Professionnelle</td></tr><tr><td>2V315 </td><td> Informatique pour la biologie</td></tr><tr><td rowspan="2"> L3 </td><td> <a class="a1" href="teaching/bioInfo.html">3I019</a></td><td> Introduction à la bioinformatique </td></tr><tr><td>EPU-N5-PGT </td><td>  Projet pluridisciplinaire S5</td></tr></tbody></table></div>');
$("#content").append('<div class="content-line"></div>');
$("#content").append('<div class="article"><h3 class="article-title"><a href="#">Master</a></h3><br><table class="w4"><tbody><tr><td> M1 </td><td> <a class="a1" href="teaching/sbas.html">4I701</a></td><td>Statistiques en bioinformatique et algorithmes sur les séquences</td></tr><tr><td> M2 </td><td>5I751 </td><td>Phylogénie et génomique comparative</td></tr></tbody></table></div>');
$("#content").append('<div class="content-line"></div><div class="article"></div>');
var list = new Array();
list[0] = "img/events/12286163_519748144850215_1674739030_n.jpg";
list[1] = "img/events/12226822_519748034850226_1426222960_n.jpg";
list[2] = "img/events/12272638_519747958183567_2012753556_n.jpg";
list[3] = "img/events/12278141_519748048183558_1789596163_n.jpg";
list[4] = "img/events/12278239_519748041516892_1612959953_n.jpg";
list[5] = "img/events/12282806_519747821516914_5090958_n.jpg";
list[6] = "img/events/12282837_519748024850227_946763009_n.jpg";
list[7] = "img/events/12282844_519747948183568_1351841195_n.jpg";
list[8] = "img/events/12282846_519747914850238_420013436_n.jpg";
list[9] = "img/events/12283076_519748061516890_147257147_n.jpg";
list[10] = "img/events/12285611_519748014850228_1690830046_n.jpg";
list[11] = "img/events/12285802_519747901516906_1696112813_n.jpg";
list[12] = "img/events/12285832_519748141516882_1363257017_n.jpg";
list[13] = "img/events/12285903_519748138183549_17466673_n.jpg";
list[14] = "img/events/12286163_519748144850215_1674739030_n.jpg";
list[15] = "img/events/12287270_519747954850234_937766091_o.jpg";
list[16] = "img/events/12287488_519748064850223_203150569_o.jpg";
list[17] = "img/events/12290571_519748001516896_89496907_o.jpg";
list[18] = "img/events/12294967_519748088183554_1565565255_o.jpg";
list[19] = "img/events/12295757_519747911516905_1066966687_o.jpg";
list[20] = "img/events/12297820_519748121516884_106056011_o.jpg";
list[21] = "img/events/12297974_519748101516886_1572962693_o.jpg";
list[22] = "img/events/12305487_519747868183576_670389346_n.jpg";
list[23] = "img/events/12305570_519747848183578_1650188469_n.jpg";
list[24] = "img/events/12305797_519747858183577_724956532_n.jpg";
list[25] = "img/events/12305831_519747961516900_1947035147_n.jpg";
list[26] = "img/events/12305975_519747861516910_436059879_n.jpg";
list[27] = "img/events/12308963_519748051516891_209800072_n.jpg";
list[28] = "img/events/12308994_519748148183548_1120319288_n.jpg";
list[29] = "img/events/12309382_519748114850218_748307728_n.jpg";
list[30] = "img/events/12311432_519747994850230_909558119_o.jpg";
list[31] = "img/events/18 de outrubro 12.jpg";
list[32] = "img/events/18 de outrubro 13.jpg";
list[33] = "img/events/18 de outubro 1.jpg";
list[34] = "img/events/18 de outubro 10.jpg";
list[35] = "img/events/18 de outubro 11.jpg";
list[36] = "img/events/18 de outubro 14.jpg";
list[37] = "img/events/18 de outubro 15.jpg";
list[38] = "img/events/18 de outubro 16.jpg";
list[39] = "img/events/18 de outubro 17.jpg";
list[40] = "img/events/18 de outubro 2.jpg";
list[41] = "img/events/18 de outubro 3.jpg";
list[42] = "img/events/18 de outubro 4.jpg";
list[43] = "img/events/18 de outubro 5.jpg";
list[44] = "img/events/18 de outubro 6.jpg";
list[45] = "img/events/18 de outubro 7.jpg";
list[46] = "img/events/18 de outubro 8.jpg";
list[47] = "img/events/18 de outubro 9.jpg";
list[48] = "img/events/18 de outubro.jpg";
list[49] = "img/events/capa.jpg";
list[50] = "img/events/logo.jpg";



function paginacao(lado){
	var c = document.getElementById('pic').value;
	var image = document.getElementById('shrinkToFit');
	/image.src = src="file:///C:/C:/Users/Guineitor/Pictures/reeufacopartesite/12309382_519748114850218_748307728_n.jpg";
	image.height = 600;
	image.width = 800;
	if(lado=="direito"){
		if(c>0){
			c = parseInt(c)-1;
			document.getElementById('pic').value = c;
			//alert(c);
			image.src = src=list[c];
		}
	}else if (lado=="esquerdo") {
		if(c<50){
			c = parseInt(c)+1;
			document.getElementById('pic').value = c;
			//alert(c);
			image.src = src=list[c];
		}
	};
}

var image = document.getElementById('shrinkToFit');
/image.src = src="file:///C:/C:/Users/Guineitor/Pictures/reeufacopartesite/12309382_519748114850218_748307728_n.jpg";
image.src = src=list[0];
image.height = 600;
image.width = 800;
document.getElementById('pic').value = 0;
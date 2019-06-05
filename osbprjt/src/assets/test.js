var client = require('@types/cheerio');
var keyword = "아이오닉" //책이름
var page = ['0', '1', '2', '3', '4', '5'] //넘어갈 페이지 지정
var url;
var param = {};

for(var i=0; i<page.length; i++){
  url = 'https://lib.dongguk.edu/search/tot/result?st=KWRD&si=TOTAL&pn='+page[i]+'&q='+keyword;
  url = encodeURI(url);

  client.fetch(url, param, function(err, $, res){
    if(err){
      console.log(err);
      return;
    }

    var img_src_List = $("div.result").find(".book").find("a").find("img"); //이미지 파일 src
    var aList = $("div.result").find(".title").find("a"); //text: 책이름  href: 이미지 클릭시 넘어가는 페이지
    var h;
    for(let i=0; i < aList.length; i++){
      console.log($(img_src_List[i]).attr("src")); //이미지 파일 src
      console.log($(aList[i]).text()); //책이름
      h = 'https://lib.dongguk.edu/'+$(aList[i]).attr("href")
      console.log(h); //이미지 클릭시 넘어가는 페이지
    }
  })

}

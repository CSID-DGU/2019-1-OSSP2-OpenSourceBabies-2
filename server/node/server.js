
var express=require('express');
var app=express();
var cors=require('cors');
var bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/scraping',function(req,res){
    var client = require('cheerio-httpcli');
    var keyword = req.body.message;
    var page = ['0', '1', '2', '3', '4', '5'] //넘어갈 페이지 지정
    var url;
    var param = {};
    var res_dict={};
    var temp_dict={};
    var rank=0;
 
    for(var j=0; j<page.length; j++){
        url = 'https://lib.dongguk.edu/search/tot/result?st=KWRD&si=TOTAL&pn='+page[j]+'&q='+keyword;
        url = encodeURI(url);


        client.fetch(url, param, function(err, $){
        if(err){
          console.log(err);
          return;
        }
  
        var img_src_List = $("div.result").find(".book").find("a").find("img"); //이미지 파일 src
        var aList = $("div.result").find(".title").find("a"); //text: 책이름  href: 이미지 클릭시 넘어가는 페이지
        var h;
        for(let i=0; i < aList.length; i++){
            rank++;
            img=$(img_src_List[i]).attr("src");//이미지 파일 src
            title=$(aList[i]).text();//책이름
            link = 'https://lib.dongguk.edu/'+$(aList[i]).attr("href"); //이미지 클릭시 넘어가는 페이지
            temp_dict[rank]={'img':img, 'title':title, 'link':link};
            
            res_dict[String(rank)]=temp_dict[rank];

            //console.log(res_dict[String(rank)]);
        }
        console.log(res_dict);

        })
        //console.log(res_dict);

     rank=0;
    }
    res.json(res_dict);
});

app.listen(3000, function(){
    console.log('Server is running...');
});

# 2019-1-OSSP2-OpenSourceBabies-2



### 프로젝트명 : 동국대학교 중앙도서관 도서경로안내 서비스

<pre>
 동국대학교 중앙도서관 이용객의 도서 찾기를 도와주는 서비스
 책을 겁색하고 경로 안내 버튼을 누르면 도서관 지도 상에 책의 위치 및 경로를 안내해주는 서비스</pre>

팀원 | 학번 | 역할 
------ | ------------- | ------------- 
박지수 | 2017112127 | 보고서/피피티/도서안내
문예진 | 2017112128 | 프론트엔드/DB 
정의정 | 2017112137 | 크롤링/서버/DB/도서안내
권보근 | 2017112149 | 크롤링


### 실행환경
항목 | 개발환경
--------------- | --------------- 
웹 개발환경 | 아이오닉
데이터베이스 | mariadb, phpMyAdmin
서버 | Amazon aws, nodeJS, Docker, Git

# 과정 

### 개발 과정
<pre>
git pull
cd 프로젝트명
ionic serve
</pre>


# Docker-jenkins-Continuous Deployment

### Installation
<pre>
cd /home/ubuntu/
git clone https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2.git
ln -s 2019-1-OSSP2-OpenSourceBabies-2 osbPATH
cd osbPATH
</pre>

### Run
<pre>
# Login For Private Docker Repository
docker login
docker pull uiui97/osbprjt
ionic4 build
</pre>


# RDS MariaDB-phpmyadmin

### Run
<pre>
# if server is terminated, Enter command 'osbprjtDB'
osbprjtDB 
</pre>


# node API server

### Run
<pre>
# if process is terminated, Enter command this
node server.js
</pre>


### 실행 화면
---------------------------------------------
home/about/whishlist 탭

결과화면 | 설명 
----------------------------------------------------------- |  ----------------------------------------------------------- 
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/1.png" width="40%"></img> | 1. home 탭의 화면입니다. 도서 검색을 진행할 수 있는 페이지입니다.
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/2.PNGg" width="40%"></img> | 2. About 탭입니다. 본 어플리케이션의 소개가 들어있습니다. 개발의 과정을 보여주는 git hub링크로 연결 가능합니다.
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/3.png" width="40%"></img> | 3. Wishlist 탭에서 책의 위시리스트를 저장할 수 있습니다. 저장된 책의 리스트를 이용해 도서 검색을 진행할 수 있습니다. 
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/4.png" width="40%"></img> | 4. 메뉴 탭을 누르면 동국대학교 관련 url로 이동할 수 있는 버튼이 나옵니다. 버튼들을 누르면 각각 동국대학교 홈페이지, 동국대학교 이클래스, 동국대학교 공과대학으로 이동할 수 있습니다.


실제 실행 화면


결과화면 | 설명 
----------------------------------------------------------- |  ----------------------------------------------------------- 
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/1.png" width="40%"></img> | 1. 본 어플에 들어가면 화면의 중간에 좌측 그림과 같이 책을 검색하는 검색 창이 있습니다. 
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/5.png" width="40%"></img> |  2. 검색어가 넘어가면 중앙도서관 홈페이지에서 해당 검색어의 파라미터를 넘겨 그 결과들을 가져옵니다. 결과들을 이용해 책 목록을 만듭니다.
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/6.png" width="40%"></img> | 3. 위 책 목록들 중 원하는 책을 클릭하면 책의 자세한 정보가 나옵니다. 
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/7.png" width="40%"></img> | 4. 위 페이지를 아래로 내리면 도서찾기 버튼이 나옵니다. 해당 버튼을 클릭하여 도서를 찾기 서비스를 받을 수 있습니다
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/8.png" width="40%"></img> | .5. 도서찾기 서비스 버튼을 누른 후 나오는 화면입니다. 화면에는 해당 도서가 위치한 층의 책장 지도가 나옵니다. 계단에서부터 책의 위치까지를 선으로 연결한 네비게이션 형태로 화면이 출력됩니다.
<img src="https://github.com/CSID-DGU/2019-1-OSSP2-OpenSourceBabies-2/blob/master/9.png" width="40%"></img> | 6. 위 화면에서 책장의 자세한 y좌표를알려주는 화면으로 넘어갈 수 있습니다. 책이 정확히 어느 칸에 위치하는지 알 수 있도록 도와줍니다.






### 실제 사용 과정
-----------------------------------------------
도서 검색

<a href="https://www.youtube.com/watch?v=6C-BKN7NcAk" target="_blank"><img src="https://www.youtube.com/watch?v=6C-BKN7NcAk/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>


도서 안내

<a href="https://www.youtube.com/watch?v=_wr3VPQGWNQ" target="_blank"><img src="https://www.youtube.com/watch?v=_wr3VPQGWNQ/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

<a href="https://www.youtube.com/watch?v=APeF-9oMVrY" target="_blank"><img src="https://www.youtube.com/watch?v=APeF-9oMVrY/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

<a href="https://www.youtube.com/watch?v=b7j_m4lMBo0" target="_blank"><img src="https://www.youtube.com/watch?v=b7j_m4lMBo0/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>








> by 의정
> DevOps 가 가능하도록 서버를 구축하고자 Docker, jenkins, Git, slack 이용.
>> 19.04.15
>> 1) AWS EC2 인스턴스 생성 후
>> 2) 외부에서 서버접속을 용이하게 하기 위해 Jupyter notebook 설치
>> 3) 보안위해 HTTPS 적용
>> 4) 시스템서비스 설정(서버에서 jupyter notebook 항상 구동, jupyter notebook 에 권한 넘김)
>> 5) EC2에 Docker 설치
>> DevOps 가 가능하도록 서버를 구축하고자 Docker, jenkins, Git, slack 이용.
>>> 19.04.15
>>> 1) AWS EC2 인스턴스 생성 후
>>> 2) 외부에서 서버접속을 용이하게 하기 위해 Jupyter notebook 설치
>>> 3) 보안위해 HTTPS 적용
>>> 4) 시스템서비스 설정(서버에서 jupyter notebook 항상 구동, jupyter notebook 에 권한 넘김)
>>> 5) EC2에 Docker 설치
+ ### UI
> by 예진
+ ### UI 기능
>>> 19.05.07
>>> 1) iframe으로 동국대학교 홈페이지 띄움
>>> 2) camera 버튼 생성하여 기존의 ar 카메라 연결

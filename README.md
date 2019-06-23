# 2019-1-OSSP2-OpenSourceBabies-2



### 프로젝트명 : 동국대학교 중앙도서관 도서경로안내 서비스
                

팀원 | 학번 | 역할 
------ | ------------- | ------------- 
박지수 | 2017112127 | 보고서/피피티/도서안내
문예진 | 2017112128 | 프론트엔드/DB 
정의정 | 2017112137 | 크롤링/서버/DB/도서안내
권보근 | 2017112149 | 크롤링


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






### 실제 사용 과정
-----------------------------------------------
도서 검색

<a href="https://www.youtube.com/watch?v=6C-BKN7NcAk" target="_blank"><img src="https://www.youtube.com/watch?v=6C-BKN7NcAk/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>


도서 안내

<a href="https://www.youtube.com/watch?v=_wr3VPQGWNQ" target="_blank"><img src="https://www.youtube.com/watch?v=_wr3VPQGWNQ/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

<a href="https://www.youtube.com/watch?v=APeF-9oMVrY" target="_blank"><img src="https://www.youtube.com/watch?v=APeF-9oMVrY/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

<a href="https://www.youtube.com/watch?v=b7j_m4lMBo0" target="_blank"><img src="https://www.youtube.com/watch?v=b7j_m4lMBo0/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>


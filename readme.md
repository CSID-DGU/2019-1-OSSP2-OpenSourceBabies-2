### jupyter notebook 으로 서버접속하기
- `jupyter notebook` 설치하기
```
sudo apt-get update
sudo apt-get install python3-pip
sudo pip3 install notebook
```
- 접근권한 설정하기
```
python3
>>>from.notebook.auth import passwd
>>>passwd()
>>>비밀번호 설정
해쉬값 복사 후 exit()
```
- 환경설정하기
```
jupyter notebook --generate-config             //환경설정 파일 생성
sudo vi 환경설정 path
c = get_config()                               //객체 생성
c.NotebookApp.password = u'해쉬값'
c.NotebookApp.ip='ip'                          //서버의 내부ip
c.NotebookApp.notebook_dir = '/'               //노트북 디렉토리 설정
sudo jupyter-notebook --allow-root             //root 권한 허용후 실행
```
- AWS EC2 보안그룹 수정
```
8888 포트 열어준다.
외부ip:8888 로 jupyter notebook 접속 가능
```
- `jupyter notebook` 항상 실행된 형태로 열기
```
bg
disown -h                                      //소유권 포기
```

### https 적용하기 
- 8888 포트가 실행중이라면 종료시킨다.
```
sudo netstat -nap | grep 8888 
sudo kill -9 pid
```
- https 적용하기
```
cd /home/ubuntu
mkdir ssl
cd ssl
```
- 키 생성하기
```
sudo openssl req -x509 -nodes -days 365 -newkey rsa:1024 -keyout "키이름.key" -out "키이름.pem" -batch
//공개키 개인키 생성
```
- 환경 설정에 적용하기
```
sudo vi 환경설정 path
아래 코드 추가
c.NotebookApp.certfile = u'경로/공개키'
c.NotebookApp.keyfile = u'경로/개인키'

```
- `jupyter notebook` 실행하기
sudo jupyter-notebook --allow-root


###  jupyter notebook system service 설정하기
서버가 재부팅 되었을 때에도 jupyter notebook을 자동으로 실행할 수 있도록 설정한다.
```
which jupyter-notebook                  //주피터 경로 찾기
sudo vi /etc/systemd/system/jupyter.service
아래 내용 작성
[
[Unit]
Description=Jupyter Notebook Service

[Service]
Type=simple
User=ubuntu
ExecStart=/usr/bin/sudo /usr/local/bin/jupyter-notebook --allow-root --config=/home/ubuntu/.jupyter/jupyter_notebook_config.py
sudo systemctl daemon-reload
sudo systemctl enable jupyter
sudo systemctl start jupyter
]
sudo systemctl status jupyter
```

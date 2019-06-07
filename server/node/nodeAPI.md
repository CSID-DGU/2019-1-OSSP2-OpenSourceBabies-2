# Node API

### restart server.js
<pre>
//terminate process
pid=$(lsof -i:3000 -t); kill -TERM $pid || kill -KILL $pid
//restart
node server
</pre>

### restart server-DB.js
<pre>
//terminate process
pid=$(lsof -i:3001 -t); kill -TERM $pid || kill -KILL $pid
//restart
node server
</pre>

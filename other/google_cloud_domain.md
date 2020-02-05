# Google Cloud

**Left menu => Network services => CLound DNS => create zone => add record set**
- Resource Record Type: **A**
- IPv4 Address: **your IP**

- Resource Record Type: **CNAME**
- DNS Name: add **www**

# Domain
**Nameservers**
add all `data` from cloud dns type `NS`

# Hosts
```bash
sudo nano /etc/hosts
```
```
# add External IP
# example: 35.198.222.134 bach-pomodoro.tk
```

# /etc/nginx/site-avaible/
## Default
```
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /var/www/html;

	index index.html index.htm index.nginx-debian.html;

	server_name test.dev.abc;

	location / {
		try_files $uri $uri/ =404;
	}
}

server {
    listen       80;
    server_name  www.bach-pomodoro.tk bach-pomodoro.tk;

    location / {
        proxy_pass http://127.0.0.1:8181;
    }
}
```

# Other 
```
server {
	listen 8181;
	listen [::]:8181;

	root /var/www/html/pomodoro/build;

	index index.html index.php index.js index.htm;

	server_name bach-pomodoro.tk www.bach-pomodoro.tk;

	location / {
		try_files $uri $uri/ =404;
	}
}

```

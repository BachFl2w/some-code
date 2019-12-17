```javascript
window.fbAsyncInit = function() {
    FB.init({
        appId      : '144984782787599',
        xfbml      : true,
        version    : 'v2.6'
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
```

```html
<div class="fb-customerchat"
    messenger_app_id="95100348886"
    page_id="347911848981064"
    color="blue"
    size="large">
</div>
```

===> go fb.com/page_name => setting => messenger platform => ***Whitelisted Domains = domain.com ***

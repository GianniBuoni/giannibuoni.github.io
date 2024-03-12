---
---
{% capture dependancy %}scripts/dependancies/{% endcapture %}

//JQuery
{% include {{dependancy}}jquery-3.7.1.min.js %}

//Masonry
{% include {{dependancy}}masonry.pkgd.min.js %}

//ImageLoad

//InfiniteScroll
{% include {{dependancy}}infinite-scroll.pkgd.min.js %}

//Initialize Everything!

//Main
{% include scripts/main.js %}
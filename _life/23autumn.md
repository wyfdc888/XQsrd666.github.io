---
layout: page
title: 2023年·秋
description: 如果一直是好天气<br>我还是勉强接受他宜居城市这个说法的🏕️
importance: 4
category: fun
related_publications: false
---

{% assign folder_name = page.path | split: '/' | last | split: '.' | first %}



<!-- 1. 引入 GLightbox -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

    组会临时取消，看着难得的好天气，趁着大好秋光出去骑个车8🚴‍♀️
    探索新路线——犀浦-三道堰
    沿途景色很好看，小风吹着很舒服


<!-- 2. 图片网格 -->
<div class="gallery-grid">
  {% for i in (1..5) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    成都人民真的很会享受生活
    草地上一堆一堆的野营 好安逸
    河里还有游泳的大爷 原来成都也有自己的跳水掰掰~🏊
    
<div class="gallery-grid">
  {% for i in (6..10) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    这是一段挨着府河的绿道，基本大半段的路程都能看到水，舒服嘞😌
    
<div class="gallery-grid">
  {% for i in (11..13) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    到景区了——此行终点三道堰
    em常规的景区配置，没啥意思但来都来了hhhh
    
<div class="gallery-grid">
  {% for i in (14..16) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>


    集齐交大三扇大门照片
    
<div class="gallery-grid">
  {% for i in (17..19) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

忙里偷闲的独自出行，体验尚可

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}
.gallery-grid img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  cursor: pointer;
}
</style>
<script>
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true
  });
</script>

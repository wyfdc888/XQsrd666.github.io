---
layout: page
title: 2023年·春
description: 和葛亮兄赏花观鸟<br>游山玩水的春天🌿
importance: 2
category: fun
related_publications: false
# 这里 img 可以先去掉，后面正文里会自动生成
---

{% assign folder_name = page.path | split: '/' | last | split: '.' | first %}
{% assign cover_img = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/cover.jpg' %}


<!-- 1. 引入 GLightbox -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

    春和景明的三月，在家还裹成粽子来了直接换上轻便春装
    翠湖永远来不腻，一年四季各有味道，阳光下的郁金香好好看🌷


<!-- 2. 图片网格 -->
<div class="gallery-grid">
  {% for i in (1..6) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    跟葛亮兄打卡的又一个湿地公园，
    本来打算看日落
    可惜那天的日落并没有很好看，早早就撤了🌥️
    
<div class="gallery-grid">
  {% for i in (7..9) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    四月，说走就走的抚仙湖
    因为天气迟迟没能去成，某天早晨感觉天气不错，跟葛亮兄一拍即合立马打包出发！💃

    果然阳光才是最好的滤镜，好天气加持下的抚仙湖超美
    粉红沙滩、明星渔洞，各种景色体验感拉满🏝️
    看错了时间错过了公交 却碰上主动拉我们的好心人 二话不说直接走（后面想想我俩真是心大😅
    还有到哪都不能错过的日出日落🌅
    旅游路上接到论文答辩通知🤯，行程结束以后匆匆赶回来答辩，直奔教室衣服都没顾上换哈哈哈哈
    累是累的 不过值得！！😆
    
<div class="gallery-grid">
  {% for i in (10..36) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    跟葛亮兄说好，毕业前一定要去看的西山日出🌄
    天气比较一般，但是重在体验哈哈哈哈
    坐车到半山腰住宿，早晨只爬了一小截，比上次轻松好多好多
    
<div class="gallery-grid">
  {% for i in (37..42) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

毕竟临近毕业，事情会多一些，心里也没那么轻松了；但是在最后的这段时间，依然和葛亮兄看了好多好多风景，完成了许多许多“逃离昆明”todolist的计划哈哈

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
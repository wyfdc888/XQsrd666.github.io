---
layout: page
title: 2024年·恩施
description: 葛亮玄德再聚首👩‍🤝‍👩
importance: 5
category: fun
related_publications: false
---

{% assign folder_name = page.path | split: '/' | last | split: '.' | first %}
{% assign cover_img = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/cover.jpg' %}


<!-- 1. 引入 GLightbox -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

五一与葛亮兄相约恩施，一年未见，听起来很久，但一直保持联系，感觉也没有很久


    第一天 恩施大峡谷
    碰上下雨天，哎运气不佳啊🌧️
    全程人挤人 被推着走 埋头就是爬，小雨大雾，基本也看不见什么景，，
    还是那句话 来都来了 苦中作乐吧hhhh


<!-- 2. 图片网格 -->
<div class="gallery-grid">
  {% for i in (1..9) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    石林，继续冒雨嘎嘎爬🪨
    怪石嶙峋中是满眼的绿色
    要说什么有记忆点的景点……完全没印象

    
<div class="gallery-grid">
  {% for i in (10..14) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    地心谷——没错还是爬山
    从一座山顶爬下去，再从对面山顶爬上来，两山之间是奔腾的水流
    虽然下了几天的雨，但所幸水还比较清澈（好看
    好多爱心打卡点🩵，来都来了跟风随个大流吧
    
<div class="gallery-grid">
  {% for i in (15..19) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    清江蝴蝶崖，终于不爬山了
    坐船+逛一些造景
    置身于广阔的山水之间，更觉人之渺小
    
<div class="gallery-grid">
  {% for i in (20..24) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    最后一天，进城拍一些流水线照片
    天终于放晴，太难得了
    跟葛亮兄挑了衣服化了妆 算是做了一回苗族姑娘
    呜呜呜葛亮兄真的太美了🥹
    
<div class="gallery-grid">
  {% for i in (25..35) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

虽途遥远，幸得良伴。毕业后跟葛亮兄的第一次旅行顺利结束，以后我们一定还会一起去往更多的地方、更大的世界

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
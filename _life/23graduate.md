---
layout: page
title: 2023年·毕业
description: 前途似海👩‍🎓来日方长
importance: 3
category: fun
related_publications: false
---

{% assign folder_name = page.path | split: '/' | last | split: '.' | first %}
{% assign cover_img = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/cover.jpg' %}


<!-- 1. 引入 GLightbox -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

    西山西山又是西山
    这次是秦妈带着去哈哈哈
    秦妈真的像妈妈一样，对待工作一丝不苟，也有着一颗热爱生活的心💓
    （P.S. 秦妈给我拍的照片好好看呜呜呜🥹）


<!-- 2. 图片网格 -->
<div class="gallery-grid">
  {% for i in (1..5) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    9220+8138全体
    那天的大家都超漂亮😍
    
<div class="gallery-grid">
  {% for i in (6..13) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    拍毕业照啦啦啦
    我们刘关张站在了一起😎
    
<div class="gallery-grid">
  {% for i in (14..16) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    一些和师长、朋友的合照👨‍👩‍👧‍👦
    都是陪伴我走过四年的很重要也很好的人
    （感谢的话都在致谢了 不知道有没有看到hh
    
<div class="gallery-grid">
  {% for i in (17..25) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    公教楼拍拍拍🏛️
    昆昆撑场面的教学楼之一
    
<div class="gallery-grid">
  {% for i in (26..31) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>


    图书馆拍拍拍
    霍格沃兹同款也是让我们拍上了🪄
    
<div class="gallery-grid">
  {% for i in (32..36) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>


    操场拍拍拍
    每学期的38次阳光打卡🏃‍♀️‍➡️，真是我这个懒人的噩梦
    （但是该说不说确实出片）
    
<div class="gallery-grid">
  {% for i in (37..42) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>


    终于到了毕业典礼这一天
    葛亮兄意外负伤，为了不错过这波一辈子一次的本科毕业仪式，还是坐着轮椅去了现场👩‍🦽‍➡️
    也多亏了葛亮兄的轮椅 蹭上了一波学校的官方镜头 还上了学校视频封面哈哈哈哈
    好多领导在现场，每个学生都可以被拨穗！🎓
    现场氛围很好，www离了你谁还把我当孩子啊昆昆

    
<div class="gallery-grid">
  {% for i in (43..47) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>


    还是到了离开的这一天
    最后一次
    在西山，感受西山巍峨与滇池辽阔
    在Z56，欣赏昆明湛蓝的天空与洁白的云朵
    在斗南，感叹春城的浪漫与蓬勃
    在街头，体味城市充满温情的人间烟火

    是三页说不尽的谢言
    更是几张图几句话难以蔽之的四年

    
<div class="gallery-grid">
  {% for i in (48..55) %}
    {% assign p = 'assets/img/life/' | append: page.category | append: '/' | append: folder_name | append: '/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

还会再见吗昆明？
一定会的！

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
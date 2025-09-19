---
layout: page
title: 2022年·秋
description: 我言秋日胜春朝——一些个秋游和日常记录
img: assets/img/22_autumn/22_autumn_cover.jpg
importance: 1
category: fun
related_publications: false
---

    11月的翠湖，故地重游打卡
    春城名不虚传，这个时节也超美的！！满是生机与活力，还透着秋高气爽的惬意🤗

<!-- 1. 引入 GLightbox CSS & JS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

<style>
/* 相册网格样式 */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem; /* 新增：网格下方间隔 */
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


<!-- 2. 图片网格 -->
<div class="gallery-grid">
  {% for i in (1..8) %}
    {% assign p = 'assets/img/22_autumn/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>


    葛亮玄德小关羽爬西山⛰️
    有一说一全程腿儿上去真的累s，小关羽半途而废直接罢工要在半山腰等我们hhhh，
    但是山顶俯瞰滇池真的绝了，成就感与体验真让人觉得不虚此行
    一眼看去 昆明就是海滨城市好吗？我说的！
    
<div class="gallery-grid">
  {% for i in (9..14) %}
    {% assign p = 'assets/img/22_autumn/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>



    毕业信息采集
    好不容易化了妆，跟二弟穿着俺们的衣服 让王老爷给拍了几张皂片嘿嘿🐱（葛亮兄忘了为啥没去）
    
<div class="gallery-grid">
  {% for i in (17..19) %}
    {% assign p = 'assets/img/22_autumn/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

    再怎么说也是深秋，晚上也还是有一点秋的萧瑟的
    血月，图个新鲜凑一堆看看看拍拍拍📷，有一点想家了哈哈哈
    
<div class="gallery-grid">
  {% for i in (15..16) %}
    {% assign p = 'assets/img/22_autumn/' | append: i | append: '.jpg' %}
    <a href="{{ p | relative_url }}" class="glightbox">
      <img src="{{ p | relative_url }}" loading="lazy">
    </a>
  {% endfor %}
</div>

回想起来，真的是最幸福的一段时光了，本科真的把我养的很好🥹


<!-- 3. 初始化 GLightbox -->
<script>
  const lightbox = GLightbox({
    selector: '.glightbox',
    touchNavigation: true,
    loop: true,
    zoomable: true
  });

  // 如果后面又生成新的 .glightbox，可以刷新绑定：
  lightbox.reload();
</script>

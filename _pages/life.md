---
layout: page
title: 生活
permalink: /life/
description: "工作之外，四季流光与心中方向同样重要"
nav: false         # 不在导航栏直接显示
display_categories: [fun]
horizontal: false
---

<!-- pages/life.md -->
<div class="life">
{% if site.enable_life_categories and page.display_categories %}
  <!-- 按类别展示 life -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_life = site.life | where: "category", category %}
  {% assign sorted_life = categorized_life | sort: "importance" %}
  <!-- Generate cards for each life item -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for item in sorted_life %}
      {% include life.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for item in sorted_life %}
      {% include life.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- 不按类别展示 life -->
{% assign sorted_life = site.life | sort: "importance" %}

{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for item in sorted_life %}
      {% include life.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for item in sorted_life %}
      {% include life.liquid %}
    {% endfor %}
  </div>
{% endif %}
{% endif %}
</div>

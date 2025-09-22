---
layout: page
title: EYE交通视频处理平台
description: EYE交通视频处理平台由视频处理网站与交通分析软件双端构成，实现视频上传处理、轨迹生成及交通分析等功能。
importance: 4
category: work
related_publications: false
tags: [交通视频, 视频分析, 流量统计, 原型设计, EYE]
---

<!-- 引入 Lightbox -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

{% assign folder_name = page.path | split: '/' | last | split: '.' | first %}
{% assign img_dir = 'assets/img/projects/work/' | append: folder_name %}

<!-- 项目概览 -->
<div class="row mb-4">
  <div class="col-12">
    <p class="lead mb-4">
      EYE交通视频处理平台由 <b>视频处理网站</b> 与 <b>交通分析软件</b> 双端构成，
      用户通过网站上传交通视频自动生成轨迹文件及背景图像，配套软件支持轨迹分析、交通流统计等 12 项功能。
      项目历经 2 年迭代，于 2024 年 9 月正式上线。  
      <a href="https://4h92w39893.zicp.vip:20843/login?redirect=%2F" target="_blank">点我访问</a>
    </p>
  </div>
</div>

<!-- KPI 卡片 -->
<div class="row text-center mb-4 kpi-cards">
  {% assign kpi_list = 
    "视频上传处理:轨迹生成,背景图生成:自动化,轨迹分析功能:12项,用户权限控制:多角色" | split: "," %}
  {% for kpi in kpi_list %}
    {% assign parts = kpi | split: ":" %}
    <div class="col-6 col-md-3 mb-3">
      <div class="card kpi-card h-100">
        <div class="card-body">
          <div class="kpi-title">{{ parts[0] }}</div>
          <div class="kpi-value">{{ parts[1] }}</div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<hr>

<!-- 我的角色 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>我的角色与主要贡献</h3>
    <ul>
      <li><strong>原型设计：</strong>基于摹客重制高保真交互原型，优化登录、注册、视频上传下载等核心流程，提高页面美观性与用户操作效率。</li>
      <li><strong>权限系统设计：</strong>拆解超级管理员 / 管理员 / 普通用户权限颗粒度，设计多角色权限管理体系。</li>
      <li><strong>界面与交互优化：</strong>设计视频上传进度显示、轨迹文件可视化界面和分析结果展示，提升用户体验与操作效率。</li>
    </ul>
  </div>
</div>

<hr>

<!-- 项目部署横图 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>系统部署与成果概览</h3>
    <div class="text-center">
      <img src="{{ img_dir | append: '/deployment_overview.jpg' | relative_url }}" alt="项目部署概览" class="img-fluid mb-1" style="max-height:400px; object-fit:cover;">
      <div class="small text-muted mb-2">系统部署概览</div>
    </div>
    <p><strong>研发周期：</strong>2023年9月—2023年12月</p>
    <p><strong>访问方式：</strong>网页端可上传视频生成轨迹文件，配套软件可进行轨迹分析与流量统计。</p>
  </div>
</div>

<hr>

<!-- 核心功能 -->
<div class="row mb-4">
  <div class="col-12">
    <h4>核心功能实现</h4>
    <ul>
      <li>视频上传及处理自动化，生成轨迹文件与背景图像。</li>
      <li>轨迹分析及交通流统计功能共 12 项，支持多种分析需求。</li>
      <li>多角色权限管理，确保不同用户拥有合适操作权限。</li>
      <li>高保真原型优化登录、注册及视频上传下载流程，提高用户操作效率与体验。</li>
    </ul>
    <div class="text-center">
      <img src="{{ img_dir | append: '/interface_overview.jpg' | relative_url }}" alt="前端界面示意" class="img-fluid mb-1" style="max-height:400px; object-fit:cover;">
      <div class="small text-muted mb-3">前端界面示意</div>
    </div>
  </div>
</div>

<!-- 技术栈 -->
<div class="row mb-4">
  <div class="col-12">
    <h4>技术栈</h4>
    <p>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">HTML/CSS</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">JavaScript</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">视频处理算法</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">原型设计工具（摹客）</span>
    </p>
  </div>
</div>

<hr>

<!-- 样式优化 -->
<style>
img.img-fluid {
  max-width: 100%;
  height: auto;
  display: block;
}
.text-center img {
  display: inline-block;
  margin: 0 auto;
}
.badge {
  font-size: 0.75rem;
  padding: 0.35em 0.6em;
}
</style>

<!-- 初始化 GLightbox -->
<script>
document.addEventListener('DOMContentLoaded', function () {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox', touchNavigation:true, loop:true });
  }
});
</script>

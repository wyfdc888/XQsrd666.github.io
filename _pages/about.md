---
layout: about
title: 首页
permalink: /
subtitle: "交通运输 · 自动驾驶 · AI 多模态感知"

profile:
  align: right
  image: home_image.jpg
  image_circular: false
  more_info: 
    <p>📞 184 6826 7793</p>
    <p>📧 709810450@qq.com</p>
    <p>📍 四川成都 | 西南交通大学</p>

social: true
---

<!-- 个人简介 -->
<p class="lead mb-4">
  西南交通大学交通运输专业硕士。研究方向涵盖 <b>自动驾驶、人工智能、多模态感知</b>。
  我专注于将前沿算法落地到实际场景，从 <b>炸街车辆监测</b> 到 <b>球机道路结构识别</b>，与交管部门合作推动智能交通升级。
</p>

<!-- 应用研究项目 -->
<h4 class="mb-3">🚀 应用研究项目</h4>
<div class="row">
  <div class="col-md-6 mb-3">
    <div class="card h-100 shadow-sm p-3">
      <h5 class="card-title font-weight-bold">炸街事件监测及可视化平台</h5>
      <p class="card-text font-weight-light">
        与成都市交管局合作，构建 <b>云边协同+多模态检测</b> 架构，支撑智能化交通执法。
      </p>
      <p>
        <span class="badge" style="background-color: var(--global-theme-color);">YOLOv8</span>
        <span class="badge" style="background-color: var(--global-theme-color);">DeepStream</span>
        <span class="badge" style="background-color: var(--global-theme-color);">LPRNet</span>
        <span class="badge" style="background-color: var(--global-theme-color);">Django</span>
      </p>
      <a href="{{ '/projects/work/frystreet/' | relative_url }}" 
         class="btn btn-sm text-white mt-auto" 
         style="background-color: var(--global-theme-color);">
         查看详情
      </a>
    </div>
  </div>

  <div class="col-md-6 mb-3">
    <div class="card h-100 shadow-sm p-3">
      <h5 class="card-title font-weight-bold">基于球机的道路结构识别与违法检测</h5>
      <p class="card-text font-weight-light">
        研发 <b>全景拼接与语义分割</b> 技术，实现实时道路要素提取与违法检测，助力交通设施数字化。
      </p>
      <p>
        <span class="badge" style="background-color: var(--global-theme-color);">BiSeNetv2</span>
        <span class="badge" style="background-color: var(--global-theme-color);">SIFT</span>
        <span class="badge" style="background-color: var(--global-theme-color);">Docker</span>
      </p>
      <a href="{{ '/projects/work/ptz_adapt/' | relative_url }}" 
         class="btn btn-sm text-white mt-auto" 
         style="background-color: var(--global-theme-color);">
         查看详情
      </a>
    </div>
  </div>
</div>

<!-- 前端项目一句话弱化 -->
<p class="text-muted mt-3" style="font-size: 0.9rem;">
  此外，也参与过前端可视化与交互平台的开发（如炸街事件可视化平台、天府机场PRT调度系统等），更多细节见 <a href="{{ '/projects/' | relative_url }}">工程项目</a>。
</p>

<!-- 技术领域 -->
<h4 class="mt-5 mb-2">🛠 技术领域</h4>
<p class="text-muted mb-3" style="font-size: 0.9rem;">
  点击标签，查看我在对应领域的学习笔记与专题博客
</p>
<p>
  <a href="{{ '/blog/tag/计算机视觉/' | relative_url }}" class="badge tech-badge">📘 计算机视觉</a>
  <a href="{{ '/blog/tag/语音识别/' | relative_url }}" class="badge tech-badge">🎤 语音识别</a>
  <a href="{{ '/blog/tag/its/' | relative_url }}" class="badge tech-badge">🚦 智能交通</a>
  <a href="{{ '/blog/tag/edge/' | relative_url }}" class="badge tech-badge">💻 边缘计算</a>
  <a href="{{ '/blog/tag/viz/' | relative_url }}" class="badge tech-badge">📊 数据可视化</a>
</p>

<style>
  .tech-badge {
    background-color: var(--global-theme-color);
    color: var(--global-card-bg-color);
    font-size: 0.95rem;
    padding: 0.45em 0.75em;
    margin: 2px;
  }
  .tech-badge:hover {
    background-color: var(--global-hover-color) !important;
    text-decoration: underline;
    cursor: pointer;
  }
</style>

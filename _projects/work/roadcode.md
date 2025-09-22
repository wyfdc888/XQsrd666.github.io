---
layout: page
title: 交通设施数字化与系统开发
description: 基于城市道路与高速公路编码体系，实现交通设施结构化管理与可视化系统。
importance: 3
category: work
related_publications: false
tags: [交通设施编码, 可视化系统, QGIS, Vue.js]
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" />
<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

{% assign folder_name = page.path | split: '/' | last | split: '.' | first %}
{% assign img_dir = 'assets/img/projects/work/' | append: folder_name %}

<!-- 项目概览 -->
<div class="row mb-4">
  <div class="col-12">
    <p class="lead mb-4">
      实习于成都慧行科技有限公司，负责城市道路与高速公路结构化编码体系设计、路网数据治理及自动化编码生成，并基于高德地图开发可视化管理平台，实现道路及附属设施的全流程管理。
    </p>
  </div>
</div>

<!-- KPI / 核心成果 -->
<div class="row text-center mb-4 kpi-cards">
  {% assign kpi_list = 
    "道路设施编码:1k+,路网清洗流水线:完成,可视化系统功能:增删改查,支持道路类型:城市+高速" | split: "," %}
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
      <li><strong>编码体系设计：</strong>城市道路及高速公路多层级编码体系设计，标准化管理1k+设施。</li>
      <li><strong>数据处理与治理：</strong>基于QGIS+Python实现路网清洗、路段分割、交叉口提取、方向计算及属性标准化。</li>
      <li><strong>可视化系统开发：</strong>基于高德地图API与Vue.js实现道路、路段、杆子及交叉口的交互式管理与数据查询功能。</li>
    </ul>
  </div>
</div>

<hr>

<!-- 编码体系概述 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>编码体系概述</h3>
    <p>本系统采用层级化编码结构，实现道路从整体到车道的多级编码，支持城市道路与高速公路两类要素。</p>
    <ul>
      <li><strong>城市道路：</strong>道路→交叉口→进口道→车道 / 道路→方向→路段→杆子→车道</li>
      <li><strong>高速公路：</strong>路段、桥梁、隧道、匝道、服务区、收费站→杆子→车道</li>
    </ul>
    <p>编码逻辑保证每一级均可唯一标识，并能支持下级编码的动态生成。</p>
  </div>
</div>

<hr>

<!-- 数据处理流程 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>城市与高速公路数据处理流程</h3>
    <div class="d-flex flex-row flex-wrap justify-content-center align-items-stretch process-flow">
      
      <!-- Step 1 -->
      <div class="process-step text-center">
        <div class="icon">📂</div>
        <div class="step-title">路网数据导入</div>
        <div class="step-desc">从测绘数据 / 高德数据导入路网要素</div>
      </div>
      <div class="arrow">➔</div>

      <!-- Step 2 -->
      <div class="process-step text-center">
        <div class="icon">🧹</div>
        <div class="step-title">路网清洗</div>
        <div class="step-desc">拓扑纠错、冗余去除、断点修复</div>
      </div>
      <div class="arrow">➔</div>

      <!-- Step 3 -->
      <div class="process-step text-center">
        <div class="icon">✂️</div>
        <div class="step-title">路段分割</div>
        <div class="step-desc">按交叉口与属性对道路进行分段</div>
      </div>
      <div class="arrow">➔</div>

      <!-- Step 4 -->
      <div class="process-step text-center">
        <div class="icon">🔗</div>
        <div class="step-title">交叉口提取</div>
        <div class="step-desc">识别道路交汇点并建立拓扑关系</div>
      </div>
      <div class="arrow">➔</div>

      <!-- Step 5 -->
      <div class="process-step text-center">
        <div class="icon">🧭</div>
        <div class="step-title">方向计算</div>
        <div class="step-desc">计算进出口方向与车道归属</div>
      </div>
      <div class="arrow">➔</div>

      <!-- Step 6 -->
      <div class="process-step text-center">
        <div class="icon">📊</div>
        <div class="step-title">属性标准化</div>
        <div class="step-desc">统一道路类型、等级、方向等属性</div>
      </div>
      <div class="arrow">➔</div>

      <!-- Step 7 -->
      <div class="process-step text-center">
        <div class="icon">🏷️</div>
        <div class="step-title">编码生成</div>
        <div class="step-desc">生成唯一编码并关联上下级要素</div>
      </div>
    </div>
  </div>
</div>


<hr>

<!-- 可视化平台展示 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>城市道路与高速公路管理可视化平台</h3>
    <p>
      本系统提供多层级道路结构可视化管理，支持城市道路与高速公路设施编码查询、交互式地图操作以及车道级数据展示。
      管理者可通过列表或地图选择道路、路段、交叉口及杆子，并查看对应现场图像，实现数据全流程可视化与管理。
    </p>
  </div>

  <!-- 视频展示 -->
  <div class="col-12 mt-3">
    <h5>系统演示视频</h5>
    <div class="row">
        <div class="col-sm mt-3 mt-md-0"> 
            {% include video.liquid path='assets/video/projects/work/roadcode/city_system_intro.mp4' class='img-fluid rounded z-depth-1' controls=true autoplay=false muted=true %} 
        </div>
    </div>
    <div class="caption small text-muted mt-1">
      城市道路编码系统演示视频
    </div>
  </div>

  <!-- 图片展示 -->
  <div class="col-12 mt-4 text-center">
    <h5>部分系统界面截图</h5>
    <div class="row justify-content-center">
      {% assign imgs = "city_system.jpg|城市道路可视化界面,highway_system.jpg|高速公路可视化界面" | split: "," %}
      {% for img_pair in imgs %}
        {% assign parts = img_pair | split: "|" %}
        <div class="col-12 col-md-6 text-center mb-2">
          <img src="{{ img_dir | append: '/' | append: parts[0] | relative_url }}" 
               alt="{{ parts[1] }}" 
               class="img-fluid" 
               style="height:auto; width:100%; object-fit:cover; border-radius:0.5rem;">
          <div class="small text-muted mt-1">{{ parts[1] }}</div>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<hr>

<!-- 技术栈 -->
<div class="row mb-4">
  <div class="col-12">
    <h4>技术栈</h4>
    <p>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">QGIS</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">Python</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">高德地图 JS API</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">Vue.js</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">HTML / CSS / JS</span>
    </p>
  </div>
</div>

<hr>

<!-- 后续计划 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>后续计划</h3>
    <ul>
      <li>扩展高速公路附属设施编码与管理，实现全覆盖闭环。</li>
      <li>完善道路增删改查功能，实现动态数据更新与版本管理。</li>
      <li>优化地图渲染与交互性能，提高大规模道路数据的可视化效率。</li>
      <li>增强杆子及车道级信息的实时更新与云端同步能力。</li>
    </ul>
  </div>
</div>

<style>
img.img-fluid { max-width: 100%; height: auto; display: block; }
.text-center img { display: inline-block; margin: 0 auto; }
.badge { font-size: 0.75rem; padding: 0.35em 0.6em; }


.process-flow {
  margin-top: 1rem;
}
.process-step {
  min-width: 140px;
  max-width: 160px;
  background: rgba(var(--global-theme-rgb),0.08);
  border-radius: 0.75rem;
  padding: 0.75rem;
  margin: 0.5rem;
  flex: 0 0 auto;
}
.process-step .icon {
  font-size: 2rem;
  margin-bottom: 0.3rem;
}
.process-step .step-title {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
}
.process-step .step-desc {
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: var(--global-text-color);
}
.arrow {
  font-size: 1.5rem;
  margin: 0 0.5rem;
  color: var(--global-theme-color);
  align-self: center;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function () {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox', touchNavigation:true, loop:true });
  }
});
</script>

---
layout: page
title: 天府机场PRT胶囊自动驾驶调度系统
description: 国内首套群体协同式胶囊无人驾驶运输系统，实现单车智能控制、多车协同与全局自动调度。
importance: 4
category: work
related_publications: false
tags: [无人驾驶, PRT, 群体协同, 实时调度, 天地图]
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
      本项目与天府国际机场合作，研发国内首套群体协同式 <b>胶囊无人驾驶运输系统</b>，
      集成单车智能控制、多车协同控制、全局车辆自动调度三大模块，将轨道交通调度理念融入自动驾驶，
      实现运输需求主动式、动态实时响应。
    </p>
  </div>
</div>

<!-- KPI 卡片 -->
<div class="row text-center mb-4 kpi-cards">
  {% assign kpi_list = 
    "前端车辆调度可视化:100%,车辆实时定位:≈1s刷新,多车协同调度:支持,系统稳定运行:24/7" | split: "," %}
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
      <li><strong>前端开发：</strong>基于天地图 API 构建车辆调度地图平台，通过动态图层加载策略实现灵活的地图缩放层级控制；实现车辆实时轨迹渲染、RFID 路网标记管理及车辆调度交互逻辑。</li>
      <li><strong>通信架构设计：</strong>设计 C++/Web 双向通信协议，开发二进制数据编解码模块，实现车辆定位数据与调度指令实时传输。</li>
      <li><strong>核心代码实现：</strong>实现车辆轨迹管理、起点/终点选择逻辑、实时轨迹扩展与刷新、RFID 点管理、Web 前端调用 C++ 控制接口。</li>
    </ul>
  </div>
</div>

<hr>

<!-- 项目部署横图 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>项目部署与成果概览</h3>
    <div class="text-center">
      <img src="{{ img_dir | append: '/deployment_overview.jpg' | relative_url }}" alt="项目部署概览" class="img-fluid mb-1" style="max-height:400px; object-fit:cover;">
      <div class="small text-muted mb-2">系统部署概览</div>
    </div>
    <p><strong>研发周期：</strong>约 3 个月（2024-02 ~ 2024-04）。</p>
    <p><strong>试点场景：</strong>天府国际机场 PRT 胶囊运输示范区。</p>
  </div>
</div>

<hr>

<!-- 系统架构 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>系统架构概览</h3>
    <p>前端：基于天地图 API 的车辆调度可视化平台，提供实时轨迹、起终点管理、RFID 路网标记显示。</p>
    <p>后端：C++ 控制接口与 Web 前端双向通信，支持车辆定位、调度指令下发及状态回传。</p>
    <div class="text-center">
      <img src="{{ img_dir | append: '/system_arch.jpg' | relative_url }}" alt="系统架构图" class="img-fluid mb-1" style="max-height:400px; object-fit:cover;">
      <div class="small text-muted mb-3">系统架构图</div>
    </div>
  </div>
</div>

<!-- 核心前端功能 -->
<div class="row mb-4">
  <div class="col-12">
    <h4>核心前端功能实现</h4>
    <ul>
      <li>动态加载多层级地图图层，实现不同缩放级别下轨迹与RFID显示优化。</li>
      <li>车辆轨迹绘制与实时更新，支持轨迹扩展、删除与选择操作。</li>
      <li>起点/终点选择逻辑，结合 RFID 定位点，实现调度任务创建与指令下发。</li>
      <li>前端与 C++ 控制接口交互，实现指令回传与实时状态同步。</li>
    </ul>
    <div class="text-center">
      <img src="{{ img_dir | append: '/cover.jpg' | relative_url }}" alt="前端功能示意图" class="img-fluid mb-1" style="max-height:400px; object-fit:cover;">
      <div class="small text-muted mb-3">前端地图调度界面示意</div>
    </div>
  </div>
</div>

<!-- 技术栈 -->
<div class="row mb-4">
  <div class="col-12">
    <h4>技术栈</h4>
    <p>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">天地图 API</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">JavaScript</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">C++</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">Qt WebChannel</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">HTML/CSS</span>
    </p>
  </div>
</div>

<hr>

<!-- 样式优化 -->
<style>
/* 图片统一样式 */
img.img-fluid {
  max-width: 100%;
  height: auto;
  display: block;
}
.text-center img {
  display: inline-block;
  margin: 0 auto;
}

/* Badge风格统一 */
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

---
layout: page
title: 基于球型摄像机的自适应道路结构识别与违法检测
description: 与成都市交通管理局合作，基于球机视频智能分析实现道路结构动态提取与违法检测，支撑交通设施数字化管理升级。
importance: 2
category: work
related_publications: false
tags: [球型摄像机, 道路结构识别, 违法检测, 实时定位]
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
      本项目与成都市交通管理局合作，基于球型摄像机视频智能分析，实现道路结构动态提取与违法检测，
      支撑交通设施数字化管理升级。核心实现全景语义图构建与实时目标定位分析，覆盖车道线、斑马线、导流线等关键道路要素。
    </p>
  </div>
</div>

<!-- KPI / 核心成果 -->
<div class="row text-center mb-4 kpi-cards">
  {% assign kpi_list = 
    "道路要素识别mIoU:92.3%,压实线变道检测准确率:92.6%,标准采集视角:15,全景拼接覆盖角度:360°" | split: "," %}
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
      <li><strong>算法设计：</strong>多帧图像融合与背景净化，BiSeNetv2语义分割道路要素提取。</li>
      <li><strong>全景拼接：</strong>柱面投影 + SIFT/FLANN特征匹配，实现全角度无盲区全景实景图与语义图构建。</li>
      <li><strong>实时目标定位：</strong>PTZ参数快速映射实时图像至全景图，模板匹配实现高精度定位，结合霍夫直线提取车道线。</li>
      <li><strong>算法部署：</strong>Docker容器化边缘部署，实现视频流实时处理与违法车辆检测。</li>
    </ul>
  </div>
</div>

<hr>

<!-- 技术细节 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>技术细节</h3>

    <!-- 数据采集与背景净化 -->
    <h4>数据采集与背景净化</h4>
    <p>对球型摄像机进行360°水平扫描，15个标准采集视角，每个视角停留15秒。通过多帧图像融合和背景建模消除动态干扰，得到干净道路背景，并进行语义分割，生成分割图。</p>
    <div class="row mb-2">
      {% assign imgs = "raw_bg.png|实景背景图,seg_bg.png|语义分割图" | split: "," %}
      {% for img_pair in imgs %}
        {% assign parts = img_pair | split: "|" %}
        <div class="col-12 text-center mb-2">
          <img src="{{ img_dir | append: '/' | append: parts[0] | relative_url }}" 
               alt="{{ parts[1] }}" 
               class="img-fluid" 
               style="height:auto; width:100%; object-fit:cover;">
          <div class="small text-muted mt-1">{{ parts[1] }}</div>
        </div>
      {% endfor %}
    </div>

    <!-- 全景图构建 -->
    <h4>全景图构建</h4>
    <p>通过柱面投影矫正几何畸变，利用SIFT/FLANN特征匹配，将各采集视角的背景图和语义图拼接成完整全景实景图与全景语义图。</p>
    <div class="row mb-2 justify-content-center">
      {% assign imgs = "panorama_real.png|全景实景图,panorama_seg.png|全景语义图" | split: "," %}
      {% for img_pair in imgs %}
        {% assign parts = img_pair | split: "|" %}
        <div class="col-12 col-md-6 text-center mb-2">
          <img src="{{ img_dir | append: '/' | append: parts[0] | relative_url }}" 
               alt="{{ parts[1] }}" 
               class="img-fluid" 
               style="height:auto; width:100%; object-fit:cover;">
          <div class="small text-muted mt-1">{{ parts[1] }}</div>
        </div>
      {% endfor %}
    </div>

    <!-- 实时图像匹配与道路结构提取 -->
    <h4>实时图像匹配与道路结构提取</h4>
    <p>获取实时图像，进行柱面投影和PTZ参数粗匹配，利用SIFT/FLANN实现精确模板匹配，在全景语义图上逆变换提取对应语义区域，最终基于霍夫直线与线段聚合算法生成车道线结构化数据。</p>
    <div class="row mb-2 justify-content-center">
      {% assign imgs = "realtime_match.png|实时匹配流程图" | split: "," %}
      {% for img_pair in imgs %}
        {% assign parts = img_pair | split: "|" %}
        <div class="col-12 text-center mb-2">
          <img src="{{ img_dir | append: '/' | append: parts[0] | relative_url }}" 
               alt="{{ parts[1] }}" 
               class="img-fluid" 
               style="height:auto; width:100%; object-fit:cover;">
          <div class="small text-muted mt-1">{{ parts[1] }}</div>
        </div>
      {% endfor %}
    </div>

    <!-- 算法开发与 Docker 部署 -->
    <h4>算法开发与 Docker 部署</h4>
    <p>在完成全景语义图构建与实时目标定位算法设计后，我进一步负责核心算法的开发与系统落地部署：</p>
    <ul>
      <li><strong>压实线变道检测算法开发：</strong>基于实时分割结果图和车道线提取结果，设计特征工程与规则判定相结合的检测算法，实现车辆压实线行为的自动识别，准确率 <strong>92.6%</strong>。</li>
      <li><strong>Docker 容器化封装：</strong>将算法及依赖环境封装到 Docker 容器中，确保在边缘计算节点可快速部署，解决依赖冲突与版本一致性问题。</li>
      <li><strong>边缘节点实时处理：</strong>在交管局的边缘计算节点部署容器，实现视频流实时接入、处理与违法车辆检测。通过 Kafka 异步消息队列传输检测结果，实现跨节点数据同步和高效报警触发。</li>
      <li><strong>系统可扩展性：</strong>设计容器化部署方案，便于未来增加更多交叉口、多摄像机节点的扩展，无需修改核心算法。</li>
    </ul>
    <p>通过以上工作，系统不仅完成算法验证，也实现了从实验室到交管局边缘节点的完整落地，保障实时交通违法检测和道路结构分析的可用性。</p>

  </div>
</div>

<hr>

<!-- 技术栈 -->
<div class="row mb-4">
  <div class="col-12">
    <h4>技术栈</h4>
    <p>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">PyTorch</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">语义分割</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">SIFT / FLANN</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">Kafka</span>
      <span class="badge" style="background-color:var(--global-theme-color); color:var(--global-card-bg-color); margin-right:.25rem">Docker</span>
    </p>
  </div>
</div>

<hr>

<!-- 结论与下一步计划 -->
<div class="row mb-4">
  <div class="col-12">
    <h3>结论与下一步计划</h3>
    <p><strong>结论：</strong>本项目成功实现了基于球型摄像机的视频实时分析，完成道路结构要素提取和压实线变道检测算法部署，系统在现场运行稳定，核心指标准确率达到 <strong>92.6%</strong>，全景语义图构建与实时定位效果良好。</p>
    <p><strong>下一步计划：</strong></p>
    <ul>
      <li>优化全景图拼接精度，减少垂直与水平视角拼接误差，提高特征匹配鲁棒性。</li>
      <li>提升实时目标定位速度与精度，优化PTZ参数映射与模板匹配算法。</li>
      <li>进一步增强背景净化与动态干扰滤除能力，改善复杂交通场景下的语义分割效果。</li>
      <li>完善Docker部署流程，确保边缘节点在长时间运行下的稳定性和可维护性。</li>
    </ul>
  </div>
</div>


<!-- 样式优化 -->
<style>
img.img-fluid { max-width: 100%; height: auto; display: block; }
.text-center img { display: inline-block; margin: 0 auto; }
.badge { font-size: 0.75rem; padding: 0.35em 0.6em; }
</style>

<!-- 初始化 GLightbox -->
<script>
document.addEventListener('DOMContentLoaded', function () {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox', touchNavigation:true, loop:true });
  }
});
</script>

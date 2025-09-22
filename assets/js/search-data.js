// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-项目与实习",
          title: "项目与实习",
          description: "项目经历与实习",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-个人简历",
          title: "个人简历",
          description: "韩晗-计算机视觉-西南交通大学",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-博客",
          title: "博客",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "dropdown-生活",
              title: "生活",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/life/";
              },
            },{id: "post-yolo目标检测系列解析-从yolov1到yolov11",
        
          title: "YOLO目标检测系列解析——从YOLOv1到YOLOv11",
        
        description: "YOLO目标检测算法介绍，包括基础YOLO及YOLOv2、YOLOv3、YOLOv4的网络结构、技术要点和优势缺点分析。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/yolo/";
          
        },
      },{id: "post-目标检测-ssd单阶段检测器解析",
        
          title: "目标检测——SSD单阶段检测器解析",
        
        description: "SSD（Single Shot MultiBox Detector）单阶段目标检测器详细解析，包括网络结构、推理流程、训练策略与优势劣势分析。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ssd/";
          
        },
      },{id: "post-目标检测two-stage算法解析",
        
          title: "目标检测Two-Stage算法解析",
        
        description: "Two-Stage目标检测算法详细解析，包括R-CNN、SPP-Net、Fast R-CNN、Faster R-CNN及R-FCN的网络结构、处理流程与优化策略。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/twostage/";
          
        },
      },{id: "post-目标检测基础-two-stage与one-stage方法",
        
          title: "目标检测基础——Two-Stage与One-Stage方法",
        
        description: "目标检测算法概述，包括检测任务引入、Two-Stage与One-Stage方法、滑动窗口、选择性搜索和RPN的基本原理与网络结构。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/detection-intro/";
          
        },
      },{id: "post-多模态视觉大模型解析-sam",
        
          title: "多模态视觉大模型解析——SAM",
        
        description: "SAM（Segment Anything Model）及其提示驱动分割机制解析，同时浅述 DINOv2 与未来分割趋势。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/sam/";
          
        },
      },{id: "post-多模态视觉大模型解析-clip",
        
          title: "多模态视觉大模型解析——CLIP",
        
        description: "多模态视觉大模型CLIP解析，包括模型结构、训练机制、0样本分类及无监督视频-文本匹配算法。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/clip/";
          
        },
      },{id: "post-基于transformer的分割模型解析-setr-segmenter-segformer与maskformer",
        
          title: "基于Transformer的分割模型解析——SETR、Segmenter、SegFormer与MaskFormer",
        
        description: "从 ViT 发展而来的语义分割模型，包括 SETR、Segmenter、SegFormer，以及实例分割的 MaskFormer/Mask2Former，解析其编码器、解码器与核心机制。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/transformer-segment/";
          
        },
      },{id: "post-基于transformer的视觉backbone-vit与mae",
        
          title: "基于Transformer的视觉Backbone——ViT与MAE",
        
        description: "在 CNN → 高效轻量化分割 → Transformer 的发展脉络下，ViT与MAE为视觉任务提供了全局建模能力，并为后续分割、识别任务奠定基础。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/transformer-backbone-vit/";
          
        },
      },{id: "post-transformer架构浅述",
        
          title: "Transformer架构浅述",
        
        description: "Transformer 以自注意力机制为核心，突破了卷积的局部性限制，能够直接建模全局依赖。在语义分割的发展脉络中，它代表着从高效CNN迈向全局建模的新阶段。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/transformer-intro/";
          
        },
      },{id: "post-高效语义分割-bisenetv2的网络设计与训练策略",
        
          title: "高效语义分割——BiSeNetv2的网络设计与训练策略",
        
        description: "BiSeNetv2 通过双分支结构同时保留空间细节与全局语义信息，实现轻量高效的语义分割，兼顾速度与精度。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/bisenetv2/";
          
        },
      },{id: "post-语义分割发展历程-fcnn-segnet-u-net-pspnet与deeplab",
        
          title: "语义分割发展历程——FCNN、SegNet、U-Net、PSPNet与DeepLab",
        
        description: "从FCN到DeepLab，全面梳理语义分割模型的演化、特点与技术细节，帮助理解空间细节与上下文语义如何结合。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/development-cnn-segment/";
          
        },
      },{id: "post-语义分割入门-你必须掌握的核心概念",
        
          title: "语义分割入门——你必须掌握的核心概念",
        
        description: "从传统图像分割方法到FCN，再到空间细节与上下文语义的结合，快速理解语义分割的基础与关键思路。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/segment-background/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "life-2022年-秋",
          title: '2022年·秋',
          description: "我言秋日胜春朝——一些个秋游和日常记录🍂",
          section: "Life",handler: () => {
              window.location.href = "/life/22autumn/";
            },},{id: "life-2023年-秋",
          title: '2023年·秋',
          description: "如果一直是好天气我还是勉强接受他宜居城市这个说法的🏕️",
          section: "Life",handler: () => {
              window.location.href = "/life/23autumn/";
            },},{id: "life-2023年-毕业",
          title: '2023年·毕业',
          description: "前途似海👩‍🎓来日方长",
          section: "Life",handler: () => {
              window.location.href = "/life/23graduate/";
            },},{id: "life-2023年-春",
          title: '2023年·春',
          description: "和葛亮兄赏花观鸟游山玩水的春天🌿",
          section: "Life",handler: () => {
              window.location.href = "/life/23spring/";
            },},{id: "life-2024年-恩施",
          title: '2024年·恩施',
          description: "葛亮玄德再聚首👩‍🤝‍👩",
          section: "Life",handler: () => {
              window.location.href = "/life/24enshi/";
            },},{id: "life-2024年-黄龙九寨",
          title: '2024年·黄龙九寨',
          description: "和叽咪两天体验四季🤠",
          section: "Life",handler: () => {
              window.location.href = "/life/24jiuzhai/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-eye交通视频处理平台",
          title: 'EYE交通视频处理平台',
          description: "EYE交通视频处理平台由视频处理网站与交通分析软件双端构成，实现视频上传处理、轨迹生成及交通分析等功能。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work/eye/";
            },},{id: "projects-炸街车辆智能监测系统",
          title: '炸街车辆智能监测系统',
          description: "基于云-边协作与音视频多模态 AI，实现炸街（飙车）事件的实时检测、车辆定位与可视化执法支持。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work/frystreet/";
            },},{id: "projects-天府机场prt胶囊自动驾驶调度系统",
          title: '天府机场PRT胶囊自动驾驶调度系统',
          description: "国内首套群体协同式胶囊无人驾驶运输系统，实现单车智能控制、多车协同与全局自动调度。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work/prt/";
            },},{id: "projects-基于球型摄像机的自适应道路结构识别与违法检测",
          title: '基于球型摄像机的自适应道路结构识别与违法检测',
          description: "与成都市交通管理局合作，基于球机视频智能分析实现道路结构动态提取与违法检测，支撑交通设施数字化管理升级。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work/ptz_adapt/";
            },},{id: "projects-交通设施数字化与系统开发",
          title: '交通设施数字化与系统开发',
          description: "基于城市道路与高速公路编码体系，实现交通设施结构化管理与可视化系统。",
          section: "Projects",handler: () => {
              window.location.href = "/projects/work/roadcode/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%37%30%39%38%31%30%34%35%30@%71%71.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

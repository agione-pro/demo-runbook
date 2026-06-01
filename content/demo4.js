// AGIone Demo Runbook — FAQ content
// Customer MaaS questions grouped by demo role and secondary topic.

/* global demos, contentMap */

demos[4] = {
    title: "FAQ",
    subtitle: "Customer MaaS questions grouped by AGIone platform roles",
    steps: [
      {
        id:"d4-highlevel", phase:"functions", phaseLabel:"FAQ", role:"Solution Architect", groupLabel:"Design & Security",
        title:"High-Level Design FAQ",
        subtitle:"",
        content:"faqHighLevel"
      },
      {
        id:"d4-security", phase:"functions", phaseLabel:"FAQ", role:"Enterprise Admin", groupLabel:"Design & Security",
        title:"Security & Governance FAQ",
        subtitle:"",
        content:"faqSecurity"
      },
      {
        id:"d4-operator", phase:"functions", phaseLabel:"FAQ", role:"Operator", groupLabel:"Role-Based Answers",
        title:"Operator FAQ",
        subtitle:"",
        content:"faqOperator"
      },
      {
        id:"d4-provider", phase:"functions", phaseLabel:"FAQ", role:"Provider", groupLabel:"Role-Based Answers",
        title:"Provider FAQ",
        subtitle:"",
        content:"faqProvider"
      },
      {
        id:"d4-enduser", phase:"functions", phaseLabel:"FAQ", role:"End User", groupLabel:"Role-Based Answers",
        title:"End User & Developer FAQ",
        subtitle:"",
        content:"faqEndUser"
      },
      {
        id:"d4-service", phase:"functions", phaseLabel:"FAQ", role:"Service", groupLabel:"Service",
        title:"Service FAQ",
        subtitle:"",
        content:"faqService"
      }
    ]
  };

function answerHtml(answer){
  const text = Array.isArray(answer) ? answer.join(" ") : answer;
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  const paragraphs = [];

  for(let i = 0; i < sentences.length; i += 2){
    paragraphs.push(sentences.slice(i, i + 2).join(" "));
  }

  return `
    <div class="faq-a">
      <span class="faq-a-label">A:</span>
      <div class="faq-a-body">
        ${paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}
      </div>
    </div>`;
}

function faqSections(sections){
  return sections.map(section => `
    <div class="faq-card">
      <div class="faq-title">${section.title}</div>
      <div class="faq-list">
        ${section.items.map(item => `
          <div class="faq-item">
            <div class="faq-head"><div class="faq-q">Q: ${item.q}</div></div>
            ${answerHtml(item.a)}
            ${item.demo ? `<div class="tag-row" style="margin-top:10px"><span class="tag-chip" style="border-color:rgba(34,211,238,0.35);color:#67e8f9">${item.demo}</span></div>` : ''}
            ${item.image ? `<div class="faq-evidence"><img src="${item.image}" alt="${item.imageAlt || item.q}"></div>` : ''}
          </div>`).join('')}
      </div>
    </div>
  `).join('');
}

Object.assign(contentMap, {

faqOperator: ()=> faqSections([
  {
    title:"Resource Scheduling & Governance",
    items:[
      {status:"Answered", kind:"demo", q:"How does AGIone support simultaneous scheduling and workload distribution across Ascend NPU and GPU nodes within HCS?", a:"GPU/NPU nodes are managed by Kubernetes with the Kubernetes device plugin. Different GPU/NPU card types can be tagged and scheduled based on tags and resource quota requirements.", demo:"Infrastructure → GPU Resources / Resource Pool", image:"screenshots/faq/infrastructure-spec-metrics.png", imageAlt:"Infrastructure resource metrics"},
      {status:"Answered", kind:"demo", q:"How are GPU/NPU allocation profiles, self-service deployments and resource governance handled?", a:"Kubernetes YAML files for deployments or jobs define GPU/NPU allocation. Customers can perform self-service model deployments through the UI by creating Kubernetes jobs or deployments with operator-managed model templates, or by providing a specified command. Resource governance is managed by the operator, who allocates resource quotas to customers.", demo:"Deploy Model / Resource Pool", image:"screenshots/faq/resource-quotas.png", imageAlt:"Resource quota governance"},
      {status:"Answered", kind:"partial", q:"What HCS Atlas card sharing options are available, and are there Huawei equivalents for NVIDIA Time-slicing, MIG and vGPU?", a:"GPU sharing is not supported by default, but HAMi can be integrated as a GPU/NPU scheduler."}
    ]
  },
  {
    title:"Scaling & Cluster Expansion",
    items:[
      {status:"Answered", kind:"demo", q:"Can model deployments be resized on the fly between different card counts, such as 1-card and 4-card configurations?", a:"AGIone supports different card configurations such as 1-card or 4-card. It does not resize a running model instance in place. The recommended workflow is to deploy a new instance with the target card configuration, validate it, switch the service endpoint or routing, and remove the old instance. The client-facing endpoint, API key and model ID can remain unchanged when exposed through AGIone model service.", demo:"Deploy Model / Aggregate Routing", image:"screenshots/d1-pr2-deploy.png", imageAlt:"Model deployment resource selection"},
      {status:"Answered", kind:"demo", q:"How does AGIone handle adding new hardware and auto-discovering compute resources?", a:"New GPU/NPU hardware is first joined into Kubernetes. AGIone periodically checks nodes, available GPU/NPU resources, health, labels and capacity, then updates the cluster resource inventory. This is Kubernetes node management plus AGIone scheduled resource synchronization, not full hardware-level plug-and-play.", demo:"Cluster / Resource Pool", image:"screenshots/faq/cluster-registration.png", imageAlt:"Cluster registration"}
    ]
  },
  {
    title:"Multi-Card & Distributed Runtime",
    items:[
      {status:"Answered", kind:"pending", q:"How is GPU-to-GPU or NPU-to-NPU communication handled for multi-card models, and is an NVLink equivalent available?", a:"Inter-card communication is a hardware-platform capability. AGIone can schedule workloads to multiple GPU/NPU cards on the same worker node through Kubernetes, but the actual communication mechanism depends on server hardware, driver stack and Ascend interconnect architecture. NVLink-equivalent capability should be confirmed by Huawei for the target HCS and Ascend configuration."},
      {status:"Answered", kind:"partial", q:"How does AGIone support distributed serving across multiple worker nodes and HPC environments similar to NVSwitch?", a:"Customers can create multi-node clusters connected through the RAY framework. An RDMA network is required."}
    ]
  },
  {
    title:"Infrastructure Monitoring",
    items:[
      {status:"Answered", kind:"demo", q:"How are HCS infrastructure and hardware metrics collected?", a:"NPU/GPU card metrics are collected through NPU exporters or the DCGM exporter. CPU, RAM and ephemeral disk metrics are collected through the Kubernetes Metrics Server. The DCGM exporter is deployed when GPU nodes are managed.", demo:"Resource Monitoring", image:"screenshots/d1-op3-gpu.png", imageAlt:"GPU resource monitoring"},
      {status:"Answered", kind:"demo", q:"How does AGIone support real-time health monitoring and consumption reporting for billing or chargebacks?", a:"NPU/GPU card metrics are collected through NPU exporters or the DCGM exporter. CPU, RAM and ephemeral disk metrics are collected through the Kubernetes Metrics Server.", demo:"Customer Calls / Monitoring", image:"screenshots/faq/customer-calls.png", imageAlt:"Customer calls and usage monitoring"}
    ]
  }
]),

faqHighLevel: ()=> faqSections([
  {
    title:"Deployment Architecture",
    items:[
      {status:"Answered", kind:"demo", q:"Can AGIone demonstrate on-prem and on-cloud deployment architecture, including with and without ModelArts?", a:"AGIone supports two integration modes. First, it can integrate with an existing AI/model management platform, such as ModelArts, when complete and stable APIs are available. AGIone can use AK/SK and platform APIs for deployment, resource synchronization, cluster/resource management and monitoring. Second, AGIone can use Kubernetes-native deployment when the AI management platform or required APIs are unavailable, directly managing GPU/NPU nodes, workloads, scheduling, lifecycle and resource inventory through Kubernetes.", demo:"On-Prem Deploy & Publish"}
    ]
  },
  {
    title:"Scale Design",
    items:[
      {status:"Answered", kind:"partial", q:"What are the maximum cluster size constraints for total nodes and GPU/NPU counts?", a:"For inference clusters, AGIone has been deployed and validated with approximately 48 worker nodes in existing project scenarios. As a best practice, we recommend keeping a single inference cluster within 100 nodes. This is not a hard AGIone software limit, but a practical recommendation based on Kubernetes management, scheduling efficiency, monitoring overhead, network design and operational complexity. Larger deployments should divide resources into multiple clusters or resource pools and be validated with the HCS/Kubernetes configuration."}
    ]
  },
  {
    title:"Underlying Infrastructure Design",
    items:[
      {status:"Answered", kind:"partial", q:"Does HCS support distributed workloads or direct RAY framework support similar to OpenShift AI?", a:"Customers can create multi-node clusters connected through the RAY framework. An RDMA network is required. Distributed model training/inference and RAY framework support are available."}
    ]
  },
  {
    title:"Migration & Client Continuity",
    items:[
      {status:"Answered", kind:"demo", q:"How much effort is required to migrate existing model deployments from OpenShift AI to HCS ModelArts?", a:"Existing OpenShift AI deployments are not directly compatible and must be redeployed. However, models deployed on OpenShift AI can be published through AGIone by configuring the endpoint, API key and model ID.", demo:"Public Model Publish / External Endpoint", image:"screenshots/d3-pr2-source.png", imageAlt:"External model source information"},
      {status:"Answered", kind:"demo", q:"If Qwen 3.5 235B moves from OpenShift/NVIDIA to HCS/Atlas, does client-side application integration remain unchanged?", a:"A model service is provided. If Qwen 3.5 235B is deployed on OpenShift/NVIDIA or HCS/Atlas, the deployments can be aggregated as a single model service with a static model ID, endpoint and API key. In that case, no client-side changes are required.", demo:"Aggregate Model / Quick Start", image:"screenshots/faq/aggregated-model.png", imageAlt:"Aggregated model service"}
    ]
  }
]),

faqProvider: ()=> faqSections([
  {
    title:"Model Marketplace & Onboarding",
    items:[
      {status:"Answered", kind:"demo", q:"How are model download and deployment executed through UI or CLI, and are ServingRuntime/KServe objects used?", a:"Shared storage such as NAS or a local path is provided and can be managed by the operator. It can be attached to Kubernetes-managed NPU/GPU clusters. Operators can download models from Hugging Face or ModelScope through the UI, or download them in a background terminal and store them in the specified path. Before deployment starts, shared storage is mounted to pod instances. Model deployment can then use operator-managed templates to start Kubernetes jobs or deployments, or use a specified command. UI deployment is supported. CLI deployment was not supported in the previous answer. ServingRuntime/KServe objects are not used.", demo:"Model Template / Deploy Model", image:"screenshots/d1-pr1-template.png", imageAlt:"Model template selection"},
      {status:"Answered", kind:"demo", q:"What is the onboarding pipeline for new models, including tuning and Ascend-specific optimization such as quantization?", a:"Models are packaged by the operator using inference templates, including inference base images such as vLLM, SGLang or MindIE, resource flavors, startup commands and other required parameters. The packaged models are tested in the background before release.", demo:"Model Template", image:"screenshots/faq/model-template-components.png", imageAlt:"Model template components"},
      {status:"Answered", kind:"demo", q:"Is there a unified model registry to manage versioning, deployment status and health of active models?", a:"AGIone provides a centralized Model Config / Model Detail view for managing model templates and model versions. Operators can view model information, version configurations, tags, source type, hardware specifications, CPU, memory, GPU/NPU card requirements and inference frameworks. They can also edit or delete model versions. Runtime deployment and health status depend on the deployment backend and monitoring data exposed by Kubernetes or the underlying AI management platform.", demo:"Model Config / Model Detail", image:"screenshots/faq/model-template-components.png", imageAlt:"Model configuration details"}
    ]
  },
  {
    title:"Inference Runtime",
    items:[
      {status:"Answered", kind:"demo", q:"Can vLLM properties be managed and tuned within HCS ModelArts, and is native vLLM supported in HCS base images?", a:"Operator users can manage vLLM properties when creating inference templates. Customers can define vLLM properties in the startup command when deploying without inference templates. When inference starts with vLLM, the metrics exporter is enabled and metrics can be accessed through an API.", demo:"Inference Template", image:"screenshots/faq/model-template-components.png", imageAlt:"Inference template runtime parameters"},
      {status:"Answered", kind:"demo", q:"What alternative inference engines are supported, such as standalone vLLM and Llama-server/llama.cpp?", a:"Inference base images with AI frameworks can be customized beyond vLLM, including SGLang and MindIE. Startup properties can be managed for each framework. Operators can assign different tags to images with different AI framework environments for inference, training or development IDEs.", demo:"Inference Template", image:"screenshots/faq/model-template-components.png", imageAlt:"Inference framework template components"},
      {status:"Answered", kind:"demo", q:"How are inference server statistics collected and aligned with Kubernetes metrics?", a:"When inference is started with the vLLM framework, the metrics exporter is enabled and metrics can be accessed through an API.", demo:"API / Metrics"}
    ]
  },
  {
    title:"Model Service, Routing & Updates",
    items:[
      {status:"Answered", kind:"demo", q:"How does AGIone support model updates and hot-swapping without changing API endpoints or causing downtime?", a:"For a single model, AGIone provides a static model ID, API key and endpoint. The model can be managed across versions while retaining the same API key and endpoint. A new version can be deployed and tested in the background, then published. For aggregated models, multiple single models can be combined and individually enabled or disabled behind a static model ID, API key and endpoint.", demo:"Aggregate Model Publish", image:"screenshots/d2-pr2-create.png", imageAlt:"Create aggregated model"},
      {status:"Answered", kind:"demo", q:"How can multiple models be combined into a unified workflow with failover between different hardware types?", a:"A model service is provided. For aggregated models, a static model ID, API key and endpoint are provided, and multiple single models can be combined and individually enabled or disabled.", demo:"Aggregate Model Publish", image:"screenshots/d2-pr3-routing.png", imageAlt:"Aggregated model routing strategy"}
    ]
  },
  {
    title:"Tenant Controls",
    items:[
      {status:"Answered", kind:"partial", q:"How does AGIone enforce TPS/token limits or rate-limiting for specific users or API keys?", a:"AGIone currently supports rate limiting at the tenant and model level in the new version. Operators can configure global rate limits for a model under a tenant, or define tenant-level limits for specific models. This can control TPS or token consumption at the tenant-model level. AGIone does not currently support rate limiting based on an individual API key.", demo:"Publish Model / Rate Limit", image:"screenshots/d3-pr3-billing.png", imageAlt:"Model billing and limit configuration"},
      {status:"Answered", kind:"partial", q:"Can AGIone demonstrate tenant management, user accounts, model access permissions, pricing and usage limits?", a:"AGIone already supports customer and tenant management capabilities in the current version branch. Operators can create customer or tenant accounts, configure model access permissions and define customized pricing or usage limits. This capability is planned to be officially released by the end of this month.", demo:"Tenant Management", image:"screenshots/faq/resource-quotas.png", imageAlt:"Tenant resource quota configuration"}
    ]
  }
]),

faqEndUser: ()=> faqSections([
  {
    title:"Development Workbench",
    items:[
      {status:"Answered", kind:"partial", q:"What developer environments are provided, and are Jupyter or CodeServer available with direct GPU/NPU access?", a:"A web-based IDE, including Jupyter and CodeServer, is provided for development. Users can create a development IDE with the required CPU/NPU resource flavor."}
    ]
  }
]),

faqSecurity: ()=> faqSections([
  {
    title:"Access & Authentication",
    items:[
      {status:"Answered", kind:"demo", q:"Does AGIone support end-to-end API key lifecycle management, including creation, rotation and revocation?", a:"Yes.", demo:"API Key Management", image:"screenshots/faq/api-key-list.png", imageAlt:"API key management list"},
      {status:"Answered", kind:"demo", q:"How does AGIone integrate with corporate authentication and ensure secure model-to-application communication?", a:"AGIone supports OAuth2-based authentication integration with third-party or corporate identity systems. After users are authenticated, they can access model services through AGIone model authentication credentials such as AK/SK. This allows integration with enterprise authentication while maintaining secure model-to-application access control.", demo:"Authentication / AK/SK", image:"screenshots/faq/api-key-list.png", imageAlt:"Model authentication credentials"}
    ]
  },
  {
    title:"Tenant Isolation",
    items:[
      {status:"Answered", kind:"demo", q:"How does AGIone ensure data, prompt and model isolation between external consumers or bank departments?", a:"AGIone supports tenant-level isolation.", demo:"Tenant / Permission Management", image:"screenshots/faq/resource-quotas.png", imageAlt:"Tenant resource quota isolation"},
      {status:"Answered", kind:"risk", q:"When multi-tenant requests share the same model instance and hardware, how are KV cache isolation and automatic prefix caching handled?", a:"KV cache and prefix caching are supported. Calls from different customers are not distinguished for these cache capabilities."}
    ]
  },
  {
    title:"AI Security",
    items:[
      {status:"Answered", kind:"partial", q:"Does HCS provide native AI security solutions such as model scanning, guardrails, LLM firewall, data masking and compliance frameworks?", a:"None by default. The platform can be integrated with third-party AI security solutions."}
    ]
  }
]),

faqService: ()=> faqSections([
  {
    title:"Marketplace Service Process",
    items:[
      {status:"Answered", kind:"partial", q:"What is the SLA for making newly released open-source or commercial models available in the partner marketplace?", a:"Models are packaged by the operator using inference templates, including inference base images such as vLLM, SGLang or MindIE, resource flavors, startup commands and other required parameters. The packaged models are tested in the background before release.", image:"screenshots/faq/model-publish.png", imageAlt:"Model publishing process"}
    ]
  },
  {
    title:"SLA & Benchmark",
    items:[
      {status:"Huawei", kind:"pending", q:"Does the MaaS solution provide SLA for on-prem deployments, guaranteed token throughput and official Atlas benchmark results?", a:"This needs to be answered by Huawei."}
    ]
  },
  {
    title:"Responsibility Matrix",
    items:[
      {status:"Joint Discussion", kind:"pending", q:"How should Huawei and IBTECH responsibilities be split across platform upgrades, software installation, model deployments and external integrations?", a:"This needs to be discussed further as a responsibility matrix."}
    ]
  }
])

});

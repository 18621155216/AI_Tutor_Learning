# Lesson 14: Client Storage & Performance (客户端存储与性能优化策略)

## 核心原理 (Principles)

### 1. 客户端存储 (Client-side Storage)
- **`LocalStorage`**：
    - **特点**：持久化存储，无过期时间，除非手动清除。
    - **容量**：5-10MB。
    - **用途**：用户偏好、离线数据。
- **`SessionStorage`**：
    - **特点**：会话级存储，浏览器标签页关闭即清除。
    - **容量**：5-10MB。
    - **用途**：表单进度、购物车。
- **`Cookie`**：
    - **特点**：服务器设置，每次请求自动发送，容量小 (4KB)。
    - **用途**：身份验证、会话管理。

### 2. 资源预加载 (Resource Preloading)
- **`<link rel="preload">`**：
    - **作用**：强制浏览器立即下载并缓存关键资源（如字体、CSS、JS）。
    - **注意**：必须指定 `as` 属性（如 `as="font"`）。
- **`<link rel="prefetch">`**：
    - **作用**：空闲时下载并缓存非关键资源，以备将来使用。
    - **优先级**：较低。
- **`<link rel="prerender">`**：
    - **作用**：预渲染整个页面，用户点击时瞬间显示。
    - **注意**：资源消耗大，慎用。

---

## 最佳实践 (Best Practices)
- **LocalStorage 安全**：不要存储敏感信息，或进行加密处理。
- **合理选择存储**：根据数据生命周期选择 `LocalStorage` 或 `SessionStorage`。
- **关键资源 `preload`**：确保首屏渲染所需的关键资源被优先加载。
- **非关键资源 `prefetch`**：利用浏览器空闲时间，提升用户后续导航体验。

---

## 浏览器解析机制简述
- 浏览器在解析 HTML 时，会根据 `<link rel="preload">` 立即发起资源请求，但不会阻塞渲染。
- `localStorage` 和 `sessionStorage` 的数据存储在浏览器内部的键值对数据库中，通过 JavaScript API 进行读写。

import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'React 18 新特性详解',
    excerpt: '探索React 18带来的激动人心的新功能，包括并发特性、自动批处理等。',
    content: `
# React 18 新特性详解

React 18 带来了许多激动人心的新功能，让我们一起来探索这些特性。

## 并发特性 (Concurrent Features)

React 18 最重要的新特性就是并发渲染。这允许React同时准备多个版本的UI。

### 自动批处理 (Automatic Batching)

React 18 现在会自动批处理所有更新，无论它们来自哪里：

\`\`\`javascript
// React 18 之前
setTimeout(() => {
  setCount(c => c + 1); // 触发重渲染
  setFlag(f => !f);     // 触发重渲染
}, 1000);

// React 18 之后
setTimeout(() => {
  setCount(c => c + 1); // 不会触发重渲染
  setFlag(f => !f);     // 不会触发重渲染
  // 只有一次重渲染！
}, 1000);
\`\`\`

### Suspense 的改进

Suspense 现在支持服务端渲染，并且可以用于数据获取：

\`\`\`javascript
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Comments />
    </Suspense>
  );
}
\`\`\`

## 新的 Hooks

### useTransition

\`useTransition\` 让你标记某些状态更新为非紧急：

\`\`\`javascript
function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount(c => c + 1);
    });
  }

  return (
    <div>
      {isPending && <Spinner />}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
\`\`\`

### useDeferredValue

\`useDeferredValue\` 让你延迟更新某些不那么重要的部分：

\`\`\`javascript
function App() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </div>
  );
}
\`\`\`

## 总结

React 18 的这些新特性让我们的应用更加流畅和响应迅速。并发特性是React未来的重要方向，值得我们深入学习和实践。
    `,
    author: '钱诚',
    publishedAt: '2024-01-15',
    tags: ['React', 'JavaScript', '前端开发'],
    readTime: 8,
    featured: true,
  },
  {
    id: '2',
    title: 'TypeScript 高级技巧',
    excerpt: '学习TypeScript的高级类型系统，包括条件类型、映射类型和工具类型。',
    content: `
# TypeScript 高级技巧

TypeScript 的类型系统非常强大，让我们探索一些高级技巧。

## 条件类型 (Conditional Types)

条件类型允许我们根据输入类型选择输出类型：

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type Example = NonNullable<string | null | undefined>; // string
\`\`\`

## 映射类型 (Mapped Types)

映射类型允许我们从一个类型创建另一个类型：

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type User = {
  name: string;
  age: number;
};

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number; }
\`\`\`

## 工具类型

TypeScript 提供了许多内置的工具类型：

\`\`\`typescript
// Partial<T> - 使所有属性可选
type PartialUser = Partial<User>;

// Pick<T, K> - 选择特定属性
type UserName = Pick<User, 'name'>;

// Omit<T, K> - 排除特定属性
type UserWithoutAge = Omit<User, 'age'>;
\`\`\`

## 总结

掌握这些高级技巧可以让我们的TypeScript代码更加类型安全和可维护。
    `,
    author: '钱诚',
    publishedAt: '2024-01-10',
    tags: ['TypeScript', 'JavaScript', '编程'],
    readTime: 6,
  },
  {
    id: '3',
    title: '现代CSS技巧',
    excerpt: '探索现代CSS的新特性，包括Grid、Flexbox和CSS变量。',
    content: `
# 现代CSS技巧

CSS 正在快速发展，让我们看看一些现代技巧。

## CSS Grid

CSS Grid 是一个强大的布局系统：

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## CSS 变量

CSS 变量让样式更加灵活：

\`\`\`css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background-color: var(--primary-color);
}
\`\`\`

## 总结

现代CSS让我们的网页更加美观和响应式。
    `,
    author: '钱诚',
    publishedAt: '2024-01-05',
    tags: ['CSS', '前端开发', '设计'],
    readTime: 4,
  },
  {
    id: '4',
    title: 'Vue.js 响应式原理深度解析',
    excerpt: '深入理解Vue.js的响应式系统，从数据劫持到发布订阅模式的完整实现，包含源码解读和实际应用。',
    content: `
# Vue.js 响应式原理深度解析

Vue.js 的响应式系统是其核心特性之一，它通过数据劫持和发布订阅模式实现了高效的数据驱动视图更新机制。本文将深入探讨Vue.js响应式系统的实现原理，并通过源码解读来理解其内部工作机制。

## 什么是响应式系统？

响应式系统是指当数据发生变化时，能够自动更新相关的视图或执行相应的操作。在Vue.js中，当我们修改数据时，相关的DOM会自动更新，这就是响应式系统的体现。

## 响应式系统的三种实现方式

### 1. 发布者-订阅者模式（Backbone.js）

传统的发布订阅模式通过 sub/pub 的方式实现数据和视图的绑定监听：

\`\`\`javascript
// 传统方式
vm.set('property', value);
\`\`\`

这种方式比较低级，我们希望使用更直观的方式：

\`\`\`javascript
// 理想方式
vm.property = value;
\`\`\`

**优点**：实现简单，容易理解
**缺点**：需要手动调用setter方法，不够直观

### 2. 脏值检查（Angular.js）

Angular.js 通过脏值检测的方式比对数据是否有变更：

\`\`\`javascript
// 定时轮询检测数据变动
setInterval(() => {
  // 检查数据是否发生变化
}, 100);
\`\`\`

Angular 在以下事件触发时进入脏值检测：
- DOM 事件（ng-click）
- XHR 响应事件（$http）
- 浏览器 Location 变更事件（$location）
- Timer 事件（$timeout, $interval）
- 执行 $digest() 或 $apply()

**优点**：可以检测到任何数据变化
**缺点**：性能较差，需要遍历所有数据

### 3. 数据劫持（Vue.js）

Vue.js 采用数据劫持结合发布者-订阅者模式的方式，这也是最优雅的解决方案。

## Vue 2.0 响应式实现原理

### 核心概念

Vue 2.0 的响应式系统主要包含以下几个核心概念：

1. **Observer（观察者）**：负责数据劫持，将数据对象转换为响应式对象
2. **Dep（依赖收集器）**：负责收集依赖，当数据变化时通知订阅者
3. **Watcher（订阅者）**：负责订阅数据变化，执行相应的更新操作

### 源码实现

#### 1. Observer 类实现

\`\`\`javascript
// 简化版的 Observer 实现
class Observer {
  constructor(value) {
    this.value = value;
    this.dep = new Dep();
    
    // 标记对象已经被观察
    def(value, '__ob__', this);
    
    if (Array.isArray(value)) {
      // 数组的响应式处理
      this.observeArray(value);
    } else {
      // 对象的响应式处理
      this.walk(value);
    }
  }
  
  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]]);
    }
  }
  
  observeArray(items) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
}

// 将对象转换为响应式对象
function observe(value) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }
  
  let ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value)
  ) {
    ob = new Observer(value);
  }
  return ob;
}
\`\`\`

#### 2. defineReactive 函数实现

\`\`\`javascript
// 核心：数据劫持实现
function defineReactive(obj, key, val) {
  // 为每个属性创建一个依赖收集器
  const dep = new Dep();
  
  // 获取属性描述符
  const property = Object.getOwnPropertyDescriptor(obj, key);
  const getter = property && property.get;
  const setter = property && property.set;
  
  // 如果值是对象，递归观察
  let childOb = observe(val);
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      const value = getter ? getter.call(obj) : val;
      
      // 依赖收集
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      
      return value;
    },
    set(newVal) {
      const value = getter ? getter.call(obj) : val;
      
      // 避免重复设置相同的值
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return;
      }
      
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      
      // 新值也需要观察
      childOb = observe(newVal);
      
      // 通知订阅者更新
      dep.notify();
    }
  });
}
\`\`\`

#### 3. Dep 类实现

\`\`\`javascript
// 依赖收集器
class Dep {
  constructor() {
    this.subs = [];
  }
  
  addSub(sub) {
    this.subs.push(sub);
  }
  
  removeSub(sub) {
    remove(this.subs, sub);
  }
  
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this);
    }
  }
  
  notify() {
    // 稳定排序订阅者
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}

// 全局的当前正在执行的 watcher
Dep.target = null;
const targetStack = [];

function pushTarget(target) {
  if (Dep.target) targetStack.push(Dep.target);
  Dep.target = target;
}

function popTarget() {
  Dep.target = targetStack.pop();
}
\`\`\`

#### 4. Watcher 类实现

\`\`\`javascript
// 订阅者
class Watcher {
  constructor(vm, expOrFn, cb, options) {
    this.vm = vm;
    this.cb = cb;
    this.deps = [];
    this.newDeps = [];
    this.depIds = new Set();
    this.newDepIds = new Set();
    
    if (typeof expOrFn === 'function') {
      this.getter = expOrFn;
    } else {
      this.getter = parsePath(expOrFn);
    }
    
    this.value = this.get();
  }
  
  get() {
    pushTarget(this);
    let value;
    const vm = this.vm;
    
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      throw e;
    } finally {
      popTarget();
      this.cleanupDeps();
    }
    
    return value;
  }
  
  addDep(dep) {
    const id = dep.id;
    if (!this.newDepIds.has(id)) {
      this.newDepIds.add(id);
      this.newDeps.push(dep);
      if (!this.depIds.has(id)) {
        dep.addSub(this);
      }
    }
  }
  
  cleanupDeps() {
    let i = this.deps.length;
    while (i--) {
      const dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        dep.removeSub(this);
      }
    }
    
    let tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  }
  
  update() {
    if (this.lazy) {
      this.dirty = true;
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  }
  
  run() {
    const value = this.get();
    const oldValue = this.value;
    this.value = value;
    
    if (this.user) {
      try {
        this.cb.call(this.vm, value, oldValue);
      } catch (e) {
        handleError(e, this.vm, \`callback for watcher "\${this.expression}"\`);
      }
    } else {
      this.cb.call(this.vm, value, oldValue);
    }
  }
}
\`\`\`

### 数组响应式处理

Vue 2.0 对数组的响应式处理比较特殊，因为 Object.defineProperty 无法监听数组索引和长度的变化：

\`\`\`javascript
// 数组方法重写
const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

methodsToPatch.forEach(function (method) {
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args);
    const ob = this.__ob__;
    let inserted;
    
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    
    if (inserted) ob.observeArray(inserted);
    
    // 通知更新
    ob.dep.notify();
    return result;
  });
});

// 在 Observer 中应用
function observeArray(items) {
  for (let i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
  // 重写数组方法
  items.__proto__ = arrayMethods;
}
\`\`\`

## Vue 3.0 响应式实现原理

Vue 3.0 使用 Proxy 替代 Object.defineProperty，解决了 Vue 2.0 中的一些限制。

### Proxy 的优势

1. **可以监听数组索引和长度变化**
2. **可以监听对象属性的添加和删除**
3. **性能更好，不需要递归遍历**
4. **支持 Map、Set、WeakMap、WeakSet**

### 源码实现

#### 1. reactive 函数实现

\`\`\`javascript
// Vue 3.0 的 reactive 实现
function reactive(target) {
  // 如果不是对象，直接返回
  if (!isObject(target)) {
    return target;
  }
  
  // 如果已经是响应式对象，直接返回
  if (target.__v_isReactive) {
    return target;
  }
  
  // 创建响应式对象
  const proxy = new Proxy(target, {
    get(target, key, receiver) {
      // 特殊属性处理
      if (key === '__v_isReactive') {
        return true;
      }
      
      const result = Reflect.get(target, key, receiver);
      
      // 依赖收集
      track(target, key);
      
      // 如果值是对象，递归响应式
      if (isObject(result)) {
        return reactive(result);
      }
      
      return result;
    },
    
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      
      // 如果值发生变化，触发更新
      if (hasChanged(value, oldValue)) {
        trigger(target, key, value, oldValue);
      }
      
      return result;
    },
    
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key);
      const result = Reflect.deleteProperty(target, key);
      
      if (result && hadKey) {
        trigger(target, key, undefined, target[key]);
      }
      
      return result;
    }
  });
  
  return proxy;
}
\`\`\`

#### 2. track 和 trigger 函数

\`\`\`javascript
// 依赖收集
function track(target, key) {
  if (!activeEffect) return;
  
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}

// 触发更新
function trigger(target, key, newValue, oldValue) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  
  const effects = new Set();
  
  // 收集需要执行的 effect
  const add = (effectsToAdd) => {
    if (effectsToAdd) {
      effectsToAdd.forEach(effect => {
        if (effect !== activeEffect || effect.allowRecurse) {
          effects.add(effect);
        }
      });
    }
  };
  
  // 添加相关依赖
  if (key !== void 0) {
    add(depsMap.get(key));
  }
  
  // 执行 effect
  effects.forEach(effect => {
    if (effect.scheduler) {
      effect.scheduler();
    } else {
      effect.run();
    }
  });
}
\`\`\`

#### 3. effect 函数实现

\`\`\`javascript
// Vue 3.0 的 effect 实现
function effect(fn, options = {}) {
  const effect = createReactiveEffect(fn, options);
  
  if (!options.lazy) {
    effect();
  }
  
  return effect;
}

function createReactiveEffect(fn, options) {
  const effect = function reactiveEffect() {
    if (!effect.active) {
      return options.scheduler ? undefined : fn();
    }
    
    if (!effectStack.includes(effect)) {
      cleanup(effect);
      try {
        enableTracking();
        effectStack.push(effect);
        activeEffect = effect;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };
  
  effect.id = uid++;
  effect.allowRecurse = !!options.allowRecurse;
  effect._isEffect = true;
  effect.active = true;
  effect.raw = fn;
  effect.deps = [];
  effect.options = options;
  
  return effect;
}
\`\`\`

## 响应式系统的性能优化

### 1. 异步更新队列

Vue 使用异步更新队列来优化性能，避免频繁的DOM更新：

\`\`\`javascript
// 异步更新队列实现
const queue = [];
let flushing = false;
let waiting = false;

function queueWatcher(watcher) {
  const id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // 如果正在刷新，找到合适的位置插入
      let i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

function flushSchedulerQueue() {
  flushing = true;
  let watcher, id;
  
  // 排序，确保父组件在子组件之前更新
  queue.sort((a, b) => a.id - b.id);
  
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
  }
  
  // 重置状态
  flushing = waiting = false;
}
\`\`\`

### 2. 计算属性缓存

计算属性通过缓存机制避免重复计算：

\`\`\`javascript
// 计算属性实现
function computed(getter) {
  let dirty = true;
  let value;
  
  const effect = reactiveEffect(getter, {
    lazy: true,
    scheduler: () => {
      if (!dirty) {
        dirty = true;
        trigger(computedRef, 'value');
      }
    }
  });
  
  const computedRef = {
    get value() {
      if (dirty) {
        value = effect();
        dirty = false;
      }
      track(computedRef, 'value');
      return value;
    }
  };
  
  return computedRef;
}
\`\`\`

## 实际应用示例

### 1. 自定义响应式系统

\`\`\`javascript
// 简单的响应式系统实现
class SimpleReactive {
  constructor(data) {
    this.data = this.observe(data);
    this.subscribers = new Map();
  }
  
  observe(obj) {
    const self = this;
    return new Proxy(obj, {
      get(target, key) {
        // 依赖收集
        if (SimpleReactive.currentEffect) {
          if (!self.subscribers.has(key)) {
            self.subscribers.set(key, new Set());
          }
          self.subscribers.get(key).add(SimpleReactive.currentEffect);
        }
        return target[key];
      },
      
      set(target, key, value) {
        const oldValue = target[key];
        target[key] = value;
        
        // 触发更新
        if (self.subscribers.has(key)) {
          self.subscribers.get(key).forEach(effect => effect());
        }
        
        return true;
      }
    });
  }
  
  watch(effect) {
    SimpleReactive.currentEffect = effect;
    effect();
    SimpleReactive.currentEffect = null;
  }
}

// 使用示例
const reactive = new SimpleReactive({
  name: 'Vue',
  version: 3
});

reactive.watch(() => {
  console.log('数据变化:', reactive.data.name, reactive.data.version);
});

reactive.data.name = 'React'; // 触发更新
reactive.data.version = 18;   // 触发更新
\`\`\`

### 2. 响应式表单验证

\`\`\`javascript
// 响应式表单验证
class ReactiveForm {
  constructor(formData) {
    this.data = reactive(formData);
    this.errors = reactive({});
    this.rules = new Map();
  }
  
  addRule(field, rule) {
    if (!this.rules.has(field)) {
      this.rules.set(field, []);
    }
    this.rules.get(field).push(rule);
  }
  
  validate() {
    const errors = {};
    
    for (const [field, rules] of this.rules) {
      const value = this.data[field];
      
      for (const rule of rules) {
        const result = rule(value);
        if (result !== true) {
          if (!errors[field]) {
            errors[field] = [];
          }
          errors[field].push(result);
        }
      }
    }
    
    this.errors = errors;
    return Object.keys(errors).length === 0;
  }
  
  watchField(field, callback) {
    watch(() => this.data[field], callback);
  }
}

// 使用示例
const form = new ReactiveForm({
  username: '',
  email: '',
  password: ''
});

// 添加验证规则
form.addRule('username', (value) => {
  if (!value) return '用户名不能为空';
  if (value.length < 3) return '用户名至少3个字符';
  return true;
});

form.addRule('email', (value) => {
  if (!value) return '邮箱不能为空';
  if (!/^[^@]+@[^@]+\\.[^@]+$/.test(value)) return '邮箱格式不正确';
  return true;
});

// 监听字段变化
form.watchField('username', (newValue) => {
  console.log('用户名变化:', newValue);
  form.validate();
});

form.data.username = 'test'; // 触发验证
\`\`\`

## 常见问题和解决方案

### 1. 对象新增属性不响应

**问题**：Vue 2.0 中，直接给对象添加新属性不会触发响应式更新。

**解决方案**：
\`\`\`javascript
// 方法1：使用 Vue.set
Vue.set(obj, 'newProp', value);

// 方法2：使用 Object.assign
this.obj = Object.assign({}, this.obj, { newProp: value });

// 方法3：使用展开运算符
this.obj = { ...this.obj, newProp: value };
\`\`\`

### 2. 数组索引和长度变化

**问题**：Vue 2.0 中，直接修改数组索引或长度不会触发响应式更新。

**解决方案**：
\`\`\`javascript
// 方法1：使用 Vue.set
Vue.set(arr, index, value);

// 方法2：使用 splice
arr.splice(index, 1, value);

// 方法3：使用数组方法
arr.push(value);
arr.pop();
arr.splice(index, 1);
\`\`\`

### 3. 深层对象变化检测

**问题**：深层嵌套对象的变化可能不会被检测到。

**解决方案**：
\`\`\`javascript
// 使用 deep watcher
watch(() => obj.deep.nested.value, (newVal, oldVal) => {
  console.log('深层数据变化:', newVal, oldVal);
}, { deep: true });

// 或者使用 JSON.stringify
watch(() => JSON.stringify(obj), (newVal, oldVal) => {
  console.log('对象变化:', newVal, oldVal);
});
\`\`\`

## 性能优化建议

### 1. 避免深层响应式

\`\`\`javascript
// 不好的做法：深层响应式
const data = reactive({
  user: {
    profile: {
      settings: {
        theme: 'dark'
      }
    }
  }
});

// 好的做法：扁平化数据结构
const data = reactive({
  userTheme: 'dark',
  userSettings: { /* 其他设置 */ }
});
\`\`\`

### 2. 合理使用 computed

\`\`\`javascript
// 使用 computed 缓存计算结果
const expensiveValue = computed(() => {
  return heavyCalculation(props.data);
});

// 避免在模板中直接计算
// 不好的做法
<template>
  <div>{{ heavyCalculation(data) }}</div>
</template>
\`\`\`

### 3. 使用 shallowRef 和 shallowReactive

\`\`\`javascript
// 对于不需要深层响应式的数据
const largeList = shallowRef([]);
const config = shallowReactive({
  theme: 'dark',
  language: 'zh-CN'
});
\`\`\`

## 总结

Vue.js 的响应式系统通过数据劫持和发布订阅模式，实现了高效的数据驱动视图更新机制。Vue 2.0 使用 Object.defineProperty，而 Vue 3.0 使用 Proxy，在性能和功能上都有显著提升。

理解响应式原理有助于我们：
1. **更好地使用 Vue.js**：了解何时会触发更新，如何优化性能
2. **调试问题**：当数据变化没有触发更新时，知道可能的原因
3. **扩展功能**：基于响应式原理实现自定义的响应式功能
4. **面试准备**：深入理解前端框架的核心机制

响应式系统是 Vue.js 的核心，掌握其原理对于深入理解和使用 Vue.js 至关重要。
    `,
    author: '钱诚',
    publishedAt: '2024-01-20',
    tags: ['Vue.js', 'JavaScript', '前端开发', '面试题', '响应式', '源码解读'],
    readTime: 25,
    featured: true,
  },
  {
    id: '5',
    title: 'React Native 开发实战与性能优化',
    excerpt: '深入探讨React Native的优势与挑战，以及在实际项目中的性能优化策略。',
    content: `
# React Native 开发实战与性能优化

React Native 作为跨平台开发的重要解决方案，既有其独特的优势，也面临着一些挑战。

## React Native 的优势

### 1. 跨平台开发
- 只有 0.2% 的平台特定代码
- 统一的设计语言，同时支持平台差异化设计

### 2. React 生态优势
- 组件化架构，简单的生命周期
- 声明式编程，易于理解和维护
- 丰富的开源生态

### 3. 开发效率
- 热重载（Hot Reloading）提升开发速度
- 大量基础设施投入值得（网络、国际化、复杂动画等）

### 4. 性能表现
- 基本性能表现良好
- 背后是原生实现，支持复杂功能

## React Native 的挑战

### 1. 成熟度问题
- 相比 iOS 和 Android 原生，成熟度和稳定性仍有差距
- 有时需要维护自己的 RN 分支

### 2. 技术限制
- JavaScript 缺少类型系统，Flow 太严格，TS 集成有问题
- 不好重构，重构引起的错误不能在编译时被捕捉到
- JavaScriptCore 不一致性，Android 带的还是不支持 ES6 的 JSC

### 3. 性能问题
- 启动时间：RN 框架初始化需要几秒
- 新页面渲染时间：0.4 秒左右页面第一次渲染费时
- APP 大小：至少增加 12M
- 长列表渲染问题：由于异步通信机制，长列表流畅渲染依然无解

### 4. 开发体验
- 升级是个坑
- Accessibility 支持不完善
- 还有一些奇怪的 Bug 暂没有修复

## 性能优化策略

### 1. 渲染优化
\`\`\`javascript
// 使用 PureComponent 或 React.memo
const MyComponent = React.memo(({ data }) => {
  return <View>{data}</View>;
});

// 使用 shouldComponentUpdate
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data;
  }
}
\`\`\`

### 2. 列表优化
\`\`\`javascript
// 使用 FlatList 替代 ScrollView
<FlatList
  data={items}
  renderItem={({ item }) => <ItemComponent item={item} />}
  keyExtractor={item => item.id}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
/>
\`\`\`

### 3. 图片优化
\`\`\`javascript
// 使用 FastImage 替代 Image
import FastImage from 'react-native-fast-image';

<FastImage
  source={{ uri: 'https://example.com/image.jpg' }}
  style={{ width: 100, height: 100 }}
  resizeMode={FastImage.resizeMode.contain}
/>
\`\`\`

## 最佳实践

1. **团队管理**：需要同时熟悉 iOS、Android 和 RN
2. **责任划分**：明确各平台的责任边界
3. **文档学习**：RN 文档及相关资源不如原生丰富，需要主动学习

## 总结

React Native 是一个强大的跨平台开发工具，但需要团队有足够的技术储备和持续投入。在合适的项目中使用 RN 可以显著提升开发效率，但也要注意其局限性。
    `,
    author: '钱诚',
    publishedAt: '2024-01-18',
    tags: ['React Native', '移动开发', '跨平台', '性能优化', '面试题'],
    readTime: 12,
    featured: true,
  },
  {
    id: '6',
    title: 'JavaScript 面试题深度解析',
    excerpt: '深入解析JavaScript面试中的常见问题，包括事件委托、类型判断、作用域等核心概念。',
    content: `
# JavaScript 面试题深度解析

JavaScript 面试中经常遇到一些经典问题，让我们深入理解这些概念。

## 事件委托详解

事件委托是前端最经常问的一个问题，里面包含很多知识点：

### 基本实现
\`\`\`javascript
const ul = window.document.getElementsByTagName('ul')[0];
ul.addEventListener('click', e => {
  const children = [...ul.getElementsByTagName('li')]; // HTMLCollection => Array
  if (e.target && e.target.nodeName.toLowerCase() === 'li') {
    const index = children.indexOf(e.target);
    console.log(index);
  }
});
\`\`\`

### 相关知识点
- CSS 选择器：last-of-type vs last-child
- 事件委托的好处：减少事件监听器数量
- addEventListener 第三个参数：useCapture
- target vs currentTarget
- 类数组转数组的方法
- querySelectorAll vs getElementsBy 系列方法
- HTMLCollection vs NodeList 区别

## 类型判断问题

### 问题1：typeof 的局限性

\`\`\`javascript
typeof {} // 'object'
typeof [] // 'object'
typeof null // 'object'
typeof new String() // 'object'
typeof NaN // 'number'
typeof /pop/g // 'object'
\`\`\`

### 解决方案：Object.prototype.toString

\`\`\`javascript
var toString = Object.prototype.toString;

function isObject(obj) {
  return toString.call(obj) === '[object Object]';
}

function isString(obj) {
  return toString.call(obj) === '[object String]';
}

function isArray(obj) {
  return toString.call(obj) === '[object Array]';
}

function isFunction(obj) {
  return toString.call(obj) === '[object Function]';
}
\`\`\`

## 作用域和变量提升

### 问题2：变量提升

\`\`\`javascript
(function() {
  var a = (b = 3);
})();

console.log(typeof a); // undefined
console.log(b); // 3
\`\`\`

实际执行步骤：
\`\`\`javascript
b = 3;        // b 变成全局变量
var a = b;    // a 是局部变量
\`\`\`

### 问题3：this 指向

\`\`\`javascript
var myObject = {
  foo: 'bar',
  func: function() {
    var self = this;
    console.log('outer func: this.foo = ' + this.foo);  // bar
    console.log('outer func: self.foo = ' + self.foo);  // bar
    (function() {
      console.log('inner func: this.foo = ' + this.foo); // undefined
      console.log('inner func: self.foo = ' + self.foo); // bar
    })();
  }
};
myObject.func();
\`\`\`

## IIFE（立即执行函数表达式）

### 使用场景1：循环中的闭包问题

\`\`\`javascript
// 问题代码
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 全部输出 5
  }, 1000);
}

// 解决方案1：IIFE
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i); // 0, 1, 2, 3, 4
    }, 1000);
  })(i);
}

// 解决方案2：ES6 let
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 0, 1, 2, 3, 4
  }, 1000);
}
\`\`\`

### 使用场景2：模块开发

\`\`\`javascript
(function($) {
  // 避免变量污染
  var privateVar = 'private';
  
  function privateFunction() {
    // 私有函数
  }
  
  // 暴露公共接口
  window.myModule = {
    publicMethod: function() {
      // 公共方法
    }
  };
})(jQuery);
\`\`\`

## 严格模式

### 严格模式的好处

1. 消除 JavaScript 语法的一些不合理、不严谨之处
2. 消除代码运行的一些不安全之处
3. 提高编译器效率，增加运行速度
4. 为未来新版本的 JavaScript 做好铺垫

### 严格模式的限制

\`\`\`javascript
'use strict';

// 禁止设置 undefined
undefined = 1; // 报错

// 禁止给不可写属性赋值
var obj = {};
Object.defineProperty(obj, 'x', { value: 0, writable: false });
obj.x = 1; // 报错

// 禁止使用 with
with (obj) {} // 报错

// 函数不能重名
function test(a, a) {} // 报错
\`\`\`

## 自动分号插入（ASI）

### 问题4：return 语句

\`\`\`javascript
function foo1() {
  return {
    bar: 'hello'
  };
}

function foo2() {
  return
  {
    bar: 'hello'
  };
}

console.log(foo1()); // { bar: 'hello' }
console.log(foo2()); // undefined
\`\`\`

原因：JavaScript 的自动分号插入机制会在 return 后自动添加分号。

## 总结

这些面试题涵盖了 JavaScript 的核心概念，理解这些原理有助于我们写出更好的代码。在实际开发中，我们要注意这些细节，避免常见的陷阱。
    `,
    author: '钱诚',
    publishedAt: '2024-01-22',
    tags: ['JavaScript', '面试题', '前端开发', '编程基础'],
    readTime: 15,
    featured: true,
  },
  {
    id: '7',
    title: '网络协议与前端性能优化',
    excerpt: '深入理解HTTP协议、WebSocket、性能优化等网络相关的前端面试重点。',
    content: `
# 网络协议与前端性能优化

网络协议是前端开发中的重要基础，理解这些协议有助于我们进行性能优化。

## HTTP 协议详解

### HTTP 1.1 vs HTTP 2.0

#### HTTP 1.1 的限制
- 队头阻塞：一个请求阻塞后续请求
- 连接数限制：浏览器对同一域名限制连接数
- 无状态：每个请求都是独立的

#### HTTP 2.0 的改进
- 多路复用：一个连接可以处理多个请求
- 头部压缩：减少传输开销
- 服务器推送：主动推送资源

### HTTPS 工作原理

\`\`\`javascript
// HTTPS 握手过程
1. 客户端发送 Client Hello
2. 服务器发送 Server Hello + Certificate
3. 客户端验证证书
4. 生成会话密钥
5. 使用会话密钥加密通信
\`\`\`

## WebSocket 协议

### WebSocket 特点
- 全双工通信
- 基于 HTTP 升级
- 低延迟

### 实现示例
\`\`\`javascript
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = function() {
  console.log('连接已建立');
  ws.send('Hello Server!');
};

ws.onmessage = function(event) {
  console.log('收到消息:', event.data);
};

ws.onclose = function() {
  console.log('连接已关闭');
};
\`\`\`

## 前端性能优化

### 1. 资源加载优化

#### 图片优化
\`\`\`html
<!-- 使用 WebP 格式 -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="图片">
</picture>

<!-- 懒加载 -->
<img src="placeholder.jpg" data-src="real-image.jpg" loading="lazy">
\`\`\`

#### 代码分割
\`\`\`javascript
// 动态导入
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Webpack 代码分割
import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
  // 使用 lodash
});
\`\`\`

### 2. 缓存策略

#### 浏览器缓存
\`\`\`javascript
// Service Worker 缓存
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
\`\`\`

#### HTTP 缓存头
\`\`\`http
Cache-Control: max-age=31536000
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
\`\`\`

### 3. 渲染优化

#### 关键渲染路径优化
\`\`\`html
<!-- 内联关键 CSS -->
<style>
  .critical { color: red; }
</style>

<!-- 异步加载非关键 CSS -->
<link rel="preload" href="non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
\`\`\`

#### 防抖和节流
\`\`\`javascript
// 防抖
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
\`\`\`

## 网络监控

### 性能指标
\`\`\`javascript
// 使用 Performance API
const navigation = performance.getEntriesByType('navigation')[0];
console.log('页面加载时间:', navigation.loadEventEnd - navigation.loadEventStart);
console.log('DOM 解析时间:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);

// 资源加载时间
const resources = performance.getEntriesByType('resource');
resources.forEach(resource => {
  console.log(\`\${resource.name}: \${resource.duration}ms\`);
});
\`\`\`

## 总结

理解网络协议和性能优化是前端开发的重要技能。通过合理的优化策略，我们可以显著提升用户体验。
    `,
    author: '钱诚',
    publishedAt: '2024-01-25',
    tags: ['网络协议', '性能优化', 'HTTP', 'WebSocket', '面试题'],
    readTime: 11,
  },
  {
    id: '8',
    title: '设计模式在前端开发中的应用',
    excerpt: '探讨常见的设计模式在前端开发中的实际应用，包括单例、观察者、策略等模式。',
    content: `
# 设计模式在前端开发中的应用

设计模式是软件开发中的重要概念，让我们看看它们在前端开发中的实际应用。

## 单例模式（Singleton）

### 应用场景：全局状态管理
\`\`\`javascript
class Store {
  constructor() {
    if (Store.instance) {
      return Store.instance;
    }
    this.state = {};
    Store.instance = this;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }

  getState() {
    return this.state;
  }
}

const store1 = new Store();
const store2 = new Store();
console.log(store1 === store2); // true
\`\`\`

## 观察者模式（Observer）

### 应用场景：事件系统
\`\`\`javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }

  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}

const emitter = new EventEmitter();
emitter.on('userLogin', (user) => {
  console.log('用户登录:', user);
});
emitter.emit('userLogin', { name: '张三', id: 1 });
\`\`\`

## 策略模式（Strategy）

### 应用场景：表单验证
\`\`\`javascript
const validators = {
  required: (value) => {
    return value !== undefined && value !== null && value !== '';
  },
  email: (value) => {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
  },
  minLength: (value, min) => {
    return value.length >= min;
  }
};

class FormValidator {
  constructor() {
    this.rules = {};
  }

  addRule(field, rule, validator) {
    if (!this.rules[field]) {
      this.rules[field] = [];
    }
    this.rules[field].push({ rule, validator });
  }

  validate(data) {
    const errors = {};
    
    Object.keys(this.rules).forEach(field => {
      this.rules[field].forEach(({ rule, validator }) => {
        if (!validator(data[field], rule)) {
          if (!errors[field]) {
            errors[field] = [];
          }
          errors[field].push(\`\${field} 验证失败\`);
        }
      });
    });
    
    return errors;
  }
}

const validator = new FormValidator();
validator.addRule('email', 'email', validators.email);
validator.addRule('password', 6, (value, min) => validators.minLength(value, min));

const errors = validator.validate({
  email: 'invalid-email',
  password: '123'
});
console.log(errors);
\`\`\`

## 工厂模式（Factory）

### 应用场景：组件创建
\`\`\`javascript
class ComponentFactory {
  static createComponent(type, props) {
    switch (type) {
      case 'button':
        return new Button(props);
      case 'input':
        return new Input(props);
      case 'modal':
        return new Modal(props);
      default:
        throw new Error(\`未知组件类型: \${type}\`);
    }
  }
}

class Button {
  constructor(props) {
    this.props = props;
  }
  
  render() {
    return \`<button class="\${this.props.className}">\${this.props.text}</button>\`;
  }
}

const button = ComponentFactory.createComponent('button', {
  text: '点击我',
  className: 'btn-primary'
});
\`\`\`

## 装饰器模式（Decorator）

### 应用场景：功能增强
\`\`\`javascript
// 高阶组件装饰器
function withLoading(WrappedComponent) {
  return class extends React.Component {
    state = { loading: false };

    async componentDidMount() {
      this.setState({ loading: true });
      try {
        await this.props.fetchData();
      } finally {
        this.setState({ loading: false });
      }
    }

    render() {
      if (this.state.loading) {
        return <div>加载中...</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}

// 使用装饰器
const UserListWithLoading = withLoading(UserList);
\`\`\`

## 适配器模式（Adapter）

### 应用场景：API 适配
\`\`\`javascript
// 旧版 API
class OldAPI {
  getUserData(userId) {
    return fetch(\`/api/user/\${userId}\`);
  }
}

// 新版 API
class NewAPI {
  fetchUser(id) {
    return fetch(\`/api/v2/users/\${id}\`);
  }
}

// 适配器
class APIAdapter {
  constructor(api) {
    this.api = api;
  }

  getUserData(userId) {
    if (this.api instanceof OldAPI) {
      return this.api.getUserData(userId);
    } else if (this.api instanceof NewAPI) {
      return this.api.fetchUser(userId);
    }
  }
}

const adapter = new APIAdapter(new NewAPI());
adapter.getUserData(123); // 使用新版 API
\`\`\`

## 总结

设计模式在前端开发中有着广泛的应用，它们帮助我们写出更加可维护、可扩展的代码。理解这些模式有助于我们更好地解决复杂问题。
    `,
    author: '钱诚',
    publishedAt: '2024-01-28',
    tags: ['设计模式', 'JavaScript', '编程', '面试题'],
    readTime: 9,
  },
  {
    id: '9',
    title: '前端算法面试题实战指南',
    excerpt: '深入探讨前端面试中的算法题，包括刷题策略、典型题目解析和解题思路。',
    content: `
# 前端算法面试题实战指南

算法题在各大厂面试中越来越常见，虽然很多工程师在工作中用不到高深算法，但算法题能很好地反映面试者的逻辑思维能力和基本素质。

## 为什么前端需要学算法？

### 1. 面试筛选效率
算法题是一个比较高效和简单的筛选方法，能在短时间内评估候选人的：
- 逻辑思维能力
- 代码实现能力
- 问题解决思路
- 学习能力

### 2. 实际应用价值
虽然前端工作中算法使用频率不高，但在以下场景中仍然有用：
- 数据处理和优化
- 性能优化
- 复杂业务逻辑实现
- 代码质量提升

## 刷题策略

### 1. 时间规划
- **准备周期**：2-3个月
- **每日题量**：2-3道题
- **总题量**：60-100道典型题

### 2. 刷题顺序
不建议按照 LeetCode ID 顺序刷题，建议：
- 从 "Top 100 Liked Questions" 开始
- 按类型刷题（本周动态规划，下周二叉树）
- 从简单题开始，逐步提升难度

### 3. 学习步骤
1. **第一遍**：不求最优解，暴力破解也可以
2. **看讨论**：学习其他解法思路
3. **重写**：用 JavaScript 重新实现
4. **二刷**：30道题后重新做一遍

## 典型题目解析

### 1. 两数之和（LeetCode #1）

给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

\`\`\`javascript
// 暴力解法 O(n²)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// 哈希表解法 O(n)
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
}
\`\`\`

### 2. 整数反转（LeetCode #7）

输入 int 型，返回整数逆序后的字符串。

\`\`\`javascript
function reverseInt(number) {
  if (!Number.isInteger(number)) {
    throw new Error('number must be an integer');
  }

  if (number === 0) {
    return '0';
  }

  const flag = number < 0 ? '-' : '';
  let num = Math.abs(number);

  // 去除末尾的0
  while (num % 10 === 0) {
    num = num / 10;
  }

  let result = '';
  while (num >= 10) {
    const temp = num % 10;
    result += temp;
    num = parseInt(num / 10);
  }
  
  return flag + result + num;
}
\`\`\`

### 3. 深度优先搜索（DFS）

\`\`\`javascript
function dfs(node, result = []) {
  if (!node) return result;
  
  result.push(node.id);
  
  if (node.children) {
    node.children.forEach(child => {
      dfs(child, result);
    });
  }
  
  return result;
}

// 使用示例
const tree = {
  id: '1',
  children: [
    {
      id: '1-1',
      children: [
        { id: '1-1-1' },
        { id: '1-1-2' }
      ]
    },
    {
      id: '1-2',
      children: [
        { id: '1-2-1' },
        { id: '1-2-2' }
      ]
    }
  ]
};

console.log(dfs(tree)); // ['1', '1-1', '1-1-1', '1-1-2', '1-2', '1-2-1', '1-2-2']
\`\`\`

### 4. 广度优先搜索（BFS）

\`\`\`javascript
function bfs(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node.id);
    
    if (node.children) {
      queue.push(...node.children);
    }
  }
  
  return result;
}
\`\`\`

## 常见算法类型

### 1. 排序算法
必须掌握的7种排序算法：
- 冒泡排序
- 选择排序
- 插入排序
- 快速排序
- 归并排序
- 堆排序
- 希尔排序

\`\`\`javascript
// 快速排序示例
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[0];
  const left = [];
  const right = [];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}
\`\`\`

### 2. 链表操作
常见题目：
- 合并两个有序链表
- 反转链表
- 检测环形链表
- 删除倒数第K个节点

\`\`\`javascript
// 反转链表
function reverseList(head) {
  let prev = null;
  let current = head;
  
  while (current !== null) {
    const nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  
  return prev;
}
\`\`\`

### 3. 二叉树遍历
必须掌握：
- 前序遍历（根-左-右）
- 中序遍历（左-根-右）
- 后序遍历（左-右-根）
- 层序遍历

\`\`\`javascript
// 前序遍历（递归）
function preorderTraversal(root) {
  const result = [];
  
  function traverse(node) {
    if (!node) return;
    
    result.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
  
  traverse(root);
  return result;
}

// 前序遍历（迭代）
function preorderTraversal(root) {
  if (!root) return [];
  
  const result = [];
  const stack = [root];
  
  while (stack.length > 0) {
    const node = stack.pop();
    result.push(node.val);
    
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  
  return result;
}
\`\`\`

## 面试技巧

### 1. 解题步骤
1. **理解题目**：确保完全理解题目要求
2. **举例验证**：用具体例子验证理解
3. **暴力解法**：先给出最简单的解法
4. **优化思路**：分析时间和空间复杂度
5. **代码实现**：写出清晰的代码
6. **测试用例**：考虑边界情况

### 2. 常见陷阱
- 数组越界
- 空指针异常
- 整数溢出
- 边界条件
- 重复元素处理

### 3. 时间复杂度分析
- O(1)：常数时间
- O(log n)：对数时间
- O(n)：线性时间
- O(n log n)：线性对数时间
- O(n²)：平方时间
- O(2ⁿ)：指数时间

## 推荐资源

### 1. 刷题平台
- [LeetCode](https://leetcode.com/)（推荐英文版）
- [剑指Offer](https://www.nowcoder.com/ta/coding-interviews)

### 2. 学习资源
- [leetcode 题解](https://github.com/azl397985856/leetcode)（JavaScript版本）
- [LeetCodeAnimation](https://github.com/MisterBooo/LeetCodeAnimation)（动画演示）
- [fucking-algorithm](https://github.com/labuladong/fucking-algorithm)（算法套路）

### 3. 书籍推荐
- 《算法图解》- 入门必读
- 《剑指Offer》- 面试必备
- 《编程珠玑》- 进阶提升

## 总结

算法学习是一个循序渐进的过程，不要急于求成。通过系统性的学习和练习，你会发现算法思维对编程能力的提升是全面的。记住，刷题不是为了应付面试，而是为了提升自己的逻辑思维和问题解决能力。
    `,
    author: '钱诚',
    publishedAt: '2024-01-30',
    tags: ['算法', '面试题', 'LeetCode', '数据结构', '编程'],
    readTime: 18,
    featured: true,
  },
  {
    id: '10',
    title: '前端面试题精选与深度解析',
    excerpt: '精选前端面试中的高频题目，包括JavaScript、React、Vue、性能优化等核心知识点。',
    content: `
# 前端面试题精选与深度解析

前端面试中经常遇到一些经典问题，让我们深入理解这些核心概念和实现。

## JavaScript 核心概念

### 1. 用 setTimeout 实现 setInterval

\`\`\`javascript
function mySetInterval(callback, delay) {
  let timer = null;
  
  function interval() {
    callback();
    timer = setTimeout(interval, delay);
  }
  
  timer = setTimeout(interval, delay);
  
  // 返回取消函数
  return () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
}

// 使用示例
const cancel = mySetInterval(() => {
  console.log('Hello World');
}, 1000);

// 5秒后取消
setTimeout(cancel, 5000);
\`\`\`

### 2. 柯里化函数

\`\`\`javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

// 使用示例
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
\`\`\`

### 3. 防抖和节流

\`\`\`javascript
// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 使用示例
const debouncedSearch = debounce((query) => {
  console.log('搜索:', query);
}, 300);

const throttledScroll = throttle(() => {
  console.log('滚动事件');
}, 100);
\`\`\`

## React 相关

### 1. HOC vs Render Props

\`\`\`javascript
// 高阶组件（HOC）
function withLoading(WrappedComponent) {
  return class extends React.Component {
    state = { loading: false };

    async componentDidMount() {
      this.setState({ loading: true });
      try {
        await this.props.fetchData();
      } finally {
        this.setState({ loading: false });
      }
    }

    render() {
      if (this.state.loading) {
        return <div>加载中...</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}

// Render Props
class DataFetcher extends React.Component {
  state = { data: null, loading: false };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const data = await this.props.fetchData();
      this.setState({ data, loading: false });
    } catch (error) {
      this.setState({ loading: false });
    }
  }

  render() {
    return this.props.children(this.state);
  }
}

// 使用对比
// HOC
const UserListWithLoading = withLoading(UserList);

// Render Props
<DataFetcher fetchData={fetchUsers}>
  {({ data, loading }) => (
    loading ? <div>加载中...</div> : <UserList data={data} />
  )}
</DataFetcher>
\`\`\`

### 2. PureComponent 实现

\`\`\`javascript
class PureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) || 
           !shallowEqual(this.state, nextState);
  }
}

function shallowEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (typeof obj1 !== 'object' || obj1 === null ||
      typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
}
\`\`\`

## Vue 相关

### 1. Vue 3.0 Proxy vs Object.defineProperty

\`\`\`javascript
// Vue 2.0 使用 Object.defineProperty
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      console.log('get', key);
      return val;
    },
    set(newVal) {
      if (newVal === val) return;
      console.log('set', key, newVal);
      val = newVal;
      // 触发更新
    }
  });
}

// Vue 3.0 使用 Proxy
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      console.log('get', key);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      console.log('set', key, value);
      const result = Reflect.set(target, key, value, receiver);
      // 触发更新
      return result;
    }
  });
}

// 对比
const obj1 = {};
defineReactive(obj1, 'name', '张三');
obj1.name = '李四'; // 可以检测到

const obj2 = reactive({ name: '张三' });
obj2.name = '李四'; // 可以检测到
obj2.newProp = '新属性'; // Proxy 可以检测到新增属性
\`\`\`

## 事件系统实现

### 1. 自定义事件系统

\`\`\`javascript
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(...args));
    }
  }

  once(event, callback) {
    const onceCallback = (...args) => {
      callback(...args);
      this.off(event, onceCallback);
    };
    this.on(event, onceCallback);
  }
}

// 使用示例
const emitter = new EventEmitter();

emitter.on('userLogin', (user) => {
  console.log('用户登录:', user);
});

emitter.on('userLogout', (user) => {
  console.log('用户登出:', user);
});

emitter.emit('userLogin', { name: '张三', id: 1 });
emitter.emit('userLogout', { name: '张三', id: 1 });
\`\`\`

### 2. 事件委托实现

\`\`\`javascript
function delegate(parent, selector, handler) {
  parent.addEventListener('click', function(event) {
    const target = event.target;
    
    // 检查目标元素是否匹配选择器
    if (target.matches(selector)) {
      handler.call(target, event);
    }
    
    // 检查目标元素的父元素是否匹配选择器
    let current = target.parentElement;
    while (current && current !== parent) {
      if (current.matches(selector)) {
        handler.call(current, event);
        break;
      }
      current = current.parentElement;
    }
  });
}

// 使用示例
delegate(document.body, '.btn', function(event) {
  console.log('按钮被点击:', this.textContent);
});
\`\`\`

## 性能优化

### 1. 图片懒加载

\`\`\`javascript
// 方法1：Intersection Observer API
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// 方法2：传统方法
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  function checkImages() {
    images.forEach(img => {
      const rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    });
  }
  
  window.addEventListener('scroll', throttle(checkImages, 100));
  checkImages(); // 初始检查
}
\`\`\`

### 2. 虚拟滚动

\`\`\`javascript
class VirtualList {
  constructor(container, itemHeight, items) {
    this.container = container;
    this.itemHeight = itemHeight;
    this.items = items;
    this.visibleCount = Math.ceil(container.clientHeight / itemHeight);
    this.startIndex = 0;
    this.endIndex = this.visibleCount;
    
    this.init();
  }
  
  init() {
    this.container.style.position = 'relative';
    this.container.style.height = this.items.length * this.itemHeight + 'px';
    
    this.render();
    
    this.container.addEventListener('scroll', () => {
      this.updateVisibleRange();
      this.render();
    });
  }
  
  updateVisibleRange() {
    const scrollTop = this.container.scrollTop;
    this.startIndex = Math.floor(scrollTop / this.itemHeight);
    this.endIndex = Math.min(
      this.startIndex + this.visibleCount + 1,
      this.items.length
    );
  }
  
  render() {
    const fragment = document.createDocumentFragment();
    
    for (let i = this.startIndex; i < this.endIndex; i++) {
      const item = document.createElement('div');
      item.style.position = 'absolute';
      item.style.top = i * this.itemHeight + 'px';
      item.style.height = this.itemHeight + 'px';
      item.textContent = this.items[i];
      fragment.appendChild(item);
    }
    
    this.container.innerHTML = '';
    this.container.appendChild(fragment);
  }
}
\`\`\`

## 安全相关

### 1. XSS 防御

\`\`\`javascript
// 输入过滤
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 输出编码
function encodeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\\//g, '&#x2F;');
}

// CSP 设置
// Content-Security-Policy: script-src 'self'
\`\`\`

### 2. CSRF 防御

\`\`\`javascript
// 添加 CSRF Token
function addCSRFToken() {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  
  // 添加到所有 AJAX 请求
  const originalFetch = window.fetch;
  window.fetch = function(url, options = {}) {
    options.headers = {
      ...options.headers,
      'X-CSRF-Token': token
    };
    return originalFetch(url, options);
  };
}
\`\`\`

## 工程化

### 1. Webpack 配置优化

\`\`\`javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
};
\`\`\`

### 2. Babel 配置

\`\`\`javascript
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        browsers: ['> 1%', 'last 2 versions']
      },
      useBuiltIns: 'usage',
      corejs: 3
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};
\`\`\`

## 总结

这些面试题涵盖了前端开发的核心知识点，理解这些概念和实现有助于我们写出更好的代码。在实际面试中，不仅要会写代码，更要理解背后的原理和设计思想。
    `,
    author: '钱诚',
    publishedAt: '2024-02-01',
    tags: ['面试题', 'JavaScript', 'React', 'Vue', '性能优化', '前端开发'],
    readTime: 20,
    featured: true,
  },
  {
    id: '11',
    title: 'JavaScript 核心知识点深度解析',
    excerpt: '深入解析JavaScript的核心概念，包括事件机制、数据类型、继承方式等面试重点。',
    content: `
# JavaScript 核心知识点深度解析

JavaScript 作为前端开发的核心语言，掌握其核心概念对于面试和实际开发都至关重要。

## 事件机制详解

### 1. mouseenter vs mouseover

\`\`\`javascript
// mouseenter 和 mouseleave 只在目标元素上触发
// mouseover 和 mouseout 会冒泡，子元素也会触发

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('mouseenter', () => {
  console.log('mouseenter - 只在父元素上触发');
});

parent.addEventListener('mouseover', () => {
  console.log('mouseover - 父元素和子元素都会触发');
});
\`\`\`

### 2. e.target vs e.currentTarget

\`\`\`javascript
// e.target 指向触发事件监听的对象
// e.currentTarget 指向添加监听事件的对象

document.getElementById('parent').addEventListener('click', function(e) {
  console.log('target:', e.target);        // 实际点击的元素
  console.log('currentTarget:', e.currentTarget); // 绑定事件的元素
});
\`\`\`

### 3. 不会冒泡的事件

\`\`\`javascript
// UI 事件
- load, unload, scroll, resize

// 焦点事件  
- blur, focus

// 鼠标事件
- mouseleave, mouseenter
\`\`\`

## 数据类型与判断

### 1. 七种数据类型

\`\`\`javascript
// Number, Null, Undefined, String, Boolean, Object, Symbol

// 类型判断
typeof 42;           // "number"
typeof null;         // "object" (历史遗留问题)
typeof undefined;    // "undefined"
typeof "hello";      // "string"
typeof true;         // "boolean"
typeof {};           // "object"
typeof Symbol();     // "symbol"
\`\`\`

### 2. isNaN vs Number.isNaN

\`\`\`javascript
// 全局 isNaN 会先尝试转换为数字
isNaN('hello');      // true
isNaN('123');        // false

// Number.isNaN 更严格，只有真正的 NaN 才返回 true
Number.isNaN('hello'); // false
Number.isNaN(NaN);     // true
Number.isNaN(123);     // false
\`\`\`

### 3. null vs undefined

\`\`\`javascript
// null 表示"没有对象"，即该处不应该有值
let obj = null;  // 明确表示没有对象

// undefined 表示"缺少值"，应该有一个值但还没有定义
let variable;    // undefined
function test(a) { console.log(a); } // 参数未提供时为 undefined
\`\`\`

### 4. 为什么用 void 0 代替 undefined

\`\`\`javascript
// undefined 不是保留词，在低版本 IE 中能被重写
// void 0 总是返回 undefined，更安全

console.log(void 0); // undefined
console.log(void(0)); // undefined

// 压缩工具会将 undefined 替换为 void 0 节省字节
\`\`\`

## 数值精度问题

### 1. IEEE 754 双精度浮点数

\`\`\`javascript
// 64位存储结构
// 符号位(1位) + 指数位(11位) + 尾数位(52位)

console.log(0.1 + 0.2); // 0.30000000000000004

// ES6 解决方案
console.log(Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON); // true

// BigInt 处理大整数
const bigInt = 9007199254740991n;
\`\`\`

### 2. 安全整数范围

\`\`\`javascript
// 安全整数范围：-(2^53 - 1) 到 2^53 - 1
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991

Number.isSafeInteger(42); // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false
\`\`\`

## 继承的多种方式

### 1. 原型链继承

\`\`\`javascript
function Parent() {
  this.name = 'parent';
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child() {}

Child.prototype = new Parent(); // 原型链继承

const child = new Child();
child.sayName(); // 'parent'
\`\`\`

### 2. 借用构造函数继承

\`\`\`javascript
function Parent(name) {
  this.name = name;
}

function Child(name, age) {
  Parent.call(this, name); // 借用构造函数
  this.age = age;
}

const child = new Child('张三', 25);
console.log(child.name); // '张三'
console.log(child.age);  // 25
\`\`\`

### 3. 组合继承

\`\`\`javascript
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 继承属性
  this.age = age;
}

Child.prototype = new Parent(); // 继承方法
Child.prototype.constructor = Child;

const child = new Child('张三', 25);
child.sayName(); // '张三'
\`\`\`

### 4. 寄生组合式继承（推荐）

\`\`\`javascript
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

// 创建原型链
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child('张三', 25);
child.sayName(); // '张三'
\`\`\`

## 函数类型详解

### 1. 普通函数 vs 构造函数 vs 箭头函数

\`\`\`javascript
// 普通函数
function normalFunction() {
  console.log(this); // window 或 undefined (严格模式)
}

// 构造函数
function Constructor(name) {
  this.name = name;
  // 不需要 return，自动返回 this
}

// 箭头函数
const arrowFunction = () => {
  console.log(this); // 继承外层作用域的 this
};

// 使用对比
normalFunction();           // 直接调用
const obj = new Constructor('张三'); // new 调用
arrowFunction();            // 直接调用
\`\`\`

### 2. 箭头函数不适用场景

\`\`\`javascript
// 1. 定义字面量方法
const calculator = {
  array: [1, 2, 3],
  sum: () => {
    console.log(this === window); // true
    return this.array.reduce((result, item) => result + item);
  }
};

// 2. 定义原型方法
function Person(name) {
  this.name = name;
}

Person.prototype.sayName = () => {
  console.log(this.name); // this 指向 window
};

// 3. 需要动态 this 的场景
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
  console.log(this === button); // true
  this.innerHTML = 'Clicked button';
});
\`\`\`

## 事件监听器详解

### 1. addEventListener 参数

\`\`\`javascript
element.addEventListener(type, listener, options);

// options 对象
{
  capture: false,    // 是否在捕获阶段触发
  once: false,       // 是否只触发一次
  passive: false     // 是否提升滚动性能
}

// 示例
element.addEventListener('click', handler, {
  capture: true,  // 捕获阶段触发
  once: true,     // 只触发一次
  passive: true   // 提升滚动性能
});
\`\`\`

### 2. 内存泄漏问题

\`\`\`javascript
// 错误示例：匿名函数无法移除
element.addEventListener('click', function() {
  console.log('clicked');
});

// 正确示例：保持函数引用
const handler = function() {
  console.log('clicked');
};

element.addEventListener('click', handler);
element.removeEventListener('click', handler);
\`\`\`

## 自定义事件

### 1. CustomEvent vs Event

\`\`\`javascript
// 创建自定义事件
const customEvent = new CustomEvent('myEvent', {
  detail: { message: 'Hello World' }
});

// 监听自定义事件
element.addEventListener('myEvent', function(e) {
  console.log(e.detail.message); // 'Hello World'
});

// 触发事件
element.dispatchEvent(customEvent);
\`\`\`

## JSONP 原理

### 1. 实现原理

\`\`\`javascript
function jsonp(url, callback) {
  const script = document.createElement('script');
  const callbackName = 'jsonp_' + Date.now();
  
  // 创建全局回调函数
  window[callbackName] = function(data) {
    callback(data);
    document.body.removeChild(script);
    delete window[callbackName];
  };
  
  // 设置 src
  script.src = url + (url.includes('?') ? '&' : '?') + 'callback=' + callbackName;
  document.body.appendChild(script);
}

// 使用示例
jsonp('https://api.example.com/data', function(data) {
  console.log(data);
});
\`\`\`

### 2. JSONP 的局限性

- 只支持 GET 请求
- 安全性问题（需要信任服务端）
- 错误处理困难
- 无法获取 HTTP 状态码

## 总结

掌握这些 JavaScript 核心知识点，不仅有助于面试，更能提升代码质量和开发效率。理解原理比记忆语法更重要，在实际开发中要灵活运用这些概念。
    `,
    author: '钱诚',
    publishedAt: '2024-02-03',
    tags: ['JavaScript', '面试题', '前端开发', '编程基础'],
    readTime: 16,
    featured: true,
  },
  {
    id: '12',
    title: 'CSS 核心知识点与布局技巧',
    excerpt: '深入理解CSS的核心概念，包括Flexbox、盒模型、BFC、伪元素等布局技巧。',
    content: `
# CSS 核心知识点与布局技巧

CSS 是前端开发中不可或缺的技术，掌握其核心概念和布局技巧对于构建优秀的用户界面至关重要。

## Flexbox 布局详解

### 1. 容器属性

\`\`\`css
.flex-container {
  /* 主轴方向 */
  flex-direction: row | row-reverse | column | column-reverse;
  
  /* 是否换行 */
  flex-wrap: nowrap | wrap | wrap-reverse;
  
  /* 主轴对齐 */
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  
  /* 交叉轴对齐 */
  align-items: stretch | flex-start | flex-end | center | baseline;
  
  /* 多行对齐 */
  align-content: stretch | flex-start | flex-end | center | space-between | space-around;
}
\`\`\`

### 2. 子项属性

\`\`\`css
.flex-item {
  /* 排序 */
  order: 0;
  
  /* 放大比例 */
  flex-grow: 0;
  
  /* 缩小比例 */
  flex-shrink: 1;
  
  /* 基准大小 */
  flex-basis: auto;
  
  /* 简写 */
  flex: 0 1 auto; /* grow shrink basis */
  
  /* 单独对齐 */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
\`\`\`

### 3. 实际应用

\`\`\`css
/* 水平垂直居中 */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 等分布局 */
.equal-width {
  display: flex;
}

.equal-width > * {
  flex: 1;
}

/* 响应式布局 */
.responsive {
  display: flex;
  flex-wrap: wrap;
}

.responsive > * {
  flex: 1 1 300px; /* 最小300px，可伸缩 */
}
\`\`\`

## 盒模型详解

### 1. 标准盒模型 vs 怪异盒模型

\`\`\`css
/* 标准盒模型 */
.standard-box {
  box-sizing: content-box; /* 默认值 */
  width: 200px;
  padding: 20px;
  border: 5px solid #000;
  /* 实际宽度 = 200 + 20*2 + 5*2 = 250px */
}

/* 怪异盒模型 */
.weird-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #000;
  /* 实际宽度 = 200px，内容区域 = 200 - 20*2 - 5*2 = 150px */
}
\`\`\`

### 2. 盒模型组成部分

\`\`\`css
.element {
  /* 内容区域 */
  width: 200px;
  height: 100px;
  
  /* 内边距 */
  padding: 20px;
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  
  /* 边框 */
  border: 2px solid #000;
  border-radius: 5px;
  
  /* 外边距 */
  margin: 10px;
  margin: 10px 20px; /* 上下10px，左右20px */
  margin: 10px 20px 15px 25px; /* 上右下左 */
}
\`\`\`

## BFC（块格式化上下文）

### 1. 触发条件

\`\`\`css
/* 以下任一条件都会触发 BFC */
.bfc {
  /* 1. 根元素 */
  /* 2. float 不为 none */
  float: left;
  
  /* 3. position 为 absolute 或 fixed */
  position: absolute;
  
  /* 4. display 为 inline-block, table-cell, table-caption */
  display: inline-block;
  
  /* 5. overflow 不为 visible */
  overflow: hidden;
  
  /* 6. display 为 flex 或 grid */
  display: flex;
}
\`\`\`

### 2. BFC 的作用

\`\`\`css
/* 1. 清除浮动 */
.clear-float {
  overflow: hidden; /* 触发 BFC */
}

/* 2. 防止外边距合并 */
.margin-collapse {
  overflow: hidden; /* 触发 BFC */
}

/* 3. 自适应两栏布局 */
.two-column {
  display: flex;
}

.sidebar {
  width: 200px;
  background: #f0f0f0;
}

.main {
  flex: 1;
  overflow: hidden; /* 触发 BFC，防止文字环绕 */
}
\`\`\`

## 清除浮动的方法

### 1. 常用方法

\`\`\`css
/* 方法1：clear: both */
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}

/* 方法2：overflow */
.clearfix {
  overflow: hidden; /* 或 auto */
}

/* 方法3：display: table */
.clearfix {
  display: table;
  content: '';
  clear: both;
}

/* 方法4：伪元素 */
.clearfix::before,
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
\`\`\`

## 伪元素与伪类

### 1. 伪类（Pseudo-classes）

\`\`\`css
/* 状态伪类 */
a:hover { color: red; }
a:active { color: blue; }
a:visited { color: purple; }

/* 结构伪类 */
li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f0f0f0; }

/* 表单伪类 */
input:focus { border-color: blue; }
input:disabled { opacity: 0.5; }
input:checked + label { color: green; }
\`\`\`

### 2. 伪元素（Pseudo-elements）

\`\`\`css
/* ::before 和 ::after */
.element::before {
  content: '前缀';
  color: red;
}

.element::after {
  content: '后缀';
  color: blue;
}

/* ::first-line 和 ::first-letter */
p::first-line {
  font-weight: bold;
}

p::first-letter {
  font-size: 2em;
  float: left;
}

/* ::selection */
::selection {
  background: yellow;
  color: black;
}
\`\`\`

## 元素显示与隐藏

### 1. 三种方式的对比

\`\`\`css
/* display: none */
.hidden-display {
  display: none;
  /* 特点：
   * - 不占据空间
   * - 无法进行事件监听
   * - 引起重排，性能较差
   * - 不支持 transition
   */
}

/* visibility: hidden */
.hidden-visibility {
  visibility: hidden;
  /* 特点：
   * - 占据空间
   * - 无法进行事件监听
   * - 引起重绘，性能较好
   * - 支持 transition
   * - 子元素可继承
   */
}

/* opacity: 0 */
.hidden-opacity {
  opacity: 0;
  /* 特点：
   * - 占据空间
   * - 可以进行事件监听
   * - 提升为合成层，性能最好
   * - 支持 transition
   * - 子元素可继承
   */
}
\`\`\`

## 水平垂直居中

### 1. Flexbox 方法

\`\`\`css
/* 最简单的方法 */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`

### 2. Grid 方法

\`\`\`css
.center-grid {
  display: grid;
  place-items: center;
  height: 100vh;
}
\`\`\`

### 3. 绝对定位方法

\`\`\`css
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
\`\`\`

### 4. 表格方法

\`\`\`css
.center-table {
  display: table;
  width: 100%;
  height: 100vh;
}

.center-table > div {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
\`\`\`

## 1px 边框问题

### 1. 解决方案

\`\`\`css
/* 方案1：transform scale */
.border-1px {
  position: relative;
}

.border-1px::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #000;
  transform: scale(0.5);
  transform-origin: 0 0;
}

/* 方案2：box-shadow */
.border-shadow {
  box-shadow: 0 0 0 1px #000;
}

/* 方案3：viewport + rem */
/* 设置 viewport 的 scale 为 0.5 */
<meta name="viewport" content="width=device-width, initial-scale=0.5">
\`\`\`

## 响应式设计

### 1. 媒体查询

\`\`\`css
/* 移动端优先 */
.container {
  width: 100%;
  padding: 10px;
}

/* 平板 */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* 桌面端 */
@media (min-width: 1024px) {
  .container {
    width: 970px;
  }
}

/* 大屏幕 */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
\`\`\`

### 2. CSS 变量

\`\`\`css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size: 16px;
}

.element {
  color: var(--primary-color);
  font-size: var(--font-size);
}

/* 响应式变量 */
@media (max-width: 768px) {
  :root {
    --font-size: 14px;
  }
}
\`\`\`

## 性能优化

### 1. 选择器优化

\`\`\`css
/* 避免过度嵌套 */
.bad {
  .container {
    .wrapper {
      .content {
        .title {
          color: red;
        }
      }
    }
  }
}

/* 好的做法 */
.good .title {
  color: red;
}
\`\`\`

### 2. 动画优化

\`\`\`css
/* 使用 transform 和 opacity */
.optimized-animation {
  transform: translateX(100px);
  opacity: 0.5;
  /* 这些属性不会触发重排和重绘 */
}

/* 避免使用会触发重排的属性 */
.bad-animation {
  width: 100px; /* 会触发重排 */
  height: 100px; /* 会触发重排 */
}
\`\`\`

## 总结

CSS 的核心知识点包括布局、盒模型、选择器、伪元素等。掌握这些概念和技巧，能够帮助我们构建更加灵活、高效的页面布局。在实际开发中，要根据具体需求选择合适的技术方案。
    `,
    author: '钱诚',
    publishedAt: '2024-02-05',
    tags: ['CSS', '布局', 'Flexbox', 'BFC', '面试题', '前端开发'],
    readTime: 14,
  },
  {
    id: '13',
    title: '前端工程化与性能优化实战',
    excerpt: '深入探讨前端工程化的各个方面，包括Webpack、热更新、Tree Shaking等核心概念。',
    content: `
# 前端工程化与性能优化实战

前端工程化是现代前端开发的重要组成部分，掌握工程化工具和性能优化技巧对于提升开发效率和用户体验至关重要。

## Webpack 核心概念

### 1. 基础配置

\`\`\`javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
\`\`\`

### 2. 基于 Tapable 的插件系统

\`\`\`javascript
// 自定义插件
class MyPlugin {
  apply(compiler) {
    // 在编译开始前执行
    compiler.hooks.beforeCompile.tap('MyPlugin', (compilation) => {
      console.log('编译开始...');
    });
    
    // 在编译完成后执行
    compiler.hooks.done.tap('MyPlugin', (stats) => {
      console.log('编译完成!');
    });
  }
}

module.exports = {
  plugins: [new MyPlugin()]
};
\`\`\`

## Tree Shaking 优化

### 1. 原理与实现

\`\`\`javascript
// 使用 ES6 模块语法
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

// index.js
import { add, multiply } from './math.js';
// subtract 函数会被 Tree Shaking 移除

console.log(add(1, 2));
console.log(multiply(2, 3));
\`\`\`

### 2. 配置优化

\`\`\`javascript
// webpack.config.js
module.exports = {
  mode: 'production', // 自动启用 Tree Shaking
  optimization: {
    usedExports: true,
    sideEffects: false, // 或指定文件
    // sideEffects: ['*.css', '*.scss']
  }
};
\`\`\`

### 3. 注意事项

\`\`\`javascript
// 避免副作用
// 不好的写法
export const utils = {
  add: (a, b) => a + b,
  init: () => {
    // 副作用代码
    window.globalVar = 'initialized';
  }
};

// 好的写法
export const add = (a, b) => a + b;
export const init = () => {
  window.globalVar = 'initialized';
};
\`\`\`

## 热更新（HMR）原理

### 1. 实现原理

\`\`\`javascript
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  devServer: {
    hot: true, // 启用热更新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

// 在代码中使用
if (module.hot) {
  module.hot.accept();
  
  // 重新创建组件
  const { default: Component } = require('./Component.vue');
  // 更新组件
}
\`\`\`

### 2. Vue HMR 实现

\`\`\`javascript
// vue-loader 内部实现
if (module.hot) {
  module.hot.accept();
  
  // 重新创建组件
  const { default: Component } = require('./Component.vue');
  // 更新组件
}
\`\`\`

### 3. React HMR 实现

\`\`\`javascript
// react-hot-loader
import { hot } from 'react-hot-loader/root';

const App = () => {
  return <div>Hello World</div>;
};

export default hot(App);
\`\`\`

## 动态导入与代码分割

### 1. 动态导入语法

\`\`\`javascript
// 路由级别的代码分割
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

// 条件导入
if (condition) {
  import('./heavy-module').then(module => {
    // 使用模块
  });
}

// 预加载
const preloadModule = () => import('./heavy-module');
\`\`\`

### 2. Webpack 代码分割配置

\`\`\`javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10
        },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 5
        }
      }
    }
  }
};
\`\`\`

### 3. 预加载策略

\`\`\`javascript
// 预加载关键资源
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="critical.js" as="script">

// 预获取非关键资源
<link rel="prefetch" href="non-critical.js">

// 预连接
<link rel="preconnect" href="https://api.example.com">
\`\`\`

## 性能监控与分析

### 1. 性能指标

\`\`\`javascript
// 使用 Performance API
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.name, entry.startTime);
  }
});

observer.observe({ entryTypes: ['navigation', 'resource'] });

// 核心 Web 指标
const navigation = performance.getEntriesByType('navigation')[0];
console.log('LCP:', navigation.loadEventEnd - navigation.loadEventStart);
console.log('FID:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
\`\`\`

### 2. 错误监控

\`\`\`javascript
// 全局错误捕获
window.addEventListener('error', (event) => {
  console.error('JavaScript 错误:', event.error);
  // 发送到监控服务
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('未处理的 Promise 拒绝:', event.reason);
  // 发送到监控服务
});

// 资源加载错误
window.addEventListener('error', (event) => {
  if (event.target !== window) {
    console.error('资源加载错误:', event.target.src || event.target.href);
  }
}, true);
\`\`\`

## 前端安全

### 1. XSS 防御

\`\`\`javascript
// 输入过滤
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 输出编码
function encodeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\\//g, '&#x2F;');
}

// CSP 设置
// Content-Security-Policy: script-src 'self'
\`\`\`

### 2. CSRF 防御

\`\`\`javascript
// 添加 CSRF Token
function addCSRFToken() {
  const token = document.querySelector('meta[name="csrf-token"]').content;
  
  // 添加到所有 AJAX 请求
  const originalFetch = window.fetch;
  window.fetch = function(url, options = {}) {
    options.headers = {
      ...options.headers,
      'X-CSRF-Token': token
    };
    return originalFetch(url, options);
  };
}
\`\`\`

## 构建优化

### 1. Webpack 配置优化

\`\`\`javascript
// webpack.config.js
module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};
\`\`\`

### 2. 压缩优化

\`\`\`javascript
// webpack.config.js
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 移除 console
            drop_debugger: true // 移除 debugger
          }
        }
      }),
      new CssMinimizerPlugin()
    ]
  }
};
\`\`\`

## 部署策略

### 1. 静态资源优化

\`\`\`javascript
// 使用 CDN
const CDN_URL = 'https://cdn.example.com';

// 动态设置 CDN
function getAssetUrl(path) {
  if (process.env.NODE_ENV === 'production') {
    return \`\${CDN_URL}\${path}\`;
  }
  return path;
}

// 版本控制
const version = process.env.BUILD_VERSION || Date.now();
const assetUrl = \`\${CDN_URL}/assets/\${version}/\${filename}\`;
\`\`\`

### 2. 环境配置

\`\`\`javascript
// 环境变量
const config = {
  development: {
    apiUrl: 'http://localhost:3000',
    debug: true
  },
  production: {
    apiUrl: 'https://api.example.com',
    debug: false
  }
};

const env = process.env.NODE_ENV || 'development';
export default config[env];
\`\`\`

## 总结

前端工程化是一个系统工程，涉及构建工具、性能优化、安全防护等多个方面。掌握这些技术能够帮助我们构建更加高效、安全、可维护的前端应用。在实际项目中，要根据具体需求选择合适的工程化方案。
    `,
    author: '钱诚',
    publishedAt: '2024-02-07',
    tags: ['工程化', 'Webpack', '性能优化', '热更新', 'Tree Shaking', '前端开发'],
    readTime: 18,
    featured: true,
  }
]; 
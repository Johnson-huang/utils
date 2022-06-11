# utils
常用的工具方法库

# 安装
```angular2html
npm i johnson-huang-utils -S
```

# 使用
## 全部引入
```javascript
import * as utils from 'johnson-huang-utils'
utils.add(1, 2)
```

## 按需引入
```javascript
import { add } from 'johnson-huang-utils'
add(1, 2)
```

# API 文档  
https://johnson-huang.github.io/utils/

# 计划
- [x] rollup
  - [x] 去掉注释
  - [x] 代码压缩
  - [x] gzip
- [x] typedoc
  - [x] API 分功能（校验、转换、计算）
  - [ ] 把枚举写入文档
- [x] jest 单元测试
- [x] eslint
- [x] babel
- [x] 自动化 eslint - jest - doc - build - npm publish
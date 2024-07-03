# 📜 日志处理

本篇内容主要讲日志处理

我们可以在插件中导入库进行日志处理

``` py
from utils.Logger import logger

logger.info('这是一条消息')
logger.warning('这是一条警告消息')
logger.error('这是一条错误消息')
logger.success('这是一条处理成功消息')
logger.debug('这是一条调试消息')
logger.event('这是一条事件处理消息')
logger.critical('这是一条critical消息')
```

当我们处理插件事件的时候，我们就可以这么调用（啊就这么简单）
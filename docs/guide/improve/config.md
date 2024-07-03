# 📄 自定义配置

本框架配备了读取**默认+自定义项**的功能并增设了**写入自定义配置**的功能

## 自定义
在介绍自定义之前，我们需要了解默认配置，具体见 [初始化配置](/guide/default_set#配置文件详解) 一节

> [!CAUTION] 请注意
> 如果您还没有阅读**初始化配置**一节，请优先阅读，防止本章节无法理解！

我们可以通过以下方式添加自定义项

``` py
from utils.Config import config
config.add('test',1)
```

首先导入Config的实例化config（其实你用Config.add也等价）

然后使用config.add（或Config.add）

其中填入两个参数，分别为`key`和`value`

其中 你可以理解其格式为
> `key: value`

接下来，您可以通过config.read读取该键值
``` py
from utils.Config import config
config.read('test')
```
这样，得出的结果就是1

这对插件的开发完善很有用，比如我要写一个白名单插件，我可以这么写
**请注意！这个示例融合了日志、事件处理逻辑和本章节内容**

``` py Weather.py
from utils.Event import Event
from utils.Logger import logger
from utils.Config import config
from utils.Decorators import event_handler

__version__ = "0.0.1"
__plugin_meta__ = {
    'name': "示例插件",
    'description': "示例插件",
}

@event_handler
async def handle_event(user_id, group_id, text):
    whitelist = config.read('whitelist')
    if text == '/test':
        if user_id in config.read('blacklist'):
            await Event.send_message('您当前处于黑名单中，所有事件已阻断')
            return
        logger.event('插件管理器 >>> 开始处理命令：/test')
        if group_id in whitelist:
            await Event.send_message(hi)
        else:
            pass
```
# 🔧 编写第一个插件

> [!CAUTION] 警告
> 本阶段教程将教会您如何编写一个插件，装饰器默认提供哪些参数等
> 
> 如果您并没有阅读完**快速起步**部分，请回去看完！

首先，我们需要在`./plugins`文件夹下创建一个py文件（名称**随意**）

然后打开这个空文件，让我们回看一下项目中自带的template.py

``` py 
from utils.Event import Event
from utils.Decorators import event_handler

__version__ = "0.0.1"
__plugin_meta__ = {
    'name': "示例插件",
    'description': "示例插件介绍",
}

@event_handler
async def handle_event(user_id, group_id, text):
    if text == '/test':
        await Event.send_message("Hello World")
```

## 必要的导入操作
首先，我们先来看第一至第二行
``` py {1-2}
from utils.Event import Event
from utils.Decorators import event_handler
...
```

其中，`from utils.Event import Event`导入了一个必要的**发信处理**

Event在本示例中起到了**发信**的作用，在后面的高级阶段您还会学到他的更多作用

接下来，从Decorators引入了一个`event_handler`，这是一个**必要装饰器**，因为此装饰器负责将信息发送给插件函数

需要注意的是，**如果您不导入并使用此装饰器，您的插件就无法正常处理消息**

## 插件子信息编写

``` py {4}
from utils.Event import Event
from utils.Decorators import event_handler

__version__ = "0.0.1"
__plugin_meta__ = {
    'name': "示例插件",
    'description': "示例插件介绍",
}
...
```

可以看到，第四行定义了一个`__version__`，此参数决定了该插件的版本信息（*未来可能会用作官方插件检查更新*）

::: tip
此参数**目前不重要**，但为了使插件管理起来更简单，我**建议添加此参数**
:::

``` py {5-8}
from utils.Event import Event
from utils.Decorators import event_handler

__version__ = "0.0.1"
__plugin_meta__ = {
    'name': "示例插件",
    'description': "示例插件介绍",
}
...
```
5-8行定义了该插件的`__plugin_meta__`，这个参数是**必要的**，因为框架插件管理器会通过此参数确定插件的**显示名称**以及与*官方插件：About*搭配使用

## 插件的事件处理逻辑
``` py {3}
...
@event_handler
async def handle_event(user_id, group_id, text):
    if text == '/test':
        await Event.send_message("Hello World")
```
此处必须在主函数上套用`event_handler`装饰器以便消息传入

``` py {4}
...
@event_handler
async def handle_event(user_id, group_id, text):
    if text == '/test':
        await Event.send_message("Hello World")
```
此处定义了一个异步函数名为`handle_event`，并导入了`user_id`，`group_id`，`text`三个变量

::: warning <h4>请注意</h4>
事件处理函数可以使用**任何名称**，但请确保其被装饰器装饰，否则该插件的主逻辑**无法运行**

另外，event_handler能提供的信息不只有这三个，我们会在后面了解到更多
:::

其中，`user_id`和`group_id`可以直接理解

不过需要注意的是，`group_id`字段在私聊消息中会传回`None`

而`user_id`字段无论在群消息还是在私聊消息中均提供

而`text`字段则是其发送的消息（具体以传入的消息为准，只传回raw_message）

每当有message消息事件发生时（即有消息传入的时候）就会调用装饰器下的函数，所以需要写一个对text的判断（比如`if text == 'test':`）

``` py {6}
...
@event_handler
async def handle_event(user_id, group_id, text):
    if text == '/test':
        await Event.send_message("Hello World")
```
此处使用了Event.send_message函数，不过需要注意，Event可以同时使用实例化和抽象化，即：你既可以使用
``` py {2}
from utils.Event import Event
await Event.send_message()
```

也可以：
``` py {2-3}
from utils.Event import Event
event = Event()
await event.send_message()
```

这样，我们就完成了基础事件编写

接下来，重启框架并发送/test，就可以收到"Hello World"消息
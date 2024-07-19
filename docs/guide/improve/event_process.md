# ⚡ 装饰器能提供的参数

## @event_handler

本框架的事件装饰器`@event_handler`提供了很多信息

### 参数一览
- self_id   : Bot自身ID
- user_id   : 用户ID
- group_id  : 群聊ID
- nickname  : 用户昵称
- event_type: 发信方式
- card      : 群名片（如有则返回）
- role      : 框架获取到的该用户的身份
- text      : 用户消息
- botnick   : Bot昵称
- message_id: 当前的消息ID

### 使用方法
在经过装饰器装饰后，您需要在异步函数中添加您需要的参数

``` py
...
@event_handler
async def handle_event(user_id, group_id, text):
```
比如这里只需要uid,gid和text

但如果您还需要撤回消息（需要message_id），则可以像这样使用

``` py {3}
...
@event_handler
async def handle_event(user_id, group_id, text, message_id):
```


## @startup_handler

本框架提供了@startup_handler装饰器，用于在框架启动时执行函数

::: warning 注意
本装饰器无需对函数传参，可以自定义函数名称
:::

### 使用方法
在经过装饰器装饰后，您需要在异步函数中添加您需要的参数

``` py
...
@startup_handler
async def startup():
    pass
...
```
这里只需要在startup函数中调用任何函数，但在框架启动期间无法收发消息，仅可以做一些基础操作（比如加载资源文件等）
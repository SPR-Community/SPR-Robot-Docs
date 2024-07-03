# ⚡ 事件装饰器能提供的参数

本框架的事件装饰器提供了很多信息

## 参数一览
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

## 使用方法
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

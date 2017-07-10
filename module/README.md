### 模块的加载和使用
- 模块路径可以是一个以/开头，表示一个绝对路径
- 模块路径以./开头，表示当前目录
- 模块路径如果没有以/或者./开头，那么这个模块，要么是核心模块，要么是node_modules文件夹下的。

---
### 全局对象
#### process
- process对象是一个全局对象，是global下的一个属性，可以在任何地方都能访问到他，通过这个对象提供的属性和方法，使我们可以对当前的运行的程序的进程进行访问和控制。
- argv：一组包含命令行参数的数值
- execPath：开启当前进程的绝对路径
- env：返回用户的环境信息
- version：返回node版本信息
- versions：返回node以及node依赖包版本信息
- pid：当前进程的pid
- title：当前进程的显示名称(Getter/Setter)
- arch：返回当前CPU处理器架构arm/ia32/×64
- platform：返回当前操作系统平台
- cwd()：返回当前进程的工作目录
- chdir(directory)：改变当前进程的工作目录
- memoryUsage()：返回node进程的内存使用情况，单位是byte
- exit(code)：退出
- kill(pid)：向进程发送信息
- ==很重要的属性：stdin、stdout：标准输入输出流(IO)，stdin和stdout提供了操作输入数据和输出数据的方法，我们也通常称为IO操作，输入设备如：鼠标、键盘等，输出如：打印机等==
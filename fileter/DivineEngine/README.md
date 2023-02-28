神机的一部分分流源地址在如下路径：
https://github.com/DivineEngine/Profiles/blob/master/Quantumult/Filter
但是作者提示说这个目录下的将来将不再维护甚至移除，所以在自己仓库建个备份
对应新的分流地在如下路径：
https://github.com/DivineEngine/Profiles/tree/master/Surge/Ruleset

目前收录了了大佬配置文件中涉及到的分流规则。

以下是对规则和策略组这部分内容的搬运，因为这个可能主要是给surge写的，所以有些可能不适用于quanx。
***


### 关于规则及策略组

使用排序要求如下：

1. [必须] Unbreak.list - 用于修正后续规则行为
2. [可选] Advertising.list - 广告
3. [可选] Privacy.list - 隐私（行为分析、隐私追踪）
4. [可选] Hijacking.list - 劫持（运营商、恶意网址）
5. [必须] Streaming.list - 流媒体服务
6. [可选] StreamingSE.list - （大陆面向国际的）流媒体服务
7. [必须] Global.list - 国际网络分流
8. [必须] China.list - 国内网络分流

#### Unbreak

主要用于修正后续规则中 REJECT 及 PROXY 策略的一些不正确情况，如常见的暴力去广告造成的某些推送服务无法使用、使用 Google 的一些可直连服务。

#### Streaming

主要为国际流媒体服务，`StreamingMedia` 下目录里的独立分流文件全是从 `Streaming.list` 中剥离出来的。

Streaming 策略组最初的设想使用方式是独立出来给有观看流媒体服务的用户一个方便的使用方式。如默认节点使用的是美国但有日本和英国的流媒体服务，在观看 AbemaTV 时在 Streaming 策略组选择日本节点，在观看 BBC 时选择英国节点。

而对于一些流媒体爱好者而言，他们会进一步按照区域建立策略组如 HK、JP 等，然后将适用于相应区域的流媒体服务独立分流文件的策略，指定为相应的策略组，如此就不用在 Streaming 策略组来回切换。

一些需要注意的事项：
1. 一些流媒体服务需要「原生（或称「本土」）」的 IP，此类称呼存在争议只需要明白如开通的是港区 Netflix 不是随便找个香港服务器就能够使用的。
2. tv 位于 `Extra` 目录下的 `Apple` 目录内；
3. `StreamingMedia` 下的 `bilibili.list` 和 `iQiyi.list` 与国内版不是一个 App；
4. 当不需要「Streaming 策略组」时，`Streaming.list` 策略应该调整为 PROXY 而不是移除；

#### StreamingSE

一般为中国大陆的流媒体面向港澳台或海外的版本，不同于上述的独立版本，下列流媒体如果直接代理会影响中国大陆版内容的播放。所以以策略组的形式，在需要观看面向港澳台或海外的版本时切换代理，日常可选直连。
目前支持：
- 哔哩哔哩（僅限港澳台地區）；
- 愛奇藝海外站；
- 芒果TV国际；

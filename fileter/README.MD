分流fileter的写法感觉有两种：
以神机和大飞的规则举例：
第一种如下，利用force-policy=direct参数对要走的规则（策略）进行了指定
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Unbreak.list, tag=🔂Unbreak, force-policy=direct, update-interval=172800, opt-parser=true, enabled=true

第二种是在内容里对要走的规则（策略）逐条进行了指定，在外面就不需要force-policy=这个参数了
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Unbreak.list, tag=🎯规则修正-直连, update-interval=172800, opt-parser=false, enabled=true

下面是两种写法内容中的区别：
第一种：
```
# Unbreak
# > General
DOMAIN,app.adjust.com
DOMAIN,app.appsflyer.com
DOMAIN,bdtj.tagtic.cn
# > Alibaba
DOMAIN,log.mmstat.com
DOMAIN,sycm.mmstat.com
# > Google
DOMAIN-SUFFIX,blog.google // Google Blog
DOMAIN-SUFFIX,googletraveladservices.com // Google Flights
DOMAIN,clientservices.googleapis.com
DOMAIN,update.googleapis.com
DOMAIN,dl.google.com
DOMAIN,dl.l.google.com
DOMAIN,update.googleapis.com

第二种：
# Unbreak
# > General
DOMAIN,app.adjust.com,DIRECT
DOMAIN,app.appsflyer.com,DIRECT
DOMAIN,bdtj.tagtic.cn,DIRECT
# > Alibaba
DOMAIN,log.mmstat.com,DIRECT
DOMAIN,sycm.mmstat.com,DIRECT
# > Google
DOMAIN-SUFFIX,blog.google,DIRECT
DOMAIN-SUFFIX,googletraveladservices.com,DIRECT
DOMAIN,clientservices.googleapis.com,DIRECT
DOMAIN,update.googleapis.com,DIRECT
DOMAIN,dl.google.com,DIRECT
DOMAIN,dl.l.google.com,DIRECT
DOMAIN,update.googleapis.com,DIRECT
```
个人感觉比较推荐第一种写法，第一是比较省事，将链接写好后在最外面指定要走的规则（策略）即可，第二，看了下神机的仓库，表明第二种写法所在的目录将来将不再维护甚至移除。而且第二种写法还有个弊端就是不能灵活指定要走的规则，比如youtube要走代理，我必须得提前为youtube想好要走的策略的名字，比如就叫youtube规则或流媒体。将来要是对应的策略名称发生了变化，里面也得每一条都修改，虽然quanx中提供了在外部可以选择使用哪个策略的功能，但是如果是用外部选择，为什么还要费劲在每个网址链接后面增加对应的规则（策略）名称呢。

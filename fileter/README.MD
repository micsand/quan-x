分流fileter的写法感觉有两种：
以神机和大飞的规则举例：
第一种如下，利用force-policy=direct参数对要走的规则进行了指定
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Surge/Ruleset/Unbreak.list, tag=🔂Unbreak, force-policy=direct, update-interval=172800, opt-parser=true, enabled=true
第二种是在内容里对要走的规则逐条进行了指定，在外面就不需要force-policy=这个参数了
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

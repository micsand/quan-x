#我配置中有两种，一种是KOPXIAO的，一个是Orz3的，根据需要我用了后者的，后来发现前者还能显示ip地址，后者吧能，所以我决定在后者基础上增加显示ip的功能。

if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'];
var subtitle = obj['city'] + ' ' + obj['isp'];
var ip = obj['query'];
var description = "国家" + ":" + obj['country'] + '\n' + "城市" + ":" + obj['city'] + '\n' + "运营商" + ":" + obj['isp'] + '\n' +"数据中心" + ":" + obj['org'];


$done({title, subtitle, ip, description});

/*
通用开卡，请先群里设置配置
*/
const $ = new Env('通用集卡');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let UA = require('./USER_AGENTS.js').USER_AGENT;
const notify = $.isNode() ? require('./sendNotify') : '';
/*Obfuscated by JShaman.com*/const got=require('got');let cookiesArr=[],cookie='';if($['isNode']()){Object['keys'](jdCookieNode)['forEach'](_0x22c3d5=>{cookiesArr['push'](jdCookieNode[_0x22c3d5]);});if(process['env']['JD_DEBUG']&&process['env']['JD_DEBUG']==='false')console['log']=()=>{};}else{cookiesArr=[$['getdata']('CookieJD'),$['getdata']('CookieJD2'),...jsonParse($['getdata']('CookiesJD')||'[]')['map'](_0x126fc7=>_0x126fc7['cookie'])]['filter'](_0x5a1e0e=>!!_0x5a1e0e);}!(async()=>{if(!cookiesArr[0x0]){$['msg']($['name'],'【提示】请先获取cookie\x0a直接使用NobyDa的京东签到获取','https://bean.m.jd.com/',{'open-url':'https://bean.m.jd.com/'});return;}let _0x2e79f5=process['env']['QQ_uid'];if(!_0x2e79f5){$['log']('你没有配置环境变量\x20QQ_uid\x20请先去配置再使用～\x0a');return;}else{$['log']('你配置环境的变量\x20QQ_uid='+_0x2e79f5+'\x0a');}$['activeId']='bbd757a627514640a13a16a9bad2fdbd';$['url']='lzkjdz-isv.isvjcloud.com';$['shareUuid']='';$['end']=![];let _0x2fe20b;try{_0x2fe20b=await got['post']({'url':'http://alihua.tsukasa.pro:7410/openCardTeam/getConfigOfUid/card_collecting/'+_0x2e79f5});}catch(_0x5bf6e6){$['log']('配置加载失败');}try{if(_0x2fe20b['body']['startsWith']('{')){let _0x111f85=JSON['parse'](_0x2fe20b['body']);if(_0x111f85['isSuccess']){if(_0x111f85['data']['activeId']){$['activeId']=_0x111f85['data']['activeId'];$['shareUuid']=_0x111f85['data']['shareUuid'];$['log']('你当前的配置为\x20'+$['activeId']);}else{$['log']('请检查配置！');return;}}else{$['log'](_0x111f85['msg']);return;}}else{$['log']('配置读取失败，请与作者取得联系，或加入qq群');return;}}catch(_0x1c04ed){$['log']('配置读取失败，请与作者取得联系，或加入qq群');return;}$['overCk']=[];for(let _0x178efb=0x0;_0x178efb<0x5;_0x178efb++){$['log']('\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a');$['log']('======第'+(_0x178efb+0x1)+'次循环\x20全部助力\x20'+decodeURIComponent(cookiesArr[0x0]['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookiesArr[0x0]['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]));for(let _0x464b5a of $['overCk']){let _0x7d4de1=cookiesArr['indexOf'](_0x464b5a);if(_0x7d4de1>-0x1){$['log'](decodeURIComponent(_0x464b5a['match'](/pt_pin=([^; ]+)(?=;?)/)&&_0x464b5a['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1])+'\x20黑号，清出队列!');cookiesArr['splice'](_0x7d4de1,0x1);}}$['overCk']=[];await $['wait'](0xbb8);await startFor(cookiesArr);cookiesArr['unshift'](cookiesArr['splice'](_0x178efb+0x1,0x1)[0x0]);}})()['catch'](_0x526f88=>$['logErr'](_0x526f88))['finally'](()=>$['done']());async function startFor(_0x3e3638){for(let _0x59ed9e=0x0;_0x59ed9e<_0x3e3638['length'];_0x59ed9e++){await $['wait'](0x3e8);cookie=_0x3e3638[_0x59ed9e];if(cookie){$['UserName']=decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$['index']=_0x59ed9e+0x1;$['isLogin']=!![];$['nickName']='';console['log']('\x0a\x0a******开始【京东账号'+$['index']+'】'+($['nickName']||$['UserName'])+'*********\x0a');if(!$['isLogin']){$['msg']($['name'],'【提示】cookie已失效','京东账号'+$['index']+'\x20'+($['nickName']||$['UserName'])+'\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action',{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});if($['isNode']()){await notify['sendNotify']($['name']+'cookie已失效\x20-\x20'+$['UserName'],'京东账号'+$['index']+'\x20'+$['UserName']+'\x0a请重新登录获取cookie');}continue;}try{await main();}catch(_0x43bdaa){$['logErr'](_0x43bdaa,'执行异常！跳过');if($['index']===0x1){$['log']('亲先检查CK1，或者与作者取得联系！');break;}}}}$['log']('\x0a\x0a\x0a\x0a\x0a\x0a助力完毕开始抽奖!\x0a');cookie=_0x3e3638[0x0];$['doGetPrize']=!![];await main();}async function main(){let _0x4433cb=await setCookie();if(!_0x4433cb){return;}await adLog();let _0xec150b=await activityContent();if(!_0xec150b){$['log']('黑号!');$['overCk']['push'](cookie);return;}if($['index']===0x1&&_0xec150b['active']&&_0xec150b['active']['actUrl']){$['log']('复制到手机浏览器打开活动页面\x20'+_0xec150b['active']['actUrl']);}if($['doGetPrize']){for(let _0x4d3d74=0x0;_0x4d3d74<0xa;_0x4d3d74++){let _0xa0766d=await getPrize();await setCookie();if(_0xa0766d['result']===![]||_0xa0766d===''){$['log']('抽奖完成～');$['doGetPrize']=![];break;}}}else{if($['index']===0x1){let _0xe89dcb=await saveSource();if(_0xe89dcb['data']){let _0x5e48ef=await drawCard(_0xe89dcb['data']);if(_0x5e48ef['result']===![]&&_0x5e48ef['errorMessage']['indexOf']('活动仅限店铺会员参与哦~')!==-0x1){$['shopHomeBaseInfoOK']=!![];let _0x34b123=await getShopHomeBaseInfo('http://shop.m.jd.com/?shopId='+$['shopId']);if($['shopHomeBaseInfoOK']){await join2(_0x34b123['venderId'],_0x34b123['shopId']);}else{await join($['shopId']);}_0x5e48ef=await drawCard();}while(_0x5e48ef['result']){_0x5e48ef=await drawCard(_0xe89dcb['data']);}}}else{let _0x189050=await drawCard();if(_0x189050['result']===![]&&_0x189050['errorMessage']['indexOf']('活动仅限店铺会员参与哦~')!==-0x1){$['shopHomeBaseInfoOK']=!![];let _0x52de53=await getShopHomeBaseInfo('http://shop.m.jd.com/?shopId='+$['shopId']);if($['shopHomeBaseInfoOK']){await join2(_0x52de53['venderId'],_0x52de53['shopId']);}else{await join($['shopId']);}_0x189050=await drawCard();}}}if($['index']===0x1){await setCookie();_0xec150b=await activityContent();$['shareUuid']=_0xec150b['uuid'];$['log']('你的邀请码\x20：'+$['shareUuid']);}}async function setCookie(){let _0x235f41=await activity();$['isvObfuscatorToken']=await getIsvObfuscatorToken();let _0x426164=await shopInfo();if(_0x426164&&_0x426164['data']&&_0x426164['data']['userId']){$['userId']=_0x426164['data']['userId'];$['shopId']=_0x426164['data']['sid'];}let _0x59fa6b=await getHtml();let _0x2ce691=_0x59fa6b['headers']['set-cookie']['filter'](_0x101789=>_0x101789['indexOf']('LZ_TOKEN_KEY')>-0x1)[0x0];let _0x15281f=_0x59fa6b['headers']['set-cookie']['filter'](_0x23ddcd=>_0x23ddcd['indexOf']('LZ_TOKEN_VALUE')>-0x1)[0x0];_0x2ce691=_0x2ce691['substr'](_0x2ce691['indexOf']('=')+0x1);_0x15281f=_0x15281f['substr'](_0x15281f['indexOf']('=')+0x1);$['LZ_TOKEN_KEY']=_0x2ce691['substr'](0x0,_0x2ce691['indexOf'](';'));$['LZ_TOKEN_VALUE']=_0x15281f['substr'](0x0,_0x15281f['indexOf'](';'));$['myPingData']=await getMyPing();if($['myPingData']===''||$['myPingData']==='400001'||!$['myPingData']||!$['myPingData']['secretPin']){$['log']('黑号!');$['overCk']['push'](cookie);return![];}return!![];}function activity(){return new Promise(_0x36444f=>{$['get']({'url':'https://'+$['url']+'/wxCollectCard/activity?activityId='+$['activeId'],'headers':{'User-Agent':UA,'Cookie':cookie},'timeout':0x1388,'retry':{'limit':0x14,'methods':['GET','POST'],'statusCodes':[0x1ed],'calculateDelay':({attemptCount:_0x79d4e1,error:_0x584c26,computedValue:_0x5c7732})=>{if(_0x5c7732){if(_0x584c26['code']==='ETIMEDOUT'){$['log']('ETIMEDOUT重试\x20第'+_0x79d4e1+'次');return 0x3e8;}else{$['log']('493重试\x20第'+_0x79d4e1+'次');return 0x9c40;}}return 0x0;}}},async(_0x24d273,_0x32a229,_0x326442)=>{try{if($['index']===0x1){$['log']('复制到浏览器进入活动页面:\x20https://'+$['url']+'/wxCollectCard/activity?activityId='+$['activeId']);}if(_0x24d273){console['log']($['name']+'\x20API请求失败，请检查网路重试');$['activity']=![];}else{let _0x3840ea=_0x32a229['headers']['set-cookie']['filter'](_0x3273d7=>_0x3273d7['indexOf']('LZ_TOKEN_KEY')>-0x1)[0x0];let _0xc86450=_0x32a229['headers']['set-cookie']['filter'](_0x100ec1=>_0x100ec1['indexOf']('LZ_TOKEN_VALUE')>-0x1)[0x0];_0x3840ea=_0x3840ea['substr'](_0x3840ea['indexOf']('=')+0x1);_0xc86450=_0xc86450['substr'](_0xc86450['indexOf']('=')+0x1);$['LZ_TOKEN_KEY']=_0x3840ea['substr'](0x0,_0x3840ea['indexOf'](';'));$['LZ_TOKEN_VALUE']=_0xc86450['substr'](0x0,_0xc86450['indexOf'](';'));}}catch(_0x42d6a5){$['activity']=![];$['logErr'](_0x42d6a5,_0x32a229);}finally{_0x36444f(_0x326442);}});});}function shopInfo(){return new Promise(_0x434767=>{$['post']({'url':'https://'+$['url']+'/wxCollectCard/shopInfo','body':'activityId='+$['activeId'],'headers':{'Accept':'application/json','User-Agent':UA,'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':'zh-cn','Connection':'keep-alive','Content-Type':'application/x-www-form-urlencoded','Host':''+$['url'],'Origin':'https://'+$['url'],'Referer':'https://'+$['url']+'/wxCollectCard/shopInfo?activityId='+$['activeId'],'Cookie':'IsvToken='+$['isvObfuscatorToken']+';\x20APP_ABBR=CJHY;\x20mba_muid=1628854890637370421985.74.1629765084246;\x20mba_sid=74.4;\x20__jda=60969652.1628854890637370421985.1628854890.1629739606.1629764696.61;\x20__jdb=60969652.3.1628854890637370421985|61.1629764696;\x20__jdc=60969652;\x20__jdv=60969652|kong|t_2011637160_|jingfen|1d7f87ec6fa1438eab7f0652ea31e09f|1629764435496;\x20pre_seq=2;\x20pre_session=1595e0abf33098979c4c29722a536bf05c42f43d|777;\x20LZ_TOKEN_KEY='+$['LZ_TOKEN_KEY']+';\x20LZ_TOKEN_VALUE='+$['LZ_TOKEN_VALUE']},'timeout':0x1388,'retry':{'limit':0x14,'methods':['GET','POST'],'statusCodes':[0x1ed],'calculateDelay':({attemptCount:_0x2293a7,error:_0x529e8b,computedValue:_0x44aa19})=>{if(_0x44aa19){if(_0x529e8b['code']==='ETIMEDOUT'){$['log']('ETIMEDOUT重试\x20第'+_0x2293a7+'次');return 0x3e8;}else{$['log']('493重试\x20第'+_0x2293a7+'次');return 0x9c40;}}return 0x0;}}},async(_0x11723e,_0x530173,_0x19af8e)=>{try{if(_0x11723e){console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{_0x19af8e=JSON['parse'](_0x19af8e);await setLZCookie(_0x530173);}}catch(_0x2e5dbc){$['logErr'](_0x2e5dbc,_0x530173);}finally{_0x434767(_0x19af8e);}});});}function drawCard(_0x20829b){return new Promise(_0x27d866=>{$['post']({'url':'https://'+$['url']+'/wxCollectCard/drawCard','body':'sourceId='+(_0x20829b?_0x20829b:$['shareUuid'])+'&activityId='+$['activeId']+'&type='+(_0x20829b?'0':'1')+'&pinImg=https%3A%2F%2Fimg10.360buyimg.com%2Fimgzone%2Fjfs%2Ft1%2F8136%2F5%2F13801%2F2619%2F5c4ae5efE757a72c1%2F6639cb75e7f0762d.png&pin='+encodeURIComponent($['myPingData']['secretPin'])+'&jdNick='+$['myPingData']['nickname'],'headers':{'User-Agent':UA,'Content-Type':'application/x-www-form-urlencoded','Host':''+$['url'],'Origin':'https://'+$['url'],'Referer':'https://'+$['url']+'/wxCollectCard/activity/1374915?activityId='+$['activeId']+'&shareUuid='+$['shareUuid']+'&shareuserid4minipg=DQCK/ksVMxxhAtP2wbQfI07oeVP9kq2pYSH90mYt4m3fwcJlClpxrfmVYaGKuquQkdK3rLBQpEQH9V4tdrrh0w==&shopid='+$['shopId'],'Cookie':'LZ_TOKEN_KEY='+$['LZ_TOKEN_KEY']+';\x20LZ_TOKEN_VALUE='+$['LZ_TOKEN_VALUE']+';\x20AUTH_C_USER='+$['myPingData']['secretPin']+';\x20'+$['lz_jdpin_token']},'timeout':0x1388,'retry':{'limit':0x14,'methods':['GET','POST'],'statusCodes':[0x1ed],'calculateDelay':({attemptCount:_0x163b2e,error:_0x4c3601,computedValue:_0x5e7657})=>{if(_0x5e7657){if(_0x4c3601['code']==='ETIMEDOUT'){$['log']('ETIMEDOUT重试\x20第'+_0x163b2e+'次');return 0x3e8;}else{$['log']('493重试\x20第'+_0x163b2e+'次');return 0x9c40;}}return 0x0;}}},async(_0x4f2333,_0x1d4578,_0x2b1d2f)=>{try{if(_0x4f2333){console['log'](''+JSON['stringify'](_0x4f2333));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{_0x2b1d2f=JSON['parse'](_0x2b1d2f);await setLZCookie(_0x1d4578);if(_0x2b1d2f['result']){$['log']('=====\x20助力成功！');$['log']('疯狂助攻，抽到\x20'+_0x2b1d2f['data']['reward']['cardName']);}$['log'](_0x2b1d2f['errorMessage']);}}catch(_0x200469){$['logErr'](_0x200469,_0x1d4578);}finally{_0x27d866(_0x2b1d2f);}});});}function saveSource(){return new Promise(_0x5be7a9=>{$['post'](taskPostUrl('/wxCollectCard/saveSource','activityId='+$['activeId']+'&pin='+encodeURIComponent($['myPingData']['secretPin']),'https://'+$['url']+'/wxCollectCard/saveSource'),async(_0x444ebd,_0x2decbb,_0x4dfdea)=>{try{if(_0x444ebd){console['log'](''+JSON['stringify'](_0x444ebd));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{_0x4dfdea=JSON['parse'](_0x4dfdea);await setLZCookie(_0x2decbb);}}catch(_0x1d0195){$['logErr'](_0x1d0195,_0x2decbb);}finally{_0x5be7a9(_0x4dfdea);}});});}function getPrize(){return new Promise(_0x40bda0=>{$['post'](taskPostUrl('/wxCollectCard/getPrize','activityId='+$['activeId']+'&pin='+encodeURIComponent($['myPingData']['secretPin']),'https://'+$['url']+'/wxCollectCard/getPrize'),async(_0x2ff110,_0x50bad6,_0x3e428b)=>{try{if(_0x2ff110){console['log'](''+JSON['stringify'](_0x2ff110));console['log']($['name']+'\x20API请求失败，请检查网路重试');_0x3e428b='';}else{_0x3e428b=JSON['parse'](_0x3e428b);await setLZCookie(_0x50bad6);if(_0x3e428b['result']){$['log']('抽到了:\x20'+JSON['stringify'](_0x3e428b['data']['name']));}else{$['log'](''+_0x3e428b['errorMessage']);}}}catch(_0x2ee583){$['logErr'](_0x2ee583,_0x50bad6);}finally{_0x40bda0(_0x3e428b);}});});}function activityContent(){return new Promise(_0x316faf=>{let _0x23e4b3='activityId='+$['activeId']+'&pin='+encodeURIComponent($['myPingData']['secretPin'])+'&uuid='+$['shareUuid'];$['post'](taskPostUrl('/wxCollectCard/activityContent',_0x23e4b3,'https://'+$['url']+'/wxCollectCard/activityContent'),async(_0x48a99f,_0xc7e9d,_0x32f207)=>{try{if(_0x48a99f){console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{try{_0x32f207=JSON['parse'](_0x32f207);await setLZCookie(_0xc7e9d);}catch(_0x16ad86){_0x32f207=undefined;}}}catch(_0x3d46b8){$['logErr'](_0x3d46b8,_0xc7e9d);}finally{try{_0x316faf(_0x32f207['data']);}catch(_0x233a1a){$['log']('activityContent\x20data.data错误！');_0x316faf(_0x32f207);}}});});}function getIsvObfuscatorToken(){return new Promise(_0x3ae73e=>{$['post']({'url':'https://api.m.jd.com/client.action?functionId=isvObfuscator','body':'\x22adid=7B411CD9-D62C-425B-B083-9AFC49B94228&area=16_1332_42932_43102&body=%7B%22url%22%3A%22https%3A%5C/%5C/cjhydz-isv.isvjcloud.com%22%2C%22id%22%3A%22%22%7D&build=167541&client=apple&clientVersion=9.4.0&d_brand=apple&d_model=iPhone8%2C1&eid=eidId10b812191seBCFGmtbeTX2vXF3lbgDAVwQhSA8wKqj6OA9J4foPQm3UzRwrrLdO23B3E2wCUY/bODH01VnxiEnAUvoM6SiEnmP3IPqRuO%2By/%2BZo&isBackground=N&joycious=48&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=2f7578cb634065f9beae94d013f172e197d62283&osVersion=13.1.2&partner=apple&rfs=0000&scope=11&screen=750%2A1334&sign=60bde51b4b7f7ff6e1bc1f473ecf3d41&st=1613720203903&sv=110&uts=0f31TVRjBStG9NoZJdXLGd939Wv4AlsWNAeL1nxafUsZqiV4NLsVElz6AjC4L7tsnZ1loeT2A8Z5/KfI/YoJAUfJzTd8kCedfnLG522ydI0p40oi8hT2p2sNZiIIRYCfjIr7IAL%2BFkLsrWdSiPZP5QLptc8Cy4Od6/cdYidClR0NwPMd58K5J9narz78y9ocGe8uTfyBIoA9aCd/X3Muxw%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D&wifiBssid=9cf90c586c4468e00678545b16176ed2\x22','headers':{'Accept':'*/*','Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':'zh-cn','Connection':'keep-alive','Content-Type':'application/x-www-form-urlencoded','Host':'api.m.jd.com','Cookie':''+cookie,'User-Agent':UA},'timeout':0x1388,'retry':{'limit':0x14,'methods':['GET','POST'],'statusCodes':[0x1ed],'calculateDelay':({attemptCount:_0x18f51b,error:_0x27cf86,computedValue:_0x9d3253})=>{if(_0x9d3253){if(_0x27cf86['code']==='ETIMEDOUT'){$['log']('ETIMEDOUT重试\x20第'+_0x18f51b+'次');return 0x3e8;}else{$['log']('493重试\x20第'+_0x18f51b+'次');return 0x9c40;}}return 0x0;}}},async(_0x4b8d91,_0x57122d,_0x114318)=>{try{if(_0x4b8d91){console['log'](''+JSON['stringify'](_0x4b8d91));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{_0x114318=JSON['parse'](_0x114318);}}catch(_0x404f57){$['logErr'](_0x404f57,_0x57122d);}finally{_0x3ae73e(_0x114318['token']);}});});}function getMyPing(){return new Promise(_0x5b95f5=>{$['post']({'url':'https://'+$['url']+'/customer/getMyPing','body':'userId='+$['userId']+'&token='+$['isvObfuscatorToken']+'&fromType=APP_pointRedeem','headers':{'User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2011_0\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/604.1.38\x20(KHTML,\x20like\x20Gecko)\x20Version/11.0\x20Mobile/15A372\x20Safari/604.1','Content-Type':'application/x-www-form-urlencoded','Host':''+$['url'],'Referer':'https://'+$['url']+'/customer/getMyPing','Cookie':'LZ_TOKEN_KEY='+$['LZ_TOKEN_KEY']+';\x20LZ_TOKEN_VALUE='+$['LZ_TOKEN_VALUE']+';'},'timeout':0x1388,'retry':{'limit':0x14,'methods':['GET','POST'],'statusCodes':[0x1ed],'calculateDelay':({attemptCount:_0x2ff1ae,error:_0x30c14f,computedValue:_0x539035})=>{if(_0x539035){if(_0x30c14f['code']==='ETIMEDOUT'){$['log']('ETIMEDOUT重试\x20第'+_0x2ff1ae+'次');return 0x3e8;}else{$['log']('493重试\x20第'+_0x2ff1ae+'次');return 0x9c40;}}return 0x0;}}},async(_0x2c76ad,_0x492f4d,_0x33e76d)=>{try{if(_0x2c76ad){console['log'](''+JSON['stringify'](_0x2c76ad));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{_0x33e76d=JSON['parse'](_0x33e76d);await setLZCookie(_0x492f4d);}}catch(_0x5ced88){$['logErr'](_0x5ced88,_0x492f4d);}finally{_0x5b95f5(_0x33e76d['data']);}});});}function getHtml(){return new Promise(_0x3a69f7=>{$['get']({'url':'https://'+$['url']+'/wxCollectCard/activity?activityId='+$['activeId']+'&signUuid='+$['signUuid']+'&shareuserid4minipg=P0CZ6sYjxiDL7YQZAjODCdA1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=1000002505&lng=113.388012&lat=22.511089&sid=89638be87472b15e2772b966514b628w&un_area=19_1657_52093_0','headers':{'User-Agent':'Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2011_0\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/604.1.38\x20(KHTML,\x20like\x20Gecko)\x20Version/11.0\x20Mobile/15A372\x20Safari/604.1','Host':''+$['url'],'Referer':'https://shopmember.m.jd.com/shopcard/?venderId=1000002505&shopId=1000002505&channel=8058&returnUrl=https://'+$['url']+'/wxCollectCard/activity?activityId='+$['activeId']+'&signUuid='+$['signUuid']+'&shareuserid4minipg=P0CZ6sYjxiDL7YQZAjODCdA1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=1000002505&lng=113.388012&lat=22.511089&sid=89638be87472b15e2772b966514b628w&un_area=19_1657_52093_0'},'timeout':0x1388,'retry':{'limit':0x14,'methods':['GET','POST'],'statusCodes':[0x1ed],'calculateDelay':({attemptCount:_0x30bd2b,error:_0x2e744d,computedValue:_0x23d7ef})=>{if(_0x23d7ef){if(_0x2e744d['code']==='ETIMEDOUT'){$['log']('ETIMEDOUT重试\x20第'+_0x30bd2b+'次');return 0x3e8;}else{$['log']('493重试\x20第'+_0x30bd2b+'次');return 0x9c40;}}return 0x0;}}},async(_0x5b91b7,_0x39673a,_0x28fe88)=>{try{if(_0x5b91b7){console['log'](''+JSON['stringify'](_0x5b91b7));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{}}catch(_0x42097){$['logErr'](_0x42097,_0x39673a);}finally{_0x3a69f7(_0x39673a);}});});}function getShopHomeBaseInfo(_0x14ac4d){let _0x120b74;let _0x2a06b6;return new Promise(_0x2aa813=>{$['get']({'url':''+_0x14ac4d,'headers':{'Accept':'*/*','Accept-Encoding':'gzip,\x20deflate,\x20br','Connection':'keep-alive','Cookie':cookie}},async(_0x243706,_0x498ff5,_0x8d497b)=>{try{if(_0x243706){console['log']('ShopHomeBaseInfo\x20error\x20'+JSON['stringify'](_0x243706)+'\x20不影响执行');$['shopHomeBaseInfoOK']=![];}else{let _0x1b77e4=new RegExp('shopId:\x20\x27(.*)\x27');let _0x38ef70=new RegExp('venderId:\x20\x27(.*)\x27');let _0x42068e=new RegExp('shopName:\x20\x5c(\x27(.*)\x27\x5c)');let _0x449a5f=_0x1b77e4['exec'](_0x8d497b);let _0x224153=_0x38ef70['exec'](_0x8d497b);let _0x409566=_0x42068e['exec'](_0x8d497b);if(_0x449a5f['length']===0x2&&_0x224153['length']===0x2){try{_0x120b74=_0x449a5f[0x1];_0x2a06b6=_0x224153[0x1];}catch(_0x95f394){$['shopHomeBaseInfoOK']=![];}}else{$['shopHomeBaseInfoOK']=![];}if(_0x409566['length']===0x2){$['log']('入会\x20'+_0x409566[0x1]);}}}catch(_0x414a5c){$['shopHomeBaseInfoOK']=![];$['logErr'](_0x414a5c,_0x498ff5);}finally{let _0x47a138={};if(_0x120b74&&_0x2a06b6){_0x47a138={'shopId':_0x120b74,'venderId':_0x2a06b6};}_0x2aa813(_0x47a138);}});});}function adLog(){return new Promise(_0x58064f=>{$['post']({'url':'https://'+$['url']+'/common/accessLog','body':'venderId=0&code=99&pin='+encodeURIComponent($['myPingData']['secretPin'])+'&activityId='+$['activeId']+'&pageUrl=https%3A%2F%2F'+$['url']+'%2FmicroDz%2Finvite%2Factivity%2Fwx%2Fview%2Findex%2F2613070%3FactivityId%3D'+$['activeId']+'%26inviter%3Djzv2jbYRftpJUlB6E7%2Ff3%2FL7ldxmgdCpzmNX2HGi4eBuw30v%2FPoVBgxrRDHHbTlt%26inviterImg%3Dhttp%3A%2F%2Fstorage.360buyimg.com%2Fi.imageUpload%2F6a645f73495a76594b617266594d5731363237363637373836333031%5Fmid.jpg%26inviterNickName%3Dj%5FsIZvYKarfYMW%26shareuserid4minipg%3Djzv2jbYRftpJUlB6E7%252Ff3%252FL7ldxmgdCpzmNX2HGi4eBuw30v%252FPoVBgxrRDHHbTlt%26shopid%3D599119%26lng%3D0.000000%26lat%3D0.000000%26sid%3D5fa6c7778669e4865e2e7e7ba5ea098w%26un%5Farea%3D17%5F1458%5F1463%5F43894&subType=','headers':{'User-Agent':'Mozilla/5.0\x20(Linux;\x20U;\x20Android\x208.0.0;\x20zh-cn;\x20Mi\x20Note\x202\x20Build/OPR1.170623.032)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/61.0.3163.128\x20Mobile\x20Safari/537.36\x20XiaoMi/MiuiBrowser/10.1.1','Host':''+$['url'],'Content-Type':'application/x-www-form-urlencoded;\x20Charset=UTF-8','Referer':'https://'+$['url']+'/common/accessLog','Cookie':'LZ_TOKEN_KEY='+$['LZ_TOKEN_KEY']+';\x20LZ_TOKEN_VALUE='+$['LZ_TOKEN_VALUE']+';\x20AUTH_C_USER='+$['myPingData']['secretPin']+';\x20'+$['lz_jdpin_token']},'timeout':0x1388,'retry':{'limit':0x14,'methods':['GET','POST'],'statusCodes':[0x1ed],'calculateDelay':({attemptCount:_0x23c5bf,error:_0x14c081,computedValue:_0x3e1dc0})=>{if(_0x3e1dc0){if(_0x14c081['code']==='ETIMEDOUT'){$['log']('ETIMEDOUT重试\x20第'+_0x23c5bf+'次');return 0x3e8;}else{$['log']('493重试\x20第'+_0x23c5bf+'次');return 0x9c40;}}return 0x0;}}},async(_0x53ffe1,_0x58381a,_0x4d19a6)=>{try{if(_0x53ffe1){console['log'](''+JSON['stringify'](_0x53ffe1));console['log']($['name']+'\x20API请求失败，请检查网路重试');}else{}}catch(_0x2f0129){$['logErr'](_0x2f0129,_0x58381a);}finally{_0x58064f(_0x4d19a6);}});});}function join(_0x5c7960){return new Promise(_0x2d7bde=>{$['get'](ruhui(''+_0x5c7960),async(_0x3fa79b,_0x1219ed,_0x3ed792)=>{try{_0x3ed792=_0x3ed792['match'](/(\{().+\})/)[0x1];_0x3ed792=JSON['parse'](_0x3ed792);if(_0x3ed792['success']==!![]){$['log'](_0x3ed792['message']);}else if(_0x3ed792['success']==![]){$['log'](_0x3ed792['message']);}}catch(_0x38aacc){$['logErr'](_0x38aacc,_0x1219ed);}finally{_0x2d7bde(_0x3ed792);}});});}function ruhui(_0x20103a){return{'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body={\x22venderId\x22:\x22'+_0x20103a+'\x22,\x22shopId\x22:\x22'+_0x20103a+'\x22,\x22bindByVerifyCodeFlag\x22:1,\x22registerExtend\x22:{\x22v_sex\x22:\x22未知\x22,\x22v_name\x22:\x22名称\x22,\x22v_birthday\x22:\x222021-0'+(Math['round'](Math['random']()*0x8)+0x1)+'-0'+(Math['round'](Math['random']()*0x8)+0x1)+'\x22},\x22writeChildFlag\x22:0,\x22activityId\x22:1454199,\x22channel\x22:401}&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1627049995456_46808','headers':{'Content-Type':'text/plain;\x20Charset=UTF-8','Origin':'https://api.m.jd.com','Host':'api.m.jd.com','accept':'*/*','User-Agent':'Mozilla/5.0\x20(Linux;\x20U;\x20Android\x208.0.0;\x20zh-cn;\x20Mi\x20Note\x202\x20Build/OPR1.170623.032)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/61.0.3163.128\x20Mobile\x20Safari/537.36\x20XiaoMi/MiuiBrowser/10.1.1','content-type':'application/x-www-form-urlencoded','Referer':'https://shopmember.m.jd.com/shopcard/?venderId='+_0x20103a+'&shopId='+_0x20103a+'&venderType=1&channel=102&returnUrl=https%%3A%%2F%%2Flzdz1-isv.isvjcloud.com%%2Fdingzhi%%2Fdz%%2FopenCard%%2Factivity%%2F7376465%%3FactivityId%%3Dd91d932b9a3d42b9ab77dd1d5e783839%%26shareUuid%%3Ded1873cb52384a6ab42671eb6aac841d','Cookie':cookie}};}function join2(_0x1e9013,_0x1ffa9c){return new Promise(_0x434db9=>{$['get'](ruhui2(_0x1e9013,_0x1ffa9c),async(_0x37bbe9,_0x4b782e,_0x542c34)=>{try{_0x542c34=_0x542c34['match'](/(\{().+\})/)[0x1];_0x542c34=JSON['parse'](_0x542c34);if(_0x542c34['success']==!![]){$['log'](_0x542c34['message']);}else if(_0x542c34['success']==![]){$['log'](_0x542c34['message']);}}catch(_0x3fc2cd){$['logErr'](_0x3fc2cd,_0x4b782e);}finally{_0x434db9(_0x542c34);}});});}function ruhui2(_0x1bd7dc,_0x24fb07){return{'url':'https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body=%7B%22venderId%22%3A%22'+_0x1bd7dc+'%22%2C%22shopId%22%3A%22'+_0x24fb07+'%22%2C%22bindByVerifyCodeFlag%22%3A1%2C%22registerExtend%22%3A%7B%22v_sex%22%3A%22%E6%9C%AA%E7%9F%A5%22%2C%22v_birthday%22%3A%222021-0'+(Math['round'](Math['random']()*0x8)+0x1)+'-0'+(Math['round'](Math['random']()*0x8)+0x1)+'%22%2C%22v_name%22%3A%22yyy%22%7D%2C%22writeChildFlag%22%3A0%2C%22channel%22%3A8802%7D&client=H5&clientVersion=9.2.0&uuid=88888&jsonp=jsonp_1628345987749_66821','headers':{'Content-Type':'text/plain;\x20Charset=UTF-8','Origin':'https://api.m.jd.com','Host':'api.m.jd.com','accept':'*/*','User-Agent':'Mozilla/5.0\x20(Linux;\x20U;\x20Android\x208.0.0;\x20zh-cn;\x20Mi\x20Note\x202\x20Build/OPR1.170623.032)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Version/4.0\x20Chrome/61.0.3163.128\x20Mobile\x20Safari/537.36\x20XiaoMi/MiuiBrowser/10.1.1','content-type':'application/x-www-form-urlencoded','Referer':'https://shopmember.m.jd.com/shopcard/?venderId='+_0x1bd7dc+'&shopId='+_0x24fb07+'&channel=8802&returnUrl=https://cjhydz-isv.isvjcloud.com/microDz/invite/activity/wx/view/index/4438790?activityId='+$['activityId']+'&inviter='+$['DQCK']+'&inviterImg=http://storage.360buyimg.com/i.imageUpload/6a645f3639613631633262633231303231363238313235383234363133_mid.jpg&inviterNickName=Tsukasa%E9%B1%BC%E8%9B%8B&shareuserid4minipg=DQCK%2FksVMxxhAtP2wbQfI9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=599119&lng=113.388014&lat=22.510994&sid=09fdc8e908526b5538a4ad4a265f40dw&un_area=19_1657_52093_0','Cookie':cookie}};}function setLZCookie(_0x33b157){let _0x48bb53=_0x33b157['headers']['set-cookie']['filter'](_0x590c6b=>_0x590c6b['indexOf']('LZ_TOKEN_KEY')>-0x1)[0x0];let _0x4494ba=_0x33b157['headers']['set-cookie']['filter'](_0x3db07b=>_0x3db07b['indexOf']('LZ_TOKEN_VALUE')>-0x1)[0x0];if(_0x48bb53&&_0x4494ba){_0x48bb53=_0x48bb53['substr'](_0x48bb53['indexOf']('=')+0x1);_0x4494ba=_0x4494ba['substr'](_0x4494ba['indexOf']('=')+0x1);$['LZ_TOKEN_KEY']=_0x48bb53['substr'](0x0,_0x48bb53['indexOf'](';'));$['LZ_TOKEN_VALUE']=_0x4494ba['substr'](0x0,_0x4494ba['indexOf'](';'));}else{}}function taskPostUrl(_0x23dddd,_0x5a8f90,_0xfa76ee){return{'url':'https://'+$['url']+_0x23dddd,'body':_0x5a8f90,'headers':{'Host':''+$['url'],'Accept':'application/json','X-Requested-With':'XMLHttpRequest','Accept-Language':'zh-cn','Accept-Encoding':'gzip,\x20deflate,\x20br','Content-Type':'application/x-www-form-urlencoded;\x20Charset=UTF-8','Origin':'https://'+$['url'],'Connection':'keep-alive','Referer':_0xfa76ee?_0xfa76ee:'https://'+$['url']+'/wxCollectCard/activity?activityId='+$['activeId']+'&signUuid=e39b935b34e64f5fbc4aefa6cb00d0d3&shareuserid4minipg=DQCK%2FksVMxxhAtP2wbQfI9A1Drq3za4lh6LFLfledF1cdSiqMbCx5edEEaL3RnCSkdK3rLBQpEQH9V4tdrrh0w%3D%3D&shopid=687475&lng=113.388014&lat=22.510994&sid=5503888e57b3e547528ca7d389a5a7aw&un_area=19_1657_52093_0','User-Agent':UA,'Cookie':cookie+'\x20LZ_TOKEN_KEY='+$['LZ_TOKEN_KEY']+';\x20LZ_TOKEN_VALUE='+$['LZ_TOKEN_VALUE']+';\x20AUTH_C_USER='+$['myPingData']['secretPin']+';\x20__jd_ref_cls=Mnpm_ComponentApplied;\x20'+$['lz_jdpin_token']},'timeout':0x1388,'retry':{'limit':0x14,'methods':['GET','POST'],'statusCodes':[0x1ed],'calculateDelay':({attemptCount:_0x35e4a8,error:_0x44285f,computedValue:_0x5ba2b3})=>{if(_0x5ba2b3){if(_0x44285f['code']==='ETIMEDOUT'){$['log']('ETIMEDOUT重试\x20第'+_0x35e4a8+'次');return 0x3e8;}else{$['log']('493重试\x20第'+_0x35e4a8+'次');return 0x9c40;}}return 0x0;}}};}


function jsonParse(str) {
    if (typeof str == "string") {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log(e);
            $.msg($.name, '', '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie')
            return [];
        }
    }
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})) {var _0xod6='jsjiami.com.v6',_0x5f52=[_0xod6,'w51kwqPDuQJRw40=','QMOtwrLDm1bDoA==','w4Q2woLChA==','KWvClA7CvA==','w5DDsXjClA==','w4TDnsOvD8KKa0EOOkM=','wqTCsDjDgcKfWA==','wo/DtwRBw5I=','w5fDk8Kdw6c=','wrc5aMO2wp1vUcKdw6l3bcK6Fw==','wqHCpMKlwoA=','GybCiQwFcQ==','w6PDjsKmIQ==','wp7ClG4QEg==','DcOgwo3DrQ==','A2LCoXp/','eUpzwoo=','NW3Co8Oa','DHXCvH1eLMK2','w73Dm8K7Qx0dwrI=','wpTCqzfDgcKPRcO3wr8tMxrCtg==','WEp5wodLUC98fAY1woQ=','V1YwKMOAw4xFM140FUrDtWfDqcKOTyvCuMKMwobDhkvDoQ7DvsK8wpd8UyfDm2Q=','w43DqhPDvMKuLyQ=','w655JwnDpsKRwpU=','OTrClBEHcRs9wq3Dl8KRw7XCqm0=','wqfCp8KCwoZzSMOs','D8Odw6tzYUc=','EMO7wrvDthMgwpc=','hGjsjiaMrVbORXmei.cbPom.wBv6=='];(function(_0x4b315c,_0x2d152c,_0x35a9d1){var _0x151d7f=function(_0x44faea,_0x1bbc5e,_0x2b4589,_0x12f898,_0x3a96aa){_0x1bbc5e=_0x1bbc5e>>0x8,_0x3a96aa='po';var _0xdfabfe='shift',_0x59375f='push';if(_0x1bbc5e<_0x44faea){while(--_0x44faea){_0x12f898=_0x4b315c[_0xdfabfe]();if(_0x1bbc5e===_0x44faea){_0x1bbc5e=_0x12f898;_0x2b4589=_0x4b315c[_0x3a96aa+'p']();}else if(_0x1bbc5e&&_0x2b4589['replace'](/[hGMrVbORXebPwB=]/g,'')===_0x1bbc5e){_0x4b315c[_0x59375f](_0x12f898);}}_0x4b315c[_0x59375f](_0x4b315c[_0xdfabfe]());}return 0xa26d9;};return _0x151d7f(++_0x2d152c,_0x35a9d1)>>_0x2d152c^_0x35a9d1;}(_0x5f52,0xf9,0xf900));var _0x44c0=function(_0x2f66e6,_0x1cb668){_0x2f66e6=~~'0x'['concat'](_0x2f66e6);var _0x19549e=_0x5f52[_0x2f66e6];if(_0x44c0['bZyggj']===undefined){(function(){var _0xdb55ee=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4cce74='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xdb55ee['atob']||(_0xdb55ee['atob']=function(_0xd3e32d){var _0x5f1202=String(_0xd3e32d)['replace'](/=+$/,'');for(var _0x520c09=0x0,_0x106eb8,_0x3bb352,_0x41f232=0x0,_0x6fbd48='';_0x3bb352=_0x5f1202['charAt'](_0x41f232++);~_0x3bb352&&(_0x106eb8=_0x520c09%0x4?_0x106eb8*0x40+_0x3bb352:_0x3bb352,_0x520c09++%0x4)?_0x6fbd48+=String['fromCharCode'](0xff&_0x106eb8>>(-0x2*_0x520c09&0x6)):0x0){_0x3bb352=_0x4cce74['indexOf'](_0x3bb352);}return _0x6fbd48;});}());var _0x10ef23=function(_0x143ea3,_0x1cb668){var _0x22fc53=[],_0xc7a217=0x0,_0x46d4cc,_0x5102b5='',_0x545d19='';_0x143ea3=atob(_0x143ea3);for(var _0x43af24=0x0,_0x4586af=_0x143ea3['length'];_0x43af24<_0x4586af;_0x43af24++){_0x545d19+='%'+('00'+_0x143ea3['charCodeAt'](_0x43af24)['toString'](0x10))['slice'](-0x2);}_0x143ea3=decodeURIComponent(_0x545d19);for(var _0x1c5bc6=0x0;_0x1c5bc6<0x100;_0x1c5bc6++){_0x22fc53[_0x1c5bc6]=_0x1c5bc6;}for(_0x1c5bc6=0x0;_0x1c5bc6<0x100;_0x1c5bc6++){_0xc7a217=(_0xc7a217+_0x22fc53[_0x1c5bc6]+_0x1cb668['charCodeAt'](_0x1c5bc6%_0x1cb668['length']))%0x100;_0x46d4cc=_0x22fc53[_0x1c5bc6];_0x22fc53[_0x1c5bc6]=_0x22fc53[_0xc7a217];_0x22fc53[_0xc7a217]=_0x46d4cc;}_0x1c5bc6=0x0;_0xc7a217=0x0;for(var _0x5e20f7=0x0;_0x5e20f7<_0x143ea3['length'];_0x5e20f7++){_0x1c5bc6=(_0x1c5bc6+0x1)%0x100;_0xc7a217=(_0xc7a217+_0x22fc53[_0x1c5bc6])%0x100;_0x46d4cc=_0x22fc53[_0x1c5bc6];_0x22fc53[_0x1c5bc6]=_0x22fc53[_0xc7a217];_0x22fc53[_0xc7a217]=_0x46d4cc;_0x5102b5+=String['fromCharCode'](_0x143ea3['charCodeAt'](_0x5e20f7)^_0x22fc53[(_0x22fc53[_0x1c5bc6]+_0x22fc53[_0xc7a217])%0x100]);}return _0x5102b5;};_0x44c0['AxRWaH']=_0x10ef23;_0x44c0['shbJYQ']={};_0x44c0['bZyggj']=!![];}var _0x526710=_0x44c0['shbJYQ'][_0x2f66e6];if(_0x526710===undefined){if(_0x44c0['fPaLuk']===undefined){_0x44c0['fPaLuk']=!![];}_0x19549e=_0x44c0['AxRWaH'](_0x19549e,_0x1cb668);_0x44c0['shbJYQ'][_0x2f66e6]=_0x19549e;}else{_0x19549e=_0x526710;}return _0x19549e;};if(t[_0x44c0('0','8h9$')]&&t[_0x44c0('1','nsUa')]&&!t[_0x44c0('2','#M(i')][_0x44c0('3','53JR')]&&(t['headers'][_0x44c0('4','DwGu')]=_0x44c0('5','v@TA')),t[_0x44c0('6','(Sqa')]&&delete t[_0x44c0('7','CDFo')][_0x44c0('8','K^Qq')],this[_0x44c0('9','jU0X')]()||this[_0x44c0('a','@Uig')]())this[_0x44c0('b','4rti')]()&&this['isNeedRewrite']&&(t['headers']=t[_0x44c0('c','gwGb')]||{},Object[_0x44c0('d','XeW)')](t['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x44c0('e','v@v0')](t,(_0x17394a,_0x153924,_0x1b381e)=>{var _0x54c0c8={'ZcOyP':function(_0x52e959,_0x2f4778){return _0x52e959&&_0x2f4778;},'MGamj':function(_0x4e19cb,_0xb744b9,_0x58a4df,_0x45b643){return _0x4e19cb(_0xb744b9,_0x58a4df,_0x45b643);}};_0x54c0c8[_0x44c0('f','qUN#')](!_0x17394a,_0x153924)&&(_0x153924[_0x44c0('10','&v]b')]=_0x1b381e,_0x153924[_0x44c0('11','1Jny')]=_0x153924[_0x44c0('12','53JR')]),_0x54c0c8[_0x44c0('13','huZJ')](e,_0x17394a,_0x153924,_0x1b381e);});else if(this['isQuanX']())t['method']=_0x44c0('14','3CTP'),this[_0x44c0('15','M3*2')]&&(t[_0x44c0('16','jU0X')]=t['opts']||{},Object[_0x44c0('17','K^Qq')](t[_0x44c0('18','ft%o')],{'hints':!0x1})),$task[_0x44c0('19','CSiQ')](t)['then'](_0x5a98d7=>{var _0x41088b={'hOWTQ':function(_0x46ad4a,_0x20eb74,_0x4ec8fb,_0x41447f){return _0x46ad4a(_0x20eb74,_0x4ec8fb,_0x41447f);}};const {statusCode:s,statusCode:i,headers:r,body:o}=_0x5a98d7;_0x41088b['hOWTQ'](e,null,{'status':s,'statusCode':i,'headers':r,'body':o},o);},_0x9da533=>e(_0x9da533));else if(this['isNode']()){this['initGotEnv'](t);const {url:s,...i}=t;this['got']['post'](s,i)[_0x44c0('1a','4rti')](_0x5a4441=>{var _0x35f738={'xJZxk':function(_0x542cd6,_0x5d2d82,_0x3d328f,_0x140a11){return _0x542cd6(_0x5d2d82,_0x3d328f,_0x140a11);}};const {statusCode:s,statusCode:i,headers:r,body:o}=_0x5a4441;_0x35f738[_0x44c0('1b','4&8k')](e,null,{'status':s,'statusCode':i,'headers':r,'body':o},o);},_0x2c7f65=>{var _0xe62b57={'HJKaL':function(_0x2bc20e,_0x4c0ac7,_0x110fe5,_0x3b4ea6){return _0x2bc20e(_0x4c0ac7,_0x110fe5,_0x3b4ea6);}};const {message:s,response:i}=_0x2c7f65;_0xe62b57['HJKaL'](e,s,i,i&&i[_0x44c0('1c','DwGu')]);});};_0xod6='jsjiami.com.v6';}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}



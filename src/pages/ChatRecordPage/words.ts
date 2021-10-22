const words_obj = {
  words_1: {
    me_id: 'a', //me_id是目前聊天框主视角的角色id
    words: '',
  },
  words_2: {
    me_id: 'b',
    words: '',
  },
};

/*
  char: a:♀-猫草, b:♀-被盗当事人, c:♂-爱凑热闹,说话比较幼稚, d:♂-程序员,理性派,
   e:♂-东北大哥,曾被骗过,容易冲动, f:♀-偶尔出现的群友, g:♂-偶尔出现的群友, h:♂-b的土豪朋友
  */
words_obj.words_1.words =
  'date#2022 / 10 / 13\t\t19:25$\
b#朋友们，我银行卡好像被盗刷了$\
c#\t\n（表情包：\n震惊）\n\n\n$\
e#\t\n（表情包：\n震惊）\n\n$\
d#\t\n（表情包：\n震惊）\n\n\n$\
c#怎么了怎么了$\
b#我刚刚收到一张猫草电器的请求书，但我没买过他们家的东西啊$\
b#\t\n（图片：单子）\n\n\n$\
d#会不会是寄错了$\
b#银行账号和名字都对得上$\
b#我现在就是不确定这是假账单，还是有人盗刷了我的卡$\
e#这肯定是骗你打钱的！$\
e#我之前就被骗过$\
e#那时我刚在网上买了电脑，几天后收到请求书说扣费不成功要我重新付钱$\
e#单子和平时交水电费那种一模一样$\
e#看着挺官方的我就信了$\
e#\t\n（表情包：\n靠）\n\n\n$\
e#钱打过去才发现被骗了 +$\
c#啧啧啧太惨了$\
b#但我最近也没买东西啊$\
d#🤔$\
f#现在还有发实体文件的骗子啊 我以为都是打电话的$\
e#是吧$\
e#做得可逼真了$\
e#所以你这个别理它就好了$\
b#我现在更担心有人黑了我的账号$\
d#请求书是银行汇款吗？$\
b#银行和便利店付款都可以$\
d#要不问问官方客服？$\
c#\t\n（发图：\n圈起账单上\n号码）\n\n\n\n\n$\
c#上面好像有客服电话$\
c#打过去看看？$\
e#别打啊，这肯定是骗子电话$\
e#你打过去他就会说啊你没买过呀 那我发你一个退货链接$\
e#然后你点进去就凉了，所有信息密码什么的就被盗走了$\
d#对，要打也打官网上的电话$\
b#其实我刚刚已经打了这个号码了..$\
b#我问她收货地址是哪，她说现在营业时间外，明天才能查到$\
c#这也太假了吧$\
c#摆明就是在忽悠你 +$\
b#我再打官网上的电话看看$\
c#\t\n(表情包：\n去吧)\n\n$\
e#最近怎么了$\
e#那么多骗子$\
d#我前几天刚接了个冒充大使馆的$\
d#说有个犯罪团伙被抓后供出了我的名字$\
d#不配合调查就把我遣返回国 +$\
e#哈哈哈哈$\
c#哈哈哈哈哈哈哈哈哈$\
d#不知是不是错觉感觉疫情后骗子变多了$\
c#可能因为他们更适应在宅办公$\
c#效率反而高了$\
a#终于看完了你们聊天记录..$\
d#也可能很多人失业后改行当骗子了😂$\
a#骗子永远不会失业😂$\
f#记得看过一个视频，有记者采访诈骗村的人，全村都是骗子，人家觉得自己是靠真本事赚钱，\
那就是个手艺，根本不觉得有什么道德亏欠 +$\
c#妈呀 说的好有道理，差点被洗脑了 +$\
a#我觉得没有创造新价值的都不能叫手艺 +$\
b#卧槽$\
c#？？怎么了$\
b#我打了官网的电话，和刚才是同一个人接的！$\
c#你怎么知道同一个人$\
b#声音一模一样！她还问我是不是刚刚那个😂$\
e#说不定骗子拦截了官网电话$\
c#或者这个客服小姐姐就是骗子！$\
a#客服兼职骗子吗哈哈哈哈$\
e#笑死$\
b#太诡异了$\
b#明明是不同号码$\
b#他们公司只有这一个客服吗？？？$\
d#要是怀疑客服的话下次打电话的时候跟她商量下要不要报个警 +$\
c#哈哈哈哈$\
b#拦截也不是没可能$\
b#我之前有朋友被骗过，那帮骗子直接做了个盗版的中国法院官网给他 +$\
b#而且百度搜索假官网上的电话，出来的信息也显示所属机关是法院$\
c#那么恐怖的吗$\
a#感觉这个请求书像是真的..应该是有人盗刷了你的卡吧$\
d#我估计什么都是真的 就银行账户是假的$\
b#有道理啊！！$\
a#对哎$\
e#😲$\
d#骗子从猫草电器买了台空调，然后把请求书上的信息篡改成你的，再发给你让你帮他付钱$\
d#所以那个客服小姐姐应该是真的$\
e#所以应该就是请求书被篡改了，除了付款人，上面其他信息都是真的！$\
b#但我没买肯定不会付钱啊$\
e#骗子就是广撒网，说不定就碰到一个刚好买了空调的人，就被骗了$\
e#像我上次一样 +$\
b#这骗子的骗人成本怎么看起来这么高啊😂$\
b#还寄请求书$\
b#邮费都赚不回来吧$\
a#可能是像发小广告的一样 自己一家家塞的😂$\
d#广撒网，基数够大，有一小部分人上当就足够他们赚了$\
d#所以那种上来就说他们是骗子的人其实很节省他们的时间成本，因为一开口就知道是骗不到的人，直接挂电话换下一个就完了$\
d#总之先等明天客服帮你查收货地址吧$\
b#嗯嗯$\
e#拿到地址我们去打爆骗子的头！$\
a#\t\n（表情包:\n这就是大佬吧）\n$\
e#\t\n（表情包）\n\n$\
c#\t\n（表情包）\n\n\n\n$\
d#报警吧😂$\
c#坐等后续$\
a#坐等后续$\
#【第二天】$\
g#\t\n（图片）\n\n$\
g#早霞$\
g#好久没看过了$\
a#你今天怎么起那么早$\
g#我刚下班....$\
date#2022 / 10 / 14\t\t11:03$\
b#朋友们$\
b#官方帮我查了，说我确实有买$\
c#所以骗子真的是下了单，然后篡改请求书让你付钱？$\
b#而且$\
e#不过你不付钱他们也不会发货吧$\
b#收货地址还是我家？？？$\
b#\t\n（表情包：\n黑人问号）\n\n\n$\
e#啊$\
a#\t\n（表情包：\n喵喵喵？）\n\n$\
c#\t\n（表情包：\n？？？）\n$\
d#是不是系统出错了啊$\
e#可能骗子本来想骗你一台空调，结果地址忘记改了哈哈哈哈$\
c#不是说过几天冷空气要来了嘛$\
c#你可以干脆买下来自己用哈哈哈哈$\
e#骗子可能就是想让你这么想$\
e#然后在你付了款后改地址 +$\
c#\t\n\n（表情包\n惊恐）\n\n\n$\
c#有道理$\
a#你们说$\
a#会不会是猫草电器为了提高销量故意给人送账单 +$\
c#我的天新型营销方式吗$\
d#哈哈哈硬核强买强卖$\
b#我觉得..$\
b#要不我还是....$\
b#报警吧 +$\
f#警察的话 如果没被骗是不是就不能立案的$\
e#我上次被骗的时候 我问信用卡公司说要不然我报警吧 信用卡说这种事太多了 警察是不会管的 $\
a#我信用卡上次被盗刷$\
a#maocao银行打电话问我是不是我刷的$\
a#我说不是$\
a#他们立马就把账号冻结$\
a#直接给我换了张卡$\
c#我也用的maocao卡，以前也是不小心点进钓鱼网站，他们马上给我拦截了$\
c#没有扣钱，当即就给我冻结换了卡$\
a#嗯嗯，从此爱上maocao卡$\
b#我也是maocao，不过是为了它的可爱卡面$\
b#\t\n（图片:\n信用卡）\n\n$\
b#maocao的design真的很圈粉$\
f#我原本也是这只猫猫！$\
f#结果升级了金卡后，就变成了最丑的基础款$\
f#气死我了$\
a#哈哈哈哈$\
c#哈哈哈哈$\
#【这段是真的哈哈哈哈，群里聊着聊着就开始各种种草信用卡了】$\
date#2022/10/16\t08:12$\
c#卧槽今天好冷啊$\
a#我穿着短袖短裤爬出被窝都惊呆了$\
c#一夜之间发生了什么$\
c#不想出门上班啊啊啊$\
a#\t\n（表情包：\n诶嘿嘿）\n$\
a#这就是在宅办公的好处$\
e#羡慕$\
c#羡慕$\
d#羡慕$\
c#我都想请病假了$\
b#\t\n（图片：\n聊天记录）\n\n\n\n\n\n$\
e#我想放寒假$\
b#\t\n（图片：\n聊天记录）\n\n\n\n\n\n$\
#【停顿了一会儿后】$\
e#？$\
d#？？$\
c#？？？$\
a#？？？？$\
#【点开图片】$\
#【沸腾的水突然平静，然后旋涡卷向石头】$\
b#对不起这几天打扰大家了$\
b#那个空调是一个朋友想偷偷送我的礼物$\
b#估计他也没想到请求书会发到我家去....$\
b#我已经和猫草公司商量退款了$\
b#对不起大家 真的太尴尬了$\
b#谢谢你们帮我分析了那么多$\
#【群里又安静了片刻，然后突然炸锅】$\
e#卧槽、$\
c#卧槽卧槽卧槽$\
c#能把这个朋友介绍我认识吗 +$\
e#我也想要这样的朋友$\
g#求认识+1$\
c#你那个朋友还缺朋友吗 + + +$\
d#就算认识了人家也不会送空调给你们 +$\
c# +$\
b#😂$\
#【我..】$\
#【我此时此刻只想说——】$\
#【↑（请弹幕自由发挥）】$\
';
words_obj.words_2.words =
  'b#哈哈哈$\
date#2022/10/16\t08:01$\
h#空调收到了吗$\
h#\t\n（表情包：\n探头）\n\n$\
date#08:05$\
b#？？？$\
h# +$\
b#啊？$\
h#啊？还没送到吗？$\
b#那台空调是你买的！？？？？？$\
h#喜欢吗~$\
h#不是说这个星期会降温嘛$\
h#之前听你说你家空调制暖不太好$\
h#就想买台新的送你$\
b# + + +$\
';

export default words_obj;

/* ===== 永無島三部曲總入口 — 互動與資料邏輯 ===== */
(() => {
'use strict';

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const IMG = n => `assets/img/${n}.webp`;

/* ---------- 三部曲完整設定 ---------- */
const BOOKS = [
  {
    id: 'b1',
    url: 'https://grethel1988-ai.github.io/neverland-flight-1/',
    badge: '第一學習階段｜國小低年級（一、二年級）',
    title: '永無島的初次飛翔',
    sub: '星空、仙塵與遺失的玩具',
    cover: 'cover1',
    bg: 'neverland',
    proLabel: '前情提要：尋熊小隊出發',
    prologue: '「只要想著快樂的事，你就能飛！」\n達林家最小的弟弟麥克緊緊抱著少了一隻眼睛的泰迪熊，在奇妙仙子金色仙塵的圍繞下，搖搖晃晃地飛進了永無島。然而，一陣怪風吹過，小熊玩偶掉進了島上的神祕角落！\n穿著狐狸裝的史萊特利、臭鼬裝的圖特斯等失落男孩決定組成「尋熊小隊」。樹叢裡傳來「滴答、滴答」的聲音……你，願意加入嗎？',
    meta: [
      { lbl: '挑戰難度', val: '見習飛行員／仙塵冒險家<br>永無島英雄' },
      { lbl: '生命象徵', val: '🧸 彩色小熊軟糖' },
      { lbl: '榮譽證書', val: '' }
    ],
    stages: [
      {
        name: '第一關｜精靈山谷的仙塵步道',
        scene: 'neverland',
        sceneName: '閃耀精靈山谷',
        desc: '奇妙仙子的金色仙塵撞到了拼音障礙而氣得發出紅光！幫忙分辨易混聲韻與筆畫筆順，讓仙塵帶大家飛得更高。',
        inds: ['3-Ⅰ-1 注音拼讀', '3-Ⅰ-2 注音識字', '3-Ⅰ-3 注音表達', '4-Ⅰ-5 筆畫筆順'],
        dialogs: [
          { who: '奇妙仙子', face: 'tinker_bell_annoyed', angry: true, text: '叮叮叮！！可惡！我的仙塵撞到拼音障礙了，飛不過去啦！' },
          { who: '麥克', face: 'michael_darling', text: '仙子姊姊不要生氣……我們幫你找出正確的拼音路徑好不好？' },
          { who: '奇妙仙子', face: 'tinker_bell', text: '哼，那就試試看吧！注音和筆畫答對了，我就灑仙塵讓大家飛更高！' }
        ]
      },
      {
        name: '第二關｜失落男孩的樹屋派對',
        scene: 'lost_boys_underground_home',
        sceneName: '地底神祕樹屋',
        desc: '兔裝男孩庫比想布置樹屋安慰麥克，卻搞混了量詞與疊字！幫忙收拾樹屋，在沙發下找出小熊的棉花耳朵線索。',
        inds: ['4-Ⅰ-1 常用字詞', '4-Ⅰ-2 部首部件', '4-Ⅰ-3 查字典', '四字語詞'],
        dialogs: [
          { who: '庫比', face: 'nibs', text: '我想幫麥克布置樹屋，可是……一「隻」大樹？一「棵」小熊？好混亂啊！' },
          { who: '圖特斯', face: 'tootles', text: '我們一起把字詞整理好，說不定能在沙發底下找到小熊的線索！' }
        ]
      },
      {
        name: '第三關｜沙灘上的滴答腳印',
        scene: 'coastal_scene_in_neverland',
        sceneName: '白色滴答沙灘',
        desc: '巨大的滴答鱷魚擋在河岸前，小熊就掛在對岸的椰子樹上！跟著鱷魚腹部的滴答聲踩對字磚與標點短文，奪回泰迪熊！',
        inds: ['5-Ⅰ-2 標點符號', '5-Ⅰ-3 閱讀理解', '5-Ⅰ-7 句子與連接詞'],
        dialogs: [
          { who: '滴答鱷魚', face: 'giant_crocodile', text: '滴答……滴答……（巨大的鱷魚似笑非笑地張著嘴，沙灘上留下大腳印）' },
          { who: '史萊特利', face: 'slightly', text: '鱷魚每走一步，肚子就會浮現文字！踩對字磚就能過河拿回小熊，大家衝啊！' }
        ]
      }
    ]
  },
  {
    id: 'b2',
    url: 'https://grethel1988-ai.github.io/neverland-lost-chapter-2/',
    badge: '第二學習階段｜國小中年級（三、四年級）',
    title: '永無島的失落篇章',
    sub: '公主、謊言與隱密樹屋',
    cover: 'cover2',
    bg: 'native_american_camp',
    proLabel: '前情提要：刺青地圖與海盜謊言',
    prologue: '當男孩們漸漸適應了島上的生活，真正的冒險開始了。\n海盜史密奉虎克船長的命令，在密林裡四處張貼錯誤的告示牌，想把島上的居民通通弄暈，好趁機佔領整座島。\n約翰推了推眼鏡：「我們需要一張真正的地圖！」強悍的虎蓮公主現身了，她手臂上的古老刺青正是破案的關鍵。你，願意一起修正海盜的文字陷阱、保衛隱密樹屋嗎？',
    meta: [
      { lbl: '挑戰難度', val: '叢林探險隊／部落勇士<br>樹屋守護者' },
      { lbl: '生命象徵', val: '🪶 部落勇氣羽毛' },
      { lbl: '榮譽證書', val: '' }
    ],
    stages: [
      {
        name: '第一關｜虎蓮公主的刺青解密',
        scene: 'native_american_camp',
        sceneName: '叢林石碑入口',
        desc: '虎蓮公主手臂上的幾何刺青微微發光，對應著被海盜塗改的古老石碑。辨識形近音近字與查字辭典，在地圖開拓正確林道！',
        inds: ['4-Ⅱ-2 共同部件', '4-Ⅱ-3 查字辭典', '4-Ⅱ-4 形近音近字'],
        dialogs: [
          { who: '約翰', face: 'john_darling', text: '（推眼鏡）石碑上的字全是錯的！一定是海盜搞的鬼……我們需要一張真正的地圖！' },
          { who: '虎蓮公主', face: 'tiger_lily', text: '別慌。看，我手臂上的刺青在發光——每分辨出一個海盜寫錯的字，就能開拓一條正確林道！' }
        ]
      },
      {
        name: '第二關｜海盜史密的混亂告示牌',
        scene: 'misty_forest',
        sceneName: '迷霧藤蔓沼澤',
        desc: '史密留下了顛倒是非的告示牌，害雙胞胎兄弟在沼澤迷了路！運用字義推論詞義、正反義詞與四字成語，驅散沼澤迷霧。',
        inds: ['4-Ⅱ-1 常用字詞', '4-Ⅱ-5 字義推詞義', '成語與四字語詞'],
        dialogs: [
          { who: '史密', face: 'pirate_smee', text: '嘿嘿嘿～「危險」寫成「安全」、「前進」寫成「後退」，船長一定會誇獎我的！' },
          { who: '雙胞胎', face: 'the_twins', text: '救命啊——！我們照著告示牌走，結果越走越深，快幫我們把錯誤的詞語改回來！' }
        ]
      },
      {
        name: '第三關｜隱密樹屋的對聯機關',
        scene: 'lost_boys_underground_home',
        sceneName: '樹屋巨石機關門',
        desc: '虎克船長在總部大門施了魔法，句子碎得七零八落！掌握標點、基礎修辭、段落大意與句型重組，打開神祕防禦之門！',
        inds: ['5-Ⅱ-2 標點符號', '5-Ⅱ-4 句子與段落', '5-Ⅱ-5 文本特徵', '5-Ⅱ-6 摘要大意', '5-Ⅱ-8 閱讀理解'],
        dialogs: [
          { who: '虎克船長', face: 'captain_hook', text: '哈哈哈！我已經在門上施了魔法，所有句子都碎得七零八落，你們永遠進不去啦！' },
          { who: '溫蒂', face: 'wendy_darling', text: '別怕，句子碎了，我們就把它們拼回來。好故事一定有圓滿的結局！' }
        ]
      }
    ]
  },
  {
    id: 'b3',
    url: 'https://grethel1988-ai.github.io/neverland-twilight-3/',
    badge: '第三學習階段｜國小高年級（五、六年級）',
    title: '永無島的黃昏',
    sub: '影子、時鐘與不沉之船',
    cover: 'cover3',
    bg: 'captain_hook_s_cabin',
    proLabel: '前情提要：消失的自由之影',
    prologue: '永無島的星空原本總是閃耀著無憂無慮的光芒，直到這個黃昏，危險悄然而至。\n「彼得！你的影子跑去哪裡了？」溫蒂驚呼道。虎克船長利用黑巫術在海盜船「快樂羅傑號」設下文字結界，奪走並封印了彼得潘的影子！一旦夕陽完全沉入海平面，黑巫術將永久固化，彼得潘將永遠失去飛行的能力。\n約翰推了推眼鏡、握緊雨傘，麥克也抱緊了少了一隻眼睛的泰迪熊。為了在太陽下山前奪回影子，立刻踏上這場橫跨永無島的國語文解謎冒險吧！',
    meta: [
      { lbl: '挑戰難度', val: '暮光水手／斬影劍士<br>不沉船長' },
      { lbl: '生命象徵', val: '🧭 黃金航海羅盤' },
      { lbl: '榮譽證書', val: '' }
    ],
    stages: [
      {
        name: '第一關｜印第安部落的危機',
        scene: 'native_american_camp',
        sceneName: '夜襲印第安營地',
        desc: '海盜趁夜襲擊部落搶走古老卷軸！協助虎蓮公主與約翰解開營火旁的多音字、字形結構、詞性與高階成語暗號，分析海盜逃跑方向。',
        inds: ['4-Ⅲ-1 多音字詞', '4-Ⅲ-2 字形部件', '4-Ⅲ-3 辭典與詞性', '高階四字成語'],
        dialogs: [
          { who: '圖特斯', face: 'tootles', text: '不好了！海盜史密帶著水手趁夜襲擊了部落，搶走了記載影子下落的古老卷軸！' },
          { who: '約翰', face: 'john_darling', text: '（冷靜地推眼鏡、握緊雨傘）請協助我們解開營地的「字音字形與成語暗號」，分析出海盜逃跑的方向！' }
        ]
      },
      {
        name: '第二關｜迷霧森林的考驗',
        scene: 'misty_forest',
        sceneName: '精靈迷霧森林',
        desc: '奇妙仙子發現大家沒帶彼得潘來，氣得發出刺眼紅光！解開古樹上的標點表達效果、複合修辭與句型謎題，讓仙塵指引海盜船小徑。',
        inds: ['5-Ⅲ-2 標點表達效果', '5-Ⅲ-3 複合修辭與句型'],
        dialogs: [
          { who: '奇妙仙子', face: 'tinker_bell_annoyed', angry: true, text: '叮叮叮！！你們竟然把彼得一個人留在半空中？除非解開古樹上的修辭謎題，否則我就把你們變成癩蛤蟆！' },
          { who: '史萊特利', face: 'slightly', text: '仙子姊姊息怒啊！我們馬上證明失落男孩的語文智慧給妳看！' }
        ]
      },
      {
        name: '第三關｜骷髏礁石窟的尾隨者',
        scene: 'coastal_scene_in_neverland',
        sceneName: '月光骷髏礁港灣',
        desc: '吞下鬧鐘的滴答鱷魚潛伏在骷髏礁旁！區分客觀事實與主觀觀點、掌握議論文三要素與摘要策略，引導巨鱷嚇退海盜巡邏艇！',
        inds: ['5-Ⅲ-4 事實與觀點', '5-Ⅲ-5 議論文本特徵', '5-Ⅲ-6 摘要與篇章結構'],
        dialogs: [
          { who: '滴答鱷魚', face: 'giant_crocodile', text: '滴答……滴答……（墨綠色的沼澤鱗甲在月光下閃爍，腹部透出機械大鬧鐘的規律微光）' },
          { who: '溫蒂', face: 'wendy_darling', text: '大家別慌！解開礁石上的「事實與觀點、議論文與摘要機關」，就能利用滴答聲掩護，引導巨鱷游向海盜船！' }
        ]
      },
      {
        name: '第四關｜快樂羅傑號的終極對決',
        scene: 'captain_hook_s_cabin',
        sceneName: '海盜船快樂羅傑號',
        desc: '落日只剩最後一絲餘暉！潛入船艙解讀虎克船長的「航海日誌」，透過因果推論與多元文本跨段落思辨，一舉斬斷束縛影子的黑巫術鎖鏈！',
        inds: ['5-Ⅲ-8 因果推論與思辨', '5-Ⅲ-11 多元文本閱讀題組'],
        dialogs: [
          { who: '虎克船長', face: 'captain_hook', text: '哼哼哼……彼得潘的影子已經被我的「矛盾之語」鎖在桅杆下，太陽一下山就永遠解不開了！' },
          { who: '彼得潘', face: 'peter_pan', text: '虎克，你別得意！夥伴們幫我拖住海盜——看穿航海日誌背後的真相，一舉斬斷黑巫術鎖鏈吧！' }
        ]
      }
    ]
  }
];

/* ---------- 角色圖鑑完整資料庫（13組經典角色） ---------- */
const CAST_LIST = [
  {
    id: 'peter', group: 'hero', name: '彼得潘', en: 'Peter Pan',
    img: 'peter_pan', role: '永無島核心領袖', title: '超越塵世、自由飛翔的少年',
    appear: ['第三部：同行夥伴', '全三部曲：核心劇情與結局頒獎'],
    bio: '永無島的靈魂人物，整個人透出一股超越塵世的帥氣與自由。在第三部《永無島的黃昏》中，他的影子被虎克船長以黑巫術鎖在快樂羅傑號桅杆下，身體變得虛弱半飄在空中，急需冒險者運用邏輯思辨幫他奪回自由之影！',
    quotes: {
      hello: '嘿！只要想著快樂的事，再加上一點點仙塵，沒有什麼謎題能困住我們！準備好跟我一起飛上永無島的星空了嗎？',
      right: '太帥啦！我感覺影子剛剛激動地跳了一下，連我的飛行力氣都恢復三分了！這才是永無島最自由、最聰明的破咒身手！',
      wrong: '哎呀，別灰心！連我抓自己的影子都撲空過好幾次呢。放輕鬆～不被錯誤綁住，才是真正的永無島勇士！'
    }
  },
  {
    id: 'tink', group: 'hero', name: '奇妙仙子', en: 'Tinker Bell',
    img: 'tinker_bell', angryImg: 'tinker_bell_annoyed', role: '仙塵引路精靈', title: '傲嬌閃耀的金色仙塵精靈',
    appear: ['第一部：同行夥伴', '第三部：同行夥伴', '全三部曲：關鍵引路人'],
    bio: '飛行時身後會飄散著閃閃發亮的金色仙塵；但脾氣非常傲嬌，生氣時整個人會氣得發出刺眼的紅光！無論是第一部精靈山谷的拼音步道，還是第三部迷霧森林的修辭考驗，都需要她的仙塵開路。',
    quotes: {
      hello: '哼！叫你跟來就跟來，別拖我後腿喔！……我才不是擔心你在永無島迷路呢！跟緊我的金色仙塵，不准落後！',
      right: '哼，還、還算可以啦！本仙子特別賞你一把雙倍閃亮的彩虹仙塵！✨ 彼得都不一定答得出來呢！（別跟他說是我說的）',
      wrong: '叮叮叮！！錯了啦！你看我氣得整個人都發出紅光了！再被虎克的爛謎題騙到，我就真的把你變成癩蛤蟆喔！'
    }
  },
  {
    id: 'wendy', group: 'hero', name: '溫蒂·達林', en: 'Wendy Darling',
    img: 'wendy_darling', role: '達林家大姊', title: '溫柔擅長故事與思辨的姊姊',
    appear: ['第二部：同行夥伴', '第三部：同行夥伴', '全三部曲：故事引導者'],
    bio: '達林家溫柔聰慧的大姊姊，也是失落男孩們最喜歡聽她說故事的對象。無論叢林多黑、海盜船上的文字結界多複雜，她總能溫柔地帶領大家像讀故事一樣理清段落脈絡與因果邏輯。',
    quotes: {
      hello: '你好，我是溫蒂。不管叢林多黑、黃昏的文字結界多複雜，只要我們像讀故事一樣理清脈絡，就沒有解不開的謎題喔！',
      right: '太精彩了！你的邏輯比我讀過的任何一本冒險小說都要清晰呢！我已經想好今晚回樹屋後，要把你破咒的英姿寫成第一章了！',
      wrong: '沒關係的，每個偉大的傳奇故事裡，主角都會在轉折處停下來思考一下。媽媽常說：「看穿錯誤的瞬間，就是智慧發光的時候喔！」'
    }
  },
  {
    id: 'john', group: 'hero', name: '約翰·達林', en: 'John Darling',
    img: 'john_darling', role: '達林家小智囊', title: '手握雨傘、推眼鏡的優雅紳士',
    appear: ['第二部：同行夥伴', '第三部：同行夥伴'],
    bio: '達林家的大弟與小智囊，舉止拘謹而優雅。在遊戲中常以「手握雨傘、推眼鏡」的招牌動作出現，擅長精密計算、查閱辭典與議論文邏輯分析，與粗魯寫錯字的海盜形成鮮明對比。',
    quotes: {
      hello: '咳咳，在下約翰·達林。（推眼鏡）根據我的精密計算，面對海盜的文字陷阱，唯有嚴謹的邏輯與我的雨傘可以與之抗衡！',
      right: '（推眼鏡）精闢！這番推論簡直無懈可擊，跟我在百科全書讀到的一模一樣，容我用雨傘向你致上最高敬意！',
      wrong: '唔……（推眼鏡）一定是夕陽的反光害我眼鏡起霧了！冷靜，真正的紳士就算踩中文字陷阱，姿勢也依然要保持優雅！'
    }
  },
  {
    id: 'michael', group: 'hero', name: '麥克·達林', en: 'Michael Darling',
    img: 'michael_darling', role: '達林家小弟', title: '緊抱獨眼泰迪熊的可愛吉祥物',
    appear: ['第一部：同行夥伴＆故事主角', '第三部：劇情登場'],
    bio: '達林家最小的弟弟，懷裡永遠緊緊抱著一隻傷痕累累、少了一隻眼睛的泰迪熊玩偶。在第一部《永無島的初次飛翔》中，因為怪風吹走了他的小熊，引發了整場尋熊大冒險！',
    quotes: {
      hello: '我、我是麥克！我的獨眼小熊是最勇敢的夥伴喔……你願意陪我一起去永無島探險嗎？小熊說牠也想認識你！',
      right: '哇！你好厲害！小熊也在我懷裡拍手喔！（雖然牠只剩一隻眼睛看得到）我決定把我的餅乾分你一半！',
      wrong: '沒關係啦！我上次把「熊」寫成「能」，小熊還不是原諒我了～抱一下小熊就會好了，借你抱一下下喔！'
    }
  },
  {
    id: 'tiger', group: 'boys', name: '虎蓮公主', en: 'Tiger Lily',
    img: 'tiger_lily', role: '部落勇敢公主', title: '手臂繪有古老幾何刺青的領航者',
    appear: ['第二部：同行夥伴＆故事主角', '第三部：第一關關鍵助力'],
    bio: '永無島印第安部落強悍而聰明的公主，手臂上繪有永無島叢林的古老幾何刺青，並隨身攜帶地圖。當海盜張貼錯誤告示牌或偷走卷軸時，她的發光刺青就是破解字音字形陷阱的最大關鍵！',
    quotes: {
      hello: '我是虎蓮。叢林裡每一條路，都刻在我手臂的幾何刺青上。跟緊我，別讓海盜的謊言騙了你！',
      right: '很好！我的刺青又亮了一條林道，你的眼睛像老鷹一樣銳利！今晚營火會，我請你吃最大塊的烤玉米！',
      wrong: '別洩氣，連最厲害的獵人也會踩到樹枝。刺青暗了一下……沒關係，記住這個陷阱，我們下一題討回來！'
    }
  },
  {
    id: 'slightly', group: 'boys', name: '史萊特利', en: 'Slightly',
    img: 'slightly', role: '失落男孩', title: '自稱最聰明的機靈狐狸男孩',
    appear: ['第一部：同行夥伴', '第二、三部：劇情登場'],
    bio: '穿著狐狸裝的失落男孩，腦筋轉得飛快，自稱是失落男孩裡最聰明的點子王。在尋熊小隊與迷霧森林裡總能想出鬼點子幫大家化解危機。',
    quotes: {
      hello: '嘿嘿，我可是失落男孩裡最聰明的狐狸！跟著我，保證不會迷路……大概啦！',
      right: '看吧！就跟我想的一模一樣！（我剛剛真的有想到喔）不愧是我挑中的夥伴，我的狐狸尾巴都忍不住搖起來了！',
      wrong: '咳咳……這題連聰明的狐狸也會被騙啦，不怪你！其實我剛剛也想選那個，我們是同一國的！'
    }
  },
  {
    id: 'tootles', group: 'boys', name: '圖特斯', en: 'Tootles',
    img: 'tootles', role: '失落男孩', title: '常跌倒卻最溫柔憨厚的夥伴',
    appear: ['第一部：同行夥伴', '第二、三部：劇情登場'],
    bio: '穿著臭鼬裝的失落男孩，個性憨厚害羞，走路常常不小心絆倒，但為了保護朋友與找回麥克的小熊，總是鼓起勇氣衝在前面。',
    quotes: {
      hello: '你、你好……我是圖特斯，雖然常常跌倒，但我會努力不拖累大家的！',
      right: '哇啊！答對了！我高興得又跌倒了……不過好值得！你好厲害，我拿小餅乾跟你換秘訣好不好？',
      wrong: '沒關係！我昨天也答錯，還撞到樹三次呢，嘿嘿……跌倒了就站起來，我最有經驗了！'
    }
  },
  {
    id: 'twins', group: 'boys', name: '雙胞胎兄弟', en: 'The Twins',
    img: 'the_twins', role: '失落男孩', title: '永遠一搭一唱的馬默杜克與墨斯',
    appear: ['第二部：同行夥伴', '第三部：第三關登場'],
    bio: '穿著獾裝的雙胞胎兄弟馬默杜克與墨斯，喜歡搶著說話、互相鬥嘴。在第二部中曾因為海盜史密的顛倒告示牌受困於藤蔓沼澤，獲救後成為玩家最熱鬧的啦啦隊！',
    quotes: {
      hello: '我是馬默杜克！——我是墨斯！——我們兩個加起來就是雙倍的聰明，快帶我們一起去冒險吧！',
      right: '「答對了！」「我先說的！」「明明是我！」……總之我們兩個一起給你雙倍的掌聲！啪啪！啪啪！',
      wrong: '「是你害的！」「明明是史密的告示牌害的！」……沒關係，我們在沼澤迷路了一百次，還不是好好的！'
    }
  },
  {
    id: 'cubby', group: 'boys', name: '庫比', en: 'Cubby',
    img: 'nibs', role: '失落男孩', title: '熱心布置地下樹屋的兔裝男孩',
    appear: ['第一部：第二關關主', '第三部：全體協同作戰'],
    bio: '穿著兔裝的庫比（以及失落男孩夥伴們）住在永無島地底下的神祕樹屋。他非常熱心想幫忙整理樹屋、採果實討好奇妙仙子，卻常搞混「一隻小熊」與「一棵大樹」的量詞！',
    quotes: {
      hello: '歡迎來到我們的地下樹屋！我是穿兔裝的庫比，只要把量詞與疊字整理好，樹屋派對馬上開始！',
      right: '太棒了！樹屋變得乾乾淨淨，而且我們還在沙發底下找到泰迪熊的棉花耳朵線索呢！',
      wrong: '嗚……一「隻」大樹還是一「棵」大樹？頭好暈啊，我們再試一次好不好？'
    }
  },
  {
    id: 'hook', group: 'pirate', name: '虎克船長', en: 'Captain Hook',
    img: 'captain_hook', role: '快樂羅傑號船長', title: '施展黑巫術與文字機關的宿敵',
    appear: ['第二部：第三關頭目', '第三部：第四關最終頭目'],
    bio: '海盜船「快樂羅傑號」的船長，左手裝著冰冷的鐵鉤。他不僅在樹屋巨石門施下打碎句子的魔法，更在第三部利用「矛盾之語與虛無之字」的黑巫術鎖走彼得潘的影子，卻唯獨對「滴答、滴答」的鱷魚聲聞風喪膽！',
    quotes: {
      hello: '哼哼哼……（優雅地擦拭著冰冷的鐵鉤）小鬼們，想破解本船長的文字結界與航海日誌？別做夢了！',
      right: '可、可惡！我精心設計的矛盾之語鎖鏈，竟然被你看穿了破綻？！史密，快護駕——！',
      wrong: '哈哈哈！被本船長的修辭與虛字障眼法騙到了吧！只要太陽一下山，永無島就是我的了！'
    }
  },
  {
    id: 'smee', group: 'pirate', name: '海盜史密', en: 'Pirate Smee',
    img: 'pirate_smee', role: '虎克船長大副', title: '四處亂貼錯字告示牌的迷糊海盜',
    appear: ['第二部：第二關頭目', '第三部：第一關劇情'],
    bio: '虎克船長最忠心卻常常搞烏龍的手下。奉命在永無島密林與印第安營地留下錯別字紙條與顛倒是非的告示牌，把「危險」寫成「安全」、「不知所措」寫成「不知所錯」。',
    quotes: {
      hello: '嘿嘿嘿～我是史密！我在叢林裡貼滿了寫錯字的告示牌，連我自己都快分不清哪邊是正確答案啦！',
      right: '哎呀呀！我故意藏起來的錯別字跟反義詞，怎麼一下就被你抓出來了？船長又要罵我了！',
      wrong: '嘿嘿！看來我的混亂告示牌真的有效，連聰明的冒險者也在藤蔓沼澤裡轉圈圈囉！'
    }
  },
  {
    id: 'croc', group: 'pirate', name: '滴答鱷魚', en: 'Tick-Tock Crocodile',
    img: 'giant_crocodile', role: '沼澤與港灣巨獸', title: '吞下機械大鬧鐘的神秘巨鱷',
    appear: ['第一部：第三關關主', '第三部：第三關＆最終結局'],
    bio: '體型巨大如恐龍般的雌性巨鱷，背部覆蓋厚重的墨綠色沼澤鱗甲，巨顎永遠似笑非笑地微張。因為吞下了一個大鬧鐘，腹部隱隱透出機械運轉的微光並發出「滴答、滴答」聲，眼神中永遠透露出鎖定虎克船長的執著與狡黠！',
    quotes: {
      hello: '滴答……滴答……（巨鱷微張著嘴，腹部的鬧鐘規律閃爍著微光，似乎在考驗你敢不敢踩上牠留下的字磚腳印）',
      right: '滴答、滴答——！（巨鱷滿意地甩了甩尾巴，順著你解開的礁石密碼，轉頭朝虎克船長的海盜船游去！）',
      wrong: '滴答……喀嚓！（巨鱷似笑非笑地湊近了一步，小心別踩錯字磚，不然要變成點心啦！）'
    }
  }
];

/* ---------- 首頁底部導覽小語 ---------- */
const HUB_TIPS = [
  { name: '彼得潘', img: 'peter_pan', text: '歡迎來到永無島三部曲總入口！這裡連結了低、中、高年級三座國語文冒險島嶼，點選上方卡片就能直接出發，或切換頁籤查看故事、角色與題型喔！' },
  { name: '奇妙仙子', img: 'tinker_bell', text: '叮鈴鈴～每部遊戲都有 25 題、40 題、50 題三種難度！把滑鼠移到上方的三部曲卡片上，看看背景會不會跟著切換成我們冒險的場景吧！✨' },
  { name: '虎蓮公主', img: 'tiger_lily', text: '我的幾何刺青記錄了所有課綱能力指標。每次進入測驗，系統都會啟動「指標保證機制」，確保每一個學習表現都至少會考出一題！' },
  { name: '約翰', img: 'john_darling', text: '（推眼鏡）根據我的統計，題庫除了四選一選擇題，還包含約 30% 的「配對、填空、分類、排序」拖曳題與長短文閱讀題組，通關後還能列印榮譽證書！' },
  { name: '溫蒂', img: 'wendy_darling', text: '不知道該從哪一部開始嗎？一、二年級推薦陪麥克找小熊，三、四年級跟虎蓮公主保衛樹屋，五、六年級就來幫彼得潘奪回影子吧！' }
];

/* ---------- 五大題型互動展示資料 ---------- */
const QTYPE_DEMOS = {
  mc: {
    tag: '4-Ⅲ-1 常用國字與成語｜四選一選擇題',
    title: '1. 四選一選擇題（選項隨機排列）',
    desc: '結合故事語境出題，點擊選項後立即以綠光（答對）或紅框震動（答錯）回饋，不直接公佈答案，培養獨立思考。（點點看右側選項體驗回饋！）',
    render: () => `
      <div class="demo-q">【史密的惡作劇】史密在營火旁留下一張紙條，請選出文句「完全沒有錯別字」的選項：</div>
      <div class="demo-opts">
        <button class="demo-opt" data-ok="0">Ⓐ 只要彼得潘不在，海盜就能在島上為非作導。</button>
        <button class="demo-opt" data-ok="0">Ⓑ 水手們來勢兇兇，把部落弄得雞飛狗跳。</button>
        <button class="demo-opt" data-ok="1">Ⓒ 虎蓮公主臨危不亂，指揮男孩們迅速隱蔽。</button>
        <button class="demo-opt" data-ok="0">Ⓓ 麥克緊抱著心愛的玩偶，嚇得不知所錯。</button>
      </div>`
  },
  match: {
    tag: '4-Ⅱ-4 形近音近字｜拖曳配對題（Matching）',
    title: '2. 拖曳配對題（支援滑鼠拖拉＆觸控點選）',
    desc: '將上方的詞彙卡片拖曳（或先點卡片、再點目標框）至對應的注音、字形或解釋旁。三部曲皆支援電腦滑鼠與平板觸控操作！',
    render: () => `
      <div class="demo-q">請將正確的國字卡片，配對到對應的語詞空格中：</div>
      <div class="demo-chips">
        <span class="demo-chip">燥</span>
        <span class="demo-chip">躁</span>
        <span class="demo-chip">噪</span>
      </div>
      <div class="demo-slots">
        <span class="demo-slot">天乾物 〔 燥 〕</span>
        <span class="demo-slot">脾氣暴 〔 躁 〕</span>
        <span class="demo-slot">蟬鳴鳥 〔 噪 〕</span>
      </div>`
  },
  fill: {
    tag: '4-Ⅰ-1 常用量詞與疊字｜拖曳填空題（Fill in the blanks）',
    title: '3. 拖曳填空題（語境短文挖空）',
    desc: '將散落的量詞、連接詞或四字成語卡片，拖曳填入完整的故事句子空格中，訓練上下文語感與詞彙搭配。',
    render: () => `
      <div class="demo-q">請幫兔裝男孩庫比把正確的「量詞」放回句子裡：</div>
      <div class="demo-chips">
        <span class="demo-chip">隻</span>
        <span class="demo-chip">棵</span>
        <span class="demo-chip">顆</span>
      </div>
      <div class="demo-q" style="font-size:1.08em;color:var(--gold2)">
        麥克抱著一 <span class="demo-slot">隻</span> 泰迪熊，躲在一 <span class="demo-slot">棵</span> 大樹下，抬頭看著天上一 <span class="demo-slot">顆</span> 閃亮的星星。
      </div>`
  },
  cat: {
    tag: '5-Ⅲ-4 事實與觀點｜分類題（Categorization）',
    title: '4. 分類題（多項目雙欄／三欄歸類）',
    desc: '將多個詞語或敘述句拖曳放入對應的分類籃中（例如：分辨平聲與仄聲、名詞與動詞、客觀事實與主觀觀點）。',
    render: () => `
      <div class="demo-q">請將下列關於滴答鱷魚的敘述，分類至「客觀事實」或「主觀觀點」：</div>
      <div class="demo-slots" style="width:100%;justify-content:space-around">
        <div class="demo-slot" style="flex:1;text-align:center">
          <b style="color:#fff;display:block">📌 客觀事實（可驗證）</b>
          <span class="demo-chip" style="display:inline-block;margin-top:.3em">鱷魚吞下了一個機械鬧鐘</span>
        </div>
        <div class="demo-slot" style="flex:1;text-align:center">
          <b style="color:#fff;display:block">💭 主觀觀點（個人感受）</b>
          <span class="demo-chip" style="display:inline-block;margin-top:.3em">滴答聲是全島最可怕的聲音</span>
        </div>
      </div>`
  },
  order: {
    tag: '5-Ⅱ-4 句型結構｜排序與句子重組題（Sequencing）',
    title: '5. 排序題／句子重組（邏輯順序排列）',
    desc: '將被虎克船長魔法打散的語詞碎片、時間軸或段落步驟，依照正確語法或先後順序排列整齊。',
    render: () => `
      <div class="demo-q">虎克船長把句子打碎了！請依序排列成通順的句子：</div>
      <div class="demo-slots">
        <span class="demo-chip">① 約翰</span>
        <span>➔</span>
        <span class="demo-chip">② 把雨傘</span>
        <span>➔</span>
        <span class="demo-chip">③ 緊緊握在</span>
        <span>➔</span>
        <span class="demo-chip">④ 手中</span>
      </div>`
  },
  read: {
    tag: '5-Ⅲ-8 & 5-Ⅲ-11｜短長文與多元文本閱讀題組',
    title: '6. 閱讀測驗題組（左側羊皮紙文章＋右側題卡）',
    desc: '採用左側米色羊皮紙面板（標楷體排版）搭配右側互動題卡，同一篇短文或航海日誌可連續進行多題深度推論與思辨！',
    render: () => `
      <div class="demo-passage">
        <div class="demo-paper">
          <b>📜 【虎克的航海日誌】</b>
          「五月三日，晴。那男孩的影子被我鎖在正中央的桅杆下。影子是靈魂的投射，只要用『矛盾之語』與『虛無之字』編織的鎖鏈，就能將其困住……除非有人能看穿日誌背後的邏輯破綻。」
        </div>
        <div>
          <div class="demo-q" style="font-size:1em;margin-bottom:.4em">問題：根據日誌，如何才能解開鎖住影子的鎖鏈？</div>
          <div class="demo-slot" style="display:block;text-align:center">✔ 透過理性的邏輯思辨看穿文意矛盾</div>
        </div>
      </div>`
  }
};

/* ---------- 打字機效果（依元素各自管理計時器，避免初始化互相覆蓋） ---------- */
const typeTimers = new WeakMap();
function typeText(el, text, speed = 22) {
  clearInterval(typeTimers.get(el));
  el.textContent = '';
  let k = 0;
  const tid = setInterval(() => {
    el.textContent = text.slice(0, ++k);
    if (k >= text.length) clearInterval(tid);
  }, speed);
  typeTimers.set(el, tid);
}

/* ---------- 背景切換 ---------- */
function setBg(imgName, theme = 'hub') {
  $('#bg').style.backgroundImage = `url(${IMG(imgName)})`;
  document.body.dataset.theme = theme;
}

/* ---------- 頂部主頁籤切換 ---------- */
function switchTab(tabId) {
  $$('.nav-tab').forEach(b => {
    const on = b.dataset.tab === tabId;
    b.classList.toggle('active', on);
    b.setAttribute('aria-selected', on);
  });
  $$('.screen').forEach(s => s.classList.toggle('active', s.id === `sec-${tabId}`));

  if (tabId === 'hub') setBg('neverland', 'hub');
  if (tabId === 'story') renderStoryBook(curBookIdx);
  if (tabId === 'cast') setBg('misty_forest', 'b1');
  if (tabId === 'guide') setBg('lost_boys_underground_home', 'b2');
}

$$('.nav-tab').forEach(b => b.addEventListener('click', () => switchTab(b.dataset.tab)));

/* ---------- TAB 1：三部曲入口互動 ---------- */
let tipIdx = 0;
function setFaceImg(el, imgKey, angry = false) {
  if (!el) return;
  el.innerHTML = `<img src="${IMG(imgKey)}" alt="" class="av-img-${imgKey}">`;
  el.classList.toggle('angry', !!angry);
}

function showHubTip(idx) {
  const t = HUB_TIPS[idx % HUB_TIPS.length];
  setFaceImg($('#hub-face'), t.img, false);
  $('#hub-speaker').textContent = t.name;
  typeText($('#hub-vn-text'), t.text, 20);
}
$('#btn-next-tip').addEventListener('click', () => {
  tipIdx = (tipIdx + 1) % HUB_TIPS.length;
  showHubTip(tipIdx);
  burst(25);
});

// 滑鼠移過三部曲卡片時預覽該部背景與氛圍
$$('.tcard').forEach(card => {
  const bIdx = +card.dataset.book;
  const b = BOOKS[bIdx];
  card.addEventListener('mouseenter', () => setBg(b.cover, b.id));
});

// 點擊「關卡詳情」跳轉至故事頁籤對應作品
$$('[data-goto-story]').forEach(btn => {
  btn.addEventListener('click', () => {
    curBookIdx = +btn.dataset.gotoStory;
    switchTab('story');
  });
});

/* ---------- TAB 2：故事與關卡互動 ---------- */
let curBookIdx = 0;
let curStageIdx = 0;
let curDlgIdx = 0;

function renderStoryBook(bIdx) {
  curBookIdx = bIdx;
  curStageIdx = 0;
  const b = BOOKS[bIdx];

  $$('#story-book-switch .bs-btn').forEach(btn => btn.classList.toggle('on', +btn.dataset.b === bIdx));
  $('#story-play-link').href = b.url;
  $('#st-cover-banner').style.backgroundImage = `url(${IMG(b.cover)})`;
  $('#st-book-title').textContent = b.title;
  $('#st-book-sub').textContent = b.sub;
  $('#st-pro-label').textContent = b.proLabel;
  $('#st-prologue').textContent = b.prologue;

  $('#st-meta-row').innerHTML = b.meta.map(m =>
    `<div class="smeta"><small>${m.lbl}</small>${m.val ? `<b>${m.val}</b>` : ''}</div>`
  ).join('');

  const sc = $('#stage-cards');
  sc.innerHTML = b.stages.map((st, idx) => `
    <article class="stcard${idx === 0 ? ' on' : ''}" data-st="${idx}">
      <div>
        <div class="stcard-scene" style="background-image:url('${IMG(st.scene)}')"></div>
        <h3>${st.name}</h3>
        <p>${st.desc}</p>
      </div>
      <div class="stcard-inds">
        ${st.inds.map(i => `<code>${i}</code>`).join('')}
      </div>
    </article>
  `).join('');

  sc.querySelectorAll('.stcard').forEach(card => {
    card.addEventListener('click', () => selectStage(+card.dataset.st));
  });

  selectStage(0);
}

function selectStage(stIdx) {
  curStageIdx = stIdx;
  curDlgIdx = 0;
  const b = BOOKS[curBookIdx];
  const st = b.stages[stIdx];

  $$('#stage-cards .stcard').forEach(c => c.classList.toggle('on', +c.dataset.st === stIdx));
  setBg(st.scene, b.id);
  showStageDialog();
}

function showStageDialog() {
  const st = BOOKS[curBookIdx].stages[curStageIdx];
  const dlg = st.dialogs[curDlgIdx % st.dialogs.length];
  setFaceImg($('#sp-face'), dlg.face, !!dlg.angry);
  $('#sp-name').textContent = `${st.name.split('｜')[0]}・${dlg.who}`;
  typeText($('#sp-text'), dlg.text, 20);
}

$('#btn-sp-next').addEventListener('click', () => {
  const st = BOOKS[curBookIdx].stages[curStageIdx];
  curDlgIdx = (curDlgIdx + 1) % st.dialogs.length;
  showStageDialog();
});

$$('#story-book-switch .bs-btn').forEach(btn => {
  btn.addEventListener('click', () => renderStoryBook(+btn.dataset.b));
});

/* ---------- TAB 3：角色圖鑑互動 ---------- */
let curCast = CAST_LIST[0];
let curQuoteType = 'hello';
let isAngryMood = false;

function renderCastGrid(filter = 'all') {
  const list = filter === 'all' ? CAST_LIST : CAST_LIST.filter(c => c.group === filter);
  const g = $('#cast-grid');
  g.innerHTML = list.map(c => `
    <button class="ccard${c.id === curCast.id ? ' on' : ''}" data-cid="${c.id}">
      <img src="${IMG(c.img)}" alt="${c.name}">
      <b>${c.name}</b>
    </button>
  `).join('');

  g.querySelectorAll('.ccard').forEach(btn => {
    btn.addEventListener('click', () => {
      const found = CAST_LIST.find(x => x.id === btn.dataset.cid);
      if (found) selectCast(found);
    });
  });
}

function selectCast(c) {
  curCast = c;
  isAngryMood = false;
  $$('#cast-grid .ccard').forEach(b => b.classList.toggle('on', b.dataset.cid === c.id));

  const p = $('#cd-portrait');
  p.style.backgroundImage = `url(${IMG(c.img)})`;
  p.classList.remove('angry');

  const moodBtn = $('#cd-mood-btn');
  if (c.angryImg) {
    moodBtn.hidden = false;
    moodBtn.textContent = '💢 切換生氣紅光';
  } else {
    moodBtn.hidden = true;
  }

  $('#cd-role-tag').textContent = c.role;
  $('#cd-name').innerHTML = `${c.name}<span>${c.en}</span>`;
  $('#cd-title').textContent = c.title;
  $('#cd-appear').innerHTML = c.appear.map(a => `<span>${a}</span>`).join('');
  $('#cd-bio').textContent = c.bio;
  $('#cd-vn-name').textContent = c.name;

  showCastQuote(curQuoteType);
}

function showCastQuote(qtype) {
  curQuoteType = qtype;
  $$('.cd-quote-btns .q-chip').forEach(b => b.classList.toggle('on', b.dataset.qtype === qtype));
  typeText($('#cd-vn-quote'), curCast.quotes[qtype], 18);

  if (curCast.angryImg) {
    const p = $('#cd-portrait');
    if (qtype === 'wrong') {
      isAngryMood = true;
      p.style.backgroundImage = `url(${IMG(curCast.angryImg)})`;
      p.classList.add('angry');
      setFaceImg($('#cd-face'), curCast.angryImg, true);
      $('#cd-mood-btn').textContent = '✨ 恢復金色仙塵';
    } else {
      isAngryMood = false;
      p.style.backgroundImage = `url(${IMG(curCast.img)})`;
      p.classList.remove('angry');
      setFaceImg($('#cd-face'), curCast.img, false);
      $('#cd-mood-btn').textContent = '💢 切換生氣紅光';
    }
  } else {
    setFaceImg($('#cd-face'), curCast.img, false);
  }
}

$('#cd-mood-btn').addEventListener('click', () => {
  if (!curCast.angryImg) return;
  isAngryMood = !isAngryMood;
  const p = $('#cd-portrait');
  const key = isAngryMood ? curCast.angryImg : curCast.img;
  p.style.backgroundImage = `url(${IMG(key)})`;
  p.classList.toggle('angry', isAngryMood);
  setFaceImg($('#cd-face'), key, isAngryMood);
  $('#cd-mood-btn').textContent = isAngryMood ? '✨ 恢復金色仙塵' : '💢 切換生氣紅光';
});

$$('#cast-filter .bs-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('#cast-filter .bs-btn').forEach(x => x.classList.remove('on'));
    btn.classList.add('on');
    renderCastGrid(btn.dataset.f);
  });
});

$$('.cd-quote-btns .q-chip').forEach(btn => {
  btn.addEventListener('click', () => showCastQuote(btn.dataset.qtype));
});

/* ---------- TAB 4：玩法與課綱指標互動 ---------- */
$$('#guide-switch .bs-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('#guide-switch .bs-btn').forEach(x => x.classList.remove('on'));
    btn.classList.add('on');
    const mode = btn.dataset.g;
    $('#guide-rules').classList.toggle('active', mode === 'rules');
    $('#guide-inds').classList.toggle('active', mode === 'inds');
  });
});

function renderQtypeDemo(qtKey) {
  $$('#qt-tabs .qt-btn').forEach(b => b.classList.toggle('on', b.dataset.qt === qtKey));
  const d = QTYPE_DEMOS[qtKey];
  const st = $('#qt-stage');
  st.innerHTML = `
    <div class="qt-demo-left">
      <span class="q-tag">${d.tag}</span>
      <h4>${d.title}</h4>
      <p>${d.desc}</p>
    </div>
    <div class="qt-demo-right">
      ${d.render()}
    </div>
  `;

  st.querySelectorAll('.demo-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const ok = opt.dataset.ok === '1';
      opt.classList.add(ok ? 'right' : 'wrong');
      if (ok) burst(30);
    });
  });
}

$$('#qt-tabs .qt-btn').forEach(btn => {
  btn.addEventListener('click', () => renderQtypeDemo(btn.dataset.qt));
});

/* ---------- 金色仙塵粒子系統（與三部曲一致） ---------- */
const cv = $('#dust'), cx = cv.getContext('2d');
let parts = [];
function resize() {
  cv.width = innerWidth * devicePixelRatio;
  cv.height = innerHeight * devicePixelRatio;
}
addEventListener('resize', resize);
resize();

for (let k = 0; k < 65; k++) {
  parts.push({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 2.1 + .5,
    vy: Math.random() * .0006 + .0002,
    t: Math.random() * 6,
    life: Infinity
  });
}

function burst(n = 35) {
  for (let k = 0; k < n; k++) {
    parts.push({
      x: .5 + (Math.random() - .5) * .4,
      y: .5,
      r: Math.random() * 3 + 1,
      vx: (Math.random() - .5) * .012,
      vy: -Math.random() * .012,
      t: 0,
      life: 85,
      g: true
    });
  }
}

(function loop() {
  cx.clearRect(0, 0, cv.width, cv.height);
  parts = parts.filter(p => p.life > 0);
  for (const p of parts) {
    if (p.g) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += .0003;
      p.life--;
    } else {
      p.y -= p.vy;
      p.t += .03;
      if (p.y < -.02) p.y = 1.02;
    }
    const a = p.g ? p.life / 85 : (Math.sin(p.t) + 1) / 2 * .8 + .2;
    const X = (p.x + (p.g ? 0 : Math.sin(p.t) * .003)) * cv.width;
    const Y = p.y * cv.height;
    const R = p.r * devicePixelRatio;
    const gr = cx.createRadialGradient(X, Y, 0, X, Y, R * 3);
    gr.addColorStop(0, `rgba(255,240,170,${a})`);
    gr.addColorStop(1, 'rgba(255,200,80,0)');
    cx.fillStyle = gr;
    cx.beginPath();
    cx.arc(X, Y, R * 3, 0, 7);
    cx.fill();
  }
  requestAnimationFrame(loop);
})();

/* ---------- 預載圖片與初始化 ---------- */
['neverland', 'cover1', 'cover2', 'cover3', 'misty_forest', 'lost_boys_underground_home', 'native_american_camp', 'coastal_scene_in_neverland', 'captain_hook_s_cabin'].forEach(n => {
  const i = new Image();
  i.src = IMG(n);
});

showHubTip(0);
renderCastGrid('all');
selectCast(CAST_LIST[0]);
renderQtypeDemo('mc');

})();

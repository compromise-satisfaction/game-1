//実際のゲームのシナリオが見えてしまうので
//必要部分のみ掲載

titlescene = {
  'DeleteBG':"",
  'DeleteCharactor':"",
  'SetBackGroundImage':"title.png",
  'SetChoiceScene': [" ▶︎ 始める","scene1"," ▶︎ 説明","aboutscene"],
}


titlescene_back = {
  'DeleteCharactor':"",
  'SetChoiceScene': [" ▶︎ タイトルに戻る","titlescene"],
}

aboutscene =
{
'DeleteCharactor':"",
'SetText': ['', 'とりあえずは登場人物の紹介をしましょう。'],
'SetNextSceneName':'aboutscene1'
}

aboutscene1 =
{
'DeleteCharactor':"",
'SetCharactorRight': 'mio1.png',
'SetText': ['', 'この娘は湊みお。                                         ピュアパレットのピュアじゃない方です。'],
'SetNextSceneName':'aboutscene2'
}

aboutscene2 =
{
'DeleteCharactor':"",
'SetCharactorLeft': 'aine1.png',
'SetText': ['', 'この娘が友希あいねちゃん。                        ピュアパレットのピュアな方です。',
                'かわいいですね。(かわいいです)',
                'ちなみにこの写真は二人がフレンズを組んで 一度解散し、再結成した後のみおちゃんの電話の呼び出し画面の画像です。',
                'どう見ても盗撮しようとして気づかれたみたいな構図の写真だけども、みおちゃんが写真を撮らせてもらえないのか、',
                'それとも恥ずかしくて撮らせてと言えないのかはたまた盗撮行為が好きなのか。多分後者だろうね。'
              ],
'SetNextSceneName':'aboutscene3'
}

aboutscene3 =
{
'DeleteCharactor':"",
'SetCharactorLeft': 'koko1.png',
'SetText': ['', 'ついでに、アイカツ！ナビのココちゃん。            アイカツ！モバイルに「ハロー、ココちゃん！」    と呼びかけると出てきてくれるAIです。',
                '要はアイカツフレンズ!世界のSiriといったところでしょうか。',
                'AIのくせに一人しかいないらしく、忙しい時は呼んでも出でこなかったり、舌を噛んだり、自分にわからないことは人任せにして電話を勝手にかけるくらいの高性能AIです。'
              ],
'SetNextSceneName':'aboutscene4'
}

aboutscene4 = {
  'DeleteCharactor':"",
  'SetCharactorLeft': 'aine1.png',
  'SetCharactorRight': 'mio1.png',
  'SetText': ['', 'このゲームはあいねちゃんとみおちゃんがフレンズ(要はユニット)を組むまでのお話です。',
                  'みおちゃんとなって選択肢を選んでいき、あいねちゃんとフレンズを組みましょう。',
                  'アニメ本編が正解ルートなので間違ったりするとすぐ終わっちゃったりします。',
                  '終わらない場合もありますが、どれぐらい正しかったか%表示します。頑張って100%クリアを目指しましょう。第11話「告白はドラマチック！」本編通り進めばOKです。'
                ],
  'SetNextSceneName':'titlescene_back'
}


scene1 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '1.png',
  'SetText': ['友希あいね',
                  'これまでの『アイカツフレンズ！』。',
                  '私　友希あいね。',
                  'スターハーモニー学園に通う中学２年生。',
                  '学園のトップアイドル　湊みおちゃんと出会ってアイドル科に転入したんだ。'
              ],
  'SetNextSceneName':'scene2'
}

scene2 = {
  'SetCharactorRight': 'ema.png',
  'SetCharactorLeft': 'maika.png',
  'SetText': ['あいね',
              'ダンスとお祭りが大好きな舞花ちゃんと一つ上の先輩で　私たちを元気に引っ張ってくれるエマちゃん。',
              '凸凹だけどすっごく仲よしな２人はついにフレンズになった。',
              ],
  'SetNextSceneName':'scene3'
}

scene3 = {
  'DeleteCharactor':"",
  'SetText': ['あいね',
              'アイドルは　カードも友達　ファンも友達。',
              '目指せ　友達100万人！'
              ],
  'SetNextSceneName':'scene4'
}

scene4 = {
  'SetCharactorRight': 'ema.png',
  'SetBackGroundImage': 'school_room.png',
  'SetText': ['日向エマ',
              'プリティー！'
              ],
  'SetNextSceneName':'scene5'
}

scene5 = {
  'SetCharactorLeft': 'maika.png',
  'SetText': ['蝶乃舞花',
              'セクシー！'
              ],
  'SetNextSceneName':'scene6'
}

scene6 = {
  'DeleteCharactor':"",
  'DeleteBG':"",
  'SetBackGroundImage': '2.png',
  'SetText': ['二人',
              'ハニーキャット！'
              ],
  'SetNextSceneName':'scene7'
}

scene7 = {
  'DeleteBG':"",
  'SetCharactorLeft': 'aine1.png',
  'SetCharactorRight': 'ema.png',
  'SetBackGroundImage': 'school_room.png',
  'SetText': ['あいね',
              'うわ～！かっこいい！！'
              ],
  'SetNextSceneName':'scene8'
}

scene8 = {
  'DeleteCharactorl':"",
  'SetCharactorRight': 'mio1.png',
  'SetText': ['湊みお',
              'ハニーキャット…２人にぴったりなフレンズ名ね。'
              ],
  'SetNextSceneName':'scene9'
}

scene9 = {
  'SetText': ['あいね',
              'たしかに。舞花ちゃんもエマちゃんも猫っぽいイメージあるし。'
              ],
  'SetNextSceneName':'scene_0'
}

scene_0 = {
  'DeleteBG':"",
  'DeleteCharactor':"",
  'SetText': ['',
              'ここから先は出来てません。'
              ],
  'SetNextSceneName':'titlescene_back'
}

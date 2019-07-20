react nativeの環境構築を一切していない状態から、こんなアプリを作るところまでを1時間で行います。
ここから拡張すれば、記事の一覧表示とwebページ表示アプリなども作れます。
<img width="250" alt="スクリーンショット 2019-07-20 18.48.04.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/78136/766d3f63-cd2b-39ec-b023-4419e7a1971a.gif">

# 前提
- PCがMacであること
- XCodeがインストールされていること
- gitが使える状態であること

# この記事で扱うこと
- react nativeの環境構築
- リストビューを表示するアプリの作成、起動

# homebrewのインストール
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

```
[homebrew公式](https://brew.sh/)より。
homebrewとはMac OS用のパッケージ管理システムであり、

```
brew install hogehoge
```
で必要なパッケージを簡単にインストールでき、インストール/アンインストール、依存関係などが管理が出来るツール。

# homebrewで必要なパッケージをインストール
```
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
npm install -g react-native-cli
```
[Watchman](https://facebook.github.io/watchman/):ファイル等の状態変化を監視するライブラリ。facebook製
[openjdk](https://adoptopenjdk.net/about.html):オープンソースのJavaのSDK
react-native-cli:react nativeのCLIツール。react nativeアプリの作成や起動などに使う

# プロジェクトを作成
最初のプロジェクトを作成する。下記コマンドを叩くだけ。

```
react-native init sampleProject
```
足りていないライブラリをインストールするかと途中で聞かれたらYesで答える。

```
CocoaPods (https://cocoapods.org/) is not installed. It's necessary for iOS pr
oject to run correctly. Do you want to install it?
```
依存関係のインストールが長くかかることがあるが、気長に待つ。

```
info Installing required CocoaPods dependencies
```
# IOSシミュレータで起動してみる
```
cd sampleProject
react-native run-ios
```
しばらく待っていると起動される
<img width="200" alt="スクリーンショット 2019-07-20 18.48.04.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/78136/d85d6065-557f-1cb2-4c38-af0ae607adf9.png">

# index.jsを編集する
sampleProject直下のindex.jsを編集する。
中身を消して、下記に書き換える。

```javascript
import React from 'react';
import {AppRegistry, View} from 'react-native';

const App = () => (
    <View />
);

AppRegistry.registerComponent('sampleProject', () => App);

```
'sampleProject'の部分は、プロジェクト名と完全一致している必要がある。
Simulater上で、Command + Rすると、書き換えたコードですぐに再読み込みされる。
真っ白なページが表示されていればOK。

## ここで理解すること
### [JSX](https://reactjs.org/docs/introducing-jsx.html)というHTMLタグライクな記法でビューを記述する
JSXは、Reactで推奨されいているJavaScriptにおける記法。
Reactでは、描画ロジックと見た目の定義をコンポーネントという単位にひとまとめにして管理している。
React Nativeで定義されているコンポーネントは[こちら](https://facebook.github.io/react-native/docs/view.html)から確認できる。
自身でコンポーネントを定義し、記述することも出来る。
上記の例では、Viewというそれ自体では何も表示しないコンポーネントを表示する処理になっている。

# コンポーネントを作成する
## sampleProject配下にcomponentsフォルダを作る
sampleProject配下が自作したコンポーネントであふれ返らないように、フォルダを1つ作る
## componentsフォルダ配下に、sampleListView.jsを作成する

下記を一旦コピペ

```javascript

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SampleListView extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}
```

index.jsを下記のように変更

```javascript
import React from 'react';
import {AppRegistry, View} from 'react-native';
import SampleListView from './components/sampleListView'

const App = () => (
    <SampleListView />
);

AppRegistry.registerComponent('sampleProject', () => App);

```


## ここでやっていること
### コンポーネントの作成
react-nativeパッケージが提供するComponentを継承したクラスを作成している。
renderメソッドを記述することで、描画処理時にrenderメソッドで記述したJSXが描画される。
ここでは画面の中央にテキストでHello worldするように記載している。([公式サンプル](https://facebook.github.io/react-native/docs/tutorial))

### 作成したコンポーネントをindex.jsで読み込み
```
import SampleListView from './components/sampleListView'
```
で、index.jsから参照し、

```
const App = () => (
    <SampleListView />
);
```
でSampleListViewコンポーネントをアプリの表示対象として読み込ませている。

## 表示の確認
Command + Rでシミュレータをリロードして、中央にHello worldが表示されることを確認する。
<img width="200" alt="スクリーンショット 2019-07-20 19.18.20.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/78136/f0f2b95e-f477-6669-b5a4-544119d4f696.png">

# リストビューを作る
sampleListView.jsを下記に書き換える

```javascript

import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

export default class SampleListView extends Component {
  render() {
    return (
      <ScrollView style={styles.viewStyle}>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
      height: 60,
      paddingTop: 100
  }
}
```
## ここでやっていること
### ScrollViewでの定義
リストビューを作成するには、react-nativeパッケージが提供するScrollViewを追加する。
importに追加して、renderメソッド内にScrollViewを記述して、リスト表示したいコンポーネントを並べている。
styleを定義しているが、画面最上部からだと不恰好なのでpaddingTopを追加するため。

<img width="200" alt="スクリーンショット 2019-07-20 19.36.52.png" src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/78136/69fddc00-aaaf-f76e-0be9-564e9ba24a9d.png">

# 区切れ線を表示するコンポーネントを作る
テキストとテキストの間に線があった方が見栄えがいいので、線を引いてくれるコンポーネントをつくる
## componentフォルダ配下に、TextSection.jsを作成
```javascript

import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class TextSection extends Component {
  render() {
    return (
    <View style={{
        borderColor: '#ddd',
        borderBottomWidth:1,
        padding: 10}}
    >
        <Text>{this.props.children}</Text>
    </View>
    );
  }
}
```
sampleListViewで読み込ませる。

```javascript

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import TextSection from './TextSection'

export default class SampleListView extends Component {
  render() {
    return (
      <ScrollView style={styles.viewStyle}>
        <TextSection>こんなテキストを</TextSection>
        <TextSection>表示して</TextSection>
        <TextSection>スクロールもできる</TextSection>
        <TextSection>サンプルを</TextSection>
        <TextSection>環境構築から</TextSection>
        <TextSection>作成まで</TextSection>
        <TextSection>１時間で</TextSection>
        <TextSection>できる！</TextSection>
        <TextSection>こんなテキストを</TextSection>
        <TextSection>表示して</TextSection>
        <TextSection>スクロールもできる</TextSection>
        <TextSection>サンプルを</TextSection>
        <TextSection>環境構築から</TextSection>
        <TextSection>作成まで</TextSection>
        <TextSection>１時間で</TextSection>
        <TextSection>できる！</TextSection>
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
      paddingTop: 100
  },
}
```
## やっていること
### 線を引いてくれるコンポーネントの作成
TextタグをViewタグで囲み、

```css
borderColor: '#ddd',
borderBottomWidth:1,
padding: 10
```

で線を引き、上下に余白を作っている。

```javascript

<Text>{this.props.children}</Text>
```
とすることで、呼び出し元でタグに囲まれた要素をそのまま表示出来る。
今回は文字列を渡しているが、JSXを渡すことも可能。

# おしまい
ここから拡張すれば、記事の一覧表示とwebページ表示アプリなども作れるので、是非活用してください！

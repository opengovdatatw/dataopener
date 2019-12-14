import React, { useState } from "react";
import styled from "styled-components";
import Document from "../components/Document";
import Container from "../components/Container";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import Question from "../components/Question";
import Title from "../components/Title";

const Main = styled.div`
  flex: 1;
  padding-top: 100px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

const Logo = styled.div`
  margin: 10px 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Slogan = styled.div`
  font-size: 24px;
  color: #283051;
  text-align: center;
`;

const Welcome = styled.div`
  margin: 40px 0;
`;

const Tabs = styled.div`
  display: flex;
  cursor: pointer;
`;

const Tab = styled.div`
  border: 1px solid #283051;
  font-size: 16px;
  color: #283051;
  text-align: center;
  padding: 6px 20px;

  ${({ active }) => active && `
    background: #283051;
    color: #FFFFFF;
  `}
`;

const Subjects = styled.div`
  margin-top: 26px;
  border-bottom: 2px solid #CEDAE9;
`;

export default function Index() {
  const [type, setType] = useState("before");
  return (
    <Document>
      <Container>
        <Topbar />
        <Main>
          <Body>
            <Title>常見問答</Title>
            <Content>
              <Tabs>
                <Tab active={type === "before"} onClick={() => setType("before")}>申請前</Tab>
                <Tab active={type === "after"} onClick={() => setType("after")}>申請後</Tab>
              </Tabs>
              <Subjects>
                <Question
                  title="1. 為什麼要向政府申請資料？"
                  answer={`
                  每個人都有不同的理由。有人為了學術目的研究特定的機關政策，有人為了監督政府行政績效，因此需要政府提供相關數據及資料，才能進行精確的分析和評估。也有是為了網站或APP開發需求，進行加值應用，解決生活上的各種問題。
                  不管為了什麼原因，政府是各種資料的最大擁有人，且依法為使人民共享及公平利用政府資訊，保障民眾知的權利，政府應主動公開資訊，或應申請提供資訊。`}
                />
                <Question
                  title="2. 每個人都可以申請嗎？"
                  answer={`
                    目前在「政府資料開放平臺一我想要更多」的資料申請功能(https://data.gov.tw/suggests)，只要透過「我的E政府」註冊帳號，或利用既有的Google或臉書帳號皆可登入。無論是否持有本國國籍或在台灣設籍，個人或是團體，皆可透過平臺申請。
                    惟部分限制性公開的資料，可能會限定特定身份者(如政府機關、學校或本國人民)另行申請並付費後方能取得及使用。`}
                />
                <Question
                  title="3. 任何資料都可以申請嗎？"
                  answer={`
                    政府資料開放的主要內容是政府機關在職權範圍內取得做成的資料。
                    所謂「政府機關」是指中央、地方各級機關及其設立之實(試) 驗、研究 、文教、醫療及特種基金管理等機構。中央機關如交通部、衛生福利部，地方機關包括直轄市及縣市政府，如臺北市、花蓮縣政府。
                    另外，受政府機關委託行使公權力之個人、法人或團體，在受託事務範圍內視同政府機關，民眾也可以申請向他們相關資料，像是台電、中油、北農公司等。
                    若為民營企業，如台積電或全聯，因為不是「政府機關」，並不會受到「政府資訊公開法」的規範，也不會在平臺回覆民眾的資料申請。但是如果有公益必要，涉及大眾生命、身體、健康的威脅，民眾還是要求主管機關公開民營企業的相關資訊。
                    參考「政府資訊公開法」
                    https://law.moj.gov.tw/LawClass/LawAll.aspx?PCode=I0020026`}
                />
                <Question
                  title="4. 你想要的資料是否已經開放了？"
                  answer={`
                    你可以去「政府資料開放平臺」>>「全部資料集」查詢是否已經開放。
                    https://data.gov.tw/datasets/search?qs=&order=pubdate&type=dataset
                    或是利用本站內搜尋功能，一次查詢政府開放的資料集＆民眾申請紀錄。
                    https://dataopener.tw (連結後補)
                    查詢時，多試試不同的關鍵字。例如查不到「紅綠燈」，改成「交通號誌」再查查看。必要時拜一下google大神，用官方或習慣用語查詢，結果會更精準。
                    如果「政府資料開放平臺」有你想要的資料集，那麼恭喜你！你並不需要申請。
                    如果「政府資料開放平臺」有你想要的資料集，但是裡面的欄位不夠（例如你需要「電話」及「地址」，但機關只開放了「電話」這個欄位），你可以針對還沒開放的部分進行申請！
                    如果在「政府資料開放平臺」並沒有找到你想要的資料，你可以google看看是否有機關建置的其他網站上。例如，你想知道全台灣國中小學生的營養午餐菜單，目前教育部有提供民眾在「校園食材登錄平臺」上面進行查詢(https://fatraceschool.moe.gov.tw/frontend/index.html)，但是這一步只做到「公開」，還不是開放資料的「開放」。你仍可以回到「政府資料開放平臺」進行申請，當機關將資料上架後，未來使用者只需要在單一平臺查找，更可以使用釋出的資料集進行加值應用。`}
                />
                <Question
                  title="5. 如何申請政府開放資料？"
                  answer={`
                    前往「政府資料開放平臺」的「我想要更多」專區 (https://data.gov.tw/suggests)。
                    1. 你需要先加入會員。
                    2. 登入後回到「我想要更多」頁面，點選畫面左邊的「新增」按鈕，就可以開始填寫申請表格。
                    3. 填寫完畢按左下角「儲存」按鈕，你的申請就會送出囉！
                    4. 你也可以參考官方說明 https://data.gov.tw/node/8105。`}
                />
                <Question
                  title="6. 申請資料需要填寫的內容？"
                  answer={`
                    主要填寫內容有四項一

                    1. 標題：填寫申請的主旨，類似信件的標題，例：「請開放近五年全國交通事故的原始資料」。
                    2. 建議資料集名稱：為你希望開放的資料集命名，例：「近五年全國交通事故」。
                    3. 建議開放的欄位：填寫你希望開放的資料集裡面有哪些資訊，例：「交通事故發生日期、時間、肇事路段、肇事因素、肇事車種、死亡人數、受傷人數」。
                    4. 建議的原因：填寫你覺得政府應該開放這個資料的原因。

                    | 申請表格 | 填寫範例 | 
                    | -------- | -------- |
                    | 標題     | 請開放近五年全國交通事故的原始資料   | 
                    | 建議資料集名稱 | 近五年全國交通事故 | 
                    | 建議開放的欄位 | 交通事故發生日期、時間、肇事路段、肇事因素、肇事車種、死亡人數、受傷人數 |
                    | 建議原因    | (你覺得政府應該開放這個資料的原因)  |

                    對了，你並不需要填寫受理機關的名稱。你只需要送出申請資料，政府資料開放平臺會主動協助分派，請相關機關進行回覆！
                    例如交通事故資料，平臺就會發信給交通部承辦，請他們協助評估你的需求事項。
                    `}
                  >`}
                />
                <Question
                  title="7. 資料申請小幫手可以幫忙做什麼？"
                  answer={`
                    機關在「我想要更多」應民眾提出的資料申請，開放的比例不超過四成，於是「資料申請小幫手」從前人申請經驗中歸納出了四個有利的加分條件，包括：
                    * 政府優先盤點及開放資料類型
                    * 施政相關度
                    * 政府應主動公開之資訊
                    * 國內外類似開放案例
                    你可以利用右上角「我要申請」功能 (連結後補)，小幫手工具會協助你一步步完成關卡，篩檢出有利申請的條件，加上其他你想說的話(例如時事關連)，來提高開放的可能性！
                    填寫完畢後，將網站生成的申請內容(如下)貼到「我想要更多」表格就可以了！
                    :::info
                    建議的原因：
                    此資料需求具有「民生安全」相關的公共利益價值，「基礎建設」相關的經濟發展價值，屬於行政院政府資料開放進階行動方案當中機關應優先盤點開放的項目。
                    有助促進「優化生活安全及品質」、「落實環境知情權」、「公共運輸整合資訊流通服務」，提升政府重點資訊服務，施政相關度高。
                    依據「政府資訊公開法§7-5 施政計畫、業務統計及研究報告」屬於應主動公開之政府資訊，除規定限制公開或不予提供外，機關應主動公開。
                    目前已知類似開放案例有「英國」的「Road Traffic Accidents」，網址連結請見此 (https://data.gov.uk/dataset/053a6529-6c8c-42ac-ae1e-455b2708e535/road-traffic-accidents)，希望貴機關借鏡他人經驗，加速推動資料開放，回應民間需求。
                    據媒體報導，台北市外送員交通事故平均每天2.3件(https://udn.com/news/story/7320/4104798)，相關單位實應儘速開放相關資料，透過公私協力分析交通事故數據，提升國人行車安全。
                    :::`}
                />
                <Question
                  title="8.申請資料會收費嗎？"
                  answer={`
                    透過「我想要更多」申請開放資料是免費的，使用也是免費的。
                    當機關同意開放，並將資料上架，任何人均可自由下載使用，並且是開放授權，也就是不限商業或非商業使用目的，人人均可免費使用、再散布、修改、分離、編輯。
                    惟部分限制性公開的資料，可能會限定特定身份者(如政府機關、學校或本國人民)另行申請並付費後方能取得及使用。`}
                />
                </Question>
              </Subjects>
            </Content>
          </Body>
        </Main>
        <Footer />
      </Container>
    </Document>
  );
}

import { AppHistory } from "../../components/AppHistory/AppHistory";
import { AppPost } from "../../components/AppPost/AppPost";
import { AppRepost } from "../../components/AppRepost/AppRepost";
import { CloseFriends } from "../../components/CloseFriends/CloseFriends";
import { MusicBlock } from "../../components/MusicBlock/MusicBlock";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { SubscribersList } from "../../components/SubscribersList/SubscribersList";
import { Header } from "../../components/UI/Header/Header";
import { WhatsNew } from "../../components/WhatsNew/WhatsNew";
import "./MainPage.scss";

export const MainPage = () => {
  return (
    <div className="MainPage">
      <Header/>
      <aside className="LeftSide">
        <Sidebar/>
        <SubscribersList/>
      </aside>
      <main className="Main">
        <WhatsNew/> 
        <AppHistory/>
        <AppPost/>
        <AppRepost/>
      </main>
      <aside className="RightSide">
        <CloseFriends/>
        <MusicBlock/>
      </aside>
    </div>
  );
};

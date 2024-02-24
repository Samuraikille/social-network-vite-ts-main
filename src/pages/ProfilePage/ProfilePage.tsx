import { AppPost } from "../../components/AppPost/AppPost";
import { AppRepost } from "../../components/AppRepost/AppRepost";
import { FriendsBlock } from "../../components/FriendsBlock/FriendsBlock";
import { MusicBlock } from "../../components/MusicBlock/MusicBlock";
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { SubscribersList } from "../../components/SubscribersList/SubscribersList";
import { Header } from "../../components/UI/Header/Header";
import { UserBiography } from "../../components/UserBiography /UserBiography";
import { UserPosts } from "../../components/UserPosts/UserPosts";
import { WhatsNew } from "../../components/WhatsNew/WhatsNew";
import { SCProfilePage } from "./ProfilePage.styled";

export const ProfilePage = () => {
  return (
    <SCProfilePage>
      <Header />
      <aside className="LeftSide">
        <Sidebar />
        <SubscribersList />
      </aside>
      <ProfileHeader />
      <main className="Main">
        <WhatsNew />
        <UserPosts />
        <AppPost />
        <AppRepost />
      </main>
      <aside className="RightSide">
        <UserBiography />
        <FriendsBlock />
        <MusicBlock />
      </aside>
    </SCProfilePage>
  );
};

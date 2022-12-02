import React from "react";
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";
import { UidContext } from "../components/AppContext";
import { useContext } from "react";
import NewPostForm from "../components/Post/NewPostForm";
import Log from "../components/Log";

const Home = () => {
  const uid = useContext(UidContext);

  return (
    <div className="home">
      <LeftNav />
      <div className="main">
        <div className="home-header">
          {uid ? <NewPostForm /> : <Log signin={true} signup={false} />}
        </div>
        <Thread />
      </div>
    </div>
  );
};

export default Home;

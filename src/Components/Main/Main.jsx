import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Chat - Sahil</p>
        <img className="sahil" src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, User.</span>
              </p>
              <p>It's your friend Sahil, How can i help you?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest some best anime of 2024</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>What's the update on One Piece?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Will Luffy becomes a Pirate King?</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest some chill Lo-fi songs for a long drive</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. <u>Your privacy & Gemini Apps</u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

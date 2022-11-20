import "./App.css";
import edSing from "./ed-sing.gif";
import React, { useState, useRef } from "react";
import axios from "axios";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    "background-color": "rgba(0, 0, 0, 0.75)",
  },
  content: {
    fontFamily: "Inter",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function App() {
  const [userInput, setUserInput] = useState("");
  const [generated, setGenerated] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef(null);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [friendEmail, setFriendEmail] = React.useState("");

  function openModal() {
    setIsOpen(true);
    console.log("hello");
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div class="background" />
      <div class="black-opacity d-flex justify-content-center align-items-center">
        <div class="">
          {/** HEADER */}
          <div class="header">
            <div class="big-title">Help Ed Sing 🎵</div>
            <div class="small-title mt-2 mb-5">
              Ed Sheeran will sing anything
            </div>
          </div>
          {/** MIDDLE */}
          <div class="middle">
            {/** SONG INPUT */}
            <div class="song-input">
              <textarea
                spellCheck="false"
                class="form-control"
                rows="20"
                onChange={(e) => {
                  setUserInput(e.target.value);
                }}
              ></textarea>
              <div class="d-flex justify-content-end">
                {!generated ? (
                  <button
                    class="btn btn-danger orange-color-btn mt-3"
                    disabled={disabled}
                    onClick={() => {
                      setDisabled(true);
                      videoRef.current.pause();

                      axios
                        .post("https://ru-hack-backend.herokuapp.com/sound", {
                          userInput: userInput
                            .replace("'", "_")
                            .replace(/\n/g, " "),
                        })
                        .then(function () {
                          axios({
                            url: "https://ru-hack-backend.herokuapp.com/download", //your url
                            method: "GET",
                            responseType: "blob", // important
                          }).then((res) => {
                            const url = URL.createObjectURL(res.data);
                            setVideoUrl(url);
                            setGenerated(true);
                            setDisabled(false);
                          });
                        })
                        .catch(function (error) {
                          console.log(error);
                        });
                    }}
                  >
                    Generate
                  </button>
                ) : (
                  <div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://ru-hack-backend.herokuapp.com/download"
                      class="btn btn-danger blue-color-btn mt-3"
                      onClick={() => {
                        setGenerated(true);
                      }}
                    >
                      Download
                    </a>
                    <button
                      class="btn btn-danger orange-color-btn mt-3"
                      onClick={() => {
                        videoRef.current.play();
                      }}
                    >
                      Play
                    </button>
                    <button
                      class="btn btn-danger blue-color-btn mt-3"
                      onClick={openModal}
                    >
                      Share
                    </button>
                    <button
                      class="btn btn-danger orange-color-btn mt-3"
                      onClick={() => {
                        setGenerated(false);
                      }}
                    >
                      New
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/** ED IMAGE*/}
            <div class="ed-image">
              <img src={edSing} alt="ed-sing" width={320} />
            </div>
          </div>
          <video ref={videoRef} class="user-video" src={videoUrl} autoPlay />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Share Ed song to friend"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Share to friend</h2>
        <div class="d-flex align-items-center mt-3">
          <input
            class="send-email-input"
            type="text"
            aria-describedby="sendEmail"
            placeholder="Email"
            onChange={(e) => setFriendEmail(e.target.value)}
          />
          <button
            class="btn btn-danger send-btn"
            onClick={(e) => {
              e.preventDefault();

              axios
                .post("https://ru-hack-backend.herokuapp.com/share_friend", {
                  email: friendEmail,
                })
                .then((res) => {
                  console.log(res.data);
                })
                .catch((error) => {
                  console.log(error.response.data);
                });

              closeModal();
            }}
          >
            Send
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;

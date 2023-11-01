import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./Chat.css";

const socket = io("http://localhost:4000/");

export const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "", message: "", options: [] },
  ]);
  const [chatOpen, setChatOpen] = useState(false);
  const [responseAdded, setResponseAdded] = useState(false);
  const [buttonOption, setButtonOption] = useState("");

  const messagesEndRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    socket.emit("userMessage", input);
    setMessages([...messages, { from: "User", message: input, options: [] }]);
    // //RESPUESTA SER SERVIDOR SI EL CLIENTE DICE HOLA
    socket.on("responseUserMessage", (message) => {
      setMessages((prevValue) => [...prevValue, message]);
      socket.off("responseUserMessage");
    });
    setInput("");

    // e.target.reset();
  };

  useEffect(() => {
    // Envío un mensaje al cargar la página para obtener una respuesta del servidor
    socket.emit("firstMessageOptions", "inicio");
    socket.on("firstMessageOptionsBackend", (message) => {
      if (!responseAdded) {
        setMessages([
          ...messages,
          {
            from: message.from,
            message: message.message,
            options: message.options,
          },
        ]);
        setResponseAdded(true);
      }
    });

    return () => {
      socket.off("firstMessageOptionsBackend");
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  //chat
  const handleClick = () => {
    setChatOpen((previusChatOpen) => !previusChatOpen);
  };

  const handleClickOption = (e) => {
    const selectedOption = e.target.value;
    setButtonOption(selectedOption);
    socket.emit("selectOptionFromUser", selectedOption);
    socket.once("responseOptionFromServer", (message) => {
      const response = {
        from: message.from,
        message: message.message,
      };
      setMessages([...messages, response]);
    });
  };
  // console.log(messages);

  return (
    <>
      <button className="chat_button" onClick={() => handleClick()}>
        CHAT
      </button>

      {chatOpen && (
        <div className="chat">
          <div className="chat-header">
            <h3 className="title_chat">chat</h3>

            <button
              className="chat_close_button"
              onClick={() => setChatOpen(false)}
            >
              &times;
            </button>
          </div>
          <div className="chat-body">
            {messages.map((el, index) => (
              // console.log(el)
              <div className="content_chat" key={index}>
                <strong>
                  <span style={{ color: "blue" }}>{el.from}</span>
                </strong>
                {el.message}
                {el.options?.map((el, index) => (
                  <div key={index}>
                    <br />
                    <button
                      value={el}
                      onClick={(e) => handleClickOption(e)}
                      className="chat_click_option"
                    >
                      {el}
                    </button>
                  </div>
                ))}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-footer">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Escribí tu mensaje aqui..."
              />

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

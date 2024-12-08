import React, { useState, useRef } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";

const socket = io("http://localhost:8000");

function App() {
    const [username, setUsername] = useState(""); // Current user
    const [registered, setRegistered] = useState(false);
    const [recipient, setRecipient] = useState(""); // To user
    const [callAccepted, setCallAccepted] = useState(false);
    const [calling, setCalling] = useState(false);
    const [caller, setCaller] = useState(null);
    const [signal, setSignal] = useState(null);

    const myVideo = useRef(null);
    const userVideo = useRef(null);
    const connectionRef = useRef();

    const register = () => {
        socket.emit("register", username);
        setRegistered(true);
    };

    const callUser = () => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: myVideo.current?.srcObject,
        });

        peer.on("signal", (signal) => {
            socket.emit("callUser", { from: username, to: recipient, signal });
        });

        peer.on("stream", (stream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        });

        socket.on("callAccepted", (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });

        connectionRef.current = peer;
        setCalling(true);
    };

    const answerCall = () => {
        setCallAccepted(true);

        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: myVideo.current?.srcObject,
        });

        peer.on("signal", (signal) => {
            socket.emit("answerCall", { from: caller, signal });
        });

        peer.on("stream", (stream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        });

        peer.signal(signal);
        connectionRef.current = peer;
    };

    React.useEffect(() => {
        // Get video and audio permissions
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                if (myVideo.current) {
                    myVideo.current.srcObject = stream;
                }
            })
            .catch((error) => {
                console.error("Error accessing media devices:", error);
            });

        // Handle incoming call
        socket.on("incomingCall", ({ from, signal }) => {
            setCaller(from);
            setSignal(signal);
        });

        // Handle unavailable user
        socket.on("userUnavailable", ({ message }) => {
            alert(message);
        });
    }, []);

    return (
        <div className="p-100 h-full w-full relative z-20 flex items-center justify-center pt-96">
            {!registered ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button onClick={register}>Register</button>
                </div>
            ) : (
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter recipient username"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                        />
                        <button onClick={callUser}>Call</button>
                    </div>
                    <video ref={myVideo} autoPlay muted style={{ width: "300px" }} />
                    <video ref={userVideo} autoPlay style={{ width: "300px" }} />
                    {calling && <p>Calling...</p>}
                    {caller && !callAccepted && (
                        <div>
                            <p>Incoming call from {caller}...</p>
                            <button onClick={answerCall}>Answer</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;

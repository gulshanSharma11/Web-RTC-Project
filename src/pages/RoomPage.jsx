import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const RoomPage = () => {
    const { roomID } = useParams();
    const [error, setError] = useState(null);
    const meetingContainerRef = useRef(null);

    useEffect(() => {
        const MyMeeting = async () => {
            if (!roomID) {
                setError('Room ID is empty');
                return;
            }

            const appID = 203828405;
            const serverSecret = "aaa8949a5370b5aae4371160fee1b808";
            const kitToken = await ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Gulshan");
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: meetingContainerRef.current,
                scenario: {
                    mode: ZegoUIKitPrebuilt.VideoConference,
                },
            });
        };

        MyMeeting();

        // Clean up function
        return () => {
            // Leave room or perform any necessary cleanup
        };
    }, [roomID]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div ref={meetingContainerRef}></div>
        </div>
    );
};

export default RoomPage;

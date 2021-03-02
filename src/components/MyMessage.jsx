const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                className="message-image"
                src={message.attachments[0].file}
                alt="Message-Attachment"
                style={{ float: "right" }}
            />
        );
    }
    return (
        <div
            style={{
                float: "right",
                marginRight: "18px",
                color: "white",
                backgroundColor: "#3B2A50",
            }}
            className="message"
        >
            {message.text}
        </div>
    );
};

export default MyMessage;

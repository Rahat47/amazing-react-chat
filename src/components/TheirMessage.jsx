const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser =
        !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{
                        backgroundImage: `url(${message?.sender?.avatar})`,
                    }}
                />
            )}

            {message?.attachments?.length > 0 ? (
                <img
                    className="message-image"
                    src={message.attachments[0].file}
                    alt="Message-Attachment"
                    style={{
                        marginLeft: isFirstMessageByUser ? "4px" : "48px",
                    }}
                />
            ) : (
                <div
                    style={{
                        float: "left",
                        backgroundColor: "#CABCDC",
                        marginLeft: isFirstMessageByUser ? "4px" : "48px",
                    }}
                    className="message"
                >
                    {message.text}
                </div>
            )}
        </div>
    );
};

export default TheirMessage;

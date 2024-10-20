const Notification = ({ errorMessage, successMessage }) => {
  if (!successMessage && !errorMessage) {
    return null;
  }
  return (
    <div className={`message ${successMessage ? "success" : "error"}`}>
      {successMessage ? successMessage : errorMessage}
    </div>
  );
};

export default Notification;

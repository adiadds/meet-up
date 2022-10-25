import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
function NewMeetUpPage() {
  const history = useHistory();
  function addmeetupHandler(meetupData) {
    fetch("https://reactxbasics-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meeting</h1>
      <NewMeetupForm onAddMeetup={addmeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;

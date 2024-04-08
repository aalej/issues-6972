import "./App.css";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { firebaseStorage } from "./firebase";

function App() {
  async function handleSubmit(e) {
    e.preventDefault();
    const photo = e.target[0].files[0];

    let response = {};

    const storageRef = ref(
      firebaseStorage,
      `some_user_uid/photos/${photo.name}`
    );
    await uploadBytes(storageRef, photo);
    response.photoURL = await getDownloadURL(storageRef);

    console.log("[response]", response);
  }

  return (
    <div className="App">
      <div>Firebase Storage Emulator</div>
      <form onSubmit={handleSubmit} className="form">
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;

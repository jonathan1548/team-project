import { db } from "../config";
import {
  getDocs,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

async function getUsers() {
  const citiesCol = collection(db, "users");
  const citySnapshot = await getDocs(citiesCol);
  // console.log(citySnapshot);
  const cityList = citySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return cityList;
}

async function editUsers(users) {
  console.log("at editCity", users);
  await setDoc(doc(db, "users", users.id), users);
}

async function deleteUsers(id) {
  try {
    await deleteUsers(doc(db, "users", id));
    console.log("Document deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

async function addUsers(users) {
  try {
    const docRef = await addDoc(collection(db, "users"), users);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

function subscribeUsers(callback) {
  const unsubscribe = onSnapshot(
    query(collection(db, "users")),
    (snapshot) => {
      const source = snapshot.metadata.hasPendingWrites ? "Local" : "Server";
      snapshot.docChanges().forEach((change) => {
        // console.log("changes", change, snapshot.metadata);
        if (callback) callback({ change, snapshot });
      });
      // console.log(source, " data: ", snapshot.data());
    }
  );
  return unsubscribe;
}

export { getUsers, addUsers, editUsers, deleteUsers, subscribeUsers };

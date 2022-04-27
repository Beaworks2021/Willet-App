export const setOrigin = (state) => {
  return {
    type: "SET_ORIGIN",
    payload: state,
  };
};

export const setDestination = (state) => {
  return {
    type: "SET_DESTINATION",
    payload: state,
  };
};

export const setTravelTimeInformation = (state) => {
  console.log("OK Now =========", state);
  return {
    type: "SET_TRAVELTIMEINFORMATION",
    payload: state,
  };
};

export const syncPackageData = ({}) => {
  return (dispatch, useState, { getFirestore, getFirebase }) => {
    const userId = getFirebase().auth().currentUser.uid;
    const db = getFirestore();
    const dbRef = db.collection("users").doc(userId);

    let data = {};

    dbRef
      .update({
        packages: firebase.firestore.FieldValue.arrayUnion(data),
      })
      .then(() => {
        alert("Data synced");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const getUserData = () => {
  return (dispatch, useState, { getFirestore, getFirebase }) => {
    const userId = getFirebase().auth().currentUser.uid;
    const db = getFirestore();
    const dbRef = db.collection("users").doc(userId);

    dbRef.onSnapshot(
      (querySnapshot) => {
        // array to store returned data
        let userData = [];

        // push returned data from database to trans array
        userData.push(querySnapshot.data());

        // make data available for redux state
        dispatch({
          type: "GET_USER_DATA",
          payload: userData,
        });
      },
      (error) => {
        alert(error.message);
      }
    );
  };
};

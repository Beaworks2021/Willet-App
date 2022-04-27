export const createUserWithEmailAndPassword = ({
  email,
  password,
  fullName,
  phoneNumber,
}) => {
  return (dispatch, useState, { getFirebase, getFirestore }) => {
    getFirebase()
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        getFirebase()
          .auth()
          .onAuthStateChanged((user) => {
            if (user != null) {
              getFirestore()
                .collection("users")
                .doc(user.uid)
                .set({
                  fullName: fullName,
                  email: email,
                  phoneNumber: phoneNumber,
                  packages: [],
                })
                .then(() => {})
                .catch((error) => {});
            }
          })
          .then(() => {
            alert("sign up success");
          })
          .catch((error) => {});
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            alert("Enter a valid email");
            break;
          case "auth/weak-password":
            alert("Enter a strong password");
            break;
          case "auth/network-request-failed":
            alert("Network error");
            break;
          default:
            alert(error.code);
            break;
        }
      });
  };
};

export const loginUser = (email, password) => {
  return (dispatch, useState, { getFirebase, getFirestore }) => {
    getFirebase()
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Login successful");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            alert("Enter a valid email");
            break;
          case "auth/weak-password":
            alert("Enter a strong password");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          case "auth/network-request-failed":
            alert("Network error");
            break;
          default:
            alert(error.code);
            break;
        }
      });
  };
};

export const signOut = () => {
  return (dispatch, useState, { getFirebase, getFirestore }) => {
    getFirebase()
      .auth()
      .signOut()
      .then(() => {
        alert("Sign out successfull");
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };
};

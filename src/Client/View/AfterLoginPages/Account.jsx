import React, { useState, useEffect } from "react";
import inNavbar from "../../Model/NavBar/InNav";
import Img from "../../../library/coming_soon.png";
import { useNavigate } from "react-router-dom";
import InNavbar from "../../Model/NavBar/InNav";
import { UserAuth } from "../../../Server/firebase/AuthContext";
import Camera from "../../Model/svg/Camera";
import Delete from "../../Model/svg/Delete";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";
import { storage, db, auth } from "../../../Server/firebase/FirebaseInitialize";
import { async } from "@firebase/util";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const Account = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState({});
  const history = useNavigate("");

  useEffect(() => {
    getDoc(doc(db, "Users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });

    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          await updateDoc(doc(db, "Users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });

          setImg("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImg();
    }
  }, [img]);

  const deleteImage = async () => {
    try {
      const confirm = window.confirm("Delete avatar?");
      if (confirm) {
        await deleteObject(ref(storage, user.avatarPath));

        await updateDoc(doc(db, "Users", auth.currentUser.uid), {
          avatar: "",
          avatarPath: "",
        });
        history.replace("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <InNavbar />
      <section>
        <div className="profile_container">
          <div className="img_container">
            <img src={user.avatar || Img} alt="avatar" />
            <div className="overlay">
              <div>
                <label htmlFor="photo">
                  <Camera />
                </label>
                {user.avatar ? <Delete deleteImage={deleteImage} /> : null}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  id="photo"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div className="text_container">
            <h3>{user.UniqueId}</h3>
            <p>{user.email}</p>
            {/* <hr /> */}
            {/* <small>Joined on: {user.createdAt.toDate().toDateString()}</small> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;

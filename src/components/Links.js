import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";
import { toast } from "react-toastify";

const Links = () => {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = () => {
    try {
      db.collection("links").onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLinks(docs);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const addOrEditLink = async (linkObject) => {
    try {
      if (currentId === "") {
        await db.collection("links").doc().set(linkObject);
        toast("New Link Added", {
          type: "success",
          autoClose: 4000,
        });
      } else {
        await db.collection("links").doc(currentId).update(linkObject);
        toast("Link Updated", {
          type: "info",
          autoClose: 4000,
        });
        setCurrentId("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteLink = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this link?")) {
        await db.collection("links").doc(id).delete();
        toast("Link Deleted", {
          type: "error",
          autoClose: 4000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <LinkForm {...{ addOrEditLink, currentId, links }} />
      <h1 className="text-center mt-4">Links</h1>
      <div className="col-md">
        {links.map((link) => (
          <div className="card mb-1 p-2" key={link.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h4>{link.name}</h4>
                <div>
                  <i
                    className="material-icons text-danger"
                    onClick={() => onDeleteLink(link.id)}
                  >
                    close
                  </i>
                  <i
                    className="material-icons ml-3"
                    onClick={() => setCurrentId(link.id)}
                  >
                    create
                  </i>
                </div>
              </div>
              <p>{link.description}</p>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                Go to website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;

import React, { useState, useEffect } from "react";
import { db, Firebase } from "../../firebase";

import { Box, Section } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const ApplyList = () => {
  const [loaded, setLoaded] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(10);
  const [pageCount, setPageCount] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [applies, setApplies] = useState([]);
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async () => {
      const ref = db.collection("applies");
      const currentUser = await db
        .collection("users")
        .doc(Firebase.auth().currentUser.uid)
        .get();
      setUser(currentUser.data());
      let appliesRef = await ref.get();
      for (let apply of appliesRef.docs) {
        let upvotes = 0;
        let downvotes = 0;
        let voteRef = await ref
          .doc(apply.id)
          .collection("votes")
          .get();
        let userRef = await db
          .collection("users")
          .doc(apply.data().author_id)
          .get();
        for (let vote of voteRef.docs) {
          if (vote.data().value === 1) upvotes++;
          if (vote.data().value === -1) upvotes--;
        }
        let comments = await ref.doc(apply.id).collection("comments");
        const commentsCount = comments.size;

        let currentApply = {
          id: apply.id,
          name: userRef.data().pseudo,
          date: apply.data().date.seconds,
          state: apply.data().state,
          upvotes,
          downvotes,
          commentsCount,
        };

        setApplies(old => [...old, currentApply]);
      }
      setPageCount(Math.ceil(appliesRef.size / 10));
      setLoaded(true);
    };

    getData();
  }, []);

  const changeDisplayNumber = e => {
    setDisplayNumber(parseInt(e.target.value));
    setPageNumber(1);
    console.log(applies.length / displayNumber);
    setPageCount(Math.ceil(applies.length / parseInt(e.target.value)));
  };

  const getStatus = status => {
    if (status === "pending")
      return <span className='tag is-light'>En Attente</span>;
    if (status === "test") return <span className='tag is-info'>En Test</span>;
    if (status === "accept")
      return <span className='tag is-success'>Accepté</span>;
    if (status === "reject")
      return <span className='tag is-danger'>Refusé</span>;
  };

  const displayPage = () => {
    let array = [];
    for (
      let i = (pageNumber - 1) * displayNumber;
      i < (pageNumber - 1) * displayNumber + displayNumber &&
      i < applies.length;
      i++
    ) {
      const date = new Date(applies[i].date * 1000);
      array.push(
        <tr
          onClick={() =>
            window.location.assign(`/candidatures/${applies[i].id}`)
          }
          style={{ cursor: "pointer" }}
        >
          <td>{applies[i].name}</td>
          <td>
            {date.toLocaleString("fr-FR", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </td>
          <td>{applies[i].commentsCount}</td>
          <td>
            <span>
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{ color: "#48c774", marginRight: 4 }}
              />
              {applies[i].upvotes}
            </span>
            <span style={{ marginLeft: 10, marginRight: 4 }}>
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={{ color: "#f14668" }}
              />
            </span>
            {applies[i].downvotes}
          </td>
          <td>{getStatus(applies[i].state)}</td>
        </tr>
      );
    }
    return array;
  };

  const Pagination = () => {
    const first = pageNumber === 1;
    const last = pageNumber === pageCount;

    return (
      <nav className='pagination' role='navigation'>
        <button
          className='pagination-previous is-primary'
          disabled={first}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className='pagination-next'
          disabled={last}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </nav>
    );
  };

  if (!loaded) {
    return (
      <progress
        className='progress is-link'
        max='100'
        style={{
          width: "50vw",
          marginTop: "40vh",
          position: "relative",
          left: "25%",
        }}
      ></progress>
    );
  } else {
    return (
      <div className='columns is-centered'>
        <div className='column is-6'>
          <Section>
            <Box>
              <nav className='level'>
                <div className='level-left'>
                  <h1 className='title is-1 has-text-left'>
                    <b>Candidatures</b>
                  </h1>
                </div>
                <div className='level-right' style={{ paddingTop: 15 }}>
                  <a className='button is-success' href='/candidatures/create'>
                    Créer une candidature
                  </a>
                </div>
              </nav>
              <Section>
                <table className='table is-fullwidth is-hoverable'>
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Date</th>
                      <th>Commentaires</th>
                      <th>Votes</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{displayPage()}</tbody>
                </table>
                <nav className='level'>
                  <div className='level-left'>
                    <Pagination />
                  </div>
                  <div className='level-right'>
                    <div>Resultats par page:</div>
                    <div
                      className='select is-small is-pulled-right'
                      style={{ marginLeft: 15 }}
                    >
                      <select onChange={changeDisplayNumber}>
                        <option>10</option>
                        <option>20</option>
                        <option>50</option>
                      </select>
                    </div>
                    <div style={{ marginLeft: 15 }}>
                      Page {pageNumber} sur {pageCount}
                    </div>
                  </div>
                </nav>
              </Section>
            </Box>
          </Section>
        </div>
      </div>
    );
  }
};

export default ApplyList;

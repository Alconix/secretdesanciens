import React from "react";
import { Box } from "react-bulma-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Comment = props => {
  return (
    <Box>
      <div className='is-size-5 has-text-justified'>
        <article className='media'>
          <figure className='media-left'>
            <p className='image is-128x128'>
              <img
                className='is-rounded'
                src={
                  props.img
                    ? props.img
                    : "https://firebasestorage.googleapis.com/v0/b/secretdesanciens.appspot.com/o/default-avatar.jpg?alt=media"
                }
                alt='profile'
              />
            </p>
          </figure>
          <div className='media-content'>
            <div className='content'>
              <a href={`/users/${props.userId}`} className={props.nameStyle}>
                <b>{props.pseudo}</b>
              </a>
              <div className='subtitle is-7'>
                {props.commentDate}
                {props.editDate && ` - Edité le ${props.editDate}`}
              </div>
              <div
                className='container has-text-justified'
                style={{ whiteSpace: "pre-line" }}
              >
                {props.content} {/* TODO : Edition inline */}
              </div>
            </div>
          </div>
          {props.controlButtons && (
            <div className='media-right'>
              <FontAwesomeIcon
                icon={faEdit}
                onClick={props.onEdit}
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                  color: "#209cee",
                }}
              />
              <FontAwesomeIcon
                icon={faTrashAlt}
                onClick={props.onDelete}
                style={{
                  cursor: "pointer",
                  color: "#e74c3c",
                }}
              />
            </div>
          )}
        </article>
      </div>
    </Box>
  );
};

export default Comment;

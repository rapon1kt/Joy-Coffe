import React from "react";
import { data } from "../../../data";
import "./team.css";

const Team: React.FC = () => {
  return (
    <div className="team-container">
      <div className="team">
        <h1 className="team-title">
          <i
            className="fa-solid fa-people-group"
            style={{ color: "#dcccc0" }}
          ></i>
          Team
        </h1>
        <div className="team-persons">
          {data.map((person) => (
            <div className={"person " + person.name}>
              <img
                className="person-images"
                src={person.image}
                alt={person.name}
                onClick={() =>
                  window.open(`https://www.instagram.com/${person.instagram}`)
                }
              />
              <div className="person-insta">
                <i
                  className="fa-brands fa-instagram"
                  style={{ color: "#d8ae8e", fontSize: "4rem" }}
                ></i>
                <h3 className="person-nick">@{person.instagram}</h3>
              </div>
              <h3 className="person-description">
                {person.name}
                <br /> {person.role}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="team-description">
        <h1 className="team-description-title">
          <i className="fa-solid fa-circle-info"></i> Sobre Nós
        </h1>
        <h3 className="team-description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          integer eget aliquet nibh praesent tristique magna sit amet. Lobortis
          scelerisque fermentum dui faucibus in ornare quam. Adipiscing diam
          donec adipiscing tristique risus nec feugiat. Ipsum dolor sit amet
          consectetur adipiscing elit ut aliquam. Id eu nisl nunc mi ipsum
          faucibus vitae aliquet. Viverra accumsan in nisl nisi scelerisque eu.
          Penatibus et magnis dis parturient montes. Scelerisque fermentum dui
          faucibus in ornare quam viverra orci. Viverra adipiscing at in tellus
          integer feugiat. Purus sit amet volutpat consequat mauris nunc congue
          nisi.
        </h3>
      </div>
    </div>
  );
};

export default Team;

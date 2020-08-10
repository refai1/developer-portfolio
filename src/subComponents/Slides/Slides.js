import React, { useState, useEffect } from "react";
import "./Slides.css";
import Octicon, { MarkGithub, Star, RepoForked } from "@primer/octicons-react";
import { Lotties } from "../../subComponents";
import LoaderRing from "../../assets/anim/loader-ring.json";

const Slides = () => {
  const [items, setItems] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    const url = "https://api.github.com/users/refai1/repos";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setIsloading(false);
        setItems(data);
      });
  }, []);

  if (isloading) {
    return (
      <div className="mt-5">
        <Lotties
          animationData={LoaderRing}
          lh="5vw"
          lw="5vw"
          mh="10vw"
          mw="10vw"
        ></Lotties>
      </div>
    );
  } else {
    return (
      <div className="repos-container mt-5">
        {items.map(repos => (
          <a
            style={{ color: "#333", textDecoration: "none" }}
            href={repos.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div href={repos.html_url} key={repos.node_id} className="repo">
              <div className="repo-title">
                <p className="repo-name mt-3">{repos.name}</p>
                <p className="repo-description mt-2">{repos.description}</p>
              </div>
              <div className="repo-details">
                <div className="repo-details-items">
                  <div className="details-items mr-3">
                    <span className="mr-1">
                      <Octicon icon={Star} />
                    </span>
                    <p className="repo-stars">{repos.stargazers_count}</p>
                  </div>
                  <div className="details-items mr-3">
                    <span className="mr-1">
                      <Octicon icon={RepoForked} />
                    </span>
                    <p className="repo-forks">{repos.forks_count}</p>
                  </div>
                  <span>
                    <Octicon icon={MarkGithub} />
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
};
export default Slides;

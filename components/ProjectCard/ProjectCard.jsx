import styles from "./ProjectCard.module.scss";
import React from "react";

import {
  Container,
  IconButton,
  useMediaQuery,
  Box,
  Button,
} from "@mui/material";
import Image from "next/image";
import MainNav from "../Nav/MainNav";
import Link from "next/link";

const ProjectCard = ({
  url,
  image,
  title,
  locationName,
  locationUrl,
  description,
}) => {
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  return (
    <Link href={url}>
      <a>
        <article className={styles.projectCard}>
          <Image src={image} layout={"fill"} />
          <Box className={styles.info}>
            <Box className={styles.content}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.location}>
                <i>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_146_126)">
                      <path
                        d="M7.5 8.75C8.53553 8.75 9.375 7.91053 9.375 6.875C9.375 5.83947 8.53553 5 7.5 5C6.46447 5 5.625 5.83947 5.625 6.875C5.625 7.91053 6.46447 8.75 7.5 8.75Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.0356 10.4106L8.38375 13.0625C8.14937 13.2966 7.83162 13.4282 7.50031 13.4282C7.16901 13.4282 6.85126 13.2966 6.61688 13.0625L3.96438 10.4106C3.26514 9.71135 2.78896 8.82044 2.59606 7.85054C2.40315 6.88064 2.50218 5.87532 2.88063 4.96171C3.25907 4.04809 3.89994 3.26721 4.72218 2.71782C5.54442 2.16842 6.51111 1.87518 7.5 1.87518C8.4889 1.87518 9.45559 2.16842 10.2778 2.71782C11.1001 3.26721 11.7409 4.04809 12.1194 4.96171C12.4978 5.87532 12.5969 6.88064 12.4039 7.85054C12.211 8.82044 11.7349 9.71135 11.0356 10.4106V10.4106Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_146_126">
                        <rect width="15" height="15" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </i>
                <span>{locationName}</span>
              </p>
              <p className={styles.description}>{description}</p>
              <span className={styles.link}> find out more &#x3e;</span>
            </Box>

            <Box className={styles.label}>
              <span>
                ONLY 5 <br /> TOWNHOUSES <br /> LEFT
              </span>
            </Box>
          </Box>
        </article>
      </a>
    </Link>
  );
};

export default ProjectCard;

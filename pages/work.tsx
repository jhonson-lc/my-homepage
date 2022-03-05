import React from "react";
import {GetStaticProps} from "next";

import WorkScreen from "../work/screens/WorkPage";
import api from "../work/api";
import {Work} from "../work/types";

interface Props {
  works: Work[];
}

const IndexWork: React.FC<Props> = ({works}) => {
  return <WorkScreen works={works} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const works = await api.list("default");

  return {
    props: {
      works,
    },
    revalidate: 10,
  };
};

export default IndexWork;

import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { Location } from "../../components/Location/Location";
import "../../components/PostSection/PostSection";
import { SearchBanner } from "../../components/SearchBanner/SearchBanner";
import styles from "../../styles/Page.module.scss";

interface PostPageProps {
  comments: {
    text: string;
  }[];
}

const PostPage: NextPage<PostPageProps> = () => {
  return (
    <>
      <Head>
        <title>Post test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBanner />
      <Location
        paths={[
          { label: "test cateogry", url: "/category/dsadsa" }, // TODO: Fetch correct category ID
          { label: "Test post", url: "/post/postid" },
        ]}
      />
      <div className={styles.maxWidthContainer}></div>
    </>
  );
};

export default PostPage;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const dupa = ctx.query;

//   // if () {
//   //   return {
//   //     notFound: true,
//   //   };
//   // }

//   return {
//     props: {
//       ...data,
//     },
//   };
// };

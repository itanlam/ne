import React, { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import CommonError from "@/components/CommonError";
import { Type } from "@/core/menu/types";
import { Box } from "@material-ui/core";
import dynamic from "next/dynamic";
import TableSkeleton from "@/components/CommonTable/components/TableSkeleton";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { defaultProps } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/vsDark"

function Code({ children, className }: any) {
  if (!className) return null;
  const language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

const mdComponents = {
  code: Code
};

export default function PostTemplate({ category, slug }: any) {
  const [menuData, setMenuData] = useState<Type[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const content = await import(`@plugins/bunadmin-doc/menus`);
        const menuData = content && (content.default as Type[]);
        setMenuData(menuData);
      } catch (e) {}
    })();
  }, []);

  const DocComponent = dynamic({
    loader: () => import(`@plugins/bunadmin-doc/${category}/${slug}.mdx`),
    loading: () => <TableSkeleton title={`${slug} loading...`} />
  });

  const pCss = "/assets/css/prism.css";

  return (
    <>
      <Head>
        <title>Login</title>
        {<link rel="stylesheet" href={pCss} />}
      </Head>
      <DefaultLayout leftMenu={{ data: menuData, offLeftSetting: true }}>
        {slug ? (
          <Box p={3} pt={1}>
            <MDXProvider components={mdComponents}>
              <DocComponent />
            </MDXProvider>
          </Box>
        ) : (
          <CommonError statusCode={404} hasLayout={false} />
        )}
      </DefaultLayout>
    </>
  );
}

PostTemplate.getInitialProps = async (context: {
  query: { category: any; slug: any };
}) => {
  const { category, slug } = context.query;

  return { category, slug };
};

import React from "react";
import Paper from "@material-ui/core/Paper";

const DisqusBox = props => {
  const { pageId, pageUrl } = props;

  var disqus_config = function() {
    const currentDocument = document;
    currentDocument.url = pageUrl;
    currentDocument.identifier = pageId;
  };

  const connectDisq = () => {
    const currentDocument = document;
    const newScript = currentDocument.createElement("script");

    newScript.src = `https://${pageId}.disqus.com/embed.js`;

    newScript.setAttribute("data-timestamp", +new Date());
    (currentDocument.head || currentDocument.body).appendChild(newScript);
  };

  return (
    <Paper>
      <div id="disqus_thread"></div>
      <script>
        {connectDisq()}
        {disqus_config()}
      </script>
      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="https://disqus.com/?ref_noscript" rel="nofollow">
          comments powered by Disqus.
        </a>
      </noscript>
    </Paper>
  );
};

export default DisqusBox;

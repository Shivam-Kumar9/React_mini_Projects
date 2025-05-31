import React from "react";
import "../App.css";
function QuoteCard({ data, error }) {
  // const [{a,h ,q}] = data || [{a:'no',h:'h',q:'j'}]  not work beacuse [] alwasy true
  if (!data || data.length === 0) {
    return (
      <div className="loading_skeleton">
        <div className="skeleton_line" style={{ width: "75%" }}></div>
        <div className="skeleton_text"></div>
        <div className="skeleton_line" style={{ width: "50%" }}></div>
      </div>
    );
  }

  let quote = data?.[0] ?? {};
  let { a, q, h } = quote;
  console.log(q ,Date.now());
  return (
    <>
      {error && <div className="error-message">{error}</div>}

      {quote && (
        <div className="quote-card">
          <blockquote className="quote-text">"{ q}"</blockquote>
          <div className="quote-divider"></div>
          <p className="quote-author">— {a}</p>
          {/* {h && (
            <div
              className="quote-meta"
              dangerouslySetInnerHTML={{ __html: h }}
            />
          )} */}
        </div>
      )}
    </>
  );
}

export default QuoteCard;

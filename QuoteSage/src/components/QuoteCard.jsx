import "../App.css";
import { LikeButton } from './LikeBtn'
function QuoteCard({ data, error,likeSection }) {
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
  const { likesCount, isLiked, handleLike } = likeSection;

  // console.log(q ,Date.now());
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
            <hr style={{width:'25%',margin:'10px auto',color:'red'} } />
           
             <LikeButton 
                       liked={isLiked} 
                  onToggle={handleLike} 
                   likeCount={likesCount} />
        </div>
      )}
    </>
  );
}

export default QuoteCard;

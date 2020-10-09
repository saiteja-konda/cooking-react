import React, { useState, createElement, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sendlike, addComment, fetchPosts, fetchPost } from '../store/actions/postAction';
import ReactMarkdown from 'react-markdown';
import { Comment, Tooltip, Avatar, Form, Button, Input, BackTop } from 'antd';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled, HeartOutlined } from '@ant-design/icons';
import { ClientPostList } from './ClientPostList';
import SocialMedia from './socialMedia';
import Nav from './nav';
import Footer from './footer';

export const Post = props => {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [fetchPost]);
  const { postReducer } = useSelector(state => state);
  // eslint-disable-next-line
  let selectedPost = postReducer.posts?.find(post => post.id == id);
  const [post] = useState(selectedPost);
  const [postlike, setPostlike] = useState(post.likes);

  const [comment, setDcomment] = useState({
    comment: '',
    commentor: '',
  });
  const { TextArea } = Input;

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  function handleChange(e) {
    setDcomment({ ...comment, [e.target.name]: e.target.value });
  }
  function handleComment() {
    dispatch(addComment(id, comment), fetchPosts());
    setDcomment({
      comment: '',
      commentor: '',
    });
  }
  function handleLike() {
    setPostlike(postlike + 1);
    dispatch(Sendlike(id));
  }
  return (
    <div>
      <Nav/>
      <div className="container mycontainer">
        <div className="row">
          <div className="col-md-8">
            <div className="">
              <h4 className="h">{post.title}</h4>
              <h6 className="date"> Published on {post.postedOn}</h6>
              <div>
                <h6>Tags</h6>
                {post.tags?.map(tag => (
                  <button className=" btn btn-small black" style={{ marginRight: '5px', fontSize: '10px' }} key={tag.id}>
                    {tag.name}
                  </button>
                ))}
              </div>
              <div className="comments-likes">
                <h6 className="h">
                  Comments <span>{post.totalComments} </span>
                </h6>
                <h6 className="h">
                  Likes <span>{postlike}</span>
                </h6>
                <h6 className="h">
                  Views <span>{post.views}</span>
                </h6>
              </div>
              <img className="postImage" src={post.imageUrl} alt={post.title} />
              <section>
                <ReactMarkdown className="content" escapeHtml={false}>
                  {post.content}
                </ReactMarkdown>
                <Button shape="circle" icon={<HeartOutlined />} size={'large'} className="btn red" onClick={handleLike} />
              </section>
              <div>
                <div className="comment-section">
                  <h5 className="h">Add Comment</h5>
                  <Form.Item>
                    <Input type="text" value={comment.commentor} name="commentor" onChange={handleChange} placeholder="Enter you name" />
                  </Form.Item>
                  <Form.Item>
                    <TextArea
                      rows={4}
                      name="comment"
                      onChange={handleChange}
                      placeholder="Enter your comment here"
                      value={comment.comment}
                    />
                  </Form.Item>
                  <Button className="btn black" type="submit" onClick={handleComment}>
                    Comment
                  </Button>
                </div>

                {post.comments?.map(comment => (
                  <div key={comment.id}>
                    <Comment
                      actions={actions}
                      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="Han Solo" />}
                      key={comment.id}
                      author={comment.commentor}
                      content={comment.comment}
                      datetime={comment.commentedOn}
                    />
                    <div style={{ backgroundColor: 'floralwhite', display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
                      {comment.replies?.map(reply => (
                        <div key={reply.id}>
                          <p>{reply.reply}</p>
                          <p>{reply.repliedBy}</p>
                          <p>{reply.repliedOn}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3>LATEST</h3>
            <hr className="hr8" />
            <div className="scroll">
              <ClientPostList />
              <BackTop />
            </div>
            <div>
              <h3>SPOTIFY PLAYLIST</h3>
              <hr className="hr9" />
              <iframe
                title="This is a unique title"
                className="spotify-frame"
                src="https://open.spotify.com/embed/playlist/3ehtiZyniZjVSs9Tv5BwCl"
                height="380"
                width="350"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
            <div>
              <h3 className="controller">FIND US</h3>
              <hr className="hr10" />
              <div>
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};
export default Post;

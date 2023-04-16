import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './ProductReview.css'; // import the CSS file

const ProductReview = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      author: event.target.author.value,
      rating: rating,
      comment: event.target.comment.value,
    };
    setReviews([...reviews, newReview]);
    setRating(0);
    event.target.reset();
  };

  const StarRating = ({ value }) => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(0)}
              />
            </label>
          );
        })}
      </div>
    );
  };

  return (
    <div className='review__container'>
    <div className='review'>
      <h2>Review Product</h2>
      <form className='form' onSubmit={handleReviewSubmit}>
        <div className='form__top'>
        <label htmlFor="author">Name:</label>
        <input type="text" id="author" name="author" required />

        <label htmlFor="rating">Rating:</label>
        <div className='stars' id="rating">
          <StarRating value={rating} />
        </div>
        </div>
        <div className='form__bottom'>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" name="comment" rows="4" required />
        <button type="submit">Submit</button>
        </div>

      </form>
    </div>
    <div className='posted__review'>
      {reviews.length > 0 ? (
        <div>
          <h3>Reviews</h3>
          {reviews.map((review, index) => (
            <div className='individual__reviews' key={index}>
              <p>Name: {review.author}</p>
              <p>Rating: {review.rating} <FaStar color="#ffc107" /></p>
              <p>Comment: {review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews yet.</p>
      )}
          </div>
    </div>
  );
};

export default ProductReview;

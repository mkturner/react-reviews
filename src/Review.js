import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    // check for overflow
    // if greater than upper bound, wrap to first position
    if (number > people.length - 1) {
      return 0;
    }
    // if lesser than lower bound, wrap to last position
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  
  const nextPerson = () => {
    setIndex((index) => {
      // prefix addition shorthand for +1
      // check for overflow
      return checkNumber(++index);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      // prefix subtraction shorthand for -1
      // check for overflow
      return checkNumber(--index);
    });
  };

  const randPerson = () => {
    // generate random number with range of array length
    // then truncate the result
    const randomIndex = Math.floor(Math.random() * people.length);
    // Make sure index is not set to same value it currently has
    randomIndex === index ? nextPerson() : setIndex(randomIndex);
  };
  

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randPerson}>
        Surprise Me!
      </button>
    </article>
  );
};

export default Review;

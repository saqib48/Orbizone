import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../app/CourseCard.module.css'

const CourseCard = ({ image, title, rating, reviews, description, author, duration, students, icon1, icon2, icon3 }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={description} className={styles.image} />
        <div className={styles.buttons}>
          <button className={styles.readMore}>Read More</button>
          <button className={styles.joinNow}>Join Now</button>
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rating}>
          <span>{rating}</span>
          <span> ({reviews})</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.details}>
          <span className={styles.author}><div className='text-[#4ADE80]'>{icon1}</div>{author}</span>
          <span className={styles.duration}><div className='text-[#4ADE80]'>{icon2}</div>{duration} Hrs</span>
          <span className={styles.students}> <div className='text-[#4ADE80]'>{icon3}</div> {students} Students</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

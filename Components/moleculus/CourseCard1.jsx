import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../app/CourseCard1.module.css'

const CourseCard1 = ({ image, description, duration, students, icon2, }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={description} className={styles.image} />
      </div>
      <div className={styles.content}>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
        <div className={styles.details}>
          <span className={styles.duration}><div className='text-[#4ADE80]'>{icon2}</div>{duration} Nov 2023</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard1;

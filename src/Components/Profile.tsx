import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile(){
  const {level} = useContext(challengesContext);

  return(
    
      <div className={styles.profileContainer}>
        <img src="https://avatars.githubusercontent.com/u/46323667?s=460&u=2dd6b692dea33bb1d69c7bfced55dc754134a302&v=4" alt=""/>
     
        <div>
          <strong>Sara Romão</strong>
          <p>
            <img src="icons/level.svg" alt="Level"/>
            Level {level}
          </p>
        

          
        </div>
      </div>
  );
}
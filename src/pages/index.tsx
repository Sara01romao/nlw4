
import Head from 'next/head';
import {GetServerSideProps} from 'next';


import { CompletedChallenges } from '../Components/CompletedChallenges';
import { Countdonw } from '../Components/Countdown';
import { ExperienceBar } from "../Components/ExperienceBar";
import { Profile } from '../Components/Profile';
import { ChallengeBox } from '../Components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { challengesContext, ChallengesProvider } from '../contexts/ChallengesContext';

interface HomeProps{
      level: number;
      currentExperience: number;
      challengesCompleted: number;
}

export default function Home(props :HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentExperience={props.currentExperience} challengesCompleted={props.challengesCompleted}>
    <div className={styles.container}>

        <Head>
          <title>Início | move.it</title>
        </Head>

      <ExperienceBar/>

    <CountdownProvider>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
          <Countdonw />
        </div>

        <div>
            <ChallengeBox/>
        </div>
     </section>
     </CountdownProvider>
  </div>
  </ChallengesProvider>
   )
}

export const getServerSideProps: GetServerSideProps = async (ctx) =>{
 
  const {level, currentExperience, challengesCompleted}= ctx.req.cookies;

  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}
  


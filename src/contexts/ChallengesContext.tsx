import {createContext, ReactNode, useState} from  'react';

import challenges from '../../challenges.json';

interface Challenge{
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData{
        level: number;
       currentExperience: number;
       experienceToNextLevel: number;
       challengesCompleted: number;
       activeChallenge: Challenge;
        levelUp: () => void;
        starNewChallenge: () => void;
        resetChallenge :() => void;
}

interface ChallengesProviderProps{
  children: ReactNode;
}

export const challengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
  const [level, setlevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

const [activeChallenge, setActiveChallenge] = useState(null);

const experienceToNextLevel = Math.pow((level + 1 ) * 4, 2);


  function levelUp(){
      setlevel(level + 1);
  }


  function starNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge(){
    setActiveChallenge(null);
  }


  return (
    <challengesContext.Provider 
    value={{
      level,
       currentExperience, 
       challengesCompleted,
        levelUp,
        starNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        }}>
      {children}
    </challengesContext.Provider>
  );
}



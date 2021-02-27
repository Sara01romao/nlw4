import {createContext, ReactNode, useState} from  'react';





interface ChallengesContextData{
        level: number;
       currentExperience: number;
       challengesCompleted: number;
        levelUp: () => void;
        starNewChallenge: () => void;
}

interface ChallengesProviderProps{
  children: ReactNode;
}

export const challengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps){
  const [level, setlevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp(){
      setlevel(level + 1);
  }


  function starNewChallenge(){
    console.log('New challenge');
  }


  return (
    <challengesContext.Provider 
    value={{
      level,
       currentExperience, 
       challengesCompleted,
        levelUp,
        starNewChallenge,
        }}>
      {children}
    </challengesContext.Provider>
  );
}



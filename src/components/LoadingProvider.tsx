"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import LoadingScreen from "./LoadingScreen";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  startLoading: () => void;
  completeLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
  initialLoading?: boolean;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ 
  children, 
  initialLoading = true 
}) => {
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Simulate initial app loading
    if (initialLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setIsInitialized(true);
      }, 10000); // Set to 10 seconds as requested

      return () => clearTimeout(timer);
    }
    setIsInitialized(true);
  }, [initialLoading]);

  const startLoading = () => setIsLoading(true);
  const completeLoading = () => setIsLoading(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        startLoading,
        completeLoading,
      }}
    >
      {(!isInitialized || isLoading) && (
        <LoadingScreen 
          preloadUrls={[
            "https://my.spline.design/nexbotrobotcharacterconcept-LyJDWQ3ApMViItkPQcE5HTXd/"
            //"https://my.spline.design/100followers-6mgWi6zsY3TasHASMnBMKphn/"
          ]} 
        />
      )}
      {isInitialized && children}
    </LoadingContext.Provider>
  );
};

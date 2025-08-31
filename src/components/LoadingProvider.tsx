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
  const [isLoading, setIsLoading] = useState(false);
  const [hasShownInitialLoading, setHasShownInitialLoading] = useState(false);

  useEffect(() => {
    // Always show loading screen when component mounts
    if (initialLoading) {
      console.log('LoadingProvider: Showing loading screen for 10 seconds');
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        console.log('LoadingProvider: Loading complete, hiding loading screen');
        setIsLoading(false);
        setHasShownInitialLoading(true);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
    
    // Skip loading screen if initialLoading is false
    setIsLoading(false);
    setHasShownInitialLoading(true);
  }, [initialLoading]);

  // Add this to window for testing (remove in production)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add reset function to window for testing
      (window as any).resetLoadingState = () => {
        console.log('LoadingProvider: Reset loading state for testing');
        setIsLoading(true);
        setHasShownInitialLoading(false);
        
        const timer = setTimeout(() => {
          setIsLoading(false);
          setHasShownInitialLoading(true);
        }, 10000);
        
        return () => clearTimeout(timer);
      };
      console.log('LoadingProvider: Added resetLoadingState to window for testing');
    }
  }, []);

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
      {isLoading && (
        <LoadingScreen />
      )}
      {hasShownInitialLoading && children}
    </LoadingContext.Provider>
  );
};

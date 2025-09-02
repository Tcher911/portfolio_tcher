"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface SplashScreenProps {
    children?: React.ReactNode
    preloadUrls?: string[]
}

export default function SplashScreen(props: SplashScreenProps) {
    const { children, preloadUrls = [] } = props

    const [isContentLoaded, setIsContentLoaded] = useState(false)
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [userInteracted, setUserInteracted] = useState(false)
    const [splineLoaded, setSplineLoaded] = useState(false)
    const [splineError, setSplineError] = useState(false)

    const handleUserInteraction = useCallback(() => {
        setUserInteracted(true)
    }, [])

    const handleSplineError = useCallback(() => {
        setSplineError(true)
    }, [])

    useEffect(() => {
        // toggle scroll off
        document.body.style.overflow = "hidden"

        // Timer for 10 seconds
        const timer = setInterval(() => {
            setTimeElapsed(prev => {
                const newTime = prev + 100
                if (newTime >= 5000) { // 10 seconds
                    clearInterval(timer)
                }
                return newTime
            })
        }, 100)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        // Check if we should show content (10 seconds passed OR user interacted)
        if (timeElapsed >= 5000 || userInteracted) {
            // Add a small delay for smooth transition
            setTimeout(() => {
                setIsContentLoaded(true)
                // toggle scroll back on
                document.body.style.overflow = ""
            }, 500)
        }
    }, [timeElapsed, userInteracted])

    if (isContentLoaded) {
        return <>{children}</>
    }

    return (
        <motion.div
            id="splash-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
                position: "fixed",
                inset: 0,
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "black",
                zIndex: 1000,
                pointerEvents: "all",
                cursor: "pointer"
            }}
            onClick={handleUserInteraction}
            onTouchStart={handleUserInteraction}
            transition={{ duration: 0.5 }}
        >
            {/* Spline Design Display */}
            {!splineError && (
                <motion.div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: splineLoaded ? 1 : 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <iframe
                        src="https://my.spline.design/gitnesssplinetest-d22c968e675d14d47d7d7cc87f40140c/"
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none"
                        }}
                        className="spline-iframe"
                        title="Loading Animation"
                        loading="lazy"
                        onError={handleSplineError}
                        onLoad={() => setSplineLoaded(true)}
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                    />
                </motion.div>
            )}
            
            {/* Fallback if Spline fails to load */}
            {splineError && (
                <motion.div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ textAlign: "center", color: "white" }} className="fallback-content">
                        <motion.h2 
                            style={{ fontSize: "2rem", marginBottom: "1rem" }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                            Welcome to Tcher Portfolio
                        </motion.h2>
                        <motion.p 
                            style={{ fontSize: "1.2rem" }}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                            Loading your experience...
                        </motion.p>
                        <motion.div
                            style={{
                                width: "60px",
                                height: "4px",
                                background: "white",
                                borderRadius: "2px",
                                marginTop: "2rem"
                            }}
                            animate={{ scaleX: [0, 1] }}
                            transition={{ duration: 10, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            )}
        </motion.div>
    )
}

SplashScreen.defaultProps = {
    preloadUrls: [],
} 

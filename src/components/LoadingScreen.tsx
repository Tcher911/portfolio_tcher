"use client"

import { useEffect, useState, useCallback, useMemo } from "react"
import { motion } from "framer-motion"

interface SplashScreenProps {
    children?: React.ReactNode
    preloadUrls: string[]
}

/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/developers/#code-components-auto-sizing
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function SplashScreen(props: SplashScreenProps) {
    const { children, preloadUrls } = props

    const urls = useMemo(() => preloadUrls.filter((url: string) => Boolean(url)), [preloadUrls])
    const total = useMemo(() => urls.length, [urls])

    const [isContentLoaded, setIsContentLoaded] = useState(false)
    const [loadedAssetsCount, setLoadedAssetsCount] = useState(0)
    const [splineLoaded, setSplineLoaded] = useState(false)
    const [splineError, setSplineError] = useState(false)
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [userInteracted, setUserInteracted] = useState(false)
    
    const loadedPercentage = (loadedAssetsCount / total) * 100

    const handleUserInteraction = useCallback(() => {
        setUserInteracted(true)
    }, [])

    const loadImages = useCallback(async () => {
        // toggle scroll off
        document.body.style.overflow = "hidden"

        const preloadMedia = async (src: string) => {
            console.log("preloading", src)
            try {
                // Handle Spline design URLs - just check if they're accessible
                if (src.includes("spline.design")) {
                    // For Spline designs, use a longer timeout and more lenient check
                    try {
                        await Promise.race([
                            fetch(src, { 
                                method: 'GET',
                                cache: 'no-cache'
                            }),
                            new Promise((_, reject) => 
                                setTimeout(() => reject(new Error('Timeout')), 10000)
                            )
                        ])
                        setSplineLoaded(true)
                    } catch (error) {
                        // If fetch fails, still try to show Spline (it might work in iframe)
                        console.warn(`Spline fetch failed but will try iframe: ${src}`, error)
                        setSplineLoaded(true)
                    }
                } else if (
                    src.endsWith(".jpg") ||
                    src.endsWith(".png") ||
                    src.endsWith(".jpeg") ||
                    src.endsWith(".avif") ||
                    src.endsWith(".webp")
                ) {
                    await new Promise((resolve, reject) => {
                        const img = new Image()
                        img.onload = resolve
                        img.onerror = reject
                        img.src = src
                    })
                } else if (src.endsWith(".mp4") || src.endsWith(".webm")) {
                    // For videos, just check if they're accessible
                    await fetch(src, { method: 'HEAD' })
                } else {
                    // For other assets, just check accessibility
                    await fetch(src, { method: 'HEAD' })
                }
            } catch (error) {
                console.warn(`Couldn't preload asset ${src}`, error)
                if (src.includes("spline.design")) {
                    setSplineError(true)
                }
            }

            setLoadedAssetsCount((i) => {
                console.log(
                    `Finished preloading ${i + 1}/${total} assets (${src})`
                )
                return i + 1
            })
        }

        // Process assets sequentially to avoid overwhelming the network
        for (const url of urls) {
            await preloadMedia(url)
        }

        console.log("finished preloading")
    }, [urls, total])

    useEffect(() => {
        // Prevent multiple executions
        if (isContentLoaded) return;
        
        console.log("preloading assets:", urls)
        loadImages()
    }, [loadImages, urls, isContentLoaded])

    useEffect(() => {
        // Timer for 10 seconds
        const timer = setInterval(() => {
            setTimeElapsed(prev => {
                const newTime = prev + 100
                if (newTime >= 15000) { // 10 seconds
                    clearInterval(timer)
                }
                return newTime
            })
        }, 100)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        // Check if we should show content (10 seconds passed OR user interacted)
        if (timeElapsed >= 15000 || userInteracted) {
            // Add a small delay for smooth transition
            setTimeout(() => {
                setIsContentLoaded(true)
                // toggle scroll back on
                document.body.style.overflow = ""
            }, 500)
        }
    }, [timeElapsed, userInteracted])

    const handleSplineError = () => {
        setSplineError(true)
        console.warn("Spline design failed to load, showing fallback")
    }

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
            {urls.some(url => url.includes("spline.design")) && !splineError && (
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
                        src={urls.find(url => url.includes("spline.design"))}
                        style={{
                            width: "100%",
                            height: "100%",
                            border: "none"
                        }}
                        className="spline-iframe"
                        title="Loading Animation"
                        loading="lazy"
                        onError={handleSplineError}
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
                        <h2 style={{ fontSize: "2rem" }}>Welcome</h2>
                        <p style={{ fontSize: "1.2rem" }}>Loading your portfolio...</p>
                    </div>
                </motion.div>
            )}
            

        </motion.div>
    )
}

SplashScreen.defaultProps = {
    preloadUrls: [],
} 

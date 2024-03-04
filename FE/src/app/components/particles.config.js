import React from 'react'

const particlesConfig = {
    background: {
        color: {
            value: "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 100,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
            animation: {
                enable: true,
                speed: 20,
                sync: true
              },
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
            triangles: {
                enable: true,
                color: "#ffffff",
                opacity: 0.1
              },
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 5.5,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 75,
        },
        opacity: {
            value: 0.9,
        },
        shape: {
            type: "triangle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

export default particlesConfig;
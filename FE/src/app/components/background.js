"use client"
import React, { useState, useEffect, useMemo } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import particlesConfig from './particles.config'

const Background = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => (particlesConfig),
        [],
    );

    return (
        <div>
            <Particles
                style={{zIndex:-5, position: 'fixed'}}
                particlesLoaded={particlesLoaded}
                options={options}
            />
        </div>
    );


}

export default Background
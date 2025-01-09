"use client"
import { useEffect, useState } from "react";

export function TitleForm() {
    const [imgSrc, setImageSrc] = useState('/img/doit.png');

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 480;
            setImageSrc(isMobile ? 'img/image.png' : '/img/doit.png');
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });

    return (
        <div className="title-container">
            <img className="title-img-doit" src={imgSrc}>
            </img>
        </div>
    );
}
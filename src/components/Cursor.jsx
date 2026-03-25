import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
    const cursorRef = useRef(null);
    useEffect(() => {
        let hover = false;
        const cursor = cursorRef.current;
        if (!cursor) return;

        const mousePos = { x: 0, y: 0 };
        const cursorPos = { x: 0, y: 0 };

        // Use quickSetter for high-perf updates instead of creating new tweens each frame
        const setX = gsap.quickSetter(cursor, "x", "px");
        const setY = gsap.quickSetter(cursor, "y", "px");

        const onMouseMove = (e) => {
            mousePos.x = e.clientX;
            mousePos.y = e.clientY;
        };
        document.addEventListener("mousemove", onMouseMove);

        let rafId;
        const loop = () => {
            if (!hover) {
                const speed = 4;
                cursorPos.x += (mousePos.x - cursorPos.x) / speed;
                cursorPos.y += (mousePos.y - cursorPos.y) / speed;
                setX(cursorPos.x);
                setY(cursorPos.y);
            }
            rafId = requestAnimationFrame(loop);
        };
        rafId = requestAnimationFrame(loop);

        const onMouseOver = (e) => {
            const target = e.target.closest("[data-cursor]");
            if (target) {
                const rect = target.getBoundingClientRect();
                if (target.dataset.cursor === "icons") {
                    cursor.classList.add("cursor-icons");
                    gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
                    cursor.style.setProperty("--cursorH", `${rect.height}px`);
                    hover = true;
                }
                if (target.dataset.cursor === "disable") {
                    cursor.classList.add("cursor-disable");
                }
            }
        };

        const onMouseOut = (e) => {
            const target = e.target.closest("[data-cursor]");
            if (target) {
                cursor.classList.remove("cursor-disable", "cursor-icons");
                hover = false;
            }
        };

        document.addEventListener("mouseover", onMouseOver);
        document.addEventListener("mouseout", onMouseOut);

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseover", onMouseOver);
            document.removeEventListener("mouseout", onMouseOut);
        };
    }, []);

    return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;

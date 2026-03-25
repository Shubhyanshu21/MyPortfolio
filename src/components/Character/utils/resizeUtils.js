import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

export default function handleResize(renderer, camera, canvasDiv, character) {
    if (!canvasDiv.current) return;
    let canvas3d = canvasDiv.current.getBoundingClientRect();
    const width = canvas3d.width;
    const height = canvas3d.height;
    renderer.setSize(width, height);
    camera.aspect = width / height;

    let newZoom = 1.1;
    if (window.innerWidth < 500) {
        newZoom = 0.6;
    } else if (window.innerWidth < 768) {
        newZoom = 0.8;
    } else if (window.innerWidth < 1024) {
        newZoom = 0.9;
    }
    camera.zoom = newZoom;

    camera.updateProjectionMatrix();
    ScrollTrigger.refresh();
}

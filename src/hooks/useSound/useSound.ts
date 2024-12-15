import { useRef } from "react";
import { UseSoundEffect } from "./types";

export const useSound: UseSoundEffect = (src) => {
	const soundRef = useRef(new Audio(src));

	return () => {
		if (!soundRef.current) return;
		soundRef.current.currentTime = 0;
		soundRef.current.play();
	};
};

export function playAudio() {
  const audio = new Audio("/toast.mp3");
  audio.volume = 0.5; // Set volume to 50%
  audio.play().catch((e) => console.error("Audio play failed", e));
}

export function playErrorAudio() {
  const audio = new Audio("/error.mp3");
  audio.volume = 0.5; // Set volume to 50%
  audio.play().catch((e) => console.error("Audio play failed", e));
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { Text, Stack } from '@mantine/core';

interface YouTubePlayerProps {
  onTrackEnd: () => void;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubePlayer({ onTrackEnd }: YouTubePlayerProps) {
  const playerRef = useRef<any>(null);
  const hasIncrementedRef = useRef<boolean>(false);
  const [isReady, setIsReady] = useState(false);

  const VIDEO_ID = 'CF_jUScon7Y';

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '200',
        width: '100%',
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const onPlayerReady = () => {
    setIsReady(true);
  };

  const onPlayerStateChange = (event: any) => {
    // YT.PlayerState.PLAYING = 1
    // YT.PlayerState.ENDED = 0

    if (event.data === 1) {
      // Video is playing, start checking progress
      hasIncrementedRef.current = false;
      checkProgress();
    } else if (event.data === 0) {
      // Video ended
      if (!hasIncrementedRef.current) {
        hasIncrementedRef.current = true;
        onTrackEnd();
      }
    }
  };

  const checkProgress = () => {
    if (!playerRef.current) return;

    const checkInterval = setInterval(() => {
      if (!playerRef.current || !playerRef.current.getDuration) {
        clearInterval(checkInterval);
        return;
      }

      const currentTime = playerRef.current.getCurrentTime();
      const duration = playerRef.current.getDuration();
      const playerState = playerRef.current.getPlayerState();

      // If video is playing (state = 1) and we're at 95% or more
      if (playerState === 1 && duration > 0) {
        const progress = currentTime / duration;

        if (progress >= 0.95 && !hasIncrementedRef.current) {
          hasIncrementedRef.current = true;
          onTrackEnd();
          clearInterval(checkInterval);
        }
      }

      // Stop checking if video is paused or ended
      if (playerState !== 1) {
        clearInterval(checkInterval);
      }
    }, 1000); // Check every second
  };

  return (
    <Stack align="center" gap="md" style={{ width: '100%' }}>
      <Text size="sm" c="dimmed" ta="center">
        Écoutez la musique jusqu&apos;à la fin pour gagner +1 au compteur
      </Text>
      <div
        id="youtube-player"
        style={{
          width: '100%',
          maxWidth: '100%',
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      />
    </Stack>
  );
}

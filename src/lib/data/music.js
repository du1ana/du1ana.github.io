export const MUSIC_PLATFORMS = {
  YOUTUBE: 'youtube',
  SOUNDCLOUD: 'soundcloud',
  SPOTIFY: 'spotify'
};

export const MUSIC_TRACKS = {
  sample_track_1: {
    id: 'sample_track_1',
    name: 'Sample Track 1',
    link: null,
    platform: MUSIC_PLATFORMS.YOUTUBE,
    description: 'A sample music track.'
  },
  sample_track_2: {
    id: 'sample_track_2',
    name: 'Sample Track 2',
    link: null,
    platform: MUSIC_PLATFORMS.SOUNDCLOUD,
    description: 'Another sample track.'
  }
};

export const getMusicTrackById = (id) => MUSIC_TRACKS[id] || null;
export const getAllMusicTracks = () => Object.values(MUSIC_TRACKS);
export const getMusicTracksByPlatform = (platform) =>
  Object.values(MUSIC_TRACKS).filter(track => track.platform === platform);

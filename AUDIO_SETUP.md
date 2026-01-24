# Audio Setup Guide

## Overview

CARDTARA uses a tribe-based audio system where each of the 52 playing cards is mapped to one of 13 Indonesian tribes. Each tribe has its own distinctive background music that plays when viewing any card from that tribe.

## Tribe-to-Rank Mapping

The 52 playing cards are divided into 13 ranks, with each rank representing a specific Indonesian tribe:

| Rank | Tribe | Cards | Audio Path |
|------|-------|-------|------------|
| **A** (Ace) | Jakarta (Betawi) | AS, AH, AD, AC | `/tribes/jakarta/audio.mp3` |
| **2** | Minangkabau | 2S, 2H, 2D, 2C | `/tribes/minang/audio.mp3` |
| **3** | Papua | 3S, 3H, 3D, 3C | `/tribes/papua/audio.mp3` |
| **4** | Jawa Barat (West Java) | 4S, 4H, 4D, 4C | `/tribes/jabar/audio.mp3` |
| **5** | Jawa Tengah (Central Java) | 5S, 5H, 5D, 5C | `/tribes/jateng/audio.mp3` |
| **6** | Jawa Timur (East Java) | 6S, 6H, 6D, 6C | `/tribes/jatim/audio.mp3` |
| **7** | Baduy | 7S, 7H, 7D, 7C | `/tribes/baduy/audio.mp3` |
| **8** | Dayak |  8S, 8H, 8D, 8C | `/tribes/dayak/audio.mp3` |
| **9** | Bugis | 9S, 9H, 9D, 9C | `/tribes/bugis/audio.mp3` |
| **10** | Toraja | 10S, 10H, 10D, 10C | `/tribes/toraja/audio.mp3` |
| **J** (Jack) | Bali | JS, JH, JD, JC | `/tribes/bali/audio.mp3` |
| **Q** (Queen) | Sasak | QS, QH, QD, QC | `/tribes/sasak/audio.mp3` |
| **K** (King) | Gayo | KS, KH, KD, KC | `/tribes/gayo/audio.mp3` |

## Folder Structure

All tribe audio files are organized in the following structure:

```
public/
└── tribes/
    ├── jakarta/
    │   └── audio.mp3    # Betawi traditional music
    ├── minang/
    │   └── audio.mp3    # Minangkabau traditional music
    ├── papua/
    │   └── audio.mp3    # Papuan traditional music
    ├── jabar/
    │   └── audio.mp3    # West Java traditional music
    ├── jateng/
    │   └── audio.mp3    # Central Java traditional music
    ├── jatim/
    │   └── audio.mp3    # East Java traditional music
    ├── baduy/
    │   └── audio.mp3    # Baduy traditional music
    ├── dayak/
    │   └── audio.mp3    # Dayak traditional music
    ├── bugis/
    │   └── audio.mp3    # Bugis traditional music
    ├── toraja/
    │   └── audio.mp3    # Toraja traditional music
    ├── bali/
    │   └── audio.mp3    # Balinese gamelan music
    ├── sasak/
    │   └── audio.mp3    # Sasak traditional music  
    └── gayo/
        └── audio.mp3    # Gayo traditional music
```

## Adding Audio Files

### Step 1: Prepare Your Audio Files

1. Source or record traditional music for each tribe
2. Recommended format: **MP3** (best browser compatibility)
3. Alternative formats: WAV, OGG
4. Recommended duration: 2-5 minutes
5. Bitrate: 128-192 kbps (balance between quality and file size)

### Step 2: Place Files in Correct Folders

Place each tribe's audio file in its corresponding folder:

```bash
# Example for Jakarta (Betawi)
public/tribes/jakarta/audio.mp3

# Example for Minang
 public/tribes/minang/audio.mp3

# ... and so on for all 13 tribes
```

### Step 3: Verify File Names

**IMPORTANT**: All audio files MUST be named `audio.mp3` inside their respective tribe folders.

## How It Works

### Technical Implementation

1. **Tribe Data** (`content/tribes.ts`):
   - Contains mapping of ranks to tribes
   - Defines audio paths for each tribe

2. **Card to Tribe Lookup**:
   - Card slug (e.g., "AS") → Extract rank ("A")
   - Rank ("A") → Lookup tribe ("jakarta")
   - Tribe → Get audio path ("/tribes/jakarta/audio.mp3")

3. **Audio Player Component** (`components/AudioPlayer.tsx`):
   - Functional HTML5 audio player
   - Features: play/pause, skip ±10s, progress bar, time display
   - Responsive and accessible

4. **Integration** (`components/CardDetailClient.tsx`):
   - Automatically loads correct tribe audio based on card
   - Falls back to "Audio not available" if tribe not found

### Example Flow

```
User opens card "AS" 
→ Rank "A" extracted from slug
→ getTribeByRank("A") returns jakarta tribe data
→ AudioPlayer loads "/tribes/jakarta/audio.mp3"
→ User can play Betawi traditional music
```

## Testing

### 1. Check Folder Structure

```bash
cd public/tribes
ls
# Should show: baduy bali bugis dayak gayo jakarta jabar jateng jatim minang papua sasak toraja
```

### 2. Add a Test Audio File

Place any MP3 file in a tribe folder for testing:

```bash
# Example: Add test audio for Jakarta
cp your-test-audio.mp3 public/tribes/jakarta/audio.mp3
```

### 3. Visit a Card Page

Navigate to a card from that tribe:
- Ace cards (AS, AH, AD, AC) → Jakarta audio
- Open browser to `http://localhost:3000/id/k/AS`
- Audio player should appear with play button
- Click play to test

## Troubleshooting

### Audio Not Playing

1. **Check file exists**: Verify `audio.mp3` exists in correct tribe folder
2. **Check file name**: Must be exactly `audio.mp3` (lowercase)
3. **Check format**: MP3 is most compatible
4. **Check console**: Open browser DevTools for error messages
5. **Try different browser**: Some formats work better in specific browsers

### "Audio not available" Message

- Tribe lookup failed
- Check that rank extraction is working
- Verify `content/tribes.ts` has correct mapping

### Audio Player Not Visible

- Check that AudioPlayer component is imported
- Verify tribe data is being passed correctly
- Look for errors in browser console

## Future Enhancements

Potential improvements to consider:

1. **Volume control**
2. **Playback speed adjustment**
3. **Download audio button**
4. **Audio visualization**
5. **Playlist mode** (auto-play next tribe)
6. **Background playback** (continue playing when scrolling)

## Audio Recommendations

For authentic Indonesian tribal music:

- **Jakarta/Betawi**: Gambang Kromong, Tanjidor
- **Minang**: Saluang, Talempong
- **Papua**: Tifa drums, traditional chants
- **Jawa Barat**: Gamelan Degung, Angklung
- **Jawa Tengah**: Gamelan Jawa
- **Jawa Timur**: Ludruk music
- **Baduy**: Traditional Baduy chants
- **Dayak**: Sape (traditional lute)
- **Bugis**: Kecapi music
- **Toraja**: Bamboo flute music
- **Bali**: Gamelan Bali, Angklung
- **Sasak**: Gendang Beleq
- **Gayo**: Didong traditional music

---

**Note**: Make sure you have proper rights/licenses for any traditional music you use in the application.

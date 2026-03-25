# Snake Game V2 - Specification

**Date**: 2026-03-25
**Project**: Snake Game V2
**Status**: Phase 0 - Deep Research & Specification
**Target**: All ages (family-friendly)

---

## 1. Deep Research Summary

### 1.1 Current Snake Game (V1) Analysis
- **Issues**: Too simple, basic graphics, limited features
- **Strengths**: Child-friendly, touch controls, simple mechanics

### 1.2 Reference Games Research
Researched popular Snake games including:
- Classic Nokia Snake
- Slither.io (modern web version)
- Snake vs Block (mobile)

### 1.3 Features to Include

| Feature | Description |
|---------|-------------|
| Multiple Game Modes | Classic, Time Attack, Obstacle Course |
| Power-ups | Speed boost, Shield, Score multiplier |
| Visual Effects | Particle systems, Smooth animations |
| Sound Effects | Background music, Eat sounds, Game over |
| Levels | Progressive difficulty |
| Leaderboard | Local high scores |
| Skins | Unlockable snake skins |
| Settings | Volume, Theme options |

---

## 2. UI/UX Design

### 2.1 Screen Flow
```
┌─────────────┐
│   START    │ ← Main menu with play button
└─────┬───────┘
      │
      ▼
┌─────────────┐
│   SELECT    │ ← Mode selection
│    MODE     │
└─────┬───────┘
      │
      ▼
┌─────────────┐
│    GAME     │ ← Main game screen
│   PLAYING   │
└─────┬───────┘
      │
      ▼ (Game Over)
┌─────────────┐
│  GAME OVER │ ← Score display, retry, menu
└─────────────┘
```

### 2.2 Visual Style
- **Theme**: Neon/Cyberpunk aesthetic
- **Colors**: Dark background with glowing neon accents
- **Typography**: Modern, readable fonts
- **Animations**: Smooth transitions, particle effects

### 2.3 Color Palette
| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark Navy | #0a0a1a |
| Grid Lines | Subtle Blue | #1a1a3a |
| Snake Head | Neon Green | #00ff88 |
| Snake Body | Gradient Green | #00cc66 → #009944 |
| Food | Neon Pink | #ff0066 |
| Power-ups | Neon Yellow | #ffff00 |
| UI Text | White | #ffffff |
| UI Accent | Cyan | #00ffff |
| Danger | Red | #ff3333 |

---

## 3. Game Features

### 3.1 Game Modes

#### Classic Mode
- Eat food to grow
- Avoid walls and self
- No time limit
- Score = food eaten × 10

#### Time Attack Mode
- 60 second timer
- Eat as much food as possible
- Speed increases every 15 seconds

#### Obstacle Mode
- Random obstacles appear
- Eat food to score
- Hit obstacle = game over

### 3.2 Power-ups (Spawn randomly)
| Power-up | Effect | Duration |
|----------|--------|----------|
| ⚡ Speed | Increases speed by 50% | 5 seconds |
| 🛡️ Shield | Survive one collision | One use |
| ⭐ Score ×2 | Double points | 10 seconds |
| 🍎 Mega Food | Worth 50 points | Until eaten |

### 3.3 Snake Skins (Unlockable)
| Skin | Requirement | Colors |
|------|-------------|--------|
| Classic Green | Default | Green gradient |
| Fire | Score 500 | Orange → Red |
| Ice | Score 1000 | Cyan → Blue |
| Galaxy | Score 2000 | Purple → Pink |
| Rainbow | Score 5000 | All colors |

---

## 4. Technical Specification

### 4.1 Canvas Dimensions
- **Desktop**: 600 × 600 pixels
- **Mobile**: Responsive, fills screen
- **Grid**: 20 × 20 cells (30px each at desktop)

### 4.2 Game Loop
- **Target FPS**: 60fps (render), 15fps (game tick)
- **Tick Rate**: Adjustable based on difficulty

### 4.3 File Structure
```
snake-game-v2/
├── index.html          # Main entry
├── src/
│   ├── main.ts        # Game initialization
│   ├── game.ts        # Core game logic
│   ├── renderer.ts    # Canvas rendering
│   ├── input.ts       # Keyboard/touch controls
│   ├── ui.ts          # Menu, pause, game over screens
│   ├── audio.ts        # Sound effects
│   ├── state.ts        # Game state management
│   └── types.ts        # TypeScript types
├── public/
│   └── assets/        # Images, sounds
├── tests/             # Unit tests
└── SPEC.md
```

### 4.4 Performance Targets
- First contentful paint: < 1s
- Game start: < 2s
- Smooth 60fps animation
- Memory usage: < 50MB

---

## 5. Acceptance Criteria

### 5.1 Must Have
- [ ] Responsive canvas (desktop + mobile)
- [ ] Classic snake gameplay
- [ ] Score tracking
- [ ] High score (localStorage)
- [ ] Start/Pause/Game Over screens
- [ ] Touch controls for mobile
- [ ] Keyboard controls for desktop
- [ ] Smooth animations
- [ ] Sound effects

### 5.2 Should Have
- [ ] Multiple game modes
- [ ] Power-ups
- [ ] Snake skins
- [ ] Settings menu (volume)

### 5.3 Nice to Have
- [ ] Online leaderboard
- [ ] Social sharing
- [ ] Daily challenges

---

## 6. Implementation Phases

### Phase 1: Core Game
- [ ] Basic canvas setup
- [ ] Snake movement
- [ ] Food spawning
- [ ] Collision detection
- [ ] Score system
- [ ] Game states (menu/playing/paused/gameover)

### Phase 2: Polish
- [ ] Animations and effects
- [ ] Sound effects
- [ ] Touch controls
- [ ] Responsive design

### Phase 3: Features
- [ ] Game modes
- [ ] Power-ups
- [ ] Skins

### Phase 4: Launch
- [ ] Testing
- [ ] Performance optimization
- [ ] Deployment

---

*Last updated: 2026-03-25*
*Status: Phase 0 Complete - Ready for Phase 1*

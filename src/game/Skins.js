// Snake Game V3 - Skins System

// Available skins configuration
export const SKINS = {
    classic: {
        name: '经典',
        headColor: 0xFFCC00,    // Yellow
        bodyColor: 0xFFCC00,
        tailColor: 0xDD9900,
        eyeColor: 0xFFFFFF,
        pupilColor: 0x000000,
        tongueColor: 0xFF3333,
        unlocked: true          // Default skin
    },
    green: {
        name: '绿蛇',
        headColor: 0x4ade80,    // Green (#4ade80 from spec)
        bodyColor: 0x4ade80,
        tailColor: 0x22c55e,
        eyeColor: 0xFFFFFF,
        pupilColor: 0x000000,
        tongueColor: 0xFF3333,
        unlocked: true
    },
    blue: {
        name: '冰蛇',
        headColor: 0x60a5fa,    // Blue
        bodyColor: 0x60a5fa,
        tailColor: 0x3b82f6,
        eyeColor: 0xFFFFFF,
        pupilColor: 0x000000,
        tongueColor: 0xFF3333,
        unlocked: false,
        unlockRequirement: '得分超过 100'
    },
    red: {
        name: '火焰蛇',
        headColor: 0xf87171,    // Red
        bodyColor: 0xf87171,
        tailColor: 0xef4444,
        eyeColor: 0xFFFFFF,
        pupilColor: 0x000000,
        tongueColor: 0xFF3333,
        unlocked: false,
        unlockRequirement: '得分超过 250'
    },
    purple: {
        name: '皇家蛇',
        headColor: 0xa78bfa,    // Purple
        bodyColor: 0xa78bfa,
        tailColor: 0x8b5cf6,
        eyeColor: 0xFFFFFF,
        pupilColor: 0x000000,
        tongueColor: 0xFF3333,
        unlocked: false,
        unlockRequirement: '得分超过 500'
    },
    rainbow: {
        name: '彩虹蛇',
        headColor: 0xFF69B4,    // Rainbow gradient effect via animated color
        bodyColor: 0xFF69B4,
        tailColor: 0xFF69B4,
        eyeColor: 0xFFFFFF,
        pupilColor: 0x000000,
        tongueColor: 0xFF3333,
        unlocked: false,
        unlockRequirement: '在限时模式达到 50 分'
    }
};

// Skin storage key
const SKINS_STORAGE_KEY = 'snakeV3_skins';

export class SkinsManager {
    constructor() {
        this.currentSkin = 'classic';
        this.unlockedSkins = this.loadUnlockedSkins();
    }
    
    loadUnlockedSkins() {
        try {
            const saved = localStorage.getItem(SKINS_STORAGE_KEY);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Failed to load skins:', e);
        }
        
        // Default: only classic and green are unlocked
        return {
            classic: true,
            green: true,
            blue: false,
            red: false,
            purple: false,
            rainbow: false
        };
    }
    
    saveUnlockedSkins() {
        try {
            localStorage.setItem(SKINS_STORAGE_KEY, JSON.stringify(this.unlockedSkins));
        } catch (e) {
            console.warn('Failed to save skins:', e);
        }
    }
    
    unlockSkin(skinId) {
        if (this.unlockedSkins[skinId] !== undefined) {
            this.unlockedSkins[skinId] = true;
            this.saveUnlockedSkins();
            return true;
        }
        return false;
    }
    
    isUnlocked(skinId) {
        return this.unlockedSkins[skinId] || false;
    }
    
    setSkin(skinId) {
        if (this.isUnlocked(skinId) && SKINS[skinId]) {
            this.currentSkin = skinId;
            return true;
        }
        return false;
    }
    
    getCurrentSkin() {
        return SKINS[this.currentSkin] || SKINS.classic;
    }
    
    getSkin(skinId) {
        return SKINS[skinId] || null;
    }
    
    getAllSkins() {
        return Object.entries(SKINS).map(([id, skin]) => ({
            id,
            ...skin,
            unlocked: this.isUnlocked(id)
        }));
    }
    
    // Check and unlock skins based on score
    checkUnlocks(score, mode) {
        const toUnlock = [];
        
        if (score >= 100 && !this.isUnlocked('blue')) {
            this.unlockSkin('blue');
            toUnlock.push('blue');
        }
        if (score >= 250 && !this.isUnlocked('red')) {
            this.unlockSkin('red');
            toUnlock.push('red');
        }
        if (score >= 500 && !this.isUnlocked('purple')) {
            this.unlockSkin('purple');
            toUnlock.push('purple');
        }
        if (mode === 'time' && score >= 50 && !this.isUnlocked('rainbow')) {
            this.unlockSkin('rainbow');
            toUnlock.push('rainbow');
        }
        
        return toUnlock;
    }
    
    // Get skin colors for Three.js materials
    getSkinColors(skinId) {
        const skin = SKINS[skinId] || SKINS.classic;
        return {
            headColor: skin.headColor,
            bodyColor: skin.bodyColor,
            tailColor: skin.tailColor,
            eyeColor: skin.eyeColor,
            pupilColor: skin.pupilColor,
            tongueColor: skin.tongueColor
        };
    }
    
    // Apply skin colors to snake meshes
    applySkinToMeshes(skinId, meshes) {
        const colors = this.getSkinColors(skinId);
        
        if (meshes.headMesh && meshes.headMesh.material) {
            meshes.headMesh.material.color.setHex(colors.headColor);
        }
        if (meshes.bodyMeshes) {
            meshes.bodyMeshes.forEach(m => {
                if (m.material) m.material.color.setHex(colors.bodyColor);
            });
        }
        if (meshes.tailMesh && meshes.tailMesh.material) {
            meshes.tailMesh.material.color.setHex(colors.tailColor);
        }
        
        return colors;
    }
}

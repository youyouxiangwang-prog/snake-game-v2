/**
 * StateMachine.js - Finite State Machine for Snake V3
 * Based on SPEC.md Section 3.2
 * States: BOOT, PRELOADER, MENU, PLAYING, PAUSED, GAME_OVER
 */

export const GameState = {
    BOOT: 'boot',
    PRELOADER: 'preloader',
    MENU: 'menu',
    PLAYING: 'playing',
    PAUSED: 'paused',
    GAME_OVER: 'gameOver'
};

export class StateMachine {
    constructor() {
        this.currentState = GameState.BOOT;
        this.previousState = null;
        this.listeners = [];
        this.stateHistory = [];
    }

    /**
     * Transition to a new state
     * @param {string} newState - The state to transition to
     * @param {object} data - Optional data to pass with the transition
     */
    transition(newState, data = {}) {
        // Accept both uppercase keys (GAME_OVER) and lowercase values (gameOver)
        const validValues = Object.values(GameState);
        
        // If newState is already a valid state value, keep it
        if (!validValues.includes(newState)) {
            // Try to find as a key in GameState
            const key = newState.toUpperCase().replace(/([A-Z])/g, '_$1').replace(/^_/, '');
            if (GameState[key]) {
                newState = GameState[key];
            } else {
                console.warn(`Invalid state: ${newState}`);
                return false;
            }
        }

        const oldState = this.currentState;
        this.previousState = oldState;
        this.stateHistory.push({ from: oldState, to: newState, timestamp: Date.now() });

        // Limit history size
        if (this.stateHistory.length > 10) {
            this.stateHistory.shift();
        }

        this.currentState = newState;

        // Notify listeners
        this.notifyListeners(oldState, newState, data);

        console.log(`[StateMachine] ${oldState} → ${newState}`);
        return true;
    }

    /**
     * Check if current state matches given state
     * @param {string} state - State to check
     * @returns {boolean}
     */
    is(state) {
        return this.currentState === state ||
               this.currentState === state?.toLowerCase?.() ||
               this.currentState === GameState[state?.toUpperCase?.()];
    }

    /**
     * Get current state
     * @returns {string}
     */
    getState() {
        return this.currentState;
    }

    /**
     * Get previous state
     * @returns {string|null}
     */
    getPreviousState() {
        return this.previousState;
    }

    /**
     * Add listener for state changes
     * @param {function} callback - (fromState, toState, data) => void
     * @returns {function} Unsubscribe function
     */
    addListener(callback) {
        this.listeners.push(callback);
        return () => {
            const index = this.listeners.indexOf(callback);
            if (index > -1) this.listeners.splice(index, 1);
        };
    }

    /**
     * Remove listener
     * @param {function} callback
     */
    removeListener(callback) {
        const index = this.listeners.indexOf(callback);
        if (index > -1) this.listeners.splice(index, 1);
    }

    /**
     * Notify all listeners of state change
     */
    notifyListeners(fromState, toState, data) {
        this.listeners.forEach(callback => {
            try {
                callback(fromState, toState, data);
            } catch (e) {
                console.error('State listener error:', e);
            }
        });
    }

    /**
     * Reset state machine to initial state
     */
    reset() {
        this.currentState = GameState.BOOT;
        this.previousState = null;
        this.stateHistory = [];
    }
}

// Export singleton instance for convenience
export const stateMachine = new StateMachine();
